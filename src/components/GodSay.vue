<template>
  <div>
    <div class="appList" v-for="(item,index) in godSayList" :key="index">
      <div @click="getDatial(item.encyclopedia_simple_list[0].encyclopedia_id)">
        <div class="app-head">
          <div class="image-box">
            <div class="image">
              <img :src="item.platform_logo" alt="">
            </div>
            <span class="name">{{item.platform_name}}</span>
          </div>

          <div class="comment">
            <span class="comment-icon"></span>
            <span class="number">{{item.post_num}}</span>
          </div>

        </div>
        <div class="content-list" v-for="(item,index) in item.encyclopedia_simple_list" :key='index'>
          <div class="content-txt">
            <p class="txt">{{item.encyclopedia_title}}</p>
            <p class="number">{{item.read_num}}阅读</p>
          </div>
        </div>
        <div>

        </div>
        <!-- <div class="content-list" v-for="(itema,indexa) in item.search_word_list" :key='indexa'>
        <div class="content-txt">
          <p class="txt">{{itema.search_word}}</p>
        </div>
      </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['godSayList'],
  methods: {
    getDatial(id) {
      console.log(12321312312323312);
      this.$router.push({
        path: `/godRecommend/${id}`
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.appList {
  padding-top: 20px;
  .app-head {
    border-radius: 16px 16px 0 0;
    padding: 0 12px;
    background-color: #f9f9f9;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .image-box,
    .comment {
      display: flex;
      align-items: center;
      color: #333;
      .image {
        margin-right: 8px;
        width: 30px;
        height: 30px;
        img {
          border-radius: 50%;
          width: 100%;
        }
      }
      .comment-icon {
        width: 20px;
        height: 20px;
        background-image: url('../assets/img/comment-2.png');
        background-size: 100% 100%;
      }
      .name {
        font-size: 14px;
      }
      .number {
        padding-left: 8px;
        font-size: 12px;
      }
    }
  }
  .content-list {
    border-radius: 0 0 6px 6px;
    background-color: #fff;
    padding: 15px 16px;
    .content-txt {
      .txt {
        font-size: 16px;
        color: #444;
        font-weight: 500;
        line-height: 22px;
        margin-bottom: 5px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .number {
        font-size: 12px;
        color: rgba(85, 85, 85, 0.5);
        line-height: 17px;
      }
    }
  }
  .content-list:not(:last-child) {
    border-bottom: 0.5px solid #e4e7eb;
    box-shadow: 0 0.5px 0 0 #e4e7eb;
  }
}
</style>