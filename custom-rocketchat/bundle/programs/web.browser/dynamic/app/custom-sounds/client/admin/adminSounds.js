function module(t,e,s){let n,o,i,a,d,u,c,l,r,f;s.link("meteor/reactive-var",{ReactiveVar(t){n=t}},0),s.link("meteor/tracker",{Tracker(t){o=t}},1),s.link("meteor/kadira:flow-router",{FlowRouter(t){i=t}},2),s.link("meteor/templating",{Template(t){a=t}},3),s.link("underscore",{default(t){d=t}},4),s.link("../../../ui-utils",{RocketChatTabBar(t){u=t},SideNav(t){c=t},TabBar(t){l=t}},5),s.link("../lib/CustomSounds",{CustomSounds(t){r=t}},6),s.link("../../../utils/client",{APIClient(t){f=t}},7);const h=50,g=500;a.adminSounds.helpers({searchText(){const t=a.instance();return t.filter&&t.filter.get()},isPlaying:t=>a.instance().isPlayingId.get()===t,customsounds:()=>a.instance().sounds.get(),isLoading:()=>a.instance().isLoading.get(),flexData:()=>({tabBar:a.instance().tabBar,data:a.instance().tabBarData.get()}),onTableScroll(){const t=a.instance();return function(e){if(e.offsetHeight+e.scrollTop<e.scrollHeight-100)return;const s=t.sounds.get();t.total.get()>s.length&&t.offset.set(t.offset.get()+50)}},onTableItemClick(){const t=a.instance();return function(e){t.tabBarData.set({sound:t.sounds.get().find(t=>t._id===e._id),onSuccess:t.onSuccessCallback}),t.tabBar.showGroup("custom-sounds-selected"),t.tabBar.open("admin-sound-info")}}}),a.adminSounds.onCreated((function(){const t=this;this.sounds=new n([]),this.offset=new n(0),this.total=new n(0),this.query=new n({}),this.isLoading=new n(!1),this.filter=new n(""),this.isPlayingId=new n(""),this.tabBar=new u,this.tabBar.showGroup(i.current().route.name),this.tabBarData=new n,l.addButton({groups:["custom-sounds","custom-sounds-selected"],id:"add-sound",i18nTitle:"Custom_Sound_Add",icon:"plus",template:"adminSoundEdit",order:1}),l.addButton({groups:["custom-sounds-selected"],id:"admin-sound-info",i18nTitle:"Custom_Sound_Info",icon:"customize",template:"adminSoundInfo",order:2}),this.onSuccessCallback=()=>(this.offset.set(0),this.loadSounds(this.query.get(),this.offset.get())),this.tabBarData.set({onSuccess:this.onSuccessCallback}),this.loadSounds=d.debounce(async(t,e)=>{this.isLoading.set(!0);const{sounds:s,total:n}=await f.v1.get("custom-sounds.list?count=".concat(50,"&offset=").concat(e,"&query=").concat(JSON.stringify(t)));this.total.set(n),0===e?this.sounds.set(s):this.sounds.set(this.sounds.get().concat(s)),this.isLoading.set(!1)},500),this.autorun(()=>{const t=this.filter.get()&&this.filter.get().trim(),e=this.offset.get();if(t){const s={$regex:t,$options:"i"};return this.loadSounds({name:s},e)}return this.loadSounds({},e)})})),a.adminSounds.onRendered(()=>o.afterFlush((function(){c.setFlex("adminFlex"),c.openFlex()}))),a.adminSounds.events({"keydown #sound-filter"(t){13===t.which&&(t.stopPropagation(),t.preventDefault())},"keyup #sound-filter"(t,e){t.stopPropagation(),t.preventDefault(),e.filter.set(t.currentTarget.value),e.offset.set(0)},"click .icon-play-circled"(t,e){t.preventDefault(),t.stopPropagation(),r.play(this._id);const s=document.getElementById(e.isPlayingId.get());s&&s.pause(),document.getElementById(this._id).onended=()=>{e.isPlayingId.set(""),this.onended=null},e.isPlayingId.set(this._id)},"click .icon-pause-circled"(t,e){t.preventDefault(),t.stopPropagation();const s=document.getElementById(this._id);s&&!s.paused&&s.pause(),e.isPlayingId.set("")},"click .icon-reset-circled"(t){t.preventDefault(),t.stopPropagation();const e=document.getElementById(this._id);e&&(e.currentTime=0)}})}

