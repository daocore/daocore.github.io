(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{660:function(n,o,t){"use strict";var e=t(3),i=t(2),r=t(4),a=t(255),c=i(1..toPrecision);e({target:"Number",proto:!0,forced:r((function(){return"1"!==c(1,void 0)}))||!r((function(){c({})}))},{toPrecision:function(n){return void 0===n?c(a(this)):c(a(this),n)}})},661:function(n,o){n.exports=function(){window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(n){return window.clearTimeout(n)},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return window.setTimeout(n,1e3/60)}}},662:function(n,o){n.exports=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=n,e=void 0,i=!0;return function(){var n=this,r=arguments;if(i&&(t.apply(this,r),i=!1),e)return!1;e=setTimeout((function(){clearTimeout(e),e=null,t.apply(n,r)}),o)}}},663:function(n,o){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};n.exports=function n(){Array.isArray||(Array.isArray=function(n){return"[object Array]"===Object.prototype.toString.call(n)});var o=void 0,e=void 0,i=void 0,r=void 0,a=void 0,c=void 0,u=1,s=arguments[0]||{},d=!1,f=arguments.length;if("boolean"==typeof s&&(d=s,s=arguments[1]||{},u++),"object"!==(void 0===s?"undefined":t(s))&&"function"!=typeof s&&(s={}),u===f)return s;for(;u<f;u++)if(null!=(e=arguments[u]))for(o in e)i=s[o],r=e[o],a=Array.isArray(r),d&&r&&("object"===(void 0===r?"undefined":t(r))||a)?(a?(a=!1,c=i&&Array.isArray(i)?i:[]):c=i&&"object"===(void 0===i?"undefined":t(i))?i:{},s[o]=n(d,c,r)):void 0!==r&&(s[o]=r);return s}},665:function(n,o,t){"use strict";t.r(o);t(660),t(146),t(505);const e=t(662);var i=(n,o)=>{window.addEventListener("resize",e(n,o))};t(661)();var r=t(663),a={name:"bubblesEffect",data:function(){return{circles:[],requestAniId:null}},props:{options:{type:Object,default:function(){return{}}}},computed:{opts:function(){return r({},{color:"rgba(225,225,225,0.5)",radius:15,densety:.3,clearOffset:.2},this.options)}},methods:{randomColor:function(){var n=Math.floor(255*Math.random()),o=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),e=Math.random().toPrecision(2);return"rgba(".concat(n,", ").concat(o,", ").concat(t,", ").concat(e,")")}},mounted:function(){var n,o,t,e,r=[],a=this.opts,c=this;function u(){for(var t in cancelAnimationFrame(self.requestAniId),e.clearRect(0,0,n,o),r)r[t].draw();self.requestAniId=requestAnimationFrame(u)}function s(){var t=this;function i(){t.pos.x=Math.random()*n,t.pos.y=o+100*Math.random(),t.alpha=.1+Math.random()*a.clearOffset,t.scale=.1+.3*Math.random(),t.speed=Math.random(),t.color="random"===a.color?c.randomColor():a.color}this.pos={},i(),this.draw=function(){t.alpha<=0&&i(),t.pos.y-=t.speed,t.alpha-=5e-4,e.beginPath(),e.arc(t.pos.x,t.pos.y,t.scale*a.radius,0,2*Math.PI,!1),e.fillStyle=t.color,e.fill(),e.closePath()}}!function(){n=window.innerWidth,o=window.innerHeight,(t=c.$refs.canvas).width=n,t.height=o,e=t.getContext("2d");for(var i=0;i<n*a.densety;i++){var d=new s;r.push(d)}u()}(),i((function(){n=window.innerWidth,o=window.innerHeight,t.width=n,t.height=o}))},beforeDestroy:function(){cancelAnimationFrame(this.requestAniId)}},c=t(15),u=Object(c.a)(a,(function(){var n=this.$createElement;return(this._self._c||n)("canvas",{ref:"canvas",staticStyle:{position:"absolute",top:"0",left:"0"}})}),[],!1,null,null,null).exports;"undefined"!=typeof window&&window.Vue&&Vue.component(u.name,u);o.default=u}}]);