<template>
  <div class="bxo">
    <div class="comptaint-item" v-for="(item,index) in ComplaintList.slice(1)" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="reason">{{item.post_desc}}</p>
      <div class="photo">
        <PhotoViewVue :photoList='item.pic_list' :photoIndex='item.auto_id'></PhotoViewVue>
      </div>
      <div class="foot">
        <div class="left">
          <!-- <div class="app-info"> -->
          <div class="app-item" v-for="(item,index) in item.merchant_list.slice(0,3)" :key="index">
            <div class="image">
              <img v-if="item.logo" :src="item.logo" alt="">
              <div v-else-if="!item.logo" class="image-txt">{{item.merchant_name.charAt(0)}}</div>
            </div>

            <p>{{item.merchant_name}}</p>
          </div>
          <!-- </div> -->
        </div>
        <div class="right" style="color: #f6b42e" v-if="item.progress_status==1">处理中</div>
        <div class="right" style="color: #3b91ff" v-if="item.progress_status==2">已回复</div>
        <div class="right" style="color: #3ccba4" v-if="item.progress_status==0">已解决</div>
        <div class="right" style="color: #3ccba4" v-if="item.progress_status==3">已解决</div>

      </div>
    </div>
  </div>
</template>
<script>
import PhotoViewVue from './PhotoView.vue';

export default {
  props: ['ComplaintList'],
  data() {
    return {
      bgColor: ['red', 'blue', 'yellow', 'orange'],
      curColor: ''
    };
  },
  mounted() {
    // this.curColor = this.bgColor[parseInt(Math.random() * 5)];
  },
  components: {
    PhotoViewVue
  }
};
</script>
<style lang="scss" scoped>
.bxo {
  background-color: #f4f4f4;
  margin: 0 16px;
  .comptaint-item {
    // padding: 0 16px;
    background-color: #fff;
    margin-bottom: 12px;
    width: 100%;
    .title {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 500;
      margin-bottom: 8px;
      line-height: 26px;
    }
    .reason {
      font-size: 15px;
      color: #333;
      opacity: 0.8;
      line-height: 24px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .foot {
      padding: 15px 0;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        .app-item {
          height: 24px;
          padding-right: 10px;
          background: #f0f1f3;
          border-radius: 100px;
          margin-right: 20px;
          display: flex;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          .image {
            width: 24px;
            img {
              width: 100%;
              border-radius: 50%;
            }
            .image-txt {
              border-radius: 50%;
              background-color: rgb(146, 144, 238);
              text-align: center;
              line-height: 24px;
              color: #fff;
            }
          }
          p {
            margin-left: 10px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }
}
</style>