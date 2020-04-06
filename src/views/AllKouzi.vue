<template>
  <div class="box">
    <section class="search">
      <input class="ipt" type="search" placeholder="搜索口子名称，系列">
    </section>
    <section class="kouzi-count">
      <div class="left">
        <p class="number">7080</p>
        <p>收录口子</p>
      </div>
      <div class="left">
        <p class="number">53</p>
        <p>今日更新</p>
      </div>
    </section>
    <section class="classity">
      <h2>分类</h2>
      <div class="list">
        <div class="item" v-for="(item,index) in kouziClassityList" :key="index">
          <p class="name">{{item.category}}</p>
          <div class="foot">
            <p>{{item.loan_count}}个口子</p>
            <div class="image">
              <img v-lazy="item.logo" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="change" @click="changeOnepi()">换一批</div>
    </section>
    <section class="all-kouzi">
      <h2>口子列表</h2>
      <div>
        <div class="list">
          <div class="item" v-for="(item,index) in AllKouziList" :key="index">
            <!-- 四列 -->
            <div class="clamp" v-for="(item,index) in item.slice(0,4)" :key="index">
              <a :href="item.apply_url" target="_blank">
                <div class="left">
                  <div class="image">
                    <img :src="item.logo" alt="">
                    <span>{{item.category}}</span>
                  </div>
                  <p class="name">{{item.name}}</p>
                </div>
                <div class="right">入口</div>
              </a>
            </div>
            <!-- 四行 -->
            <div class="row">
              <div class="item" v-for="(item,index) in item.slice(4,8)" :key="index">
                <a :href="item.apply_url" target="_blank">
                  <div class="image">
                    <img :src="item.logo" alt="">
                    <span>{{item.category}}</span>
                  </div>
                  <p>{{item.name}}</p>
                </a>
              </div>
            </div>
          </div>
          <infinite-loading @infinite="allKouziinfiniteHandler"></infinite-loading>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import { kouziClassityApi, AllKouziListApi } from '../http/api';
export default {
  inject: ['reload'],
  name: 'StoreServiceProjectManagement',
  components: {
    InfiniteLoading
  },
  data() {
    return {
      kouziClassityList: [],
      AllKouziList: [],
      allKouziPage: 1
    };
  },
  mounted() {
    kouziClassityApi({
      page_size: 6
    }).then(res => {
      this.kouziClassityList = res.result;
      console.log(this.kouziClassityList, '分类');
    });
  },
  methods: {
    changeOnepi() {
      this.reload();
    },
    allKouziinfiniteHandler($state) {
      AllKouziListApi({
        page_num: this.allKouziPage,
        page_size: 8
      }).then(res => {
        if (res.result.content) {
          this.allKouziPage += 1;

          this.AllKouziList.push(res.result.content);
          console.log(this.AllKouziList, '口子列表');
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
  padding: 0 16px;
}
.search {
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
.kouzi-count {
  padding: 20px 0 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 50%;
    .number {
      font-size: 26px;
      color: #333;
      font-weight: 500;
      font-family: DIN;
      margin-bottom: 3px;
    }
    p {
      font-size: 11px;
      color: #999;
    }
  }
}
.classity {
  width: 100%;
  h2 {
    color: #333;
    margin-bottom: 10px;
  }
  .list {
    // width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 14px;
    justify-content: space-between;
    .item {
      width: calc((100% - 40px) / 2);
      padding: 16px 0 0 16px;
      background: #f0f2f5;
      border-radius: 8px;
      margin-bottom: 10px;
      .name {
        font-size: 15px;
        color: #333;
        margin-bottom: 3px;
      }
      .foot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 12px;
          color: #999;
        }
        .image {
          height: 44px;
          width: 44px;
          border-radius: 8px;
          overflow: hidden;
          background: #999;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .change {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #f0f2f5;
    font-size: 14px;
    color: #333;
  }
}
.all-kouzi {
  width: 100%;
  h2 {
    color: #333;
    margin-bottom: 10px;
  }
  .list {
    .item {
      margin-bottom: 24px;
      .clamp {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        // margin-bottom: 26px;
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
          list-style: none;
          text-decoration: none;
          .left {
            display: flex;
            align-items: center;
            .image {
              position: relative;
              width: 52px;
              margin-right: 10px;
              img {
                width: 100%;
                border-radius: 8px;
              }
              span {
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 1px 2px;
                background: #22c993;
                border-radius: 6px 2px 6px 2px;
                font-size: 10px;
                color: #fff;
                z-index: 2;
              }
            }
            .name {
              font-size: 16px;
              color: #333;
            }
          }
          .right {
            height: 26px;
            width: 55px;
            border: 1px solid #d7d9db;
            border-radius: 13px;
            text-align: center;
            line-height: 26px;
            font-size: 13px;
            color: #333;
          }
        }
      }
      .row {
        display: flex;
        justify-content: space-between;
        .item {
          // width: 25%;
          // display: flex;
          // flex-flow: column;
          // align-items: center;
          a {
            display: flex;
            flex-flow: column;
            align-items: center;
            list-style: none;
            text-decoration: none;
            color: #333;
            .image {
              position: relative;
              width: 52px;
              margin-right: 10px;
              img {
                width: 100%;
                border-radius: 8px;
              }
              span {
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 1px 2px;
                background: #22c993;
                border-radius: 6px 2px 6px 2px;
                font-size: 10px;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>