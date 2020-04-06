<template>
  <div class="list">
    <div v-for="(item,index) in allSearchList" :key="index">
      <!-- type1-用户帖子 -->
      <div class="post" v-if="item.type===1">
        <div class="item">
          <div class="head-img">
            <div class="image">
              <img :src="item.user_logo_url" alt="">
            </div>
            <div class="user-name">{{item.user_name}}</div>
          </div>
          <div class="content" v-html="item.content">{{item.content}}</div>
          <div class="pic">
            <div class="image" v-for="(item,index) in item.image_urls" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
          <div class="like-review">0赞/13评论</div>
        </div>
      </div>
      <!-- type2-投诉 -->
      <div class="complaint" v-if="item.type===2">
        <div class="title" v-html="item.title">{{item.title}}</div>
        <div class="row">
          <p class="content" v-html="item.content">{{item.content}} </p>
          <div class="pic">
            <div class="image" v-for="(item,index) in item.image_urls.slice(0,1)" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="foot">{{item.agency_name}}~投诉</div>
      </div>
      <!-- type3-大神说 -->
      <div class="god-say" v-if="item.type===3">
        <div class="title" v-html="item.title">{{item.title}}</div>
        <div class="row">
          <p class="content" v-html="item.content">{{item.content}} </p>
          <div class="pic" v-for="(item,index) in item.image_urls.slice(0,1)" :key="index">
            <div class="image">
              <img :src="item" alt="">
            </div>
          </div>
        </div>

        <div class="foot">{{item.agency_name}}~大神说</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['allSearchList']
};
</script>
<style lang="scss" scoped>
.list {
  .post {
    padding: 0 16px;
    background-color: #fff;
    margin-top: 12px;
    .item {
      .head-img {
        display: flex;
        align-items: center;
        .image {
          margin-right: 8px;
          width: 24px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
      }
      .content {
        margin-top: 8px;
        font-size: 16px;
        color: #333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .pic {
        margin-top: 8px;
        display: flex;
        .image {
          width: 72px;
          img {
            width: 100%;
          }
        }
      }
      .like-review {
        margin-top: 16px;
        font-size: 12px;
        line-height: 20px;
        color: rgba(51, 51, 51, 0.5);
      }
    }
  }
  .complaint {
    padding: 0 16px;
    background-color: #fff;
    margin-top: 12px;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 17px;
        margin-bottom: 8px;
        font-weight: 500;
        line-height: 26px;
        color: #333;
      }
      .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
        word-break: break-all;
        font-size: 13px;
      }
      .pic {
        margin-top: 8px;
        display: flex;
        .image {
          overflow: hidden;
          width: 106px;
          height: 70px;
          img {
            width: 100%;
            border-radius: 6px;
          }
        }
      }
    }
    .foot {
      margin-top: 8px;
      font-size: 12px;
      line-height: 20px;
      color: rgba(51, 51, 51, 0.5);
    }
  }
  .god-say {
    padding: 0 16px;
    background-color: #fff;
    margin-top: 12px;
    .title {
      font-size: 17px;
      margin-bottom: 8px;
      font-weight: 500;
      line-height: 26px;
      color: #333;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
        word-break: break-all;
        font-size: 13px;
      }
      .pic {
        margin-top: 8px;
        display: flex;
        .image {
          overflow: hidden;
          width: 106px;
          height: 70px;
          img {
            width: 100%;
            border-radius: 6px;
          }
        }
      }
    }
    .foot {
      margin-top: 8px;
      font-size: 12px;
      line-height: 20px;
      color: rgba(51, 51, 51, 0.5);
    }
  }
}
</style>