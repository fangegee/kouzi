<template>
  <div class="post-list">
    <div class="post-list-box" v-for="(item,index) in hotPostList" :key="index">
      <!-- 头像名称 -->
      <div class="user-banner">
        <div class="image">
          <img :src="item.user_info.avatar" alt="">
        </div>
        <p>{{item.user_info.nick_name}}</p>
      </div>
      <!-- 帖子内容 -->
      <div class="post-content">
        <!-- 帖子文字内容 -->
        <!-- :class="[isshowAllTxt?'post-show':'post-txt']" -->
        <p class="post-show">
          <!-- <span class="hash-tag"><a href="javascript:;">话题名称</a></span> -->
          {{item.content}}
        </p>
        <div class="show-all" v-if="item.summary!=''" @click="showAllTxt()">全文</div>
        <!-- 帖子配图 -->
        <div class="post-img">
          <!-- <img :src="item.original_pic_path" alt=""> -->
          <PhotoView :photoList='item.post_pic_list' :photoIndex='item.post_id'></PhotoView>
        </div>
      </div>

      <!-- 点赞及评论 -->
      <div class="comments">
        <div class="comment-box">
          <span class="comment-like comment"></span>
          <span class="numbers">{{item.like_num}}</span>
        </div>
        <div class="like-box">
          <span class="comment-like like"></span>
          <span class="numbers">{{item.comment_num}}</span>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="hotPostinfiniteHandler" ref="infiniteLoading"></infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import PhotoView from './PhotoView';
import {
  hotPostApi //热门帖子
} from '../http/api.js'; // 导入接口
export default {
  components: {
    PhotoView,
    InfiniteLoading
  },

  // props: ['postInfo'],
  data() {
    return {
      isshowAllTxt: true,
      showall: 'post-show',
      hotPostList: [],
      hotpage: 1
    };
  },
  methods: {
    showAllTxt() {
      this.isshowAllTxt = !this.isshowAllTxt;
    },
    hotPostinfiniteHandler($state) {
      hotPostApi({
        // post_id: this.$route.params.num,
        post_id: 274,
        page_num: this.hotpage,
        page_size: 10
      })
        .then(res => {
          if (res.result.content) {
            this.hotpage += 1;
            this.hotPostList.push(...res.result.content);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(error => {
          console.log(error, 'error');
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.post-list {
  .post-list-box {
    border-bottom: 0.5px solid #d7d9db;
    .user-banner {
      margin: 10px 0 8px 0;
      display: flex;
      align-items: center;
      .image {
        width: 34px;
        height: 34px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      p {
        padding-left: 10px;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.5);
      }
    }
    .post-content {
      color: rgb(51, 51, 51);
      .post-txt {
        // color: rgb(51, 51, 51);
        .hash-tag {
          color: #333;
          font-size: 16px;
          line-height: 26px;
          a {
            text-decoration: none;
          }
        }
      }
      .post-show {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .show-all {
        margin-top: 6px;
        font-size: 16px;
        color: #527eaf !important;
        line-height: 26px;
      }
      .post-img {
        margin-top: 10px;
        z-index: 99999;
      }
    }
    .comments {
      margin: 16px 0;
      display: flex;
      justify-content: flex-end;
      .comment-box,
      .like-box {
        display: flex;
        align-items: center;
        margin-right: 15px;
        .comment-like {
          display: inline-block;
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-right: 6px;
        }
        .numbers {
          font-size: 14px;
          color: rgba(85, 85, 85, 0.5);
          font-weight: 500;
          line-height: 20px;
          margin-bottom: 0 !important;
        }
        .comment {
          background-image: url(../assets/img/review.png);
        }
      }
      .like-box {
        .like {
          background-image: url(../assets/img/like.png);
        }
      }
    }
  }
}
</style>