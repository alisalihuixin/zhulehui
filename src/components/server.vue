<template>
  <div>
    <!-- 选择服务 -->
    <div class="sel-left">
      <div
        class="sel-com"
        v-for="(item,index) in productleft"
        :key="index"
        @click="production(item.id)"
        :class="{bg:index===isactive}"
      >
        <div class="border-tm">{{item.product}}</div>
      </div>
    </div>

    <div class="sel-right">
      <div class="bgf" @click="bgf" v-for="(item,index) in productright" :key="index">
        <span>{{item.product}}</span>
        <img src="../assets/myimg/jt.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { fuwuleft } from "@/util/api";
import { fuwuright } from "@/util/api";
import { fuwurightList } from "@/util/api";

export default {
  name: "Server",
  data() {
    return {
      productleft: [],
      productright: [],
      msg: "服务",
      isactive:''
    };
  },
  created() {
    fuwuleft().then(re => {
      console.log(re);
      if (re.code == 200) {
        this.$data.productleft = re.data.res;
      }
    });
    fuwuright().then(re => {
      console.log(re);
      if (re.code == 200) {
        this.$data.productright = re.data.res;
      }
    });
  },

  methods: {
    bgf() {
      this.$router.push("/information");
    },
    production(p) {
      console.log(p);
      this.isactive = p
      fuwurightList(p).then((element)=>{
        console.log(element)
        if(element.code==200){
          this.$data.productright=element.data.res
        }
      })
    }
  }
};
</script>

<style scoped>
.bg{
  background: #fff;
  color: #007bff;
}
.bgf {
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
  height: 120px;
  line-height: 120px;
  width: 100%;
}
.bgf span{
  padding-left: 10px;
  width: 80%;
  float: left;
}
.bgf img {
  width: 9px;
  height: 18px;
}
.border-tm {
  border-bottom: 1px solid #fff;
}
.sel-left{
  width: 30%;
  float: left;
}
.sel-com {
  height: 120px;
  line-height: 120px;
}
.sel-right {
  width: 70%;
  float: left;
}
.sel-com div:nth-of-type(1) {
  width: 266px;
  height: 120px;
  padding-left: 34px;
  color: #007bff;
  font-size: 28px;
  background: #f5f5f5;
  float: left;
}
.sel-com div:nth-of-type(2) {
  width: 417px;
  height: 120px;
  float: left;
  padding-left: 33px;
  font-size: 28px;
  color: #333;
  position: relative;
}
.sel-com div:nth-of-type(2) img {
  position: absolute;
  top: 50px;
  right: 34px;
}
.sel-com div.unhover {
  color: #333;
}
</style>