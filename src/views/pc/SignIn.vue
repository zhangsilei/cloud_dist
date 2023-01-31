<template>
  <div class="signin-container">
    <sign-base :type="TYPE_SIGN_IN" />
  </div>
</template>

<script>
import SignBase, { TYPE_SIGN_IN } from '@/components/SignBase.vue';

export default {
  components: { SignBase },
  name: 'SignIn',
  data() {
    return {
      TYPE_SIGN_IN,
    };
  },
};
</script>

<style lang="scss" scoped>
.signin-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
