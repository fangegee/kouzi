<template>
  <div class="review-box">
    <div class="reviews" v-for="(item,index) in postComment" :key="index">
      <p class="review">
        <span class="name">{{item.user_info.nick_name}}：</span>
        <span class="content">{{item.content}}</span>
      </p>
      <div>查看{{postTotalCount}}条评论</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['postComment', 'postTotalCount']
};
</script>
<style lang="scss" scoped>
.review-box {
  border-radius: 6px;
  background: #f6f6f6;
  padding: 10px;
  margin-bottom: 14px;
}
.reviews {
  margin-bottom: 14px;
  .review {
    font-size: 13px;
    color: #333;
    .name {
      font-weight: 600;
    }
  }
}
</style>