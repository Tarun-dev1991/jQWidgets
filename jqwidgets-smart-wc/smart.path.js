
/* Smart HTML Elements v4.4.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-path",class extends Smart.BaseElement{static get properties(){return{value:{value:"",type:"string"},hint:{value:"",type:"string"},label:{value:"",type:"string"},dataSource:{value:[{label:"notAPath"},{label:"validPath"}],type:"any",reflectToAttribute:!1},dropDownAppendTo:{value:null,type:"any"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownOverlay:{value:!1,type:"boolean"},messages:{extend:!0,value:{en:{incorrectArgument:"{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",missingReference:"{{elementType}}: Missing reference to {{file}} in method {{methodName}}.",notAPath:"Set to not a path",validPath:"Set to valid path"}},type:"object"},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},placeholder:{value:"Enter a path",type:"string"},pathFormat:{allowedValues:["windows","unix"],value:"windows",type:"string"},indicator:{value:!1,type:"boolean"},displayMember:{value:"",type:"string"},valueMember:{value:"",type:"string"},wrap:{value:!1,type:"boolean"}}}template(){return`<div id="container">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content">
                        <div class="smart-buttons-container" id="buttonsContainer">
                            <span id="dropDownButton" class="smart-drop-down-button">
                                <span id="icon"></span>
                            </span>
                            <div id="inputContainer" class="smart-path-input-container">
                                <div id="pathWrapper" class="smart-path-input-wrapper"></div>
                                <input id="input"  spellcheck="false" type="text" name="[[name]]" class="smart-input smart-path-input"/>
                                <div class="smart-path-multiline-container smart-hidden" id="multilineContainer">
                                    <div id="multiline" contenteditable="true" spellcheck="false" class="smart-input smart-path-input"></div>
                                </div>
                            </div>
                            <span id="browseButton" class="smart-browse-button">
                                <span id="icon"></span>
                            </span>
                        </div>
                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden"></div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`}static get listeners(){return{"inputContainer.change":"_inputChangeHandler","inputContainer.keydown":"_inputKeyDownHandler","inputContainer.keyup":"_inputKeyUpHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler",mouseover:"_mouseOverEventHandler",mouseout:"_mouseOverEventHandler","dropDownContainer.mouseover":"_mouseOverEventHandler","dropDownContainer.mouseout":"_mouseOverEventHandler","inputContainer.focusin":"_focusHandler","inputContainer.focusout":"_focusHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler"}}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"dropDownAppendTo"===a?d._positionDetection.dropDownAppendToChangedHandler():"dataSource"===a?(d._dataBind(),d._setDropDownSize(),d._positionDetection.checkBrowserBounds("vertically"),d._positionDetection.positionDropDown(),d._positionDetection.checkBrowserBounds("horizontally")):"dropDownMinWidth"===a||"dropDownWidth"===a||"dropDownMaxWidth"===a||"dropDownHeight"===a||"dropDownMinHeight"===a||"dropDownMaxHeight"===a?d._setDropDownSize():"dropDownOverlay"===a?c||d._positionDetection.removeOverlay():"wrap"===a?(d._setInput(),d._handleValue(d.value),document.activeElement!==d&&d._trim()):"readonly"===a?d.$.multiline.readOnly=d.$.input.readOnly=c:"value"===a||"pathFormat"===a?(d._handleValue(d.value),"value"===a&&d.value!==b&&d.$.fireEvent("change",{oldValue:b,value:d.value}),document.activeElement!==d&&d._trim()):"placeholder"===a?d.$.input.placeholder=d.$.multiline.placeholder=d.placeholder:void 0}attached(){const a=this;super.attached();a.isCompleted&&a.$.dropDownContainer&&(a._positionDetection.dropDownAttached("_setDropDownSize"),a._positionDetection.checkBrowserBounds())}detached(){const a=this;super.detached();a.$.dropDownContainer&&(a.close(),a._positionDetection.dropDownDetached())}ready(){super.ready();const a=this;a._setInput(),a._positionDetection=new Smart.Utilities.PositionDetection(a,a.$.dropDownContainer,a.$.container,"close"),a._positionDetection.getDropDownParent(!0),a._positionDetection.setDropDownPosition(),a._calculateDropDownSize(),a._positionDetection.handleAutoPositioning(),a._setDropDownSize(),a.wrap?a._wrapRefresh():a._handleValue(a.value),a._trim(),a.opened&&a.open()}blur(){this.$[this.wrap?"multiline":"input"].blur()}focus(){this.$[this.wrap?"multiline":"input"].focus()}setToNotAPath(){this._setPathTo("//")}setToEmptyPath(){this._setPathTo("////")}_setPathTo(a){const b=this,c=b.value;b.set("value",a),b.$.input.value=b.$.multiline.value="",c!==b.value&&b.$.fireEvent("change",{oldValue:c,value:b.value})}close(){const a=this;if(!a.$dropDownContainer.hasClass("smart-visibility-hidden")){const b=a.$.fireEvent("closing").defaultPrevented;b||(a.$dropDownContainer.addClass("smart-visibility-hidden"),a.$.fireEvent("close"),a.opened=!1,a._preventDropDownClose=!1,a._positionDetection.removeOverlay(!0),a._edgeMacFF&&!a.hasAnimation&&a.$.dropDownContainer&&(a.$.dropDownContainer.style.top=a.$.dropDownContainer.style.left="",a.$dropDownContainer.addClass("not-in-view")))}}open(){const a=this;if(!a.disabled&&a.offsetHeight&&a.$dropDownContainer.hasClass("smart-visibility-hidden")){if(a.dataSource.length&&!a.$.dropDownContainer.firstElementChild&&a._dataBind(),a._handleItemSelection(),a._updateDropDown(),a.$dropDownContainer.hasClass("not-in-view")&&a.$dropDownContainer.removeClass("not-in-view"),a.$.dropDownContainer.style.transition=null,a.dropDownAppendTo&&0<a.dropDownAppendTo.length){const b=a.getBoundingClientRect();if(a.$.container.contains(a.$.dropDownContainer)){let b=0;const c=setInterval(function(){const d=a.getBoundingClientRect();b++,d.top===a._positionTop&&10>b||(a.open(),clearInterval(c),a._positionTop=d.top)},100);return}b.top!==a._positionTop&&(a._positionTop=b.top)}const b=a.$.fireEvent("opening").defaultPrevented;b||(a.opened=!0,a._positionDetection.placeOverlay(),a._positionDetection.checkBrowserBounds("vertically"),a._positionDetection.positionDropDown(),a._positionDetection.checkBrowserBounds("horizontally"),a.$dropDownContainer.removeClass("smart-visibility-hidden"),a.$.fireEvent("open"),a._handleKeyStrokes("Home"),!Smart.Utilities.Core.isMobile&&(a.wrap?a.$.multiline.focus():a.$.input.focus()))}}_calculateDropDownSize(){const a=this;a._dropDownSize={};const b=window.getComputedStyle(a.$.dropDownContainer),c=parseFloat(b.getPropertyValue("border-top-width").trim()),d=parseFloat(b.getPropertyValue("border-bottom-width").trim()),e=parseFloat(b.getPropertyValue("margin-top").trim()),f=parseFloat(b.getPropertyValue("margin-bottom").trim()),g=parseFloat(b.getPropertyValue("padding-top").trim()),h=parseFloat(b.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(a._dropDownSize.width=b.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),a._dropDownSize.height=b.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!a._dropDownSize.width||-1<a._dropDownSize.width.indexOf("initial"))&&(a._dropDownSize.width=a.offsetWidth),a._dropDownSize.height||(a._dropDownSize.height="auto"),a._dropDownSize.minHeight=parseFloat(b.getPropertyValue("min-height").trim()),a._dropDownSize.maxHeight=parseFloat(b.getPropertyValue("max-height").trim()),a._dropDownSize.borderWidth=(isNaN(c)?0:c)+(isNaN(d)?0:d),a._dropDownSize.paddingWidth=(isNaN(g)?0:g)+(isNaN(h)?0:h),a._dropDownSize.marginWidth=(isNaN(e)?0:e)+(isNaN(f)?0:f)}_focusHandler(a){const b=this;if("focusin"===a.type)return b.setAttribute("focus",""),b.wrap?b._wrapRefresh():b._handleValue(b.value),void b._refreshInputSelection(!0);if(b._buttonClicked||b._isDropDownClicked)return void b.focus();if(b.removeAttribute("focus"),b.wrap){const a=b.value;b._handleValue(b.$.multiline.value,!0),b.value!==a&&b.$.fireEvent("change",{oldValue:a,value:b.value})}else b._handleValue(b.$.input.value,!0);b._buttonClicked||b._isDropDownClicked||b.close(),b._trim()}_setInput(){const a=this;let b=a.$.input,c=a.$.multiline;c.value||Object.defineProperty(c,"value",{get(){return this.textContent},set(a){this.innerHTML=a,a?this.removeAttribute("show-placeholder"):this.setAttribute("show-placeholder",""),b.value=this.textContent}}),c.readOnly||Object.defineProperty(c,"readOnly",{get(){return this.getAttribute("contenteditable")},set(a){this.setAttribute("contenteditable",!a)}}),a.wrap?(b.$.addClass("smart-hidden"),a.$multilineContainer.removeClass("smart-hidden")):(b.$.removeClass("smart-hidden"),a.$multilineContainer.addClass("smart-hidden")),b.placeholder=c.placeholder=a.placeholder,b.readOnly=c.readOnly=a.readonly,c.value="",c.setAttribute("placeholder",a.placeholder),c.setAttribute("readonly",a.readonly)}_handleItemSelection(a,b){const c=this,d=c.$.dropDownContainer.getElementsByClassName("smart-path-item");for(let c=0;c<d.length;c++)d[c].removeAttribute("active");if(a&&(b&&c.$.fireEvent(b,{selected:a.hasAttribute("selected"),disabled:a.hasAttribute("disabled"),label:a.label,value:a.value}),!a.hasAttribute("disabled"))){const b=c.value;a.setAttribute("active",""),"notAPath"===a.value?(c.set("value","//"),c.$.input.value=c.$.multiline.value=""):"validPath"===a.value&&(c.set("value","////"),c.$.input.value=c.$.multiline.value=""),b!==c.value&&c.$.fireEvent("change",{oldValue:b,value:c.value}),c.close()}}_handleKeyStrokes(a){const b=this,c=[].slice.call(b.$.dropDownContainer.children),d=c.find(a=>a.hasAttribute("focus")),e=function(a,b){if(!a)return;let c;for(c=a[b+"ElementSibling"];c;){if(!c.hasAttribute("disabled"))return c;c=c[b+"ElementSibling"]}};let f;if(c.length){switch(a){case"ArrowDown":f=d?e(d,"next"):c.find(a=>!a.hasAttribute("disabled"));break;case"ArrowUp":f=d?e(d,"previous"):c.find(a=>!a.hasAttribute("disabled"));break;case"Home":f=c.find(a=>!a.hasAttribute("disabled"));break;case"End":for(let a=c.length-1;0<=a;a--)if(!c[a].hasAttribute("disabled")){f=c[a];break}}f&&(c.map(a=>a.removeAttribute("focus")),f.setAttribute("focus",""))}}_getPathType(a){if(a&&a.length)return 0===a.indexOf("//rel//")?"rel":0===a.indexOf("//abs//")?"abs":0===a.indexOf("//unc//")?"unc":/(^|[\/\\])(\.{1,2})[\/\\]/g.test(a)?"rel":/^[\w\d]{1}:\\/gmi.test(a)||/^\/[\w\d]+\//gmi.test(a)?"abs":/^\\\\[\w\d]+\\/gmi.test(a)||/^\/\/[\w\d]+\//gmi.test(a)?"unc":"rel"}_getDriveName(a,b){const c=this;let d;return"rel"===b?(d=a[0].replace(/[:\\\/]+|\s/gmi,""),a[0]=d):"abs"===b?(d=a[0].replace(/[:\\\/]+|[.]{1,}|\s/gmi,""),"windows"===c.pathFormat?d+=":":"unix"===c.pathFormat&&(d="/"+d),a[0]=d):"unc"==b&&(d=a[0].replace(/[:\\/]+|[.]{1,}|\s/gmi,""),d="windows"===c.pathFormat?"\\\\"+d:"//"+d,a[0]=d),d}_handleValue(a){const b=this;if("//"===a||"////"===a)return void(b.$.multiline.value=b.$.input.value="");a=a.trim();const c=b._getPathType(a);if(!a||!a.length||!c)return b.set("value","//"),void(b.$.multiline.value=b.$.input.value="");a=a.replace(/^(\/+((abs)|(rel)|(unc))\/+)|([?*"<>|]+)/gmi,"");a=a.replace(/[\\|\/]+/gmi,">");const d=a.split(">").filter(a=>a.length);if(!d.length)return b.$.multiline.value=b.$.input.value="",void b.set("value",b._formatValue(c));for(let b=0;b<d.length-1;b++){if("..."===d[b]){d[b]="";continue}if(!1===/^\.+$/g.test(d[b]))for(;"."===d[b].charAt(d[b].length-1);)d[b]=d[b].slice(0,d[b].length-1)}if("rel"===c)for(let a=0;a<d.length-1;a++)/^\.{3,}$/g.test(d[a])&&(d[a]="");else for(let a=0;a<d.length-1;a++)/^\.+$/g.test(d[a])&&(d[a]="");const e=b._getDriveName(d,c);b.set("value",b._formatValue(b._constructPath(d,">",e),c)),b.$.multiline.value=b.$.input.value=b._constructPath(d,"windows"===b.pathFormat?"\\":"/",e)}_constructPath(a,b,c){let d="";for(let e,f=0;f<a.length;f++){e=a[f];const g=0===e.indexOf("<div>");e=e.replace(/(<div>)|(<\/div>)/gmi,""),e!==c&&(e=e.replace(/[:\\\/]+|\s+$/gmi,"")),this.wrap?e=e===c?e:b+e:e+=b,g&&(e="<div>"+e+"</div>"),d+=e}return!this.wrap&&(1<a.length||1===a.length&&0>a[0].indexOf(":"))&&(d=d.slice(0,-1)),d}_trim(){const a=this;if(document.activeElement===a)return;const b="windows"===a.pathFormat?"\\":"/",c=a.value;if(!c||"//"===c||"////"===c)return void(a.$.multiline.value=a.$.input.value="");const d=a.$.pathWrapper,e=a.wrap?a.$.multiline:a.$.input;let f=c.replace(/^(\/+((abs)|(rel)|(unc))\/+)|([?*"<>]+)/gmi,"").split("/");const g=a._getDriveName(f,a._getPathType(c));if(a.wrap){let c=a._trimVertically(f,g);for(;d.offsetHeight>a.offsetHeight;){const e=2>=c.length?0:1;if(!c.length)break;c.splice(e,1,"..."),c=a._trimVertically(c,g),d.innerHTML=a._constructPath(c,b,g?c[0]:void 0),d.offsetHeight>a.offsetHeight&&c.splice(e,1)}f=c}for(d.innerHTML=a._constructPath(f,b,g?f[0]:void 0);d.offsetWidth>e.offsetWidth;){const c=2>=f.length?0:1;if(!f.length)break;f.splice(c,1,"..."),d.innerHTML=a._constructPath(f,b,g?f[0]:void 0),d.offsetWidth>e.offsetWidth&&f.splice(c,1)}f.length||(d.innerHTML="..."),a.$.multiline.value=a.$.input.value=d.innerHTML}_trimVertically(a,b){const c=this,d=c.$.pathWrapper,e=c.wrap?c.$.multiline:c.$.input,f="windows"===c.pathFormat?"\\":"/",g=()=>{let b=-1;for(let c=0;c<a.length;c++)0!=c&&0>a[c].indexOf("<div>")&&(b=c);return b};for(let c=0;c<a.length;c++)a[c]=a[c].replace(/(<div>)|(<\/div>)/gmi,"");for(d.innerHTML=c._constructPath(a,f,b?a[0]:void 0);d.offsetWidth>e.offsetWidth;){let e=g();if(1>=e||"..."===a[e])break;a[e]="<div>"+a[e]+"</div>",d.innerHTML=c._constructPath(a,f,b?a[0]:void 0)}return a.length||(d.innerHTML="..."),c.$.multiline.value=c.$.input.value=d.innerHTML,a}_formatValue(a,b){const c=this;return a||(a=c.wrap?c.$.multiline.value:c.$.input.value),b?"//"+b+"//"+a.replace(/[:]+|\\+|\/+/gmi,"").replace(/>/g,"/"):"//"}_inputChangeHandler(a){const b=this,c=b.value;a.preventDefault(),a.stopPropagation(),b._handleValue((b.wrap?b.$.multiline:b.$.input).value,!0),c!==b.value&&b.$.fireEvent("change",{oldValue:c,value:b.value}),b._updateDropDown()}_updateDropDown(){const a=this,b=a.$.dropDownContainer.children,c=a.wrap?a.$.multiline:a.$.input;let d,e;for(let a=0;a<b.length;a++){const c=b[a];if("notAPath"===c.value?d=c:"validPath"===c.value&&(e=c),d&&e)break}d&&(!c.value.length||a.indicator?(d.setAttribute("disabled",""),d.hasAttribute("focus")&&d.removeAttribute("focus")):d.removeAttribute("disabled")),e&&(c.value.length||a.indicator?(e.setAttribute("disabled",""),e.hasAttribute("focus")&&e.removeAttribute("focus")):e.removeAttribute("disabled"))}_dataBind(){const a=this,b=a.dataSource;let c=[];if((a.$.dropDownContainer.innerHTML="",b&&b.length)&&("string"==typeof b&&(a.dataSource=JSON.parse(b)),Array.isArray(b))){const d=document.createDocumentFragment();for(let e=0;e<b.length;e++){const f=b[e],g=a._createItem(f);c.push(g),d&&d.appendChild(g)}a.$.dropDownContainer.appendChild(d)}}_documentDownHandler(a){const b=this;if(b.disabled||b.readonly)return;let c=a.originalEvent.target;if(c===b._overlay&&(b._overlayDown=!0),b.enableShadowDOM){c=a.originalEvent.composedPath()[0];for(let a=c.getRootNode().host;a;)a.closest(".smart-drop-down-container")===b.$.dropDownContainer&&(b._isDropDownClicked=!0),a=a.getRootNode().host}else b._isDropDownClicked=c.closest(".smart-drop-down-container")===b.$.dropDownContainer;b.contains(c)&&(b._buttonClicked=c.closest(".smart-browse-button")||c.closest(".smart-drop-down-button"),b._isPathInputDown=c.closest(".smart-path-input"));let d=c.closest(".smart-path-item");b.$.dropDownContainer.contains(d)||(d=void 0),d&&(b.hasRippleAnimation&&!d.hasAttribute("disabled")&&!d.hasAttribute("readonly")&&Smart.Utilities.Animation.Ripple.animate(d,a.pageX,a.pageY),b._itemClicked=d,b._preventDropDownClose=!0),b._isDropDownClicked&&(b._preventDropDownClose=!0)}_documentUpHandler(a){const b=this;let c=a.originalEvent.target;const d=c.closest(".smart-path-item");return d===b._itemClicked?void b._handleItemSelection(d,"itemClick"):(b._itemClicked=void 0,b._buttonClicked&&(b.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(b._buttonClicked,a.pageX+b._buttonClicked.offsetWidth/4,a.pageY+b._buttonClicked.offsetHeight/4),c.closest(".smart-browse-button")===b._buttonClicked&&b._buttonClicked===b.$.browseButton?b.$.fireEvent("browseButtonClick"):c.closest(".smart-drop-down-button")===b._buttonClicked&&b._buttonClicked===b.$.dropDownButton&&b.$.fireEvent("dropDownButtonClick")),c.closest(".smart-drop-down-button")===b._buttonClicked&&b._buttonClicked===b.$.dropDownButton)?(b.$dropDownContainer.hasClass("smart-visibility-hidden")?b.open():b.close(),void(b._buttonClicked=void 0)):(b._buttonClicked=void 0,b._isPathInputDown===b.$.input||b._isPathInputDown===b.$.multiline)?void(b._isPathInputDown=void 0):void(c=b._getUpEventTarget(c),void 0===c||("dropDownContainer"!==c&&"item"!==c||"item"===c)&&b.close())}_inputKeyDownHandler(a){const b=this;if(b.opened)switch(a.key){case"ArrowDown":case"ArrowUp":case"Home":case"End":return(a.preventDefault(),a.altKey&&"ArrowUp"===a.key)?void b.close():void b._handleKeyStrokes(a.key);}else{if(a.altKey&&"ArrowDown"===a.key)return a.preventDefault(),void b.open();if("PageDown"===a.key||"PageUp"===a.key)return void a.preventDefault()}if("Enter"===a.key)return b.wrap&&a.preventDefault(),void(b.opened&&(b._handleItemSelection(b._focusedItem(),"itemClick"),b.close()));if(b.opened&&"Escape"===a.key)return a.preventDefault(),void b.close();const c=/^[a-z0-9\/\\.:\s]$/gmi;c.test(a.key)&&b.$.multiline.removeAttribute("show-placeholder")}_focusedItem(){const a=this.$.dropDownContainer.children;for(let b=0;b<a.length;b++)if(a[b].hasAttribute("focus"))return a[b]}_inputKeyUpHandler(a){const b=this;if(b.wrap){const c=b.$.multiline.value;if(c||b.$.multiline.setAttribute("show-placeholder",""),b.$.input.value=c,"Enter"===a.key){const a=b.value;b._handleValue(c),c||(b.set("value","//"),b.$.multiline.value=b.$.input.value=""),c&&b._refreshInputSelection(),b.value!==a&&b.$.fireEvent("change",{oldValue:a,value:c})}return void b._updateDropDown()}b.opened&&b._inputChangeHandler(a),"Enter"!==a.key||b.$.input.value.length||b.set("value","//")}_refreshInputSelection(a){const b=this;if(!(b.disabled||b.readonly)){if(!b.wrap)return void b.$.input.setSelectionRange(0,b.$.input.value.length);const c=new Range,d=window.getSelection(),e=b.$.multiline.childNodes[b.$.multiline.childNodes.length-1];e&&(c.setStart(e,e.length),c.collapse(!0),a&&c.selectNodeContents(e),d.removeAllRanges(),d.addRange(c))}}_getUpEventTarget(a){const b=this;let c=a;for(;c;){if(c.classList.contains(".smart-path-item")){if(c.hasAttribute("disabled"))return;c="item";break}else if(c===b.$.dropDownContainer){c="dropDownContainer";break}c=c.parentElement}if(b.enableShadowDOM&&null!==c)for(c=a.getRootNode().host;c;){if(c===b.$.dropDownContainer){c="dropDownContainer";break}c=c.parentElement}return c}_mouseOverEventHandler(a){const b=a.target,c=b.closest(".smart-drop-down-button")||b.closest(".smart-browse-button")||b.closest(".smart-input")||b.closest(".smart-path-item");!c||c.hasAttribute("disabled")||("mouseover"===a.type?c.setAttribute("hover",""):c.removeAttribute("hover"))}_createItem(a){const b=this,c=document.createElement("div");"number"==typeof a&&(a=""+a);const d=function(b,c){return void 0===a[b]?a[c]:""+a[b]};let e=("string"==typeof a?a:d(b.displayMember,"label"))||"",f=("string"==typeof a?a:d(b.valueMember,"value"))||"";return c.label=c.innerHTML=""+(b.localize(e)||e),c.value=""+(f||e),c.selected=!!a.selected&&a.selected,c.disabled=!!a.disabled&&a.disabled,c.classList.add("smart-path-item"),c}_resizeHandler(){const a=this;a._wrapRefresh(),"none"===a.resizeMode&&(a._calculateDropDownSize(),a._setDropDownSize()),a._trim()}_wrapRefresh(){const a=this;a.wrap&&(a._handleValue(a.value),a.$.multiline.removeAttribute("position-absolute"),a.offsetHeight<a.$.multiline.offsetHeight&&a.$.multiline.setAttribute("position-absolute",""))}_styleChangedHandler(){this._trim()}_setDropDownSize(){const a=this;a._dropDownSize||a._calculateDropDownSize(),["dropDownMinWidth","dropDownMinHeight","dropDownMaxWidth","dropDownMaxHeight"].forEach(b=>{a.$.dropDownContainer.style[b.replace("dropDown","").replace(/^./,"m")]=a[b]?a[b]+(a[b].toString().endsWith("%")?"%":"px"):null}),a.$.dropDownContainer.style.width=a.dropDownWidth?"auto"===a.dropDownWidth?"auto":("initial"===a.dropDownWidth?a.offsetWidth:parseFloat(a.dropDownWidth))+"px":"auto"===a._dropDownSize.width?"auto":(parseFloat(a._dropDownSize.width)||0)+"px",a.$.dropDownContainer.style.height=a.dropDownHeight&&"auto"!==a.dropDownHeight?parseFloat(a.dropDownHeight)+(-1<(a.dropDownHeight+"").indexOf("%")?"%":"px"):a._dropDownSize.height}});