function module(e,t,n){var r,u,o,i,c,a,f,s,m,l;function d(e,t){var n=o(e),r=u(n,2),c=r[0],a=r[1];return i((function(){var n=setTimeout((function(){a(e)}),t);return function(){return clearTimeout(n)}}),[e]),c}function M(e){var t=o(window.matchMedia(e).matches),n=u(t,2),r=n[0],c=n[1];return i((function(){var t=new ResizeObserver((function(){c(window.matchMedia(e).matches)}));return t.observe(document.body),function(){t.unobserve(document.body)}}),[e]),r}function v(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"local";return c((function(){var o;return r({query:JSON.stringify({type:n,text:e.term,workspace:u}),sort:JSON.stringify((o={},o[t[0]]="asc"===t[1]?1:0,o))},e.itemsPerPage&&{count:e.itemsPerPage},{},e.current&&{offset:e.current})}),[e,t,n,u])}n.link("@babel/runtime/helpers/objectSpread2",{default:function(e){r=e}},0),n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){u=e}},1),n.export({useDebounce:function(){return d},useMediaQuery:function(){return M},useQuery:function(){return v},useFormatTime:function(){return h},useFormatDateAndTime:function(){return k},useFormatDate:function(){return g},useFormatMemorySize:function(){return y}}),n.link("react",{useState:function(e){o=e},useEffect:function(e){i=e},useMemo:function(e){c=e},useCallback:function(e){a=e}},0),n.link("moment",{default:function(e){f=e}},1),n.link("underscore.string",{default:function(e){s=e}},2),n.link("../../../../../../client/contexts/UserContext",{useUserPreference:function(e){m=e}},3),n.link("../../../../../../client/contexts/SettingsContext",{useSetting:function(e){l=e}},4);var b=["h:mm A","H:mm"];function h(){var e=m("clockMode",!1),t=l("Message_TimeFormat"),n=b[e-1]||t;return a((function(r){switch(e){case 1:case 2:return f(r).format(n);default:return f(r).format(t)}}),[e,t])}function k(){var e=m("clockMode",!1),t=l("Message_TimeAndDateFormat");return a((function(n){switch(e){case 1:return f(n).format("MMMM D, Y h:mm A");case 2:return f(n).format("MMMM D, Y H:mm");default:return f(n).format(t)}}),[e,t])}function g(){var e=l("Message_DateFormat");return a((function(t){return f(t).format(e)}),[e])}var y=function(){return a((function(e){if("number"!=typeof e)return null;var t=["bytes","kB","MB","GB"],n;for(n=0;n<t.length-1;++n){var r;if(e<Math.pow(1024,n+1))break}var u=Math.pow(1024,n),o=0===n?0:2;return s.numberFormat(e/u,o)+" "+t[n]}),[])}}

