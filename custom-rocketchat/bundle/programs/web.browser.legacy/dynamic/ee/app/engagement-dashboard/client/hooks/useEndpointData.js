function module(e,n,t){var r,u,c,o,a,s;t.link("@babel/runtime/regenerator",{default:function(e){r=e}},0),t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){u=e}},1),t.export({useEndpointData:function(){return i}}),t.link("react",{useEffect:function(e){c=e},useState:function(e){o=e}},0),t.link("../../../../../client/contexts/ServerContext",{useEndpoint:function(e){a=e}},1),t.link("../../../../../client/contexts/ToastMessagesContext",{useToastMessageDispatch:function(e){s=e}},2);var i=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o(null),l=u(i,2),f=l[0],p=l[1],v=a(e,n),x=s();return c((function(){var e=!0,n;return function(){function n(){var n,u;return r.async(function(){function c(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n=setTimeout((function(){e&&p(null)}),3e3),c.next=4,r.awrap(v(t));case 4:if(u=c.sent,clearTimeout(n),u.success){c.next=8;break}throw new Error(u.status);case 8:if(e){c.next=10;break}return c.abrupt("return");case 10:p(u),c.next=17;break;case 13:c.prev=13,c.t0=c.catch(0),console.error(c.t0),x({type:"error",message:c.t0});case 17:case"end":return c.stop()}}return c}(),null,null,[[0,13]])}return n}()(),function(){e=!1}}),[v,t]),f}}

