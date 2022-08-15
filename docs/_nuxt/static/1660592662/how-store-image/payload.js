__NUXT_JSONP__("/how-store-image", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:[{page:{slug:i,description:"Неприлично простая инструкция",heading:"Как сохранить изображение",altHeadings:"как сохранить картинку",toc:[],body:{type:"root",children:[{type:b,tag:"case-context-section",props:{heading:"Быстрый пример"},children:[{type:a,value:d},{type:b,tag:"ol",props:{className:["list-decimal","list-inside","mb-4"]},children:[{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:"\n      Создаём симлинк: "},{type:b,tag:g,props:{className:[h]},children:[{type:a,value:"php artisan storage:link"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:"\n      Сохраняем изображение в "},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:k}]},{type:a,value:"\n      "},{type:b,tag:l,props:{name:"cases\u002Fhow-store-image\u002Fsimple-store"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:"\n      В БД сохраняем "},{type:b,tag:g,props:{className:[h,"variable"]},children:[{type:a,value:"$path"}]},{type:a,value:" - это путь "},{type:b,tag:"b",props:{},children:[{type:a,value:"БЕЗ"}]},{type:a,value:" "},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:k}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:"\n      Отображаем в шаблоне:\n      "},{type:b,tag:l,props:{name:"cases\u002Fhow-store-image\u002Fsimple-display"},children:[]},{type:a,value:c}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:"p",props:{className:["italic"]},children:[{type:a,value:"\n    Нужен более развёрнутый пример? Смотри полную версию "},{type:b,tag:"nuxt-link",props:{to:"\u002Fstorage\u002F"},children:[{type:a,value:"«Работа с файлами в Laravel»"}]},{type:a,value:d}]},{type:a,value:"\n"}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fhow-store-image",extension:".md",createdAt:"2022-08-15T13:41:49.940Z",updatedAt:"2022-08-15T19:36:23.161Z"},id:i}],fetch:{"CodeChips:0":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$path\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$request\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Efile\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ecover\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Estore\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E, \u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Epublic\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003E$path = $request-&gt;file('cover')-&gt;store('', 'public');\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:m,copiedTimeout:n},"CodeChips:1":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EStorage\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Edisk\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Epublic\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Eurl\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003Ecover\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003EStorage::disk('public')-&gt;url($post-&gt;cover)\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:m,copiedTimeout:n}},mutations:[]}}("text","element","\n    ","\n  ","li","mb-1","span","bit","how-store-image","path","storage\u002Fapp\u002Fpublic","code-chips",false,null)));