(function(e){function t(t){for(var n,s,l=t[0],d=t[1],o=t[2],u=0,b=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);r&&r(t);while(b.length)b.shift()();return i.push.apply(i,o||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],n=!0,l=1;l<c.length;l++){var d=c[l];0!==a[d]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/fake-yiban/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var r=d;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"219d":function(e,t,c){},"288d":function(e,t,c){e.exports=c.p+"img/close.b2ffde26.svg"},"2edf":function(e,t,c){},"347c":function(e,t,c){"use strict";c("f6c6")},"41c7":function(e,t,c){},4775:function(e,t,c){e.exports=c.p+"img/back.bade37cb.svg"},"55fd":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),a=(c("b0c0"),c("a434"),{key:0,id:"root",class:"edit"}),i=Object(n["f"])("div",{class:"header"},[Object(n["f"])("div",{class:"title"},"Fake Yiban v0.2.0 (Alpha)")],-1),s={class:"content"},l={class:"s1"},d=Object(n["f"])("h3",null,"学生信息",-1),o=Object(n["f"])("div",{class:"row labels"},[Object(n["f"])("div",{class:"label"},"姓名"),Object(n["f"])("div",{class:"label"},"学号")],-1),r={class:"row labels"},u={class:"s2"},b=Object(n["f"])("h3",null,"请假信息",-1),f=Object(n["f"])("div",{class:"row labels"},[Object(n["f"])("div",{class:"label"},"项目"),Object(n["f"])("div",{class:"label"},"内容")],-1),v=["onUpdate:modelValue"],O=["onUpdate:modelValue"],j=["onClick"],p={class:"s3"},m=Object(n["f"])("h3",null,"审批进度",-1),h=Object(n["f"])("div",{class:"row labels"},[Object(n["f"])("div",{class:"label"},"姓名"),Object(n["f"])("div",{class:"label"},"编号"),Object(n["f"])("div",{class:"label"},"时间")],-1),x=["onUpdate:modelValue"],g=["onUpdate:modelValue"],_=["onUpdate:modelValue"],y=["onClick"],k={class:"s4"},w=Object(n["f"])("h3",null,"抄送",-1),I=Object(n["f"])("div",{class:"row labels"},[Object(n["f"])("div",{class:"label"},"姓名"),Object(n["f"])("div",{class:"label"},"编号")],-1),C=["onUpdate:modelValue"],V=["onUpdate:modelValue"],S=["onClick"],U={class:"final"};function N(e,t,c,N,q,J){var D=Object(n["m"])("fake"),P=Object(n["m"])("QRCode");return Object(n["i"])(),Object(n["e"])(n["a"],null,[0==q.page?(Object(n["i"])(),Object(n["e"])("div",a,[i,Object(n["f"])("div",s,[Object(n["f"])("div",l,[d,o,Object(n["f"])("div",r,[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return q.studentName=e})},null,512),[[n["o"],q.studentName]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return q.studentID=e})},null,512),[[n["o"],q.studentID]])])]),Object(n["f"])("div",u,[b,f,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(q.items,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{class:"row",key:e},[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,v),[[n["o"],e.name]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.value=t}},null,8,O),[[n["o"],e.value]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return q.items.splice(t,1)}},"X",8,j)])})),128)),Object(n["f"])("button",{class:"add",onClick:t[2]||(t[2]=function(e){return q.items.push({name:"",value:""})})},"+")]),Object(n["f"])("div",p,[m,h,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(q.approvers,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{class:"row",key:e},[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,x),[[n["o"],e.name]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.id=t}},null,8,g),[[n["o"],e.id]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.time=t}},null,8,_),[[n["o"],e.time]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return q.approvers.splice(t,1)}},"X",8,y)])})),128)),Object(n["f"])("button",{class:"add",onClick:t[3]||(t[3]=function(e){return q.approvers.push({name:"",id:"",time:""})})},"+")]),Object(n["f"])("div",k,[w,I,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(q.ccs,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{class:"row",key:e},[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,C),[[n["o"],e.name]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.id=t}},null,8,V),[[n["o"],e.id]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return q.ccs.splice(t,1)}},"X",8,S)])})),128)),Object(n["f"])("button",{class:"add",onClick:t[4]||(t[4]=function(e){return q.ccs.push({name:"",id:""})})},"+")])]),Object(n["f"])("div",U,[Object(n["f"])("button",{onClick:t[5]||(t[5]=function(){return J.go&&J.go.apply(J,arguments)})},"GO!"),Object(n["f"])("button",{onClick:t[6]||(t[6]=function(e){return q.page=2})},"QRCode")])])):Object(n["d"])("",!0),1==q.page?(Object(n["i"])(),Object(n["c"])(D,{key:1,"student-name":q.studentName,studentID:q.studentID,items:q.items,approvers:q.approvers,ccs:q.ccs,onExit:t[7]||(t[7]=function(e){return q.page=0})},null,8,["student-name","studentID","items","approvers","ccs"])):Object(n["d"])("",!0),2==q.page?(Object(n["i"])(),Object(n["c"])(P,{key:2,onExit:t[8]||(t[8]=function(e){return q.page=0})})):Object(n["d"])("",!0)],64)}var q=c("4775"),J=c.n(q),D=c("288d"),P=c.n(D),A=c("630e"),T=c.n(A),E=c("f184"),R=c.n(E),X=function(e){return Object(n["k"])("data-v-745f7b8c"),e=e(),Object(n["j"])(),e},F={id:"root"},M={class:"hx-layout"},G={class:"header"},Q=X((function(){return Object(n["f"])("img",{src:J.a},null,-1)})),Y=[Q],$={class:"title"},z=X((function(){return Object(n["f"])("div",{class:"button-close"},[Object(n["f"])("img",{src:P.a})],-1)})),B=X((function(){return Object(n["f"])("div",{class:"button-menu"},[Object(n["f"])("img",{src:T.a})],-1)})),H={class:"hx-content"},W={class:"wfTitle___Y-ebx"},K={class:"hx-detail"},L={class:"hx-detail-group"},Z=X((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])("申请人 ")],-1)})),ee={class:"hx-detail-content"},te={class:"am-accordion hx-detail-accordion"},ce={class:"am-accordion-item"},ne={class:"am-accordion-header",role:"button",tabindex:"0","aria-expanded":"false"},ae=X((function(){return Object(n["f"])("i",{class:"arrow"},null,-1)})),ie={class:"hx-detail-item"},se=X((function(){return Object(n["f"])("span",{class:"hx-detail-item-label"},"姓名",-1)})),le={class:"hx-detail-item-field"},de={class:"am-flexbox am-flexbox-justify-start am-flexbox-align-center"},oe={class:"hx-detail"},re={class:"hx-detail-group"},ue=X((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])("申请内容 ")],-1)})),be={class:"hx-detail-content"},fe={class:"hx-detail-item-label"},ve={class:"hx-detail-item-field"},Oe={key:0,class:"hx-detail"},je={class:"hx-detail-group"},pe=X((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])("审批进度 ")],-1)})),me={class:"hx-detail-content"},he={class:"flowInfo___244V-"},xe={class:"nodestate___Npp7u"},ge=X((function(){return Object(n["f"])("span",null,"通过",-1)})),_e={key:0,class:"stateTime___2bJzR"},ye={class:"nodeleft___2q7Sg"},ke={class:"nodeindex___Cya0J"},we={class:"noderight___urUWJ"},Ie={style:{"margin-top":"0px"},class:"nodeapprover___1KJaE"},Ce={class:"workTime___PJH95"},Ve=X((function(){return Object(n["f"])("div",{class:"approverOpinion___3xcsE"},[Object(n["f"])("span",{style:{color:"rgb(135, 208, 104)"}},"已同意")],-1)})),Se=X((function(){return Object(n["f"])("div",{class:"flownode___1GTd6"},[Object(n["f"])("div",{class:"nodeend___sR2u9"})],-1)})),Ue={key:1,class:"hx-detail"},Ne={class:"hx-detail-group"},qe=X((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])("已抄送 ")],-1)})),Je={class:"hx-detail-content"},De={class:"ccInfo___T7Slb"},Pe=X((function(){return Object(n["f"])("div",{class:"hx-footer"},[Object(n["f"])("a",{role:"button",class:"am-button hx-footer_btn",style:{color:"rgb(87, 191, 242)"},"aria-disabled":"false"},[Object(n["f"])("span",null,"转发审批表单")])],-1)})),Ae=X((function(){return Object(n["f"])("img",{class:"hx-detail-statusIcon",src:R.a},null,-1)}));function Te(e,t,c,a,i,s){return Object(n["i"])(),Object(n["e"])("div",F,[Object(n["f"])("div",M,[Object(n["f"])("div",G,[Object(n["f"])("div",{class:"button-back",onClick:t[0]||(t[0]=function(t){return e.$emit("exit")})},Y),Object(n["f"])("div",$,Object(n["n"])(c.studentName)+"的请销假",1),z,B]),Object(n["f"])("main",H,[Object(n["f"])("div",W,Object(n["n"])(c.studentName)+"的请销假",1),Object(n["f"])("div",K,[Object(n["f"])("div",L,[Z,Object(n["f"])("div",ee,[Object(n["f"])("div",te,[Object(n["f"])("div",ce,[Object(n["f"])("div",ne,[ae,Object(n["f"])("div",ie,[se,Object(n["f"])("div",le,[Object(n["f"])("div",de,Object(n["n"])(c.studentName)+"("+Object(n["n"])(c.studentID)+")",1)])])])])])])])]),Object(n["f"])("div",oe,[Object(n["f"])("div",re,[ue,Object(n["f"])("div",be,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.items,(function(e){return Object(n["i"])(),Object(n["e"])("div",{class:"hx-detail-item",key:e},[Object(n["f"])("span",fe,Object(n["n"])(e.name),1),Object(n["f"])("div",ve,Object(n["n"])(e.value),1)])})),128))])])]),c.approvers.length>0?(Object(n["i"])(),Object(n["e"])("div",Oe,[Object(n["f"])("div",je,[pe,Object(n["f"])("div",me,[Object(n["f"])("div",he,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.approvers,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{class:"flownode___1GTd6 node2___1yk73",key:t},[Object(n["f"])("div",xe,[ge,t==c.approvers.length-1?(Object(n["i"])(),Object(n["e"])("span",_e,Object(n["n"])(e.time),1)):Object(n["d"])("",!0)]),Object(n["f"])("div",ye,[Object(n["f"])("span",ke,Object(n["n"])(t+1),1)]),Object(n["f"])("div",we,[Object(n["f"])("div",Ie,[Object(n["f"])("div",null,[Object(n["f"])("div",null,[Object(n["h"])(Object(n["n"])(e.name)+"("+Object(n["n"])(e.id)+")",1),Object(n["f"])("span",Ce,Object(n["n"])(e.time),1)]),Ve])])])])})),128)),Se])])])])):Object(n["d"])("",!0),c.ccs.length>0?(Object(n["i"])(),Object(n["e"])("div",Ue,[Object(n["f"])("div",Ne,[qe,Object(n["f"])("div",Je,[Object(n["f"])("div",De,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.ccs,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{key:t},Object(n["n"])(e.name)+"("+Object(n["n"])(e.id)+")",1)})),128))])])])])):Object(n["d"])("",!0)]),Pe]),Ae])}var Ee={name:"fake",emits:["exit"],props:{studentName:String,studentID:String,items:Array,approvers:Array,ccs:Array}},Re=(c("d69a"),c("6e4b"),c("dee8"),c("8368"),c("e19d"),c("6120"),c("6b0d")),Xe=c.n(Re);const Fe=Xe()(Ee,[["render",Te],["__scopeId","data-v-745f7b8c"]]);var Me=Fe,Ge=c("e7e9"),Qe=c.n(Ge),Ye=c("c2a2"),$e=c.n(Ye),ze=function(e){return Object(n["k"])("data-v-9c0d3252"),e=e(),Object(n["j"])(),e},Be={id:"root"},He={class:"header"},We=ze((function(){return Object(n["f"])("img",{src:J.a},null,-1)})),Ke=[We],Le=ze((function(){return Object(n["f"])("div",{class:"title"},"请销假",-1)})),Ze=ze((function(){return Object(n["f"])("div",{class:"button-close"},[Object(n["f"])("img",{src:P.a})],-1)})),et=ze((function(){return Object(n["f"])("div",{class:"button-menu"},[Object(n["f"])("img",{src:T.a})],-1)})),tt={class:"hx-content"},ct={class:"qrCode___3iwXY",style:{height:"360px"}},nt={key:0,class:"qr___Jrc0m",src:Qe.a,style:{width:"270px",height:"270px"}},at={key:1,class:"qr___Jrc0m",src:$e.a,style:{width:"270px",height:"270px"}},it={class:"text___HVPBl"},st=Object(n["h"])("二维码将在"),lt={class:"second___1XzxW"},dt=Object(n["h"])("后刷新"),ot=Object(n["g"])('<div class="hx-detail" data-v-9c0d3252><div class="hx-title-detail" data-v-9c0d3252><div class="hx-title-detail-dot" data-v-9c0d3252></div>离校详情 </div><div class="hx-detail-content" data-v-9c0d3252><div class="hx-detail-item" data-v-9c0d3252><span class="hx-detail-item-label" data-v-9c0d3252>操作人</span><div class="hx-detail-item-field" data-v-9c0d3252>-</div></div><div class="hx-detail-item" data-v-9c0d3252><span class="hx-detail-item-label" data-v-9c0d3252>操作时间</span><div class="hx-detail-item-field" data-v-9c0d3252>-</div></div><div class="hx-detail-item" data-v-9c0d3252><span class="hx-detail-item-label" data-v-9c0d3252>备注</span><div class="hx-detail-item-field" data-v-9c0d3252>-</div></div></div></div><div class="hx-detail" data-v-9c0d3252><div class="hx-title-detail" data-v-9c0d3252><div class="hx-title-detail-dot" data-v-9c0d3252></div>返校详情 </div><div class="hx-detail-content" data-v-9c0d3252><div class="hx-detail-item" data-v-9c0d3252><span class="hx-detail-item-label" data-v-9c0d3252>操作人</span><div class="hx-detail-item-field" data-v-9c0d3252>-</div></div><div class="hx-detail-item" data-v-9c0d3252><span class="hx-detail-item-label" data-v-9c0d3252>操作时间</span><div class="hx-detail-item-field" data-v-9c0d3252>-</div></div><div class="hx-detail-item" data-v-9c0d3252><span class="hx-detail-item-label" data-v-9c0d3252>备注</span><div class="hx-detail-item-field" data-v-9c0d3252>-</div></div></div></div>',2);function rt(e,t,c,a,i,s){return Object(n["i"])(),Object(n["e"])("div",Be,[Object(n["f"])("div",He,[Object(n["f"])("div",{class:"button-back",onClick:t[0]||(t[0]=function(t){return e.$emit("exit")})},Ke),Le,Ze,et]),Object(n["f"])("div",tt,[Object(n["f"])("div",ct,[Object(n["f"])("div",null,[0==i.qrcodeIndex?(Object(n["i"])(),Object(n["e"])("img",nt)):Object(n["d"])("",!0),1==i.qrcodeIndex?(Object(n["i"])(),Object(n["e"])("img",at)):Object(n["d"])("",!0),Object(n["f"])("div",it,[st,Object(n["f"])("span",lt,Object(n["n"])(s.timeString)+"秒",1),dt])])]),ot])])}var ut={name:"qrcode",data:function(){return{time:20,qrcodeIndex:0}},computed:{timeString:function(){return(this.time<10?"0":"")+String(this.time)}},mounted:function(){var e=this;setInterval((function(){e.time>0?e.time-=1:(e.time=20,e.qrcodeIndex++,e.qrcodeIndex%=2)}),1e3)}};c("347c");const bt=Xe()(ut,[["render",rt],["__scopeId","data-v-9c0d3252"]]);var ft=bt,vt={name:"App",components:{Fake:Me,QRCode:ft},data:function(){return{page:0,studentName:"Example",studentID:"1234567890",items:[{name:"审批编号",value:"20210101080000123456"},{name:"是否离校",value:"是"},{name:"是否离开沈阳",value:"否"},{name:"是否离开辽宁省",value:"否"},{name:"前往省份、城市",value:""},{name:"开始时间",value:"2021-01-01 08:00"},{name:"结束时间",value:"2021-01-02 08:00"},{name:"时长",value:"24"},{name:"请假类型",value:"事假"},{name:"本人联系电话",value:""},{name:"紧急联系人",value:""},{name:"紧急联系电话",value:""},{name:"请假原因",value:""}],approvers:[],ccs:[]}},methods:{go:function(){window.localStorage.setItem("last-data",JSON.stringify(this.$data)),this.page=1}},mounted:function(){var e=window.localStorage.getItem("last-data");if(e){var t=JSON.parse(e);this.studentName=t.studentName,this.studentID=t.studentID,this.items=t.items,this.approvers=t.approvers,this.ccs=t.ccs}}};c("eea2");const Ot=Xe()(vt,[["render",N]]);var jt=Ot,pt=c("9483");Object(pt["a"])("".concat("/fake-yiban/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["b"])(jt).mount("#app")},6120:function(e,t,c){"use strict";c("b1e9")},"630e":function(e,t,c){e.exports=c.p+"img/menu.c6c92fec.svg"},"6e4b":function(e,t,c){"use strict";c("41c7")},"7f7b":function(e,t,c){},8368:function(e,t,c){"use strict";c("219d")},b1e9:function(e,t,c){},c2a2:function(e,t,c){e.exports=c.p+"img/qrcode1.4f42d1ee.svg"},d00d:function(e,t,c){},d69a:function(e,t,c){"use strict";c("d00d")},dee8:function(e,t,c){"use strict";c("7f7b")},e19d:function(e,t,c){"use strict";c("2edf")},e7e9:function(e,t,c){e.exports=c.p+"img/qrcode0.ccd4d4ec.svg"},eea2:function(e,t,c){"use strict";c("55fd")},f184:function(e,t,c){e.exports=c.p+"img/approved.5e8ced67.png"},f6c6:function(e,t,c){}});
//# sourceMappingURL=app.de977e41.js.map