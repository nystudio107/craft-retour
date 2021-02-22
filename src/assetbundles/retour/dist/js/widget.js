/*!
 * @project        retour
 * @name           widget.js
 * @author         Andrew Welch
 * @build          Mon Feb 22 2021 23:50:01 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
(self.webpackChunkretour=self.webpackChunkretour||[]).push([[263],{3747:function(t,e,n){"use strict";var r,s=n(7757),a=n.n(s),i=(n(5666),n(8926)),o=n.n(i),c=n(9669),u=n.n(c),h=n(7166),p=function(t,e,n,r){t.get(e,{params:n}).then((function(t){r&&r(t.data)})).catch((function(t){console.error(t)}))},l={components:{apexcharts:n.n(h)()},props:{title:String,subTitle:String,days:String,apiUrl:{type:String,default:""}},methods:{getSeriesData:(r=o()(a().mark((function t(){var e,n=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),t.next=3,p(e,"",{days:this.days},(function(t){n.series=t}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},created:function(){this.getSeriesData()},data:function(){return{chartOptions:{chart:{id:"vuechart-widget",toolbar:{show:!1}},colors:["#008FFB","#DCE6EC"],labels:["404 hits","404 hits handled"]},series:[50,50]}}},d=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexcharts",{attrs:{width:"100%",height:"200px",type:"donut",options:t.chartOptions,series:t.series}})}),[],!1,null,null,null).exports;new Vue({el:"#widget-content",components:{"widget-chart":d},data:{},methods:{},mounted:function(){}})}},0,[[3747,666,216]]]);
//# sourceMappingURL=widget.js.map