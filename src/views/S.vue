<template>
  <div class="box">
    <!-- 搜索框 -->
    <section class="search">
      <div class="left">
        <input @focus="bankIpt()" :value="$store.getters.getIptText" class="ipt" type="search" placeholder="口子大神">
      </div>
    </section>
    <!-- 搜索结果 -->
    <section class="content">
      <div class="nav">
        <div :class="[isActive===1?'active':null]" @click="changeStyle(1)">全部</div>
        <div :class="[isActive===2?'active':null]" @click="changeStyle(2)">大神说</div>
        <div :class="[isActive===3?'active':null]" @click="changeStyle(3)">投诉</div>
        <div :class="[isActive===4?'active':null]" @click="changeStyle(4)">帖子</div>
      </div>
      <!-- 全部 -->
      <div class="all" v-if="isActive===1">
        <SearchReultVue :allSearchList='allSearchList'></SearchReultVue>
        <infinite-loading @infinite="allSearchinfiniteHandler"></infinite-loading>
      </div>
      <!-- 大神说 -->
      <div class="all" v-if="isActive===2">
        <div>
          <SearchReultVue :allSearchList='GodSearchList'></SearchReultVue>
          <infinite-loading @infinite="GodSearchinfiniteHandler"></infinite-loading>
        </div>
      </div>
      <!-- 投诉 -->
      <div class="all" v-if="isActive===3">
        <div>
          <div>
            <SearchReultVue :allSearchList='complaintSearchList'></SearchReultVue>
            <infinite-loading @infinite="complaintinfiniteHandler"></infinite-loading>
          </div>
        </div>
      </div>
      <!-- 帖子 -->
      <div class="all" v-if="isActive===4">
        <div>
          <SearchReultVue :allSearchList='postSearchList'></SearchReultVue>
          <infinite-loading @infinite="postSearchinfiniteHandler"></infinite-loading>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import { allSearchApi } from '../http/api';
import SearchReultVue from '../components/SearchReult.vue';
export default {
  inject: ['reload'],
  name: 'StoreServiceProjectManagement',
  components: {
    SearchReultVue,
    InfiniteLoading
  },
  data() {
    return {
      isActive: 1,
      iptTxt: '',
      iptTxtId: '',
      allSearchList: [],
      GodSearchList: [],
      complaintSearchList: [],
      postSearchList: [],
      allPage: 1,
      godPage: 1,
      complaintPage: 1,
      postPage: 1
    };
  },
  methods: {
    bankIpt() {
      this.$router.push('/search');
    },
    changeStyle(index) {
      this.isActive = index;
    },
    //搜索结果=>全部
    allSearchinfiniteHandler($state) {
      console.log(this.$route.params.wordId, '无限加载');

      allSearchApi({
        page_num: this.allPage,
        word_id: this.$route.params.wordId
        // word_id: 2155800
      }).then(res => {
        if (res.result) {
          this.allPage += 1;
          this.allSearchList.push(...res.result.content);
          // this.allSearchList;
          console.log(this.allSearchList, '全部数据');
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    //搜索结果=>大神说
    GodSearchinfiniteHandler($state) {
      allSearchApi({
        page_num: this.godPage,
        word_id: this.$route.params.wordId,
        // word_id: 2155800,
        type: 3
      }).then(res => {
        if (res.result) {
          this.godPage += 1;
          this.GodSearchList.push(...res.result.content);
          this.allSearchList;
          console.log(this.GodSearchList, '大神说数据');
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    //搜索结果=投诉
    complaintinfiniteHandler($state) {
      allSearchApi({
        page_num: this.complaintPage,
        word_id: this.$route.params.wordId,
        // word_id: 2155800,
        type: 2
      }).then(res => {
        if (res.result) {
          this.complaintPage += 1;
          this.complaintSearchList.push(...res.result.content);
          // this.allSearchList;
          console.log(this.complaintSearchList, '投诉数据');
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    //搜索结果=>帖子
    postSearchinfiniteHandler($state) {
      allSearchApi({
        page_num: this.postPage,
        word_id: this.$route.params.wordId,
        // word_id: 2155800,
        type: 1
      }).then(res => {
        if (res.result) {
          this.postPage += 1;
          this.postSearchList.push(...res.result.content);
          // this.allSearchList;
          console.log(this.postSearchList, '帖子数据');
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
.box {
  background-color: #f4f4f4;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 12px;
  .left {
    width: 100%;
    .ipt {
      width: 100%;
      height: 32px;
      border-radius: 16px;
      background: url('../assets/img/ipt-search.png') no-repeat 16px 10px;
      background-size: 12px;
      background-color: #f2f3f5;
      padding: 6px 38px;
      border: none;
      outline: none;
      font-size: 14px;
    }
  }
}
.content {
  .nav {
    display: flex;
    justify-content: center;
    box-shadow: 0 1px 14px rgba(0, 8, 26, 0.1);
    div {
      padding: 2px 0 10px;
      width: 25%;
      font-size: 13px;
      color: rgba(51, 51, 51, 0.6);
      line-height: 22px;
      font-weight: 500;
      text-align: center;
    }
    .active {
      color: #333;
      border-bottom: 2px solid #fd0;
    }
  }
}
</style>