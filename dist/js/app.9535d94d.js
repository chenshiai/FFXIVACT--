(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],h=0,f=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"04fd":function(t,e,s){"use strict";var a=s("d552"),n=s.n(a);n.a},2395:function(t,e,s){},"7c55":function(t,e,s){"use strict";var a=s("2395"),n=s.n(a);n.a},"7df9":function(t,e,s){},"8d91":function(t,e,s){},bda1:function(t,e,s){},be20:function(t,e,s){"use strict";var a=s("eb9d"),n=s.n(a);n.a},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",[t.showConfigs.geniussister.status?s("GeniusSister"):t._e()],1),s("keep-alive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():s("router-view"),s("div",{staticClass:"buttom-ann"})],1)},i=[],o=s("9f12"),r=s("53fe"),l=s("8b83"),c=s("c65a"),u=s("c03e"),h=s("9ab4"),f=s("60a3"),d=(s("caad"),s("0d03"),s("4d63"),s("ac1f"),s("25f0"),s("466d"),["acn","arc","blm","brd","drg","lnc","mch","mnk","mnk","min","pgl","pug","rdm","rog","sam","smn","nin","dnc","bum"]),p=["drk","gla","gld","mrd","pld","war","gnb"],m=["ast","cnj","sch","whm"];function v(t){return d.includes(t.toLowerCase())}function g(t){return p.includes(t.toLowerCase())}function w(t){return m.includes(t.toLowerCase())}function b(t,e){var s=30,a=new Date;a.setTime(a.getTime()+24*s*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+a.toUTCString()}function C(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),s=document.cookie.match(e);return s?unescape(s[2]):null}function y(t,e){var s=null;return function(){null!==s&&clearTimeout(s),s=setTimeout(t,e)}}var k=s("4bb5"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"landlord"}},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],staticClass:"message"},[s("span",[t._v(t._s(t.talk))]),""===t.talk?s("div",[""===t.message.currentArea?s("span",[t._v("并没有战斗数据呀~")]):s("div",[s("span",[t._v(" 在"),s("font",{staticStyle:{color:"#dd7d00"}},[t._v("『"+t._s(t.message.currentArea)+"』")]),t._v(" 战斗了"),s("font",{staticStyle:{color:"#0072dd"}},[t._v(t._s(t.message.time))])],1),s("div",[s("span",[t._v(" 团队秒伤是 "),s("font",{staticStyle:{color:"#dd00d2"}},[t._v(t._s(t.message.totalDps))])],1),s("span",{staticStyle:{float:"right"}},[t._v(" 你的秒伤是 "),s("font",{staticStyle:{color:"#dd0000"}},[t._v(t._s(t.message.youDps))])],1)]),s("div")])]):t._e()])]),s("canvas",{staticClass:"live2d",attrs:{id:"live2d",width:"300",height:"240"},on:{click:t.setTouchTalk}}),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showTools,expression:"showTools"}],staticClass:"tools",attrs:{id:"tools"}},[s("li",{staticClass:"tool-item",attrs:{id:"state"},on:{click:t.viewState}},[t._v("战斗")]),s("li",{staticClass:"tool-item",attrs:{id:"chat"},on:{click:t.setChatTalk}},[t._v("闲话")]),s("li",{staticClass:"tool-item",attrs:{id:"close"},on:{click:t.closeSister}},[t._v("离开")]),s("li",{staticClass:"tool-item",attrs:{id:"abort"}},[t._v("关于")])])],1)},V=[],O=new a["a"],j=Object(k["a"])("showConfigs"),S=["干嘛呢你，快把手拿开！","你看到过我的小熊吗？","鼠...鼠标放错地方了！","萝莉控是什么呀？","Hentai！","再摸的话我可要报警了！⌇●﹏●⌇","是...是不小心碰到的吧？","警~察~叔~叔~~，这里有个变态一直在摸我(ó﹏ò｡)","啦哩吼~~！"],E=["蝼蚁之辈，妄想弑神？—— 伊芙利特","在此绽放的月下美人，乃是送我坠入黄泉的彼岸花。—— 月读","我就不能是你的典善吗？—— 某光呆","早安，娜娜莫陛下...今天的萨纳兰，依旧是艳阳高照啊。—— 劳班","咕哎！？—— 阿尔法","生命之色涡旋流转，七重之门现于世间，力量之塔君临九天—— 究~极~！—— LaHee布累亚","你是我的月神吗？—— 某单身龙男","倾听，感受，思考—— 妈水晶","你果然...还是笑起来...最好看了。—— 奥尔什方","名字土土的冒险者哟库啵~~","等我醒来，我会最先打听你的名字。想必你的名字会铭刻在历史上，成为指引我的光芒。--古·拉哈·提亚","只有这点钱？在下已无心应战。—— 某居合高手","武学精髓，强多啦哈！—— 武神","请你来一趟沙之家...","我将回归你的内心，成为你的泪水，你的愤怒，你为世界而战的力量。—— 弗雷","典善，我不会再失去你了。—— 朱雀","你为什么要跑啊！！—— 塔塔露","人意凡情已不再，神思邪性显月霞。—— 月读","嗯哼～欢迎来到森之乐园百啼灵！一起来玩吧！呼啾～—— 一个奇怪的青年","哦~我可爱的小树苗啊~—— 菲奥·乌尔","愿在不久的将来，年轻的女孩不必在雪原中流浪。","999，接受，LB，需求，辛苦了~~","女儿啊，接受我的睿智吧。—— 索菲亚","我会用这慈爱的火焰守护你。—— 朱雀","你们将被彻底抹杀！—— 青龙","大鲶鱼包邮~！","你知道吗：冲刺的时候，你的表情会变（咬紧牙关的样子）","晚安，哈迪斯。","早上好，古·拉哈·提亚。"],T=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.message={currentArea:"",time:"",totalDps:"",youDps:""},t.talk="",t.showTools=!1,t.showMessage=!1,t.messageTimeer=null,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"initEventListener",value:function(){var t=this,e=document.getElementById("landlord"),s=document.getElementById("tools");document.getElementById("live2d");s&&s.addEventListener("mouseover",(function(e){switch(e.target.id){case"state":t.showTalk("点击可以查看当前战斗状态数据哟~~");break;case"chat":t.showTalk("猜猜我要说些什么~");break;case"close":t.showTalk("要和我说再见了吗？");break;case"abort":t.showTalk("你好啊，我是Tia。素材来源于手游《药水制作师》，由开源项目live2d.js提供的技术支持。特别鸣谢：猫与向日葵。");break}})),e&&(e.addEventListener("mouseover",(function(){t.showTools=!0})),e.addEventListener("mouseleave",(function(){t.showTools=!1})));var a=y((function(){document.documentElement.clientWidth<280&&t.showTalk("太小啦，能不能拉大一点？"),document.documentElement.clientWidth>400&&t.showTalk("你拉那么大做什么，我很胖吗！？")}),500);window.addEventListener("resize",a)}},{key:"showTalk",value:function(t){var e=this;this.talk=t;var s=250*t.length;""===t&&(s=5e3),this.showMessage=!0,this.messageTimeer&&clearTimeout(this.messageTimeer),this.messageTimeer=setTimeout((function(){e.showMessage=!1}),s)}},{key:"viewState",value:function(){this.showTalk("")}},{key:"setTouchTalk",value:function(){var t=Math.floor(Math.random()*S.length);this.showTalk(S[t])}},{key:"closeSister",value:function(t){var e={status:!1,label:"天才妹妹"};this.changeShowConfigs(e)}},{key:"setChatTalk",value:function(){var t=Math.floor(Math.random()*E.length);this.showTalk(E[t])}},{key:"created",value:function(){var t=this;O.$on("changeMessage",(function(e){t.message=e})),O.$on("TellMySister",(function(e){t.showTalk(e)}))}},{key:"mounted",value:function(){var t=this;window.loadlive2d("live2d","https://beauitfytempllate.oss-cn-hangzhou.aliyuncs.com/model2.json"),this.initEventListener(),setTimeout((function(){t.showTalk("啦哩吼~~！")}),1e3)}}]),e}(f["c"]);h["a"]([j.State((function(t){return t.showConfigs}))],T.prototype,"showConfigs",void 0),h["a"]([j.Action("changeShowConfigs")],T.prototype,"changeShowConfigs",void 0),T=h["a"]([f["a"]],T);var x=T,D=x,M=(s("d3397"),s("2877")),N=Object(M["a"])(D,_,V,!1,null,null,null),P=N.exports,A=Object(k["a"])("showConfigs"),F=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"initConfigs",value:function(){var t=C("configs");t?this.setShowConfigs(JSON.parse(t)):b("configs",JSON.stringify(this.showConfigs))}},{key:"mounted",value:function(){this.initConfigs()}}]),e}(f["c"]);h["a"]([A.State((function(t){return t.showConfigs}))],F.prototype,"showConfigs",void 0),h["a"]([A.Action("setShowConfigs")],F.prototype,"setShowConfigs",void 0),F=h["a"]([Object(f["a"])({components:{GeniusSister:P}})],F);var $=F,L=$,J=(s("7c55"),Object(M["a"])(L,n,i,!1,null,null,null)),G=J.exports,I=s("8c4f"),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("svg",{staticClass:"damage",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[s("defs",[s("g",{attrs:{id:"sex"}},[s("path",{attrs:{d:"m25 7.5l15.155 8.75l0 17.5l-15.155 8.75l-15.155 -8.75l0 -17.5z"}})]),s("linearGradient",{attrs:{id:"Gradient",x1:"1",y1:"1",x2:"0",y2:"0"}},[s("stop",{attrs:{offset:"0.1","stop-color":"white","stop-opacity":"0"}}),s("stop",{attrs:{offset:"0.4","stop-color":"white","stop-opacity":"1"}}),s("stop",{attrs:{offset:"0.9","stop-color":"white","stop-opacity":"0"}})],1),s("mask",{attrs:{id:"Mask"}},[s("rect",{attrs:{x:"0",y:"-3",width:"50",height:"56",fill:"url(#Gradient)"}})])],1)]),!t.isClose&&t.combtants.length>0?[s("BattleDetail",{attrs:{encounter:t.encounter}}),s("transition-group",{attrs:{name:"list-complete"}},t._l(t.combtants,(function(e,a){return s("div",{key:e.name,class:["combtant","YOU"===e.name?"self-combtant":t.getJobColor(e.Job)]},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.joblogo.status,expression:"showConfigs.joblogo.status"}],staticClass:"damage-job"},[s("svg",{staticClass:"job-border",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[s("defs",[s("clipPath",{attrs:{id:"sex-mask"+a}},[s("rect",{attrs:{x:"0",y:"-3",width:"50",height:t.getPercentNumber(e.damageP)}})])]),s("use",{staticClass:"border-sex",attrs:{"xlink:href":"#sex"}}),s("use",{staticClass:"sex-percent",attrs:{"xlink:href":"#sex","clip-path":"url(#sex-mask"+a+")",mask:"url(#Mask)"}})]),s("img",{staticClass:"job",attrs:{src:"../dist/icons/"+e.Job.toLowerCase()+"-large.png"}})]),s("div",{staticClass:"play-detail"},[s("div",{staticClass:"name"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.playname.status,expression:"showConfigs.playname.status"}]},[t._v(t._s(e.name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.abbreviation.status,expression:"showConfigs.abbreviation.status"}]},[t._v(" · "+t._s(e.Job))])]),s("div",{staticClass:"encdps"},[s("div",{staticClass:"dc-pct"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.direct.status,expression:"showConfigs.direct.status"}],staticClass:"direct"},[t._v(t._s(e.DirectHitPct))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.crit.status,expression:"showConfigs.crit.status"}],staticClass:"crit"},[t._v(t._s(e.crithitP))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.dirctAcrit.status,expression:"showConfigs.dirctAcrit.status"}],staticClass:"directCrit"},[t._v(t._s(e.CritDirectHitPct))])]),s("Damage",{attrs:{ENCDPS:e.ENCDPS,player:e.name}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.suffix.status,expression:"showConfigs.suffix.status"}],staticClass:"unit"},[t._v("DPS")])],1),s("div",{staticClass:"bottom"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.maxhit.status,expression:"showConfigs.maxhit.status"}],staticStyle:{float:"right"}},[t._v(t._s(e.maxhit))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showConfigs.deaths.status,expression:"showConfigs.deaths.status"}]},[s("img",{attrs:{src:"../dist/img/kulou.svg",alt:""}}),t._v(" "+t._s(e.deaths)+" ")])])])])})),0)]:t._e(),s("ul",{staticClass:"config"},[s("li",{on:{click:t.toConfig}},[s("span",[t._v("设置")])]),s("li",{on:{click:t.closeList}},[t.isClose?s("span",[t._v("展开")]):s("span",[t._v("收起")])]),s("li",{on:{click:t.lookMyself}},[t.Myself?s("span",[t._v("全体")]):s("span",[t._v("个人")])])])],2)},B=[],H=(s("4160"),s("b64b"),s("e25e"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"dps-number",attrs:{id:"dps"+t.player}})}),q=[],z=(s("a9e3"),s("b680"),s("5319"),s("1276"),function(){return(z=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)}),Y=function(){function t(t,e,s){var a=this;this.target=t,this.endVal=e,this.options=s,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){a.startTime||(a.startTime=t);var e=t-a.startTime;a.remaining=a.duration-e,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(e,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(e,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(e/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(e/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Math.round(a.frameVal*a.decimalMult)/a.decimalMult,a.printValue(a.frameVal),e<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var e,s,n,i,o,r=t<0?"-":"";if(e=Math.abs(t).toFixed(a.options.decimalPlaces),n=(s=(e+="").split("."))[0],i=s.length>1?a.options.decimal+s[1]:"",a.options.useGrouping){o="";for(var l=0,c=n.length;l<c;++l)0!==l&&l%3==0&&(o=a.options.separator+o),o=n[c-l-1]+o;n=o}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),r+a.options.prefix+n+i+a.options.suffix},this.easeOutExpo=function(t,e,s,a){return s*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=z({},this.defaults,s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var s=this.countDown?1:-1;this.endVal=t+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),Z=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.change={},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"w_ENCDPS",value:function(t){this.change.update(parseInt(t,10))}},{key:"mounted",value:function(){var t=this,e={startVal:0,duration:1.5,useGrouping:!1};this.$nextTick((function(){t.change=new Y("dps".concat(t.player),parseInt(t.ENCDPS,10),e),t.change.start()}))}}]),e}(f["c"]);h["a"]([Object(f["b"])({default:""})],Z.prototype,"ENCDPS",void 0),h["a"]([Object(f["b"])({default:0})],Z.prototype,"player",void 0),h["a"]([Object(f["d"])("ENCDPS")],Z.prototype,"w_ENCDPS",null),Z=h["a"]([f["a"]],Z);var R=Z,W=R,K=(s("ff3c"),Object(M["a"])(W,H,q,!1,null,null,null)),Q=K.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"battle-detail"},[s("span",[t._v(t._s(t.encounter.duration))]),s("p",[s("span",[t._v(t._s(t.encounter.ENCDPS)+"·团队DPS")])]),s("p",[s("span",[t._v(t._s(t.encounter.CurrentZoneName))])])])},tt=[],et=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["c"]);h["a"]([Object(f["b"])()],et.prototype,"encounter",void 0),et=h["a"]([f["a"]],et);var st=et,at=st,nt=(s("be20"),Object(M["a"])(at,X,tt,!1,null,null,null)),it=nt.exports,ot=Object(k["a"])("showConfigs"),rt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.data={Encounter:{CurrentZoneName:"",duration:"",ENCDPS:""},Combatant:{},isActive:!1},t.isClose=!1,t.Myself=!1,t.TopDamage="",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"updateTemplate",value:function(t){var e=this;this.data=t.detail,this.$nextTick((function(){e.TellMySister()}))}},{key:"TellMySister",value:function(){var t=this.data,e="YOU",s=t.Combatant[e].ENCDPS||"0",a={currentArea:t.Encounter.CurrentZoneName,time:t.Encounter.duration,totalDps:t.Encounter.ENCDPS,youDps:s};O.$emit("changeMessage",a)}},{key:"lookMyself",value:function(){this.Myself?O.$emit("TellMySister","想看看大家的的数据吗？"):O.$emit("TellMySister","现在你就是主角！"),this.Myself=!this.Myself}},{key:"closeList",value:function(){this.isClose||O.$emit("TellMySister","数据列表已经收起来咯~"),this.isClose=!this.isClose}},{key:"getJobColor",value:function(t){return v(t)?"dps-color":g(t)?"tank-color":w(t)?"heal-color":"other-color"}},{key:"getPercentNumber",value:function(t){var e=56*parseInt(t,10)/parseInt(this.TopDamage,10);return e||100}},{key:"toConfig",value:function(){O.$emit("TellMySister","这里可以自定设置呢。"),this.$router.push("config")}},{key:"mounted",value:function(){var t=this;document.addEventListener("onOverlayDataUpdate",(function(e){t.updateTemplate(e)}))}},{key:"destroyed",value:function(){var t=this;document.removeEventListener("onOverlayDataUpdate",(function(e){t.updateTemplate(e)}))}},{key:"encounter",get:function(){return this.data.Encounter}},{key:"combtants",get:function(){var t=[],e=this.data.Combatant;if(Object.keys(e).forEach((function(s){e[s].crithitP=e[s]["crithit%"],e[s].damageP=e[s]["damage%"],t.push(e[s])})),t.length>0&&(this.TopDamage=t[0].damageP),this.Myself){var s="YOU";return[e[s]]}return t}}]),e}(f["c"]);h["a"]([ot.State((function(t){return t.showConfigs}))],rt.prototype,"showConfigs",void 0),rt=h["a"]([Object(f["a"])({components:{Damage:Q,BattleDetail:it}})],rt);var lt=rt,ct=lt,ut=(s("de16"),Object(M["a"])(ct,U,B,!1,null,null,null)),ht=ut.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"config-page"},[s("div",{staticClass:"config-list"},[s("router-link",{staticClass:"waiting",attrs:{to:"/"}},[t._v("返回")]),s("span",{staticClass:"list-title"},[t._v("显示设定")]),t._l(t.showConfigs,(function(e,a){return s("div",{key:a,staticClass:"item"},[s("span",[t._v(t._s(e.label))]),s("input",{staticClass:"check-input",attrs:{id:e.label,name:e.label,type:"checkbox"},domProps:{checked:e.status},on:{change:t.changed}}),s("label",{class:["label",e.status?"label-checked":""],attrs:{for:e.label}},[s("div",{staticClass:"tick_mark"})])])}))],2)])},dt=[],pt=(s("b0c0"),Object(k["a"])("showConfigs")),mt=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"changed",value:function(t){var e={status:t.target.checked,label:t.target.name};this.changeShowConfigs(e)}}]),e}(f["c"]);h["a"]([pt.State((function(t){return t.showConfigs}))],mt.prototype,"showConfigs",void 0),h["a"]([pt.Action("changeShowConfigs")],mt.prototype,"changeShowConfigs",void 0),mt=h["a"]([f["a"]],mt);var vt=mt,gt=vt,wt=(s("04fd"),Object(M["a"])(gt,ft,dt,!1,null,null,null)),bt=wt.exports;a["a"].use(I["a"]);var Ct=[{path:"/",name:"home",component:ht,meta:{keepAlive:!0}},{path:"/config",name:"config",component:bt,meta:{keepAlive:!1}}],yt=new I["a"]({routes:Ct}),kt=yt,_t=s("2f62"),Vt={showConfigs:{playname:{status:!0,label:"玩家名称"},joblogo:{status:!0,label:"职业图标"},abbreviation:{status:!0,label:"职业缩写"},suffix:{status:!0,label:"数值后缀"},maxhit:{status:!0,label:"最强伤害"},deaths:{status:!1,label:"死亡次数"},direct:{status:!0,label:"直击率(蓝)"},crit:{status:!0,label:"暴击率(黄)"},dirctAcrit:{status:!0,label:"直暴率(绿)"},geniussister:{status:!1,label:"天才妹妹"}}},Ot={changeShowConfigs:function(t,e){for(var s in Vt.showConfigs)if(t.showConfigs[s].label===e.label){t.showConfigs[s].status=e.status;break}b("configs",JSON.stringify(t.showConfigs))},setShowConfigs:function(t,e){t.showConfigs=Object.assign(t.showConfigs,e)}},jt={changeShowConfigs:function(t,e){t.commit("changeShowConfigs",e)},setShowConfigs:function(t,e){t.commit("setShowConfigs",e)}},St={namespaced:!0,state:Vt,mutations:Ot,actions:jt};a["a"].use(_t["a"]);var Et=new _t["a"].Store({modules:{showConfigs:St}});a["a"].config.productionTip=!1,new a["a"]({router:kt,store:Et,render:function(t){return t(G)}}).$mount("#app")},d3397:function(t,e,s){"use strict";var a=s("7df9"),n=s.n(a);n.a},d552:function(t,e,s){},de16:function(t,e,s){"use strict";var a=s("8d91"),n=s.n(a);n.a},eb9d:function(t,e,s){},ff3c:function(t,e,s){"use strict";var a=s("bda1"),n=s.n(a);n.a}});
//# sourceMappingURL=app.9535d94d.js.map