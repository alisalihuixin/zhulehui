import axios from "./request"
export const getexportshenhe = () => {
   return axios.post("/admin/interfaces")
}
export const getexportzixun = () => {
   return axios.post("/admin/interfaces/consultation")
}
export const getexportserver = () => {
   return axios.post("/admin/interfaces/entrust")
}
export const getexportcaigou = () => {
   return axios.post("/admin/interfaces/purchase")
}
export const getexportjinrong = () => {
   return axios.post("/admin/interfaces/finance")
}
export const getexportcailiao = () => {
   return axios.post("/admin/interfaces/groups")
}
export const getexportfawu = () => {
   return axios.post("/admin/interfaces/legal")
}
export const fuwuicon = () => {
   return axios.post("/admin/interfaces/icon")
}
export const caigouiconthree = () => {
   return axios.post("/admin/interfaces/purchaseinfo")
}
export const selectoption = () => {
   return axios.post("/admin/interfaces/purchases")
}
export const fuwuleft = () => {
   return axios.post("/admin/interfaces/type")
}
export const fuwuright = () => {
   return axios.post("/admin/interfaces/typeright")
}
export const fuwurightList = (data) => {
   return axios.post("/admin/interfaces/typeclick?id="+data)
}
export const pubtitleList = () => {
   return axios.post("/admin/interfaces/content")
}
export const threelist = (id,type,state) => {
   return axios.post("/admin/interfaces/zbafter?id="+id+"&type="+type+"&state="+state)
}
export const detaillist = (id) => {
   return axios.post("/admin/interfaces/zbxq?id="+id)
}
export const leibielist = () => {
   return axios.post("/admin/interfaces/fbgs")
}
// 发布
export const fabuNews = () => {
   return axios.post("/admin/interfaces/fbgs")
}
// index 服务信息
export const fuwuindexList = () => {
   return axios.post("/admin/interfaces/aboutserver")
}
// index 服务信息 详情
export const fuwuDetail = (id) => {
   return axios.post("/admin/interfaces/jxq?id="+id)
}
// banner
export const bannerlist = () => {
   return axios.post("/admin/interfaces/banner")
}

// 公告
export const gglist = () => {
   return axios.post("/admin/interfaces/announcement")
}

// 服务 三个
export const fuwuiconthree = () => {
   return axios.post("/admin/interfaces/serverthree")
}
// 采购 全部
export const caigouicon = () => {
   return axios.post("/admin/interfaces/purchaseinfos")
}
// 首页  服务商
export const fuwushang = () => {
   return axios.post("/admin/interfaces/flat")
}
// 首页  供应商
export const gongyingshang = () => {
   return axios.post("/admin/interfaces/supply")
}
// 首页  成交金额
export const getmoney = () => {
   return axios.post("/admin/interfaces/amount")
}
//首页 专家
export const zhuanjia = () => {
   return axios.post("/admin/interfaces/pt")
}

//首页 专家id
export const zhuanjiaid = (id) => {
   return axios.post("/admin/interfaces/pttype?id="+id)
}

//首页 服务商信息
export const fuwushanginfo = (id) => {
   return axios.post("/admin/interfaces/serv?id="+id)
}