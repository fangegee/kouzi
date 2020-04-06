<template>
  <div class="detail">
    <!-- 大神说细节 -->
    <section class="detail-content">
      <h1 class="title">{{godRecommendList.encyclopedia_title}}</h1>
      <div class="time-banner">
        <p class="one"><span class="watch-num">{{godRecommendList.read_num}}</span>浏览</p>
        <p class="two">发表于{{godRecommendList.create_time}} 口子大神</p>
      </div>
      <div class="app-info">
        <div class="left">
          <div class="image"><img :src="godRecommendList.platform_logo" alt=""></div>

          <p>{{godRecommendList.platform_name}}</p>
        </div>
        <div class="right">立即申请</div>
      </div>
      <div class="content" v-html="godRecommendList.encyclopedia_content">
        {{godRecommendList.encyclopedia_content}}
      </div>
    </section>
    <!-- 备注侵权事宜 -->
    <section class="orgin">
      <div class="app-info">
        <div class="left">
          <div class="image"><img :src="godRecommendList.platform_logo" alt=""></div>
          <p>{{godRecommendList.platform_name}}</p>
        </div>
        <div class="right">立即申请</div>
      </div>
      <p class="note">
        【原创声明】凡注明“来源：口子大神”的文章，系本站原创，任何单位或个人未经本站书面授权不得转载、链接、转贴或以其他方式复制发表。否则，本站将依法追究其法律责任。
      </p>
    </section>
    <!-- 留言 -->
    <section class="message">
      <div class="title">留言</div>
      <div class="center">
        <div class="image"></div>
        <p class="question">对口子还有疑问？留言问大神吧</p>
        <div class="btn">问大神</div>
      </div>

    </section>
    <section class="commnet">
      <div class="comment-box" v-for="(item,index) in godCommentList" :key="index">
        <div class="image">
          <img :src="item.user_info.avatar" alt="">
        </div>
        <p class="name">{{item.user_info.nick_name}}</p>
        <p class="content">{{item.content}}</p>
        <div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { godRecommendApi, godCommentApi } from '../http/api';
export default {
  data() {
    return {
      godRecommendList: {},
      godCommentList: []
    };
  },
  mounted: function() {
    godRecommendApi({
      encyclopedia_id: this.$route.params.id
    }).then(res => {
      this.godRecommendList = res.result;
    });
    godCommentApi({
      encyclopedia_id: this.$route.params.id,
      page_size: 10
    }).then(res => {
      this.godCommentList = res.result.content.slice(0, 4);
      console.log(this.godCommentList);
    });
  }
};
</script>
<style lang="scss" scoped>
.detail {
  padding: 0 16px;
  .detail-content {
    color: #333;
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
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .image {
          width: 36px;
          height: 36px;
          margin-right: 7px;
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
    .content {
      margin-top: 20px;
      p {
        font-size: 16px;
        line-height: 26px;
        color: #555;
        margin-bottom: 20px !important;
        word-wrap: break-word;
      }
    }
  }
  .orgin {
    margin-top: 20px;
    padding-bottom: 20px;
    .app-info {
      display: flex;
      justify-content: space-between;
      background: linear-gradient(90deg, #f0f2f5, #fff);

      .left {
        display: flex;
        align-items: center;
        .image {
          width: 36px;
          height: 36px;
          margin-right: 7px;
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
    .note {
      margin-top: 20px;
      font-size: 11px;
      color: #999;
      line-height: 15px;
    }
  }
  .message {
    border-top: 0.5px solid #d7d9db;
    padding-bottom: 20px;
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
      padding-top: 20px;
    }
    .center {
      display: flex;
      flex-flow: column;
      align-items: center;
      .image {
        height: 118px;
        width: 140px;
        background: url(https://h5.wuyouxinyong.com/kzds_resource/kzds_01/img/5fd1f46.png) no-repeat 50%;
        background-size: contain;
        margin-bottom: 16px;
      }
      .question {
        font-size: 15px;
        color: #666;
        margin-bottom: 16px;
      }
      .btn {
        height: 36px;
        width: 120px;
        background: #ffe100;
        border-radius: 18px;
        font-size: 14px;
        color: #242424;
        font-weight: 500;
        text-align: center;
        line-height: 36px;
      }
    }
  }
  .commnet {
    .comment-box {
      border-radius: 16px;
      background: #f6f6f6;
      padding: 14px 14px 14px 24px;
      position: relative;
      margin-bottom: 22px;
      .image {
        width: 28px;
        height: 28px;
        border-radius: 14px;
        position: absolute;
        top: 14px;
        left: -14px;
        overflow: hidden;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .name {
        font-size: 13px;
        color: #999;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      .content {
        font-size: 15px;
        color: #333;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>