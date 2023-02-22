<template>
  <div class="resource-container">
    <!-- 头部搜索 -->
    <div class="search-wrap">
      <n-input round placeholder="搜索">
        <template #prefix>
          <n-icon :component="IosSearch" />
        </template>
      </n-input>
      <n-avatar
        class="user"
        round
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        @click="navigateToUser"
      />
    </div>
    <!-- 分类标签 -->
    <div class="tags-wrap">
      <n-tag
        v-for="item in tags"
        size="small"
        round
        :color="selectedTag.id === item.id ? activeTagStyle : undefined"
        @click="changeTag(item)"
      >
        {{ item.name }}
      </n-tag>
    </div>
    <!-- 子分类列表 -->
    <div class="list-wrap">
      <n-grid x-gap="12" y-gap="12" :cols="4">
        <n-gi v-for="item in dataList" @click="navigateToList(item)">
          <img class="poster" :src="parseUrlToPath(item.picture_url)" />
          <div>{{ item.name }}</div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script setup>
import { NTag, NInput, NAvatar, NIcon, NImage, NGrid, NGi } from 'naive-ui';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getCategorieList } from '@/api/categories';
import { getResourceList } from '@/api/resource';
import { parseUrlToPath } from '@/common/global';

const router = useRouter();

// 头部搜索
function navigateToUser() {
  router.push('/m/profile');
}

// 分类标签
const tags = ref(null);
const selectedTag = ref(null);
const activeTagStyle = { textColor: '#ed3939', borderColor: '#ed3939' };

async function renderTags() {
  const res = await getCategorieList();
  tags.value = res.items || [];
  selectedTag.value = res.items[0] || {};
}

function changeTag(item) {
  selectedTag.value = item;
}

renderTags();

// 子分类列表
const dataList = ref(null);
const dataListParams = reactive({
  page_num: 1,
  page_size: 10,
  category_id: null,
});

async function renderList() {
  const res = await getResourceList(dataListParams);
  dataList.value = res.resources || [];
}

watch(selectedTag, (val) => {
  // TODO: 加了category_id会报500
  // dataListParams.category_id = val.id;
  renderList();
});

function navigateToList(item) {
  router.push({
    path: '/m/resource/list',
    query: { category_id: item.id, name: item.name },
  });
}
</script>

<style lang="scss" scoped>
.resource-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  flex-direction: column;
  .search-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user {
      margin-left: 10px;
      min-width: 34px;
    }
  }
  .tags-wrap {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow-x: scroll;
    & > .n-tag {
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
  .list-wrap {
    text-align: center;
    .poster {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
