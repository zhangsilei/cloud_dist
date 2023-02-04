<template>
  <div class="signin-container">
    <sign-base :type="TYPE_SIGN_IN" @click="login" />
  </div>
</template>

<script>
import SignBase, { TYPE_SIGN_IN } from '@/components/SignBase.vue';
import { inject } from 'vue';
import { setRole } from '@/common/cookie';

export default {
  components: { SignBase },
  name: 'SignIn',
  setup() {
    const global = inject('global');

    const login = () => {
      const role = global.ROLE_USER;
      // const role = global.ROLE_ADMIN
      setRole(role);
    };

    return {
      login,
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
