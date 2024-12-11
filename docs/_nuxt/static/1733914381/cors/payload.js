__NUXT_JSONP__("/cors", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{page:{slug:t,description:"Убедись, что нет 500 ошибки или dd(), настрой config\u002Fcors.php или proxy-сервер.",heading:"Blocked by CORS policy",altHeadings:null,tags:"api",toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:e},{type:b,tag:h,props:{heading:w,id:x},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{className:[z,A]},children:[{type:a,value:B}]},{type:a,value:e}]},{type:a,value:e},{type:a,value:e},{type:b,tag:h,props:{heading:"Теория",id:"why"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:f},{type:b,tag:i,props:{title:"CORS (Cross-Origin Resource Sharing)",link:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fru\u002Fdocs\u002FWeb\u002FHTTP\u002FCORS"},children:[]},{type:a,value:"\n    простыми словами - механизм безопасности, который ограничивает кросс-доменные запросы согласно политике\n    "},{type:b,tag:i,props:{title:"«Same-origin policy»",link:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fru\u002Fdocs\u002FWeb\u002FSecurity\u002FSame-origin_policy"},children:[]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Статьи по ссылкам "},{type:b,tag:m,props:{},children:[{type:a,value:"обязательны к осмысленному прочтению"}]},{type:a,value:" всем web-разработчикам.\n  "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Localhost",id:"localhost"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{className:[n]},children:[{type:a,value:"«У меня везде localhost, почему не работает?»"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Адреса считаются разными, если у них отличается хотя бы что-то одно:\n  "}]},{type:a,value:c},{type:b,tag:o,props:{className:[p,q]},children:[{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"домен"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"порт"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"протокол"}]},{type:a,value:c}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Postman",id:"postman"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{className:[n]},children:[{type:a,value:"«А почему у меня в postman работает?»"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    В postman отключены CORS, он не следует заголовкам и не ограничивает свои запросы,\n    т.к. это инструмент разработки, а не браузер. Тоже самое касается любого клиента, который не следует SOP.\n  "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Решение",id:"solution"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Необходимо настроить CORS со стороны backend-приложения.\n    "},{type:b,tag:m,props:{},children:[{type:a,value:"Не надо пытаться отключить или \"обойти\" проблему, даже для локальной разработки"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Начиная с 7 версии, Laravel "},{type:b,tag:"laravel-link",props:{title:"поддерживает CORS",uri:"routing#cors"},children:[]},{type:a,value:" из коробки.\n    Настройки в "},{type:b,tag:g,props:{className:[k,"path"]},children:[{type:a,value:"config\u002Fcors.php"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    По умолчанию разрешены любые запросы с любых источников на "},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:"\u002Fapi\u002F*"}]},{type:a,value:", например,\n    "},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:"GET http:\u002F\u002Flocalhost:8000\u002Fapi\u002Fusers"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Проблемы при локальной разработке возникают чаще всего из-за того, что запросы приходят не на \u002Fapi,\n    поэтому необходимо или отправлять запросы на \u002Fapi, или добавить необходимые пути в конфиг. \n    В "},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:"paths"}]},{type:a,value:" указываются относительные пути без домена.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Для реального приложения рекомендуется настроить более точно, с каких конкретных ресурсов разрешены запросы.\n  "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Middleware",id:"middleware"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Так же проблема может быть из-за не подключенного middleware в "},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:"App\\Http\\Kernel"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Проверь свойство "},{type:b,tag:g,props:{className:[k,"variable"]},children:[{type:a,value:"$middleware"}]},{type:a,value:", \n    в нем должен быть указан один из следующих классов:\n  "}]},{type:a,value:c},{type:b,tag:o,props:{className:[p,q]},children:[{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:C},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:D}]},{type:a,value:" для 9.2+\n    "}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:C},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:"\\Fruitcake\\Cors\\HandleCors"}]},{type:a,value:" для 8.x и ниже, при использовании пакета\n      "},{type:b,tag:i,props:{title:r,link:s},children:[]},{type:a,value:f}]},{type:a,value:c}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Старые версии",id:"old-version"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Для более ранних версий (8.x и ниже) необходим пакет\n    "},{type:b,tag:i,props:{title:r,link:s},children:[]},{type:a,value:"\n    (в 7.x и 8.x он установлен по умолчанию)\n    или собственная реализация.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Если фреймворк обновлялся до версии 9.2 или выше, то пакет\n    "},{type:b,tag:i,props:{title:r,link:s},children:[]},{type:a,value:"\n    необходимо удалить, а middleware заменить на "},{type:b,tag:g,props:{className:[k]},children:[{type:a,value:D}]},{type:a,value:",\n    подробнее смотри в "},{type:b,tag:i,props:{title:"PR",link:"https:\u002F\u002Fgithub.com\u002Flaravel\u002Flaravel\u002Fpull\u002F5825\u002Ffiles"},children:[]},{type:a,value:l}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Потеря заголовков",id:"proxy-loss"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Прокси-сервер может влиять на возвращаемые заголовки и не передавать нужные заголовки для CORS.\n    Убедись, что любое промежуточное ПО не блокирует передачу заголовков клиенту,\n    для этого обратись к соответствующей документации ПО или системному администратору.\n  "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"Решение с proxy",id:"proxy"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Альтернативный вариант - это отправлять запросы на тот же адрес,\n    с которого работает frontend ("},{type:b,tag:g,props:{className:[n]},children:[{type:a,value:"внезапно"}]},{type:a,value:"), как это и происходит в монолитных приложениях.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Если frontend и backend расположены на разных доменах, поддоменах, ip-адресах или портах, \n    то можно сделать проксирование запросов, т.е. отправлять с клиента запрос на текущий адрес,\n    а далее он будет перенаправлен сервером на реальный адрес backend-а. Например:\n  "}]},{type:a,value:c},{type:b,tag:o,props:{className:[p,q]},children:[{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"\n      для Nuxt\n      "},{type:b,tag:i,props:{title:"proxy-module",link:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fproxy-module"},children:[]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"\n      для React\n      "},{type:b,tag:i,props:{title:"http-proxy-middleware",link:"https:\u002F\u002Fgithub.com\u002Fchimurai\u002Fhttp-proxy-middleware"},children:[]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"\n      для Nginx\n      "},{type:b,tag:i,props:{title:"proxy_pass",link:"https:\u002F\u002Fnginx.org\u002Fru\u002Fdocs\u002Fhttp\u002Fngx_http_proxy_module.html#proxy_pass"},children:[]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"\n      для Apache\n      "},{type:b,tag:i,props:{title:"mod_proxy",link:"https:\u002F\u002Fhttpd.apache.org\u002Fdocs\u002F2.4\u002Fmod\u002Fmod_proxy.html"},children:[]},{type:a,value:f}]},{type:a,value:c}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:"CORS и Server Errors",id:"errors"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Обрати внимание"}]},{type:a,value:", что если на сервере произойдёт критическая ошибка (500),\n    то необходимые заголовки не будут отправлены и браузер запретит запрос,\n    при этом узнать об ошибке на сервере можно будет только в логах или в системе мониторинга.\n  "}]},{type:a,value:e}]}]},excerpt:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:e},{type:b,tag:h,props:{heading:w,id:x},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{className:[z,A]},children:[{type:a,value:B}]},{type:a,value:e}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fcors",extension:".md",createdAt:E,updatedAt:E},id:t}],fetch:{},mutations:[]}}("text","element","\n  ","p","\n","\n    ","span","case-context-section","external-link","li","bit",".\n  ","b","italic","ul","list-disc","list-inside","fruitcake\u002Flaravel-cors","https:\u002F\u002Fgithub.com\u002Ffruitcake\u002Flaravel-cors","cors","root","\n  Крайне распространённая проблема, которой забиты и тг-чаты, и stack overflow, и qna хабр...\n  Активно набирает популярность с ростом популярности SPA и раздельных доменов для frontend и backend приложений.\n","Проблема","problem","\n    AJAX-запрос на \"api\" не работает в браузере, но работает в postman. Ошибка в консоли браузера:\n  ","console","log","\n    Access to XMLHttpRequest at 'http:\u002F\u002Flocalhost:8000' from origin 'http:\u002F\u002Flocalhost:3000'\n    has been blocked by CORS policy:\n    No 'Access-Control-Allow-Origin' header is present on the requested resource.\n  ","\n      ","\\Illuminate\\Http\\Middleware\\HandleCors","2024-12-11T10:52:12.052Z")));