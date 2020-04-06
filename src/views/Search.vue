<template>
  <div class="box">
    <!-- 搜索框 -->
    <section class="search">
      <div class="left">
        <input v-model="iptTxt" ref="iptVal" class="ipt" type="search" placeholder="口子大神">
      </div>
      <div class="right" @click="submit()">搜索</div>
      <div class="right" @click="backPage()">取消</div>
    </section>

  </div>
</template>
<script>
import { getWordApi } from '../http/api';
export default {
  data() {
    return {
      iptTxt: '',
      iptTxtId: Number
    };
  },
  methods: {
    backPage() {
      window.history.go(-1);
    },
    submit() {
      //搜索框=>获取输入文字id
      this.$store.commit('setIptText', this.iptTxt);
      getWordApi({
        keyword: this.iptTxt
      }).then(res => {
        this.iptTxtId = res.result;
        console.log(this.iptTxtId);
        if (this.iptTxtId != '') {
          this.$router.push({
            path: `/s/${this.iptTxtId}`
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 70%;
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
  .right {
    font-size: 15px;
    color: #555;
  }
}
</style>