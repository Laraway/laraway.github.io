__NUXT_JSONP__("/method-is-not-supported", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{page:{slug:n,description:"Проверь роуты и убедись, что нет редиректа",heading:"Method is not supported",altHeadings:null,toc:[],body:{type:o,children:[{type:b,tag:k,props:{heading:p,id:q},children:[{type:a,value:c},{type:b,tag:d,props:{className:[l,m]},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:c}]},{type:a,value:h}]},{type:a,value:h},{type:a,value:h},{type:b,tag:k,props:{heading:"Второй вариант",id:"variant-2"},children:[{type:a,value:c},{type:b,tag:d,props:{className:[l,m]},children:[{type:a,value:"\n    The GET method is not supported for this route. Supported methods: POST.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Эта проблема специфичнее предыдущей. т.к. чаще всего происходит при отправке POST запроса, а в ошибке пишет про GET,\n    что путает начинающих.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Самая популярное - это редирект. Редирект всегда GET. Происходить он может по многим причинам, вот самые популярные:\n  "}]},{type:a,value:c},{type:b,tag:"ul",props:{className:["list-disc","list-inside"]},children:[{type:a,value:i},{type:b,tag:j,props:{},children:[{type:a,value:"в URL есть закрывающий слэш и по умолчанию переадресовывает на адрес без \"\u002F\""}]},{type:a,value:i},{type:b,tag:j,props:{},children:[{type:a,value:"переадресация c\u002Fна www"}]},{type:a,value:i},{type:b,tag:j,props:{},children:[{type:a,value:"переадресация на http(s)"}]},{type:a,value:i},{type:b,tag:j,props:{},children:[{type:a,value:"редирект в пользовательском коде"}]},{type:a,value:i},{type:b,tag:j,props:{},children:[{type:a,value:"иное правило в настройках web-сервера"}]},{type:a,value:c}]},{type:a,value:h}]}]},excerpt:{type:o,children:[{type:b,tag:k,props:{heading:p,id:q},children:[{type:a,value:c},{type:b,tag:d,props:{className:[l,m]},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:c}]},{type:a,value:h}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fmethod-is-not-supported",extension:".md",createdAt:"2022-08-15T13:41:49.948Z",updatedAt:"2022-08-31T17:03:12.331Z"},id:n}],fetch:{},mutations:[]}}("text","element","\n  ","p","span","bit","code","\n","\n    ","li","case-context-section","console","log","method-is-not-supported","root","Первый вариант","variant-1","\n    The POST method is not supported for this route. Supported methods: GET, HEAD.\n  ","\n    Данная ошибка говорит о том, что метод POST (или любой другой) не поддерживается текущим роутом.\n    Далее перечисляются допустимые методы.\n  ","\n    POST запрос пришёл на ","Route::get()",", а должен на ","Route::post()",",\n    поэтому проверь актуальный список маршрутов с помощью ","php artisan route:list")));