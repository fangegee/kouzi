<template>
  <div class="box">
    <div class="god-say">
      <GodSay :godSayList='godSayList'></GodSay>
      <infinite-loading @infinite="GodSayinfiniteHandler"></infinite-loading>
    </div>
  </div>
</template>
<script>
// @click="getDatial(item.encyclopedia_id)
//     getDetail(id) {
//       console.log(12321312312323312);
//       this.$router.push({
//         path: `/godRecommend/${id}`
//       });
//     }
import InfiniteLoading from 'vue-infinite-loading';
import GodSay from '../components/GodSay.vue';
import {
  godSayListApi //大神说泪飙
} from '@/http/api.js'; // 导入接口
export default {
  components: {
    InfiniteLoading,
    GodSay
  },
  data() {
    return {
      godSayList: [],
      godpage: 1
    };
  },
  methods: {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background: #f2f2f2 !important;
  padding-top: 20px;
  padding: 0 16px;
}
</style>