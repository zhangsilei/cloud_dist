<template>
  <div class="resource-container">
    <div class="top">
      <n-breadcrumb separator=">">
        <n-breadcrumb-item v-for="(item, index) in breadcrumbCategory">
          {{ item }}
          <span v-if="index !== breadcrumbCategory.length - 1">/</span>
        </n-breadcrumb-item>
      </n-breadcrumb>
      <n-input round placeholder="Search">
        <template #prefix>
          <n-icon :component="IosSearch" />
        </template>
      </n-input>
    </div>

    <div class="sort">
      <n-space>
        <span class="label">排序方式</span>
        <n-tag
          size="small"
          round
          :color="isDefault ? activeStyle : undefined"
          @click="sort(SORT_TYPE_DEFAULT)"
        >
          默认
        </n-tag>
        <n-tag
          size="small"
          round
          :color="isPorpular ? activeStyle : undefined"
          @click="sort(SORT_TYPE_POPULAR)"
        >
          人气
        </n-tag>
      </n-space>
    </div>

    <div class="content">
      <n-grid :x-gap="8" :y-gap="8" :cols="8">
        <n-grid-item v-for="(item, index) in state.fileNames" :key="index">
          <dir-card :file-name="item"></dir-card>
        </n-grid-item>
        <n-grid-item v-for="(item, index) in state.dataList" :key="index">
          <video-card
            :file-name="item.fileName"
            :like-num="item.likeNum"
            :authority="item.authority"
          ></video-card>
        </n-grid-item>
      </n-grid>
      <n-pagination
        style="justify-content: flex-end"
        v-model:page="query.page_num"
        :page-count="pageCount"
      />
    </div>
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
} from 'naive-ui';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { reactive, computed, watch, ref } from 'vue';
import DirCard from '@/components/pc/DirCard';
import VideoCard from '@/components/pc/VideoCard';
import { useStore } from 'vuex';
import {
  getResourceList,
  createResource,
  getResourceDetail,
  deleteResource,
  updateResource,
} from '@/api/resource';

const store = useStore();

const SORT_TYPE_DEFAULT = 'like_num';
const SORT_TYPE_POPULAR = 'like_num';
const pageCount = ref(null);
const query = reactive({
  page_num: 1,
  page_size: 10,
  category_id: null,
  key: null,
  order_by: null,
  // order_type: '',
});
const state = reactive({
  fileNames: ['Videos', 'Photos'],
  breadcrumbs: [],
  dataList: null,
});
const isDefault = computed(() => state.order_by === SORT_TYPE_DEFAULT);
const isPorpular = computed(() => state.order_by === SORT_TYPE_POPULAR);

const activeStyle = { textColor: '#ed3939', borderColor: '#ed3939' };
const selectedCategory = ref(null);
const breadcrumbCategory = ref([]);

function sort(type) {
  state.order_by = type;
}

function filterTableMater(id, arr) {
  const queue = [...arr];
  while (queue.length) {
    const o = queue.shift();
    if (o.id === id) return o;
    queue.push(...(o.items || []));
  }
}

function getBreadcrumbCategory(arr, id, result = []) {
  const re = filterTableMater(id, arr);
  result.unshift(re.name);
  if (re.parent_category_id) {
    return getBreadcrumbCategory(arr, re.parent_category_id, result);
  }
  return result;
}

async function renderResources() {
  query.category_id = selectedCategory.value;
  const res = await getResourceList(query);
  state.dataList = res.resources || [];
  pageCount.value =
    res.total % query.page_size
      ? res.total / query.page_size
      : res.total / query.page_size + 1;
  // loading.value = false;
}

watch(store.state, (val) => {
  let id = val.selectedCategory.dirType
    ? val.selectedCategory.category_id
    : val.selectedCategory.id;
  selectedCategory.value = id;
  breadcrumbCategory.value = getBreadcrumbCategory(val.allCategories, id);
  if (val.selectedCategory.dirType) {
    renderResources();
  }
});
</script>

<style lang="scss" scoped>
.resource-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .sort {
    margin-top: 10px;
    .label {
      margin-right: 10px;
      margin-left: 5px;
      color: #7f7f7f;
      font-size: 13px;
    }
  }
  .content {
    margin-top: 10px;
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
