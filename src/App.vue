<template>
  <div id="app">
    <router-view/>
    <div id="footer">
            <ul>
                <router-link to="/" exact tag="li">
                    <i class="iconfont icon-shouye"></i>
                    <span class="selected">首页</span>
                </router-link>
                
                <router-link to="/server"  tag="li">
                     <i class="iconfont icon-fuwu"></i>
                    <span>服务</span>
                </router-link>
                <router-link to="/add" tag="li" class="center">
                    <i class="jia">
                        <span class="green"></span>
                        <i class="iconfont icon-jia"></i>            
                    </i>
                </router-link> 
                <router-link to="/shop" tag="li">
                   <i class="iconfont icon-icon_caigou"></i>
                    <span>采购</span>
                </router-link> 
                <router-link to="/my" tag="li">
                    <i class="iconfont icon-mine-red"></i>
                    <span>我的</span>
                </router-link>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
         todos:[
             {
                 id:1,
                 
             }
         ]
      }
  },
  
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
}

body{
    font-family:PingFang SC;
    background: #f5f5f5;
}
li{
    list-style: none;
}
#app{
    width: 100% !important;
    height: 100% !important;
}
#bottom{
    margin-bottom:98px;
}
#footer{
    position:fixed;
    bottom:0;
    width:100%;
    height:98px;
    line-height: 98px;
    box-shadow:0px 3px 13px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    z-index: 9;
}
#footer ul{
    display: flex;
    flex-direction: row;
    justify-content:space-between
}
#footer ul li{
    width: 20%;
    text-align: center;
    color:#666;
    font-size: 20px;
}
#footer ul li span{
    position: relative;
    top: -15px;
}
#footer ul li .iconfont{
    width:100%;
    height:38px;
    display:block;
    font-size:38px;
}
#footer ul li .iconfont::before{
    position: relative;
    top:-15px;
    width:38px;
    height:38px;
}
#footer ul li .jia{
    text-align: center;
    display: block;
    width:101px;
    height:64px;
    background:rgba(4,128,254,1);
    border-radius:28px;
    margin-top: 18px;
    overflow: hidden;
    position: relative;
}
#footer ul li.router-link-active{
    color: #116CFF;
}
.icon-jia{
    color: #fff;
} 
#footer ul li .green{
    position: absolute;
    top: 40px;
    right: 18px;
    display: block;
    width:65px;
    height:50px;
    background:rgba(20,251,174,1);
    border-radius:40px;
    box-shadow: 0px 0px 25px 20px rgba(20,251,174,1)
}
.center{
    margin-left: 35px;
}
select{
    background: #fff;
}
</style>
