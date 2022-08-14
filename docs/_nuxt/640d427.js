(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2,8,10],{317:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("d31fbb88",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n(317)},319:function(t,e,n){var o=n(22)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.anchor[data-v-6837b121]{\n  position:relative;\n  top:-20px;\n  visibility:hidden\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},320:function(t,e,n){"use strict";n.r(e);var o={name:"AnchorComponent",props:{id:{type:String,required:!0}}},r=(n(318),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"anchor",attrs:{id:t.id}})}),[],!1,null,"6837b121",null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);n(41),n(90);var o={name:"LaravelLink",props:{title:{type:String,required:!1,default:""},uri:{type:String,required:!0},type:{type:String,require:!1,default:"docs",validator:function(t){return["docs","api"].includes(t)}},version:{type:String,require:!1,default:"9.x"}},methods:{getLink:function(){return"https://laravel.com/".concat(this.type,"/").concat(this.version,"/").concat(this.uri)}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ExternalLink",{attrs:{title:t.title,link:t.getLink()}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExternalLink:n(212).default})},339:function(t,e,n){"use strict";n.r(e);var o={name:"ConventionsItem",props:{heading:{type:String,required:!0},id:{type:String,required:!1,default:""},options:{type:Array,required:!1,default:function(){return[]}},good:{type:Array,required:!1,default:function(){return[]}},bad:{type:Array,required:!1,default:function(){return[]}}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simple-card"},[t.id?n("Anchor",{attrs:{id:t.id}}):t._e(),t._v(" "),n("h3",{staticClass:"mb-2 text-xl sm:text-2xl text-brand-heading-light dark:text-brand-heading-dark"},[t.id?n("a",{attrs:{href:"#"+t.id}},[t._v("\n      # "+t._s(t.heading)+"\n    ")]):n("span",[t._v("\n      # "+t._s(t.heading)+"\n    ")])]),t._v(" "),t.options?n("ul",{staticClass:"mb-6 list-disc list-inside"},t._l(t.options,(function(option,e){return n("li",{key:e},[t._v("\n      "+t._s(option)+"\n    ")])})),0):t._e(),t._v(" "),n("div",{staticClass:"mb-6 text-sm"},[t._t("default")],2),t._v(" "),t.good.length||t.bad.length?n("div",{staticClass:"mt-2"},[t.good.length?n("div",{staticClass:"inline-block mb-3 mr-2 py-2 px-3 border border-dashed border-brand-success-light dark:border-brand-success-dark bg-brand-success-light bg-opacity-10 dark:bg-transparent"},[n("fa",{staticClass:"mr-1 text-brand-success-light dark:text-brand-success-dark",attrs:{icon:"fa-thumbs-up"}}),t._v(" "),n("span",[t._v(t._s(t.good.join(", ")))])],1):t._e(),t._v(" "),t.bad.length?n("div",{staticClass:"inline-block mb-3 mr-2 py-2 px-3 border border-dashed border-brand-danger-light dark:border-brand-danger-dark bg-brand-danger-light bg-opacity-10 dark:bg-transparent"},[n("fa",{staticClass:"mr-1 text-pink-600",attrs:{icon:"fa-angry"}}),t._v(" "),n("span",[t._v(t._s(t.bad.join(", ")))])],1):t._e()]):t._e()],1)}),[],!1,null,"fd2c8d40",null);e.default=component.exports;installComponents(component,{Anchor:n(320).default})},362:function(t,e,n){"use strict";n.r(e);var o={name:"ConventionsPage",head:function(){return{title:"LaraWay » Соглашения в Laravel",meta:[{hid:"og:title",name:"og:title",content:"Соглашения в Laravel"},{hid:"og:description",name:"og:description",content:"Рекомендации по именованию"},{hid:"description",name:"description",content:"Рекомендации по именованию"}]}},mounted:function(){this.$store.dispatch("nav-sidebar/pushItems",{group:"conventions",items:[{heading:"Functions & Variables",id:"func-and-var"},{heading:"Model",id:"model"},{heading:"Table",id:"table"},{heading:"Pivot Table",id:"pivot"},{heading:"Foreign Key",id:"fk"},{heading:"Relationship",id:"has-one"},{heading:"Migration",id:"migration"},{heading:"Route",id:"route-uri"},{heading:"Controller",id:"controller"},{heading:"View",id:"view"},{heading:"Config & Language",id:"conf-and-lang"},{heading:"Contract / Interface",id:"contract"},{heading:"Trait",id:"trait"}]})},beforeDestroy:function(){this.$store.dispatch("nav-sidebar/removeItems",{group:"conventions"})}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"page-heading"},[t._v("\n    Соглашения в Laravel\n  ")]),t._v(" "),n("div",{staticClass:"notice-box mb-8 py-2 px-4 italic"},[t._v("\n    В первую очередь следуй "),n("ExternalLink",{attrs:{title:"PSR",link:"https://www.php-fig.org/psr/psr-12/"}}),t._v("\n    и принятым соглашениям внутри команды/проекта.\n    "),n("br"),t._v("\n    Важно поддерживать единый «code style».\n  ")],1),t._v(" "),n("ConventionItem",{attrs:{id:"func-and-var",heading:"Functions & Variables",options:["camelCase"],good:["getPost()","$isActive","$id"],bad:["GetPost()","$is_active","$ID"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"model",heading:"Model",options:["Единственное число","Существительное","PascalCase","App\\Models"],good:["Post","PostComment"],bad:["Posts","post_comment","Postcomment"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"table",heading:"Table",options:["Множественное число","snake_case"],good:["posts","post_comments"],bad:["post","postcomment","PostComments"]}},[n("p",[n("b",[t._v("Имя таблицы = имя модели во множественном числе.")])]),t._v(" "),n("p",[t._v("\n      Если "),n("span",{staticClass:"bit variable"},[t._v("$table")]),t._v(" не указано явно в модели, то Laravel автоматически получит имя таблицы.\n    ")]),t._v(" "),n("p",[t._v("\n      Даже если явно указывать имя таблицы, то всё равно рекомендуется придерживаться данного соглашения.\n    ")])]),t._v(" "),n("ConventionItem",{attrs:{id:"pivot",heading:"Pivot Table",options:["Единственное число","Имена моделей в алфавитном порядке","snake_case"],good:["post_user"],bad:["user_post","posts_users"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"column",heading:"Column",options:["snake_case","Без префикса таблицы"],good:["id","full_description","created_at"],bad:["ID","fulldescr","createdAt"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"pk",heading:"Primary Key",options:["Без префиксов и постфиксов"],good:["id"],bad:["post_id","id_post"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"fk",heading:"Foreign Key",options:["Имя таблицы в единственном числе","Постфикс «_id»"],good:["user_id","post_id"],bad:["user","users_id","id_post"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"has-one",heading:"Relationship hasOne",options:["camelCase","Единственное число"],good:["user()"],bad:["users()"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"has-many",heading:"Relationship hasMany",options:["camelCase","Множественное число"],good:["users()"],bad:["user()"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"migration",heading:"Migration",options:["snake_case","Название описывает действие"],good:["create_posts_table","add_user_id_to_posts_table"],bad:["posts","fix_table","update_column"]}},[t._v("\n    В примерах указаны имена без даты, которая добавляется автоматически.\n  ")]),t._v(" "),n("ConventionItem",{attrs:{id:"seeder",heading:"Seeder",options:["Единственное число","PascalCase","Постфикс «Seeder»","Database\\Seeders"],good:["PostSeeder"],bad:["Post","PostsSeeder"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"route-uri",heading:"Route URI",options:["Множественное число","kebab-case"],good:["/posts/1","/about-us"],bad:["/post/1","/aboutUs","/about_us"]}},[n("p",[t._v("\n      Обратись к "),n("ExternalLink",{attrs:{title:"REST Naming Guide",link:"https://restfulapi.net/resource-naming/"}}),t._v("\n      за более подробной информацией.\n    ")],1)]),t._v(" "),n("ConventionItem",{attrs:{id:"route-name",heading:"Route Name",options:["snake_case","dot-нотация"],good:["posts.index","posts.show","about_us"],bad:["posts","postsShow","about.us","about-us"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"controller",heading:"Controller",options:["Единственное число","PascalCase","Постфикс «Controller»","App\\Http\\Controllers"],good:["PostController","PostCommentController"],bad:["PostsController","Post","posts_controller"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"crud",heading:"Resource Controller / CRUD"}},[n("p",[t._v("\n      Стандартные CRUD методы:\n      "),n("span",{staticClass:"text-base"},[t._v("index, create, store, show, edit, update, destroy.")])]),t._v(" "),n("p",[t._v("\n      Обратись к "),n("LaravelLink",{attrs:{title:"документации",uri:"controllers#actions-handled-by-resource-controller"}}),t._v("\n      за более подробной информацией.\n    ")],1),t._v(" "),n("p",[t._v("\n      Также, если необходимо, то ты можешь добавлять свои методы,\n      но чтобы избежать конфликтов, их роуты должны быть определены\n      "),n("b",[t._v("до")]),t._v(" ресурсного контроллера.\n    ")])]),t._v(" "),n("ConventionItem",{attrs:{id:"view",heading:"View",options:["kebab-case","snake_case","Без точек в имени"],good:["index","post_comments","post-comments"],bad:["Index","postComments"]}},[n("p",[t._v("\n      Нет чёткого стандарта использовать "),n("b",[t._v("«kebab-case»")]),t._v("\n      или "),n("b",[t._v("«snake_case»")]),t._v(".\n      Главное используй один вариант во всем проекте.\n    ")]),t._v(" "),n("p",[t._v("\n      Точки используются для разделения директорий, поэтому в имени их быть не должно,\n      кроме расширения "),n("span",{staticClass:"bit path"},[t._v(".blade.php")])]),t._v(" "),n("p",[t._v("Данное соглашение касается как файлов, так и директорий.")])]),t._v(" "),n("ConventionItem",{attrs:{id:"conf-and-lang",heading:"Config & Language",options:["snake_case"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"contract",heading:"Contract / Interface",options:["PascalCase","Существительное или прилагательное","Без префикса и постфикса","App\\Contracts"],good:["Authenticatable","Dispatcher","ShouldQueue"],bad:["Authentication","DispatcherInterface","IShouldQueue"]}}),t._v(" "),n("ConventionItem",{attrs:{id:"trait",heading:"Trait",options:["PascalCase","Прилагательное","Без префикса и постфикса","App\\Traits"],good:["Notifiable","Dispatchable"],bad:["Notification","NotifiableTrait","Dispatcher"]}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExternalLink:n(212).default,ConventionItem:n(339).default,LaravelLink:n(330).default})}}]);