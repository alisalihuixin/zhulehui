<template>
  <div>
    <div class="t1">{{title}}</div>
    <div class="t1">{{content}}</div>
    <div>
      <img :src="img" alt />
    </div>
    <div class="footer">
      <el-button type="info" plain @click="zixunsubmit">如有需要，请点击咨询</el-button>
    </div>
  </div>
</template>
<script>
import { zhuanjiaid } from "@/util/api";
export default {
  name: "shenhe",
  data() {
    return {
      title: "",
      content: "",
      img: ""
    };
  },
  created() {
    var id = this.$route.query.exportid;
    zhuanjiaid(id).then(r => {
      console.log(r);
      if (r.code == 200) {
        this.$data.title = r.data.res[0].name;
        this.$data.content = r.data.res[0].content;
        this.$data.img = r.data.res[0].thumb;
      }
    });
  },
  methods: {
    zixunsubmit() {
      this.$router.push("/zixunsubmit");
    }
  }
};
</script>
<style scoped>
.t1 {
  width: 100%;
  color: #333;
  font-size: 26px;
  text-align: center;
  background: #fff;
  line-height: 50px;
}
div img {
  text-align: center;
  width: 100%;
  height: 100%;
  display: inline-block;
}
el-button {
  margin-top: 10px;
  text-align: center;
}
.footer{
  text-align: center;
}
</style>