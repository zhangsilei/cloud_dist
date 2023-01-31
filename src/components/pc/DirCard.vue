<template>
  <div class="dir-card-container">
    <div class="card">
      <img
        class="dir"
        src="https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
      />
      <div>{{ fileName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirCard',
  props: {
    fileName: {
      required: true,
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.dir-card-container {
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90px;
    background: #f0f2f5;
    .dir {
      width: 80%;
    }
  }
}
</style>
