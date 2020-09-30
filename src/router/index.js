import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Server from '@/components/server'
import Add from '@/components/add'
import Shop from '@/components/shop'
import My from '@/components/my'
import Gs from '@/components/gs'
import Information from '@/components/information'
import Select from "@/components/select"
import Takein from "@/components/takein"
import Pub from "@/components/pub-sel"
import Publish from "@/components/publish"
import Publishone from "@/components/publish1"
import Bidding from "@/components/bidding"
import Bidinfo from "@/components/bidinfo"
import Location from "@/components/locationcontent"
import Shenhe from "@/components/shenhe"
import Zixun from "@/components/zixun"
import Weituo from "@/components/weituo"
import Caigou from "@/components/caigou"
import Jinrong from "@/components/jinrong"
import Cailiao from "@/components/cailiao"
import Fawu from "@/components/fawu"
import Caigouinfo from "@/components/bidinfocaigou"
import Fuwuiconall from "@/components/fuwuiconall"
import Caigouiconall from "@/components/caigouiconall"
import Zixunsubmit from "@/components/zixunsubmit"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/server',
      name:'server',
      component:Server
    },
    {
      path:'/add',
      name:'add',
      component:Add
    },
    {
      path:'/shop',
      name:'shop',
      component:Shop
    },
    {
      path:'/my',
      name:'my',
      component:My
    },
    {
      path:'/gs',
      name:'gs',
      component:Gs
    }
    ,{
      path:'/information',
      name:'information',
      component:Information
    },
    {
      path:'/select',
      name:'select',
      component:Select
    },
    {
      path:'/takein',
      name:'takein',
      component:Takein
    },
    {
      path:'/pub',
      name:'pub',
      component:Pub
    },
    {
      path:'/publish',
      name:'publish',
      component:Publish  
    },{
      path:'/publish1',
      name:'publish1',
      component:Publishone  
    },
    {
      path:'/bidding',
      name:'bidding',
      component:Bidding
    },
    {
      path:'/bidinfo',
      name:'bidinfo',
      component:Bidinfo
    },
    {
      path:'/location',
      name:'location',
      component:Location
    },
    {
      path:'/shenhe',
      name:'shenhe',
      component:Shenhe
    },
    {
      path:'/zixun',
      name:'zixun',
      component:Zixun
    },
    {
      path:'/weituo',
      name:'weituo',
      component:Weituo
    },
    {
      path:'/caigou',
      name:'caigou',
      component:Caigou
    },
    {
      path:'/jinrong',
      name:'jinrong',
      component:Jinrong
    },
    {
      path:'/cailiao',
      name:'cailiao',
      component:Cailiao
    },
    {
      path:'/fawu',
      name:'fawu',
      component:Fawu
    },
    {
      path:'/bidinfocaigou',
      name:'bidinfocaigou',
      component:Caigouinfo
    },
    {
      path:'/fuwuiconall',
      name:'fuwuiconall',
      component:Fuwuiconall
    },
    {
      path:'/caigouiconall',
      name:'caigouiconall',
      component:Caigouiconall
    },
    {
      path:'/zixunsubmit',
      name:'zixunsubmit',
      component:Zixunsubmit
    }
  ]
})
