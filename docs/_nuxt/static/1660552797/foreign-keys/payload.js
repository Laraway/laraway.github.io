__NUXT_JSONP__("/foreign-keys", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{page:{slug:l,description:"Проверь порядок миграций и типы полей у внешнего ключа",heading:"Cannot add foreign key",altHeadings:k,toc:[],body:{type:"root",children:[{type:b,tag:j,props:{heading:"Проблема",id:"problem"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Попытка добавить внешний ключ к таблице приводит к одной из ошибок:\n  "}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:"\n    General error: 1215 Cannot add foreign key constraint \n  "}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:p}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:d,props:{},children:[{type:a,value:"\n  Все требования к механизму внешних ключей можно найти в\n  "},{type:b,tag:"external-link",props:{title:"документации",link:"https:\u002F\u002Fdev.mysql.com\u002Fdoc\u002Frefman\u002F8.0\u002Fen\u002Fcreate-table-foreign-keys.html"},children:[]},{type:a,value:c},{type:b,tag:"br",props:{},children:[]},{type:a,value:"Далее рассмотрим самые популярные причины.\n"}]},{type:a,value:e},{type:b,tag:j,props:{heading:"Разные типы полей",id:"diff-type"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Столбцы должно быть одного типа,\n    а для "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"INTEGER"}]},{type:a,value:" или "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"DECIMAL"}]},{type:a,value:"\n    ещё и одного размера.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Обычно внешний ключ ссылается на ID другой таблицы и по умолчанию тип ID:\n    "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"UNSIGNED BIG INTEGER"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{name:"cases\u002Fforeign-keys\u002Fmigration-old"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Или начиная с 7 версии более лаконичный синтаксис, который создаёт колонку и ключ:\n  "}]},{type:a,value:c},{type:b,tag:q,props:{name:"cases\u002Fforeign-keys\u002Fmigration-new"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    "},{type:b,tag:"b",props:{},children:[{type:a,value:"Обрати внимание"}]},{type:a,value:", что в старых версиях по умолчанию тип ID был "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"UNSIGNED INTEGER"}]},{type:a,value:c}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{heading:"Порядок миграций",id:"order"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Логично, что прежде чем ссылаться на таблицу она уже должна быть создана,\n    тем не менее это часто упускается из виду и сначала создаётся \"дочерняя\" таблица.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Не всегда ошибка говорит, что не так и может быть общей: "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"Cannot add foreign key constraint"}]},{type:a,value:c}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{heading:"Данные в таблице",id:"data-already"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Таблица уже содержит невалидные значения. Вариант часто встречается, \n    когда внешний ключ добавляется на уже созданную таблицу в которой есть данные.\n  "}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Ошибка говорит о том, что нельзя добавить ключ, т.к. данные не консистентные.\n    Проблему необходимо устранить вручную установив правильные значения или "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"NULL"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Ещё один вариант происходит при откате миграций:\n  "}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Причина часто в нарушенном порядке миграций или проблемах в "},{type:b,tag:h,props:{className:[i,"code"]},children:[{type:a,value:"down()"}]},{type:a,value:".\n    Если ошибка происходит при "},{type:b,tag:h,props:{className:[i]},children:[{type:a,value:"php artisan migrate:fresh"}]},{type:a,value:", то необходимо вручную удалять\n    таблицы или данные в них.\n  "}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{heading:"Движок таблиц",id:"engine"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\n    Родительская таблица не InnoDB. MyISAM не поддерживает внешние ключи.\n  "}]},{type:a,value:e}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Fforeign-keys",extension:".md",createdAt:r,updatedAt:r},id:l}],fetch:{"CodeChips:0":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Ecreate\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ecomments\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E, \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003Efunction\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EBlueprint\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E {\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E  \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E4\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E  \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003EbigInteger\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Epost_id\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Eunsigned\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E5\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E  \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Eforeign\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Epost_id\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Ereferences\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Eon\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Eposts\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E);\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E6\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E});\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003ESchema::create('comments', function (Blueprint $table) {\n  $table-&gt;id();\n\n  $table-&gt;bigInteger('post_id')-&gt;unsigned();\n  $table-&gt;foreign('post_id')-&gt;references('id')-&gt;on('posts');\n});\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:s,copiedTimeout:k},"CodeChips:1":{code:"\u003Cpre class=\"torchlight\" style=\"background-color: #011627; --theme-selection-background: #4373c2;\" data-torchlight-processed=\"3449c9e5e332f1dbb81505cd739fbf3f\"\u003E\u003Ccode data-lang=\"php\"\u003E\u003C!-- Syntax highlighted by torchlight.dev --\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E1\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E::\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Ecreate\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Ecomments\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E, \u003C\u002Fspan\u003E\u003Cspan style=\"color: #C792EA;\"\u003Efunction\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #FFCB8B;\"\u003EBlueprint\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E {\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E2\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E  \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E3\u003C\u002Fspan\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E4\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E  \u003C\u002Fspan\u003E\u003Cspan style=\"color: #BEC5D4;\"\u003E$table\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003EforeignId\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E(\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #ECC48D;\"\u003Epost_id\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D9F5DD;\"\u003E&#39;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E)\u003C\u002Fspan\u003E\u003Cspan style=\"color: #7FDBCA;\"\u003E-&gt;\u003C\u002Fspan\u003E\u003Cspan style=\"color: #82AAFF;\"\u003Econstrained\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E();\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class='line'\u003E\u003Cspan style=\"color:#4b6479; text-align: right; -webkit-user-select: none; user-select: none;\" class=\"line-number\"\u003E5\u003C\u002Fspan\u003E\u003Cspan style=\"color: #D6DEEB;\"\u003E});\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ctextarea data-torchlight-original=\"true\" style=\"display: none !important;\"\u003ESchema::create('comments', function (Blueprint $table) {\n  $table-&gt;id();\n\n  $table-&gt;foreignId('post_id')-&gt;constrained();\n});\n\u003C\u002Ftextarea\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",copied:s,copiedTimeout:k}},mutations:[]}}("text","element","\n  ","p","\n","console","log","span","bit","case-context-section",null,"foreign-keys","\n    General error: 3780 Referencing column 'post_id' and referenced column 'id' in foreign key constraint 'xxx' are incompatible\n  ","\n    General error: 1824 Failed to open the referenced table\n  ","\n    General error: 3730 Cannot drop table 'xxx' referenced by a foreign key constraint\n  ","\n    SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row: a foreign key constraint fails\n  ","code-chips","2022-08-14T20:25:14.426Z",false)));