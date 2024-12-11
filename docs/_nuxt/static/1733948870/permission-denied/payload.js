__NUXT_JSONP__("/permission-denied", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{page:{slug:l,description:"Выстави права для записи",heading:"Failed to open stream: Permission denied",altHeadings:"Нет прав на запись, Отказано в доступе",tags:"errors",toc:[],body:{type:m,children:[{type:b,tag:c,props:{},children:[{type:a,value:n},{type:b,tag:f,props:{className:[o]},children:[{type:a,value:p}]},{type:a,value:q}]},{type:a,value:e},{type:b,tag:i,props:{heading:r,id:s},children:[{type:a,value:d},{type:b,tag:c,props:{className:[g,h]},children:[{type:a,value:t}]},{type:a,value:d},{type:b,tag:c,props:{className:[g,h]},children:[{type:a,value:u}]},{type:a,value:d},{type:b,tag:c,props:{className:[g,h]},children:[{type:a,value:v}]},{type:a,value:e}]},{type:a,value:e},{type:a,value:e},{type:b,tag:i,props:{heading:"Теория",id:"why"},children:[{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"\n    Laravel использует директории "},{type:b,tag:f,props:{className:[j,w]},children:[{type:a,value:"bootstrap\u002Fcache\u002F"}]},{type:a,value:" и "},{type:b,tag:f,props:{className:[j,w]},children:[{type:a,value:"storage\u002F"}]},{type:a,value:"\n    для хранения системных файлов, кэша и логов, поэтому у пользователя под которым запускается php должен быть доступ на запись в эти директории.\n  "}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"\n    Для начала необходимо ознакомится с основами прав доступа в UNIX системах, с командами\n    "},{type:b,tag:f,props:{className:[j,x]},children:[{type:a,value:"chmod"}]},{type:a,value:" и \n    "},{type:b,tag:f,props:{className:[j,x]},children:[{type:a,value:"chown"}]},{type:a,value:", например,\n    "},{type:b,tag:k,props:{title:"статья #1",link:"https:\u002F\u002Fhabr.com\u002Fru\u002Fpost\u002F469667\u002F"},children:[]},{type:a,value:",\n    "},{type:b,tag:k,props:{title:"статья #2",link:"https:\u002F\u002Fyounglinux.info\u002Fbash\u002Frwx"},children:[]},{type:a,value:" или\n    "},{type:b,tag:k,props:{title:"погуглив",link:"https:\u002F\u002Fbit.ly\u002F3v8SW9B"},children:[]},{type:a,value:"\n    самостоятельно. Для более сложных задач можно углубиться до\n    "},{type:b,tag:k,props:{title:"ACL (Access Control List)",link:"https:\u002F\u002Fwiki.archlinux.org\u002Ftitle\u002FAccess_Control_Lists_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)"},children:[]},{type:a,value:".\n  "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{heading:"Быстрое решение",id:"solution"},children:[{type:a,value:d},{type:b,tag:"code-chips",props:{name:"cases\u002Fpermission-denied\u002Fchmod"},children:[]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"\n    где www-data - группа под которой работает web-сервер (nginx, apache).\n  "}]},{type:a,value:e}]}]},excerpt:{type:m,children:[{type:b,tag:c,props:{},children:[{type:a,value:n},{type:b,tag:f,props:{className:[o]},children:[{type:a,value:p}]},{type:a,value:q}]},{type:a,value:e},{type:b,tag:i,props:{heading:r,id:s},children:[{type:a,value:d},{type:b,tag:c,props:{className:[g,h]},children:[{type:a,value:t}]},{type:a,value:d},{type:b,tag:c,props:{className:[g,h]},children:[{type:a,value:u}]},{type:a,value:d},{type:b,tag:c,props:{className:[g,h]},children:[{type:a,value:v}]},{type:a,value:e}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fpermission-denied",extension:".md",createdAt:y,updatedAt:y},id:l}],fetch:{"CodeChips:0":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"bash\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003Esudo \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Echgrp\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003E-R\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ewww-data\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Estorage\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ebootstrap\u002Fcache\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003Esudo \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Echmod\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003E-R\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eug+rwx\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Estorage\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ebootstrap\u002Fcache\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003Esudo chgrp -R www-data storage bootstrap\u002Fcache\nsudo chmod -R ug+rwx storage bootstrap\u002Fcache\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:false,copiedTimeout:null}},mutations:[]}}("text","element","p","\n  ","\n","span","console","log","case-context-section","bit","external-link","permission-denied","root","\n  Дословный перевод ошибки: ","italic","\"Не удалось открыть поток: Отказано в доступе\"",".\n","Примеры ошибок","examples","\n    The stream of file \"storage\u002Flogs\u002Flaravel.log\" could not be opened in append mode:\n    Failed to open stream: Permission denied. The exception occurred while attempting to log...\n  ","\n    Unable to create lockable file. Please ensure you have permission to create files in this location.\n  ","\n    file_put_contents(storage\u002Fframework\u002Fviews\u002Fxxx.php): Failed to open stream: Permission denied\n  ","path","code","2024-12-11T10:52:12.054Z")));