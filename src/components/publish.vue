<template>
  <div class="require">
    <!-- 发布需求 -->

    <div class="req">
      <img src="../assets/publishimg/icon1.png" alt />
      <span>填写个人信息</span>
    </div>
    <ul class="pub-info">
      <li>
        <span>联系人</span>
        <input type="text" class="info-lianxi" v-model="personname" />
      </li>
      <li>
        <span>联系电话</span>
        <input type="text" class="info-lianxi" v-model="phone" />
      </li>
      <li class="ownlocation">
        <span>所属地区</span>

        <select name="address" id="addressnow" v-model="address" @click="address($event)">
          <option value>请选择您的所属地区</option>
          <option v-for="(item,index) in province" :key="index" :value="item.id">{{item.value}}</option>
        </select>
      </li>
    </ul>
    <div class="req">
      <img src="../assets/publishimg/icon2.png" alt />
      <span>发布需求信息</span>
    </div>
    <ul class="pub-title">
      <li>
        <span>标题</span>
        <span>
          <input type="text" class="input-title" v-model="title" />
        </span>
      </li>
      <li>
        <span>类别</span>
        <select name="zizhi" id="sel" v-model="fenlei" @change="opt($event)">
          <!-- <option value>{{arrmsg}}</option> -->
          <option v-for="(item,index) in cate" :key="index" :value="item.name">{{item.name}}</option>
        </select>
      </li>
      
      <li>
        <p>需求描述</p>
        <textarea v-model="des" @click="text" @blur="tet"></textarea>
      </li>
    </ul>
    <footer @click="submit">发布</footer>
  </div>
</template>
<script>
import { leibielist } from "@/util/api";
export default {
  data() {
    return {
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
      personname: "",
      phone: "",
      address: "",
      title: "",
     
      des: "请具体描述您的需求",
      cate: [
        {
          id:"01",
          name:"请选择类别"
        }
      ],
      arrmsg: "",
      fenlei: ""
    };
  },
  methods: {
    address(e){
      console.log(e)
      console.log(e.tartget.value)
    },
    text() {
      if (this.des.trim() == "请具体描述您的需求") {
        this.des = "";
      }
    },
    tet() {
      if (this.des.trim() === "") {
        this.des = "请具体描述您的需求";
      }
    },
    submit() {
      if (
        this.personname.trim() === "" ||
        this.phone.trim() === "" ||
        this.address == 0 ||
        this.title.trim() === "" ||
        this.fenlei == 0 ||
        this.des.trim() === ""
      ) {
        alert("输入信息有误");
      } else {
        console.log("username",this.personname);
        console.log("phone",this.phone);
        console.log("address",this.address);
        console.log("title",this.title);
        console.log("fenlei",this.fenlei);
        console.log("des",this.des);
      }
    },
    opt(event) {
      this.fenlei= event.tartget.value
    }
  },

  created() {
  this.fenlei = this.cate[0].name;
    
    leibielist().then((res)=>{
      // console.log(res)
      if(res.code==200){
        this.$data.cate=res.data.res
      }
    })
  }
};
</script>
<style scoped>
.require {
  background-color: #f5f5f5;
}
.input-title {
  border: 0;
  height: 80px;
  text-align: right;
  outline: 0;
  font-size: 30px;
}
.req {
  width: 90%;
  height: 94px;
  padding-left: 5%;
  line-height: 94px;
  font-size: 30px;
  color: #3c454a;
  font-weight: bold;
}
.req img {
  width: 34px;
  height: 34px;
  position: relative;
  top: 7px;
  margin-right: 5px;
}
.pub-info {
  width: 90%;
  height: 330px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.11);
  border-radius: 10px;
  margin-left: 5%;
}
.pub-info li {
  height: 110px;
  border-bottom: 1px solid #eee;
  font-size: 30px;
  color: #333;
  line-height: 110px;
  padding-left: 25px;
  position: relative;
}
select {
  width: 300px;
  height: 98%;
  float: right;
  margin-right: 23px;
  line-height: 60px;
  border: 0;
  color: #666;
  outline: 0;
  font-size: 28px;
}
.lianxi1 {
  margin-right: 50px;
}
.ownlocation {
  position: relative;
}
.lianxi-img {
  width: 14px;
  height: 7px;
  position: absolute;
  right: 21px;
  top: 53px;
}
.info-lianxi {
  position: absolute;
  right: 0;
  width: 300px;
  height: 100px;
  outline: 0;
  border: 0;
  font-size: 30px;
  text-align: right;
  margin-right: 20px;
}
.pub-title {
  margin-left: 5%;
  width: 90%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.11);
  border-radius: 10px;
  background: #fff;
}
.pub-title li {
  height: 108px;
  line-height: 108px;
  border-bottom: 1px solid #eee;
  font-size: 30px;
  color: #333;
  padding-left: 25px;
  position: relative;
}
.pub-title li span:nth-of-type(2) {
  float: right;
  margin-right: 23px;
  color: #666;
}
.pub-title li:nth-of-type(3) {
  height: 333px;
}
.pub-title li span.title-com {
  margin-right: 50px;
}
.zizhi {
  width: 14px;
  height: 7px;
  position: absolute;
  top: 50px;
  right: 23px;
}
textarea {
  float: left;
  font-size: 28px;
  color: #999;
  width:100%;
  height: 200px;
  border: 0;
  resize: none;
  outline: 0;
}
/* footer */
footer {
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: #007bff;
}
</style>