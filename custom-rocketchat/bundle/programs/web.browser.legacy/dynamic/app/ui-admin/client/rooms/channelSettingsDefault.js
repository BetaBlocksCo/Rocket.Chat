function module(t,e,n){var i,a,o,r,u,c,s;n.link("meteor/meteor",{Meteor:function(t){i=t}},0),n.link("meteor/reactive-var",{ReactiveVar:function(t){a=t}},1),n.link("meteor/templating",{Template:function(t){o=t}},2),n.link("meteor/rocketchat:tap-i18n",{TAPi18n:function(t){r=t}},3),n.link("toastr",{default:function(t){u=t}},4),n.link("../../../utils",{t:function(t){c=t},handleError:function(t){s=t}},5),o.channelSettingsDefault.helpers({canMakeDefault:function(){var t=o.instance().room.get();return t&&"c"===t.t},editing:function(t){return o.instance().editing.get()===t},roomDefault:function(){return o.instance().isDefault.get()},isFavorite:function(){return o.instance().isFavorite.get()},defaultDescription:function(){var t={room:o.instance().room.get(),isDefault:o.instance().isDefault.get(),isFavorite:o.instance().isFavorite.get()},e=t.room,n=t.isDefault,i=t.isFavorite,a=c("False");return e&&n?(a=c("True"),i&&(a+=", "+c("Set_as_favorite")),a):a}}),o.channelSettingsDefault.events({"change input[name=default]":function(t,e){e.isDefault.set("true"===t.currentTarget.value)},"change input[name=favorite]":function(t,e){e.isFavorite.set(t.currentTarget.checked)},"click [data-edit]":function(t,e){t.preventDefault(),e.editing.set($(t.currentTarget).data("edit")),setTimeout((function(){e.$("input.editing").focus().select()}),100)},"click .cancel":function(t,e){t.preventDefault(),e.editing.set()},"click .save":function(t,e){t.preventDefault(),i.call("saveRoomSettings",e.room.get()._id,{default:e.isDefault.get(),favorite:{defaultValue:e.isDefault.get(),favorite:e.isFavorite.get()}},(function(t){if(t)return s(t);u.success(r.__("Room_type_changed_successfully"))})),e.onSuccess(),e.editing.set()}}),o.channelSettingsDefault.onCreated((function(){var t=this;this.editing=new a,this.isDefault=new a,this.isFavorite=new a,this.room=new a,this.onSuccess=o.currentData().onSuccess,this.autorun((function(){var e,n=o.currentData().room;t.isDefault.set(n&&n.default),t.isFavorite.set(n&&n.favorite&&n.default),t.room.set(n)}))}))}
