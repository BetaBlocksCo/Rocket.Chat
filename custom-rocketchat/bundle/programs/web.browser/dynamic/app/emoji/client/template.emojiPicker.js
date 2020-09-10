function module(){Template.__checkName("emojiPicker"),Template.emojiPicker=new Template("Template.emojiPicker",(function(){var t=this;return HTML.DIV({class:"emoji-picker rc-popover__content"},"\n\t\t",HTML.DIV({class:"emoji-top"},"\n\t\t\t",HTML.DIV({class:"rc-input"},"\n\t\t\t\t",HTML.LABEL({class:"rc-input__label"},"\n\t\t\t\t\t",HTML.DIV({class:"rc-input__wrapper"},"\n\t\t\t\t\t\t",HTML.DIV({class:"rc-input__icon"},"\n\t\t\t\t\t\t\t",Blaze._TemplateWith((function(){return{block:Spacebars.call("rc-input__icon-svg"),icon:Spacebars.call("magnifier")}}),(function(){return Spacebars.include(t.lookupTemplate("icon"))})),"\n\t\t\t\t\t\t"),"\n\t\t\t\t\t\t",HTML.INPUT({name:"name",type:"text",class:"rc-input__element js-emojipicker-search",placeholder:function(){return Spacebars.mustache(t.lookup("_"),"Search")},autofocus:"",autocomplete:"off"}),"\n\t\t\t\t\t"),"\n\t\t\t\t"),"\n\t\t\t"),"\n\t\t\t",HTML.DIV({class:"change-tone"},"\n\t\t\t\t",HTML.A({href:"#change-tone"},HTML.SPAN({class:function(){return["current-tone ",Spacebars.mustache(t.lookup("currentTone"))]}})),"\n\t\t\t\t",HTML.Raw('<ul class="tone-selector secondary-background-color">\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="0"><span class="tone-0"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="1"><span class="tone-1"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="2"><span class="tone-2"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="3"><span class="tone-3"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="4"><span class="tone-4"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="5"><span class="tone-5"></span></a></li>\n\t\t\t\t</ul>'),"\n\t\t\t"),"\n\t\t"),"\n\t\t",HTML.DIV({class:"filter"},"\n\t\t\t",HTML.UL({class:"filter-list"},"\n\t\t\t\t",Blaze.Each((function(){return{_sequence:Spacebars.call(t.lookup("emojiCategories")),_variable:"category"}}),(function(){return["\n\t\t\t\t\t",HTML.LI({class:function(){return["filter-item border-secondary-background-color ",Spacebars.mustache(t.lookup("activeCategory"),Spacebars.dot(t.lookup("category"),"key"))]},title:function(){return Spacebars.mustache(t.lookup("_"),Spacebars.dot(t.lookup("category"),"i18n"))}},"\n\t\t\t\t\t\t",HTML.A({href:function(){return["#",Spacebars.mustache(Spacebars.dot(t.lookup("category"),"key"))]},class:"category-link color-info-font-color"},HTML.I({class:function(){return["category-icon icon-",Spacebars.mustache(Spacebars.dot(t.lookup("category"),"key"))]}})),"\n\t\t\t\t\t"),"\n\t\t\t\t"]})),"\n\t\t\t"),"\n\t\t"),"\n\t\t",HTML.DIV({class:"emojis"},"\n\t\t\t",Blaze.If((function(){return Spacebars.call(t.lookup("searching"))}),(function(){return["\n\t\t\t\t",Blaze.View("lookup:searchResults",(function(){return Spacebars.makeRaw(Spacebars.mustache(t.lookup("searchResults")))})),"\n\t\t\t"]}),(function(){return["\n\t\t\t\t",Blaze.Each((function(){return{_sequence:Spacebars.call(t.lookup("emojiCategories")),_variable:"category"}}),(function(){return["\n\t\t\t\t\t",HTML.H4({class:"emoji-list-category",id:function(){return["emoji-list-category-",Spacebars.mustache(Spacebars.dot(t.lookup("category"),"key"))]}},Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),Spacebars.dot(t.lookup("category"),"i18n"))}))),"\n\t\t\t\t\t",HTML.UL({class:function(){return["emoji-list emoji-category-",Spacebars.mustache(Spacebars.dot(t.lookup("category"),"key"))]}},"\n\t\t\t\t\t\t",Blaze.View("lookup:emojiList",(function(){return Spacebars.makeRaw(Spacebars.mustache(t.lookup("emojiList"),Spacebars.dot(t.lookup("category"),"key")))})),"\n\t\t\t\t\t"),"\n\t\t\t\t"]})),"\n\t\t\t"]})),"\n\t\t"),"\n\t\t",HTML.DIV({class:"emoji-footer"},Blaze.View("lookup:_",(function(){return Spacebars.makeRaw(Spacebars.mustache(t.lookup("_"),"Emoji_provided_by_JoyPixels"))}))),"\n\t")}))}
