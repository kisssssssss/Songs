/**
 * @description 基础类型
 */
interface baseType {
	id: number;
	name: string;
}

/**
 * @description 单个歌手
 */
export interface artistType extends baseType {}

/**
 * @description 多个歌手
 */
export interface artistsType {
	artistsStr: string;
	artists: Array<artistType>;
}

export interface artistBriefType extends baseType {
	cover: string;
	alias?: string[];
}

/**
 * @description 歌手详细信息
 */
export interface artistDetailedType {
	info: artistInfoType;
	introduction: artistIntroductionType;
}
export type artistInfoType = {
	name: string;
	alias: Array<string>;
	cover: string;
	signature?: string;
	count: {
		song: number;
		album: number;
		mv: number;
		fans: number;
	};
};
export type artistIntroductionType = {
	briefIntroduction: string;
	item: Array<{
		title: string;
		content: string;
	}>;
};

/**
 * @description 专辑信息
 */
export interface albumType extends baseType {
	cover: string;
	coverSize: number;
}
/**
 * @description 专辑简略信息
 */
export interface albumBriefType extends baseType {
	cover: string;
	coverSize: number;
	songCount: number;
	artists: artistsType;
}
/**
 * @description 专辑信息
 */
export interface albumDetailedType {
	songs: Array<songDetailedType>;
	artists: artistsType;
	album: {
		id: number | string;
		name: string;
		cover: string;
		coverSize: number;

		publishTime: string;
		description: string;
		type: string;
		subscribed: boolean;
		subTime: string;
		songCount: number;
		shareCount: number | string;
		commentCount: number | string;
		subscribedCount: number | string;
	};
}

/**
 * @description 单曲简略信息(仅包含歌曲id……)
 */
interface songBriefType extends baseType {
	alia?: Array<string>;
	cover: string;
	coverSize: number;
	artistsStr: string;
	url?: string;
	isLiked?: boolean;
}

/**
 * @description 单曲详细信息(包含歌曲id、歌手、专辑……)
 */
export interface songDetailedType {
	song: songBriefType;
	artists: artistsType;
	album: albumType;
}

/**
 * @description 歌单简略信息
 * */
export interface listBriefType extends baseType {
	cover: string;
	coverSize: number;
	songCount: number;
	playCount: number | string;
	subscribed?: boolean;
}
/**
 * @description 歌单详细信息
 */
export interface listDetailedType {
	list: {
		id: number | string;
		name: string;
		cover: string;
		coverSize: number;
		
		updateTime: string;
		description: string;
		tags: Array<string>;
		subscribed: boolean;
	};
	count: {
		songCount: number;
		playCount: number | string;
		shareCount: number | string;
		commentCount: number | string;
		subscribedCount: number | string;
	};
	user: {
		id: number | string;
		name: string;
		cover: string;
	};
}

/**
 * @description 搜索建议
 * */
export interface suggestionsType {
	artists?: Array<baseType>;
	albums?: Array<suggestionItem>;
	songs?: Array<suggestionItem>;
	list?: Array<baseType>;
}
type suggestionItem = {
	id: number;
	name: string;
	artistStr: string;
};

/**
 * @description 歌词基础类型
 * */
export type lyricBaseType = {
	time: number;
	content: string;
	translation?: string;
};
/**
 * @description 歌词基础类型
 * */
export type currentLyricType = {
	index: number;
	content: string;
	translation?: string;
};
/**
 * @description 请求返回的歌词类型
 * */
export type lyricsType = {
	lyricArray: lyricBaseType[] | null;
	translator: {
		id: number;
		name: string;
	} | null;
};
/**
 * @description 评论类型
 * */
export interface commentType {
	id: string | number;
	content: string;
	time: string;
	timeStamp: number;
	liked: boolean;
	likeCount: number;
	replayCount: number;
	user: {
		id: string | number;
		name: string;
		cover: string;
		ip?: {
			ip: string | null | undefined;
			location: string | null | undefined;
		};
	};
}

/**
 * @description 资源类型
 * */
export type resources = "歌曲" | "mv" | "歌单" | "专辑" | "电台节目" | "视频" | "动态" | "电台";

export interface SubscribedNewSongsType {
	resourceId: number;
	resourceName: string;
	resourceIdCover: string;
	publishTime: number;
	publishDate: string;
	type: string;
	artist: {
		id: number;
		name: string;
		cover: string;
	};
	songs: songDetailedType[];
}

export type themeType = "light" | "light2" | "dark" | "dark2";

export type searchType =
	| "单曲"
	| "专辑"
	| "歌手"
	| "歌单"
	| "用户"
	| "MV"
	| "歌词"
	| "电台"
	| "视频"
	| "综合"
	| "声音";

export interface searchResultType {
	count: number;
	result: songDetailedType[] | albumBriefType[] | artistBriefType[] | listBriefType[];
}

export interface videoType {
	id: number;
	name: string;
	cover: string;
	artist: {
		id: number;
		name: string;
	};
	playCount: number;
	publishTime: string;
	duration: number;
}
