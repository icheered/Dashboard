(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],f=0,h=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/web/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0980":function(t,e,a){"use strict";a("7bb3")},"178a":function(t,e,a){"use strict";a("e7e8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("router-view")],1)],1)},s=[],i={},c=i,l=a("2877"),u=a("6544"),f=a.n(u),h=a("7496"),p=a("a75b"),d=Object(l["a"])(c,o,s,!1,null,null,null),v=d.exports;f()(d,{VApp:h["a"],VContent:p["a"]});var m=a("f309");r["a"].use(m["a"]);var g=new m["a"]({}),y=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 pt-15",attrs:{fluid:"","fill-height":""}},[a("v-row",[a("v-col",{attrs:{md:"3"}},[a("v-row",{staticClass:"pl-15"},[a("Inside")],1),a("v-row",{staticClass:"pl-15 pt-15"},[a("Outside")],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-row",[a("DateTime")],1)],1),a("v-col",{attrs:{md:"6"}},[a("v-row",[a("Graph")],1)],1)],1)],1)},x=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"pl-15 pt-10"},[a("v-container",{staticClass:"pa-0"},[a("v-col",{attrs:{left:""}},[a("v-row",{staticClass:"clock",attrs:{justify:"center"}},[a("h1",{staticClass:"clock text-left"},[t._v(" "+t._s(t.currenttime)+" ")])]),a("v-row",{staticClass:"custom",attrs:{justify:"center"}},[a("h1",{staticClass:"custom text-left"},[t._v(" "+t._s(t.currentweekday)+" ")])]),a("v-row",{staticClass:"custom",attrs:{justify:"center"}},[a("h1",{staticClass:"custom text-left"},[t._v(" "+t._s(t.currentmonth)+" ")])]),a("v-row",{staticClass:"custom",attrs:{justify:"center"}},[a("h1",{staticClass:"custom text-left"},[t._v(" "+t._s(t.currentmonthday)+" ")])])],1)],1)],1)},w=[],k=(a("caad"),{data:function(){return{currenttime:"11:11",currentweekday:"Weekday",currentmonth:"Month",currentmonthday:"11",updateInterval:""}},methods:{updateTime:function(){var t=new Date;this.currenttime=(t.getHours()<10?"0":"")+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes();var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];this.currentweekday=e[t.getDay()];var a=["January","February","March","April","May","June","July","August","September","October","November","December"];this.currentmonth=a[t.getMonth()];var r=t.getDate(),n=[1,21,31],o=[2,22],s=[3,23];n.includes(r)?r+="st":o.includes(r)?r+="nd":s.includes(r)?r+="rd":r+="th",this.currentmonthday=r}},mounted:function(){var t=this;this.updateInterval=setInterval((function(){t.updateTime()}),1e3)}}),S=k,_=(a("0980"),a("62ad")),j=a("a523"),O=a("0fd9"),V=a("8dd9"),I=Object(l["a"])(S,C,w,!1,null,"796b2cd0",null),T=I.exports;f()(I,{VCol:_["a"],VContainer:j["a"],VRow:O["a"],VSheet:V["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"justify-end pr-10"},[a("v-sheet",{staticClass:"rounded-xl mb-4",attrs:{elevation:"4"}},[a("apexchart",{ref:"cryptoChart",attrs:{width:"800",height:"395",options:t.cryptoChartOptions,series:t.cryptoSeries}})],1),a("v-sheet",{staticClass:"rounded-xl",attrs:{elevation:"4"}},[a("apexchart",{ref:"stockChart",attrs:{type:"area",width:"800",height:"395",options:t.stockChartOptions,series:t.stockSeries}})],1)],1)],1)},F=[],M=(a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("1276"),a("1321")),P=a.n(M),B={components:{apexchart:P.a},data:function(){return{graphWidth:800,graphHeight:400,cryptoSeries:[{name:"Crypto",data:[]}],stockSeries:[{name:"Stock",data:[]}],cryptoChartOptions:{chart:{type:"line",toolbar:{show:!1}},title:{text:"Crypto",align:"left",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"40px",fontWeight:"bold",color:"#263238"}},colors:["#FF9800"],dataLabels:{enabled:!1},noData:{text:"Loading..."},stroke:{curve:"smooth",width:4},yaxis:{opposite:!0,forceNiceScale:!0,labels:{formatter:function(t,e){return"€"+Number(t).toFixed(0)},style:{fontSize:"20px"}}},xaxis:{labels:{formatter:function(t){if("string"==typeof t){var e=t.split("T"),a=(e[0],e[1].split(".")),r=a[0].split(":"),n=r[0]+":"+r[1];return n}return t},hideOverlappingLabels:!0,rotate:0,style:{fontSize:"20px"},offsetX:3},tickAmount:10}},stockChartOptions:{chart:{type:"line",toolbar:{show:!1}},title:{text:"Stocks",align:"left",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"40px",fontWeight:"bold",color:"#263238"}},dataLabels:{enabled:!1},noData:{text:"Loading..."},stroke:{curve:"smooth",width:4},yaxis:{opposite:!0,forceNiceScale:!0,labels:{formatter:function(t,e){return"€"+Number(t).toFixed(0)},style:{fontSize:"20px"}}},xaxis:{labels:{formatter:function(t){return t},hideOverlappingLabels:!0,rotate:0,style:{fontSize:"20px"},offsetX:3},tickAmount:5}}}},methods:{updateCryptoSeries:function(t){this.$refs["cryptoChart"].updateSeries([{name:"Portfolio",data:t}])},updateStockoSeries:function(t){this.$refs["stockChart"].updateSeries([{name:"Portfolio",data:t}])},getTotalCryptoData:function(){var t=this,e="https://dashboard.icheered.nl/ctb/api/history/total?datapoints=1000";fetch(e).then((function(t){return t.json()})).then((function(e){t.updateCryptoSeries(e)})).catch((function(t){console.log(t)}))},getTotalStockData:function(){var t=this,e="https://dashboard.icheered.nl/stb/api/history/total";fetch(e).then((function(t){return t.json()})).then((function(e){t.updateStockoSeries(e)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getTotalCryptoData(),this.getTotalStockData(),setInterval((function(){t.getTotalCryptoData()}),6e4),setInterval((function(){t.getTotalStockData()}),432e5)}},$=B,L=Object(l["a"])($,D,F,!1,null,"0bb5e436",null),W=L.exports;f()(L,{VContainer:j["a"],VRow:O["a"],VSheet:V["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"rounded-xl mr-1",attrs:{elevation:"4",width:"400px"}},[a("v-container",{attrs:{fluid:""}},[a("v-col",[a("v-row",[a("v-icon",{staticClass:"pl-4 pb-5",attrs:{large:""}},[t._v(" fa-home ")])],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-thermometer-half",value:t.temperature,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-tint",value:t.humidity,suffix:"%"}})],1)],1)],1)],1)},z=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"px-1 py-1"},[a("v-row",{staticClass:"pb-5"},[a("v-col",{staticClass:"pl-8 pt-5",attrs:{justify:"center",align:"left"}},[a("v-icon",{attrs:{left:"","x-large":""}},[t._v(t._s(t.icon))])],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{justify:"right",align:"right"}},[a("h1",{staticClass:"custom ml-n15"},[t._v(t._s(t.value))])]),a("v-col",{staticClass:"pa-0 ma-0 pr-5",attrs:{justify:"right",align:"right"}},[a("h1",{staticClass:"custom",attrs:{align:"right",justify:"right"}},[t._v(" "+t._s(t.suffix))])])],1)],1)},N=[],R={props:{icon:String,value:Number,suffix:String}},A=R,J=(a("178a"),a("132d")),G=Object(l["a"])(A,H,N,!1,null,"573b8a07",null),X=G.exports;f()(G,{VCol:_["a"],VContainer:j["a"],VIcon:J["a"],VRow:O["a"]});var Y={components:{InfoBlock:X},data:function(){return{temperature:0,humidity:0}},methods:{setTemp:function(){this.temperature=0},setHumd:function(){this.humidity=0}},mounted:function(){}},q=Y,K=Object(l["a"])(q,E,z,!1,null,"37193aba",null),Q=K.exports;f()(K,{VCol:_["a"],VContainer:j["a"],VIcon:J["a"],VRow:O["a"],VSheet:V["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"rounded-xl mr-1",attrs:{elevation:"4",width:"400px"}},[a("v-container",{attrs:{fluid:""}},[a("v-col",[a("v-row",[a("v-icon",{staticClass:"pl-5 pb-5",attrs:{large:""}},[t._v(" fa-tree ")])],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-thermometer-half",value:t.temperature,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-user",value:t.feelslike,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-temperature-high",value:t.maxtemperature,suffix:"°C"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-tint",value:t.humidity,suffix:"%"}})],1),a("v-row",[a("InfoBlock",{attrs:{icon:"fa-cloud-showers-heavy",value:t.precipitation,suffix:"%"}})],1)],1)],1)],1)},Z=[],tt={components:{InfoBlock:X},data:function(){return{temperature:0,feelslike:0,humidity:0,maxtemperature:0,precipitation:0}},methods:{setTemp:function(t){this.temperature=t.toFixed(1)},setHumd:function(t){this.humidity=t.toFixed(1)},setMaxtemp:function(t){this.maxtemperature=t.toFixed(1)},setPrecip:function(t){this.precipitation=(100*t).toFixed(1)},setFeelsLike:function(t){this.feelslike=t.toFixed(1)},getWeatherData:function(){var t=this,e="https://api.openweathermap.org/data/2.5/onecall?lat=52.23&lon=6.85&units=metric&appid=2f025c6c11a61b8a89399a9c02152708";fetch(e).then((function(t){return t.json()})).then((function(e){console.log(e),t.setTemp(e.current.temp),t.setHumd(e.current.humidity),t.setFeelsLike(e.current.feels_like),t.setMaxtemp(e.daily[0].temp.max),t.setPrecip(e.daily[0].pop)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getWeatherData(),setInterval((function(){t.getWeatherData()}),3e5)}},et=tt,at=Object(l["a"])(et,U,Z,!1,null,"379e7655",null),rt=at.exports;f()(at,{VCol:_["a"],VContainer:j["a"],VIcon:J["a"],VRow:O["a"],VSheet:V["a"]});var nt={components:{Graph:W,Inside:Q,Outside:rt,DateTime:T},data:function(){return{}},methods:{}},ot=nt,st=Object(l["a"])(ot,b,x,!1,null,null,null),it=st.exports;f()(st,{VCol:_["a"],VContainer:j["a"],VRow:O["a"]});var ct=[{path:"/",name:"home",component:it}];r["a"].use(y["a"]);var lt=new y["a"]({routes:ct}),ut=lt;r["a"].use(n["a"]);var ft=new n["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0}},mutations:{updateBingo:function(t,e){var a=e.blockState,r=e.i,n=e.j;this.state.bingo[r][n]=a?1:0;for(var o=!1,s=0;s<this.state.bingo.length;s++)for(var i=0,c=0;c<this.state.bingo[s].length;c++)1==this.state.bingo[s][c]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(s=0;s<this.state.bingo.length;s++)for(i=0,c=0;c<this.state.bingo[s].length;c++)1==this.state.bingo[c][s]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(i=0,s=0;s<this.state.bingo.length;s++)1==this.state.bingo[s][s]&&(i+=1);for(5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),i=0,s=0;s<this.state.bingo.length;s++)1==this.state.bingo[s][4-s]&&(i+=1);5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),o||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),ht=ft;r["a"].config.productionTip=!1,r["a"].use(n["a"]),r["a"].component("app",v),new r["a"]({vuetify:g,router:ut,store:ht,render:function(t){return t(v)}}).$mount("#app")},"7bb3":function(t,e,a){},e7e8:function(t,e,a){}});
//# sourceMappingURL=app.ab308f43.js.map