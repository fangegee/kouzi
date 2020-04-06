<template>
  <div class="detail">
    <h1 class="title">title</h1>
    <div class="time-banner">
      <p class="one"><span class="watch-num"></span>浏览</p>
      <p class="two">发表于{{}} 口子大神</p>
    </div>
    <div class="app-info">
      <div class="left">
        <div class="image"><img src="../assets/logo.png" alt=""></div>

        <p>appname</p>
      </div>
      <div class="right">立即申请</div>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.detail {
  .title {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    z-index: 9;
  }
  .time-banner {
    display: flex;
    align-items: center;

    .one,
    .two {
      font-size: 12px;
      font-weight: 500;
      color: rgba(51, 51, 51, 0.5);
      margin-bottom: 26px !important;
      .watch-num {
        font-size: 14px;
        color: #333;
        margin-right: 4px;
      }
    }
  }
  .app-info {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .image {
        width: 36px;
        height: 36px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    .right {
      width: 84px;
      height: 28px;
      border-radius: 14px;
      background: #ffe100;
      font-size: 13px;
      color: #000;
      font-weight: 500;
      text-align: center;
      line-height: 28px;
      border: none;
    }
  }
}
</style>