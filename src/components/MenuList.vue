<template>
  <div class="menu-list">
    <div class="menu nav-01" @click="changePage('/godsay')">
      <div class="image"></div>
      <p>大神说</p>
    </div>
    <div class="menu nav-02" @click="changePage('/kouzi')">
      <div class="image"></div>
      <p>贷款口子</p>
    </div>
    <div class="menu nav-03" @click="changePage('/banka')">
      <div class="image"></div>
      <p>办卡</p>
    </div>
    <div class="menu nav-04" @click="changePage('/complaint')">
      <div class="image"></div>
      <p>老哥投诉</p>
    </div>
    <div class="menu nav-05" @click="changePage('/zhuanlan')">
      <div class="image"></div>
      <p>专栏</p>
    </div>
    <div class="menu nav-06" @click="changePage('/godsay')">
      <div class="image"></div>
      <p>利润计算</p>
    </div>
    <div class="menu nav-07" @click="changePage('/godsay')">
      <div class="image"></div>
      <p>下载app</p>
    </div>
    <div class="menu nav-08" @click="changePage('/allkouzi')">
      <div class="image"></div>
      <p>口子大全</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changePage(path) {
      this.$router.push(path).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  .menu {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 25%;
    height: 56px;
    margin: 0 0 20px;

    flex-shrink: 0;

    justify-content: center;
    // margin-bottom: 20px;
    .image {
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
      background-size: contain;
    }
    p {
      font-size: 12px;
      color: #333;
    }
  }
  .nav-01 {
    .image {
      background-image: url(../assets/img/nav-01.png);
    }
  }
  .nav-02 {
    .image {
      background-image: url(../assets/img/nav-02.png);
    }
  }
  .nav-03 {
    .image {
      background-image: url(../assets/img/nav-03.png);
    }
  }
  .nav-04 {
    .image {
      background-image: url(../assets/img/nav-04.png);
    }
  }
  .nav-05 {
    .image {
      background-image: url(../assets/img/nav-05.png);
    }
  }
  .nav-06 {
    .image {
      background-image: url(../assets/img/nav-06.png);
    }
  }
  .nav-07 {
    .image {
      background-image: url(../assets/img/nav-07.png);
    }
  }
  .nav-08 {
    .image {
      background-image: url(../assets/img/nav-08.png);
    }
  }
}
</style>