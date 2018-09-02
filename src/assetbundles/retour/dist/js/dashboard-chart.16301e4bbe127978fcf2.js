/*!
 * @project        nystudio107
 * @name           dashboard-chart.16301e4bbe127978fcf2.js
 * @author         andrew@nystudio107.com
 * @build          Sun, Sep 2, 2018 3:40 PM ET
 * @release        46bc058cf8b82eaee71cbf721f3934c19c465ba5 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{5:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:this.chartOptions,series:this.series}})};a._withStripped=!0;var i=s(3),r=s(19),n=s.n(r);i.default.use(n.a);var o={components:{apexcharts:n.a},props:{title:String,subTitle:String,range:String},methods:{getSeriesData:async function(){const t=(await s.e(5).then(s.t.bind(null,39,7))).create((t=>({baseURL:t,headers:{"X-Requested-With":"XMLHttpRequest"}}))("/retour/charts/dashboard/"));await((t,e,s)=>{t.get(e).then(t=>{s&&s(t.data),console.log(t.data)}).catch(t=>{console.log(t)})})(t,this.range,t=>{this.series=t})}},mounted(){this.getSeriesData()},data:function(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{crosshairs:{width:1}},yaxis:{min:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"placeholder",data:[0]}]}}},l=s(8),h=Object(l.a)(o,a,[],!1,null,null,null);h.options.__file="src/assetbundles/retour/src/vue/DashboardChart.vue";e.default=h.exports}}]);
//# sourceMappingURL=dashboard-chart.16301e4bbe127978fcf2.js.map