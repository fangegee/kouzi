<template>
  <div class="app-box">
    <div id="app">
      <Header></Header>
      <router-view v-if="isRouterAlive" />
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
  components: {
    Footer,
    Header
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  mounted() {},
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    }
  }
};
</script>
<style lang="scss">
.app-box {
  background: #fcfcfc;
  #app {
    background: #fff;
    width: 100%;
    height: 100%;
    padding-bottom: 38px;
    padding-top: 46px;
  }
}
</style>

