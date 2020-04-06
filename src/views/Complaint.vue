<template>
  <div>
    <section class="head">
      <h2>老哥投诉</h2>
      <p>这里汇集老哥们对战小贷平台的投诉经验，面对暴利催收、高额利息等，如何有效争取个人权益，都在这里。</p>
    </section>
    <section class="complaint-box">
      <div class="placeholder"></div>
      <div class="nav">
        <div :class="[isActive===1?'active': 'menu']" @click="changeStyle(1)">
          <p>最新</p>
        </div>
        <div :class="[isActive===2?'active': 'menu']" @click="changeStyle(2)">
          <p>热榜</p>
        </div>
        <div :class="[isActive===3?'active': 'menu']" @click="changeStyle(3)">
          <p>已解决</p>
        </div>
      </div>
      <!-- 最新 -->
      <div class="best-new" v-if="isActive===1">
        <BroComptaintVue :ComplaintList='ComBastNewList'></BroComptaintVue>
      </div>
      <!-- 热榜 -->
      <div class="hot-list" v-if="isActive===2">
        <div class="hot" v-for="(item,index) in hotListList" :key="index">
          <div class="left">
            <div class="rank">
              <img v-if="index===0" src="https://h5.wuyouxinyong.com/kzds_resource/kzds_01/img/0dfacda.png" alt="">
              <img v-if="index===1" src="https://h5.wuyouxinyong.com/kzds_resource/kzds_01/img/b23a32e.png" alt="">
              <img v-if="index===2" src="https://h5.wuyouxinyong.com/kzds_resource/kzds_01/img/b06e0f4.png" alt="">
              <p v-if="index>=3">{{index+1}}</p>
            </div>
            <div class="image">
              <img v-if="item.logo" :src="item.logo" alt="">
              <div class="img-txt" style="background-color: rgb(238, 110, 59);" v-if="item.logo==''">
                {{item.merchant_name.charAt(0)}}
              </div>
            </div>
            <div class="content">
              <p class="title">{{item.merchant_name}}</p>
              <div class="label">
                <span v-for="(item,index) in item.merchant_tag_List.slice(0,3)" :key="index">{{item.tag}}</span>
              </div>
            </div>
          </div>
          <div class="all-count">
            <p><span>{{item.post_count}}</span>投诉</p>
          </div>
        </div>
        <infinite-loading @infinite="hotListinfiniteHandler"></infinite-loading>
      </div>
      <!-- 已解决 -->
      <div class="best-new" v-if="isActive===3">
        <BroComptaintVue :ComplaintList='ComOkList'></BroComptaintVue>
      </div>
    </section>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import BroComptaintVue from '../components/BroComptaint.vue';
import { ComBastNewApi, ComOkApi, hotListApi } from '../http/api';
export default {
  components: {
    BroComptaintVue,
    InfiniteLoading
  },
  data() {
    return {
      isActive: 2,
      ComBastNewList: [],
      ComOkList: [],
      hotListList: [],
      hotListPage: 1
    };
  },
  mounted() {
    ComBastNewApi({
      // origin_id: 1988400,
      page_size: 20
    }).then(res => {
      this.ComBastNewList = res.result;
      console.log(this.ComBastNewList);
    }),
      ComOkApi({
        page_size: 20,
        progress_status: 3
      }).then(res => {
        this.ComOkList = res.result;
        console.log(this.ComOkList);
      });
  },
  methods: {
    changeStyle(index) {
      this.isActive = index;
    },
    hotListinfiniteHandler($state) {
      hotListApi({
        page_num: this.hotListPage,
        page_size: 20
      }).then(res => {
        if (res.result.content) {
          this.hotListPage += 1;
          this.hotListList.push(...res.result.content);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  box-sizing: border-box;
  padding-top: 47px;
  width: 100%;
  height: 196px;
  background-image: url('../assets/img/complaint-bg.png');
  background-size: 100% 100%;
  h2 {
    font-size: 20px;
    color: #fff;
    line-height: 26px;
    text-align: center;
    margin-bottom: 16px;
  }
  p {
    padding: 0 16px;
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    opacity: 0.8;
  }
}
.complaint-box {
  .placeholder {
    height: 16px;
    width: 100%;
    margin-top: -16px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: #fff;
  }
  .nav {
    height: 37px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.12);
    .menu {
      font-size: 17px;
      color: rgba(0, 0, 0, 0.4);
    }
    .active {
      p {
        line-height: 37px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        // padding: 0 10px;
        border-bottom: 2px solid #333;
      }
    }
  }
  .best-new {
    background-color: #fff;
    // padding: 0 16px;
  }
  .hot-list {
    padding: 0 16px;
    background-color: #fff;
    .hot {
      height: 92px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .rank {
          margin-right: 16px;
          width: 20px;
          img {
            width: 100%;
          }
          p {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-size: 17px;
            color: #858c96;
            font-weight: 600;
            margin-right: 16px;
          }
        }
        .image {
          margin-right: 16px;
          width: 44px;
          img {
            width: 100%;
            border-radius: 6px;
          }
          .img-txt {
            color: #fff;
            text-align: center;
            line-height: 44px;
            border-radius: 6px;
            font-size: 22px;
          }
        }
        .content {
          .title {
            font-size: 15px;
            color: rgba(0, 0, 0, 0.8);
            font-weight: 500;
            margin-bottom: 5px;
          }
          .label {
            margin-top: 5px;
            // height: 18px;
            display: flex;
            align-items: center;
            span {
              flex-shrink: 0;
              margin-right: 5px;
              padding: 0 6px;
              background: rgba(0, 0, 0, 0.06);
              border-radius: 3px;
              font-size: 12px;
              line-height: 18px;
              color: rgba(0, 0, 0, 0.5);
            }
          }
        }
      }
      .all-count {
        p {
          font-size: 10px;
          color: rgba(0, 0, 0, 0.4);
          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 0.8);
            font-weight: 500;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>