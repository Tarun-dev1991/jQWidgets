/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxCheckBox","",{});a.extend(a.jqx._jqxCheckBox.prototype,{defineInstance:function(){var b={animationShowDelay:300,animationHideDelay:300,width:null,height:null,boxSize:"16px",checked:false,hasThreeStates:false,disabled:false,enableContainerClick:true,locked:false,groupName:"",keyboardCheck:true,enableHover:true,hasInput:true,rtl:false,updated:null,disabledContainer:false,changeType:null,_canFocus:true,aria:{"aria-checked":{name:"checked",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}},events:["checked","unchecked","indeterminate","change"]};if(this===a.jqx._jqxCheckBox.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){var c=this;c._createFromInput("CheckBox");c.render()},_createFromInput:function(c){var j=this;if(j.element.nodeName.toLowerCase()=="input"){j.field=j.element;if(j.field.className){j._className=j.field.className}var l={title:j.field.title};if(j.field.value){l.value=j.field.value}if(j.field.checked){l.checked=true}if(j.field.id.length){l.id=j.field.id.replace(/[^\w]/g,"_")+"_"+c}else{l.id=a.jqx.utilities.createId()+"_"+c}var e=j.element.nextSibling;var h=false;if(e&&(e.nodeName=="#text"||e.nodeName=="span")){h=true}var k=0;var b=a("<div></div>",l);if(h){b.append(e);var i=a("<span>"+a(e).text()+"</span>");i.appendTo(a(document.body));k+=i.width();i.remove()}b[0].style.cssText=j.field.style.cssText;if(!j.width){j.width=a(j.field).width()+k+10}if(!j.height){j.height=a(j.field).outerHeight()+10}a(j.field).hide().after(b);var g=j.host.data();j.host=b;j.host.data(g);j.element=b[0];j.element.id=j.field.id;j.field.id=l.id;if(j._className){j.host.addClass(j._className);a(j.field).removeClass(j._className)}if(j.field.tabIndex){var d=j.field.tabIndex;j.field.tabIndex=-1;j.element.tabIndex=d}}},_addInput:function(){if(this.hasInput){if(this.input){this.input.remove()}var b=this.host.attr("name");this.input=a("<input type='hidden'/>");this.host.append(this.input);if(b){this.input.attr("name",b)}this.input.val(this.checked);this.host.attr("role","checkbox");a.jqx.aria(this)}},render:function(){this.init=true;var d=this;this.setSize();this.propertyChangeMap.width=function(h,j,i,k){d.setSize()};this.propertyChangeMap.height=function(h,j,i,k){d.setSize()};this._removeHandlers();if(!this.width){this.host.css("overflow-x","visible")}if(!this.height){this.host.css("overflow-y","visible")}if(this.checkbox){this.checkbox.remove();this.checkbox=null}if(this.checkMark){this.checkMark.remove();this.checkMark=null}if(this.box){this.box.remove();this.box=null}if(this.clear){this.clear.remove();this.clear=null}if(this.boxSize==null){this.boxSize=16}var g=parseInt(this.boxSize)+"px";var f="16px";var e=Math.floor((parseInt(this.boxSize)-16)/2);var b=e;e+="px";b+="px";if(parseInt(this.boxSize)!=16){this.checkbox=a('<div><div style="width: '+g+"; height: "+g+';"><span style="position: relative; left: '+e+"; top: "+b+"; width: "+f+"; height: "+f+';"></span></div></div>')}else{this.checkbox=a('<div><div style="width: '+g+"; height: "+g+';"><span style="width: '+g+"; height: "+g+';"></span></div></div>')}this.host.prepend(this.checkbox);if(!this.disabledContainer){if(!this.host.attr("tabIndex")){this.host.attr("tabIndex",0)}this.clear=a('<div style="clear: both;"></div>');this.host.append(this.clear)}this.checkMark=a(this.checkbox[0].firstChild.firstChild);this.box=this.checkbox;this.box.addClass(this.toThemeProperty("jqx-checkbox-default")+" "+this.toThemeProperty("jqx-fill-state-normal")+" "+this.toThemeProperty("jqx-rc-all"));if(this.disabled){this.disable()}if(!this.disabledContainer){this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-checkbox"))}if(this.locked&&!this.disabledContainer){this.host.css("cursor","auto")}var c=this.element.getAttribute("checked");if(c=="checked"||c=="true"||c==true){this.checked=true}this._addInput();this._render();this._addHandlers();this.init=false;this._centerBox();if(this.isMaterialized()){a(this.checkbox).addClass("ripple");a.jqx.ripple(a(this.checkbox),this.host,"checkbox")}},_centerBox:function(){if(this.height&&this.height.toString().indexOf("%")==-1&&this.box){var b=parseInt(this.height);this.host.css("line-height",b+"px");var c=b-parseInt(this.boxSize)-1;c/=2;this.box.css("margin-top",parseInt(c))}},refresh:function(b){if(!b){this.setSize();this._render()}},resize:function(c,b){this.width=c;this.height=b;this.refresh()},setSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}else{if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.element.style.width=this.width}}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}else{if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.element.style.height=this.height}}}this._centerBox()},_addHandlers:function(){var d=this;var c=a.jqx.mobile.isTouchDevice();var b="mousedown";if(c){b=a.jqx.mobile.getTouchEventName("touchend")}this.addHandler(this.box,b,function(e){if(!d.disabled&&!d.enableContainerClick&&!d.locked){d.changeType="mouse";d.toggle();if(d.updated){e.owner=d;d.updated(e,d.checked,d.oldChecked)}if(e.preventDefault){e.preventDefault()}return false}});if(!this.disabledContainer){this.addHandler(this.host,"keydown",function(e){if(!d.disabled&&!d.locked&&d.keyboardCheck){if(e.keyCode==32){if(!d._canFocus){return true}d.changeType="keyboard";d.toggle();if(d.updated){e.owner=d;d.updated(e,d.checked,d.oldChecked)}if(e.preventDefault){e.preventDefault()}return false}}});this.addHandler(this.host,b,function(e){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.clickTime=new Date();d.changeType="mouse";d.toggle();if(e.preventDefault){e.preventDefault()}if(d._canFocus){d.focus()}return false}});this.addHandler(this.host,"selectstart",function(e){if(!d.disabled&&d.enableContainerClick){if(e.preventDefault){e.preventDefault()}return false}});this.addHandler(this.host,"mouseup",function(e){if(!d.disabled&&d.enableContainerClick){if(e.preventDefault){e.preventDefault()}}});this.addHandler(this.host,"focus",function(e){if(!d.disabled&&!d.locked){if(!d._canFocus){return true}if(d.enableHover){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"))}d.box.addClass(d.toThemeProperty("jqx-fill-state-focus"));if(e.preventDefault){e.preventDefault()}a(d.checkbox).removeClass("active");if(!d.clickTime||(d.clickTime&&(new Date()-d.clickTime>300))){a(d.checkbox).addClass("active")}d.hovered=true;return false}});this.addHandler(this.host,"blur",function(e){a(d.checkbox).removeClass("active");if(!d.disabled&&!d.locked){if(!d._canFocus){return true}if(d.enableHover){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"))}d.box.removeClass(d.toThemeProperty("jqx-fill-state-focus"));if(e.preventDefault){e.preventDefault()}d.hovered=false;return false}});this.addHandler(this.host,"mouseenter",function(e){if(d.locked){d.host.css("cursor","arrow")}if(d.enableHover){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.addClass(d.toThemeProperty("jqx-fill-state-hover"));if(e.preventDefault){e.preventDefault()}d.hovered=true;return false}}});this.addHandler(this.host,"mouseleave",function(e){if(d.enableHover){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.removeClass(d.toThemeProperty("jqx-fill-state-hover"));if(e.preventDefault){e.preventDefault()}d.hovered=false;return false}}});this.addHandler(this.box,"mouseenter",function(){if(d.locked){return}if(!d.disabled&&!d.enableContainerClick){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.addClass(d.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this.box,"mouseleave",function(){if(!d.disabled&&!d.enableContainerClick){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.removeClass(d.toThemeProperty("jqx-fill-state-hover"))}})}},focus:function(){try{this.host.focus()}catch(b){}},_removeHandlers:function(){var c=a.jqx.mobile.isTouchDevice();var b="mousedown";if(c){b="touchend"}if(this.box){this.removeHandler(this.box,b);this.removeHandler(this.box,"mouseenter");this.removeHandler(this.box,"mouseleave")}this.removeHandler(this.host,b);this.removeHandler(this.host,"mouseup");this.removeHandler(this.host,"selectstart");this.removeHandler(this.host,"mouseenter");this.removeHandler(this.host,"mouseleave");this.removeHandler(this.host,"keydown");this.removeHandler(this.host,"blur");this.removeHandler(this.host,"focus")},_render:function(){if(!this.disabled){if(this.enableContainerClick){this.host.css("cursor","pointer")}else{if(!this.init){this.host.css("cursor","auto")}}}else{this.disable()}if(this.rtl){this.box.addClass(this.toThemeProperty("jqx-checkbox-rtl"));this.host.addClass(this.toThemeProperty("jqx-rtl"))}this.updateStates();this.host.attr("checked",this.checked)},_setState:function(c,b){if(this.checked!=c){this.checked=c;if(this.checked){this.checkMark[0].className=this.toThemeProperty("jqx-checkbox-check-checked")}else{if(this.checked==null){this.checkMark[0].className=this.toThemeProperty("jqx-checkbox-check-indeterminate")}else{this.checkMark[0].className=""}}}if(b===false||b===true){this.locked=b}if(c){this.element.setAttribute("checked",true)}else{this.element.removeAttribute("checked")}},val:function(b){if(arguments.length==0||(b!=null&&typeof(b)=="object")){return this.checked}if(typeof b=="string"){if(b=="true"){this.check()}if(b=="false"){this.uncheck()}if(b==""){this.indeterminate()}}else{if(b==true){this.check()}if(b==false){this.uncheck()}if(b==null){this.indeterminate()}}return this.checked},check:function(){this.checked=true;var c=this;this.checkMark.removeClass();this.element.setAttribute("checked",true);if(a.jqx.browser.msie||this.animationShowDelay==0){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"))}else{this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"));this.checkMark.css("opacity",0);this.checkMark.stop().animate({opacity:1},this.animationShowDelay,function(){})}if(this.groupName!=null&&this.groupName.length>0){var d=a.find(this.toThemeProperty(".jqx-checkbox",true));a.each(d,function(){var e=a(this).jqxCheckBox("groupName");if(e==c.groupName&&this!=c.element){a(this).jqxCheckBox("uncheck")}})}var b=this.changeType;this._raiseEvent("0",{checked:true});this.changeType=b;this._raiseEvent("3",{checked:true});if(this.input!=undefined){this.input.val(this.checked);a.jqx.aria(this,"aria-checked",this.checked);this.host.attr("checked",this.checked)}},uncheck:function(){this.checked=false;var c=this;this.element.removeAttribute("checked");if(a.jqx.browser.msie||this.animationHideDelay==0){if(c.checkMark[0].className!=""){c.checkMark[0].className=""}}else{this.checkMark.css("opacity",1);this.checkMark.stop().animate({opacity:0},this.animationHideDelay,function(){if(c.checkMark[0].className!=""){c.checkMark[0].className=""}})}var b=this.changeType;this._raiseEvent("1");this.changeType=b;this._raiseEvent("3",{checked:false});if(this.input!=undefined){this.input.val(this.checked);a.jqx.aria(this,"aria-checked",this.checked);this.host.attr("checked",this.checked)}},indeterminate:function(){this.checked=null;this.checkMark.removeClass();if(a.jqx.browser.msie||this.animationShowDelay==0){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"))}else{this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"));this.checkMark.css("opacity",0);this.checkMark.stop().animate({opacity:1},this.animationShowDelay,function(){})}var b=this.changeType;this._raiseEvent("2");this._raiseEvent("3",{checked:null});if(this.input!=undefined){this.input.val(this.checked);a.jqx.aria(this,"aria-checked","undefined");this.host.attr("checked","undefined")}},toggle:function(){if(this.disabled){return}if(this.locked){return}if(this.groupName!=null&&this.groupName.length>0){if(this.checked!=true){this.checked=true;this.updateStates()}return}this.oldChecked=this.checked;if(this.checked==true){this.checked=this.hasThreeStates?null:false}else{this.checked=this.checked!=null}this.updateStates();if(this.input!=undefined){this.input.val(this.checked)}},updateStates:function(){if(this.checked){this.check()}else{if(this.checked==false){this.uncheck()}else{if(this.checked==null){this.indeterminate()}}}},disable:function(){this.disabled=true;if(this.checked==true){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-disabled"))}else{if(this.checked==null){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate-disabled"))}}this.box.addClass(this.toThemeProperty("jqx-checkbox-disabled-box"));this.host.addClass(this.toThemeProperty("jqx-checkbox-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this.box.addClass(this.toThemeProperty("jqx-checkbox-disabled"));a.jqx.aria(this,"aria-disabled",this.disabled)},enable:function(){if(this.checked==true){this.checkMark.removeClass(this.toThemeProperty("jqx-checkbox-check-disabled"))}else{if(this.checked==null){this.checkMark.removeClass(this.toThemeProperty("jqx-checkbox-check-indeterminate-disabled"))}}this.box.removeClass(this.toThemeProperty("jqx-checkbox-disabled-box"));this.host.removeClass(this.toThemeProperty("jqx-checkbox-disabled"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));this.box.removeClass(this.toThemeProperty("jqx-checkbox-disabled"));this.disabled=false;a.jqx.aria(this,"aria-disabled",this.disabled)},destroy:function(){this.host.remove()},_raiseEvent:function(g,e){if(this.init){return}var c=this.events[g];var f=new a.Event(c);f.owner=this;if(!e){e={}}e.type=this.changeType;this.changeType=null;f.args=e;try{var b=this.host.trigger(f)}catch(d){}return b},propertiesChangedHandler:function(b,c,d){if(d.width&&d.height&&Object.keys(d).length==2){b.setSize()}},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c=="enableContainerClick"&&!b.disabled&&!b.locked){if(d){b.host.css("cursor","pointer")}else{b.host.css("cursor","auto")}}if(c=="rtl"){if(d){b.box.addClass(b.toThemeProperty("jqx-checkbox-rtl"));b.host.addClass(b.toThemeProperty("jqx-rtl"))}else{b.box.removeClass(b.toThemeProperty("jqx-checkbox-rtl"));b.host.removeClass(b.toThemeProperty("jqx-rtl"))}}if(c=="boxSize"){b.render()}if(c=="theme"){a.jqx.utilities.setTheme(e,d,b.host)}if(c=="checked"){if(d!=e){switch(d){case true:b.check();break;case false:b.uncheck();break;case null:b.indeterminate();break}}}if(c=="disabled"){if(d!=e){if(d){b.disable()}else{b.enable()}}}}})})(jqxBaseFramework);

