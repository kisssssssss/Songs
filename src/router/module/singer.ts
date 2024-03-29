const detailedSinger = () => import("@/views/singer/detailed.vue");
const subscribeSinger = () => import("@/views/singer/subscribe.vue");
const hotSinger = () => import("@/views/singer/hot.vue");
const topSinger = () => import("@/views/singer/top.vue");
const allSinger = () => import("@/views/singer/all.vue");

module.exports = [
	{
		path: "/singer",
		children: [
			{
				// 歌手详情
				path: ":id",
				component: detailedSinger,
				meta: {
					requireLogin: false,
					searchVisible: true,
					menuVisible: true,
				},
			},
			// 关注歌手
			{
				path: "subscribe",
				component: subscribeSinger,
				meta: {
					requireLogin: true,
					searchVisible: true,
					menuVisible: true,
				},
			},
			// 热门歌手
			{
				path: "hot",
				component: hotSinger,
				meta: {
					requireLogin: false,
					searchVisible: true,
					menuVisible: true,
				},
			},
			// 歌手排行榜
			{
				path: "top",
				component: topSinger,
				meta: {
					requireLogin: false,
					searchVisible: true,
					menuVisible: true,
				},
			},
			// 全部歌手
			{
				path: "all",
				component: allSinger,
				meta: {
					requireLogin: false,
					searchVisible: true,
					menuVisible: true,
				},
			},
		],
	},
];
