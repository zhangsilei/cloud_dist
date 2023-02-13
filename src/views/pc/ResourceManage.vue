<template>
  <div class="resource-manage-container">
    <categorie-tree class="categorie-tree-wrap" />

    <div class="resource-wrap">
      <n-space class="filter">
        <n-form-item label-placement="left" label="关键字">
          <n-input v-model:value="filter.query"></n-input>
        </n-form-item>
        <n-form-item label-placement="left">
          <n-button type="primary" @click="query"> 查询 </n-button>
        </n-form-item>
        <n-form-item label-placement="left">
          <n-button @click="reset"> 重置 </n-button>
        </n-form-item>
      </n-space>

      <n-space class="action">
        <n-button type="primary" @click="onClickUpload(TYPE_VIDEO)">
          上传视频
        </n-button>
        <n-button type="primary" @click="onClickUpload(TYPE_IMAGE)">
          上传图片
        </n-button>
      </n-space>
    </div>

    <popup-window
      v-model="resource.isShow"
      :title="resource.title"
      @on-confirm="onResourceConfirm"
    >
      <n-form
        ref="resourceRef"
        :model="resource.formData"
        :rules="resource.rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="所在分区"> 一级分区/二级分区 </n-form-item>
        <n-form-item label="名称" path="name">
          <n-input v-model:value="resource.formData.name" />
        </n-form-item>
        <n-form-item
          v-if="resource.type === TYPE_VIDEO"
          label="视频"
          path="description"
        >
          <n-upload
            multiple
            directory-dnd
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :max="5"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <CameraOutline />
                </n-icon>
              </div>
              <n-text style="font-size: 14px"> 添加视频 </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                （图片大小不超过100M）
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item label="封面图片" path="pic">
          <n-upload
            multiple
            directory-dnd
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :max="5"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <Photo />
                </n-icon>
              </div>
              <n-text style="font-size: 14px"> 添加照片 </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                （图片大小不超过100M）
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item label="描述" path="description">
          <n-input v-model:value="resource.formData.description" />
        </n-form-item>
      </n-form>
    </popup-window>

    <!-- <n-spin :show="loading">
      <n-space v-if="dataList.length" vertical size="large">
        <div class="filter">
          <n-input round placeholder="关键字">
            <template #prefix>
              <n-icon :component="IosSearch" />
            </template>
          </n-input>
          <n-button
            type="primary"
            attr-type="button"
            style="margin: 0 10px"
            @click="queryResource"
          >
            查询
          </n-button>
          <n-button attr-type="button" @click="reset"> 重置 </n-button>
        </div>

        <div class="action">
          <n-button
            type="primary"
            attr-type="button"
            @click="isShowUpload = true"
          >
            上传视频
          </n-button>
        </div>

        <div class="content">
          <n-grid :x-gap="8" :y-gap="8" :cols="8">
            <n-grid-item v-for="(item, index) in state.dataList" :key="index">
              <video-card
                :file-name="item.fileName"
                :like-num="item.likeNum"
                :authority="item.authority"
              ></video-card>
            </n-grid-item>
          </n-grid>
        </div>
      </n-space>
      <n-empty v-else class="empty-data" description="暂无分区数据">
        <template #extra>
          <n-button size="small" @click="addCategorie">新建分区</n-button>
        </template>
      </n-empty>
    </n-spin> -->

    <!-- <popup-window
      v-model="isShowCategorieAlert"
      title="创建分区"
      @on-confirm="addCategorie"
    >
      <n-form
        ref="categorieFormRef"
        :model="categorieFormData"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="分区名称" path="name">
          <n-input
            v-model:value="categorieFormData.name"
            placeholder="请输入"
          />
        </n-form-item>
        <n-form-item label="分区描述" path="description">
          <n-input
            v-model:value="categorieFormData.description"
            placeholder="请输入"
          />
        </n-form-item>
      </n-form>
    </popup-window> -->
  </div>
</template>

<script setup>
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NInput,
  NTag,
  NSpace,
  NGrid,
  NGridItem,
  NButton,
  NForm,
  NFormItem,
  NSpin,
  NEmpty,
  NUpload,
  NUploadDragger,
  NText,
  NP,
} from 'naive-ui';
import { ref, reactive } from 'vue';
import { CameraOutline } from '@vicons/ionicons5';
import { Photo } from '@vicons/tabler';
import DirCard from '@/components/pc/DirCard';
import VideoCard from '@/components/pc/VideoCard';
import PopupWindow from '@/components/pc/PopupWindow';
import CategorieTree from '@/components/pc/CategorieTree';
import { getCategorieList } from '@/api/categories';
import { onlyAllowNumber } from '@/common/global';

const TYPE_VIDEO = 0;
const TYPE_IMAGE = 1;

const filter = reactive({ query: '' });
const resourceRef = ref(null);
const resource = reactive({
  isShow: false,
  title: '上传视频',
  type: null,
  formData: ref({
    name: null,
    description: null,
    pic: null,
  }),
});

function onResourceConfirm() {}

function onClickUpload(type) {
  resource.type = type;
  resource.isShow = true;
}

// let isShowUpload = ref(false);
// const state = reactive({
//   dataList: [
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: false },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//     { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
//   ],
// });

// function query() {}
</script>

<style lang="scss" scoped>
.resource-manage-container {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .categorie-tree-wrap {
    min-width: 200px;
    border-right: 1px solid #eee;
  }
  .resource-wrap {
    padding-left: 20px;
  }

  .empty-data {
    margin-top: 50%;
    transform: translateY(-50%);
  }
  .filter {
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;
  }

  .action {
  }
  .content {
  }
}
</style>

<style lang="scss">
.n-breadcrumb {
  padding: 0;
  margin-right: 50px;
}
.n-input {
  max-width: 300px;
}
.n-tag {
  cursor: pointer;
}
</style>
