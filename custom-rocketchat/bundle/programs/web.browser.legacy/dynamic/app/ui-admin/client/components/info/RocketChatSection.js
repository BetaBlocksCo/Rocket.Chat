function module(e,t,n){var r,a,i,l,o,c,u;function s(e){var t=e.info,n=e.statistics,s=e.isLoading,m=function(e){return s?i.createElement(r,{width:"50%"}):e()},E=l(),f=t&&t.marketplaceApiVersion;return i.createElement(i.Fragment,null,i.createElement(a,{"data-qa":"rocket-chat-title"},E("Rocket.Chat")),i.createElement(u,{"data-qa":"rocket-chat-list"},i.createElement(u.Entry,{label:E("Version")},m((function(){return n.version}))),f&&i.createElement(u.Entry,{label:E("Apps_Engine_Version")},f),i.createElement(u.Entry,{label:E("DB_Migration")},m((function(){return n.migration.version}))),i.createElement(u.Entry,{label:E("DB_Migration_Date")},m((function(){return o(n.migration.lockedAt)}))),i.createElement(u.Entry,{label:E("Installed_at")},m((function(){return o(n.installedAt)}))),i.createElement(u.Entry,{label:E("Uptime")},m((function(){return c(n.process.uptime,E)}))),i.createElement(u.Entry,{label:E("Deployment_ID")},m((function(){return n.uniqueId}))),i.createElement(u.Entry,{label:E("PID")},m((function(){return n.process.pid}))),i.createElement(u.Entry,{label:E("Running_Instances")},m((function(){return n.instanceCount}))),i.createElement(u.Entry,{label:E("OpLog")},m((function(){return n.oplogEnabled?E("Enabled"):E("Disabled")})))))}n.export({RocketChatSection:function(){return s}}),n.link("@rocket.chat/fuselage",{Skeleton:function(e){r=e},Subtitle:function(e){a=e}},0),n.link("react",{default:function(e){i=e}},1),n.link("../../../../../client/contexts/TranslationContext",{useTranslation:function(e){l=e}},2),n.link("./formatters",{formatDate:function(e){o=e},formatHumanReadableTime:function(e){c=e}},3),n.link("./DescriptionList",{DescriptionList:function(e){u=e}},4)}

