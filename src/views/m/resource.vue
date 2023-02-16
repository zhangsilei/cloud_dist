<template>
  <div class="resource-container">
    <div class="header">
      <n-input round placeholder="搜索">
        <template #prefix>
          <n-icon :component="IosSearch" />
        </template>
      </n-input>
      <n-avatar
        class="user"
        round
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>

    <div class="category">
      <n-tag
        v-for="item in checkList"
        size="small"
        round
        :color="selectedTag.id === item.id ? activeStyle : undefined"
        @click="selectCatogry(item)"
      >
        Game1
      </n-tag>
    </div>

    <div class="content">
      <div class="item" v-for="item in dataList" @click="navigateToList(item)">
        <n-image
          class="img"
          width="35"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          preview-disabled
        />
        <div>分区1</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NTag, NInput, NAvatar, NIcon, NImage } from 'naive-ui';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dataList = [
  {
    id: 2,
    id: 3,
  },
];
const selectedTag = ref(null);
const checkList = [
  {
    id: 0,
  },
  {
    id: 1,
  },
];

selectedTag.value = checkList[0];

const activeStyle = { textColor: '#ed3939', borderColor: '#ed3939' };

function selectCatogry(item) {
  selectedTag.value = item;
}

function navigateToList(item) {
  selectCatogry.value = item;
  router.push({
    path: '/m/resource/list',
    query: { id: item.id },
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user {
      margin-left: 10px;
      width: auto;
    }
  }
  .category {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow-x: scroll;
    & > .n-tag {
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
  .content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    overflow-y: scroll;
    flex: 1;
    .item {
      width: 25%;
      text-align: center;
      margin-bottom: 10px;
      .img {
        border-radius: 50%;
      }
    }
  }
}
</style>
