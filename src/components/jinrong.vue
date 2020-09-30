<template>
    <div>
        <div class="t1">
            {{title}}
        </div>
        <div class="t1">{{content}}</div>
        <div>
            <img :src="img" alt="">
        </div>
    </div>
</template>
<script>
import {getexportjinrong} from "@/util/api"
export default {
    data(){
        return {
            title:"",
            content:"",
            img:''
        }
    },
    name:'jinrong',
    created(){
        getexportjinrong().then((res)=>{
            console.log(res)
            if(res.code==200){
                this.$data.title=res.data.title
                this.$data.content=res.data.content
                this.$data.img=res.data.thumb
            }
        })
    }
}
</script>
<style scoped>
.t1{
    width: 100%;
    color: #333;
    font-size: 26px;
    text-align: center;
    background: #fff;
    line-height: 50px;
}
div img{
    text-align: center;
    width: 100%;
    height: 100%;
    display: inline-block;
}
</style>