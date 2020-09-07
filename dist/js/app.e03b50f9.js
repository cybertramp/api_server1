(function(t){function e(e){for(var r,o,s=e[0],i=e[1],c=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},l=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("a026"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{type:"is-black","fixed-top":"",shadow:""}},[a("template",{slot:"brand"},[a("b-navbar-item")],1),a("template",{slot:"start"},[a("b-navbar-item",{attrs:{href:"/"}},[t._v(" Home ")]),a("b-navbar-item",{attrs:{href:"/crash"}},[t._v(" Crash ")])],1)],2),a("br"),a("title",[t._v("PEL crash Dashboard")]),a("div",{staticClass:"container is-fluid"},[a("router-view")],1)],1)},l=[],o={name:"app",methods:{}},s=o,i=(a("034f"),a("2877")),c=Object(i["a"])(s,n,l,!1,null,null,null),u=c.exports,f=a("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("p",[t._v("SEJONG FUZZER MONITORING SERVICES")])])}],p={data:function(){return{isActive:!0}}},b=p,m=Object(i["a"])(b,d,h,!1,null,null,null),_=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t.isCrashInfo?a("section",[a("p",{staticClass:"title"},[t._v("Crash List")]),a("b-table",{attrs:{data:t.crash_list,striped:"",narrowed:"",bordered:""}},[a("b-table-column",{attrs:{field:"name",label:"name",width:"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{on:{click:function(a){return t.loadCrashInfo(e.row.name)}}},[t._v(t._s(e.row.name))])]}}],null,!1,2727637513)}),a("b-table-column",{attrs:{field:"uuid",label:"uuid",width:"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uuid)+" ")]}}],null,!1,2503915888)})],1)],1):a("section",[a("nav",{staticClass:"level"},[t._m(0),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("b-button",{staticClass:"button is-warning",attrs:{label:"Back to List"},on:{click:function(e){t.isCrashInfo=!0}}})],1)])]),a("b-field",{attrs:{horizontal:"",label:"Crash Title"}},[a("p",[t._v(t._s(t.crash_title))])]),a("b-field",{attrs:{horizontal:"",label:"Reported Date"}},[a("p",[t._v(t._s(t.reported_date))])]),a("b-field",{attrs:{horizontal:"",label:"Target"}},[a("p",[t._v(t._s(t.target))])]),a("b-field",{attrs:{horizontal:"",label:"Fuzzer Name"}},[a("p",[t._v(t._s(t.fuzzer_name))])]),a("b-field",{attrs:{horizontal:"",label:"Crash Log"}},[a("p",[t._v(t._s(t.crash_log))])]),a("b-field",{attrs:{horizontal:"",label:"Input data that caused crash in target program"}},[a("b-input",{attrs:{placeholder:"Search..."}}),a("b-button",{staticClass:"button is-primary",attrs:{label:"Download"},on:{click:function(e){return t.downloadFile()}}})],1),a("b-field",{attrs:{horizontal:"",label:"Crash occurrence time in target program"}},[a("b-input",{attrs:{placeholder:"Search..."}}),a("b-button",{staticClass:"button is-primary",attrs:{label:"Download"},on:{click:function(e){return t.downloadFile()}}})],1),a("b-field",{attrs:{horizontal:"",label:"Taint analysis result of target program"}},[a("b-input",{attrs:{placeholder:"Search..."}}),a("b-button",{staticClass:"button is-primary",attrs:{label:"Download"},on:{click:function(e){return t.downloadFile()}}})],1),a("b-field",{attrs:{horizontal:"",label:"Control Flow Graph of target program"}},[a("b-input",{attrs:{placeholder:"Search..."}}),a("b-button",{staticClass:"button is-primary",attrs:{label:"Download"},on:{click:function(e){return t.downloadFile()}}})],1)],1)])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"level-left"},[a("p",{staticClass:"title"},[t._v("Crash Information")])])}],w=a("bc3a"),C=a.n(w),y={data:function(){return{isCrashInfo:!0,crash_title:"Test version14",reported_date:"Aug. 24, 2020, 2:26 a.m. (1 week, 6 days ago)",target:"/home/soonhong/driller",fuzzer_name:"Driller",crash_log:"",files:["url1","url2","url3","url4"],crash_list:[],tmp_data:[{name:"Testcase2",uuid:"61b04cc138064b0da1eb3328ae31b937",crash_input:"test1",crash_time:"test2",crash_taint:"test3",crash_cfg:"test4"},{name:"Testcase4",uuid:"f85c255017984f978f0385e052d87795",crash_input:"test1",crash_time:"test2",crash_taint:"test3",crash_cfg:"test4"}]}},methods:{downloadFile:function(t){var e=document.createElement("a");e.href=t,e.click()},loadCrashInfo:function(t){this.isCrashInfo=!1,console.log(t)},getCrashList:function(){var t=this;C.a.get("http://112.187.174.142:3000/crashlist").then((function(e){t.crash_list=e.data,console.log(t.crash_list)}),(function(t){console.log(t)}))}},mounted:function(){this.getCrashList()}},O=y,k=Object(i["a"])(O,v,g,!1,null,null,null),z=k.exports;r["a"].use(f["a"]);var S=new f["a"]({mode:"history",meta:{title:"Sejong"},routes:[{path:"/",name:"home",component:_},{path:"/crash",name:"crash",component:z}]}),j=a("289d");a("5abe");r["a"].config.productionTip=!1,r["a"].use(f["a"]),r["a"].use(j["a"]),new r["a"]({el:"#app",router:S,components:{App:u},template:"<App/>"})},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.e03b50f9.js.map