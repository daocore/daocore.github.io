(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{467:function(t,e,n){},478:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return g})),n.d(e,"d",(function(){return b})),n.d(e,"c",(function(){return x}));var i=n(81),a=(n(24),n(48),n(247),n(245),n(77),n(147),n(507)),r=n(513).JsSignatureProvider,s="https",o="kylin.eosusa.news",c=443,u="5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",l=new r(["5JSAusb6xRiunAo5x9qCwk7MMATxLEEKHWDa5FmLpXVLoXBbCsU"]),d=s+"://"+o+":"+c,v=new a.JsonRpc(d),p=new a.Api({rpc:v,signatureProvider:l,chainId:u}),f=n(28),m=function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(e){var n,i,a,r,s,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.actor,i=void 0===n?"yijiaxunkeji":n,a=e.permission,r=void 0===a?"active":a,s=e.action,o=e.data,console.log(i,r,s,o),t.prev=2,t.next=5,p.transact({actions:[{account:i,name:s,authorization:[{actor:i,permission:r}],data:o}]},{blocksBehind:3,expireSeconds:30});case 5:return c=t.sent,console.log("获取到结果",c),t.abrupt("return",c);case 10:return t.prev=10,t.t0=t.catch(2),console.log("错误",t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(e,n,i){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.get_table_rows({json:!0,code:"yijiaxunkeji",scope:"yijiaxunkeji",table:e,limit:i,reverse:!0,key_type:"i64",upper_bound:n,index_position:1});case 3:return a=t.sent,console.log("获取到结果",a),t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),console.log("错误",t.t0),t.abrupt("return",{});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n,i){return t.apply(this,arguments)}}(),h=function(t){return m({action:"add",data:{content:t}}).then((function(t){return t}))},g=function(t){return m({action:"done",data:{id:t}}).then((function(t){return t}))},b=function(t){return m({action:"remove",data:{id:t}}).then((function(t){return t}))},x=function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(e,n){var i,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_("todotable",e,n);case 2:if(!(i=t.sent).rows){t.next=7;break}return r=[],null===(a=i.rows)||void 0===a||a.filter((function(t,e){var n,i,a,s=t.content.split("|");if(1===s.length)n="中本聪的神秘接班人",i=1,a=t.content;else if(2===s.length){var o=parseInt(s[0]);n="中本聪的神秘接班人",i=isNaN(o)?1:o,a=s[1]}else{var c=parseInt(s[1]);n=s[0],i=isNaN(c)?1:c,a=s[2]}r[e]={id:t.id,value:a,name:n,time:Object(f.f)(new Date(1e3*(i+1628870400))),isDone:!!t.is_done}})),t.abrupt("return",{more:i.more,next_key:i.next_key,list:r,status:200});case 7:return t.abrupt("return",{});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},480:function(t,e,n){"use strict";n(467)},484:function(t,e,n){"use strict";n(480);var i=n(15),a=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"loading"}},[e("div",{attrs:{id:"loading-center"}},[e("div",{attrs:{id:"loading-center-absolute"}},[e("div",{staticClass:"object",attrs:{id:"object_four"}}),this._v(" "),e("div",{staticClass:"object",attrs:{id:"object_three"}}),this._v(" "),e("div",{staticClass:"object",attrs:{id:"object_two"}}),this._v(" "),e("div",{staticClass:"object",attrs:{id:"object_one"}})])])])}],!1,null,"7efa5e3f",null);e.a=a.exports},515:function(t,e){},518:function(t,e){},530:function(t,e,n){},657:function(t,e,n){t.exports=n.p+"assets/img/head.4a26629c.jpg"},658:function(t,e,n){"use strict";n(530)},671:function(t,e,n){"use strict";n.r(e);var i=n(81),a=(n(146),n(77),n(111),n(245),n(147),n(478)),r=n(28),s={components:{LoadingPage:n(484).a},data:function(){return{name:"",content:"",timeBase:1628870400,next_key:"",list:[],more:!1,pageSize:10,loading:!1,top:0,tx:"",isMobile:!1}},created:function(){var t="undefined"!=typeof window?window:{navigator:{userAgent:""},location:{href:""}};this.getList(this.next_key,this.pageSize),this.isMobile=/Android|webOS|iPhone|iPod|BlackBerry/i.test(t.navigator.userAgent)},mounted:function(){var t=this;window.addEventListener("click",(function(e){var n=e.target.dataset.type;if(n){if("add"===n&&!t.content)return;if("next"===n&&!t.more)return;t.loading=!0,t.top="calc(".concat(e.pageY-e.clientY-100,"px) !important")}}))},methods:{getNextList:function(){this.more&&this.getList(this.next_key,this.pageSize)},getAllList:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.c)("",t.list.length);case 2:n=e.sent,t.next_key=null==n?void 0:n.next_key,t.list=n.list,t.more=null==n?void 0:n.more,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},getList:function(t,e){var n=this;return Object(i.a)(regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(a.c)(t,e);case 2:r=i.sent,n.next_key=null==r?void 0:r.next_key,n.list=n.list.concat(r.list),n.more=null==r?void 0:r.more,n.loading=!1;case 7:case"end":return i.stop()}}),i)})))()},addGuest:function(){var t=this;if(this.content){var e=Object(r.g)(new Date)-1e3*this.timeBase,n="".concat(this.name?this.name+"|":"").concat(parseInt(e/1e3),"|").concat(this.content);Object(a.a)(n).then((function(e){t.tx=e.transaction_id,t.getAllList(),t.name="",t.content=""}))}else alert("留言内容不能为空！")},doneGuest:function(t){var e=this;Object(a.b)(t).then((function(){e.getAllList()}))},removeGuest:function(t){var e=this;Object(a.d)(t).then((function(){e.getAllList()}))}}},o=(n(658),n(15)),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-box"},[i("transition",{attrs:{name:"fade"}},[i("LoadingPage",{staticClass:"loading",style:{top:t.top}})],1)],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"guestbook-box"},[i("div",{staticClass:"title"},[t._v("发布留言")]),t._v(" "),i("div",{staticClass:"head"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入留言者昵称",maxlength:"10"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("div",{staticClass:"btn",attrs:{"data-type":"add"},on:{click:t.addGuest}},[t._v("\n        发布\n      ")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",placeholder:"请输入留言内容",maxlength:"100"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),i("div",{staticClass:"tx"},[i("a",{attrs:{href:"https://kylin.eosq.app/tx/"+t.tx,target:"_blank"}},[t._v(t._s(t.tx?"交易哈希: "+(t.isMobile?t.tx.slice(0,16):t.tx):""))])]),t._v(" "),i("div",[t._v("\n      留言\n    ")]),t._v(" "),t._l(t.list,(function(e,a){return i("div",{key:a,staticClass:"content",style:{marginTop:0===a?"20px":0}},[t.isMobile?t._e():i("img",{attrs:{src:n(657),alt:""}}),t._v(" "),i("div",{staticClass:"body"},[i("div",{staticClass:"time"},[t._v(t._s(e.name)),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[t._v(" "+t._s(e.time))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],staticClass:"time"},[t._v(t._s(e.time))]),t._v(" "),i("div",{staticClass:"value"},[t._v(t._s(e.value||"-"))]),t._v(" "),t.isMobile?i("div",{staticClass:"operate",style:{color:e.isDone?"red":"",marginTop:"10px"},attrs:{"data-type":"operation"},on:{click:function(n){e.isDone?t.removeGuest(e.id):t.doneGuest(e.id)}}},[t._v(t._s(e.isDone?"删除":"标记已阅"))]):t._e()]),t._v(" "),t.isMobile?t._e():i("div",{staticClass:"operate",style:{color:e.isDone?"red":""},attrs:{"data-type":"operation"},on:{click:function(n){e.isDone?t.removeGuest(e.id):t.doneGuest(e.id)}}},[t._v(t._s(e.isDone?"删除":"标记已阅"))])])})),t._v(" "),i("div",{staticClass:"more"},[i("span",{attrs:{"data-type":"next"},on:{click:t.getNextList}},[t._v(t._s(t.more&&0!==t.list.length?"下一页":"你都快刨到我家祖坟啦，已经没有留言了哦！"))])])],2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guestbook-box",attrs:{id:"guest-box"}},[n("div",[t._v("当前留言板基于EOSIO区块链，使用kylin网络部署智能合约。")]),t._v(" "),n("div",[t._v("该留言板为DAPP即去中心化应用，用户可以随意添加、修改、删除各个留言。")]),t._v(" "),n("div",[t._v("所有留言均可在"),n("a",{attrs:{href:"https://kylin.eosq.app/account/yijiaxunkeji",target:"_blank"}},[t._v("kylin网络")]),t._v("查看到，记录不可篡改和伪造，请谨慎留言。")]),t._v(" "),n("div",[t._v("kylin测试网区块链浏览器：\n      "),n("a",{attrs:{href:"https://kylin.eosq.app/account/yijiaxunkeji",target:"_blank"}},[t._v("区块浏览器地址1")]),t._v(" "),n("a",{attrs:{href:"https://kylin.eosx.io/account/yijiaxunkeji",target:"_blank"}},[t._v("区块浏览器地址2")])])])}],!1,null,null,null);e.default=c.exports}}]);