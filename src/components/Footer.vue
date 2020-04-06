<template>
  <div class="nav-box">
    <div class="nav">
      <div class="menu-ele home" @click="curChange(1,'/')">
        <div :class="[isCur===1?curIcon:icon]"></div>
        <p>首页</p>
      </div>
      <div class="menu-ele tiezi" @click="curChange(2,'/post')">
        <div :class="[isCur===2?curIcon:icon]"></div>
        <p>帖子</p>
      </div>
      <div class="menu-ele send">
        <div class="icon"></div>
      </div>
      <div class="menu-ele kouzi" @click="curChange(3,'/kouzi')">
        <div :class="[isCur===3?curIcon:icon]"></div>
        <p>口子</p>
      </div>
      <div class="menu-ele more" @click="showlogin()">
        <div class="icon"></div>
        <p>更多</p>
      </div>
    </div>
    <div class="more-box" v-if="isShowLogin">
      <div class="more">
        <div class="login" v-if="$store.getters.getLoginState==false" @click="curChange(1,'/login')">登陆/注册</div>
        <div class="user" v-if="$store.getters.getLoginState==true">
          <div class="left" @click="exitBtn()">
            <img :src="$store.getters.getUserData.avatar" alt="">
            <!-- <h1>{{$store.getters.getUserData}}h1</h1> -->
            <p>{{$store.getters.getUserData.nick_name }}</p>
            <div class="level" style="background-image: url('https://h5.wuyouxinyong.com/kzds_resource/kzds/img/ff50c79.png');"></div>
          </div>
          <div class="right" @click="exitBtn()">退出登录</div>
        </div>
        <div class="menu">
          <MenuListVue></MenuListVue>
        </div>
        <div class="close" @click="showlogin()">
          <div class="close-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuListVue from './MenuList.vue';
export default {
  components: {
    MenuListVue
  },
  created: function() {
    if (localStorage.getItem('user_date') != null) {
      this.$store.commit('setUserData', JSON.parse(localStorage.getItem('user_date')));
    }
    this.$store.commit('setDeviceId', localStorage.getItem('device_id'));
  },
  data() {
    return {
      isCur: 1,
      icon: 'icon',
      curIcon: 'cur-icon',
      isShowLogin: false
    };
  },
  methods: {
    curChange(index, path) {
      this.isCur = index;
      console.log(path);

      this.$router.push(path).catch(error => {
        console.log(error);
      });
      this.isShowLogin = false;
    },
    showlogin() {
      this.isShowLogin = !this.isShowLogin;
    },
    exitBtn() {
      localStorage.removeItem('user_date');
    }
  }
};
</script>
<style lang="scss" scoped>
// .nav-box {
.nav {
  // max-width: 648px;
  // margin-top: 48px;
  z-index: 999;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 680px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
  .menu-ele {
    width: 20%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font-size: 10px;
      color: #9ca0a4;
    }
    .icon,
    .cur-icon {
      width: 24px;
      height: 24px;
      background-size: 100% 100%;
      background-size: contain;
    }
  }
  .home {
    .icon {
      background-image: url(../assets/img/home.png);
    }
    .cur-icon {
      background-image: url(../assets/img/cur-home.png);
    }
  }
  .tiezi {
    .icon {
      background-image: url(../assets/img/tiezi.png);
    }
    .cur-icon {
      background-image: url(../assets/img/cur-tiezi.png);
    }
  }
  .send {
    .icon {
      width: 46px;
      height: 34px;
      background-image: url(../assets/img/send-post.png);
    }
  }
  .kouzi {
    .icon {
      background-image: url(../assets/img/kouzi.png);
    }
    .cur-icon {
      background-image: url(../assets/img/cur-kouzi.png);
    }
  }
  .more {
    .icon {
      background-image: url(../assets/img/more.png);
    }
  }
}
.more-box {
  border-top: 1px solid #999;
  border-radius: 16px 16px 0 0;
  z-index: 999;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  // max-width: 680px;
  width: 100%;
  height: 300px;
  display: flex;
  // flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
  .more {
    width: 100%;
    .login {
      height: 34px;
      width: 120px;
      background: linear-gradient(90deg, #fffd00, #ffe100);
      border-radius: 17px;
      line-height: 34px;
      text-align: center;
      margin-bottom: 32px;
      font-size: 15px;
      color: #242424;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    .user {
      padding: 0 24px 20px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
        p {
          margin-right: 10px;
          font-size: 15px;
          line-height: 22px;
          color: #333;
        }
        .level {
          width: 48px;
          height: 16px;
          background-size: 100% 100%;
        }
      }
      .right {
        font-size: 13px;
        line-height: 22px;
        color: rgba(51, 51, 51, 0.5);
      }
    }
    .close {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      .close-icon {
        width: 14px;
        height: 14px;
        background-image: url('../assets/img/close.png');
        background-size: 14px;
      }
    }
  }
}
// }
</style>