(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"210b":function(t,e,s){},6762:function(t,e,s){},"6bdc":function(t,e,s){"use strict";s.r(e);var n=s("62ad"),a=s("a523"),i=s("ce7e"),o=s("0fd9"),r=s("7e85"),c=s("e516"),d=s("9c54"),l=s("56a4"),u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(a["a"],[e(o["a"],{attrs:{justify:"center"}},[e(n["a"],{attrs:{cols:"6"}},[e(r["a"],{attrs:{"non-linear":""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e(d["a"],[e(l["a"],{attrs:{step:"1",complete:t.step>1,editable:""}},[t._v(" Load Data ")]),e(i["a"]),e(l["a"],{attrs:{step:"2",complete:t.step>2,editable:""}},[t._v(" Session Statistics ")]),e(i["a"]),e(l["a"],{attrs:{step:"3",complete:t.step>3,editable:""}},[t._v(" Tutorial Statistics ")]),e(i["a"]),e(l["a"],{attrs:{step:"4",editable:""}},[t._v(" Heat Maps ")])],1),e(d["b"],[e(c["a"],{attrs:{step:"1"}},[e("Step0",{on:{nextStep:function(e){t.step++}}})],1),e(c["a"],{attrs:{step:"2"}},[e("Step1",{on:{nextStep:function(e){t.step++},prevStep:function(e){t.step--}}})],1),e(c["a"],{attrs:{step:"3"}},[e("Step2",{on:{nextStep:function(e){t.step++},prevStep:function(e){t.step--}}})],1),e(c["a"],{attrs:{step:"4"}},[e("Step3",{on:{prevStep:function(e){t.step--}}})],1)],1)],1)],1)],1)],1)},h=[],p=s("2b0e"),f=s("0798"),v=s("8336"),m=s("b0af"),b=s("99d9"),g=s("2fa4"),x=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(m["a"],[e(b["c"],[t._v("Load Attendance Data")]),e(b["b"],[e("h3",[t._v("Prepare")]),t._v(" Use this tool to analyze recorded attendance data. There are two types of attendance data: "),e("ol",[e("li",[t._v("The data recorded via the Qualtrics Survey.")]),e("li",[t._v("Headcounts recorded by the TA's")])]),e("br"),e("h3",[t._v("Import Attendance Data")]),0==Object.keys(t.attendanceData).length?[e("FileDropZone",{attrs:{accept:".xlsx",acceptError:"Please provide an .xlsx Spreadsheet with recorded attendance data",autoSubmit:!0},on:{change:t.changeFile}})]:t._e(),Object.keys(t.attendanceData).length>0?[e(f["a"],{attrs:{color:"success"}},[e("h3",[t._v("Data loaded")]),e("ul",t._l(t.attendanceData["statistics"],(function(s){return e("li",{key:s.getCourse()},[t._v(" "+t._s(s.getCourse())+" : "+t._s(s.getFinished())+" Finished / "+t._s(s.getUnfinished())+" Unfinished. ")])})),0)]),e("br"),e(v["a"],{attrs:{color:"error"},on:{click:t.clearData}},[t._v("Clear")])]:t._e()],2),e(i["a"]),e(b["a"],[e(g["a"]),e(v["a"],{attrs:{color:"primary"},on:{click:function(e){return t.$emit("nextStep")}}},[t._v("Next")])],1)],1)},y=[],_=s("9ab4"),$=(s("13d5"),s("caad"),s("25ca")),w=s("7dda"),S=s("5a0c"),D=s.n(S),O=s("7e21"),j=s.n(O),k=s("2a04"),M=s.n(k);function C(t){const e=Object($["a"])(t,{type:"array",cellDates:!0}),s=e.SheetNames[0],n=A(e.Sheets[s],[],1).map(P),a=I(n,!1),i=B(n),o=H(n),r=N(n);return{data:n,statistics:a,sessionStatistics:i,tutorialStatistics:o,heatMaps:r}}function A(t,e,s){const n=t["!ref"];if(!n)throw"Invalid Spreadsheet";const a=$["b"].decode_range(n);let i=!0;const o=[],r={};let c=0;for(let d=a.s.r;d<=a.e.r;d++){if(!i&&c++<s)continue;const e={};for(let s=a.s.c;s<=a.e.c;s++){const n=$["b"].encode_cell({r:d,c:s}),a=t[n];if(a)if(i)r[s]=a.v;else{const t=r[s];e[t]=a.v}}i?i=!1:o.push(e)}return o}function P(t){return{startDate:t["StartDate"],endDate:t["EndDate"],sessionDate:D()(t["Q10"],"M/D/YYYY, H:m:s A").toDate(),finished:"True"==t["Finished"],courseCode:t["Q8"],courseName:t["Q9"],group:Object(w["c"])(t["Q11"],t["Q8"]),sessionIndex:t["Q12"],sessionId:t["Q13"],location:t["Q14"],studentNumber:t["QID1"]}}function I(t,e){const s=new Map;for(const n of t){const t=n.courseCode;let a=s.get(t);if(a||(a=new R(t),s.set(t,a)),n.finished)a.incrementFinished();else if(a.incrementUnfinished(),!e)continue;const i=(n.startDate.getTime()-n.sessionDate.getTime())/1e3;Number.isNaN(i)||a.addDrift(i)}return[...s.values()]}function B(t){const e=new Map;for(const s of t){let t=e.get(s.courseCode);t||(t=new Map,e.set(s.courseCode,t));const n=s.group.name;let a=t.get(n);a||(a=new Map,t.set(n,a));let i=a.get(s.sessionIndex);i||(i=new Y(s.courseCode,s.group,s.sessionIndex),a.set(s.sessionIndex,i)),i.addRecord(s)}return Object(w["d"])(e)}function H(t){const e=new Map;for(const s of t){let t=e.get(s.courseCode);t||(t=new Map,e.set(s.courseCode,t));let n=t.get(s.sessionIndex);n||(n=new F(s.courseCode,s.sessionIndex),t.set(s.sessionIndex,n)),n.addRecord(s)}return Object(w["d"])(e)}function N(t,e=!1){const s=new Set(t.map(t=>t.courseCode)),n=new Map;for(const o of[...s].sort()){const t=new z;n.set(o,t)}for(const o of t){var a;(e||o.finished)&&(null===(a=n.get(o.courseCode))||void 0===a||a.addRecord(o))}const i=new Map;for(const[o,r]of n.entries())i.set(o,r.getMap());return i}D.a.extend(M.a),D.a.extend(j.a);class R{constructor(t){this.course=t,this.unfinished=0,this.finished=0,this.drifts=[]}getCourse(){return this.course}getFinished(){return this.finished}getUnfinished(){return this.unfinished}getAverageDrift(){return this.drifts.reduce((t,e)=>t+e,0)/this.drifts.length}incrementUnfinished(){this.unfinished++}incrementFinished(){this.finished++}addDrift(t){this.drifts.push(t)}}class Y{constructor(t,e,s){this.courseCode=t,this.group=e,this.sessionIndex=s,this.records=[]}addRecord(t){this.records.push(t)}addRecords(t){t.forEach(this.addRecord)}countParticipants(t=!0,e=!1){if(t){const t=new Set;for(const s of this.records)!e&&s.finished&&s.studentNumber&&t.add(s.studentNumber);return t.size}return this.records.filter(t=>(e||t.finished)&&t.studentNumber).length}get repeatCounts(){const t=new Map;for(const a of this.records){const e=a.studentNumber;if(e){const s=t.get(e);s?t.set(e,s+1):t.set(e,1)}}const e=new Map;let s=0;for(const[a,i]of t.entries()){const t=e.get(i);t?e.set(i,t+1):e.set(i,1),s=Math.max(s,i)}const n=[];for(let a=2;a<=s;a++){let t=e.get(a);t||(t=0),n.push(new T(a,t))}return n}}class F{constructor(t,e){this.courseCode=t,this.sessionIndex=e,this.records=[]}addRecord(t){this.records.push(t)}getUniqueStudents(t=!1){const e=new Set;for(const s of this.records)(t||s.finished)&&s.studentNumber&&e.add(s.studentNumber);return e.size}get repeatCounts(){const t=new Map;for(const a of this.records){const e=a.studentNumber;if(e){let s=t.get(e);s||(s=new Set,t.set(e,s)),s.add(`${a.group.name} / ${a.sessionId}`)}}const e=new Map;let s=0;for(const[a,i]of t.entries()){const t=i.size,n=e.get(t);n?e.set(t,n+1):e.set(t,1),s=Math.max(s,t)}const n=[];for(let a=2;a<=s;a++){let t=e.get(a);t||(t=0),n.push(new T(a,t))}return n}}class T{constructor(t,e){this.repeats=t,this.count=e}getRepeats(){return this.repeats}getCount(){return this.count}}class z{constructor(){this.data=[]}addRecord(t){this.data.push(t)}getMap(t=!1){const e=new Map,s=new Set,n=new Set;for(const a of this.data){if(!t&&!a.finished)continue;const i=Q(a),o=E(a);if(null==o||i.includes("NaN"))continue;let r=e.get(i);r||(r=new Map,e.set(i,r));const c=r.get(o);c?r.set(o,c+1):r.set(o,1),s.add(i),n.add(o)}return{heatmap:e,weeks:[...n].sort(),weeklySlots:[...s].sort()}}}function E(t){const e=t.sessionDate,s=D()(e);return s.week()}function Q(t){const e=t.sessionDate,s=D()(e),n=(s.hour()<10?"0":"")+s.hour(),a=(s.minute()<10?"0":"")+s.minute();return`${s.weekday()} / ${n}:${a}`}var U=s("1b40"),L=s("4bb5"),W=s("a3b7"),q=s("d772"),J=s.n(q);D.a.extend(J.a);let Z=class extends U["d"]{changeFile(t){if(console.log(t),1==t.length){const e=new FileReader;e.addEventListener("load",this.processAttendanceFile),e.readAsArrayBuffer(t[0])}}processAttendanceFile(t){var e;const s=null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.result;if(s){const t=C(s);console.log(t),this.setAttendanceData(t)}}processHeadcountFile(t){var e;const s=null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.result;if(s){const t=C(s);this.setAttendanceData(t)}}formatDuration(t){return D.a.duration(Math.round(t),"s").toISOString()}clearData(){this.setAttendanceData({})}};Object(_["a"])([Object(L["b"])("attendanceData")],Z.prototype,"attendanceData",void 0),Object(_["a"])([Object(L["b"])("headcountData")],Z.prototype,"headcountData",void 0),Object(_["a"])([Object(L["a"])("setAttendanceData")],Z.prototype,"setAttendanceData",void 0),Object(_["a"])([Object(L["a"])("setHeadcountData")],Z.prototype,"setHeadcountData",void 0),Z=Object(_["a"])([Object(U["a"])({components:{FileDropZone:W["a"]}})],Z);var V=Z,G=V,K=s("2877"),X=Object(K["a"])(G,x,y,!1,null,null,null),tt=X.exports,et=s("4e82"),st=s("3206"),nt=s("80d2"),at=s("58df"),it=Object(at["a"])(Object(et["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(st["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(nt["k"])(this))}}),ot=s("0789"),rt=s("d9bd"),ct=p["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(rt["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}}),dt=s("a9ad");const lt=Object(at["a"])(ct,dt["a"],Object(st["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var ut=lt.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,e){t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick(()=>this.isActive=t)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(ot["a"],this.showLazyContent(()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(nt["k"])(this))])]))}}),ht=s("9d26"),pt=s("5607");const ft=Object(at["a"])(dt["a"],Object(st["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var vt=ft.extend().extend({name:"v-expansion-panel-header",directives:{ripple:pt["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=Object(nt["k"])(this,"actions")||[this.$createElement(ht["a"],this.expandIcon)];return this.$createElement(ot["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(nt["k"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),mt=(s("210b"),s("604c")),bt=mt["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...mt["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(rt["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(rt["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,e){const s=this.getValue(t,e),n=this.getValue(t,e+1);t.isActive=this.toggleMethod(s),t.nextIsActive=this.toggleMethod(n)}}}),gt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(m["a"],[e(b["c"],[t._v("Session Statistics")]),e(b["b"],[e(bt,t._l(t.attendanceData["sessionStatistics"],(function([s,n]){return e(it,{key:s},[e(vt,[t._v(t._s(s))]),e(ut,[e(bt,t._l(n,(function([s,n]){return e(it,{key:s},[e(vt,[t._v(t._s(s)+" ("+t._s(n.size)+" Tutorials)")]),e(ut,t._l(n,(function([s,n]){return e("div",{key:s},[e("strong",[t._v("Tutorial "+t._s(s)+":")]),t._v(" "+t._s(n.countParticipants())+" unique participants "),e("repeat-chips",{attrs:{data:n.repeatCounts,word:"registered"}})],1)})),0)],1)})),1)],1)],1)})),1)],1),e(i["a"]),e(b["a"],[e(v["a"],{attrs:{color:"primary"},on:{click:function(e){return t.$emit("prevStep")}}},[t._v("Prev")]),e(g["a"]),e(v["a"],{attrs:{color:"primary"},on:{click:function(e){return t.$emit("nextStep")}}},[t._v("Next")])],1)],1)},xt=[],yt=s("cc20"),_t=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",t._l(t.elems,(function(s){return e(yt["a"],{key:s.getRepeats(),attrs:{color:"warning","x-small":""}},[t._v(" "+t._s(s.getCount())+" students "+t._s(t.word)+" "+t._s(s.getRepeats())+" times ")])})),1)},$t=[];let wt=class extends U["d"]{get elems(){return this.data?this.data.filter(t=>t.getCount()>0):[]}};Object(_["a"])([Object(U["c"])(Array)],wt.prototype,"data",void 0),Object(_["a"])([Object(U["c"])(String)],wt.prototype,"word",void 0),wt=Object(_["a"])([Object(U["a"])({components:{}})],wt);var St=wt,Dt=St,Ot=Object(K["a"])(Dt,_t,$t,!1,null,null,null),jt=Ot.exports;let kt=class extends U["d"]{};Object(_["a"])([Object(L["b"])("attendanceData")],kt.prototype,"attendanceData",void 0),kt=Object(_["a"])([Object(U["a"])({components:{RepeatChips:jt}})],kt);var Mt=kt,Ct=Mt,At=Object(K["a"])(Ct,gt,xt,!1,null,null,null),Pt=At.exports,It=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(m["a"],[e(b["c"],[t._v("Session Statistics")]),e(b["b"],[e(bt,t._l(t.attendanceData["tutorialStatistics"],(function([s,n]){return e(it,{key:s},[e(vt,[t._v(t._s(s))]),e(ut,t._l(n,(function([s,n]){return e("div",{key:s},[e("strong",[t._v("Tutorial "+t._s(s))]),t._v(": "+t._s(n.getUniqueStudents())+" unique participants "),e("repeat-chips",{attrs:{data:n.repeatCounts,word:"attended"}})],1)})),0)],1)})),1)],1),e(i["a"]),e(b["a"],[e(v["a"],{attrs:{color:"primary"},on:{click:function(e){return t.$emit("prevStep")}}},[t._v("Prev")]),e(g["a"]),e(v["a"],{attrs:{color:"primary"},on:{click:function(e){return t.$emit("nextStep")}}},[t._v("Next")])],1)],1)},Bt=[];let Ht=class extends U["d"]{};Object(_["a"])([Object(L["b"])("attendanceData")],Ht.prototype,"attendanceData",void 0),Ht=Object(_["a"])([Object(U["a"])({components:{RepeatChips:jt}})],Ht);var Nt=Ht,Rt=Nt,Yt=Object(K["a"])(Rt,It,Bt,!1,null,null,null),Ft=Yt.exports,Tt=(s("8b37"),s("7560")),zt=Object(at["a"])(Tt["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(nt["e"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),Et=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(m["a"],[e(b["c"],[t._v("Course Heat Maps")]),e(b["b"],[e(bt,t._l(t.attendanceData["heatMaps"],(function([s,n]){return e(it,{key:s},[e(vt,[t._v(t._s(s))]),e(ut,[e(zt,[e("thead",[e("tr",[e("th",{attrs:{span:"col"}}),t._l(n["weeks"],(function(s){return e("th",{key:s,attrs:{span:"col"}},[t._v(t._s(s))])}))],2)]),e("tbody",t._l(n["weeklySlots"],(function(s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s))]),t._l(n["weeks"],(function(a){return e("td",{key:a,attrs:{span:"col"}},[t._v(" "+t._s(n["heatmap"].get(s).get(a))+" ")])}))],2)})),0)])],1)],1)})),1)],1),e(i["a"]),e(b["a"],[e(v["a"],{attrs:{color:"primary"},on:{click:function(e){return t.$emit("prevStep")}}},[t._v("Prev")]),e(g["a"])],1)],1)},Qt=[];let Ut=class extends U["d"]{};Object(_["a"])([Object(L["b"])("attendanceData")],Ut.prototype,"attendanceData",void 0),Ut=Object(_["a"])([Object(U["a"])({components:{RepeatChips:jt}})],Ut);var Lt=Ut,Wt=Lt,qt=(s("bd4e"),Object(K["a"])(Wt,Et,Qt,!1,null,"136cc814",null)),Jt=qt.exports,Zt=p["a"].extend({name:"Analyzer",components:{Step0:tt,Step1:Pt,Step2:Ft,Step3:Jt},data:()=>({step:1})}),Vt=Zt,Gt=Object(K["a"])(Vt,u,h,!1,null,null,null);e["default"]=Gt.exports},"7e21":function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";return function(t,e){e.prototype.weekday=function(t){var e=this.$locale().weekStart||0,s=this.$W,n=(s<e?s+7:s)-e;return this.$utils().u(t)?n:this.subtract(n,"day").add(t,"day")}}}))},"8b37":function(t,e,s){},bd4e:function(t,e,s){"use strict";s("6762")},d772:function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";var t,e,s=1e3,n=6e4,a=36e5,i=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,r=31536e6,c=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:r,months:c,days:i,hours:a,minutes:n,seconds:s,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof g},h=function(t,e,s){return new g(t,s,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},v=function(t){return f(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},b=function(t,e){return t?f(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},g=function(){function f(t,e,s){var n=this;if(this.$d={},this.$l=s,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*l[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){n.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var a=t.match(d);if(a){var i=a.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,s){return e+(t.$d[s]||0)*l[s]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/r),t%=r,this.$d.months=v(t/c),t%=c,this.$d.days=v(t/i),t%=i,this.$d.hours=v(t/a),t%=a,this.$d.minutes=v(t/n),t%=n,this.$d.seconds=v(t/s),t%=s,this.$d.milliseconds=t},m.toISOString=function(){var t=b(this.$d.years,"Y"),e=b(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var n=b(s,"D"),a=b(this.$d.hours,"H"),i=b(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var r=b(o,"S"),c=t.negative||e.negative||n.negative||a.negative||i.negative||r.negative,d=a.format||i.format||r.format?"T":"",l=(c?"-":"")+"P"+t.format+e.format+n.format+d+a.format+i.format+r.format;return"P"===l||"-P"===l?"P0D":l},m.toJSON=function(){return this.toISOString()},m.format=function(t){var s=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return s.replace(o,(function(t,e){return e||String(n[t])}))},m.as=function(t){return this.$ms/l[p(t)]},m.get=function(t){var e=this.$ms,s=p(t);return"milliseconds"===s?e%=1e3:e="weeks"===s?v(e/l[s]):this.$d[s],0===e?0:e},m.add=function(t,e,s){var n;return n=e?t*l[p(e)]:u(t)?t.$ms:h(t,this).$ms,h(this.$ms+n*(s?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return h(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}();return function(s,n,a){t=a,e=a().$utils(),a.duration=function(t,e){var s=a.locale();return h(t,{$l:s},e)},a.isDuration=u;var i=n.prototype.add,o=n.prototype.subtract;n.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),i.bind(this)(t,e)},n.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}))}}]);
//# sourceMappingURL=about.753a8e5f.js.map