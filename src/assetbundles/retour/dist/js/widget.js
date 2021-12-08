/*!
 * @project        retour
 * @name           widget.js
 * @author         Andrew Welch
 * @build          Wed Dec 08 2021 20:14:13 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
"use strict";(self.webpackChunkretour=self.webpackChunkretour||[]).push([[263],{3747:function(t,e,n){var r,s=n(5861),a=n(7757),i=n.n(a),o=n(9669),c=n.n(o),u=n(7166),h=function(t,e,n,r){t.get(e,{params:n}).then((function(t){r&&r(t.data)})).catch((function(t){console.error(t)}))},p={components:{apexcharts:n.n(u)()},props:{title:String,subTitle:String,days:String,apiUrl:{type:String,default:""}},methods:{getSeriesData:(r=(0,s.Z)(i().mark((function t(){var e,n=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),t.next=3,h(e,"",{days:this.days},(function(t){n.series=t}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},created:function(){this.getSeriesData()},data:function(){return{chartOptions:{chart:{id:"vuechart-widget",toolbar:{show:!1}},colors:["#008FFB","#DCE6EC"],labels:["404 hits","404 hits handled"]},series:[50,50]}}},l=p,d=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexcharts",{attrs:{width:"100%",height:"200px",type:"donut",options:t.chartOptions,series:t.series}})}),[],!1,null,null,null).exports;new Vue({el:"#widget-content",components:{"widget-chart":d},data:{},methods:{},mounted:function(){}})}},function(t){t.O(0,[216],(function(){return e=3747,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=widget.js.map