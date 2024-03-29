import { defineStore } from "pinia";
import { useDataStore } from "./data";
import { throttle } from "utils/utils-common";
import { SONG } from "service/api";
import { song, lyrics, lyricItem, currentLyricItem } from "type/type";

type SongsState = {
	// audio对象
	audio?: HTMLAudioElement;
	// 歌曲播放时间（使用SongStore.audio.currentTime会使进度条拖拽卡顿）
	currentTime: number;
	// (不，单曲，播放列表)循环
	loop: "no" | "song" | "playList";
	// 当前歌曲
	song?: song;
	// 歌词
	lyricObject: lyrics;
	// 当前歌词
	currentLyric: currentLyricItem;
	// 是否正在播放
	isPlaying: boolean;
};

export const useSongStore = defineStore("SongStore", {
	state: (): SongsState => {
		return {
			audio: undefined,
			currentTime: 0,
			loop: "playList",
			song: undefined,
			lyricObject: { lyrics: null, translator: null },
			currentLyric: { content: "", translation: "", index: 0 },
			isPlaying: false,
		};
	},
	getters: {
		lyric(state): lyricItem[] | null {
			return state.lyricObject.lyrics;
		},
		maxTime(state) {
			return state.audio?.duration;
		},
	},
	actions: {
		/**
		 * @description 初始化audio对象,初始化监听事件
		 * */
		init_audio(audio: HTMLAudioElement) {
			this.audio = audio;
			// 歌曲播放结束
			audio.addEventListener("ended", () => {
				this.update_isPlaying(false);
				this.currentTime = 0;
			});
			// audio更新
			audio.addEventListener(
				"timeupdate",
				throttle(() => {
					if (this.audio) {
						// 更新当前播放时间
						this.currentTime = this.audio?.currentTime;
						// 更新当前歌词
						this.update_currentLyric();
					}
				}, 500)
			);
		},
		/**
		 * @description audio的一些操作函数（播放、暂停、下一首、上一首）
		 * */
		operate_audio(operation: "play" | "pause" | "next" | "prev") {
			if (this.audio?.currentSrc) {
				const DataStore = useDataStore();
				switch (operation) {
					case "play":
						this.audio.play();
						this.update_isPlaying(true);
						break;
					case "pause":
						this.audio.pause();
						this.update_isPlaying(false);
						break;
					case "next":
						this.play(
							DataStore.playList[
								(DataStore.playList.indexOf(this.song!) + 1) % DataStore.playList.length
							]
						);
						break;
					case "prev":
						const length = DataStore.playList.length;
						let index = DataStore.playList.indexOf(this.song!);
						if (index < 1) {
							index = length;
						}
						this.play(DataStore.playList[(index - 1) % length]);
						break;
					default:
						break;
				}
			}
		},
		/**
		 * @description 修改audio(声音，速率,时间)
		 * */
		modify_audio(target: "volume" | "rate" | "time", newValue: number) {
			if (this.audio) {
				switch (target) {
					case "volume":
						this.audio.volume = newValue;
						break;
					case "rate":
						// 火狐速率范围是0.25 ~ 5 , Google 速率上限是 16。
						if (newValue <= 5 && newValue >= 0.25) {
							this.audio.playbackRate = newValue;
						}
						break;
					case "time":
						this.audio.currentTime = newValue;
						break;
				}
			}
		},
		/**
		 * @description 初始化audio对象,初始化监听事件
		 * */
		update_loop(mode: "no" | "song" | "playList") {
			this.loop = mode;
		},
		/**
		 * @description 播放歌曲
		 * */
		async play(value: song) {
			// 获取歌曲播放链接
			if (!value.url) value.url = await SONG.getUrl(value.id);
			// 判断是否我喜欢的歌曲
			value.isLiked = useDataStore().check_song_isLiked(value.id);
			// 获取歌词
			this.lyricObject = await SONG.getLyrics(value.id);
			// 修改播放状态
			this.update_isPlaying(true);
			// 显示播放器
			const { audioDisplayStatus, update_audioDisplayStatus } = useDataStore();
			audioDisplayStatus === "hidden" && update_audioDisplayStatus("min");
			this.song = value;
		},
		/**
		 * @description 喜欢歌曲(默认当前播放歌曲)
		 * */
		async likeSong(isLiked: boolean, id?: number | null) {
			if (this.song?.id) {
				const res: boolean = await SONG.like(id || this.song?.id, isLiked);
				if (res && !isLiked) {
					// showSuccessMessage("成功移出我喜欢的音乐");
					this.song.isLiked = isLiked;
				} else if (res && isLiked) {
					// showSuccessMessage("成功添加到我喜欢的音乐");
					this.song.isLiked = isLiked;
				} else {
					// showErrorMessage("移出/添加 错误");
				}
				// 刷新喜欢的歌曲
				useDataStore().refresh_likedSongsID();
			}
		},
		/**
		 * @description 更新播放状态
		 * */
		update_isPlaying(value: boolean) {
			this.isPlaying = value;
		},
		/**
		 * @description 更新当前歌词
		 * */
		update_currentLyric() {
			if (this.lyric && this.audio) {
				for (let i = 0; i < this.lyric.length; i++) {
					if (this.audio.currentTime < this.lyric[i].time) {
						if (this.currentLyric.content != this.lyric[i - 1].content) {
							this.currentLyric = {
								content: this.lyric[i - 1].content,
								translation: this.lyric[i - 1].translation,
								index: i - 1,
							};
						}
						break;
					}
				}
			}
		},
	},
});
