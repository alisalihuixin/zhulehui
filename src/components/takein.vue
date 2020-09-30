<template>
  <div class="all-info">
    <!-- 入驻平台 -->
    <ul class="pingtai">
      <li>请选择你的需求</li>
      <li>我们在这里可以获得更多的项目合作机会</li>
    </ul>
    <!-- 个人性质 -->
    <div class="person">
      <h4>
        <span>个人性质</span>
        <img src="../assets/infoimg/xl.png" alt />
      </h4>
      <ul class="person-list">
        <li>公司加盟</li>
        <li>公司合作</li>
        <li class="click">公司转让</li>
        <li>标书制作</li>
        <li>证照办理</li>
        <li>人才招聘</li>
        <li>办公出租</li>
        <li>创业投资</li>
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
        <li>我要加盟</li>
        <li>项目合作</li>
        <li>公司求购</li>
        <li>标书求购</li>
        <li>需求证书</li>
        <li>简历求聘</li>
        <li>办公求租</li>
        <li>项目融资</li>
      </ul>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.all-info{
  background-color: #fff;
  height: 1314px;
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
  width: 14px;
  height: 7px;
  position: relative;
  top: -5px;
}
.person-list {
  width: 750px;
  overflow: hidden;
}
.person-list li {
  margin-left: 20px;
  width: 155px;
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
  border: 2px solid #98A0A7;
  border-radius: 2px;
}
.need span:nth-of-type(1){
    top: 17px;
    left: 290px;
}
.need span:nth-of-type(3) {
    top: 17px;
    right: 294px;
}
.click{
    background: #007BFF;
    color: #fff;
}
</style>