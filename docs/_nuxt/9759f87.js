(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{316:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("d31fbb88",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n(316)},318:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.anchor[data-v-6837b121]{\n  position:relative;\n  top:-20px;\n  visibility:hidden\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},319:function(t,e,n){"use strict";n.r(e);var r={name:"AnchorComponent",props:{id:{type:String,required:!0}}},l=(n(317),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"anchor",attrs:{id:t.id}})}),[],!1,null,"6837b121",null);e.default=component.exports},338:function(t,e,n){"use strict";n.r(e);var r={name:"BadPracticeCard",props:{heading:{type:String,required:!0},level:{type:String,required:!1,default:""},id:{type:String,required:!1,default:""}},data:function(){return{active:!1}},watch:{$route:function(){this.active=this.isActive()}},mounted:function(){this.active=this.isActive()},methods:{isActive:function(){return this.id&&this.$route.hash==="#"+this.id}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simple-card",class:{active:t.active}},[t.id?n("Anchor",{attrs:{id:t.id}}):t._e(),t._v(" "),n("h3",{staticClass:"relative mb-2 inline-block text-xl sm:text-2xl text-brand-heading-light dark:text-brand-heading-dark"},[t.id?n("a",{attrs:{href:"#"+t.id}},[t._v("\n      # "+t._s(t.heading)+"\n    ")]):n("span",[t._v("\n      # "+t._s(t.heading)+"\n    ")]),t._v(" "),t.level?n("span",{staticClass:"absolute  ml-1 -top-3.5 right-0 sm:top-0 sm:left-full text-xs text-shadow-none select-none"},[t._v("\n      "+t._s(t.level)+"\n    ")]):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Anchor:n(319).default})}}]);