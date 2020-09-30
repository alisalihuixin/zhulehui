<template>
  <div id="bottom" class="wrap">
    <ul class="bid-ul">
      <li>
        <span class="left">位置</span>
        <span class="right">{{detail[0].address}}</span>
      </li>
      <li>
        <span class="left">性质</span>
        <span class="right">{{detail[0].nature}}</span>
      </li>
      <li>
        <span class="left">标题</span>
        <span class="right">{{detail[0].title}}</span>
      </li>
      <li>
        <span class="left">公司简介</span>
        <span class="right">{{detail[0].introduction}}</span>
      </li>
      <li>
        <span class="left">公司类型</span>
        <span class="right">{{detail[0].bussiness}}</span>
      </li>
      <li>
        <span class="left">业务类型</span>
        <span class="right">{{detail[0].type}}</span>
      </li>
      <li>
        <span class="left">业务范围</span>
        <span class="right">{{detail[0].range}}</span>
      </li>
      <li>
        <span class="left">联系方式</span>
        <span class="right">{{detail[0].contact}}</span>
      </li>
      <li>
        <span class="left">企业证书</span>
        <span class="right">{{detail[0].certificate}}</span>
      </li>
      <li>
        <span class="left">企业人员</span>
        <span class="right">{{detail[0].personnel}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { fuwuDetail } from "@/util/api";
export default {
  name: "bidinfocaigou",
  data() {
    return {
      detail: []
    };
  },
  created() {
    console.log(this.$route.query.id);
    fuwuDetail(this.$route.query.id).then(res => {
      // console.log(res);
      if (res.code == 200) {
        this.$data.detail = res.data.row;
      }
    });
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