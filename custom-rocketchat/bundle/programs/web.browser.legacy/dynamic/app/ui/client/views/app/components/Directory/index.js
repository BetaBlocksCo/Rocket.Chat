function module(e,n,t){var a,l,r,c,i,o,u,s,f,m,x,E,k,b;t.export({DirectoryPage:function(){return g}}),t.link("react",{default:function(e){a=e},useEffect:function(e){l=e},useCallback:function(e){r=e}},0),t.link("@rocket.chat/fuselage",{Box:function(e){c=e},Margins:function(e){i=e},Tabs:function(e){o=e},Avatar:function(e){u=e}},1),t.link("../../../../../../../client/components/basic/Page",{Page:function(e){s=e}},2),t.link("../../../../../../../client/contexts/TranslationContext",{useTranslation:function(e){f=e}},3),t.link("./UserTab",{UserTab:function(e){m=e}},4),t.link("./ChannelsTab",{ChannelsTab:function(e){x=e}},5),t.link("../../../../../../../client/contexts/RouterContext",{useRoute:function(e){E=e},useRouteParameter:function(e){k=e}},6),t.link("../../../../../../../client/contexts/SettingsContext",{useSetting:function(e){b=e}},7);var d={padding:0},C={baseUrl:"/avatar/"};function g(){var e=f(),n=b("Accounts_Directory_DefaultView"),t=b("FEDERATION_Enabled"),g=k("tab"),h=E("directory"),p=r((function(e){return function(){return h.push({tab:e})}}),[g]);return l((function(){if(!g||"external"===g&&!t)return h.replace({tab:n})}),[h,g,t,n]),a.createElement(u.Context.Provider,{value:C},a.createElement(s,null,a.createElement(s.Header,{title:e("Directory")}),a.createElement(o,{flexShrink:0},a.createElement(o.Item,{selected:"channels"===g,onClick:p("channels")},e("Channels")),a.createElement(o.Item,{selected:"users"===g,onClick:p("users")},e("Users")),t&&a.createElement(o.Item,{selected:"external"===g,onClick:p("external")},e("External_Users"))),a.createElement(s.Content,{style:d},a.createElement(i,{inline:"x24"},a.createElement(c,null,"users"===g&&a.createElement(m,null)||"channels"===g&&a.createElement(x,null)||t&&"external"===g&&a.createElement(m,{workspace:"external"}))))))}g.displayName="DirectoryPage",t.exportDefault(g)}

