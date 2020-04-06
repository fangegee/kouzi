<template>
  <div class="banka">
    <!-- 今日推荐 -->
    <section class="tody-recommend">
      <div class="head">
        今日推荐
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="recommend" v-for="(item,index) in todyRecommendList.slice(0,3)" :key="index">
            <a :href="item.android_url">
              <p class="title">{{item.platform_name}}</p>
              <p class="indu">{{item.tagline}}</p>
              <div class="image">
                <img :src="item.advertising_img_content" alt="">
              </div>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="recommend" v-for="(item,index) in todyRecommendList.slice(3,6)" :key="index">
            <a :href="item.android_url">
              <p class="title">{{item.platform_name}}</p>
              <p class="indu">{{item.tagline}}</p>
              <div class="image">
                <img :src="item.advertising_img_content" alt="">
              </div>
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- 热门银行 -->
    <section class="hot-bank">
      <span class="head">热门银行</span>
      <!-- <div class="head">
        热门银行
      </div> -->
      <div class="bank-list">
        <div class="bank" v-for="(item,index) in hotBankList" :key="index">
          <a :href="item.android_url">
            <div class="image">
              <img :src="item.platform_logo_content" alt="">
            </div>
            <p class="bank-name">{{item.platform_name}}</p>
            <p class="activing">{{item.tagline}}</p>
          </a>
        </div>
      </div>
    </section>
    <!-- 热门卡片 -->
    <section class="hot-card">
      <div class="head">
        热门银行
      </div>
      <div class="card-list">
        <div class="card" v-for="(item,index) in hotCardList" :key="index">
          <a :href="item.android_url">
            <div class="left">
              <div class="image">
                <img :src="item.advertising_img_content" alt="">
              </div>
              <div class="content">
                <p class="title">{{item.title}}</p>
                <p class="info">{{item.tagline}}</p>
                <p class="people-num">{{item.introduction}}人本月已申请</p>
              </div>
            </div>
            <div class="rank" v-if="index<3">
              {{index+1}}
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { BankaApi } from '../http/api';
export default {
  components: {},
  data() {
    return {
      todyRecommendList: [],
      hotBankList: [],
      hotCardList: []
    };
  },
  mounted: function() {
    BankaApi({
      category_ids: 8 + ',' + 9 + ',' + 10
    }).then(res => {
      this.todyRecommendList = res.result[0].card_link_list;
      this.hotBankList = res.result[1].card_link_list;
      this.hotCardList = res.result[2].card_link_list;
      console.log(this.todyRecommendList, '1');
      console.log(this.hotBankList, '2');
      console.log(this.hotCardList, '3');
    });
  }
};
</script>
<style lang="scss" scoped>
.banka {
  background-color: #f4f4f4;
  // padding: 0 16px;
}
.tody-recommend {
  background-color: #fff;
  // padding: 0 0 20px 0;
  // width: 100%;
  height: 144px;
  .head {
    // width: 100%;
    margin: 0;
    padding: 0 0 0 12px;
    font-size: 14px;
    color: #333;
    border-bottom: 0.5px solid #e9e9e9;
    height: 44px;
    line-height: 44px;
  }
  .my-swipe .van-swipe-item {
    display: flex;
    justify-content: space-around;
    color: #fff;
    font-size: 20px;
    // text-align: center;
    background-color: #fff;
    .recommend {
      width: 30%;
      display: flex;
      flex-flow: column;
      align-items: center;
      a {
        display: flex;
        flex-flow: column;
        align-items: center;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 40%;
          text-align: center;
          text-align: center;
          overflow: hidden;
        }
        .title {
          color: #333;
          font-size: 16px;
        }
        .indu {
          margin-top: 2px;
          color: #c6c6c6;
          font-size: 12px;
        }
        .image {
          width: 84px;
          margin-top: 5px;
          img {
            width: 100%;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
.hot-bank {
  background-color: #fff;
  margin-top: 12px;
  .head {
    width: 100%;
    // margin: 0;
    // padding: 0 0 0 12px;
    padding: 20px 0 20px 12px;
    font-size: 14px;
    color: #333;
    border-bottom: 0.5px solid #e9e9e9;
    height: 44px;
    line-height: 44px;
  }
  .bank-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .bank {
      width: 33%;
      margin-top: 16px;
      a {
        list-style: none;
        text-decoration: none;
        display: flex;
        flex-flow: column;
        align-items: center;
        .image {
          width: 37px;
          height: 37px;
          img {
            width: 100%;
          }
        }
      }
      .bank-name {
        margin-top: 6px;
        font-size: 16px;
        color: #333;
      }
      .activing {
        margin-top: 2px;
        font-size: 12px;
        color: #cbcbcb;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
      }
    }
  }
}
.hot-card {
  margin-top: 12px;
  background-color: #fff;
  .head {
    // width: 100%;
    // margin: 0;

    // display: inline-block;
    padding: 10px 0 10px 12px;
    font-size: 14px;
    color: #333;
    border-bottom: 0.5px solid #e9e9e9;
    height: 44px;
    line-height: 44px;
  }
  .card-list {
    padding: 12px;
    height: 113px;
    // width: 100%;
    // padding: 20px 16px;
    .card {
      width: 100%;

      // padding: 20px 16px;
      border-bottom: 0.5px solid #d9d8dd;
      // align-items: center;
      a {
        display: flex;
        justify-content: space-between;
        .left {
          width: 70%;
          display: flex;
          align-items: center;
          .image {
            width: 117px;
            img {
              width: 100%;
            }
          }
          .content {
            width: 60%;
            padding-left: 14px;
            .title {
              font-size: 16px;
              color: #333;
            }
            .info {
              margin-top: 8px;
              font-size: 14px;
              color: #999;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .people-num {
              margin-top: 8px;
              font-size: 14px;
              color: #999;
            }
          }
        }
        .rank {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ff6b6b;
          text-align: center;
          line-height: 32px;
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }
}
// }
</style>