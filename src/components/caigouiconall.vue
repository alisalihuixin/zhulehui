<template>
  <div>
    <div class="header-server">
      <span class="server-span"></span>
      <p>供销商信息</p>
      <ul>
        <li class="server-right" @click="gs" v-for="(item,index) in arr" :key="index">
          <img :src="item.thumb" alt />
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { caigouicon } from "@/util/api";
export default {
  name: "caigouiconall",
  data() {
    return {
      arr: []
    };
  },
  created() {
    caigouicon().then(re => {
      this.$data.arr = re.data.res;
    });
  }
};
</script>
<style scoped>
.header-server {
  width: 90%;
  overflow: hidden;
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
  /* overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between; */
}
.header-server ul li {
  position: relative;
  text-align: center;
  float: left;
  width: 100px;
  /* height: 100px; */
  margin: 5px 30px;
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
</style>