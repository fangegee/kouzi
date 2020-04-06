<template>
  <div class="complaintList">
    <div class="complaint" v-for="(item,index) in complaintList" :key="index">
      <h2>{{item.title}}</h2>
      <!-- <div> -->
      <div class="foot">
        <div class="left" :class="[item.pic_list.length!=0?'leftWidth':'left']">
          <p class="content">{{item.post_desc}}</p>
          <div class="foot-box" v-for="(item,index) in item.merchant_list" :key="index">
            <div class="image">
              <img :src="item.logo" alt="">
            </div>
            <p class="name">{{item.merchant_name}}</p>
            <p>投诉</p>
          </div>
        </div>
        <div class="right">
          <img :src="item.pic_list[0]" alt="">
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  props: ['complaintList']
};
</script>
<style lang="scss" scoped>
.complaintList {
  .complaint {
    padding: 20px 0;
    border-bottom: 0.5px solid #d7d9db;
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      line-height: 26px;
      margin-bottom: 10px;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      .leftWidth {
        width: 70%;
      }
      .left {
        .content {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          padding: 0 5px;
          font-size: 14px;
          color: rgba(51, 51, 51, 0.7);
          margin-bottom: 10px;
        }
        .foot-box {
          display: flex;
          align-items: stretch;
          .image {
            width: 20px;
            height: 20px;
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
        }
      }
      .right {
        overflow: hidden;
        width: 106px;
        height: 70px;
        img {
          width: 100%;
          border-radius: 5px;
          // height: 30%;
        }
      }
    }
  }
}
</style>
