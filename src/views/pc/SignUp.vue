<template>
  <div class="signup-container">
    <sign-base :type="TYPE_SIGN_UP" />
  </div>
</template>

<script>
import SignBase, { TYPE_SIGN_UP } from '@/components/SignBase.vue';

export default {
  components: { SignBase },
  name: 'SignUp',
  data() {
    return {
      TYPE_SIGN_UP,
    };
  },
};
</script>

<style lang="scss" scoped>
.signup-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
