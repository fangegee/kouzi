<template>
  <div class="header">
    <div class="logo"></div>
    <div class="search" @click="changeLink('/search')">
      搜口子
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeLink(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss">
.header {
  z-index: 999;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 680px;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 110px;
    height: 30px;
    background-image: url(../assets/img/bbs-logo.png);
    background-size: 100%;
  }
  .search {
    box-sizing: border-box;
    width: 80px;
    height: 30px;
    border: 0.5px solid #979797;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
    color: #555;
    line-height: 29px;
    padding-left: 29px;
    background-image: url(../assets/img/search.png);
    background-size: 14px 14px;
    background-repeat: no-repeat;
    background-position: 10px 8px;
  }
}
</style>