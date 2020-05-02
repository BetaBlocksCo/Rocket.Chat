function module(e,t,r){var n,a,i,c,l,s,o,u,d,_,m,S,g,v,f,p,k,h,E,R,b,x,T,C;r.link("@babel/runtime/regenerator",{default:function(e){n=e}},0),r.link("@babel/runtime/helpers/slicedToArray",{default:function(e){a=e}},1),r.link("@babel/runtime/helpers/extends",{default:function(e){i=e}},2),r.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){c=e}},3),r.export({RegisterServerStep:function(){return P}}),r.link("@rocket.chat/fuselage",{Box:function(e){l=e},CheckBox:function(e){s=e},Field:function(e){o=e},Margins:function(e){u=e},RadioButton:function(e){d=e}},0),r.link("@rocket.chat/fuselage-hooks",{useMergedRefs:function(e){_=e},useUniqueId:function(e){m=e}},1),r.link("react",{default:function(e){S=e},useRef:function(e){g=e},useState:function(e){v=e}},2),r.link("../../../contexts/ServerContext",{useMethod:function(e){f=e}},3),r.link("../../../contexts/SettingsContext",{useBatchSettingsDispatch:function(e){p=e}},4),r.link("../../../contexts/ToastMessagesContext",{useToastMessageDispatch:function(e){k=e}},5),r.link("../../../contexts/TranslationContext",{useTranslation:function(e){h=e}},6),r.link("../../../hooks/useFocus",{useFocus:function(e){E=e}},7),r.link("../../basic/Icon",{Icon:function(e){R=e}},8),r.link("../Pager",{Pager:function(e){b=e}},9),r.link("../SetupWizardState",{useSetupWizardContext:function(e){x=e}},10),r.link("../Step",{Step:function(e){T=e}},11),r.link("../StepHeader",{StepHeader:function(e){C=e}},12),r.link("./RegisterServerStep.css");var w=S.forwardRef((function(e,t){var r=e.children,n=e.label,a=e.selected,l=e.disabled,s=c(e,["children","label","selected","disabled"]),u=g(),v=_(t,u),f=m();return S.createElement("span",{className:["SetupWizard__RegisterServerStep-option",a&&"SetupWizard__RegisterServerStep-option--selected",l&&"SetupWizard__RegisterServerStep-option--disabled"].filter(Boolean).join(" "),onClick:function(){u.current.click()}},S.createElement(o,null,S.createElement(o.Row,null,S.createElement(d,i({ref:v,id:f,checked:a,disabled:l},s)),S.createElement(o.Label,{htmlFor:f},n))),r)})),W=function(e){return S.createElement("ul",i({className:"SetupWizard__RegisterServerStep-items"},e))},z=function(e){var t=e.children,r=e.icon,n=c(e,["children","icon"]);return S.createElement("li",i({className:"SetupWizard__RegisterServerStep-item"},n),S.createElement(R,{block:"SetupWizard__RegisterServerStep-item-icon",icon:r}),t)};function P(e){var t=e.step,r=e.title,i=e.active,c=x(),d=c.canDeclineServerRegistration,_=c.goToPreviousStep,g=c.goToFinalStep,R=v(!0),P=a(R,2),y=P[0],I=P[1],A=v(!0),F=a(A,2),M=F[0],N=F[1],B=v(!1),L=a(B,2),O=L[0],q=L[1],D=h(),j=v(!1),H=a(j,2),U=H[0],G=H[1],J=p(),K=f("cloud:registerWorkspace"),Q=k(),V=function(){_()},X=function(){function e(e){return n.async(function(){function t(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),G(!0),t.prev=2,!y||O){t.next=5;break}throw new Object({error:"Register_Server_Terms_Alert"});case 5:return t.next=7,n.awrap(J([{_id:"Statistics_reporting",value:y},{_id:"Apps_Framework_enabled",value:y},{_id:"Register_Server",value:y},{_id:"Allow_Marketing_Emails",value:M},{_id:"Cloud_Service_Agree_PrivacyTerms",value:O}]));case 7:if(!y){t.next=10;break}return t.next=10,n.awrap(K());case 10:G(!1),g(),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),Q({type:"error",message:t.t0}),G(!1);case 18:case"end":return t.stop()}}return t}(),null,null,[[2,14]])}return e}(),Y=E(i),Z=m(),$=m();return S.createElement(T,{active:i,working:U,onSubmit:X},S.createElement(C,{number:t,title:r}),S.createElement(u,{blockEnd:"x32"},S.createElement(l,null,S.createElement("p",{className:"SetupWizard__RegisterServerStep-text"},D("Register_Server_Info")),S.createElement("div",{className:"SetupWizard__RegisterServerStep-content"},S.createElement(w,{ref:Y,"data-qa":"register-server",label:D("Register_Server_Registered"),name:"registerServer",value:"true",selected:y,onChange:function(e){var t=e.currentTarget.checked;I(t),N(t)}},S.createElement(W,null,S.createElement(z,{icon:"check"},D("Register_Server_Registered_Push_Notifications")),S.createElement(z,{icon:"check"},D("Register_Server_Registered_Livechat")),S.createElement(z,{icon:"check"},D("Register_Server_Registered_OAuth")),S.createElement(z,{icon:"check"},D("Register_Server_Registered_Marketplace"))),S.createElement(o,null,S.createElement(o.Row,null,S.createElement(s,{id:$,name:"optInMarketingEmails",value:"true",disabled:!y,checked:M,onChange:function(e){var t=e.currentTarget.checked;N(t)}}),S.createElement(o.Label,{htmlFor:$},D("Register_Server_Opt_In")))),S.createElement(o.Label,{text:D("Register_Server_Opt_In"),position:"end",className:"SetupWizard__RegisterServerStep__optIn"})),S.createElement(w,{"data-qa":"register-server-standalone",label:D("Register_Server_Standalone"),name:"registerServer",value:"false",disabled:!d,selected:!y,onChange:function(e){var t=e.currentTarget.checked;I(!t),N(!t),q(!t)}},S.createElement(W,null,S.createElement(z,{icon:"circle"},D("Register_Server_Standalone_Service_Providers")),S.createElement(z,{icon:"circle"},D("Register_Server_Standalone_Update_Settings")),S.createElement(z,{icon:"circle"},D("Register_Server_Standalone_Own_Certificates")))),S.createElement(u,{all:"x16"},S.createElement(o,null,S.createElement(o.Row,null,S.createElement(s,{id:Z,name:"agreeTermsAndPrivacy","data-qa":"agree-terms-and-privacy",disabled:!y,checked:O,onChange:function(e){var t=e.currentTarget.checked;q(t)}}),S.createElement(o.Label,{htmlFor:Z},D("Register_Server_Registered_I_Agree")," ",S.createElement("a",{href:"https://rocket.chat/terms"},D("Terms"))," & ",S.createElement("a",{href:"https://rocket.chat/privacy"},D("Privacy_Policy"))))))))),S.createElement(b,{disabled:U,onBackClick:V}))}}

