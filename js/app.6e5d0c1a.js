(function(e){function t(t){for(var n,s,l=t[0],i=t[1],c=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Bni-Growth-Calculator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[e._v(" Unofficial BNI Growth calculator ")]),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/dampee/Bni-Growth-Calculator",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Source code")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1),r("v-content",[r("GrowthCalculator")],1),r("v-footer",{staticClass:"pa-3"},[r("v-spacer"),r("div",[e._v("© "+e._s((new Date).getFullYear())+" "),r("a",{attrs:{href:"http://umbrace.be"}},[e._v("Umbrace")])])],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("Chapter groei")]),r("p",[e._v("Hoeveel bezoekers heb je nodig als je je chapter wil laten groeien? "),r("br"),e._v(" We hebben dit van "),r("a",{attrs:{href:"https://www.linkedin.com/in/phberg/",target:"_blank"}},[e._v("Phil Berg")]),e._v(" geleerd in oktober 2019.")])]),r("v-col",{attrs:{cols:"12"}},[r("table",[r("tr",[r("td",[e._v("Aantal maanden")]),r("td"),r("td",[r("v-text-field",{attrs:{label:"maanden",type:"number",required:""},model:{value:e.months,callback:function(t){e.months=t},expression:"months"}})],1)]),r("tr",[r("td",[e._v("Huidig aantal leden")]),r("td"),r("td",[r("v-text-field",{attrs:{label:"Huidig aantal leden",type:"number",required:""},model:{value:e.currentmembers,callback:function(t){e.currentmembers=t},expression:"currentmembers"}})],1)]),r("tr",[r("td",[e._v("Doelstelling aantal leden")]),r("td"),r("td",[r("v-text-field",{attrs:{label:"Gewenst aantal leden",type:"number",required:""},model:{value:e.targetmembers,callback:function(t){e.targetmembers=t},expression:"targetmembers"}})],1)]),r("tr",[r("td",[e._v("Aantal nieuwe leden")]),r("td"),r("td",{staticClass:"result"},[e._v(e._s(e.expectedmembergrowth))])]),r("tr",[r("td",[e._v("Aantal leden dat blijft")]),e._v(" "),r("td",[r("v-text-field",{attrs:{label:"Verlengingspercentage",type:"number",required:""},model:{value:e.renewalpercentage,callback:function(t){e.renewalpercentage=t},expression:"renewalpercentage"}})],1),r("td",{staticClass:"result"},[e._v(e._s(e.renewalmembers))])]),r("tr",[r("td",[e._v("Totaal nieuwe leden nodig")]),r("td"),r("td",{staticClass:"result"},[e._v(e._s(e.newmembersneeded))])]),r("tr",[r("td",[e._v("Aantal bezoekers nodig")]),e._v(" "),r("td",[r("v-text-field",{attrs:{label:"Conversieratio",type:"number",required:""},model:{value:e.conversionpercentage,callback:function(t){e.conversionpercentage=t},expression:"conversionpercentage"}})],1),r("td",{staticClass:"result"},[e._v(e._s(e.visitorsneeded.toFixed(2)))])]),r("tr",[r("td",[e._v("Aantal bezoekers per lid")]),e._v(" "),r("td"),r("td",{staticClass:"result"},[e._v(e._s(e.visitorspermember.toFixed(2)))])]),r("tr",[r("td",[e._v("Minimaal bezoekers per lid per maand")]),r("td"),r("td",{staticClass:"result"},[e._v(e._s(e.visitorspermonthpermember.toFixed(2)))])])])])],1)],1)},l=[],i={name:"GrowthCalculator",data:function(){return{currentmembers:25,targetmembers:30,renewalpercentage:.7,conversionpercentage:.2,months:6}},computed:{expectedmembergrowth:function(){return this.targetmembers-this.currentmembers},renewalmembers:function(){return Math.ceil(this.currentmembers-this.currentmembers*this.renewalpercentage)},newmembersneeded:function(){return this.expectedmembergrowth+this.renewalmembers},visitorsneeded:function(){return this.newmembersneeded/this.conversionpercentage},visitorspermember:function(){return this.visitorsneeded/this.currentmembers},visitorspermonthpermember:function(){return this.visitorsneeded/this.months}}},c=i,u=(r("d056"),r("2877")),d=r("6544"),p=r.n(d),m=r("62ad"),v=r("a523"),b=r("0fd9"),f=r("8654"),h=Object(u["a"])(c,s,l,!1,null,null,null),g=h.exports;p()(h,{VCol:m["a"],VContainer:v["a"],VRow:b["a"],VTextField:f["a"]});var _={name:"App",components:{GrowthCalculator:g},data:function(){return{}}},w=_,x=r("7496"),y=r("40dc"),C=r("8336"),k=r("a75b"),j=r("553a"),O=r("132d"),V=r("2fa4"),A=Object(u["a"])(w,a,o,!1,null,null,null),P=A.exports;p()(A,{VApp:x["a"],VAppBar:y["a"],VBtn:C["a"],VContent:k["a"],VFooter:j["a"],VIcon:O["a"],VSpacer:V["a"]});var G=r("f309");n["a"].use(G["a"]);var S=new G["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:S,render:function(e){return e(P)}}).$mount("#app")},8015:function(e,t,r){},d056:function(e,t,r){"use strict";var n=r("8015"),a=r.n(n);a.a}});
//# sourceMappingURL=app.6e5d0c1a.js.map