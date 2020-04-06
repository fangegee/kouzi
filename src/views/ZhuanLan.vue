<template>
  <div class="box">
    <ArticleVue :articleList='articleList'></ArticleVue>
    <infinite-loading @infinite="articleinfiniteHandler"></infinite-loading>
  </div>
</template>
<script>
import ArticleVue from '../components/Article.vue';
import InfiniteLoading from 'vue-infinite-loading';
import { articleListApi } from '../http/api';
export default {
  components: {
    ArticleVue,
    InfiniteLoading
  },
  data() {
    return {
      articleList: [],
      articlePage: 1
    };
  },
  methods: {
    articleinfiniteHandler($state) {
      articleListApi({
        page: this.articlePage,
        size: 10
      }).then(res => {
        if (res.result.content) {
          this.articlePage += 1;
          this.articleList.push(...res.result.content);
          console.log(this.articleList);

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
</style>