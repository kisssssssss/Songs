<template>
	<div class="back">
		<div class="head">
			<el-row>
				<el-col :span="5"><span>我的歌单</span></el-col>
				<el-col :span="8" :offset="11">
					<el-button text @click="changeVisible">新建歌单</el-button>
					<el-button :text="!deleting" @click="changeDeleting" :type="buttonType">
						删除歌单
					</el-button>
					<el-popconfirm
						title="请确认是否删除全部歌单"
						confirm-button-text="确认"
						cancel-button-text="取消"
						confirm-button-type="danger"
						@confirm="deleteAllList"
					>
						<template #reference>
							<el-button text>删除所有歌单</el-button>
						</template>
					</el-popconfirm>
				</el-col>
			</el-row>
		</div>
		<div class="content">
			<el-space wrap size="large" alignment="flex-start">
				<div v-for="(item, index) in list" :class="{ card: deleting }" :key="item.id">
					<div class="cover" @click="deleteOneList(index)">删除该歌单</div>
					<list-card :list="item" width="160px" />
				</div>
			</el-space>
		</div>
	</div>
	<el-dialog v-model="createBoxVisible" title="新建歌单" align-center width="30%">
		<el-form :model="form" ref="ruleFormRef" :rules="rules">
			<el-form-item label="歌单名称" prop="name">
				<el-input v-model="form.name" autocomplete="off" />
			</el-form-item>
			<el-form-item label="歌单类型">
				<el-radio-group v-model="form.type">
					<el-radio label="NORMAL">默认</el-radio>
					<el-radio label="SHARED">共享歌单</el-radio>
					<el-radio label="VIDEO">视频歌单</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="隐私歌单">
				<el-radio-group v-model="form.isPrivate">
					<el-radio :label="true" size="large">是</el-radio>
					<el-radio :label="false" size="large">否</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="changeVisible"> 取消 </el-button>
				<el-button type="primary" @click="create"> 确认 </el-button>
			</span>
		</template>
	</el-dialog>
</template>
<script setup lang="ts">
import { list } from "type/type";
import { message } from "utils/notice";
import { LIST } from "service/api";
import type { FormRules } from "element-plus";
import { useUserStore } from "store/module/user";
import { ref, onMounted, reactive } from "vue";
import listCard from "components/content/list-recommend/list-recommend-item.vue";

const store = useUserStore();

onMounted(async () => {
	refresh();
});

const list = ref<list[]>([]);
// 刷新歌单数据
const refresh = async (): Promise<boolean> => {
	list.value = await LIST.getMine(store.netease_id, store.netease_name);
	return list.value ? true : false;
};

// 删除状态
const buttonType = ref<"" | "danger">("");
const deleting = ref<boolean>(false);
function changeDeleting() {
	deleting.value = !deleting.value;
	if (deleting.value) {
		buttonType.value = "danger";
	} else {
		buttonType.value = "";
	}
}

// 删除指定歌单
async function deleteOneList(index: number) {
	if (await LIST.delete(list.value[index].id)) {
		list.value.splice(index, 1);
		message({
			message: "删除歌单成功",
			type: "success",
		});
		refresh();
	} else {
		message({
			message: "删除歌单失败",
			type: "error",
		});
	}
}
// 删除所有歌单
async function deleteAllList() {
	message({
		message: "已删除全部歌单（该功能未实现，新注册个账号再说）",
		type: "success",
	});
}

// 创建歌单
const form: {
	name: string;
	type: "NORMAL" | "SHARED" | "VIDEO";
	isPrivate: boolean;
} = reactive({
	name: "",
	type: "NORMAL",
	isPrivate: false,
});
const rules = reactive<FormRules>({
	name: [
		{ required: true, message: "请输入歌单名", trigger: "blur" },
		{ min: 1, max: 40, message: "歌单名长度应小于40", trigger: "blur" },
	],
});
const createBoxVisible = ref<boolean>(false);
function changeVisible() {
	createBoxVisible.value = !createBoxVisible.value;
}
async function create() {
	let { name, type, isPrivate } = form;
	const r = await LIST.create(name, type, isPrivate);
	if (r.success) {
		if (await refresh()) {
			message({
				message: r.message,
				type: "success",
			});
			changeVisible();
		} else {
			message({
				message: "刷新歌单失败",
				type: "error",
			});
		}
	} else {
		message({
			message: r.message,
			type: "error",
		});
	}
}
</script>
<style scoped lang="less">
@import "style/common.less";
.back {
	margin: 2% 5%;
	.head {
		span {
			font-size: 22px;
			font-weight: bolder;
		}
	}
	.content {
		margin: 50px auto;
		.card {
			position: relative;
			&:hover > div[class="cover"] {
				position: absolute;
				top: 0;
				z-index: 20;
				.size(160px,160px);
				.flex-centerY();
				cursor: pointer;
				border-radius: 5px;
				color: var(--theme-color);
				background-color: rgba(70, 70, 70, 0.8);
			}
		}
		.cover {
			display: none;
		}
	}
}
</style>
