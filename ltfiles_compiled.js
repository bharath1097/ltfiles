if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.popup')) {
goog.provide('lt.plugins.ltfiles.popup');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
lt.plugins.ltfiles.popup.input_html = (function input_html(this$){var e__8296__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013))], null)], null));var seq__8668_8684 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"input-value","input-value",3916329248),lt.util.dom.val.call(null,me));
})], null)));var chunk__8669_8685 = null;var count__8670_8686 = 0;var i__8671_8687 = 0;while(true){
if((i__8671_8687 < count__8670_8686))
{var vec__8672_8688 = cljs.core._nth.call(null,chunk__8669_8685,i__8671_8687);var ev__8297__auto___8689 = cljs.core.nth.call(null,vec__8672_8688,0,null);var func__8298__auto___8690 = cljs.core.nth.call(null,vec__8672_8688,1,null);lt.util.dom.on.call(null,e__8296__auto__,ev__8297__auto___8689,func__8298__auto___8690);
{
var G__8691 = seq__8668_8684;
var G__8692 = chunk__8669_8685;
var G__8693 = count__8670_8686;
var G__8694 = (i__8671_8687 + 1);
seq__8668_8684 = G__8691;
chunk__8669_8685 = G__8692;
count__8670_8686 = G__8693;
i__8671_8687 = G__8694;
continue;
}
} else
{var temp__4092__auto___8695 = cljs.core.seq.call(null,seq__8668_8684);if(temp__4092__auto___8695)
{var seq__8668_8696__$1 = temp__4092__auto___8695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8668_8696__$1))
{var c__7561__auto___8697 = cljs.core.chunk_first.call(null,seq__8668_8696__$1);{
var G__8698 = cljs.core.chunk_rest.call(null,seq__8668_8696__$1);
var G__8699 = c__7561__auto___8697;
var G__8700 = cljs.core.count.call(null,c__7561__auto___8697);
var G__8701 = 0;
seq__8668_8684 = G__8698;
chunk__8669_8685 = G__8699;
count__8670_8686 = G__8700;
i__8671_8687 = G__8701;
continue;
}
} else
{var vec__8673_8702 = cljs.core.first.call(null,seq__8668_8696__$1);var ev__8297__auto___8703 = cljs.core.nth.call(null,vec__8673_8702,0,null);var func__8298__auto___8704 = cljs.core.nth.call(null,vec__8673_8702,1,null);lt.util.dom.on.call(null,e__8296__auto__,ev__8297__auto___8703,func__8298__auto___8704);
{
var G__8705 = cljs.core.next.call(null,seq__8668_8696__$1);
var G__8706 = null;
var G__8707 = 0;
var G__8708 = 0;
seq__8668_8684 = G__8705;
chunk__8669_8685 = G__8706;
count__8670_8686 = G__8707;
i__8671_8687 = G__8708;
continue;
}
}
} else
{}
}
break;
}
return e__8296__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.popup","basic-input","lt.plugins.ltfiles.popup/basic-input",1091340164),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-input","basic-input",3384203485),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){return lt.plugins.ltfiles.popup.input_html.call(null,this$);
}));
lt.plugins.ltfiles.popup.__GT_input = (function __GT_input(attrs){var G__8675 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.popup","basic-input","lt.plugins.ltfiles.popup/basic-input",1091340164));lt.object.merge_BANG_.call(null,G__8675,attrs);
return G__8675;
});
lt.plugins.ltfiles.popup.basic_input = lt.plugins.ltfiles.popup.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),""], null));
/**
* @param {...*} var_args
*/
lt.plugins.ltfiles.popup.input = (function() { 
var input__delegate = function (input_obj,action_fn,p__8676){var map__8678 = p__8676;var map__8678__$1 = ((cljs.core.seq_QMARK_.call(null,map__8678))?cljs.core.apply.call(null,cljs.core.hash_map,map__8678):map__8678);var opts = map__8678__$1;if(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(opts)))
{lt.object.merge_BANG_.call(null,input_obj,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)], null)));
} else
{}
return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__6813__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.ltfiles.popup.input_html.call(null,input_obj),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return action_fn.call(null,new cljs.core.Keyword(null,"input-value","input-value",3916329248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,input_obj)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null)], null)], null));
};
var input = function (input_obj,action_fn,var_args){
var p__8676 = null;if (arguments.length > 2) {
  p__8676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return input__delegate.call(this,input_obj,action_fn,p__8676);};
input.cljs$lang$maxFixedArity = 2;
input.cljs$lang$applyTo = (function (arglist__8709){
var input_obj = cljs.core.first(arglist__8709);
arglist__8709 = cljs.core.next(arglist__8709);
var action_fn = cljs.core.first(arglist__8709);
var p__8676 = cljs.core.rest(arglist__8709);
return input__delegate(input_obj,action_fn,p__8676);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* Display an info popup given a list of items to display.
* @param {...*} var_args
*/
lt.plugins.ltfiles.popup.info = (function() { 
var info__delegate = function (data,p__8680){var map__8682 = p__8680;var map__8682__$1 = ((cljs.core.seq_QMARK_.call(null,map__8682))?cljs.core.apply.call(null,cljs.core.hash_map,map__8682):map__8682);var opts = map__8682__$1;var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null),opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",1016933652),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (p1__8679_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",1013907695),p1__8679_SHARP_],null));
}),data)], null))], null));return lt.objs.popup.popup_BANG_.call(null,opts__$1);
};
var info = function (data,var_args){
var p__8680 = null;if (arguments.length > 1) {
  p__8680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return info__delegate.call(this,data,p__8680);};
info.cljs$lang$maxFixedArity = 1;
info.cljs$lang$applyTo = (function (arglist__8710){
var data = cljs.core.first(arglist__8710);
var p__8680 = cljs.core.rest(arglist__8710);
return info__delegate(data,p__8680);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.util')) {
goog.provide('lt.plugins.ltfiles.util');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
/**
* Returns current word given string and cursor position in string
*/
lt.plugins.ltfiles.util.current_word_STAR_ = (function current_word_STAR_(string,cursor){return [cljs.core.str(cljs.core.re_find.call(null,/\S+$/,cljs.core.subs.call(null,string,0,cursor))),cljs.core.str(cljs.core.re_find.call(null,/^\S+/,cljs.core.subs.call(null,string,cursor)))].join('');
});
/**
* Current word under cursor
*/
lt.plugins.ltfiles.util.current_word = (function current_word(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);return lt.plugins.ltfiles.util.current_word_STAR_.call(null,lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor)),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor));
} else
{return null;
}
});
/**
* Returns a line of the current file relative to the cursor. Returns current line by default
*/
lt.plugins.ltfiles.util.relative_line = (function() {
var relative_line = null;
var relative_line__0 = (function (){return relative_line.call(null,0);
});
var relative_line__1 = (function (offset){var ed = lt.objs.editor.pool.last_active.call(null);var line_num = (offset + new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)));return lt.objs.editor.line.call(null,ed,line_num);
});
relative_line = function(offset){
switch(arguments.length){
case 0:
return relative_line__0.call(this);
case 1:
return relative_line__1.call(this,offset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
relative_line.cljs$core$IFn$_invoke$arity$0 = relative_line__0;
relative_line.cljs$core$IFn$_invoke$arity$1 = relative_line__1;
return relative_line;
})()
;
/**
* CodeMirror object for current editor
*/
lt.plugins.ltfiles.util.current_ed = (function current_ed(){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.plugins.ltfiles.util.parent_QMARK_ = (function parent_QMARK_(parent_path,path){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(parent_path)].join('')),path);
});
lt.plugins.ltfiles.util.current_file = (function current_file(){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});
lt.plugins.ltfiles.util.file_folder = (function file_folder(file){return cljs.core.some.call(null,(function (p1__8758_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,p1__8758_SHARP_,file)))
{return p1__8758_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.ltfiles.util.current_folder = (function current_folder(){var file = lt.plugins.ltfiles.util.current_file.call(null);return cljs.core.some.call(null,(function (p1__8759_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,p1__8759_SHARP_,file)))
{return p1__8759_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.ltfiles.util.sh = (function sh(cmd){return require("child_process").exec(cmd,(function (err,stdout,stderr){if(cljs.core.seq.call(null,stdout))
{cljs.core.println.call(null,"STDOUT: ",stdout);
} else
{}
if(cljs.core.seq.call(null,stderr))
{return cljs.core.println.call(null,"STDERR: ",stderr);
} else
{return null;
}
}));
});
/**
* Platform-independent copy
*/
lt.plugins.ltfiles.util.copy = (function copy(text){return require("nw.gui").Clipboard.get().set(text,"text");
});
/**
* Execs a vec of commands - same format as a user.keymap vec
*/
lt.plugins.ltfiles.util.exec_commands = (function exec_commands(commands){var seq__8764 = cljs.core.seq.call(null,commands);var chunk__8765 = null;var count__8766 = 0;var i__8767 = 0;while(true){
if((i__8767 < count__8766))
{var c = cljs.core._nth.call(null,chunk__8765,i__8767);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8768 = seq__8764;
var G__8769 = chunk__8765;
var G__8770 = count__8766;
var G__8771 = (i__8767 + 1);
seq__8764 = G__8768;
chunk__8765 = G__8769;
count__8766 = G__8770;
i__8767 = G__8771;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8764);if(temp__4092__auto__)
{var seq__8764__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8764__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8764__$1);{
var G__8772 = cljs.core.chunk_rest.call(null,seq__8764__$1);
var G__8773 = c__7561__auto__;
var G__8774 = cljs.core.count.call(null,c__7561__auto__);
var G__8775 = 0;
seq__8764 = G__8772;
chunk__8765 = G__8773;
count__8766 = G__8774;
i__8767 = G__8775;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8764__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8776 = cljs.core.next.call(null,seq__8764__$1);
var G__8777 = null;
var G__8778 = 0;
var G__8779 = 0;
seq__8764 = G__8776;
chunk__8765 = G__8777;
count__8766 = G__8778;
i__8767 = G__8779;
continue;
}
}
} else
{return null;
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.selector')) {
goog.provide('lt.plugins.ltfiles.selector');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
lt.plugins.ltfiles.selector.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.selector","set-selected","lt.plugins.ltfiles.selector/set-selected",3788256082),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.selector.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.ltfiles.selector.selector = (function selector(opts){var G__8712 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8712,new cljs.core.Keyword("lt.plugins.ltfiles.selector","set-selected","lt.plugins.ltfiles.selector/set-selected",3788256082));
return G__8712;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.browse')) {
goog.provide('lt.plugins.ltfiles.browse');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
lt.plugins.ltfiles.browse.tab_open_current_url = (function tab_open_current_url(){var current_word = lt.plugins.ltfiles.util.current_word.call(null);var commands = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373),new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),current_word], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null);return lt.plugins.ltfiles.util.exec_commands.call(null,commands);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.tab-open-current-url","ltfiles.tab-open-current-url",2401991009),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens url under cursor in another tabset and browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.tab_open_current_url], null));
lt.plugins.ltfiles.browse.system_open_current_url = (function system_open_current_url(){return lt.objs.platform.open.call(null,lt.plugins.ltfiles.util.current_word.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.system-open-current-url","ltfiles.system-open-current-url",3961612393),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens url under cursor in system browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.system_open_current_url], null));
lt.plugins.ltfiles.browse.plugin_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949)], null));
lt.plugins.ltfiles.browse.system_open_plugin_changelog = (function system_open_plugin_changelog(plugin){return lt.objs.platform.open.call(null,[cljs.core.str(clojure.string.replace_first.call(null,new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(plugin),/\.git$/,"")),cljs.core.str("/compare/"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(plugin)),cljs.core.str("...master")].join(''));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.system-open-plugin-changelog","ltfiles.system-open-plugin-changelog",3115235984),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens changelog/diff of plugin",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.browse.plugin_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.system_open_plugin_changelog], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.keybindings')) {
goog.provide('lt.plugins.ltfiles.keybindings');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('goog.string');
goog.require('lt.plugins.ltfiles.popup');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.objs.keyboard');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.popup');
goog.require('lt.objs.keyboard');
goog.require('goog.string');
lt.plugins.ltfiles.keybindings.search_keybindings = (function search_keybindings(query,key_map){return cljs.core.filter.call(null,(function (p__8487){var vec__8488 = p__8487;var k = cljs.core.nth.call(null,vec__8488,0,null);var v = cljs.core.nth.call(null,vec__8488,1,null);return cljs.core.some.call(null,(function (p1__8484_SHARP_){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,query),[cljs.core.str(p1__8484_SHARP_)].join(''));
}),v);
}),key_map);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_ = (function find_command_keybindings_STAR_(query,key_map){var results = lt.plugins.ltfiles.keybindings.search_keybindings.call(null,query,key_map);cljs.core.println.call(null,"Matched",cljs.core.count.call(null,results),"keybindings:");
return cljs.core.prn.call(null,results);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings = (function find_command_keybindings(keymap){cljs.core.println.call(null,"Searching ",cljs.core.count.call(null,keymap),"keybindings...");
return lt.plugins.ltfiles.popup.input.call(null,lt.plugins.ltfiles.popup.basic_input,(function (p1__8489_SHARP_){return lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_.call(null,p1__8489_SHARP_,keymap);
}),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"regex",new cljs.core.Keyword(null,"header","header",4087600639),"Enter command regex");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-command-keybindings","ltfiles.find-command-keybindings",575437544),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds keybindings that use a command for the given regex",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.keybindings.find_command_keybindings,cljs.core.deref.call(null,lt.objs.keyboard.key_map))], null));
lt.plugins.ltfiles.keybindings.vim_map_keys = (function vim_map_keys(){var behaviors = cljs.core.get_in.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.objs.settings.user_behaviors_path)),"user.behaviors"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"app","app",1014001043)], null));var behaviors__$1 = cljs.core.some.call(null,((function (behaviors){
return (function (p1__8490_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__8490_SHARP_),new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)))
{return cljs.core.second.call(null,p1__8490_SHARP_);
} else
{return null;
}
});})(behaviors))
,behaviors);return behaviors__$1;
});
lt.plugins.ltfiles.keybindings.key_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p__8494){var vec__8495 = p__8494;var k = cljs.core.nth.call(null,vec__8495,0,null);var v = cljs.core.nth.call(null,vec__8495,1,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",1114250308),goog.string.htmlEscape([cljs.core.str(k),cljs.core.str(": "),cljs.core.str(v)].join('')),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"commands","commands",4706336250),v], null);
}),cljs.core.merge.call(null,cljs.core.deref.call(null,lt.objs.keyboard.key_map),lt.plugins.ltfiles.keybindings.vim_map_keys.call(null))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8492_SHARP_,p2__8493_SHARP_,p3__8491_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8491_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.keybinding-bar","ltfiles.keybinding-bar",2773746269),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searcn keybinding or command of keys",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.keybindings.key_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.prn], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.clojure')) {
goog.provide('lt.plugins.ltfiles.clojure');
goog.require('cljs.core');
goog.require('lt.objs.find');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.find');
lt.plugins.ltfiles.clojure.current_word = (function current_word(){return new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_symbol_at_cursor.call(null,lt.objs.editor.pool.last_active.call(null)));
});
lt.plugins.ltfiles.clojure.find_next_clojure_word = (function find_next_clojure_word(){var word = lt.plugins.ltfiles.clojure.current_word.call(null);lt.objs.find.set_val.call(null,lt.objs.find.bar,word);
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"search!","search!",2982232811),word);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-next-clojure-word","ltfiles.find-next-clojure-word",954390570),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds next clojure word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.clojure.find_next_clojure_word], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.search')) {
goog.provide('lt.plugins.ltfiles.search');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('lt.objs.search');
goog.require('lt.objs.search');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.ltfiles.clojure');
goog.require('clojure.string');
goog.require('lt.plugins.ltfiles.clojure');
goog.require('lt.object');
goog.require('lt.object');
goog.require('goog.string');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
cljs.core._add_method.call(null,lt.objs.search.location,"<file>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.ltfiles.util.current_file.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<folder>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.ltfiles.util.current_folder.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<plugins>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.lt_user_dir.call(null,"plugins")], null);
}));
lt.plugins.ltfiles.search.set_search = (function set_search(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.search","input.search",1599745982),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.ltfiles.search.set_location = (function set_location(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.loc","input.loc",2719736462),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.ltfiles.search.set_replace = (function set_replace(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.replace","input.replace",1121297410),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.ltfiles.search.search_current_folder = (function search_current_folder(){lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-folder","ltfiles.search-current-folder",1946899130),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current folder",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_folder], null));
lt.plugins.ltfiles.search.search_current_file = (function search_current_file(){lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<file>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-file","ltfiles.search-current-file",2829392456),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_file], null));
lt.plugins.ltfiles.search.search_current_file_with_current_word = (function search_current_file_with_current_word(){lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,lt.plugins.ltfiles.clojure.current_word.call(null));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<file>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-file-with-current-word","ltfiles.search-current-file-with-current-word",3403752640),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current file with current word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_file_with_current_word], null));
lt.plugins.ltfiles.search.search_current_folder_with_current_word = (function search_current_folder_with_current_word(){lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,lt.plugins.ltfiles.clojure.current_word.call(null));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-folder-with-current-word","ltfiles.search-current-folder-with-current-word",2752046258),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current folder with current word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_folder_with_current_word], null));
lt.plugins.ltfiles.search.search_current_folder_for_fn_usage = (function search_current_folder_for_fn_usage(){lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,clojure.string.replace_first.call(null,"/\\((\\S+\\/)?%s\\s+/","%s",goog.string.regExpEscape(lt.plugins.ltfiles.clojure.current_word.call(null))));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-folder-for-fn-usage","ltfiles.search-current-folder-for-fn-usage",3998285495),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current folder for fn usage",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_folder_for_fn_usage], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles')) {
goog.provide('lt.plugins.ltfiles');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.settings');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.objs.metrics');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.bottombar');
goog.require('lt.objs.settings');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.metrics');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.bottombar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
cljs.core._STAR_print_level_STAR_ = 5;
/**
* Sets line number first time this is called and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_line_numbers = (function toggle_line_numbers(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var show_line_numbers = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__8228_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),p1__8228_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)));var line_behavior = (cljs.core.truth_(show_line_numbers)?new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738):new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131));var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null),cljs.core.vec.call(null,cljs.core.cons.call(null,line_behavior,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738),null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-line-numbers","ltfiles.toggle-line-numbers",4692667453),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_line_numbers], null));
/**
* Disables stripping whitespace on first call and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_strip_whitespace = (function toggle_strip_whitespace(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var strip_whitespace = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__8229_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__8229_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)));var add_behavior_fn = (cljs.core.truth_(strip_whitespace)?cljs.core.identity:((function (ws_behavior,strip_whitespace){
return (function (p1__8230_SHARP_){return cljs.core.cons.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__8230_SHARP_);
});})(ws_behavior,strip_whitespace))
);var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null),cljs.core.vec.call(null,add_behavior_fn.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
return setTimeout((function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Stripping whitespace on save "),cljs.core.str((cljs.core.truth_(strip_whitespace)?"enabled.":"disabled."))].join(''));
}),500);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-strip-whitespace","ltfiles.toggle-strip-whitespace",4020740638),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles stripping whitespace on save",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_strip_whitespace], null));
lt.plugins.ltfiles.open_console_log_file = (function open_console_log_file(){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"logs"),[cljs.core.str("window"),cljs.core.str(lt.objs.app.window_number.call(null)),cljs.core.str(".log")].join('')));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.open-console-log-file","ltfiles.open-console-log-file",4713561073),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: open current console log as an editable/searchable file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.open_console_log_file], null));
lt.plugins.ltfiles.rotate_console = (function rotate_console(){if(cljs.core.truth_(lt.objs.bottombar.active_QMARK_.call(null,lt.objs.console.console)))
{return lt.plugins.ltfiles.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console.hide","console.hide",1651368683),new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373),new cljs.core.Keyword(null,"console-tab","console-tab",3389753745),new cljs.core.Keyword(null,"console.show","console.show",1651695782),new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630)], null));
} else
{return lt.plugins.ltfiles.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630),new cljs.core.Keyword(null,"ltfiles.smart-tab-close","ltfiles.smart-tab-close",1986819119),new cljs.core.Keyword(null,"toggle-console","toggle-console",4454540112),new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630)], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.rotate-console","ltfiles.rotate-console",609699894),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Rotates open console between bottombar and another tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.rotate_console], null));
lt.plugins.ltfiles.plugin_name = "ltfiles";
lt.plugins.ltfiles.save_plugins = (function save_plugins(){var personal_plugins_file = lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"plugins"),lt.plugins.ltfiles.plugin_name,"plugin.edn");var deps = ((function (personal_plugins_file){
return (function (p1__8231_SHARP_){return cljs.core.dissoc.call(null,p1__8231_SHARP_,lt.plugins.ltfiles.plugin_name);
});})(personal_plugins_file))
.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266)),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))))))));var plugin_body = cljs.core.pr_str.call(null,cljs.core.assoc.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,personal_plugins_file)),personal_plugins_file),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),deps));lt.objs.files.save.call(null,personal_plugins_file,clojure.string.replace.call(null,plugin_body,/(\"\s*,|\{|\},)/,(function (p1__8232_SHARP_){return [cljs.core.str(p1__8232_SHARP_),cljs.core.str("\n")].join('');
})));
return lt.objs.notifos.set_msg_BANG_.call(null,"Plugins saved to ",personal_plugins_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.save-plugins","ltfiles.save-plugins",2609342561),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Save plugins to :dependencies of personal plugin",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.save_plugins], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.add-plugins-folder","ltfiles.add-plugins-folder",3510706104),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Add plugins folder to current workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),lt.objs.files.lt_user_dir.call(null,"plugins"));
})], null));
lt.plugins.ltfiles.refresh_current_folder = (function refresh_current_folder(){var temp__4090__auto__ = (function (){var folder = lt.plugins.ltfiles.util.current_folder.call(null);var folder__$1 = cljs.core.some.call(null,((function (folder){
return (function (p1__8233_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8233_SHARP_)),folder))
{return p1__8233_SHARP_;
} else
{return null;
}
});})(folder))
,lt.object.instances_by_type.call(null,new cljs.core.Keyword("lt.objs.sidebar.workspace","workspace.folder","lt.objs.sidebar.workspace/workspace.folder",1951235275)));return folder__$1;
})();if(cljs.core.truth_(temp__4090__auto__))
{var ws_folder = temp__4090__auto__;lt.object.raise.call(null,ws_folder,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.notifos.set_msg_BANG_.call(null,"Current workspace folder refreshed.");
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No workspace folder found to refresh!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.refresh-current-workspace-folder","ltfiles.refresh-current-workspace-folder",1545038013),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Refreshes current workspace folder",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.refresh_current_folder], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.print-current-file","ltfiles.print-current-file",586020417),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Print current file path",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Current path is "),cljs.core.str(lt.plugins.ltfiles.util.current_file.call(null))].join(''));
})], null));
lt.plugins.ltfiles.open_path = (function open_path(obj,path){return lt.objs.document.open.call(null,path,(function (doc){var type = lt.objs.files.path__GT_type.call(null,path);var ed = lt.objs.editor.pool.create.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1014003882),doc,new cljs.core.Keyword(null,"line-ending","line-ending",4015468690),new cljs.core.Keyword(null,"line-ending","line-ending",4015468690).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,doc))], null),lt.objs.opener.path__GT_info.call(null,path)));lt.objs.metrics.capture_BANG_.call(null,new cljs.core.Keyword(null,"editor.open","editor.open",4270591389),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),(function (){var or__6813__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(type);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return lt.objs.files.ext.call(null,path);
}
})(),new cljs.core.Keyword(null,"lines","lines",1116881521),lt.objs.editor.last_line.call(null,ed)], null));
lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null));
lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"open","open",1017321916),ed);
lt.objs.tabs.add_BANG_.call(null,ed);
return lt.objs.tabs.active_BANG_.call(null,ed);
}));
});
lt.plugins.ltfiles.open_current_file = (function open_current_file(){var current_file = lt.plugins.ltfiles.util.current_file.call(null);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
return lt.plugins.ltfiles.open_path.call(null,lt.objs.opener.opener,current_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vertical-split-current-file","ltfiles.vertical-split-current-file",3238753485),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: split current file vertically i.e. open in another tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.open_current_file], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.developer')) {
goog.provide('lt.plugins.ltfiles.developer');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.clients.local');
goog.require('goog.string');
goog.require('lt.objs.search');
goog.require('lt.objs.context');
goog.require('lt.plugins.ltfiles.search');
goog.require('lt.objs.search');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.plugins.aleph');
goog.require('lt.plugins.aleph');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.object');
goog.require('lt.object');
goog.require('goog.string');
goog.require('lt.objs.clients.local');
goog.require('lt.plugins.ltfiles.search');
goog.require('lt.objs.command');
lt.plugins.ltfiles.developer.show_and_focus_filter_list = (function show_and_focus_filter_list(flist){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"aleph.browse","aleph.browse",2561850968));
return lt.util.dom.$.call(null,new cljs.core.Keyword(null,".search",".search",2278031048),lt.object.__GT_content.call(null,flist)).focus();
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.behavior-bar","ltfiles.behavior-bar",4043064105),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search behaviors in aleph",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.developer.show_and_focus_filter_list,lt.plugins.aleph.b_list)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.object-bar","ltfiles.object-bar",1253888342),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search objects in aleph",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.developer.show_and_focus_filter_list,lt.plugins.aleph.o_list)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.tag-bar","ltfiles.tag-bar",3352549843),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search tags in aleph",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.developer.show_and_focus_filter_list,lt.plugins.aleph.t_list)], null));
lt.plugins.ltfiles.developer.cmd_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),cljs.core.map.call(null,(function (p1__8414_SHARP_){return cljs.core.assoc.call(null,p1__8414_SHARP_,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__8414_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__8414_SHARP_))].join(''));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.command.manager)))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"command or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8416_SHARP_,p2__8417_SHARP_,p3__8415_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8415_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.commandbar","ltfiles.commandbar",972376505),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: executes a command by its id or desc",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (cmd){return new cljs.core.Keyword(null,"exec","exec",1017031683).cljs$core$IFn$_invoke$arity$1(cmd).call(null);
})], null));
lt.plugins.ltfiles.developer.__BEH__open_first_search_result = (function __BEH__open_first_search_result(this$,v){lt.object.rem_behavior_BANG_.call(null,lt.objs.search.searcher,new cljs.core.Keyword("lt.plugins.ltfiles.developer","open-first-search-result","lt.plugins.ltfiles.developer/open-first-search-result",2623129376));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.next","searcher.next",3418881118));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.developer","open-first-search-result","lt.plugins.ltfiles.developer/open-first-search-result",2623129376),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.developer.__BEH__open_first_search_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done-searching","done-searching",1230467105),null], null), null));
lt.plugins.ltfiles.developer.jump_to_first_result = (function jump_to_first_result(__GT_search,selection){lt.object.add_behavior_BANG_.call(null,lt.objs.search.searcher,new cljs.core.Keyword("lt.plugins.ltfiles.developer","open-first-search-result","lt.plugins.ltfiles.developer/open-first-search-result",2623129376));
lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,__GT_search.call(null,selection));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<workspace>");
lt.plugins.ltfiles.search.set_replace.call(null,lt.objs.search.searcher,null);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.plugins.ltfiles.developer.jump_to_command = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__8418_SHARP_){return [cljs.core.str("/:command\\s+"),cljs.core.str(goog.string.regExpEscape(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__8418_SHARP_))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-command","ltfiles.jump-to-command",2538981995),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen command",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_command], null));
lt.plugins.ltfiles.developer.behavior_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),cljs.core.map.call(null,(function (p1__8419_SHARP_){return cljs.core.assoc.call(null,cljs.core.select_keys.call(null,p1__8419_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"desc","desc",1016984067)], null)),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8419_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__8419_SHARP_))].join(''));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"name or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8421_SHARP_,p2__8422_SHARP_,p3__8420_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8420_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltfiles.developer.jump_to_behavior = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__8423_SHARP_){return [cljs.core.str("/behavior\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8423_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-behavior","ltfiles.jump-to-behavior",3160122326),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen behavior",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.behavior_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_behavior], null));
lt.plugins.ltfiles.developer.object_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p1__8424_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"index","index",1114250308)],[p1__8424_SHARP_,[cljs.core.str(p1__8424_SHARP_)].join('')]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.object_defs))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"object"], null));
lt.plugins.ltfiles.developer.jump_to_object = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__8425_SHARP_){return [cljs.core.str("/object\\*\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8425_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-object","ltfiles.jump-to-object",3195662659),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen object definition",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.object_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_object], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.connect-to-lt-ui","ltfiles.connect-to-lt-ui",4411103803),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Connect to LT UI via a keystroke",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.clients.local.init], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.print-context","ltfiles.print-context",2277396546),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Print context",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return cljs.core.prn.call(null,lt.objs.context.current.call(null));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.vim')) {
goog.provide('lt.plugins.ltfiles.vim');
goog.require('cljs.core');
goog.require('lt.plugins.vim');
goog.require('clojure.string');
goog.require('lt.plugins.ltfiles.popup');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.plugins.vim');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.editor');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.popup');
lt.plugins.ltfiles.vim.last_selection = null;
lt.plugins.ltfiles.vim.visual_mode_with_history = (function visual_mode_with_history(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{lt.plugins.ltfiles.vim.last_selection = lt.objs.editor.selection_bounds.call(null,ed);
} else
{}
return CodeMirror.Vim.handleKey(lt.objs.editor.__GT_cm_ed.call(null,ed),"v");
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-visual-mode","ltfiles.vim-visual-mode",1069536336),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: vim visual mode with history",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.visual_mode_with_history], null));
lt.plugins.ltfiles.vim.vim_reselect_visual = (function vim_reselect_visual(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.ltfiles.vim.last_selection))
{return lt.objs.editor.set_selection.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.vim.last_selection),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.vim.last_selection));
} else
{return null;
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-reselect-visual","ltfiles.vim-reselect-visual",1606199070),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: reselects last visual mode turned off by :ltfiles.vim-visual-mode",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_reselect_visual], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-comment-selection","ltfiles.toggle-comment-selection",4212492278),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Toggle comment line(s)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,cur,"start");var vec__8812 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,cur))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,lt.objs.editor.__GT_cursor.call(null,cur,"end")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,cursor], null));var start = cljs.core.nth.call(null,vec__8812,0,null);var end = cljs.core.nth.call(null,vec__8812,1,null);if(cljs.core.truth_(lt.objs.editor.uncomment.call(null,cur,start,end)))
{return null;
} else
{return lt.objs.editor.line_comment.call(null,cur,cursor,lt.objs.editor.__GT_cursor.call(null,cur,"end"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",4124632094),true], null));
}
} else
{return null;
}
})], null));
/**
* Turns off visual mode, v or V, after comment operation
*/
lt.plugins.ltfiles.vim.vim_toggle_comment_selection = (function vim_toggle_comment_selection(){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.toggle-comment-selection","ltfiles.toggle-comment-selection",4212492278));
if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null))))
{if(cljs.core.truth_(lt.plugins.ltfiles.util.current_ed.call(null).state.vim.visualLine))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"V");
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"v");
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-toggle-comment-selection","ltfiles.vim-toggle-comment-selection",2683966153),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggle comment selection that also handles visual mode",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_toggle_comment_selection], null));
lt.plugins.ltfiles.vim.set_vim_yank = (function set_vim_yank(text){return CodeMirror.Vim.getRegisterController.call(null).unamedRegister.set(text,true);
});
lt.plugins.ltfiles.vim.replace_prefix_whitespace_for_latest_yank = (function replace_prefix_whitespace_for_latest_yank(new_wspace){return lt.plugins.ltfiles.vim.set_vim_yank.call(null,[cljs.core.str(new_wspace),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/^\s*(.*)/,CodeMirror.Vim.getRegisterController.call(null).unamedRegister.text))),cljs.core.str("\n")].join(''));
});
lt.plugins.ltfiles.vim.vim_indent_paste_above = (function vim_indent_paste_above(){lt.plugins.ltfiles.vim.replace_prefix_whitespace_for_latest_yank.call(null,cljs.core.re_find.call(null,/^\s*/,lt.plugins.ltfiles.util.relative_line.call(null)));
return CodeMirror.Vim.handleKey(lt.plugins.ltfiles.util.current_ed.call(null),"P");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-indent-paste-above","ltfiles.vim-indent-paste-above",4373301030),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: P current yank at current indent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_indent_paste_above], null));
lt.plugins.ltfiles.vim.vim_indent_paste_below = (function vim_indent_paste_below(){lt.plugins.ltfiles.vim.replace_prefix_whitespace_for_latest_yank.call(null,cljs.core.re_find.call(null,/^\s*/,lt.plugins.ltfiles.util.relative_line.call(null)));
return CodeMirror.Vim.handleKey(lt.plugins.ltfiles.util.current_ed.call(null),"p");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-indent-paste-below","ltfiles.vim-indent-paste-below",4374310842),new cljs.core.Keyword(null,"desc","desc",1016984067),"p current yank at current indent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_indent_paste_below], null));
lt.plugins.ltfiles.vim.show_registers = (function show_registers(){return lt.plugins.ltfiles.popup.info.call(null,cljs.core.map.call(null,(function (p__8816){var vec__8817 = p__8816;var k = cljs.core.nth.call(null,vec__8817,0,null);var v = cljs.core.nth.call(null,vec__8817,1,null);return [cljs.core.str(k),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get.call(null,v,"text")))].join('');
}),cljs.core.remove.call(null,(function (p1__8813_SHARP_){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\"",null,"-",null], null), null).call(null,cljs.core.first.call(null,p1__8813_SHARP_));
}),cljs.core.js__GT_clj.call(null,CodeMirror.Vim.getRegisterController.call(null).registers))),new cljs.core.Keyword(null,"header","header",4087600639),"Registers");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.show-registers","ltfiles.show-registers",1875818673),new cljs.core.Keyword(null,"desc","desc",1016984067),"show vim's registers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.show_registers], null));
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"ltexec_clj",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return lt.plugins.ltfiles.util.exec_commands.call(null,cljs.reader.read_string.call(null,info.argString));
})], null));
lt.plugins.ltfiles.vim.smart_join_line = (function smart_join_line(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);var string = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor));var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor);var joined_line = [cljs.core.str(clojure.string.replace_first.call(null,cljs.core.subs.call(null,string,0,ch),/\s*$/,"")),cljs.core.str(clojure.string.replace_first.call(null,cljs.core.subs.call(null,string,ch),/^\s*/,""))].join('');return lt.objs.editor.set_line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor),joined_line);
} else
{return null;
}
});
lt.plugins.ltfiles.vim.smart_join = (function smart_join(){CodeMirror.Vim.handleKey(lt.plugins.ltfiles.util.current_ed.call(null),"J");
return lt.plugins.ltfiles.vim.smart_join_line.call(null);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.smart-join","ltfiles.smart-join",2630849407),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: a smarter paredit-like J(oin)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.smart_join], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.tab')) {
goog.provide('lt.plugins.ltfiles.tab');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
lt.plugins.ltfiles.tab.smart_tab_close = (function smart_tab_close(){var ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var tabs = (function (){var G__8714 = ts;var G__8714__$1 = (((G__8714 == null))?null:cljs.core.deref.call(null,G__8714));var G__8714__$2 = (((G__8714__$1 == null))?null:new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(G__8714__$1));var G__8714__$3 = (((G__8714__$2 == null))?null:cljs.core.count.call(null,G__8714__$2));return G__8714__$3;
})();lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
if(cljs.core._EQ_.call(null,1,tabs))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.smart-tab-close","ltfiles.smart-tab-close",1986819119),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: closes a tab and tabset if last tab",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.smart_tab_close], null));
lt.plugins.ltfiles.tab.close_current_tabs = (function close_current_tabs(){var ts_8736 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8719_8737 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8736)));var chunk__8720_8738 = null;var count__8721_8739 = 0;var i__8722_8740 = 0;while(true){
if((i__8722_8740 < count__8721_8739))
{var tab_8741 = cljs.core._nth.call(null,chunk__8720_8738,i__8722_8740);lt.object.raise.call(null,tab_8741,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8742 = seq__8719_8737;
var G__8743 = chunk__8720_8738;
var G__8744 = count__8721_8739;
var G__8745 = (i__8722_8740 + 1);
seq__8719_8737 = G__8742;
chunk__8720_8738 = G__8743;
count__8721_8739 = G__8744;
i__8722_8740 = G__8745;
continue;
}
} else
{var temp__4092__auto___8746 = cljs.core.seq.call(null,seq__8719_8737);if(temp__4092__auto___8746)
{var seq__8719_8747__$1 = temp__4092__auto___8746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8719_8747__$1))
{var c__7561__auto___8748 = cljs.core.chunk_first.call(null,seq__8719_8747__$1);{
var G__8749 = cljs.core.chunk_rest.call(null,seq__8719_8747__$1);
var G__8750 = c__7561__auto___8748;
var G__8751 = cljs.core.count.call(null,c__7561__auto___8748);
var G__8752 = 0;
seq__8719_8737 = G__8749;
chunk__8720_8738 = G__8750;
count__8721_8739 = G__8751;
i__8722_8740 = G__8752;
continue;
}
} else
{var tab_8753 = cljs.core.first.call(null,seq__8719_8747__$1);lt.object.raise.call(null,tab_8753,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8754 = cljs.core.next.call(null,seq__8719_8747__$1);
var G__8755 = null;
var G__8756 = 0;
var G__8757 = 0;
seq__8719_8737 = G__8754;
chunk__8720_8738 = G__8755;
count__8721_8739 = G__8756;
i__8722_8740 = G__8757;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.close-current-tabs","ltfiles.close-current-tabs",4601543384),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: closes a tabset completely - including all of its tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.close_current_tabs], null));
lt.plugins.ltfiles.tab.ensure_and_focus_second_tabset = (function ensure_and_focus_second_tabset(){if((cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi))) < 2))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Ensure second tabset and focus it",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.ensure_and_focus_second_tabset], null));
lt.plugins.ltfiles.tab.opened_files = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
* Same relative path as navigate/populate-bg
*/
lt.plugins.ltfiles.tab.relative_path = (function relative_path(path){var folder_parent = lt.objs.files.parent.call(null,lt.plugins.ltfiles.util.file_folder.call(null,path));return cljs.core.subs.call(null,path,(cljs.core.count.call(null,folder_parent) + 1));
});
lt.plugins.ltfiles.tab.__BEH__track_open_files = (function __BEH__track_open_files(this$,ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.ltfiles.tab.opened_files,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full","full",1017058817),path,new cljs.core.Keyword(null,"rel","rel",1014017035),lt.plugins.ltfiles.tab.relative_path.call(null,path)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.tab","track-open-files","lt.plugins.ltfiles.tab/track-open-files",2307634398),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.tab.__BEH__track_open_files,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.objs.opener.opener,new cljs.core.Keyword("lt.plugins.ltfiles.tab","track-open-files","lt.plugins.ltfiles.tab/track-open-files",2307634398));
lt.plugins.ltfiles.tab.file_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.deref.call(null,lt.plugins.ltfiles.tab.opened_files);
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8723_SHARP_,p2__8725_SHARP_,p3__8724_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(lt.objs.files.basename.call(null,p1__8723_SHARP_)),cljs.core.str("</p><p class='binding'>"),cljs.core.str(p3__8724_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.open-buffers","ltfiles.open-buffers",1570712769),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Opens any file that has been opened since LT started",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.tab.file_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (file){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"full","full",1017058817).cljs$core$IFn$_invoke$arity$1(file));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.paredit')) {
goog.provide('lt.plugins.ltfiles.paredit');
goog.require('cljs.core');
goog.require('lt.plugins.paredit_plus');
goog.require('lt.plugins.paredit_plus');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.ltfiles.paredit.newline_before_pair_close = (function newline_before_pair_close(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.operation.call(null,ed,(function (){lt.plugins.paredit_plus.move_cursor_along_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623),new cljs.core.Keyword(null,"before","before",3915985649));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.new-line-indent","editor.new-line-indent",3360183529));
}));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.paredit-newline-before-pair-close","ltfiles.paredit-newline-before-pair-close",1076254315),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Newline before a pair close",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.paredit.newline_before_pair_close], null));
lt.plugins.ltfiles.paredit.paredit_kill_backword = (function paredit_kill_backword(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__8651 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__8651,0,null);var loc = cljs.core.nth.call(null,vec__8651,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,cljs.core.update_in.call(null,mloc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc),l,"");
}));
} else
{return null;
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.paredit-kill-backword","ltfiles.paredit-kill-backword",913609361),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: kill backword up to paredit parent",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.ltfiles.paredit.paredit_kill_backword.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.inline-result')) {
goog.provide('lt.plugins.ltfiles.inline_result');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Finds the inline widget for the current line. If lines are selected, uses the last line
* of a selection (useful for eval).
*/
lt.plugins.ltfiles.inline_result.current_inline_widget = (function current_inline_widget(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.selection_bounds.call(null,ed))):new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)));return cljs.core.some.call(null,(function (p__8449){var vec__8450 = p__8449;var vec__8451 = cljs.core.nth.call(null,vec__8450,0,null);var l = cljs.core.nth.call(null,vec__8451,0,null);var t = cljs.core.nth.call(null,vec__8451,1,null);var widget = cljs.core.nth.call(null,vec__8450,1,null);if((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"inline","inline",4124874251))) && (cljs.core._EQ_.call(null,current_line,lt.objs.editor.lh__GT_line.call(null,ed,l))))
{return widget;
} else
{return null;
}
}),new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.ltfiles.inline_result.toggle_current_inline_result = (function toggle_current_inline_result(){var temp__4092__auto__ = lt.plugins.ltfiles.inline_result.current_inline_widget.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var inline = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline))))
{return lt.object.raise.call(null,inline,new cljs.core.Keyword(null,"double-click","double-click",956590078));
} else
{return lt.object.raise.call(null,inline,new cljs.core.Keyword(null,"click","click",1108654330));
}
} else
{return null;
}
});
lt.plugins.ltfiles.inline_result.copy_current_inline_result = (function copy_current_inline_result(){var temp__4092__auto__ = lt.plugins.ltfiles.inline_result.current_inline_widget.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var inline = temp__4092__auto__;return lt.plugins.ltfiles.util.copy.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline)));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-current-inline-result","ltfiles.toggle-current-inline-result",1523406293),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.inline_result.toggle_current_inline_result], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.copy-current-inline-result","ltfiles.copy-current-inline-result",3799934710),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: copies current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.inline_result.copy_current_inline_result], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.outliner')) {
goog.provide('lt.plugins.ltfiles.outliner');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
/**
* Like editor/fold-code but handles all args to .foldCode and doesn't assume current cursor
*/
lt.plugins.ltfiles.outliner.fold_code = (function fold_code(ed,pos,opts,force){return lt.objs.editor.__GT_cm_ed.call(null,ed).foldCode(pos,opts,force);
});
lt.plugins.ltfiles.outliner.fold_all = (function() {
var fold_all = null;
var fold_all__2 = (function (ed,condition){return fold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var fold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__13160 = cljs.core.seq.call(null,lines);var chunk__13161 = null;var count__13162 = 0;var i__13163 = 0;while(true){
if((i__13163 < count__13162))
{var line = cljs.core._nth.call(null,chunk__13161,i__13163);if(cljs.core.truth_(condition.call(null,lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line))))
{lt.plugins.ltfiles.outliner.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__13193 = seq__13160;
var G__13194 = chunk__13161;
var G__13195 = count__13162;
var G__13196 = (i__13163 + 1);
seq__13160 = G__13193;
chunk__13161 = G__13194;
count__13162 = G__13195;
i__13163 = G__13196;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13160);if(temp__4092__auto__)
{var seq__13160__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13160__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__13160__$1);{
var G__13197 = cljs.core.chunk_rest.call(null,seq__13160__$1);
var G__13198 = c__7561__auto__;
var G__13199 = cljs.core.count.call(null,c__7561__auto__);
var G__13200 = 0;
seq__13160 = G__13197;
chunk__13161 = G__13198;
count__13162 = G__13199;
i__13163 = G__13200;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__13160__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line))))
{lt.plugins.ltfiles.outliner.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__13201 = cljs.core.next.call(null,seq__13160__$1);
var G__13202 = null;
var G__13203 = 0;
var G__13204 = 0;
seq__13160 = G__13201;
chunk__13161 = G__13202;
count__13162 = G__13203;
i__13163 = G__13204;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
fold_all = function(ed,condition,lines){
switch(arguments.length){
case 2:
return fold_all__2.call(this,ed,condition);
case 3:
return fold_all__3.call(this,ed,condition,lines);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fold_all.cljs$core$IFn$_invoke$arity$2 = fold_all__2;
fold_all.cljs$core$IFn$_invoke$arity$3 = fold_all__3;
return fold_all;
})()
;
lt.plugins.ltfiles.outliner.unfold_all = (function() {
var unfold_all = null;
var unfold_all__2 = (function (ed,condition){return unfold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var unfold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__13168 = cljs.core.seq.call(null,lines);var chunk__13169 = null;var count__13170 = 0;var i__13171 = 0;while(true){
if((i__13171 < count__13170))
{var line = cljs.core._nth.call(null,chunk__13169,i__13171);if(cljs.core.truth_(condition.call(null,lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line))))
{lt.plugins.ltfiles.outliner.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__13205 = seq__13168;
var G__13206 = chunk__13169;
var G__13207 = count__13170;
var G__13208 = (i__13171 + 1);
seq__13168 = G__13205;
chunk__13169 = G__13206;
count__13170 = G__13207;
i__13171 = G__13208;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13168);if(temp__4092__auto__)
{var seq__13168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13168__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__13168__$1);{
var G__13209 = cljs.core.chunk_rest.call(null,seq__13168__$1);
var G__13210 = c__7561__auto__;
var G__13211 = cljs.core.count.call(null,c__7561__auto__);
var G__13212 = 0;
seq__13168 = G__13209;
chunk__13169 = G__13210;
count__13170 = G__13211;
i__13171 = G__13212;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__13168__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line))))
{lt.plugins.ltfiles.outliner.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__13213 = cljs.core.next.call(null,seq__13168__$1);
var G__13214 = null;
var G__13215 = 0;
var G__13216 = 0;
seq__13168 = G__13213;
chunk__13169 = G__13214;
count__13170 = G__13215;
i__13171 = G__13216;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
unfold_all = function(ed,condition,lines){
switch(arguments.length){
case 2:
return unfold_all__2.call(this,ed,condition);
case 3:
return unfold_all__3.call(this,ed,condition,lines);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unfold_all.cljs$core$IFn$_invoke$arity$2 = unfold_all__2;
unfold_all.cljs$core$IFn$_invoke$arity$3 = unfold_all__3;
return unfold_all;
})()
;
lt.plugins.ltfiles.outliner.line_indent = (function line_indent(ed,line){return CodeMirror.countColumn(lt.objs.editor.line.call(null,ed,line),null,lt.objs.editor.option.call(null,ed,"tabSize"));
});
lt.plugins.ltfiles.outliner.find_first_folded_line = (function find_first_folded_line(ed,lines){return cljs.core.some.call(null,(function (m){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13174_SHARP_){return p1__13174_SHARP_.__isFold;
}),cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(m)))))
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(m);
} else
{return null;
}
}),cljs.core.drop_while.call(null,(function (p1__13173_SHARP_){return cljs.core.empty_QMARK_.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(p1__13173_SHARP_)));
}),cljs.core.map.call(null,(function (p1__13172_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"marks","marks",1117570744)],[p1__13172_SHARP_,lt.objs.editor.__GT_cm_ed.call(null,ed).findMarksAt({"ch": 0, "line": p1__13172_SHARP_})]);
}),lines)));
});
lt.plugins.ltfiles.outliner.find_first_sibling = (function find_first_sibling(ed,lines,indent){return cljs.core.some.call(null,(function (p1__13175_SHARP_){if(cljs.core._EQ_.call(null,indent,lt.plugins.ltfiles.outliner.line_indent.call(null,ed,p1__13175_SHARP_)))
{return p1__13175_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.ltfiles.outliner.find_parent = (function find_parent(ed,lines,indent){return cljs.core.some.call(null,(function (p1__13176_SHARP_){if((indent > lt.plugins.ltfiles.outliner.line_indent.call(null,ed,p1__13176_SHARP_)))
{return p1__13176_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.ltfiles.outliner.find_first_non_child = (function find_first_non_child(ed,lines,indent){return cljs.core.some.call(null,(function (p1__13177_SHARP_){if((indent >= lt.plugins.ltfiles.outliner.line_indent.call(null,ed,p1__13177_SHARP_)))
{return p1__13177_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.ltfiles.outliner.next_non_child_line = (function next_non_child_line(ed,line){return lt.plugins.ltfiles.outliner.find_first_non_child.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line));
});
/**
* Ensure a line is returned i.e. return line past end-line if on last tree
*/
lt.plugins.ltfiles.outliner.safe_next_non_child_line = (function safe_next_non_child_line(ed,current_line){var or__6813__auto__ = lt.plugins.ltfiles.outliner.next_non_child_line.call(null,ed,current_line);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.fold-all","ltfiles.fold-all",1600442982),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: fold the whole file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.ltfiles.outliner.fold_all.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.constantly.call(null,true));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.unfold-all","ltfiles.unfold-all",2006871103),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: unfold the whole file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.ltfiles.outliner.unfold_all.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.constantly.call(null,true));
})], null));
var seq__13180_13217 = cljs.core.seq.call(null,cljs.core.range.call(null,1,10));var chunk__13181_13218 = null;var count__13182_13219 = 0;var i__13183_13220 = 0;while(true){
if((i__13183_13220 < count__13182_13219))
{var num_13221 = cljs.core._nth.call(null,chunk__13181_13218,i__13183_13220);lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("ltfiles.fold-level-"),cljs.core.str(num_13221)].join('')),new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str("ltfiles: fold level "),cljs.core.str(num_13221),cljs.core.str(" nodes")].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),((function (seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,num_13221){
return (function (){var tabsize = lt.objs.editor.option.call(null,lt.objs.editor.pool.last_active.call(null),"tabSize");var indent = ((num_13221 - 1) * tabsize);var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.ltfiles.outliner.unfold_all.call(null,ed,((function (seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13221){
return (function (p1__13178_SHARP_){return (p1__13178_SHARP_ < indent);
});})(seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13221))
);
return lt.plugins.ltfiles.outliner.fold_all.call(null,ed,((function (seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13221){
return (function (p1__13179_SHARP_){return cljs.core._EQ_.call(null,p1__13179_SHARP_,indent);
});})(seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13221))
);
});})(seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,num_13221))
], null));
{
var G__13222 = seq__13180_13217;
var G__13223 = chunk__13181_13218;
var G__13224 = count__13182_13219;
var G__13225 = (i__13183_13220 + 1);
seq__13180_13217 = G__13222;
chunk__13181_13218 = G__13223;
count__13182_13219 = G__13224;
i__13183_13220 = G__13225;
continue;
}
} else
{var temp__4092__auto___13226 = cljs.core.seq.call(null,seq__13180_13217);if(temp__4092__auto___13226)
{var seq__13180_13227__$1 = temp__4092__auto___13226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13180_13227__$1))
{var c__7561__auto___13228 = cljs.core.chunk_first.call(null,seq__13180_13227__$1);{
var G__13229 = cljs.core.chunk_rest.call(null,seq__13180_13227__$1);
var G__13230 = c__7561__auto___13228;
var G__13231 = cljs.core.count.call(null,c__7561__auto___13228);
var G__13232 = 0;
seq__13180_13217 = G__13229;
chunk__13181_13218 = G__13230;
count__13182_13219 = G__13231;
i__13183_13220 = G__13232;
continue;
}
} else
{var num_13233 = cljs.core.first.call(null,seq__13180_13227__$1);lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("ltfiles.fold-level-"),cljs.core.str(num_13233)].join('')),new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str("ltfiles: fold level "),cljs.core.str(num_13233),cljs.core.str(" nodes")].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),((function (seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,num_13233,seq__13180_13227__$1,temp__4092__auto___13226){
return (function (){var tabsize = lt.objs.editor.option.call(null,lt.objs.editor.pool.last_active.call(null),"tabSize");var indent = ((num_13233 - 1) * tabsize);var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.ltfiles.outliner.unfold_all.call(null,ed,((function (seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13233,seq__13180_13227__$1,temp__4092__auto___13226){
return (function (p1__13178_SHARP_){return (p1__13178_SHARP_ < indent);
});})(seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13233,seq__13180_13227__$1,temp__4092__auto___13226))
);
return lt.plugins.ltfiles.outliner.fold_all.call(null,ed,((function (seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13233,seq__13180_13227__$1,temp__4092__auto___13226){
return (function (p1__13179_SHARP_){return cljs.core._EQ_.call(null,p1__13179_SHARP_,indent);
});})(seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,tabsize,indent,ed,num_13233,seq__13180_13227__$1,temp__4092__auto___13226))
);
});})(seq__13180_13217,chunk__13181_13218,count__13182_13219,i__13183_13220,num_13233,seq__13180_13227__$1,temp__4092__auto___13226))
], null));
{
var G__13234 = cljs.core.next.call(null,seq__13180_13227__$1);
var G__13235 = null;
var G__13236 = 0;
var G__13237 = 0;
seq__13180_13217 = G__13234;
chunk__13181_13218 = G__13235;
count__13182_13219 = G__13236;
i__13183_13220 = G__13237;
continue;
}
}
} else
{}
}
break;
}
lt.plugins.ltfiles.outliner.unfold_one_level_for_current_tree = (function unfold_one_level_for_current_tree(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.ltfiles.outliner.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.ltfiles.outliner.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var next_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.ltfiles.outliner.line_indent.call(null,ed,(first_folded_line - 1)):null);if(cljs.core.truth_(first_folded_line))
{return lt.plugins.ltfiles.outliner.unfold_all.call(null,ed,(function (p1__13184_SHARP_){return (p1__13184_SHARP_ <= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.unfold-one-level-for-current-tree","ltfiles.unfold-one-level-for-current-tree",4687083308),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: unfolds current tree one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.outliner.unfold_one_level_for_current_tree], null));
lt.plugins.ltfiles.outliner.fold_one_level_for_current_tree = (function fold_one_level_for_current_tree(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.ltfiles.outliner.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.ltfiles.outliner.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var folded_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.ltfiles.outliner.line_indent.call(null,ed,(first_folded_line - 1)):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (ed,current_line,next_tree_line,first_folded_line){
return (function (p1__13185_SHARP_){return lt.plugins.ltfiles.outliner.line_indent.call(null,ed,p1__13185_SHARP_);
});})(ed,current_line,next_tree_line,first_folded_line))
,cljs.core.range.call(null,current_line,next_tree_line))));var next_indent = (folded_indent - lt.objs.editor.option.call(null,ed,"tabSize"));return lt.plugins.ltfiles.outliner.fold_all.call(null,ed,(function (p1__13186_SHARP_){return (p1__13186_SHARP_ >= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.fold-one-level-for-current-tree","ltfiles.fold-one-level-for-current-tree",3556955429),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: folds current tree one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.outliner.fold_one_level_for_current_tree], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.indent-fold","ltfiles.indent-fold",3124618869),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: fold by indent",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.ltfiles.outliner.fold_code.call(null,ed,lt.objs.editor.cursor.call(null,ed),{"rangeFinder": CodeMirror.fold.indent},null);
})], null));
lt.plugins.ltfiles.outliner.jump_to_parent = (function jump_to_parent(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.ltfiles.outliner.find_parent.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var parent_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),parent_line,new cljs.core.Keyword(null,"ch","ch",1013907415),(indent - lt.objs.editor.option.call(null,ed,"tabSize"))], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No parent found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-parent","ltfiles.jump-to-parent",3223606958),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to parent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.outliner.jump_to_parent], null));
lt.plugins.ltfiles.outliner.jump_forward_on_same_level = (function jump_forward_on_same_level(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.ltfiles.outliner.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),indent);if(cljs.core.truth_(temp__4090__auto__))
{var next_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),next_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No next line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-forward-on-same-level","ltfiles.jump-forward-on-same-level",4291051893),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to next line on same level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.outliner.jump_forward_on_same_level], null));
lt.plugins.ltfiles.outliner.jump_backward_on_same_level = (function jump_backward_on_same_level(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.ltfiles.outliner.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var prev_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),prev_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No previous line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-backward-on-same-level","ltfiles.jump-backward-on-same-level",2706550803),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to previous line on same level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.outliner.jump_backward_on_same_level], null));
lt.plugins.ltfiles.outliner.select_current_tree = (function select_current_tree(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line);var last_line = (lt.plugins.ltfiles.outliner.safe_next_non_child_line.call(null,ed,line) - 1);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,last_line)], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.select-current-tree","ltfiles.select-current-tree",1106596246),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: select current tree",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.outliner.select_current_tree], null));
lt.plugins.ltfiles.outliner.fold_fn_for_current_tree = (function fold_fn_for_current_tree(fold_fn){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line);return fold_fn.call(null,ed,cljs.core.constantly.call(null,true),cljs.core.range.call(null,line,lt.plugins.ltfiles.outliner.safe_next_non_child_line.call(null,ed,line)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.fold-all-for-current-tree","ltfiles.fold-all-for-current-tree",2045977377),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: fold all for current tree",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.outliner.fold_fn_for_current_tree,lt.plugins.ltfiles.outliner.fold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.unfold-all-for-current-tree","ltfiles.unfold-all-for-current-tree",2326222440),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: unfold all for current tree",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.outliner.fold_fn_for_current_tree,lt.plugins.ltfiles.outliner.unfold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.outdent","ltfiles.outdent",3796229320),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Outdent by one level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.indent_line.call(null,ed,lt.objs.editor.cursor.call(null,ed).line,"subtract");
})], null));
/**
* Deletes multiple lines starting on from and including to.
*/
lt.plugins.ltfiles.outliner.delete_lines = (function delete_lines(from,to){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).replaceRange("",{"ch": 0, "line": from},{"ch": 0, "line": (to + 1)});
});
lt.plugins.ltfiles.outliner.move_current_tree = (function move_current_tree(direction){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.ltfiles.outliner.line_indent.call(null,ed,line);var lines_to_search = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)):cljs.core.range.call(null,(line - 1),-1,-1));var sibling_line = lt.plugins.ltfiles.outliner.find_first_sibling.call(null,ed,lines_to_search,indent);if(cljs.core.not.call(null,sibling_line))
{return lt.objs.notifos.set_msg_BANG_.call(null,((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?"Next line not found":"Previous line not found"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.editor.operation.call(null,ed,(function (){var current_line_ends = lt.plugins.ltfiles.outliner.next_non_child_line.call(null,ed,line);var next_node_in_new_tree_QMARK_ = ((lt.plugins.ltfiles.outliner.line_indent.call(null,ed,current_line_ends) - indent) < 0);var copied_lines = lt.objs.editor.range.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),current_line_ends,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));var sibling_line_ends = lt.plugins.ltfiles.outliner.next_non_child_line.call(null,ed,sibling_line);var copied_lines__$1 = (cljs.core.truth_(sibling_line_ends)?copied_lines:[cljs.core.str("\n"),cljs.core.str(copied_lines)].join(''));var sibling_line_ends__$1 = (function (){var or__6813__auto__ = sibling_line_ends;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
})();var cursor_line = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?((next_node_in_new_tree_QMARK_)?sibling_line:sibling_line_ends__$1):sibling_line);lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cursor_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
lt.plugins.ltfiles.outliner.delete_lines.call(null,line,(current_line_ends - 1));
lt.objs.editor.insert_at_cursor.call(null,ed,copied_lines__$1);
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(lt.objs.editor.cursor.call(null,ed).line - (current_line_ends - line)),new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
}));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.move-current-tree-down","ltfiles.move-current-tree-down",4573636978),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Move current tree down",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.outliner.move_current_tree,new cljs.core.Keyword(null,"down","down",1016993812))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.move-current-tree-up","ltfiles.move-current-tree-up",1893585643),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Move current tree up",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.outliner.move_current_tree,new cljs.core.Keyword(null,"up","up",1013907981))], null));
lt.plugins.ltfiles.outliner.find_disjointed_lines = (function find_disjointed_lines(){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");return cljs.core.remove.call(null,(function (p1__13188_SHARP_){var or__6813__auto__ = (new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__13188_SHARP_) < 0);if(or__6813__auto__)
{return or__6813__auto__;
} else
{return cljs.core.PersistentHashSet.fromArray([0,tabsize], true).call(null,new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__13188_SHARP_));
}
}),cljs.core.map.call(null,(function (p__13191){var vec__13192 = p__13191;var line1 = cljs.core.nth.call(null,vec__13192,0,null);var line2 = cljs.core.nth.call(null,vec__13192,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",1116881521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line1),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line2)], null),new cljs.core.Keyword(null,"difference","difference",2742266031),(new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line2) - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line1))], null);
}),cljs.core.partition.call(null,2,1,cljs.core.map.call(null,(function (p1__13187_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"indent","indent",4124632094)],[p1__13187_SHARP_,lt.plugins.ltfiles.outliner.line_indent.call(null,ed,p1__13187_SHARP_)]);
}),cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1))))));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-malformed-lines","ltfiles.find-malformed-lines",1204622442),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: find lines with malformed levels caused by incorrect indents",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.comp.call(null,cljs.core.prn,lt.plugins.ltfiles.outliner.find_disjointed_lines)], null));
}

//# sourceMappingURL=ltfiles_compiled.js.map