<template>
  <div>
    <div class="nav">
      <div class="menu">
        <p :class="[isActive===1?active:null]" @click="styleChange(1)">热门口子</p>
        <p :class="[isActive===2?active:null]" @click="styleChange(2)">极速申请</p>
        <p :class="[isActive===3?active:null]" @click="styleChange(3)">大额长期</p>
        <p :class="[isActive===4?active:null]" @click="styleChange(4)">其他口子</p>
      </div>
    </div>
    <!-- 热门口子 -->
    <div class="hot-kouzi" v-if="isActive===1">
      <KouziClassifyVue :KouziList='hotKouziList'></KouziClassifyVue>
    </div>
    <!-- 极速申请 -->
    <div class="fast-kouzi" v-if="isActive===2">
      <KouziClassifyVue :KouziList='fastKouziList'></KouziClassifyVue>
    </div>
    <!-- 大额长期 -->
    <div class="big-kouzi" v-if="isActive===3">
      <KouziClassifyVue :KouziList='bigKouziList'></KouziClassifyVue>
    </div>
    <!-- 其他口子 -->
    <div class="other-kouzi" v-if="isActive===4">
      <KouziClassifyVue :KouziList='otherKouzi'></KouziClassifyVue>
    </div>
  </div>
</template>
<script>
import KouziClassifyVue from '../components/KouziClassify.vue';
import { KouziApi } from '../http/api';
export default {
  components: {
    KouziClassifyVue
  },
  data() {
    return {
      isActive: 1,
      active: 'active',
      hotKouziList: [],
      fastKouziList: [],
      bigKouziList: [],
      otherKouzi: []
    };
  },
  mounted() {
    // 口子=》热门口子
    KouziApi({
      category_ids: 36
    }).then(res => {
      this.hotKouziList = res.result[0].card_link_list;
      console.log(this.hotKouziList);
    });
    //口子=》极速申请
    KouziApi({
      category_ids: 37
    }).then(res => {
      this.fastKouziList = res.result[0].card_link_list;
      console.log(this.fastKouziList);
    });
    //口子=》大额长期
    KouziApi({
      category_ids: 38
    }).then(res => {
      this.bigKouziList = res.result[0].card_link_list;
      console.log(this.bigKouziList);
    });
    //口子=》其他口子
    KouziApi({
      category_ids: 39
    }).then(res => {
      this.otherKouzi = res.result[0].card_link_list;
      console.log(this.otherKouzi);
    });
  },
  methods: {
    styleChange(index) {
      this.isActive = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  padding: 0 16px;
  box-shadow: 0 1px 14px 0 rgba(0, 8, 26, 0.1);
  height: 46px;
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  .menu {
    flex: 1;
    display: flex;
    // justify-content: space-around;
    justify-content: space-between;
    height: 100%;
    p {
      line-height: 46px;
      font-size: 13px;
      font-weight: 600;
      color: rgba(51, 51, 51, 0.5);
      // margin-right: 26px;
    }
    .active {
      font-size: 16px;
      color: #333;
      position: relative;
    }
    .active::after {
      content: '';
      height: 3px;
      width: 75px;
      border-radius: 2px;
      background: #ffe100;
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.hot-kouzi,
.fast-kouzi,
.big-kouzi,
.other-kouzi {
  padding: 0 16px;
}
</style>