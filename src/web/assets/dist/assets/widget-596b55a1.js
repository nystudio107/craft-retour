import{A as n,a as i}from"./vue-apexcharts-75b4bfb3.js";import{n as o}from"./_plugin-vue2_normalizer-5ce9b637.js";const c=e=>({baseURL:e,headers:{"X-Requested-With":"XMLHttpRequest"}}),h=(e,t,s,a)=>{e.get(t,{params:s}).then(r=>{a&&a(r.data)}).catch(r=>{console.error(r)})},p={components:{apexcharts:n},props:{title:{type:String,default:""},subTitle:{type:String,default:""},days:{type:String,default:""},apiUrl:{type:String,default:""}},data:function(){return{chartOptions:{chart:{id:"vuechart-widget",toolbar:{show:!1}},colors:["#008FFB","#DCE6EC"],labels:["404 hits","404 hits handled"]},series:[50,50]}},created:function(){this.getSeriesData()},methods:{getSeriesData:async function(){const e=i.create(c(this.apiUrl));await h(e,"",{days:this.days},t=>{this.series=t})}}};var d=function(){var t=this,s=t._self._c;return s("apexcharts",{attrs:{width:"100%",height:"200px",type:"donut",options:t.chartOptions,series:t.series}})},l=[],u=o(p,d,l,!1,null,null,null,null);const f=u.exports,_=window.Vue;new _({el:"#widget-content",components:{"widget-chart":f}});
//# sourceMappingURL=widget-596b55a1.js.map