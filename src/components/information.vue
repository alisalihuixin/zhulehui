<template>
  <div class="info">
    <!-- 企业信息 -->
    <div class="qy-info">
      <div class="qy-search">
        <input type="text" placeholder="请输入您想查找的内容" />
        <img src="../assets/infoimg/ss.png" alt />
        <img class="qy-banner" src="../assets/infoimg/banner.png" alt />
      </div>
    </div>
    <!-- select -->
    <div class="qy-sel">
      <div class="qy-please">
        <select name="select1" id="select1">
          <option value="">请选择</option>
          <option value="0">请选择</option>
          <option value="1">请选择</option>
          <option value="2">请选择</option>
        </select>
      </div>
      <div class="qy-please">
       <select name="select1" id="select1">
          <option value="">请选择</option>
          <option value="0">请选择</option>
          <option value="1">请选择</option>
          <option value="2">请选择</option>
        </select>
      </div>
      <div class="qy-please">
        <select name="select1" id="select1">
          <option value="">请选择</option>
          <option value="0">请选择</option>
          <option value="1">请选择</option>
          <option value="2">请选择</option>
        </select>
      </div>
    </div>
    <!-- gs infomation -->
    <div class="gs-msg" @click="creategs">
      <div class="msg-img1">
        <img src="../assets/infoimg/logo.png" alt />
      </div>
      <ul class="msg-gc" >
        <li>河南华润电力首阳山有限公司</li>
        <li>
          <span>河南省建设监理协会</span>
          <img class="msg-img2" src="../assets/infoimg/biao.png" alt />
        </li>
        <li>
          <span class="price-msg">造价工程</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程监理</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程审计</span>
          <span class="msg-line">|</span>
          <span class="price-msg">司法鉴定</span>
        </li>
      </ul>
      <div class="num-msg">
        <p>5.0</p>
        <p>河南省</p>
      </div>
    </div>
    <div class="gs-msg" @click="creategs">
      <div class="msg-img1">
        <img src="../assets/infoimg/logo.png" alt />
      </div>
      <ul class="msg-gc">
        <li>河南华润电力首阳山有限公司</li>
        <li>
          <span>河南省建设监理协会</span>
          <img class="msg-img2" src="../assets/infoimg/biao.png" alt />
        </li>
        <li>
          <span class="price-msg">造价工程</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程监理</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程审计</span>
          <span class="msg-line">|</span>
          <span class="price-msg">司法鉴定</span>
        </li>
      </ul>
      <div class="num-msg">
        <p>5.0</p>
        <p>河南省</p>
      </div>
    </div>
    <div class="gs-msg" @click="creategs">
      <div class="msg-img1">
        <img src="../assets/infoimg/logo.png" alt />
      </div>
      <ul class="msg-gc">
        <li>河南华润电力首阳山有限公司</li>
        <li>
          <span>河南省建设监理协会</span>
          <img class="msg-img2" src="../assets/infoimg/biao.png" alt />
        </li>
        <li>
          <span class="price-msg">造价工程</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程监理</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程审计</span>
          <span class="msg-line">|</span>
          <span class="price-msg">司法鉴定</span>
        </li>
      </ul>
      <div class="num-msg">
        <p>5.0</p>
        <p>河南省</p>
      </div>
    </div>
    <div class="gs-msg" @click="creategs">
      <div class="msg-img1">
        <img src="../assets/infoimg/logo.png" alt />
      </div>
      <ul class="msg-gc">
        <li>河南华润电力首阳山有限公司</li>
        <li>
          <span>河南省建设监理协会</span>
          <img class="msg-img2" src="../assets/infoimg/biao.png" alt />
        </li>
        <li>
          <span class="price-msg">造价工程</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程监理</span>
          <span class="msg-line">|</span>
          <span class="price-msg">工程审计</span>
          <span class="msg-line">|</span>
          <span class="price-msg">司法鉴定</span>
        </li>
      </ul>
      <div class="num-msg">
        <p>5.0</p>
        <p>河南省</p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  methods: {
    creategs(){
      this.$router.push("/gs")
    }
  }
}
</script>
<style scoped>
/* information */
.info {
  background-color: #eee;
  overflow: hidden;
}
.qy-search {
  width: 683px;
  height: 343px;
  background: #fff;
  padding: 10px 33px 35px 34px;
  margin-bottom: 15px;
  position: relative;
}
.qy-search input {
  width: 682px;
  height: 65px;
  border: 0;
  border-radius: 33px;
  background-color: #f4f4f4;
  font-size: 26px;
  text-indent: 30px;
  margin-bottom: 22px;
  outline: 0;
}
.qy-banner{
  width: 682px;
  height: 250px;
}
.qy-search input::placeholder {
  color: #c6c6c6;
}
.qy-search img:nth-of-type(1) {
  width: 22px;
  height: 26px;
  position: absolute;
  right: 60px;
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
#select1{
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
.msg-img1 img{
  width: 110px;
  height: 110px;
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
  width: 23px;
  height: 24px;
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
  padding:3px 5px ;
}
</style>