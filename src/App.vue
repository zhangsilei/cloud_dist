<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html,
body,
#app,
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
// @media screen and (min-width: 400px) {
//   .container {
//     max-width: 400px;
//   }
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;
  -ms-user-select: none; // IE
  -moz-user-select: none; // 火狐
  -khtml-user-select: none; // 早期浏览器
  -webkit-user-select: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
