__NUXT_JSONP__("/pretty-url-404", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{page:{slug:q,description:"Установи AllowOverride All или смотри по ссылке другие варианты",heading:"Страницы возвращают 404, кроме главной",altHeadings:"не работает ЧПУ, не работают роуты",toc:[],body:{type:"root",children:[{type:b,tag:h,props:{heading:"Причина",id:"why"},children:[{type:a,value:e},{type:b,tag:d,props:{},children:[{type:a,value:"\n    В Laravel используется единая "},{type:b,tag:r,props:{title:"точка входа",uri:"structure#the-public-directory"},children:[]},{type:a,value:"\n    для запросов, поэтому web-сервер должен правильно передавать входные параметры в "},{type:b,tag:f,props:{className:[g,n]},children:[{type:a,value:"index.php"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Следовательно, если работает только главная страница, а остальные нет, то web-сервер неверно передаёт запрос.\n  "}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:h,props:{heading:"Apache"},children:[{type:a,value:e},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Правила для ЧПУ описываются в\n    "},{type:b,tag:o,props:{title:j,link:"https:\u002F\u002Fgithub.com\u002Flaravel\u002Flaravel\u002Fblob\u002F6e1103180b439bf6970b4a50e9e42cc5de9f9bf3\u002Fpublic\u002F.htaccess#L17"},children:[]},{type:a,value:",\n    причины по которым они могут не работать:\n  "}]},{type:a,value:e},{type:b,tag:h,props:{heading:s,id:"apache-rewrite"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n      Не установлен или отключён\n      "},{type:b,tag:o,props:{title:s,link:"https:\u002F\u002Fhttpd.apache.org\u002Fdocs\u002Fcurrent\u002Fmod\u002Fmod_rewrite.html"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n      Посмотреть загруженные модули можно командой:\n    "}]},{type:a,value:c},{type:b,tag:k,props:{name:"cases\u002Fpretty-url-404\u002Fapache\u002Fmod-rewrite-check"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n      Активировать модуль:\n    "}]},{type:a,value:c},{type:b,tag:k,props:{name:"cases\u002Fpretty-url-404\u002Fapache\u002Fmod-rewrite-enable"},children:[]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:t,id:"allow-override"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n      Директива\n      "},{type:b,tag:o,props:{title:t,link:"https:\u002F\u002Fhttpd.apache.org\u002Fdocs\u002Fcurrent\u002Fmod\u002Fcore.html#allowoverride"},children:[]},{type:a,value:"\n      имеет значение "},{type:b,tag:f,props:{className:[g]},children:[{type:a,value:"None"}]},{type:a,value:" для директории проекта,\n      что отключает чтение "},{type:b,tag:f,props:{className:[g,n]},children:[{type:a,value:j}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n      Значение должно быть "},{type:b,tag:f,props:{className:[g]},children:[{type:a,value:"All"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{name:"cases\u002Fpretty-url-404\u002Fapache\u002Fallow-override"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p},{type:b,tag:u,props:{},children:[{type:a,value:"Обрати внимание"}]},{type:a,value:" на путь, нужен тот, где находится твой проект.\n      Тоже самое можно указать в конфигурации самого хоста, а не основного конфига.\n    "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p},{type:b,tag:u,props:{},children:[{type:a,value:"Не забудь перезапустить apache"}]},{type:a,value:" после изменений в конфигурации.\n      Быстро проверить, что "},{type:b,tag:f,props:{className:[g,n]},children:[{type:a,value:j}]},{type:a,value:" используется можно добавив в него любую синтаксическую ошибку,\n      если получим 500 ошибку, то файл используется, иначе игнорируется.\n    "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{heading:j,id:"htaccess"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n      Правки в "},{type:b,tag:f,props:{className:[g,n]},children:[{type:a,value:j}]},{type:a,value:", которые изменили поведение по умолчанию.\n      Сравни свой файл с\n      "},{type:b,tag:o,props:{title:"оригинальным",link:"https:\u002F\u002Fgithub.com\u002Flaravel\u002Flaravel\u002Fblob\u002F6e1103180b439bf6970b4a50e9e42cc5de9f9bf3\u002Fpublic\u002F.htaccess"},children:[]},{type:a,value:".\n    "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p},{type:b,tag:f,props:{className:[g]},children:[{type:a,value:"RewriteEngine"}]},{type:a,value:" должен иметь значение "},{type:b,tag:f,props:{className:[g]},children:[{type:a,value:"On"}]},{type:a,value:", а запросы направляться в index.php:\n    "}]},{type:a,value:c},{type:b,tag:k,props:{name:"cases\u002Fpretty-url-404\u002Fapache\u002Fhtaccess"},children:[]},{type:a,value:e}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:h,props:{heading:"Nginx",id:"nginx"},children:[{type:a,value:e},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Для Nginx в документации есть\n    "},{type:b,tag:r,props:{title:"раздел",uri:"deployment#nginx"},children:[]},{type:a,value:"\n    с примером конфигурации. Обрати внимание на "},{type:b,tag:f,props:{className:[g]},children:[{type:a,value:"try_files"}]},{type:a,value:" в секции "},{type:b,tag:f,props:{className:[g]},children:[{type:a,value:"location \u002F"}]},{type:a,value:":\n  "}]},{type:a,value:e},{type:b,tag:k,props:{name:"cases\u002Fpretty-url-404\u002Fnginx\u002Ftry-files"},children:[]},{type:a,value:e},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Какие-либо изменения в данной строке могут повлиять на правильную работу, поэтому попробуй использовать в точности как в документации.\n  "}]},{type:a,value:i}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fpretty-url-404",extension:".md",createdAt:v,updatedAt:v},id:q}],fetch:{"CodeChips:0":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"bash\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003Eapachectl \u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003E-M\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003Eapachectl -M\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:l,copiedTimeout:m},"CodeChips:1":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"bash\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003Esudo \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ea2enmod\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Erewrite\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003Esudo \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eservice\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eapache2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Erestart\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003Esudo a2enmod rewrite\nsudo service apache2 restart\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:l,copiedTimeout:m},"CodeChips:2":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"apache\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #637777;\"\u003E# \u002Fetc\u002Fapache2\u002Fapache2.conf\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003EDirectory \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003E\u002Fvar\u002Fwww\u002F\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E&gt;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E  \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003EAllowOverride\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E All\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E4\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003EDirectory\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E&gt;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003E# \u002Fetc\u002Fapache2\u002Fapache2.conf\n&lt;Directory \u002Fvar\u002Fwww\u002F&gt;\n  AllowOverride All\n&lt;\u002FDirectory&gt;\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:l,copiedTimeout:m},"CodeChips:3":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"apache\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003ERewriteCond\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #5CA7E4;\"\u003E%{REQUEST_FILENAME}\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003E!-d\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003ERewriteCond\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #5CA7E4;\"\u003E%{REQUEST_FILENAME}\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003E!-f\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003ERewriteRule\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #5CA7E4;\"\u003E^\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eindex.php\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E [L]\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003ERewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^ index.php [L]\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:l,copiedTimeout:m},"CodeChips:4":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"nginx\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003Elocation\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u002F {\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E try_files \u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E$\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C5E478;\"\u003Euri\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E $\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C5E478;\"\u003Euri\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E\u002F \u002Findex.php?$\u003C\u002Fspan\u003E\u003Cspan style=\"color: #C5E478;\"\u003Equery_string\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003Elocation \u002F {\n  try_files $uri $uri\u002F \u002Findex.php?$query_string;\n}\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:l,copiedTimeout:m}},mutations:[]}}("text","element","\n    ","p","\n  ","span","bit","case-context-section","\n",".htaccess","code-chips",false,null,"path","external-link","\n      ","pretty-url-404","laravel-link","mod_rewrite","AllowOverride","b","2022-08-14T20:25:14.426Z")));