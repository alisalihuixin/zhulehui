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

        <select name="address" id="addressnow" v-model="address">
          <option value>请选择您的所属地区</option>
          <option value="1">吉林</option>
          <option value="2">辽宁</option>
          <option value="3">黑龙江</option>
          <option value="4">北京</option>
          <option value="5">内蒙古</option>
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
        <select name="zizhi" id="sel" v-model="fenlei" @change="opt(fenlei)">
          <option value>{{arrmsg}}</option>
          <option v-for="(item,index) in cate" :key="index" :value="index">{{item}}</option>
        </select>
      </li>
      <!-- <li>
        <span>资质</span>
        <select name="zizhilei" v-model="zizhi">
          <option value>请选择您的资质类别</option>
          <option value="1">资质类别</option>
          <option value="2">资质类别</option>
          <option value="3">资质类别</option>
          <option value="4">资质类别</option>
        </select>
      </li> -->
      <li>
        <p>需求描述</p>
        <textarea v-model="des" @click="text" @blur="tet"></textarea>
      </li>
    </ul>
    <footer @click="submit">发布</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      personname: "",
      phone: "",
      address: "",
      title: "",
      fenlei: "",
      zizhi: "",
      des: "请具体描述您的需求",
      cate: [
         "我要加盟",
        "项目合作",
        "公司求购",
        "标书求购",
        "需求证书",
        "简历求聘",
        "办公求租",
        "项目融资"
      ],
      arrmsg: "",
      fenlei: ""
    };
  },
  methods: {
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
        this.fenlei.trim() == 0 ||
        this.zizhi.trim() == 0 ||
        this.des.trim() === ""
      ) {
        alert("输入信息有误");
      } else {
        // $.ajax({
        //   url:"",
        //   success:function(res){
        //     console.log(res)
        //   }
        // })
        console.log(this.personname);
        console.log(this.phone);
        console.log(this.address);
        console.log(this.title);
        console.log(this.fenlei);
        console.log(this.zizhi);
        console.log(this.des);
      }
    },
    opt(item) {
      console.log(this.cate[item]);
    }
  },

  created() {
    this.arrmsg = this.$route.query.arrmsg
      ? this.$route.query.arrmsg
      : "公司加盟";
    // console.log(this.$route.query.arrmsg)  add传过来的值
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
}
.req {
  width: 715px;
  height: 94px;
  padding-left: 35px;
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
  width: 682px;
  height: 330px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.11);
  border-radius: 10px;
  margin-left: 34px;
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
  margin-left: 34px;
  width: 682px;
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
  text-align: left;
  font-size: 28px;
  color: #999;
  width: 630px;
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
  width: 750px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: #007bff;
}
</style>