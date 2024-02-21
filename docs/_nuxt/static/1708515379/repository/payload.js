__NUXT_JSONP__("/repository", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{page:{slug:m,description:"Репозитории с Eloquent не нужны",heading:"Репозиторий и Eloquent",altHeadings:"Запрещённые слова, Холивар",toc:[],body:{type:n,children:[{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:f},{type:a,value:f},{type:b,tag:i,props:{heading:"Быстрый ответ",id:"quick-answer"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Начнём с того, что если ты задаёшься вопросом\n    "},{type:b,tag:h,props:{className:[p]},children:[{type:a,value:"«А нужны ли мне репозитории в Laravel?»"}]},{type:a,value:",\n    то ответ будет простым: "},{type:b,tag:h,props:{className:[p]},children:[{type:a,value:"«Нет, не нужны»"}]},{type:a,value:".\n  "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    По очень простой причине: если ты "},{type:b,tag:j,props:{},children:[{type:a,value:q}]},{type:a,value:" знаешь зачем ты что-то делаешь, то этого делать "},{type:b,tag:j,props:{},children:[{type:a,value:q}]},{type:a,value:" надо.\n    А если знаешь зачем, то ты либо делаешь, либо нет и на этом собственно всё.\n  "}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{heading:"Чтиво",id:"links"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Предлагаю ознакомится с более подробными\n    материалами "},{type:b,tag:h,props:{className:["text-sm"]},children:[{type:a,value:"(комментарии тоже рекомендуются к прочтению)"}]},{type:a,value:":\n  "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{title:"Как не нужно использовать паттерн Repository",link:"https:\u002F\u002Fhabr.com\u002Fru\u002Fpost\u002F316836\u002F"},children:[]},{type:a,value:d},{type:b,tag:k,props:{},children:[]},{type:a,value:d},{type:b,tag:g,props:{title:"Пожалуйста, прекращайте говорить про шаблон Репозиторий с Eloquent",link:"https:\u002F\u002Fhabr.com\u002Fru\u002Fpost\u002F444688\u002F"},children:[]},{type:a,value:d},{type:b,tag:k,props:{},children:[]},{type:a,value:d},{type:b,tag:g,props:{title:"Полезные репозитории с Eloquent?",link:"https:\u002F\u002Fhabr.com\u002Fru\u002Fpost\u002F445452\u002F"},children:[]},{type:a,value:d},{type:b,tag:k,props:{},children:[]},{type:a,value:d},{type:b,tag:g,props:{title:"Почему здравый смысл важнее паттернов, а Active Record не так уж и плох",link:"https:\u002F\u002Fhabr.com\u002Fru\u002Fcompanies\u002Fdomclick\u002Farticles\u002F515560\u002F"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    С материалами я согласен, поэтому здесь в точности повторяться смысла нет.\n  "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    И немного о самом шаблоне проектирования:\n  "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{title:"Хранилище (Repository)",link:"https:\u002F\u002Fdesignpatternsphp.readthedocs.io\u002Fru\u002Flatest\u002FMore\u002FRepository\u002FREADME.html"},children:[]},{type:a,value:d},{type:b,tag:k,props:{},children:[]},{type:a,value:d},{type:b,tag:g,props:{title:"Паттерн репозиторий",link:"https:\u002F\u002Fgist.github.com\u002Fmaestrow\u002F594fd9aee859c809b043"},children:[]},{type:a,value:c}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{heading:"Суть холивара",id:"topic"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Вся суть сводится к тому, что в Laravel репозитории - это бесполезный слой абстракции,\n    поскольку Eloquent ORM - реализация ActiveRecord, уже является репозиторием.\n    И те репозитории, что пишутся с Eloquent, в итоге не выполняют роль присущую паттерну.\n  "}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{heading:"Зачем?",id:"why"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Чаще всего репозитории в Laravel используются разработчиками:"}]},{type:a,value:c},{type:b,tag:"ul",props:{className:["list-disc","list-inside","mb-4"]},children:[{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"\n      пришли с других фреймворков или языков, где привыкли иначе разделять бизнес-логику и работу с БД\n    "}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"\n      пытаются устранить повторяющиеся запросы и сделать \"сервис\" отвечающий за выборку конкретных данных\n    "}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"\n      решили, что использовать репозитории надо обязательно, по принципу "},{type:b,tag:g,props:{title:"«Здесь так принято»",link:"https:\u002F\u002Fwikireality.ru\u002Fwiki\u002F%D0%97%D0%B4%D0%B5%D1%81%D1%8C_%D1%82%D0%B0%D0%BA_%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D0%BE"},children:[]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"\n      для тестирования и моков\n    "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n    Всё это в той или иной мере может иметь смысл, но только потому, что смысл мы вкладываем сами.\n    В реальности я вижу в проектах классы, которые в имени содержат постфикс Repository, но являются ли они репозиториями?\n    Нет. Они являются обычными хелперами, в которые завернули QueryBuilder и которые "},{type:b,tag:j,props:{},children:[{type:a,value:"возвращают модели"}]},{type:a,value:".\n    И модели дальше "},{type:b,tag:j,props:{},children:[{type:a,value:"могут и будут"}]},{type:a,value:" использоваться в обход репозиториев.\n    А методы эти либо бесполезные - "},{type:b,tag:h,props:{className:[r,s]},children:[{type:a,value:"getById()"}]},{type:a,value:",\n    либо узкоспециализированные "},{type:b,tag:h,props:{className:[r,s]},children:[{type:a,value:"getUserWithOrdersForCabinet()"}]},{type:a,value:",\n    которые используются один раз в одном месте приложения\n    и являются обычными "},{type:b,tag:"laravel-link",props:{title:"скоупами",uri:"eloquent#query-scopes"},children:[]},{type:a,value:c}]},{type:a,value:f}]}]},excerpt:{type:n,children:[{type:b,tag:e,props:{},children:[{type:a,value:o}]}]},dir:"\u002Fcases",path:"\u002Fcases\u002Frepository",extension:".md",createdAt:"2023-10-19T09:38:37.880Z",updatedAt:"2023-10-08T10:05:19.000Z"},id:m}],fetch:{},mutations:[]}}("text","element","\n  ","\n    ","p","\n","external-link","span","case-context-section","b","br","li","repository","root","\n  Одна из самых горячих тем в чатах, которая вспыхивает по КД.\n  Сразу подчеркну, что этот текст мои (и не только) размышления на данную тему,\n  поэтому никаких выводов о добре и зле здесь не будет.\n","italic","не","bit","code")));