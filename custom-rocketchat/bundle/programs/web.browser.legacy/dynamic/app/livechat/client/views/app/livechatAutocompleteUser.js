function module(t,e,n){var i,o,a,l;n.link("meteor/blaze",{Blaze:function(t){i=t}},0),n.link("meteor/templating",{Template:function(t){o=t}},1),n.link("meteor/reactive-var",{ReactiveVar:function(t){a=t}},2),n.link("../../../../meteor-autocomplete/client",{AutoComplete:function(t){l=t}},3),n.link("./livechatAutocompleteUser.html"),o.livechatAutocompleteUser.helpers({list:function(){return this.list},items:function(){return o.instance().ac.filteredList()},config:function(){var t,e=o.instance().filter,n=o.instance().data,i=n.noMatchTemplate,a=n.templateItem,l=n.modifier;return{filter:e.get(),template_item:a,noMatchTemplate:i,modifier:function(t){return l(e,t)}}},label:function(){var t=o.instance();return t.showLabel&&t.label},autocomplete:function(t){var e=o.instance(),n=e.ac[t];return"function"==typeof n?n.apply(e.ac):n}}),o.livechatAutocompleteUser.events({"input input":function(t,e){var n=t.target,i=n.selectionEnd||n.selectionStart,o=n.value.length;document.activeElement===n&&t&&/input/i.test(t.type)&&(n.selectionEnd=i+n.value.length-o),e.filter.set(n.value)},"click .rc-popup-list__item":function(t,e){e.ac.onItemClick(this,t)},"keydown input":function(t,e){if(e.ac.onKeyDown(t),[8,46].includes(t.keyCode)&&""===t.target.value){var n=e.deleteLastItem;return n&&n()}},"keyup input":function(t,e){e.ac.onKeyUp(t)},"focus input":function(t,e){e.ac.onFocus(t)},"blur input":function(t,e){e.ac.onBlur(t)},"click .rc-tags__tag":function(t,e){var n=t.target,o=e.onClickTag;return o&&o(i.getData(n))}}),o.livechatAutocompleteUser.onRendered((function(){var t=this.data.name;this.ac.element=this.firstNode.querySelector("[name="+t+"]"),this.ac.$element=$(this.ac.element),this.deleteLastItem=this.data.deleteLastItem})),o.livechatAutocompleteUser.onCreated((function(){this.filter=new a(""),this.selected=new a([]),this.onClickTag=this.data.onClickTag,this.showLabel=this.data.showLabel,this.label=this.data.label;var t={};this.autorun((function(){var e=o.currentData(),n=e.exceptions,i=e.conditions;t.exceptions=n,t.conditions=i}));var e=this.data,n=e.collection,i=e.endpoint,c=e.field,r=e.sort,s=e.onSelect,u=e.selector,p=void 0===u?function(t){return{term:t}}:u;this.ac=new l({selector:{anchor:".rc-input__label",item:".rc-popup-list__item",container:".rc-popup-list__list"},onSelect:s,position:"fixed",limit:10,inputDelay:300,rules:[{filter:t,collection:n,endpoint:i,field:c,matchAll:!0,doNotChangeWidth:!1,selector:p,sort:r}]}),this.ac.tmplInst=this}))}
