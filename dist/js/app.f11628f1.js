(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],h=0,f=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"178a":function(t,e,a){"use strict";a("e7e8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("2f62"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("router-view")],1)],1)},i=[],o={},u=o,c=a("2877"),l=a("6544"),h=a.n(l),f=a("7496"),p=a("a75b"),d=Object(c["a"])(u,s,i,!1,null,null,null),v=d.exports;h()(d,{VApp:f["a"],VContent:p["a"]});var m=a("f309");r["a"].use(m["a"]);var g=new m["a"]({}),y=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 pt-15",attrs:{fluid:"","fill-height":""}},[a("v-row",[a("v-col",{attrs:{md:"3"}},[a("v-row",{staticClass:"pl-15"},[a("Inside")],1),a("v-row",{staticClass:"pl-15 pt-15"},[a("Outside")],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-row",[a("DateTime")],1)],1),a("v-col",{attrs:{md:"6"}},[a("v-row",[a("Graph")],1)],1)],1)],1)},w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"pl-15 pt-10"},[a("v-container",{staticClass:"pa-0"},[a("v-col",{attrs:{left:""}},[a("v-row",{staticClass:"clock",attrs:{justify:"center"}},[a("h1",{staticClass:"clock text-left"},[t._v(" "+t._s(t.currenttime)+" ")])]),a("v-row",{staticClass:"custom",attrs:{justify:"center"}},[a("h1",{staticClass:"custom text-left"},[t._v(" "+t._s(t.currentweekday)+" ")])]),a("v-row",{staticClass:"custom",attrs:{justify:"center"}},[a("h1",{staticClass:"custom text-left"},[t._v(" "+t._s(t.currentmonth)+" ")])]),a("v-row",{staticClass:"custom",attrs:{justify:"center"}},[a("h1",{staticClass:"custom text-left"},[t._v(" "+t._s(t.currentmonthday)+" ")])])],1)],1)],1)},x=[],_=(a("caad"),{data:function(){return{currenttime:"11:11",currentweekday:"Weekday",currentmonth:"Month",currentmonthday:"11",updateInterval:""}},methods:{updateTime:function(){var t=new Date;this.currenttime=t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes();var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];this.currentweekday=e[t.getDay()];var a=["January","February","March","April","May","June","July","August","September","October","November","December"];this.currentmonth=a[t.getMonth()];var r=t.getDate(),n=[1,21,31],s=[2,22],i=[3,23];n.includes(r)?r+="st":s.includes(r)?r+="nd":i.includes(r)?r+="rd":r+="th",this.currentmonthday=r}},mounted:function(){var t=this;this.updateInterval=setInterval((function(){t.updateTime()}),1e3)}}),j=_,k=(a("c42c"),a("62ad")),O=a("a523"),V=a("0fd9"),I=a("8dd9"),S=Object(c["a"])(j,C,x,!1,null,"da3fcb16",null),M=S.exports;h()(S,{VCol:k["a"],VContainer:O["a"],VRow:V["a"],VSheet:I["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"justify-end pr-10"},[a("v-sheet",{staticClass:"rounded-xl mb-4",attrs:{elevation:"4"}},[a("apexchart",{ref:"tempChart",attrs:{type:"area",width:"800",height:"395",options:t.tempChartOptions,series:t.tempseries}})],1),a("v-sheet",{staticClass:"rounded-xl",attrs:{elevation:"4"}},[a("apexchart",{ref:"humdChart",attrs:{type:"area",width:"800",height:"395",options:t.humdChartOptions,series:t.humdseries}})],1)],1)],1)},D=[],B=a("1321"),F=a.n(B),$={components:{apexchart:F.a},data:function(){return{graphWidth:800,graphHeight:400,tempseries:[{name:"Temperature",data:[31,40,28,51,42,109,100,19,77,81]}],humdseries:[{name:"Humidity",data:[11,32,45,32,34,52,41,76,11,43]}],tempChartOptions:{chart:{type:"area",toolbar:{show:!1}},colors:["#FF9800"],dataLabels:{enabled:!1},stroke:{curve:"smooth"}},humdChartOptions:{chart:{type:"area",toolbar:{show:!1}},colors:["#03A9F4"],dataLabels:{enabled:!1},stroke:{curve:"smooth"}}}},methods:{setData:function(t){this.tempseries[0].data=t.temperature,this.humdseries[0].data=t.humidity,this.$refs["tempChart"].updateSeries(this.tempseries),this.$refs["humdChart"].updateSeries(this.humdseries)},getData:function(){}},mounted:function(){}},P=$,E=Object(c["a"])(P,T,D,!1,null,"02ae742c",null),H=E.exports;h()(E,{VContainer:O["a"],VRow:V["a"],VSheet:I["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"rounded-xl mr-1",attrs:{elevation:"4",width:"400px"}},[a("v-container",{attrs:{fluid:""}},[a("v-col",[a("v-row",[a("v-icon",{staticClass:"pl-4 pb-5",attrs:{large:""}},[t._v(" fa-home ")])],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-thermometer-half",value:t.temperature,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-tint",value:t.humidity,suffix:"%"}})],1)],1)],1)],1)},W=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"px-1 py-1"},[a("v-row",{staticClass:"pb-5"},[a("v-col",{staticClass:"pl-8 pt-5",attrs:{justify:"center",align:"left"}},[a("v-icon",{attrs:{left:"","x-large":""}},[t._v(t._s(t.icon))])],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{justify:"right",align:"right"}},[a("h1",{staticClass:"custom ml-n15"},[t._v(t._s(t.value))])]),a("v-col",{staticClass:"pa-0 ma-0 pr-5",attrs:{justify:"right",align:"right"}},[a("h1",{staticClass:"custom",attrs:{align:"right",justify:"right"}},[t._v(" "+t._s(t.suffix))])])],1)],1)},A=[],G=(a("a9e3"),{props:{icon:String,value:Number,suffix:String}}),L=G,N=(a("178a"),a("132d")),q=Object(c["a"])(L,J,A,!1,null,"573b8a07",null),z=q.exports;h()(q,{VCol:k["a"],VContainer:O["a"],VIcon:N["a"],VRow:V["a"]});var K={components:{InfoBlock:z},data:function(){return{temperature:0,humidity:0}},methods:{setTemp:function(){this.temperature=0},setHumd:function(){this.humidity=0}},mounted:function(){}},Q=K,U=Object(c["a"])(Q,R,W,!1,null,"37193aba",null),X=U.exports;h()(U,{VCol:k["a"],VContainer:O["a"],VIcon:N["a"],VRow:V["a"],VSheet:I["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"rounded-xl mr-1",attrs:{elevation:"4",width:"400px"}},[a("v-container",{attrs:{fluid:""}},[a("v-col",[a("v-row",[a("v-icon",{staticClass:"pl-5 pb-5",attrs:{large:""}},[t._v(" fa-tree ")])],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-thermometer-half",value:t.temperature,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-user",value:t.feelslike,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-temperature-high",value:t.maxtemperature,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-tint",value:t.humidity,suffix:"%"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-cloud-showers-heavy",value:t.precipitation,suffix:"%"}})],1)],1)],1)],1)},Z=[],tt=(a("b680"),a("d3b7"),{components:{InfoBlock:z},data:function(){return{temperature:0,feelslike:0,humidity:0,maxtemperature:0,precipitation:0}},methods:{setTemp:function(t){this.temperature=t.toFixed(1)},setHumd:function(t){this.humidity=t},setMaxtemp:function(t){this.maxtemperature=t.toFixed(1)},setPrecip:function(t){this.precipitation=100*t},setFeelsLike:function(t){this.feelslike=t.toFixed(1)},getWeatherData:function(){var t=this,e="https://api.openweathermap.org/data/2.5/onecall?lat=52.23&lon=6.85&units=metric&appid=2f025c6c11a61b8a89399a9c02152708";fetch(e).then((function(t){return t.json()})).then((function(e){console.log(e),t.setTemp(e.current.temp),t.setHumd(e.current.humidity),t.setFeelsLike(e.current.feels_like),t.setMaxtemp(e.daily[0].temp.max),t.setPrecip(e.daily[0].pop)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getWeatherData(),setInterval((function(){t.getWeatherData()}),3e5)}}),et=tt,at=Object(c["a"])(et,Y,Z,!1,null,"26ab4ef8",null),rt=at.exports;h()(at,{VCol:k["a"],VContainer:O["a"],VIcon:N["a"],VRow:V["a"],VSheet:I["a"]});var nt={components:{Graph:H,Inside:X,Outside:rt,DateTime:M},data:function(){return{}},methods:{}},st=nt,it=Object(c["a"])(st,b,w,!1,null,null,null),ot=it.exports;h()(it,{VCol:k["a"],VContainer:O["a"],VRow:V["a"]});var ut=[{path:"/",name:"home",component:ot}];r["a"].use(y["a"]);var ct=new y["a"]({routes:ut}),lt=ct;r["a"].use(n["a"]);var ht=new n["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0}},mutations:{updateBingo:function(t,e){var a=e.blockState,r=e.i,n=e.j;this.state.bingo[r][n]=a?1:0;for(var s=!1,i=0;i<this.state.bingo.length;i++)for(var o=0,u=0;u<this.state.bingo[i].length;u++)1==this.state.bingo[i][u]&&(o+=1),5==o&&(this.state.render.bingo=!0,this.state.render.overlay=!0,s=!0);for(i=0;i<this.state.bingo.length;i++)for(o=0,u=0;u<this.state.bingo[i].length;u++)1==this.state.bingo[u][i]&&(o+=1),5==o&&(this.state.render.bingo=!0,this.state.render.overlay=!0,s=!0);for(o=0,i=0;i<this.state.bingo.length;i++)1==this.state.bingo[i][i]&&(o+=1);for(5==o&&(this.state.render.bingo=!0,this.state.render.overlay=!0,s=!0),o=0,i=0;i<this.state.bingo.length;i++)1==this.state.bingo[i][4-i]&&(o+=1);5==o&&(this.state.render.bingo=!0,this.state.render.overlay=!0,s=!0),s||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),ft=ht;r["a"].config.productionTip=!1,r["a"].use(n["a"]),r["a"].component("app",v),new r["a"]({vuetify:g,router:lt,store:ft,render:function(t){return t(v)}}).$mount("#app")},"758a":function(t,e,a){},c42c:function(t,e,a){"use strict";a("758a")},e7e8:function(t,e,a){}});
//# sourceMappingURL=app.f11628f1.js.map