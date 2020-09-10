function module(e,t,s){let n,r,a,i,o,u,l,d,c,f;s.link("@babel/runtime/helpers/objectSpread2",{default(e){n=e}},0),s.link("meteor/reactive-var",{ReactiveVar(e){r=e}},0),s.link("meteor/tracker",{Tracker(e){a=e}},1),s.link("meteor/kadira:flow-router",{FlowRouter(e){i=e}},2),s.link("meteor/templating",{Template(e){o=e}},3),s.link("underscore",{default(e){u=e}},4),s.link("../../../ui-utils",{SideNav(e){l=e},TabBar(e){d=e},RocketChatTabBar(e){c=e}},5),s.link("../../../utils/client",{APIClient(e){f=e}},6);const g=50;o.adminUsers.helpers({searchText(){const e=o.instance();return e.filter&&e.filter.get()},isReady(){const e=o.instance();return e.ready&&e.ready.get()},users:()=>o.instance().users.get(),isLoading(){const e=o.instance();if(!e.ready||!e.ready.get())return"btn-loading"},hasMore(){const e=o.instance(),t=e.users();if(e.offset&&e.offset.get()&&t&&t.length)return e.offset.get()===t.length},emailAddress(){return u.map(this.emails,(function(e){return e.address})).join(", ")},flexData:()=>({tabBar:o.instance().tabBar,data:o.instance().tabBarData.get()}),onTableScroll(){const e=o.instance();return function(t){if(t.offsetHeight+t.scrollTop>=t.scrollHeight-100)return e.offset.set(e.offset.get()+50)}}}),o.adminUsers.onCreated((function(){const e=this;this.offset=new r(0),this.filter=new r(""),this.ready=new r(!0),this.tabBar=new c,this.tabBar.showGroup(i.current().route.name),this.tabBarData=new r,this.users=new r([]),d.addButton({groups:["admin-users"],id:"admin-user-info",i18nTitle:"User_Info",icon:"user",template:"adminUserInfo",order:3}),d.addButton({groups:["admin-users"],id:"invite-user",i18nTitle:"Invite_Users",icon:"send",template:"adminInviteUser",order:1}),d.addButton({groups:["admin-users"],id:"add-user",i18nTitle:"Add_User",icon:"plus",template:"adminUserEdit",order:2}),this.loadUsers=async(e,t)=>{this.ready.set(!1);const s={$or:[{"emails.address":{$regex:e,$options:"i"}},{username:{$regex:e,$options:"i"}},{name:{$regex:e,$options:"i"}}]};let n="users.list?count=".concat(50,"&offset=").concat(t);e&&(n+="&query=".concat(JSON.stringify(s)));const{users:r}=await f.v1.get(n);0===t?this.users.set(r):this.users.set(this.users.get().concat(r)),this.ready.set(!0)},this.autorun(async()=>{const t=e.filter.get(),s=e.offset.get();this.loadUsers(t,s)})})),o.adminUsers.onRendered((function(){a.afterFlush((function(){l.setFlex("adminFlex"),l.openFlex()}))}));const h=300;o.adminUsers.events({"keydown #users-filter"(e){13===e.which&&(e.stopPropagation(),e.preventDefault())},"keyup #users-filter":u.debounce((e,t)=>{e.stopPropagation(),e.preventDefault(),t.filter.set(e.currentTarget.value),t.offset.set(0)},300),"click .user-info"(e,t){e.preventDefault(),t.tabBarData.set(n({},t.users.get().find(e=>e._id===this._id),{onChange(){const e=t.filter.get(),s=t.offset.get();t.loadUsers(e,s)}})),t.tabBar.open("admin-user-info")},"click .info-tabs button"(e){e.preventDefault(),$(".info-tabs button").removeClass("active"),$(e.currentTarget).addClass("active"),$(".user-info-content").hide(),$($(e.currentTarget).attr("href")).show()},"click .load-more"(e,t){e.preventDefault(),e.stopPropagation(),t.offset.set(t.offset.get()+50)}})}
