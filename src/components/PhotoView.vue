<template>
  <div class="photo-box">
    <div class="photo" v-for="(item,index) in photoList" :key="index">
      <div class="size" v-if="item.original_pic_path">
        <img v-lazy="item.original_pic_path" :preview="photoIndex">
      </div>
      <div class="size" v-else>
        <img v-lazy="item" :preview="photoIndex">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['photoList', 'photoIndex']
};
</script>
<style lang="scss" scoped>
.photo-box {
  // z-index: 99999;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .photo {
    width: 30%;
    margin-top: 16px;
    display: flex;
    margin-right: (100%-90%)/3;
    .size {
      width: 127px;
      img {
        width: 100%;
        // height: 90%;
      }
    }
  }
}
</style>