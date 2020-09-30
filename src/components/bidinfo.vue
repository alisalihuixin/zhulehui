<template>
  <div id="bottom" class="wrap">
    <!-- 招聘信息 -->
    <div v-for="(item,index) in detail" :key="index">
      <div class="bid-info">
        <div class="bidding-infogs">
          <img class="bidding-img1" src="../assets/bidinfoimg/banner.png" alt />
        </div>
        <div class="bid-gs">
          <div class="bid-border">
            <div class="bidding-img">
              <img src="../assets/bidinfoimg/tx.png" alt />
            </div>
            <ul class="bidding-info">
              <li>河南华润电力首阳山公司</li>
              <li>Z53060002IJ000162001</li>
            </ul>
            <div class="kuang">
              <div>
                <img src="../assets/bidinfoimg/sc.png" alt />
              </div>
              <span @click="getcang">收藏</span>
            </div>
            <div>
              <img class="info-phone" src="../assets/bidinfoimg/phone.png" alt />
            </div>
          </div>

          <p class="biding-p">河南华润电力首阳山有限公司2018年首阳山#1、2炉送风机改造工程招标公告</p>
          <div class="biding-bottom">
            <span>河南省</span>
            <span>公开招标</span>
            <span>2020.02.18</span>
          </div>
        </div>
      </div>
      <div class="bid-line"></div>
      <!-- 招聘类型 -->
      <ul class="bid-ul">
        <li>
          <span class="left">招标类型</span>
          <span class="right">货物采购</span>
        </li>
        <li>
          <span class="left">招标条件</span>
          <span class="right">招标公告</span>
        </li>
        <li>
          <span class="left">项目概况与招标范围</span>
          <span class="right">{{item.survey}}</span>
        </li>
        <li>
          <span class="left">招标人合格要求</span>
          <span class="right">{{item.qualified}}</span>
        </li>
        <li>
          <span class="left">招标</span>
          <span class="right">{{item.time}}</span>
        </li>
        <li>
          <span class="left">招标件领取</span>
          <span class="right">{{item.receive}}</span>
        </li>
        <li>
          <span class="left">其他说明</span>
          <span class="right">{{item.explain}}</span>
        </li>
        <li>
          <span class="left">招标信息</span>
          <span class="right">{{item.info}}</span>
        </li>
        <li>
          <span class="left">联系方式</span>
          <span class="right">{{item.contactinformation}}</span>
        </li>
        <li>
          <span class="left">其他说明</span>
        </li>
        <div class="xinxi">{{item.explain}}</div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "bidinfo",
  data() {
    return {
      detail: []
    };
  },
  created() {
    console.log(this.$route.query.key);
    if (this.$route.query.key.code == 200) {
      this.$data.detail = this.$route.query.key.res;
    }
  }
};
</script>
<style scoped>
.bid-info {
  width: 750px;
  position: relative;
  height: 580px;
}
.bidding-img1 {
  width: 750px;
  height: 309px;
}
.bid-gs {
  width: 681px;
  background: rgba(255, 255, 255, 1);
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  top: 240px;
  padding: 40px 34px 20px 35px;
}
.bid-border {
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}
.bidding-img {
  float: left;
  margin-right: 25px;
}
.bidding-img img {
  width: 70px;
  height: 70px;
}
.info-phone {
  width: 60px;
  height: 60px;
}
.bidding-info {
  float: left;
  font-size: 26px;
  color: #333;
  line-height: 40px;
}
.bidding-info li:nth-of-type(2) {
  font-size: 22px;
  color: #666;
}
.kuang {
  float: left;
  margin-left: 60px;
  width: 132px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 150, 0, 1);
  color: #ff9600;
  font-size: 26px;
  line-height: 60px;
  margin-right: 10px;
}
.kuang div {
  float: left;
  margin: 5px 19px;
}
.kuang img {
  width: 28px;
  height: 28px;
}
.biding-p {
  font-size: 30px;
  color: #333;
  line-height: 48px;
  margin-top: 30px;
}
.biding-bottom {
  height: 50px;
  margin-top: 20px;
  font-size: 24px;
}
.biding-bottom span:nth-of-type(1) {
  width: 89px;
  height: 30px;
  background: linear-gradient(
    94deg,
    rgba(255, 157, 2, 1),
    rgba(255, 198, 0, 1)
  );
  border-radius: 5px;
  color: #fff;
  padding: 3px 10px;
  margin-right: 10px;
}
.biding-bottom span:nth-of-type(2) {
  width: 110px;
  height: 30px;
  border: 1px solid rgba(238, 67, 65, 1);
  border-radius: 5px;
  padding: 3px 10px;
  color: #ee4341;
}
.biding-bottom span:nth-of-type(3) {
  font-size: 26px;
  color: #999;
  float: right;
}
.bid-line {
  width: 750px;
  height: 16px;
  background: #eee;
}
.bid-ul {
  background: #fff;
}
.bid-ul li {
  width: 682px;
  padding-left: 35px;
  padding-right: 33px;
  height: 90px;
  line-height: 90px;
  font-size: 28px;
  color: #333;
  border-bottom: 1px solid #eee;
}
.bid-ul li .left {
  float: left;
}
.bid-ul li .right {
  float: right;
}
.xinxi {
  padding: 0 30px;
  font-size: 26px;
  color: #666;
  line-height: 48px;
  margin-top: 20px;
}
</style>