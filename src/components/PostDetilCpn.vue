<template>
  <div class="post-list">
    <div class="post-list-box" v-for="(item,index) in postInfo" :key="index">
      <!-- 头像名称 -->
      <div class="user-banner">
        <div class="image">
          <img :src="item.user_info.avatar" alt="">
        </div>
        <div class="user-time">
          <p>{{item.user_info.nick_name}}</p>
          <p class="time">{{item.create_time}}</p>
        </div>

      </div>
      <!-- 帖子内容 -->
      <div class="post-content">
        <!-- 帖子文字内容 -->
        <p class="post-show">
          <!-- <span class="hash-tag"><a href="javascript:;">话题名称</a></span> -->
          {{item.content}}
        </p>
        <!-- 帖子配图 -->
        <div class="post-img">
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

      <!-- 评论内容 -->
      <div class="review-box">
        <div class="reviews" v-for="(item,index) in postComment" :key="index">
          <p class="review">
            <span class="name">{{item.user_info.nick_name}}：</span>
            <span class="content">{{item.content}}</span>
          </p>
          <!-- <p class="review">

            <span class="name">{{item.comment_user_name}}：</span>
            <span class="content">{{item.content}}</span>
          </p> -->
        </div>
        <div class="numberqq">查看{{postTotalCount}}条评论</div>
      </div>
    </div>
  </div>
</template>
<script>
import PhotoView from '../components/PhotoView.vue';
export default {
  components: {
    PhotoView
  },
  props: ['postInfo', 'postComment', 'postTotalCount'],
  data() {
    return {
      isshowAllTxt: true,
      showall: 'post-show'
    };
  },
  methods: {
    showAllTxt() {
      this.isshowAllTxt = !this.isshowAllTxt;
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
      .user-time {
        display: flex;
        flex-flow: column;
        p {
          padding-left: 10px;
          font-size: 15px;
          color: #333;
        }
        .time {
          font-size: 11px;
          font-weight: 400;
          color: rgba(51, 51, 51, 0.5);
        }
      }
    }
    .post-content {
      color: rgb(51, 51, 51);
      // .post-txt {
      // color: rgb(51, 51, 51);
      // .hash-tag {
      //   color: #333;
      //   font-size: 16px;
      //   line-height: 26px;
      //   a {
      //     text-decoration: none;
      //   }
      // }
      // }
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
      justify-content: flex-start;
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
          color: #555;
          line-height: 20px;
          width: 46px;
        }
        .comment {
          background-image: url('../assets/img/review-1.png');
        }
      }
      .like-box {
        .like {
          background-image: url('../assets/img/like-1.png');
        }
      }
    }
    .review-box {
      border-radius: 6px;
      background: #f6f6f6;
      padding: 10px;
      margin-bottom: 14px;

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
      .numberqq {
        font-size: 13px;
        color: #999;
      }
    }
  }
}
</style>