function module(e,t,n){var l,a,i,o,u,r,c,d,f,m;function s(e){var t=e.hint,n=e.callout,a=l(e,["hint","callout"]);return f.createElement(i,null,f.createElement(p,a),t&&f.createElement(i.Hint,null,t),n&&f.createElement(d,{block:"x16"},f.createElement(c,{type:"warning"},n)))}function p(e){var t=e._id,n=e.label,l=e.disabled,c=e.multiline,d=e.placeholder,s=e.readonly,p=e.autocomplete,g=e.value,h=e.hasResetButton,E=e.onChangeValue,b=e.onResetButtonClick,v=function(e){E(e.currentTarget.value)};return f.createElement(f.Fragment,null,f.createElement(o.Container,null,f.createElement(a,null,f.createElement(i.Label,{htmlFor:t,title:t},n),h&&f.createElement(m,{"data-qa-reset-setting-id":t,onClick:b}))),f.createElement(i.Row,null,c?f.createElement(u,{"data-qa-setting-id":t,id:t,rows:4,value:g,placeholder:d,disabled:l,readOnly:s,autoComplete:!1===p?"off":void 0,onChange:v}):f.createElement(r,{"data-qa-setting-id":t,id:t,value:g,placeholder:d,disabled:l,readOnly:s,autoComplete:!1===p?"off":void 0,onChange:v})))}n.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){l=e}},0),n.export({Input:function(){return s},StringSettingInput:function(){return p}}),n.link("@rocket.chat/fuselage",{Box:function(e){a=e},Field:function(e){i=e},Flex:function(e){o=e},TextAreaInput:function(e){u=e},TextInput:function(e){r=e},Callout:function(e){c=e},Margins:function(e){d=e}},0),n.link("react",{default:function(e){f=e}},1),n.link("../ResetSettingButton",{ResetSettingButton:function(e){m=e}},2),s.displayName="Input"}
