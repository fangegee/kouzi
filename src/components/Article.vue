<template>
  <div>
    <div class="article" v-for="(item,index) in articleList" :key="index">
      <div class="left">
        <p class="content">{{item.title}}</p>
        <p class="read-num">{{item.views}}阅读</p>
      </div>
      <div class="image">
        <img v-lazy="item.title_pic" :alt="item.title" :title="item.title">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articleList'],
  methods: {}
};
</script>
<style lang="scss" scoped>
.article {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  .left {
    width: 70%;
    .content {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }
    .read-num {
      margin-top: 5px;
      font-size: 11px;
      color: rgba(51, 51, 51, 0.5);
    }
  }
  .image {
    // width: 30%;
    height: 66px;
    width: 100px;
    flex-shrink: 0;
    img {
      width: 100%;
      border-radius: 6px;
    }
  }
}
</style>