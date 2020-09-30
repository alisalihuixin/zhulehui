<template>
  <div id="spread-information">
    <!-- 发布信息 -->
    <ul class="pingtai">
      <li>请选择你的需求</li>
      <li>我们在这里可以获得更多的项目合作机会</li>
    </ul>
    <!-- 个人性质 -->
    <div class="person">
      <div class="need">
        <span></span>
        <span>我有资源</span>
        <span></span>
      </div>
      <ul class="person-list">
        <li
          v-for="(item,index) in arr"
          :key="index"
          @click="gs(index)"
          :class="{click:index===isactive}"
        >{{item}}</li>
      </ul>
    </div>
    <!-- 我有需求 -->
    <div class="person">
      <div class="need">
        <span></span>
        <span>我有需求</span>
        <span></span>
      </div>
      <ul class="person-list">
        <li
          v-for="(item,index1) in arr1"
          :key="index1"
          @click="gs1(index1)"
          :class="{click:index1===isactive1}"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Add",
  data() {
    return {
      isactive: -1,
      isactive1: -1,
      arr: [
        "公司加盟",
        "公司合作",
        "公司转让",
        "标书制作",
        "证照办理",
        "人才招聘",
        "办公出租",
        "创业投资"
      ],
      arr1: [
        "我要加盟",
        "项目合作",
        "公司求购",
        "标书求购",
        "需求证书",
        "简历求聘",
        "办公求租",
        "项目融资"
      ]
    };
  },
  methods: {
    gs(index) {
      this.isactive = index;
      let arrmsg = this.arr[index];
      let _this = this;
      setTimeout(function() {
        _this.$router.push({ path: "/publish", query: { arrmsg: arrmsg } });
      },1000);
    },
     gs1(index1) {
      this.isactive1 = index1;
      let arrmsg = this.arr1[index1];
      let _this = this;
      setTimeout(function() {
        _this.$router.push({ path: "/publish", query: { arrmsg: arrmsg } });
      },90);
    }
  }
};
</script>
<style scoped>
#spread-information {
  background: #fff;
  height: 1318px;
}
.pingtai {
  padding-top: 38px;
  text-align: center;
}
.pingtai li:nth-of-type(1) {
  font-size: 42px;
  color: #121829;
  line-height: 50px;
  font-weight: bold;
}
.pingtai li:nth-of-type(2) {
  font-size: 28px;
  line-height: 50px;
  color: #4d5161;
}
.person {
  font-size: 28px;
  color: #333;
}
.person h4 {
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}
.person h4 img {
  position: relative;
  top: -4px;
}
.person-list {
  width: 100%;
  overflow: hidden;
}
.person-list li {
  margin-left: 4%;
  width: 20%;
  height: 82px;
  border: 1px solid rgba(216, 221, 228, 1);
  border-radius: 41px;
  float: left;
  line-height: 82px;
  text-align: center;
  margin-bottom: 35px;
}
.need {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 30px;
  font-size: 26px;
  color: #999;
  position: relative;
}
.need span:nth-of-type(1),
.need span:nth-of-type(3) {
  position: absolute;
  display: block;
  width: 16px;
  border: 2px solid #98a0a7;
  border-radius: 2px;
}
.need span:nth-of-type(1) {
  top: 17px;
  left: 290px;
}
.need span:nth-of-type(3) {
  top: 17px;
  right: 294px;
}
.click {
  background: #007bff;
  color: #fff;
}
</style>