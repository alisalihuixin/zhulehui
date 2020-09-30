<template>
  <div class="info" id="bottom">
    <!-- 招标 -->
    <div class="qy-info">
      <div class="qy-search">
        <input type="text" placeholder="请输入您想查找的内容" />
        <img src="../assets/infoimg/ss.png" alt />
        <img class="zhaobiao" src="../assets/biddingimg/banner.png" alt />
      </div>
    </div>
    <!-- select -->
    <div class="qy-sel">
      <div class="qy-please">
        <select
          name="select1"
          id="select1"
          v-model="provinceactive"
          @click="changeprovince($event)"
        >
          <option v-for="(item,index) in province" :key="index" :value="item.id">{{item.value}}</option>
        </select>
      </div>

      <div class="qy-please">
        <select name="select2" id="select1" v-model="secondoption" @click="second1($event)">
          <option v-for="(its,index) in second" :key="index" :value="its.type">{{its.type}}</option>
        </select>
      </div>
      <div class="qy-please">
        <select name="select3" id="select1" v-model="thirdoption" @click="third1($event)">
          <option v-for="(itr,index) in third" :key="index" :value="itr.state">{{itr.state}}</option>
        </select>
      </div>
    </div>
    <ul>
      <li
        class="information-spread"
        v-for="(item,index) in serverarr"
        :key="index"
      >
        <span class="spread-location">{{item.address}}</span>
        <span class="spread-public">公开招标</span>
        <span class="spread-gs" @click="title(item.id)">{{item.title}}</span>
        <p class="spread-pub" @click="title(item.id)">年首阳山#1、2炉送风机改造工程招标公告</p>
        <div class="information-clock">
          <img src="../assets/img/clock_default.png" alt />
          <span class="spread-time">刚刚于</span>
          <span class="location">郑州</span>
          <span class="fabu">发布</span>
          <span class="pay">货到付款</span>
          <img src="../assets/img/collect_default.png" alt />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { fuwuindexList } from "@/util/api";

export default {
  name: "Bidding",
  data() {
    return {
      serverarr: [],
      second: [
        {
          id: "01",
          type: "全部"
        }
      ],
      third: [
        {
          id: "02",
          state: "全部"
        }
      ],
      province: [
        {
          id: "北京市",
          value: "北京市"
        },
        {
          id: "天津市",
          value: "天津市"
        },
        {
          id: "上海市",
          value: "上海市"
        },
        {
          id: "重庆市",
          value: "重庆市"
        },
        {
          id: "河北省",
          value: "河北省"
        },
        {
          id: "河南省",
          value: "河南省"
        },
        {
          id: "云南省",
          value: "云南省"
        },
        {
          id: "辽宁省",
          value: "辽宁省"
        },
        {
          id: "黑龙江省",
          value: "黑龙江省"
        },
        {
          id: "湖南省",
          value: "湖南省"
        },
        {
          id: "安徽省",
          value: "安徽省"
        },
        {
          id: "山东省",
          value: "山东省"
        },
        {
          id: "新疆维吾尔",
          value: "新疆维吾尔"
        },
        {
          id: "江苏省",
          value: "江苏省"
        },
        {
          id: "浙江省",
          value: "浙江省"
        },
        {
          id: "江西省",
          value: "江西省"
        },
        {
          id: "湖北省",
          value: "湖北省"
        },
        {
          id: "广西壮族",
          value: "广西壮族"
        },
        {
          id: "甘肃省",
          value: "甘肃省"
        },
        {
          id: "山西省",
          value: "山西省"
        },
        {
          id: "内蒙古",
          value: "内蒙古"
        },
        {
          id: "陕西省",
          value: "陕西省"
        },
        {
          id: "吉林省",
          value: "吉林省"
        },
        {
          id: "福建省",
          value: "福建省"
        },
        {
          id: "贵州省",
          value: "贵州省"
        },
        {
          id: "广东省",
          value: "广东省"
        },
        {
          id: "青海省",
          value: "青海省"
        },
        {
          id: "西藏",
          value: "西藏"
        },
        {
          id: "四川省",
          value: "四川省"
        },
        {
          id: "宁夏回族",
          value: "宁夏回族"
        },
        {
          id: "海南省",
          value: "海南省"
        },
        {
          id: "台湾省",
          value: "香港特别行政区"
        },
        {
          id: "澳门特别行政区",
          value: "澳门特别行政区"
        }
      ],
      provinceactive: "",
      secondoption: "",
      thirdoption: ""
    };
  },
  methods: {
    info(id) {
      this.$router.push({ path: "/bidinfocaigou", query: { id: id } });
    },
    changeprovince(event) {
      this.provinceactive = event.target.value;
      
    },
    second1(eve) {
      this.secondoption = eve.target.value;
    },
    third1(e) {
      this.thirdoption = e.target.value;
      
    },
    title(k) {
      // this.$router.push("/bidinfo")
      console.log(k);
      detaillist(k).then((res)=>{
        // console.log(res)
        if(res.code==200){
          this.$router.push({path:"/bidinfo",query:{key:k}})
        }
      })
    }
  },
  created() {
    fuwuindexList().then(res => {
      console.log(res);
      if (res.code == 200) {
        this.$data.serverarr = res.data.row;
      }
    });
    pubtitleList().then(e => {
      // console.log(e);
      if (e.code == 200) {
        this.$data.serverarr = e.data.res;
      }
    });
    selectoption().then(res => {
      if (res.code == 200) {
        res.data.res.map(item => {
          this.$data.second.push(item);
        });
        res.data.row.map(item => {
          this.$data.third.push(item);
        });
      }
    });
    threelist(this.provinceactive, this.secondoption, this.thirdoption).then(
      el => {
        console.log(el);
        if (el.code == 200) {
          this.$data.pubtitlelist = el.data.res;
        }
      }
    );
  }
};
</script>
<style scoped>
.info {
  overflow: hidden;
  background: #f5f5f5;
}
/* information */
.qy-search {
  width: 100%;
  height: 343px;
  background: #fff;
  padding: 10px 33px 35px 34px;
  margin-bottom: 15px;
  position: relative;
}
.qy-search input {
  width: 90%;
  height: 65px;
  border: 0;
  border-radius: 33px;
  background-color: #f4f4f4;
  font-size: 26px;
  text-indent: 30px;
  margin-bottom: 22px;
  outline: 0;
}
.zhaobiao {
  width: 90%;
  height: 250px;
}
.qy-search input::placeholder {
  color: #c6c6c6;
}
.qy-search img:nth-of-type(1) {
  width: 22px;
  height: 26px;
  position: absolute;
  right: 15%;
  top: 30px;
}
.qy-sel {
  background: #fff;
  width: 750px;
  height: 105px;
  line-height: 105px;
  font-size: 28px;
  color: #999;
  border-bottom: 1px solid #eee;
}
.qy-please {
  width: 170px;
  height: 105px;
  float: left;
  text-align: center;
}

#select1 {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  border: 0;
  outline: 0;
  text-align: center;
  font-size: 28px;
  color: #999;
}
.gs-msg {
  width: 750px;
  height: 164px;
  border-bottom: 1px solid #eee;
  background: #fff;
  position: relative;
}
.msg-img1 {
  width: 160px;
  height: 137px;
  text-align: center;
  padding-top: 27px;
  float: left;
}
.msg-gc {
  float: left;
  padding-top: 27px;
  font-size: 24px;
}
.msg-gc li:nth-of-type(1) {
  font-size: 30px;
  color: #333;
  line-height: 48px;
}
.msg-gc li:nth-of-type(2) {
  color: #fe9500;
}
.msg-gc li:nth-of-type(2) img {
  position: relative;
  top: 5px;
}
.msg-gc li:nth-of-type(3) {
  line-height: 48px;
}
.msg-line {
  color: #999;
}
.price-msg {
  color: #007bff;
}
.num-msg {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
}
.num-msg p:nth-of-type(1) {
  font-size: 34px;
  color: #ff8a00;
  margin-bottom: 10px;
}
.num-msg p:nth-of-type(2) {
  width: 89px;
  height: 30px;
  line-height: 30px;
  background: linear-gradient(
    94deg,
    rgba(255, 157, 2, 1),
    rgba(255, 198, 0, 1)
  );
  border-radius: 5px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  padding: 3px 5px;
}

.information-spread {
  position: relative;
  padding: 30px 32px 23px 32px;
  background: #fff;
  border-bottom: 1px solid #eee;
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
  color: #333;
}
.spread-pub {
  font-size: 30px;
  line-height: 48px;
  color: #333;
  margin-bottom: 70px;
}
.information-clock {
  height: 32px;
  line-height: 32px;
  font-size: 28px;
  color: #666;
  position: relative;
}
.information-clock img:nth-of-type(1) {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  position: relative;
  top: 5px;
}
.pay {
  float: right;
  margin-right: 101px;
  color: #ef4341;
}
.information-clock img:nth-of-type(2) {
  width: 34px;
  height: 34px;
  position: absolute;
  right: 36px;
}
.location {
  color: #007bff;
}
</style>