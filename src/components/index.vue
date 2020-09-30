<template>
  <div id="bottom">
    <!-- header -->
    <div id="header">
      <div class="header-top">
        <img src="../assets/img/tou_imng.png" alt class="header-img" />
        <div class="header-location" @click="location">
          <span>{{city}}</span>
          <img src="../assets/img/select.png" alt />
        </div>
        <div class="header-input">
          <img src="../assets/img/search.png" @click="search1" alt />
          <input type="text" placeholder="搜索你想查找的关键词" ref="input" @keyup.enter="search" />
        </div>
      </div>
      <div class="header-list">
        <div class="header-information" @click="publish">
          <img src="../assets/img/release.png" alt />
          <span>发布信息</span>
        </div>
        <div class="header-information">
          <img src="../assets/img/member.png" alt />
          <span>会员服务</span>
        </div>
        <div class="header-information" @click="buy">
          <img src="../assets/img/enterprise.png" alt />
          <span>采购企业</span>
        </div>
        <div class="header-information" @click="more">
          <img src="../assets/img/information.png" alt />
          <span>招标信息</span>
        </div>
      </div>
      <div class="header-server">
        <span class="server-span"></span>
        <p>服务商信息</p>
        <ul>
          <li class="server-right" v-for="(item,index) in arr" :key="index" @click="gs(item.id)">
            <img :src="item.thumb" alt />
            <span>{{item.name}}</span>
          </li>
          <li>
            <button class="moreinfo" @click="servermorefuwu">更多</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="shop-wrap">
      <div class="header-server header-caigou">
        <span class="server-span"></span>
        <p>供销商信息</p>
        <ul>
          <li class="server-right" @click="gscaigou" v-for="(item,index) in arrcaigou" :key="index">
            <img :src="item.thumb" alt />
            <span>{{item.name}}</span>
          </li>
          <li>
            <button class="moreinfo" @click="servermorecaigou">更多</button>
          </li>
        </ul>
      </div>
    </div>
    <!-- banner -->
    <div id="banner">
      <img :src="bannerlist0" alt />
    </div>
    <!-- new idea -->
    <div class="now-idea">
      <img src="../assets/img/broadcast.png" alt />
      <div class="new-plus">
        <span>最新</span>
      </div>
      <el-carousel height="80px" dispaly="inline" direction="vertical" :autoplay="true">
        <el-carousel-item height="80px" dispaly="inline" v-for="item in adlist" :key="item">
          <span class="speed-idea">{{ item.content }}</span>
        </el-carousel-item>
      </el-carousel>
      <span class="circle"></span>
      <img src="../assets/img/jt.png" alt />
    </div>
    <!-- exports -->
    <div class="exports">
      <ul class="check"  v-for="(item,index) in exportslist" :key="index" @click="zhuanjiashenhe(item.id)">
        <li>
          <img class="hot" src="../assets/img/subscript.png" alt />
          <img class="audit" src="../assets/img/audit_icon.png" alt />
          <h3>{{item.name}}</h3>
        </li>
        <li>
          <span>{{item.content}}</span>
          <img class="jt" src="../assets/img/jt_icon.png" alt />
        </li>
      </ul>
    </div>
    <!-- banner2 -->
    <div id="banner">
      <img :src="bannerlist1" alt />
    </div>
    <!-- total stores -->
    <div class="stores">
      <ol>
        <li class="total-stores">
          <div>
            <b class="total-b">{{numberlist.content}}</b>
            <span class="total-wei">/家</span>
          </div>
          <span class="leiji">{{numberlist.name}}</span>
        </li>
        <li class="total-stores">
          <div>
            <b class="total-b">{{numberlist1.content}}</b>
            <span class="total-wei">/家</span>
          </div>
          <span class="leiji">{{numberlist1.name}}</span>
        </li>
        <li class="total-stores">
          <div>
            <b class="total-b">{{numberlist2.content}}</b>
            <span class="total-wei">万/元</span>
          </div>
          <span class="leiji">{{numberlist2.name}}</span>
        </li>
      </ol>
    </div>
    <!-- shop information -->
    <div>
      <div class="main-information">
        <span></span>
        <h3>采购信息</h3>
        <span class="information-more" @click="more">查看更多</span>
      </div>
      <ul>
        <li class="information-spread">
          <span></span>
          <span class="spread-location">河南省</span>
          <span class="spread-public">公开招标</span>
          <span @click="spread">河南华润电力首阳山有限公司2018</span>
          <p @click="spread">年首阳山#1、2炉送风机改造工程招标公告</p>
          <div class="information-clock">
            <img src="../assets/img/clock_default.png" alt />
            <span class="spread-time">12.31日于</span>
            <span class="location unread-location">郑州</span>
            <span class="fabu">发布</span>
            <span class="pay">货到付款</span>
            <div class="img"></div>
            <img src="../assets/img/collect_default.png" alt @click="shoucang(id)" />
          </div>
        </li>
        
      </ul>
    </div>
    <!-- banner3 -->
    <div id="banner">
      <img :src="bannerlist2" alt />
    </div>
    <!-- server require -->
    <div>
      <div class="main-information">
        <span></span>
        <h3>服务需求</h3>
        <span class="information-more" @click="more">查看更多</span>
      </div>
      <ul v-for="(item,index) in serverarr" :key="index">
        <li class="information-spread" @click="detail(item.id)">
          <span class="information-blue"></span>
          <span class="spread-location">{{item.address}}</span>
          <span class="spread-public">公开招标</span>
          <span class="spread-gs unread">{{item.title}}</span>
          <p class="spread-pub unread">年首阳山#1、2炉送风机改造工程招标公告</p>
          <div class="information-clock">
            <img src="../assets/img/clock_default.png" alt />
            <span class="spread-time">12.31日于</span>
            <span class="location unread-location">郑州</span>
            <span class="fabu">发布</span>
            <span class="pay unread-location">专业类别</span>
            <img src="../assets/img/collect_default.png" alt />
          </div>
        </li>
      </ul>
    </div>
    <!-- banner4 -->
    <div id="banner">
      <img :src="bannerlist3" alt />
    </div>
    <!-- server require -->
    <div>
      <div class="main-information">
        <span></span>
        <h3>招标信息</h3>
        <span class="information-more" @click="more">查看更多</span>
      </div>
      <ul>
        <li class="information-spread">
          <span class="information-blue"></span>
          <span class="spread-location">河南省</span>
          <span class="spread-public">公开招标</span>
          <span class="spread-gs unread">河南华润电力首阳山有限公司2018</span>
          <p class="spread-pub unread">年首阳山#1、2炉送风机改造工程招标公告</p>
          <div class="information-clock">
            <img src="../assets/img/clock_default.png" alt />
            <span class="spread-time">12.31日于</span>
            <span class="location unread-location">郑州</span>
            <span class="fabu">发布</span>
            <span class="pay unread-location">造价金额：15000</span>
            <img src="../assets/img/collect_default.png" alt />
          </div>
        </li>
        <li class="information-spread">
          <span class="information-blue"></span>
          <span class="spread-location">河南省</span>
          <span class="spread-public">公开招标</span>
          <span class="spread-gs unread">河南华润电力首阳山有限公司2018</span>
          <p class="spread-pub unread">年首阳山#1、2炉送风机改造工程招标公告</p>
          <div class="information-clock">
            <img src="../assets/img/clock_default.png" alt />
            <span class="spread-time">12.31日于</span>
            <span class="location unread-location">郑州</span>
            <span class="fabu">发布</span>
            <span class="pay unread-location">造价金额：15000</span>
            <img src="../assets/img/collect_default.png" alt />
          </div>
        </li>
        <li class="information-spread">
          <span class="information-blue"></span>
          <span class="spread-location">河南省</span>
          <span class="spread-public">公开招标</span>
          <span class="spread-gs unread">河南华润电力首阳山有限公司2018</span>
          <p class="spread-pub unread">年首阳山#1、2炉送风机改造工程招标公告</p>
          <div class="information-clock">
            <img src="../assets/img/clock_default.png" alt />
            <span class="spread-time">12.31日于</span>
            <span class="location unread-location">郑州</span>
            <span class="fabu">发布</span>
            <span class="pay unread-location">造价金额：15000</span>
            <img src="../assets/img/collect_default.png" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  fuwuicon,
  caigouiconthree,
  fuwuindexList,
  bannerlist,
  gglist,
  fuwuiconthree,
  fuwushang,
  gongyingshang,
  getmoney,
  zhuanjia,
  fuwushanginfo
} from "@/util/api";

import getCurrentCityName from "./getUserLocation.js";
export default {
  name: "Index",
  data() {
    return {
      msg: "首页",
      flag: true,
      city: "",
      redimg: false,
      arr: [],
      arrcaigou: [],
      serverarr: [],
      bannerlist0: "",
      bannerlist1: "",
      bannerlist2: "",
      bannerlist3: "",
      adlist: [],
      exportslist: [],
      numberlist: {},
      numberlist1: {},
      numberlist2: {}
    };
  },
  created() {
    
    zhuanjia().then((f)=>{
      console.log(f)
      this.$data.exportslist = f.data.res
    });
    fuwushang().then((l)=>{
      console.log(l)
      if(l.code==200){
        this.$data.numberlist=l.data.res[0]
      }
    });
    gongyingshang().then((l)=>{
      console.log(l)
      if(l.code==200){
        this.$data.numberlist1=l.data.res[0]
      }
    });
    getmoney().then((l)=>{
      console.log(l)
      if(l.code==200){
        this.$data.numberlist2=l.data.res[0]
      }
    });
    gglist().then(r => {
      console.log(r);
      if (r.code == 200) {
        this.$data.adlist = r.data.res;
      }
    });
    bannerlist().then(r => {
      // console.log(r);
      if (r.code == 200) {
        this.bannerlist0 = r.data.res[0].thumb;
        this.bannerlist1 = r.data.res[1].thumb;
        this.bannerlist2 = r.data.res[2].thumb;
        this.bannerlist3 = r.data.res[3].thumb;
      }
    });
    fuwuiconthree().then(re => {
      this.$data.arr = re.data.res;
    });
    caigouiconthree().then(e => {
      this.$data.arrcaigou = e.data.res;
    });
    fuwuindexList().then(res => {
      console.log(res);
      if (res.code == 200) {
        this.$data.serverarr = res.data.row;
      }
    });
  },
  methods: {
    servermorecaigou(){
      this.$router.push("/caigouiconall");
    },
    servermorefuwu() {
      this.$router.push("/fuwuiconall");
    },
    detail(id) {
      this.$router.push({ path: "/bidinfocaigou", query: { id: id } });
    },
    zhuanjiashenhe(p) {
      this.$router.push({path:"/shenhe",query:{exportid:p}});
    },
    zhuanjiazixun() {
      this.$router.push("/zixun");
    },
    fuwuweituo() {
      this.$router.push("/weituo");
    },
    caigouweituo() {
      this.$router.push("/caigou");
    },
    jinrongfuwu() {
      this.$router.push("/jinrong");
    },
    cailiaotuangou() {
      this.$router.push("/cailiao");
    },
    fawupingtai() {
      this.$router.push("/fawu");
    },
    shoucang(id) {},
    search(e) {
      console.log(e.target.value); //get input value
      e.target.value = "";
    },
    search1() {
      console.log(this.$refs.input.value);
      this.$refs.input.value = "";
    },
    publish() {
      this.$router.push("/publish");
    },
    more() {
      this.$router.push("/bidding");
    },
    spread() {
      this.$data.flag = false;
      // this.$router.push("/bidinfo")
    },
    buy() {
      this.$router.push("/information");
    },
    gs(id) {
      // this.$router.push("/information");
      fuwushanginfo(id).then((t)=>{
      console.log("服务商信息",t)
    })
    },
    getCurrentCity() {
      // console.log(getCurrentCityName())
      this.city ||
        getCurrentCityName().then(city => {
          // console.log(city);
          this.$data.city = city.substring(0, city.length - 1);
        });
    },
    location() {
      this.$router.push("/location");
    },
    gscaigou() {
      this.$router.push("/information");
    }
  },
  mounted() {
    this.getCurrentCity();
  },
  updated() {
    this.$data.city = sessionStorage.getItem("location")
      ? sessionStorage.getItem("location")
      : this.$data.city;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
.moreinfo{
  width: 90px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 22px;
  background: #fff;
  border-radius:10px;
  border: 0;
  border:1px solid #eee;
  color: #666;
}
#header {
  width: 100%;
  /* height:559px; */
  padding-bottom: 16px;
  background: linear-gradient(
    180deg,
    rgba(0, 123, 255, 1),
    rgba(124, 187, 255, 1),
    rgba(248, 248, 248, 1)
  );
}
.header-top {
  padding-top: 30px;
  overflow: hidden;
}
.header-img {
  margin-left: 34px;
  width: 65px;
  height: 65px;
  float: left;
}
.header-location {
  float: left;
  width: 15%;
  margin-left: 30px;
}
.header-location span {
  width: 100%;
  height: 34px;
  font-size: 36px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 65px;
}
.header-location img {
  width: 18px;
  height: 10px;
  float: right;
  margin-top: 30px;
  margin-left: 10px;
}
.header-input {
  float: left;
  margin-left: 30px;
  width: 63%;
  height: 68px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  position: relative;
}
.header-input img {
  width: 25px;
  height: 25px;
  position: absolute;
  left: 35px;
  top: 21px;
}
.header-input input {
  position: absolute;
  left: 74px;
  top: 21px;
  font-size: 25px;
  border: 0;
  outline: 0;
}
.header-list {
  padding: 35px 60px 40px 60px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-list div {
  text-align: center;
}
.header-list img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.header-list span {
  display: block;
  color: #fff;
  font-size: 26px;
  align-items: center;
}
.header-server {
  width: 90%;
  /* height: 207px; */
  background: rgba(255, 255, 255, 1);
  border-radius: 40px 40px 10px 10px;
  padding: 40px 0 30px 19px;
  margin-left: 4%;
}
.server-span {
  display: block;
  width: 9px;
  height: 27px;
  background: rgba(0, 123, 255, 1);
  border-radius: 2px;
  float: left;
  margin-right: 5px;
  margin-top: 9px;
}
.header-server p {
  font-size: 32px;
  color: #333;
  font-family: PingFang SC;
}
.header-server ul {
  padding: 33px 20px 0px 0px;
  overflow: hidden;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
}
.header-server ul li {
  position: relative;
  text-align: center;
  float: left;
  margin: 5px  30px;
}
.header-server ul li img {
  width: 85px;
  height: 85px;
  margin-bottom: 10px;
}
.header-server ul li span {
  display: block;
  font-size: 24px;
  color: #333;
}
.header-server .price-good {
  position: absolute;
  right: 0;
  top: -15px;
  font-size: 20px;
  color: #fff;
  background: #fe2a29;
  padding: 3px;
  border-radius: 15px 15px 15px 3px;
}
.shop-wrap {
  background: #f8f8f8;
  padding-bottom: 16px;
}
.header-caigou {
  overflow: hidden;
  width: 90%;
  padding: 33px 0px 42px 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
}
.header-caigou ul {
  padding-bottom: 42px;
}
/* banner */
#banner {
  width: 100%;
  /* height: 200px; */
  overflow: hidden;
}
#banner img {
  width: 100%;
  /* height: 200px; */
}
/* now-idea */
.now-idea {
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 26px;
  color: #333;
  position: relative;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #fff;
  overflow: hidden;
}
.now-idea img:nth-of-type(1) {
  width: 80px;
  height: 59px;
  float: left;
  margin: 11px 36px 10px 32px;
}
.new-plus {
  float: left;
  width: 70px;
  height: 70px;
  color: #ff9500;
  font-size: 24px;
  margin-right: 6px;
}
.new-plus span {
  border: 1px solid rgba(255, 149, 0, 1);
  border-radius: 5px;
  padding: 3px 5px;
}
.speed-idea {
  font-size: 24px;
  width: 450px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: left;
}
.circle {
  display: block;
  position: absolute;
  top: 32px;
  right: 59px;
  width: 15px;
  height: 15px;
  background: rgba(239, 67, 65, 1);
  border-radius: 50%;
}
.now-idea img:nth-of-type(2) {
  width: 10px;
  height: 18px;
  position: absolute;
  top: 30px;
  right: 34px;
}
/* exports */
.exports,
.server {
  overflow: hidden;
  background: #fff;
}
.check {
  width: 39%;
  height: 110px;
  background: #fff;
  float: left;
  padding: 20px 40px 15px 40px;
  position: relative;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.hot {
  position: absolute;
  right: 0;
  top: 0;
  width: 46px;
  height: 49px;
}
.audit,
.heart {
  float: left;
  width: 35px;
  height: 34px;
  margin-right: 11px;
  margin-top: 9px;
}
.check li h3,
.server-h3 {
  font-size: 32px;
  color: #333;
  font-weight: normal;
  line-height: 48px;
}
.check li span,
.server-content {
  color: #999;
  font-size: 22px;
  line-height: 36px;
  margin-right: 10px;
}
.jt {
  width: 10px;
  height: 18px;
}
/* server */
.server-wrap {
  width: 25%;
  height: 98px;
  padding: 30px 30px 30px 30px;
  position: relative;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  float: left;
}
.stores {
  overflow: hidden;
  /* height: 200px; */
  text-align: center;
  background: #fff;
}
.total-stores {
  float: left;
  width: 24%;
  /* height: 120px; */
  text-align: center;
  padding: 40px 30px 38px 32px;
}
.total-b {
  color: #ef4341;
  font-size: 40px;
  font-weight: 800;
}
.total-wei {
  color: #ef4341;
  font-size: 28px;
}
.leiji {
  width: 153px;
  height: 61px;
  text-align: center;
  font-size: 26px;
  color: #333;
  font-weight: 500;
}
/* main information */
.main-information {
  height: 90px;
  line-height: 90px;
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
.main-information .information-more {
  float: right;
  font-size: 28px;
  margin-right: 35px;
  color: #999;
}
.main-information span:nth-of-type(1) {
  display: block;
  width: 9px;
  height: 27px;
  background: rgba(0, 123, 255, 1);
  border-radius: 2px;
  margin: 33px 5px 0px 34px;
  float: left;
}
.main-information h3 {
  font-size: 34px;
  font-weight: bold;
  float: left;
}
.information-spread {
  position: relative;
  padding: 50px 32px 23px 32px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
}
.information-spread .information-blue {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0px;
  border-right: 19px solid rgba(0, 123, 255, 1);
  border-top: 19px solid rgba(0, 123, 255, 1);
  border-left: 19px solid transparent;
  border-bottom: 19px solid transparent;
}
.spread-location {
  width: 89px;
  height: 30px;
  background: linear-gradient(
    94deg,
    rgba(255, 157, 2, 1),
    rgba(255, 198, 0, 1)
  );
  border-radius: 5px;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  padding: 3px 8px 4px 10px;
}
.spread-public {
  width: 110px;
  height: 30px;
  border: 1px solid rgba(238, 67, 65, 1);
  font-size: 24px;
  color: #ee4341;
  padding: 3px 8px 4px 7px;
  border-radius: 5px;
}
.spread-gs {
  font-size: 30px;
  color: #999;
}
.spread-pub {
  font-size: 30px;
  line-height: 48px;
  color: #999;
  margin-bottom: 70px;
}
.information-clock {
  height: 32px;
  line-height: 32px;
  font-size: 28px;
  color: #999;
  position: relative;
}
.information-clock img:nth-of-type(2) {
  width: 34px;
  height: 34px;
}
.information-clock img:nth-of-type(1) {
  width: 32px;
  height: 32px;
  margin-right: 13px;
  position: relative;
  top: 3px;
}
.pay {
  float: right;
  margin-right: 101px;
  color: #ef4341;
}
.information-clock img:nth-of-type(2) {
  position: absolute;
  right: 36px;
  top: -2px;
}
.spread-unread {
  color: #333;
}
.unread-location {
  color: #007bff;
}
.unread {
  font-size: 30px;
  color: #333;
}
.unread-p {
  font-size: 30px;
  line-height: 48px;
  color: #333;
  margin-bottom: 70px;
}
</style>
