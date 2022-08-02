(function(e){function t(t){for(var a,s,l=t[0],i=t[1],c=t[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},o={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ese-attendance-qr/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"648a":function(e,t,r){"use strict";r("a0d6")},a0d6:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),o=r("7496"),n=r("40dc"),s=r("adda"),l=r("f6c4"),i=r("2fa4"),c=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o["a"],[t(n["a"],{attrs:{app:"",color:"#ffd500"}},[t(s["a"],{staticClass:"shrink mr-2",attrs:{alt:"Erasmus School of Economics",contain:"",src:r("dcb1"),transition:"scale-transition",width:"60"}}),t("div",{staticClass:"d-flex align-center"},[e._v(" Attendance QR-Codes Generator ")]),t(i["a"])],1),t(l["a"],[t("Main")],1)],1)},u=[],p=r("62ad"),d=r("a523"),f=r("ce7e"),h=r("0fd9"),m=r("7e85"),v=r("e516"),b=r("9c54"),g=r("56a4"),_=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(d["a"],[t(h["a"],{attrs:{justify:"center"}},[t(p["a"],{attrs:{cols:"6"}},[t(m["a"],{attrs:{"non-linear":""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[t(b["a"],[t(g["a"],{attrs:{step:"1",complete:e.step>1,editable:""}},[e._v(" Load Schedule Data ")]),t(f["a"]),t(g["a"],{attrs:{step:"2",complete:e.step>2,editable:""}},[e._v(" Define Template URL ")]),t(f["a"]),t(g["a"],{attrs:{step:"3",editable:""}},[e._v(" Generate QR Codes ")])],1),t(b["b"],[t(v["a"],{attrs:{step:"1"}},[t("Step0",{on:{nextStep:function(t){e.step++}}})],1),t(v["a"],{attrs:{step:"2"}},[t("Step1",{on:{nextStep:function(t){e.step++},prevStep:function(t){e.step--}}})],1),t(v["a"],{attrs:{step:"3"}},[t("Step2",{on:{prevStep:function(t){e.step--}}})],1)],1)],1)],1)],1)],1)},y=[],w=r("0798"),S=r("8336"),x=r("b0af"),O=r("99d9"),j=r("8860"),D=r("da13"),C=r("e0c7"),R=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(x["a"],[t(O["c"],[e._v("Load Schedule Data")]),t(O["b"],[t("h3",[e._v("Prepare")]),e._v(" To use this tool you need to have a Spreadsheet file with session exported from "),t("a",{attrs:{href:"https://timetables.eur.nl",target:"_blank"}},[e._v("https://timetables.eur.nl")]),e._v(". Follow these steps to make this export. "),t("ol",[t("li",[e._v("Add the courses for which you want to export data, and make sure only these courses are selected.")]),t("li",[e._v("Click the download button "),t("img",{attrs:{src:"img/timetables-download.png",alt:"Picture of the download button on timetables.eur.nl"}}),e._v(' and choose "Microsoft Excel"')]),t("li",[e._v('Make sure a proper date range is selected that contains all the sessions you want to include. If you have the proper selection, click "Download"')])]),t("br"),t("h3",[e._v("Import Data")]),null==e.scheduleData.sessions||0==e.scheduleData.sessions.length?[t("FileDropZone",{attrs:{accept:".xlsx",acceptError:"Please provide an .xlsx Spreadsheet with a timetables.eur.nl schedule",autoSubmit:!0},on:{change:e.changeFile}})]:e._e(),null!=e.scheduleData.sessions&&e.scheduleData.sessions.length>0?[t(w["a"],{attrs:{color:"success"}},[t("h3",[e._v("Data loaded")]),t("div",[e._v(e._s(e.scheduleData.sessions.length)+" sessions have been loaded.")])]),t(j["a"],[t(C["a"],[e._v("Course Names")]),e._l(e.scheduleData.courseNames,(function(r){return t(D["a"],{key:r},[e._v(e._s(r))])}))],2),t("br"),t(S["a"],{attrs:{color:"error"},on:{click:e.clearData}},[e._v("Clear")])]:e._e()],2),t(f["a"]),t(O["a"],[t(i["a"]),t(S["a"],{attrs:{color:"primary"},on:{click:function(t){return e.$emit("nextStep")}}},[e._v("Next")])],1)],1)},k=[],L=r("9ab4"),T=(r("907a"),r("3c5d"),r("fa9e"),r("77d9"),r("25ca")),U=r("5a0c"),P=r.n(U),F=r("2a04"),$=r.n(F);function E(e){const t=Object(T["a"])(e,{type:"array",cellDates:!0});return I(t)}function I(e){const t=e.Sheets[e.SheetNames[0]],r=W(t),a=r.map(Q),o=[...new Set(r.map(e=>e["Description"]+" ("+e["Course code"]+")"))];return{courseNames:o,sessions:a}}function M(e){const t=new Map,r=N(e);for(const[a,o]of r.entries())t.set(a,A(o));return t}function A(e){return z(e,e=>e.group.name)}function N(e){return z(e,e=>e.courseCode)}function z(e,t){const r=new Map;for(const a of e){const e=t(a);r.has(e)?r.get(e).push(a):r.set(e,[a])}for(const a of r.values())q(a);return r}function Q(e,t){const r=e["Course code"],a=e["Start"],o=e["End"],n={start:a,end:o},s=(r.endsWith("X")||r.endsWith("S"),G(e["Group"],r));return{timeSlot:n,location:e["Location(s)"],id:t,type:e["Type"],group:s,courseCode:r,courseName:e["Description"]}}function G(e,t,r="Group "){const a=e.replace(r,"");if("Plenary"===a)return{groupType:a,plenary:!0,name:a};const o=a.match(/^[A-Za-z]+/),n=a.match(/[0-9]+$/);if(o&&n)return{name:a,groupType:o[0],plenary:!1};const s=t.match(/[A-Za-z]$/);return{name:a+(s?"-"+s[0]:""),groupType:a+(s?"-"+s[0]:""),plenary:!1}}function W(e){const t=e["!ref"];if(!t)throw"Invalid Spreadsheet";const r=T["b"].decode_range(t);let a=!0;const o=[],n={};for(let s=r.s.r;s<=r.e.r;s++){const t={};for(let o=r.s.c;o<=r.e.c;o++){const r=T["b"].encode_cell({r:s,c:o}),l=e[r];if(l)if(a)n[o]=l.v;else{const e=n[o];t[e]=l.v}}a?a=!1:o.push(t)}return o}function q(e){e.sort(V)}function V(e,t){const r=new Date(e.timeSlot.start),a=new Date(t.timeSlot.start),o=r.getTime()-a.getTime();if(0!==o)return o;const n=new Date(e.timeSlot.end),s=new Date(t.timeSlot.end);return n.getTime()-s.getTime()}P.a.extend($.a);var Z=r("1b40"),B=r("4bb5"),H=r("cc20"),J=r("132d"),X=r("8dd9"),Y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t(X["a"],{staticClass:"pa-2 sheet",attrs:{tabindex:"0",title:"Click to grap a file from your PC!",color:"secondary lighten-4",width:"100%"},on:{dragenter:e.dragStart,dragover:e.dragStart,dragleave:e.dragEnd,drop:e.drop,click:function(t){return e.$refs.inputEl.click()}}},[t("input",{ref:"inputEl",staticClass:"hidden",attrs:{type:"file",accept:e.accept},on:{change:e.changeFile}}),t(d["a"],[e.currentFiles?e._e():t(h["a"],{attrs:{justify:"center"}},[e.error?t(J["a"],{attrs:{color:"black",size:"75"}},[e._v("mdi-alert-box-outline")]):e.dragover&&!e.error?t(J["a"],{attrs:{color:"black",size:"75"}},[e._v("mdi-plus-box-outline")]):t(J["a"],{attrs:{color:"black",size:"75"}},[e._v("mdi-cloud-upload-outline")])],1),e.currentFiles?e._e():t(h["a"],{attrs:{justify:"center"}},[t("span",{staticClass:"title"},[e._v("Drag'n drop or click to upload file"+e._s(this.allowMultiple?"(s)":"")+"!")])]),e.currentFiles?t(h["a"],{attrs:{justify:"center"}},[t("div",{staticClass:"selection-box"},[t("h3",[e._v("Selected files:")]),e._l(e.currentFiles,(function(r,a){return t(H["a"],{key:"file-"+a,staticClass:"spacing",attrs:{small:""}},[e._v(e._s(r.name))])}))],2)]):e._e(),!e.currentFiles&&!e.error||e.dragover?e._e():t(h["a"],{attrs:{justify:"center"}},[e.error?e._e():t(S["a"],{attrs:{color:"primary"},on:{click:function(t){return t.stopPropagation(),e.submit.apply(null,arguments)}}},[e._v("Submit")]),e.error?e._e():t("span",{staticStyle:{width:"3em"}}),t(S["a"],{attrs:{color:"secondary"},on:{click:function(t){return t.stopPropagation(),e.clear.apply(null,arguments)}}},[e._v("Clear")])],1)],1)],1),e.error?t(w["a"],{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)},K=[];r("caad");let ee=class extends Z["d"]{constructor(){super(),this.dragover=!1,this.error=null,this.currentFiles=null}dragStart(e){this.dragging(e,!0)}dragEnd(e){this.dragging(e,!1)}dragging(e,t){e.preventDefault(),this.dragover=t,e.dataTransfer&&e.dataTransfer.items,t||(this.error=null)}checkValidFile(e){if(!this.accept)return!0;for(const t of this.acceptOptions)if(e.name.endsWith(t))return!0;return!!this.acceptOptions.includes(e.type)}validate(e){if(!this.allowMultiple&&1!=e.length)return"Only a single file is supported";for(const t of e)if(this.accept&&!this.checkValidFile(t))return this.acceptError?this.acceptError:"Only files of type '"+this.accept+"' are supported";return null}drop(e){if(e.preventDefault(),e.dataTransfer){const t=e.dataTransfer.files,r=this.validate(t);null==r?(this.currentFiles=t,this.error=null,this.autoSubmit&&this.submit()):this.error=r}this.dragover=!1}changeFile(e){const t=e.target,r=t.files,a=this.validate(r);null==a?(this.currentFiles=r,this.autoSubmit&&this.submit()):this.error=a}clear(){this.currentFiles=null,this.error=null,this.$refs.inputEl.value=""}submit(){const e=this.currentFiles;return this.currentFiles=null,e}get acceptOptions(){return this.accept?this.accept.split(",").map(e=>e.trim()):[]}};Object(L["a"])([Object(Z["c"])({default:""})],ee.prototype,"accept",void 0),Object(L["a"])([Object(Z["c"])({default:null})],ee.prototype,"acceptError",void 0),Object(L["a"])([Object(Z["c"])({default:!1})],ee.prototype,"autoSubmit",void 0),Object(L["a"])([Object(Z["c"])({default:!1})],ee.prototype,"allowMultiple",void 0),Object(L["a"])([Object(Z["b"])("change")],ee.prototype,"submit",null),ee=Object(L["a"])([Z["a"]],ee);var te=ee,re=te,ae=(r("648a"),r("2877")),oe=Object(ae["a"])(re,Y,K,!1,null,"5ae016ea",null),ne=oe.exports;let se=class extends Z["d"]{changeFile(e){if(console.log(e),1==e.length){const t=new FileReader;t.addEventListener("load",this.processFile),t.readAsArrayBuffer(e[0])}}processFile(e){var t;const r=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.result;if(r){const e=E(r);this.setScheduleData(e)}}clearData(){this.setScheduleData({courseNames:[],sessions:[]})}};Object(L["a"])([Object(B["b"])("scheduleData")],se.prototype,"scheduleData",void 0),Object(L["a"])([Object(B["a"])("setScheduleData")],se.prototype,"setScheduleData",void 0),se=Object(L["a"])([Object(Z["a"])({components:{FileDropZone:ne}})],se);var le=se,ie=le,ce=Object(ae["a"])(ie,R,k,!1,null,null,null),ue=ce.exports,pe=r("8654"),de=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(x["a"],[t(O["c"],[e._v("Define Template URL")]),t(O["b"],[t("div",[e._v(" Here you can define the URL template that should be used to generate the URL's for the QR-codes. "),t("br"),e._v(" The following variables can be used in the URL. The contents will be properly escaped for usage in a URL query string. "),t("ul",[t("li",{pre:!0},[e._v("{{courseCode}} : the course code")]),t("li",{pre:!0},[e._v("{{courseName}} : the name of the course")]),t("li",{pre:!0},[e._v("{{time}} : the date and time of the session")]),t("li",{pre:!0},[e._v("{{group}} : the group of the session (this is Plenary for a plenary session)")]),t("li",{pre:!0},[e._v("{{index}} : the number of the session within the sessions of the group")]),t("li",{pre:!0},[e._v("{{sessionId}} : the session ID from the schedule")]),t("li",{pre:!0},[e._v("{{location}} : the room and building in which the session takes place")])])]),t("br"),t(pe["a"],{attrs:{value:e.templateURL,label:"Template URL"},on:{change:t=>e.setTemplateURL(t)}})],1),t(f["a"]),t(O["a"],[t(S["a"],{attrs:{color:"primary"},on:{click:function(t){return e.$emit("prevStep")}}},[e._v("Prev")]),t(i["a"]),t(S["a"],{attrs:{color:"primary"},on:{click:function(t){return e.$emit("nextStep")}}},[e._v("Next")])],1)],1)},fe=[];let he=class extends Z["d"]{};Object(L["a"])([Object(B["b"])("templateURL")],he.prototype,"templateURL",void 0),Object(L["a"])([Object(B["a"])("setTemplateURL")],he.prototype,"setTemplateURL",void 0),he=Object(L["a"])([Z["a"]],he);var me=he,ve=me,be=Object(ae["a"])(ve,de,fe,!1,null,null,null),ge=be.exports,_e=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(x["a"],[t(O["c"],[e._v("Generate QR Codes")]),t(O["b"],[t("div",[e._v(" Click the button below to generate the QR codes. "),t("br"),t("em",[e._v("(Your browser may become inresponsive for a few seconds while generating the final zip-file)")])]),t(S["a"],{attrs:{block:"",color:"primary"},on:{click:function(t){return e.generate()}}},[e._v("Generate QR Codes")])],1),t(f["a"]),t(O["a"],[t(S["a"],{attrs:{color:"primary"},on:{click:function(t){return e.$emit("prevStep")}}},[e._v("Prev")]),t(i["a"])],1)],1)},ye=[],we=(r("5b81"),r("2801")),Se=r.n(we),xe=r("c4e3"),Oe=r.n(xe),je=r("d055"),De=r.n(je);let Ce=class extends Z["d"]{generate(){const e=[],t=new Oe.a,r=Se.a.compile(this.templateURL),a=M(this.scheduleData.sessions);for(const[o,n]of a.entries()){const a=o.replaceAll("/","_");t.folder(a);for(const[o,s]of n.entries()){const n=o.replaceAll("/","_");t.folder(`${a}/${n}`);for(const[o,l]of s.entries()){const s={courseCode:encodeURIComponent(l.courseCode),courseName:encodeURIComponent(l.courseName),time:encodeURIComponent(l.timeSlot.start.toLocaleString()),group:encodeURIComponent(l.group.name),sessionId:encodeURIComponent(l.id),location:encodeURIComponent(l.location),index:o+1,offset:o},i=r(s),c=new Promise((e,r)=>{const s=document.createElement("canvas");s.width=260,s.height=360,console.log(`Attempting to generate QR code for url of length ${i.length} : ${i}`),De.a.toCanvas(s,i,{version:35},(i,c)=>{if(i)r(i);else{const r=s.getContext("2d");if(r){const e=r.getImageData(0,0,c.width,c.height),t=c.height,a=15,n=25;r.font="15px Arial";const s=[`${l.courseCode} ${l.courseName}`,`${l.group.name} Session ${o+1}`,l.timeSlot.start.toLocaleString(),l.location];let i=c.width;for(const o of s){const e=r.measureText(o);i=Math.max(i,e.width+a)}c.height+=n*s.length,c.width=i,r.putImageData(e,0,0),r.font="15px Arial";for(const[o,l]of s.entries())r.fillText(l,a,t+o*n)}c.toBlob(r=>{t.file(`${a}/${n}/session_${o+1}.png`,r),e()}),c.remove()}})});e.push(c)}}}(async()=>{await Promise.all(e),t.generateAsync({type:"blob"}).then(e=>{const t=document.createElement("a");t.href=window.URL.createObjectURL(e),t.download="qr-codes.zip",t.click(),t.remove()})})()}};Object(L["a"])([Object(B["b"])("templateURL")],Ce.prototype,"templateURL",void 0),Object(L["a"])([Object(B["b"])("scheduleData")],Ce.prototype,"scheduleData",void 0),Ce=Object(L["a"])([Z["a"]],Ce);var Re=Ce,ke=Re,Le=Object(ae["a"])(ke,_e,ye,!1,null,null,null),Te=Le.exports,Ue=a["a"].extend({name:"HelloWorld",components:{Step0:ue,Step1:ge,Step2:Te},data:()=>({step:1})}),Pe=Ue,Fe=Object(ae["a"])(Pe,_,y,!1,null,null,null),$e=Fe.exports,Ee=a["a"].extend({name:"App",components:{Main:$e},data:()=>({})}),Ie=Ee,Me=Object(ae["a"])(Ie,c,u,!1,null,null,null),Ae=Me.exports,Ne=r("f309");a["a"].use(Ne["a"]);var ze=new Ne["a"]({}),Qe=r("2f62");a["a"].use(Qe["a"]);var Ge=new Qe["a"].Store({state:{scheduleData:{courseNames:[],sessions:[]},templateURL:"https://erasmusuniversity.eu.qualtrics.com/jfe/form/SV_6zzW1oIVYXLtlI2?course={{courseCode}}&group={{group}}&session={{session}}&time={{time}}"},mutations:{setScheduleData(e,t){e.scheduleData=t},setTemplateURL(e,t){e.templateURL=t}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({vuetify:ze,store:Ge,render:e=>e(Ae)}).$mount("#app")},dcb1:function(e,t,r){e.exports=r.p+"img/ese-logo-text.c2adb061.png"}});
//# sourceMappingURL=app.fcc86818.js.map