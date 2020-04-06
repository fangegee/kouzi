<template>
  <div class="home">
    <!-- 头部 -->
    <!-- <section class="header">
      <Header></Header>
    </section> -->
    <!-- 菜单列表 -->
    <section class="menuList">
      <MenuList></MenuList>
    </section>
    <section class="recomment">
      <div class="title">
        <h2>大神说推荐</h2>
        <p @click="changeLink('/godsay')">大神说广场</p>
      </div>
      <div class="content" v-for="(item,index) in recommentList" :key="index" @click="getDetail(item.encyclopedia_id)">
        <h2>{{item.encyclopedia_title}}</h2>
        <div class="logo">
          <img :src="item.platform_logo" alt="">
          <span>{{item.platform_name}}</span>
        </div>
        <div class="introduce" v-if="item.encyclopedia_id==273">
          <span>原创</span>
          {{item.encyclopedia_digest}}
        </div>
      </div>
    </section>
    <!-- 下款真口子 -->
    <section class="really-kouzi">
      <div class="title">
        <h2>下款真口子</h2>
        <p @click="changeLink('/kouzi')">贷款口子</p>
      </div>
      <div class="kouzi-list">
        <div class="kouzi" v-for="(item,index) in reallyKouzi" :key="index">
          <a class="link" :href="item.android_url" target="_blank">
            <div class="left">
              <div class="image">
                <img :src="item.platform_logo_content" alt="">
              </div>
              <div class="info">
                <p class="name">{{item.platform_name}}</p>
                <p class="number">{{item.amount.min}}-{{item.amount.max/10000}}万</p>
              </div>
            </div>
            <div class="btn">
              申请
            </div>
          </a>
        </div>

      </div>
    </section>
    <!-- 热门帖子 最新 大神说 投诉 -->
    <section class="main-box">
      <div class="nav">
        <div class="menu">
          <p :class="[isActive===1?active:null]" @click="styleChange(1)">热门帖子</p>
          <p :class="[isActive===2?active:null]" @click="styleChange(2)">最新</p>
          <p :class="[isActive===3?active:null]" @click="styleChange(3)">大神说</p>
          <p :class="[isActive===4?active:null]" @click="styleChange(4)">投诉</p>
        </div>
        <div class="search"></div>
      </div>
      <!-- 热门帖子 -->
      <div class="hot-post" v-if="isActive===1">
        <HotPost :postInfo='hotPostList'></HotPost>
        <infinite-loading @infinite="hotPostinfiniteHandler"></infinite-loading>
        <!-- <HotPostListVue></HotPostListVue> -->
      </div>
      <!-- 最新 -->
      <div class="new-post" v-if="isActive===2">
        <!-- <NewPostListVue></NewPostListVue> -->
        <HotPost :postInfo='newPostList'></HotPost>
        <infinite-loading @infinite="newPostinfiniteHandler"></infinite-loading>
      </div>
      <!-- 大神说 -->
      <div class="god-say" v-if="isActive===3">
        <GodSay :godSayList='godSayList'></GodSay>
        <infinite-loading @infinite="GodSayinfiniteHandler"></infinite-loading>
      </div>
      <!-- 投诉 -->
      <div class="complaint" v-if="isActive===4">
        <Complaint :complaintList='complaintList'></Complaint>
        <infinite-loading @infinite="complaintinfiniteHandler"></infinite-loading>
      </div>
    </section>
  </div>
</template>

<script>
// API
import {
  recommentListApi, //大神说推荐数据
  reallyKouziApi, //下款真口子数据
  hotPostApi, //热门帖子
  newPostApi, //最新帖子
  godSayListApi, //大神说泪飙
  complaintListApi //首页投诉列表
  // godRecommendApi
} from '@/http/api.js'; // 导入接口
//组件
import InfiniteLoading from 'vue-infinite-loading';
// import Header from '../components/Header.vue';
import MenuList from '../components/MenuList.vue';
import HotPost from '../components/HotPost.vue';
import GodSay from '../components/GodSay.vue';
import Complaint from '../components/Complaint.vue';
// import HotPostListVue from '../components/HotPostList.vue';
// import NewPostListVue from '../components/NewPostList.vue';

// bbs/web-api/v1/loan-app/loan-app-list-with-baike?app_id=205&platform=1&device_id=21969940&page_num=2&page_size=20
export default {
  name: 'Home',
  components: {
    InfiniteLoading,
    // Header,
    MenuList,
    HotPost,
    GodSay,
    Complaint
    // HotPostListVue,
    // NewPostListVue
  },
  data() {
    return {
      recommentList: [], //大神说推荐数据
      reallyKouzi: [], //下款真口子数据
      isActive: 1,
      active: 'active',
      hotPostList: [],
      newPostList: [],
      hotpage: 1,
      newpage: 1,
      godSayList: [],
      godpage: 1,
      complaintList: [],
      complaintpage: 1
    };
  },
  methods: {
    styleChange(index) {
      this.isActive = index;
    },
    getDetail(id) {
      this.$router.push({
        path: `/godRecommend/${id}`
      });
    },
    changeLink(path) {
      this.$router.push(path);
    },
    //热门帖子列表
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
    },
    // 最新帖子列表
    newPostinfiniteHandler($state) {
      newPostApi({
        type: 2,
        page_size: 20,
        page_num: this.newpage
      }).then(res => {
        if (res.result.content) {
          this.newpage += 1;
          this.newPostList.push(...res.result.content);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    //大神说列表
    GodSayinfiniteHandler($state) {
      godSayListApi({
        page_num: this.godpage,
        page_size: 20
      }).then(res => {
        if (res.result.content) {
          this.godpage += 1;
          this.godSayList.push(...res.result.content);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    //首页投诉列表
    complaintinfiniteHandler($state) {
      complaintListApi({
        origin_id: 1849789,
        page_size: 20
      })
        .then(res => {
          if (res.result) {
            // this.complaintpage += 1;
            this.complaintList.push(...res.result);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(error => {
          console.log(error, 'error');
        });
    }
  },
  mounted: function() {
    //大神说推荐数据
    recommentListApi({
      post_id: 1333398
    })
      .then(res => {
        this.recommentList = res.result;
      })
      .catch(error => {
        console.log(error, 'error');
      });
    //下款真口子数据
    reallyKouziApi({
      category_ids: 36
    })
      .then(res => {
        this.reallyKouzi = res.result[0].card_link_list.slice(0, 4);
        console.log(this.reallyKouzi);
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
.home {
  background-color: #f4f4f4;
  // <!-- 头部 -->
  .header {
    margin-bottom: 46px;
  }
  //  <!-- 菜单列表 -->
  .menuList {
    background-color: #fff;
    padding: 16px 16px 0;
    border-bottom: 0.5px solid #d7d9db;
  }
  // 大神说推荐
  .recomment {
    background-color: #fff;
    padding: 20px 16px 0;
    // 标题
    .title {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 18px;
        color: #333;
        font-weight: 600;
      }
      p {
        height: 25px;
        width: 80px;
        border-radius: 13px;
        border: 0.5px solid #979797;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
      }
    }
    //内容
    .content {
      border-bottom: 0.75px solid #d7d9db;
      h2 {
        margin-top: 8px;
        font-size: 17px;
        font-weight: 500;
        color: #333;
        margin-bottom: 10px;
      }
      .logo {
        margin-bottom: 8px;
        img {
          height: 16px;
          width: 16px;
          border-radius: 8px;
          margin-right: 6px;
          vertical-align: middle;
        }
        span {
          font-size: 12px;
          color: rgba(51, 51, 51, 0.5);
          line-height: 16px;
        }
      }
      .introduce {
        margin-bottom: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 13px;
        color: rgba(51, 51, 51, 0.7);
        span {
          padding: 0 3px;
          color: #22c993;
          font-size: 11px;
          border: 0.75px solid #22c993;
          border-radius: 3px;
          line-height: 16px;
          margin-right: 2px;
        }
      }
    }
  }
  // <!-- 下款真口子 -->
  .really-kouzi {
    background-color: #fff;
    padding: 20px 16px 0;
    // 标题
    .title {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 18px;
        color: #333;
        font-weight: 600;
      }
      p {
        height: 25px;
        width: 80px;
        border-radius: 13px;
        border: 0.5px solid #979797;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
      }
    }
    .kouzi-list {
      margin-top: 8px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .kouzi {
        width: 48%;
        margin-bottom: 20px !important;
        height: 39px;
        .link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          .left {
            display: flex;
            align-items: center;
            .image {
              width: 28px;
              height: 28px;
              margin-right: 9px;
              img {
                width: 100%;
                border-radius: 50%;
              }
            }
            .info {
              .name {
                font-size: 14px;
                color: #333;
                margin-bottom: 3px !important;
                line-height: 20px;
              }
              .number {
                font-size: 12px;
                color: #ff5044;
                font-family: DIN;
              }
            }
          }
          .btn {
            height: 24px;
            width: 40px;
            border-radius: 12px;
            line-height: 24px;
            text-align: center;
            font-size: 12px;
            color: #181818;
            background: #ffe100;
          }
        }
      }
    }
  }
  // <!-- 热门帖子 最新 大神说 投诉 -->
  .main-box {
    background-color: #fff;
    margin-top: 16px;
    .nav {
      padding: 0px 16px 0 16px;
      // max-width: 680px;
      // width: 95%;
      height: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu {
        // flex: 1;
        display: flex;
        align-items: center;
        height: 100%;
        p {
          line-height: 46px;
          font-size: 15px;
          font-weight: 600;
          color: rgba(51, 51, 51, 0.5);
          margin-right: 26px;
        }
        .active {
          font-size: 18px;
          color: #333;
          position: relative;
        }
        .active::after {
          content: '';
          height: 3px;
          width: 22px;
          border-radius: 2px;
          background: #ffe100;
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .search {
        height: 22px;
        width: 22px;
        background-image: url(../assets/img/search.png);
        background-size: 100% 100%;
      }
    }
    .post-list,
    .new-list,
    .complaint,
    .god-say {
      padding: 0 16px;
    }
    .god-say {
      background-color: #f4f4f4;
    }
  }
}
</style>
