__NUXT_JSONP__("/model-creation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:[{page:{slug:n,description:"new Model() vs Model::create()",heading:"Способы сохранения новых данных",altHeadings:"Laraway",tags:"database",toc:[],body:{type:o,children:[{type:b,tag:e,props:{},children:[{type:a,value:p},{type:b,tag:h,props:{title:q,uri:r},children:[]},{type:a,value:s}]},{type:a,value:g},{type:b,tag:e,props:{},children:[{type:a,value:t},{type:b,tag:c,props:{className:[u]},children:[{type:a,value:v}]},{type:a,value:w}]},{type:a,value:g},{type:a,value:g},{type:b,tag:x,props:{heading:"Отличия",id:"compare"},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Первый пример отличается от второго и третьего только тем, что не требует\n    указания "},{type:b,tag:c,props:{className:[f,"variable"]},children:[{type:a,value:"$fillable"}]},{type:a,value:" в модели.\n  "}]},{type:a,value:d},{type:b,tag:i,props:{name:"cases\u002Fmodel-creation\u002Fnew"},children:[]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Второй и третий примеры ничем не отличаются, кроме того, что вариант с "},{type:b,tag:c,props:{className:[f,j]},children:[{type:a,value:y}]},{type:a,value:"\n    более компактен.\n  "}]},{type:a,value:d},{type:b,tag:i,props:{name:"cases\u002Fmodel-creation\u002Ffill"},children:[]},{type:a,value:d},{type:b,tag:i,props:{name:"cases\u002Fmodel-creation\u002Fcreate"},children:[]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"\n    В четвёртом примере используется метод\n    "},{type:b,tag:h,props:{title:m,type:z,uri:"Illuminate\u002FDatabase\u002FQuery\u002FBuilder.html#method_insert"},children:[]},{type:a,value:",\n    который возвращает "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"boolean"}]},{type:a,value:", а не саму модель.\n    Также метод не заполнит автоматически поля "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"created_at"}]},{type:a,value:" и "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"updated_at"}]},{type:a,value:",\n    касты и события модели работать не будут, т.к. метод является частью QueryBuilder, а не модели.\n  "}]},{type:a,value:d},{type:b,tag:i,props:{name:"cases\u002Fmodel-creation\u002Finsert"},children:[]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Метод\n    "},{type:b,tag:h,props:{title:"insertGetId()",type:z,uri:"Illuminate\u002FDatabase\u002FQuery\u002FBuilder.html#method_insertGetId"},children:[]},{type:a,value:"\n    работает аналогично и возвращает ID вставленной записи, при этом за один раз сохранить можно только одну запись, в отличии от простого\n    "},{type:b,tag:c,props:{className:[f,j]},children:[{type:a,value:m}]},{type:a,value:", который позволяет сохранять несколько записей.\n  "}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{heading:"Выводы",id:"summary"},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Можно выбрать любой способ.\n    Если не нужен ручной контроль и стремиться за лаконичностью, то "},{type:b,tag:c,props:{className:[f,j]},children:[{type:a,value:y}]},{type:a,value:",\n    если необходимо сохранить много записей за раз, то "},{type:b,tag:c,props:{className:[f,j]},children:[{type:a,value:m}]},{type:a,value:d}]},{type:a,value:g}]}]},excerpt:{type:o,children:[{type:b,tag:e,props:{},children:[{type:a,value:p},{type:b,tag:h,props:{title:q,uri:r},children:[]},{type:a,value:s}]},{type:a,value:g},{type:b,tag:e,props:{},children:[{type:a,value:t},{type:b,tag:c,props:{className:[u]},children:[{type:a,value:v}]},{type:a,value:w}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fmodel-creation",extension:".md",createdAt:"2024-12-11T10:52:12.054Z",updatedAt:"2024-12-11T13:41:43.448Z"},id:n}],fetch:{"CodeChips:0":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003Enew\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EPost\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003Etitle\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$title\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003Econtent\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$content\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E4\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Esave\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E5\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E6\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003E$post = new Post();\n$post-&gt;title = $title;\n$post-&gt;content = $content;\n$post-&gt;save();\n\n$post-&gt;id;\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:k,copiedTimeout:l},"CodeChips:1":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003Enew\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EPost\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$data\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Esave\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E4\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003E$post = new Post($data);\n$post-&gt;save();\n\n$post-&gt;id;\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:k,copiedTimeout:l},"CodeChips:2":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EPost\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Ecreate\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$data\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$post\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003E$post = Post::create($data);\n\n$post-&gt;id;\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:k,copiedTimeout:l},"CodeChips:3":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EDB\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Etable\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eposts\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Einsert\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$data\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EPost\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Einsert\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$data\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E4\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E5\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$postId\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003E=\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EPost\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003EinsertGetId\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$data\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003EDB::table('posts')-&gt;insert($data);\n\nPost::insert($data);\n\n$postId = Post::insertGetId($data);\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:k,copiedTimeout:l}},mutations:[]}}("text","element","span","\n  ","p","bit","\n","laravel-link","code-chips","code",false,null,"insert()","model-creation","root","\n  Согласно ","документации","eloquent#inserts","\n  есть несколько способов создать новую модель и сохранить данные в БД.\n","\n  Это неизбежно приводит к вопросу «Как правильно\u002Fлучше?» и обычно тема перетекает в холивар,\n  с доводами а-ля\n  ","italic","\"у нас в проекте пишут вот так\"",".\n","case-context-section","create()","api")));