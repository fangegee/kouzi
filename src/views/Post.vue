<template>
  <div>
    <div class="nav">
      <div class="menu">
        <p :class="[isActive===1?active:null]" @click="styleChang(1)">热门帖子</p>
        <p :class="[isActive===2?active:null]" @click="styleChang(2)">最新</p>
      </div>
    </div>

    <div class="hot-post" v-if="isActive===1">
      <HotPost :postInfo='hotPostList'></HotPost>
      <infinite-loading @infinite="hotPostinfiniteHandler"></infinite-loading>
      <!-- <HotPostListVue></HotPostListVue> -->
    </div>
    <!-- 最新 -->
    <div class="new-post" v-if="isActive===2">
      <!-- <NewPostListVue></NewPostListVue> -->
      <div>
        <HotPost :postInfo='newPostList'></HotPost>
        <infinite-loading @infinite="newPostinfiniteHandler"></infinite-loading>
      </div>
    </div>
  </div>

</template>
<script>
import HotPost from '../components/HotPost.vue';
import InfiniteLoading from 'vue-infinite-loading';
import { hotPostApi, newPostApi } from '../http/api';
export default {
  components: {
    HotPost,
    InfiniteLoading
  },
  data() {
    return {
      isActive: 1,
      active: 'active',
      hotPostList: [],
      newPostList: [],
      hotpage: 1,
      newpage: 1
    };
  },
  methods: {
    styleChang(index) {
      this.isActive = index;
    },
    //热门帖子列表
    hotPostinfiniteHandler($state) {
      hotPostApi({
        // post_id: this.$route.params.num,
        post_id: this.$route.params.id,
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
    }
  }
};
</script>
<style lang="scss" scoped>
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
</style>