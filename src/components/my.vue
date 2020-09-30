<template>
  <div class="bottom">
    <!-- my-header -->
    <div class="my-header">
      <div class="top-header">
        <img class="top-tou" src="../assets/myimg/tou_imng.png" alt />
        <ul class="my-name">
          <li>
            <h3>李球球</h3>
            <img class="name-img" src="../assets/myimg/jt (1).png" alt />
          </li>
          <li>
            <span class="lv">
              <img class="lv-img" src="../assets/myimg/hg.png" alt />
              <span>Lv.1</span>
            </span>
            <span class="shu"></span>
            <span class="shengji">升级为企业用户</span>
          </li>
        </ul>
        <img class="setting" src="../assets/myimg/sz.png" alt />
        <img class="msg" src="../assets/myimg/xx.png" alt />
      </div>
      <!-- vip -->
      <div class="my-vip">
        <img class="huangguan" src="../assets/myimg/hg2.png" alt />
        <span class="zhulehui-vip">筑乐汇会员</span>
        <span class="firstmonth">
          首月￥
          <i>20</i>/月
        </span>
        <p class="vip-big">
          至尊版
          <span class="vip-open">开通</span>
        </p>
      </div>
    </div>
    <!-- xm read -->
    <ul class="xm-read">
      <li>
        <img src="../assets/myimg/icon1.png" alt />
        <span>项目订阅</span>
      </li>
      <li>
        <img src="../assets/myimg/icon2.png" alt />
        <span>我的会员</span>
      </li>
      <li>
        <img src="../assets/myimg/icon3.png" alt />
        <span>免费查看</span>
      </li>
      <li>
        <img src="../assets/myimg/icon4.png" alt />
        <span>我要委托</span>
      </li>
      <li>
        <img src="../assets/myimg/icon5.png" alt />
        <span>推荐招标</span>
      </li>
    </ul>
    <!-- all information -->
    <ul class="all-info">
      <li>
        <img src="../assets/myimg/dd.png" alt />
        <span>全部订单</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>
      <li>
        <img src="../assets/myimg/b.png" alt />
        <span>我的收藏</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>
      <li>
        <img src="../assets/myimg/c.png" alt />
        <span>我的发布</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>
      <li class="info-bottom">
        <img src="../assets/myimg/组 39.png" alt />
        <span>我的委托</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>

      <li>
        <img src="../assets/myimg/fp.png" alt />
        <span>发票信息</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>
      <li class="info-bottom">
        <img src="../assets/myimg/sq.png" alt />
        <span>报名信息</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>

      <li>
        <img src="../assets/myimg/tp.png" alt />
        <span>我的晒晒</span>
        <img src="../assets/myimg/jt.png" alt />
      </li>
      <li class="info-bottom" @click="Fun">
        <img src="../assets/myimg/lp.png" alt />
        <span>我的礼包</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "My",
  data() {
    return {
      msg: "我的"
    };
  },
  // methods:{

  // },
  created() {
    
  }
};
</script>
<style scoped>
/* header */
.my-header {
  width: 100%;
  height: 264px;
  background-color: #007bff;
  padding-top: 51px;
}
.top-header {
  width: 750px;
  height: 78px;
  position: relative;
}
.top-tou {
  width: 79px;
  height: 78px;
  margin-left: 34px;
  margin-right: 16px;
  float: left;
}
.my-name h3 {
  color: #fff;
  font-size: 34px;
}
.my-name li {
  position: relative;
  margin-bottom: 11px;
}
.name-img {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 10px;
  left: 240px;
}
.lv {
  width: 88px;
  height: 27px;
  background: rgba(255, 255, 255, 1);
  opacity: 0.3;
  border-radius: 14px;
  float: left;
  position: relative;
  top: 10px;
}
.lv-img {
  width: 21px;
  height: 18px;
  position: relative;
  left: 4px;
  top: -8px;
}
.lv span {
  color: #007bff;
  font-size: 22px;
  line-height: 27px;
  position: relative;
  top: -10px;
}
.shu {
  float: left;
  margin-left: 15px;
  margin-right: 16px;
  margin-top: 10px;
  width: 1px;
  height: 27px;
  background: rgba(77, 163, 255, 1);
}
.shengji {
  color: #4da3ff;
  font-size: 22px;
  line-height: 27px;
}
.setting {
  width: 36px;
  height: 39px;
  position: absolute;
  top: 5px;
  right: 101px;
}
.msg {
  width: 37px;
  height: 37px;
  position: absolute;
  top: 5px;
  right: 34px;
}
.my-vip {
  margin-top: 41px;
  width: 80%;
  height: 99px;
  background-image: url(../assets/myimg/bg.png);
  margin-left: 34px;
  border-radius: 20px 20px 0px 0px;
  padding: 25px 40px 22px 30px;
  position: relative;
}
.huangguan {
  float: left;
  margin-right: 13px;
}
.zhulehui-vip {
  color: #4b422c;
  font-size: 32px;
  line-height: 48px;
}
.firstmonth {
  color: #4b422c;
  font-size: 22px;
  position: absolute;
  right: 28px;
  top: 33px;
}
.firstmonth i {
  font-size: 33px;
  font-style: normal;
  font-weight: bold;
}
.vip-big {
  color: #4b422c;
  font-size: 25px;
  line-height: 30px;
  margin-left: 62px;
  margin-top: 20px;
}
.vip-open {
  position: absolute;
  right: 28px;
  bottom: 15px;
  width: 147px;
  height: 50px;
  background: rgba(75, 66, 44, 1);
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.xm-read {
  background: #fff;
  width: 100%;
  height: 176px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.xm-read li {
  width: 20%;
  text-align: center;
}
.xm-read li img {
  width: 65px;
  height: 65px;
  margin-top: 50px;
}
.xm-read li span {
  display: block;
  /* font-size: 26px; */
  margin-top: 10px;
  font-size: 26px;
  color: #333;
  margin-bottom: 10px;
}
.all-info {
  width: 100%;
  overflow: hidden;
  background: #eee;
}
.all-info li {
  background: #fff;
  height: 90px;
  line-height: 90px;
  width: 100%;
  position: relative;
  font-size: 32px;
  border-bottom: 1px solid #eee;
}
.all-info li span {
  margin-left: 86px;
}
.all-info li img:nth-of-type(1) {
  width: 34px;
  height: 34px;
  position: absolute;
  top: 28px;
  left: 34px;
}
.all-info li img:nth-of-type(2) {
  width: 10px;
  height: 19px;
  position: absolute;
  right: 34px;
  top: 36px;
  z-index: 9;
}
.info-bottom {
  margin-bottom: 16px;
}
</style>
