<template>
  <div>
    <div class="kouzi-every" v-for="(item,index) in KouziList" :key="index">
      <!-- 头部 -->
      <a class="jump-link" :href="item.android_url" target="_blank">
        <div class="head">
          <div class="left">
            <img :src="item.platform_logo_content" alt="">
            <p class="name">{{item.platform_name}}-{{item.sub_title}}</p>
          </div>
          <div class="right">申请</div>
        </div>
        <!-- 身体 -->
        <div class="content">
          <div class="left">
            <p class="money">{{item.amount.min>=10000?item.amount.min/10000+'万':item.amount.min}}{{item.amount.max>=10000?'~'+item.amount.max/10000+'万':item.amount.max}}</p>
            <p class="limit">额度范围·元</p>
          </div>
          <div class="right">
            <p class="day">{{item.unit}}费率{{item.fee.min*100+"%"}}{{item.fee.max?'-'+item.fee.max*100+"%":null}}</p>
            <p class="mouth">贷款期限{{item.period.min}}-{{item.period.max}}{{item.period.unit}}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['KouziList']
};
</script>
<style lang="scss" scoped>
.kouzi-every {
  padding: 16px 0 16px 0;
  border-bottom: 0.5px solid #f0f0f0;
  .jump-link {
    list-style: none;
    text-decoration: none;
    .head {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        color: #333;
        img {
          height: 26px;
          width: 26px;
          border-radius: 50%;
        }
        .name {
          margin-left: 7px;
          line-height: 26px;
        }
      }
      .right {
        text-align: center;
        width: 60px;
        height: 26px;
        font-size: inherit;
        border-radius: 13px;
        outline: none;
        line-height: 24px;
        color: #ff5044;
        border: 1px solid #ff5044;
        background: transparent;
      }
    }
    .content {
      padding: 14px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        width: 50%;
        .money {
          color: #ee5353;
          font-size: 19px;
          font-family: shuzi;
        }
        .limit {
          color: rgba(158, 64, 64, 0.5);
          font-size: 11px;
        }
      }
      .right {
        width: 50%;
        margin-bottom: 3px !important;
        color: rgba(51, 51, 51, 0.5);
        font-size: 11px;
      }
    }
  }
}
</style>