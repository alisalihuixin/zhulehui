<template>
  <div id="bottom">
    <!-- 公司详情 -->
    <div class="gs-allinfo">
      <img class="gs-img" src="../assets/gsimg/bg.png" alt />
      <!-- header -->
      <div class="gs-info">
        <img class="info-img1" src="../assets/gsimg/logo.png" alt />
        <ul class="info-list">
          <li>河南华润电力首阳山公司</li>
          <li>
            <span>河南省建设监理协会</span>
            <img src="../assets/gsimg/bs.png" alt />
          </li>
        </ul>
        <div class="gs-number">5.0</div>
      </div>
      <div class="info-line1"></div>
    </div>
    <!-- city location -->
    <div class="city-local">
      <span class="city-sheng">河南省</span>
      <img src="../assets/gsimg/city.png" alt />
      <span class="location-info">辽宁省沈阳市三好街百脑汇科技大厦1315</span>
      <div class="city-price">
        <span>造价工程</span>
        <span class="line-span">|</span>
        <span>工程监理</span>
        <span class="line-span">|</span>
        <span>工程审计</span>
        <span class="line-span">|</span>
        <span>司法鉴定</span>
        <span class="line-span">|</span>
        <span>司法鉴定</span>
      </div>
    </div>
    <div class="info-line1"></div>
    <!-- gs information -->
    <div class="gs-instruction">
      <div>
        <span class="gs-line"></span>
        <h3>公司简介</h3>
      </div>
      <span
        class="gs-create"
      >华为创立于1987年，是全球领先的ICT（信息与通信）基础设施和智能终端提供商，我们致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。目前华为有...</span>
      <span class="gs-big">展开</span>
      <ul class="gs-pic">
        <li>
          <img src="../assets/gsimg/img.png" alt />
        </li>
        <li>
          <img src="../assets/gsimg/img.png" alt />
        </li>
        <li>
          <img src="../assets/gsimg/img.png" alt />
        </li>
      </ul>
    </div>
    <!-- product information -->
    <div class="production-info">
      <div  class="gs-instruction">
        <span class="gs-line"></span>
        <h3>产品信息</h3>
      </div>

      <ul class="productions">
        <li>
          <div class="gc-tu">土木工程</div>
          <div class="gc-pri">
            <div class="gc-wrap">
               <img src="../assets/gsimg/img2.png" alt />
            </div>
            <span>泥土</span>
            <span>1520元/吨</span>
            <span>立即咨询</span>
          </div>
        </li>
        <li>
          <div class="gc-tu gc-tumu">土木工程</div>
          <div class="gc-pri">
            <div class="gc-wrap">
               <img src="../assets/gsimg/img2.png" alt />
            </div>
            <span>泥土</span>
            <span>1520元/吨</span>
            <span>立即咨询</span>
          </div>
        </li>
        <li>
          <div class="gc-tu gc-tumu">土木工程</div>
          <div class="gc-pri">
            <div class="gc-wrap">
               <img src="../assets/gsimg/img2.png" alt />
            </div>
            <span>泥土</span>
            <span>1520元/吨</span>
            <span>立即咨询</span>
          </div>
        </li>
        <li>
          <div class="gc-tu gc-tumu">土木工程</div>
          <div class="gc-pri">
            <div class="gc-wrap">
               <img src="../assets/gsimg/img2.png" alt />
            </div>
            <span>泥土</span>
            <span>1520元/吨</span>
            <span>立即咨询</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
/* gs header */
.gs-img {
  width: 750px;
  height: 200px;
}
.gs-allinfo{
  background-color: #fff;
}
.gs-info {
  width: 750px;
  border-radius: 30px 30px 0px 0px;
  background: #fff;
  position: relative;
  top: -30px;
}
.gs-info .info-img1 {
  width: 114px;
  height: 114px;
  position: absolute;
  top: -20px;
  left: 34px;
}
.info-list {
  margin-left: 150px;
  font-size: 24px;
  color: #999;
  line-height: 40px;
}
.info-list li:nth-of-type(1) {
  font-size: 30px;
  color: #333;
  padding-top: 15px;
}
.info-list li:nth-of-type(2) img {
  width: 23px;
  height: 24px;
  position: relative;
  top: 5px;
  z-index: 999;
}
.gs-number {
  position: absolute;
  right: 0;
  top: 0;
  width: 150px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 58px;
  color: #ff8a00;
}
.info-line1 {
  border: 1px solid #eee;
  width: 670px;
  height: 1px;
  margin-left: 35px;
}
/* city location */
.city-local {
  background: #fff;
  padding: 13px 30px 28px 34px;
}
.city-sheng {
  width: 89px;
  height: 30px;
  background: linear-gradient(
    94deg,
    rgba(255, 157, 2, 1),
    rgba(255, 198, 0, 1)
  );
  border-radius: 5px;
  padding: 3px 10px;
  color: #fff;
  font-size: 24px;
  margin-right: 10px;
}
.city-local img {
  width: 21px;
  height: 25px;
  margin-right: 10px;
}
.location-info {
  font-size: 28px;
  color: #333;
}
.city-price {
  margin-top: 30px;
  font-size: 24px;
  color: #007bff;
}
.line-span {
  margin: 0 10px;
  color: #999;
}
/* gs-instruction */
.production-info{
  background: #fff;
}
.gs-instruction {
  padding: 24px 34px 0;
  font-size: 24px;
  color: #666;
  background: #fff;
}
.gs-line {
  width: 9px;
  height: 27px;
  background: #007bff;
  border-radius: 2px;
  margin-right: 10px;
  margin-top: 5px;
  line-height: 40px;
  float: left;
}
.gs-instruction h3 {
  float: left;
  width: 97%;
  font-size: 30px;
  color: #333;
  margin-bottom: 20px;
}
.gs-create {
  line-height: 40px;
}
.gs-big {
  color: #007bff;
  float: right;
  line-height: 40px;
}
.gs-pic {
  margin-top: 30px;
  overflow: hidden;
}
.gs-pic li {
  float: left;
  margin-right: 32px;
}
.gs-pic li:nth-of-type(3) {
  margin-right: 0px;
}
.gs-pic  img{
  width: 205px;
  height: 118px;
}
/* product */
.productions{
  width: 750px;
  overflow: hidden;
}
.productions li{
  width: 750px;
  height: 100px;
}
.gc-tu{
  width: 214px;
  height: 100px;
  line-height: 100px;
  background: #f5f5f5;
  text-align: center;
  font-size: 28px;
  color: #077EFF;
  float: left;
}
.gc-pri{
  float: left;
  line-height: 100px;
  font-size: 28px;
  height: 100px;
}
.gc-pri span:nth-of-type(1){
  color: #333;
  margin-right: 80px;
}
.gc-pri span:nth-of-type(2){
  color: #067EFF;
  margin-right: 30px;
}
.gc-pri span:nth-of-type(3){
  font-size: 24px;
  color: #FF8A00;
}
.gc-wrap{
  float: left;
  width: 100px;
  height: 80px;
  text-align: center;
  margin-top: 16px;
}
.gc-wrap img{
  width: 55px;
  height: 55px;
}
.gc-tumu{
  color: #333;
}
</style>