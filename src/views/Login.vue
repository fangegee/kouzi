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
        <input type=tel placeholder="手机号" v-model="userPhoneNumber" name="" id="">
      </div>
      <div class="password">
        <input type="tel" placeholder="验证码" v-model="userPassword" name="" id="">
        <span @click="sendPassword()">发送验证码</span>
      </div>
      <div class="login-btn" @click="userLogin()">登录</div>
      <p>点击登录即表示同意
        <a href="https://h5.wuyouxinyong.com/coms/agreement/daiyou/privacy.html">《用户服务及隐私权政策》</a>
      </p>
    </div>
  </div>
</template>
<script>
import { sendPasswordApi, userLoginApi, getUserDateApi } from '../http/api';
import JSEncrypt from 'jsencrypt';
export default {
  data() {
    return {
      userPhoneNumber: null,
      userPassword: null,
      userInfo: {},
      encrypted: ''
      // userHeader:[]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    sendPassword() {
      let str = this.userPhoneNumber;
      if (str.charAt(0) == 1 && str.length === 11) {
        var encryptor = new JSEncrypt(); //新建JSEncrypt对象
        //设置公钥
        encryptor.setPublicKey(
          `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCLSytDwFEOR8zZT96EGpsgC6Nxvx4Lm55dI8umjjP21rUZUdn9ALdAEyNXxF6bA5NGJAwPNE95PqZjRQfFyfof/JwucojipzQZldRG+dXV/qdyqiGVp8CTRBZGo1Meaij51kcWXUcmLtbGgU0/ga5ELdEQKVU/DSFY805ZYBbshQIDAQAB-----END PUBLIC KEY-----`
        );
        //数据加密
        this.encrypted = encryptor.encrypt(this.userPhoneNumber);
        console.log(this.encrypted, '被加密的电话');
        sendPasswordApi({
          mobile: this.encrypted,
          sms_type: 1,
          decrypt_type: 1
        }).then(res => {
          console.log(res, '验证码发送成功');
        });
      } else {
        alert('格式不正确');
      }
    },
    userLogin() {
      userLoginApi({
        mobile: this.encrypted,
        operate_type: 3,
        sms_code: this.userPassword,
        decrypt_type: 1
        // invite_code: 6ad2e935b5b34e069409eaeb33fd8018,
      }).then(res => {
        this.userInfo = res.result;
        console.log(res, '登录成功');
        this.$store.commit('setUserData', this.userInfo);
        this.$store.commit('setDeviceId', localStorage.getItem('device_id'));
        localStorage.setItem('user_date', JSON.stringify(this.userInfo));

        getUserDateApi({
          user_id: this.userInfo.user_id,
          user_token: this.userInfo.user_token
        }).then(res => {
          // this.userHeader=res.result
          console.log(res, '用户信息获取成功');
          this.$router.push('/').catch(err => {
            err;
          });
        });
      });
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

