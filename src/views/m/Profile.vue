<template>
  <div class="profile-container">
    <!-- 头部导航 -->
    <page-header title="个人中心" @back="goBack" style="padding: 0 10px" />
    <!-- 用户信息 -->
    <div class="user-wrap">
      <n-avatar round :size="50" :src="headerUser" />
      <div class="user">{{ user }}</div>
    </div>
    <!-- 操作栏 -->
    <div class="action-wrap">
      <div class="action" @click="goToActivationPage">
        <div class="label">Enter activation code</div>
        <n-icon><ArrowForwardIosOutlined /></n-icon>
      </div>
      <div class="action" @click="goToModifyPwdPage">
        <div class="label">Update Password</div>
        <n-icon><ArrowForwardIosOutlined /></n-icon>
      </div>
    </div>
    <!-- 登出 -->
    <div class="signout-wrap" @click="logout">
      <div>Sign Out</div>
    </div>
  </div>
</template>

<script setup>
import { NIcon, NAvatar } from 'naive-ui';
import { getUser } from '@/common/cookie';
import { ArrowForwardIosOutlined } from '@vicons/material';
import { logout } from '@/common/global';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/m/PageHeader';
import headerUser from '@/assets/header_user.png';

const router = useRouter();

// 头部导航
function goBack() {
  router.go(-1);
}

// 用户信息
const user = getUser();

// 操作栏
function goToActivationPage() {
  router.push('/m/activation');
}
function goToModifyPwdPage() {
  router.push('/m/modifypwd');
}
</script>

<style lang="scss" scoped>
$itemHeight: 50px;

.profile-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  box-sizing: border-box;
  & > div {
    background-color: #fff;
  }
  .user-wrap {
    display: flex;
    align-items: center;
    padding: 20px;
    .user {
      margin-left: 20px;
    }
  }
  .action-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    color: rgb(127, 127, 127);
    .action {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $itemHeight;
      padding: 0 10px;
      border-bottom: 1px solid #eee;
    }
  }
  .signout-wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: $itemHeight;
    text-align: center;
    line-height: $itemHeight;
    color: rgb(237, 56, 56);
  }
}
</style>
