(window.webpackJsonp=window.webpackJsonp||[]).push([[20,2,11,12,13,14],{317:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("d31fbb88",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n(317)},319:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.anchor[data-v-6837b121]{\n  position:relative;\n  top:-20px;\n  visibility:hidden\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},320:function(t,e,n){"use strict";n.r(e);var r={name:"AnchorComponent",props:{id:{type:String,required:!0}}},l=(n(318),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"anchor",attrs:{id:t.id}})}),[],!1,null,"6837b121",null);e.default=component.exports},322:function(t,e,n){"use strict";var r=n(12),l=n(5),o=n(3),d=n(116),c=n(18),v=n(14),k=n(215),h=n(47),m=n(89),L=n(214),_=n(4),f=n(90).f,x=n(41).f,E=n(17).f,G=n(323),y=n(217).trim,I="Number",w=l.Number,C=w.prototype,S=l.TypeError,j=o("".slice),P=o("".charCodeAt),N=function(t){var e=L(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,r,l,o,d,c,code,v=L(t,"number");if(m(v))throw S("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=y(v),43===(e=P(v,0))||45===e){if(88===(n=P(v,2))||120===n)return NaN}else if(48===e){switch(P(v,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+v}for(d=(o=j(v,2)).length,c=0;c<d;c++)if((code=P(o,c))<48||code>l)return NaN;return parseInt(o,r)}return+v};if(d(I,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var T,A=function(t){var e=arguments.length<1?0:w(N(t)),n=this;return h(C,n)&&_((function(){G(n)}))?k(Object(e),n,A):e},M=r?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;M.length>H;H++)v(w,T=M[H])&&!v(A,T)&&E(A,T,x(w,T));A.prototype=C,C.constructor=A,c(l,I,A,{constructor:!0})}},323:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},324:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("761eb3eb",content,!0,{sourceMap:!1})},325:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("65eb1b94",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n.r(e);n(40),n(88);var r={name:"LaravelLink",props:{title:{type:String,required:!1,default:""},uri:{type:String,required:!0},type:{type:String,require:!1,default:"docs",validator:function(t){return["docs","api"].includes(t)}},version:{type:String,require:!1,default:"12.x"}},methods:{getLink:function(){return"api"===this.type?"https://api.laravel.com/docs/".concat(this.version,"/").concat(this.uri):"https://laravel.com/docs/".concat(this.version,"/").concat(this.uri)}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ExternalLink",{attrs:{title:t.title,link:t.getLink()}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExternalLink:n(213).default})},331:function(t,e,n){"use strict";n(324)},332:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.links-slot a[data-v-3bd08f6b]{\n  margin-right:0.75rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},333:function(t,e,n){"use strict";n(325)},334:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.expand-container>.expand-content[data-v-46284835]:not(.expanded){\n  overflow:hidden;\n  -webkit-mask-image:linear-gradient(180deg,#fff 30%,transparent);\n  mask-image:linear-gradient(180deg,#fff 30%,transparent)\n}\n.expand-container>.expand-content.expanded[data-v-46284835]{\n  max-height:none!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},337:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("b8f71502",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n.r(e);var r={props:{heading:{type:String,required:!0},id:{type:String,required:!1,default:""},icon:{type:[String,Array],required:!1,default:""}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"mb-4 text-xl text-brand-heading-light dark:text-brand-heading-dark"},[t.id?n("Anchor",{attrs:{id:t.id}}):t._e(),t._v(" "),t.icon?n("fa",{staticClass:"mr-1",attrs:{icon:t.icon}}):t._e(),t._v(" "),t.id?n("a",{attrs:{href:"#"+t.id}},[t._v("\n    "+t._s(t.heading)+"\n  ")]):n("span",[t._v("\n    "+t._s(t.heading)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Anchor:n(320).default})},344:function(t,e,n){"use strict";n.r(e);var r={props:{heading:{type:String,required:!0},description:{type:String,required:!1,default:""}}},l=(n(331),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group-item"},[n("div",{staticClass:"font-medium"},[n("fa",{staticClass:"w-3 opacity-60 mr-1",attrs:{icon:"angles-right"}}),t._v("\n    "+t._s(t.heading)+"\n  ")],1),t._v(" "),n("div",{staticClass:"pl-5"},[t.description?n("div",{staticClass:"text-sm"},[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"links-slot"},[t._t("default")],2)])])}),[],!1,null,"3bd08f6b",null);e.default=component.exports},345:function(t,e,n){"use strict";n.r(e);n(322);var r={props:{reverse:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:100}},data:function(){return{expanded:!1}},methods:{toggle:function(){this.expanded=!this.expanded}}},l=(n(333),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative expand-container"},[n("div",{staticClass:"expand-content",class:{expanded:t.expanded},style:"max-height: "+t.limit+"px;"},[t._t("default")],2),t._v(" "),t.reverse||!t.expanded?n("button",{staticClass:"block ml-auto mr-2 text-xs text-brand-secondary-light dark:text-brand-secondary-dark hover:text-brand-link-light dark:hover:text-brand-link-dark",on:{click:t.toggle}},[t.expanded?n("span",[t._v("свернуть")]):n("span",[t._v("подробнее...")])]):t._e()])}),[],!1,null,"46284835",null);e.default=component.exports},347:function(t,e,n){"use strict";n(337)},348:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.group-links>.group-item[data-v-cc5415d8]{\n  margin-bottom:1.25rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},391:function(t,e,n){"use strict";n.r(e);var r={name:"LinksPage",head:function(){return{title:"LaraWay » Полезная информация",meta:[{hid:"og:title",name:"og:title",content:"Полезная информация"},{hid:"og:description",name:"og:description",content:"Чаты, литература, репозитории, сервисы и прочие полезные ссылки"},{hid:"description",name:"description",content:"Чаты, литература, репозитории, сервисы и прочие полезные ссылки"}]}},mounted:function(){this.$store.dispatch("nav-sidebar/pushItems",{group:"links",items:[{heading:"Telegram чаты",id:"telegram"},{heading:"Чтиво",id:"books"},{heading:"Полезный материал",id:"ref"},{heading:"Плагины PhpStorm",id:"phpstorm"},{heading:"Репозитории",id:"repos"},{heading:"Сервисы",id:"services"}]})},beforeDestroy:function(){this.$store.dispatch("nav-sidebar/removeItems",{group:"links"})}},l=(n(347),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"page-heading"},[t._v("\n    Полезная информация\n  ")]),t._v(" "),n("div",{staticClass:"mb-12"},[n("LinksGroupHeading",{attrs:{id:"telegram",heading:"Telegram чаты",icon:["fab","telegram"]}}),t._v(" "),n("div",{staticClass:"group-links"},[n("LinksGroupItem",{attrs:{heading:"Laravel для начинающих",description:"Чат для тех, кто уверено владеет PHP, но только начал своё знакомство с Laravel."}},[n("ExternalLink",{attrs:{link:"https://t.me/laravel_web",title:"@laravel_web"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Pro",description:"Не задавай здесь вопросы, если ты не уверен в своих скиллах и нервах."}},[n("ExternalLink",{attrs:{link:"https://t.me/laravel_pro",title:"@laravel_pro"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Нерусскоязычные чаты по Laravel",description:""}},[n("ExternalLink",{attrs:{link:"https://t.me/laravel_ua",title:"@laravel_ua"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/laravel_uz",title:"@laravel_uz"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Экосистема Laravel",description:"Прочие специализированные чаты по экосистеме."}},[n("ExternalLink",{attrs:{link:"https://t.me/LaravelNovaCommunity",title:"@LaravelNovaCommunity"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/inertiajs",title:"@inertiajs"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/orchid_russian_community",title:"@orchid_russian_community"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/sleeping_owl",title:"@sleeping_owl"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/filament_ru",title:"@filament_ru"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel News"}},[n("ExternalLink",{attrs:{link:"https://t.me/laravelnews",title:"@laravelnews"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Telegram Bot",description:"Обсуждения разработки Telegram ботов на Laravel."}},[n("ExternalLink",{attrs:{link:"https://t.me/LaravelTelegram",title:"@LaravelTelegram"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"PHP",description:"PHP для начинающих и продолжающих."}},[n("ExternalLink",{attrs:{link:"https://t.me/phpGeeksJunior",title:"@phpGeeksJunior"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/phpGeeks",title:"@phpGeeks"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Базы данных"}},[n("ExternalLink",{attrs:{link:"https://t.me/mysql_db",title:"@mysql_db"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/dbGeeks",title:"@dbGeeks"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Docker"}},[n("ExternalLink",{attrs:{link:"https://t.me/docker_ru",title:"@docker_ru"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Software Design/Architecture/Zen",description:"OOP/FP, software design, architecture, GRASP, GoF, SOLID, DDD, separation of concerns"}},[n("ExternalLink",{attrs:{link:"https://t.me/oop_ru",title:"@oop_ru"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Frontend",description:"В laravel-чатах часто всплывают вопросы по frontend-у, но оптимальнее задать вопрос в профильном чате."}},[n("ExternalLink",{attrs:{link:"https://t.me/vuejs_ru",title:"@vuejs_ru"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/nuxtjs_ru",title:"@nuxtjs_ru"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/js_noobs_ru",title:"@js_noobs_ru"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/js_ru",title:"@js_ru"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/css_ru",title:"@css_ru"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Вакансии"}},[n("ExternalLink",{attrs:{link:"https://t.me/fordev",title:"@fordev"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://t.me/jobGeeks",title:"@jobGeeks"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("LinksGroupHeading",{attrs:{id:"books",heading:"Чтиво",icon:"book-open"}}),t._v(" "),n("div",{staticClass:"notice-box mt-4 mb-6 pt-3 pb-2 px-4 text-sm"},[n("ExpandContainer",[n("p",[t._v("\n          Если ты ищешь книги по Laravel, то этот текст для тебя.\n        ")]),t._v(" "),n("p",[t._v("\n          Книги по фреймворку это устаревший пересказ документации.\n          Когда читаешь инструкции к перфоратору, рубанку или молотку, ты не ожидаешь найти в них мануал как построить дом?\n          Сомневаюсь, это было бы безумием. В документации ты найдёшь описание того как работать с инструментом, а вот что с помощью инструмента создать и как - это совершено иные вопросы.\n        ")]),t._v(" "),n("p",[n("strong",[t._v("Необходимо учиться не фреймворкам, а разработке приложений")]),t._v(", а так же учиться думать.\n          Поэтому обрати внимание на общую литературу по архитектуре приложений без привязок к фреймворкам и даже языкам.\n        ")]),t._v(" "),n("p",[t._v("\n          Так же стоит отметить что, из-за стремительного развития технологий, книги по программированию быстро теряют актуальность.\n          Пиши код и проводи рефакторинг, посещай митапы и конференции, общайся с другими разработчиками и не останавливайся на достигнутом.\n          И главное, читая книги (как и этот текст) не воспринимай их как единственно верную истину, ибо всё относительно.\n        ")]),t._v(" "),n("p",[t._v("\n          Старайся не уходить со своих проектов (как делают многие фрилансеры),\n          а продолжай их поддерживать, ибо со временем ты столкнёшься со своими же ошибками,\n          которые и будут самым ценным опытом для тебя.\n        ")])])],1),t._v(" "),n("div",{staticClass:"group-links"},[n("LinksGroupItem",{attrs:{heading:"Официальная Документация",description:"Лучшая книга по Laravel."}},[n("LaravelLink",{attrs:{title:"laravel.com",uri:"installation"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel API",description:"Для более глубокого погружения."}},[n("LaravelLink",{attrs:{title:"laravel.com/api",type:"api",uri:"index.html"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laracasts",description:"Видео уроки по Laravel и не только."}},[n("ExternalLink",{attrs:{link:"https://laracasts.com",title:"laracasts.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Русские версии документации",description:"Не рекомендуется к использованию, т.к. переводы могут быть неактуальными и/или иметь искаженный смысл."}},[n("ExternalLink",{attrs:{link:"https://laravel.su/docs/10.x/installation",title:"laravel.su"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://github.com/russsiq/laravel-docs-ru",title:"github russsiq"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Архитектура сложных веб-приложений. Адель Файзрахманов",description:"Популярные принципы разработки web-приложений с примерами на Laravel. Не ориентирована на новичков, но тем не менее в первых главах рассматриваются популярные ошибки, которые должен знать каждый."}},[n("ExternalLink",{attrs:{link:"https://github.com/adelf/acwa_book_ru",title:"Читать на github"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Шаблоны (паттерны) проектирования"}},[n("ExternalLink",{attrs:{link:"https://refactoring.guru/ru",title:"refactoring.guru"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://designpatternsphp.readthedocs.io/ru/latest/",title:"designpatternsphp"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://habr.com/ru/company/vk/blog/325492/",title:"habr"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Программирование без дураков. Катрин Пассиг, Йоханнес Яндер",description:"Книга о проблемах самообразования, самооценке, работе над ошибками и о профессиональном росте."}},[n("ExternalLink",{attrs:{link:"https://www.litres.ru/book/yohannes-yander/programmirovanie-bez-durakov-23889464/",title:"litres.ru"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Простое ООП: Чистый и гибкий код. Маурисио Аниче",description:"Практические принципы проектирования ОО-кода."}},[n("ExternalLink",{attrs:{link:"https://www.piter.com/collection/all/product/prostoe-obektno-orientirovannoe-proektirovanie-chistyy-i-gibkiy-kod",title:"piter.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Объекты. Стильное ООП. Маттиас Нобак",description:"Профессиональные техники написания ОО-кода."}},[n("ExternalLink",{attrs:{link:"https://www.piter.com/product/obekty-stilnoe-oop",title:"piter.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Приёмы объектно-ориентированного проектирования",description:"Знаменитая книга «Банды четырех», но будет сложна для неподготовленного читателя, поэтому рекомендуется к прочтению уже с багажом опыта."}},[n("ExternalLink",{attrs:{link:"https://www.piter.com/collection/all/product/priemy-obektno-orientirovannogo-proektirovaniya-2",title:"piter.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Чистая архитектура. Роберт Мартин",description:"Один из бестселлеров авторитетного «дядюшки Боба»."}},[n("ExternalLink",{attrs:{link:"https://www.piter.com/collection/all/product/chistaya-arhitektura-iskusstvo-razrabotki-programmnogo-obespecheniya",title:"piter.com"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://habr.com/ru/company/piter/blog/353170/",title:"habr.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"DDD. Структуризация сложных программных систем. Эрик Эванс",description:"Популярная книга про предметно-ориентированное проектирование, рекомендуемая к прочтению всем middle+ разработчикам."}},[n("ExternalLink",{attrs:{link:"https://habr.com/ru/articles/580972/",title:"habr.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Фундаментальный подход к программной архитектуре. Марк Ричардс, Нил Форд",description:"Паттерны и свойства современной архитектуры ПО."}},[n("ExternalLink",{attrs:{link:"https://www.piter.com/collection/all/product/fundamentalnyy-podhod-k-programmnoy-arhitekture-patterny-svoystva-proverennye-metody-2",title:"piter.com"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("LinksGroupHeading",{attrs:{id:"ref",heading:"Полезный материал",icon:"graduation-cap"}}),t._v(" "),n("div",{staticClass:"group-links"},[n("LinksGroupItem",{attrs:{heading:"Roadmap",description:"Чеклист поможет определить пробелы в знаниях и сориентироваться что и когда изучать."}},[n("ExternalLink",{attrs:{link:"https://roadmap.sh/",title:"roadmap.sh"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://roadmap.sh/backend",title:"backend"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://roadmap.sh/frontend",title:"frontend"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://laraveldaily.com/roadmap-learning-path",title:"laravel"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Backend interview checklist",description:"Памятка разработчику для подготовки к собеседованиям."}},[n("ExternalLink",{attrs:{link:"https://backendinterview.ru",title:"backendinterview.ru"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"PSR",description:"Стандартные рекомендации PHP - то что должен знать каждый разработчик"}},[n("ExternalLink",{attrs:{link:"https://www.php-fig.org/psr/",title:"php-fig.org"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Тесты в Laravel",description:"Что и как тестировать."}},[n("ExternalLink",{attrs:{link:"https://christoph-rumpel.com/2023/3/everything-you-can-test-in-your-laravel-application",title:"christoph-rumpel.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Неортодоксальный Eloquent",description:"Советы и рекомендации по работе с Eloquent."}},[n("ExternalLink",{attrs:{link:"https://habr.com/ru/articles/762598/",title:"Часть 1"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://habr.com/ru/articles/762690/",title:"Часть 2"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Глубокое погружение в очереди",description:"Расширенная информация про очереди в Laravel."}},[n("ExternalLink",{attrs:{link:"https://www.honeybadger.io/blog/laravel-queues-deep-dive/",title:"honeybadger.io"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Кеширование в Laravel: основы плюс tips&tricks",description:"Советы и рекомендации по работе с кешированием."}},[n("ExternalLink",{attrs:{link:"https://habr.com/en/articles/463495/",title:"habr"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"DefStudio Telegraph",description:"Создание Telegram ботов с Telegraph"}},[n("ExternalLink",{attrs:{link:"https://www.youtube.com/watch?v=Vz6vi76DAx0",title:"youtube.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Enum в базе данных",description:"Почему тип поля enum на уровне базы - зло?"}},[n("ExternalLink",{attrs:{link:"https://habr.com/en/articles/757212/",title:"habr.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Pro Git",description:"Отличная книга по системе контроля версий Git."}},[n("ExternalLink",{attrs:{link:"https://git-scm.com/book/ru/v2",title:"git-scm.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"***, Git!",description:"Быстрая справка по популярным проблемам с Git."}},[n("ExternalLink",{attrs:{link:"https://dangitgit.com/ru",title:"dangitgit.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Проблема 0.30000000000000004",description:"Округление чисел с плавающей запятой."}},[n("ExternalLink",{attrs:{link:"https://floating-point-gui.de",title:"floating-point-gui.de"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://0.30000000000000004.com",title:"0.30000000000000004.com"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("LinksGroupHeading",{attrs:{id:"phpstorm",heading:"Плагины PhpStorm",icon:"plug"}}),t._v(" "),n("div",{staticClass:"group-links"},[n("LinksGroupItem",{attrs:{heading:"Laravel Query",description:"Бесплатный плагин для автокомплита полей БД."}},[n("ExternalLink",{attrs:{link:"https://plugins.jetbrains.com/plugin/16309-laravel-query",title:"jetbrains.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Idea",description:"Платный плагин улучшающий поддержку Laravel, полностью заменяет IDE Helper Generator."}},[n("ExternalLink",{attrs:{link:"https://plugins.jetbrains.com/plugin/13441-laravel-idea",title:"jetbrains.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:".env files support",description:"Поддержка .env файлов."}},[n("ExternalLink",{attrs:{link:"https://plugins.jetbrains.com/plugin/9525--env-files-support",title:"jetbrains.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"IDE Helper Generator",description:"Пакет генерации вспомогательных файлов для улучшенного автокомплита."}},[n("ExternalLink",{attrs:{link:"https://github.com/barryvdh/laravel-ide-helper",title:"github"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("LinksGroupHeading",{attrs:{id:"repos",heading:"Репозитории",icon:["fab","github"]}}),t._v(" "),n("div",{staticClass:"group-links"},[n("LinksGroupItem",{attrs:{heading:"Laravel Scaffold"}},[n("ExternalLink",{attrs:{link:"https://github.com/laravel/laravel",title:"laravel/laravel"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Framework"}},[n("ExternalLink",{attrs:{link:"https://github.com/laravel/framework",title:"laravel/framework"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Migration Actions",description:"Система миграции для какой-либо логики."}},[n("ExternalLink",{attrs:{link:"https://github.com/TheDragonCode/laravel-migration-actions",title:"TheDragonCode/laravel-migration-actions"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Lang Publisher",description:"Обновление языковых пакетов."}},[n("ExternalLink",{attrs:{link:"https://github.com/Laravel-Lang/publisher",title:"Laravel-Lang/publisher"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Migrate DB",description:"Перенос базы данных."}},[n("ExternalLink",{attrs:{link:"https://github.com/TheDragonCode/migrate-db",title:"TheDragonCode/migrate-db"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Localization"}},[n("ExternalLink",{attrs:{link:"https://github.com/mcamara/laravel-localization",title:"mcamara/laravel-localization"}}),t._v(" "),n("ExternalLink",{attrs:{link:"https://github.com/Laravel-Lang/lang",title:"Laravel-Lang/lang"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Eloquent Eager Limit",description:"Позволяет использовать limit() c with()"}},[n("ExternalLink",{attrs:{link:"https://github.com/staudenmeir/eloquent-eager-limit",title:"staudenmeir/eloquent-eager-limit"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Cascading Soft Deletes",description:'Поддержка каскадного "мягкого" удаления'}},[n("ExternalLink",{attrs:{link:"https://github.com/michaeldyrynda/laravel-cascade-soft-deletes",title:"dyrynda/laravel-cascade-soft-deletes"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Modules",description:"Интеграция модульной системы"}},[n("ExternalLink",{attrs:{link:"https://github.com/nWidart/laravel-modules",title:"nWidart/laravel-modules"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Zero",description:"Микро-фреймворк для консольных приложений"}},[n("ExternalLink",{attrs:{link:"https://github.com/laravel-zero/laravel-zero",title:"laravel-zero/laravel-zero"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Sentry SDK",description:"Официальный Sentry SDK для Laravel"}},[n("ExternalLink",{attrs:{link:"https://github.com/getsentry/sentry-laravel",title:"getsentry/sentry-laravel"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Laravel Vite",description:"Интеграция Vite в Laravel"}},[n("ExternalLink",{attrs:{link:"https://github.com/innocenzi/laravel-vite",title:"innocenzi/laravel-vite"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"HTML Purifier",description:"Фильтрация HTML"}},[n("ExternalLink",{attrs:{link:"https://github.com/mewebstudio/Purifier",title:"mewebstudio/Purifier"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Сборник пакетов",description:"Packagist для Laravel. Внимательно изучай пакеты, т.к. некоторые уже могут быть включены в Laravel, а некоторые оказаться заброшенными."}},[n("ExternalLink",{attrs:{link:"https://packalyst.com",title:"packalyst.com"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("LinksGroupHeading",{attrs:{id:"services",heading:"Сервисы",icon:"fa-gears"}}),t._v(" "),n("div",{staticClass:"group-links"},[n("LinksGroupItem",{attrs:{heading:"Laravel Playground",description:"Песочница для проверки кода на Laravel."}},[n("ExternalLink",{attrs:{link:"https://laravelplayground.com/#/",title:"laravelplayground.com"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Pastebin",description:"Сервис для загрузки фрагментов кода."}},[n("ExternalLink",{attrs:{link:"https://paste.laravel.io",title:"paste.laravel.io"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"Convert SQL to Eloquent",description:"Конвертер SQL запросов в Laravel QueryBuilder. Не рекомендую слепо копипастить и относится к инструменту серьезно."}},[n("ExternalLink",{attrs:{link:"https://jjlabajo.github.io/SQLtoEloquent/",title:"jjlabajo.github.io"}})],1),t._v(" "),n("LinksGroupItem",{attrs:{heading:"NGINXConfig",description:"Генерация конфига для nginx."}},[n("ExternalLink",{attrs:{link:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=ru",title:"digitalocean.com"}})],1)],1)],1)])}),[],!1,null,"cc5415d8",null);e.default=component.exports;installComponents(component,{LinksGroupHeading:n(343).default,ExternalLink:n(213).default,LinksGroupItem:n(344).default,ExpandContainer:n(345).default,LaravelLink:n(329).default})}}]);