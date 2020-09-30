<template name="component-name">
  <div>
    <form ref="form" :model="form">
      <div class="gongcheng">
        <label>工程类型</label>
        <input v-model="form.name" />
      </div>

      <div class="gongcheng">
        <label>联系方式</label>
        <input v-model="form.phone" />
      </div>

      <div class="gongcheng">
        <label>咨询类别</label>
        <select v-model="form.region">
          <option
            v-for="(item,index) in leibie"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></option>
        </select>
      </div>

      <div class="gongcheng">
        <label>需求描述</label>
        <input type="textarea" v-model="form.desc" />
      </div>

      <div class="gongcheng">
        <button type="primary" @click="onSubmit">提交</button>
        <button>取消</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        region: "",
        desc: ""
      },
      leibie: [
        {
          label: "请选择咨询类别",
          value: "select"
        },
        {
          label: "咨询类别1",
          value: "leibie1"
        },
        {
          label: "咨询类别2",
          value: "leibie2"
        },
        {
          label: "咨询类别3",
          value: "leibie3"
        }
      ]
    };
  },
  created(){
    this.form.region = this.leibie[0].label
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.data.form.name);
      // console.log(this.data.leibie);
    }
  }
};
</script>
<style scoped>
form {
  background: #fff;
  padding-top: 40px;
  height: 500px;
}
.gongcheng {
  height: 80px;
  line-height: 80px;
}
label {
  width: 200px;
  display: inline-block;
  text-align: center;
  font-size: 28px;
}
input {
  width: 60%;
  height: 60px;
  border: 1px solid #eee;
  border-radius: 10px;
  outline: 0;
  text-indent: 10px;
  font-size: 28px;
}
select {
  width: 60%;
  height: 60px;
  border: 1px solid #eee;
  border-radius: 10px;
  outline: 0;
}
button{
  margin-top: 20px;
  background:rgb(126, 209, 248);
  width: 200px;
  height: 70px;
  border: 0;
  border:1px solid #eee;
  border-radius: 10px;
  color: #fff;
  margin-left: 40px;
  font-size: 28px;
  outline: 0;
}
</style>