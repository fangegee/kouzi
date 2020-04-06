<template>
  <div class="post-detail-box">
    <!-- 首个细节贴 -->
    <PostDetilCpnVue :postInfo='postDetailList' :postComment='postCommentList' :postTotalCount='postTotalCount'></PostDetilCpnVue>
    <div>
    </div>
    <!-- 细节帖子及评论列表 -->
    <div>
      <div>
        <PostDalListVue :postInfo='postDetailCommentList'></PostDalListVue>
      </div>
      <infinite-loading @infinite="postDetailCommentinfiniteHandler"></infinite-loading>
    </div>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import { postDetailApi } from '../http/api';
import PostDetilCpnVue from '../components/PostDetilCpn.vue';
PostDalListVue;
// import PostCommentVue from '../components/PostComment.vue';
import { postCommentApi, postDetailListApi } from '../http/api';
import PostDalListVue from '../components/PostDalList.vue';
export default {
  components: {
    InfiniteLoading,
    PostDetilCpnVue,
    PostDalListVue
    // PostCommentVue
  },
  data() {
    return {
      postDetailList: [],
      postCommentList: [],
      postTotalCount: '',
      postDetailCommentList: [],
      commentpage: 1,
      upCommentList: []
    };
  },
  mounted() {
    postDetailApi({
      post_id: this.$route.params.id
    }).then(res => {
      this.postDetailList = [res.result];
    });
    postCommentApi({
      post_id: this.$route.params.id,
      page_size: 50
    }).then(res => {
      this.postTotalCount = res.result.total_count;
      this.postCommentList = res.result.content.slice(0, 2);
      // console.log(res);
    });
  },
  methods: {
    postDetailCommentinfiniteHandler($state) {
      postDetailListApi({
        post_id: this.$route.params.id,
        page_num: this.commentpage,
        page_size: 10
      }).then(res => {
        if (res.result.content) {
          this.commentpage += 1;
          this.postDetailCommentList.push(...res.result.content);
          res.result.content.map(ele => {
            this.upCommentList = ele.comment_list;
          });
          console.log(this.upCommentList);
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
.post-detail-box {
  padding: 0 16px;
}
</style>