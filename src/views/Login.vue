<template>
  <div>
    <div class="head">
      <button class="close-btn" @click="goback()">
        <span class="close"></span>
      </button>
    </div>
    <div class="login">
      <div class="logo"></div>
      <h1>网贷口子专业技术社区</h1>
      <div class="phone-num">
        <input type=tel placeholder="账户名" v-model="userInfo.userPhoneNumber" name="" id="">
      </div>
      <div class="password">
        <input type="password" placeholder="密码" v-model="userPassword" name="" id="">
        <!-- <span @click="sendPassword()">发送验证码</span> -->
      </div>
      <div class="login-btn" @click="userLogin()">登录</div>
      <p>点击登录即表示同意
        <a href="https://h5.wuyouxinyong.com/coms/agreement/daiyou/privacy.html">《用户服务及隐私权政策》</a>
      </p>
    </div>
  </div>
</template>
<script>
// import { sendPasswordApi, userLoginApi, getUserDateApi } from '../http/api';
// import JSEncrypt from 'jsencrypt';
export default {
  data() {
    return {
      userPassword: null,
      userInfo: {
        userPhoneNumber: null,
        avatar: 'https://d.lanrentuku.com/down/png/1712/22xiaodongwu/22xiaodongwu_12.png'
      }
      // encrypted: ''
      // userHeader:[]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },

    userLogin() {
      if (this.userInfo.userPhoneNumber.length > 2 && this.userPassword.length >= 6) {
        // if (this.userInfo.userPhoneNumber != null && this.userPassword != null) {
        console.log(this.userInfo);
        this.$store.commit('setUserData', this.userInfo);
        this.$store.commit('setDeviceId', localStorage.getItem('device_id'));
        localStorage.setItem('user_date', JSON.stringify(this.userInfo));
        console.log(this.userInfo, '登录成功');
        this.$router.push('/').catch(err => {
          err;
        });
        // } else {
        //   alert('账号密码不能为空');
        // }
      } else {
        alert('账号最少字符长度为2，密码至少为6位');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .close-btn {
    width: 48px;
    border: 0;
    background-color: #fff;
    outline: none;
    .close {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url('../assets/img/close.png');
      background-size: 100%;
    }
  }
}
.login {
  padding: 0 24px;
  .logo {
    // padding: 0 24px;
    height: 36px;
    background-image: url('../assets/img/bbs-logo.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
  h1 {
    font-size: 17px;
    color: #333;
    font-weight: 400;
    margin-top: 10px;
    // padding: 0 24px;s
    margin-bottom: 34px;
  }
  .phone-num,
  .password {
    // padding: 0 24px;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 400;

    input {
      // margin: 0 24px;s
      width: 100%;
      height: 50px;
      border: none;
      font-size: 15px;
      outline: none;
    }
  }
  .password {
    height: 100%;
    width: 100%;
    background: transparent;
    color: #333;
    font-size: 17px;
    border: none;
    outline: none;
    padding: 0;
    input {
      border-top: 1px solid #242424;
    }
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 24px;
      font-size: 15px;
      color: #333;
    }
  }
  .login-btn {
    // margin-top: 44px;
    width: 327px;
    height: 42px;
    border-radius: 100px;
    background: linear-gradient(90deg, #ffe60b, #fed500);
    font-size: 16px;
    color: #333;
    line-height: 42px;
    text-align: center;
    margin: 44px auto 10px;
  }
  p {
    font-size: 12px;
    color: rgba(51, 51, 51, 0.5);
    padding: 0 24px;
    margin-bottom: 0 !important;
    a {
      color: rgba(51, 51, 51, 0.5);
      text-decoration: none;
    }
  }
}
</style>

