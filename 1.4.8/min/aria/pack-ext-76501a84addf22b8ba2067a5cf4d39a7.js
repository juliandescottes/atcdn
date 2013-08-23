/*
 * Aria Templates 1.4.8 - 23 Aug 2013
 *
 * Copyright 2009-2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//***MULTI-PART
//*******************
//LOGICAL-PATH:aria/ext/BundleAnalyzer.js
//*******************
Aria.classDefinition({$classpath:"aria.ext.BundleAnalyzer",$singleton:!0,$constructor:function(){this._evalContext="var Aria={},p;Aria.resourcesDefinition=function(c){p={type:'res',path:c.$classpath}};";for(var t in Aria)Aria.hasOwnProperty(t)&&Aria[t]&&Aria[t].call&&"resourcesDefinition"!==t&&(this._evalContext+="Aria."+t+"=function(){};")},$prototype:{getReport:function(){var t=aria.core.Cache.content,e=[];for(var i in t.urls)t.urls.hasOwnProperty(i)&&e.push(i);var s={},a=[],n=[];for(i in t.classes)t.classes.hasOwnProperty(i)&&(s[aria.core.Cache.getFilename(i)]=!0);for(i in t.files)if(t.files.hasOwnProperty(i))if(t.files[i].status!==aria.core.Cache.STATUS_AVAILABLE)n.push(i);else{var r=this._getClassDescription(t.files[i].value);r?"res"!==r.type||t.classes[r.path]||a.push(i):s[i]||a.push(i)}return{downloaded:e,useless:a,error:n}},_getClassDescription:function(classContent){try{return eval("(function(){"+this._evalContext+classContent+";return p})()")}catch(ex){}}}});
//*******************
//LOGICAL-PATH:aria/ext/StressCss.js
//*******************
(function(){function t(t,e){return e.toUpperCase()}var e={},i=null,s=null,a=-1,n=function(t,e){if(t!==!0)aria.templates.CSSMgr.__textToDOM(aria.utils.Object.keys(aria.templates.CSSMgr.__styleTagPool));else{var i={};for(var s in aria.templates.CSSMgr.__styleTagPool)aria.templates.CSSMgr.__styleTagPool.hasOwnProperty(s)&&(i[s]="tpl"===s&&e?[e]:[]);aria.templates.CSSMgr.__reloadStyleTags(i)}},r=function(){var t=aria.ext.StressCss;t.original__load=aria.templates.CSSMgr.__load,t.original__unload=aria.templates.CSSMgr.__unload,aria.templates.CSSMgr.__load=function(){return[]},aria.templates.CSSMgr.__unload=function(){},n()},o=function(){var t=aria.ext.StressCss;aria.templates.CSSMgr.__load=t.original__load,aria.templates.CSSMgr.__unload=t.original__unload,n()},l=function(t,e){for(var i=null,s=[],a=aria.utils.String.trim,n=/[\s]*(([^{]+)\{[^}]+\})/g;i=n.exec(t);)s.push({name:e+": "+a(i[2]),descriptor:i[1],location:e});return s},c=function(t){var e=aria.templates.CSSMgr,i=e.__textLoaded,s=[];for(var a in i)if(i.hasOwnProperty(a)){if(t!==!0&&"wgt"===e.__styleTagAssociation[a])continue;s=s.concat(l(i[a].text,a))}return s},h=function(t,e){if(t){var i=aria.templates.CSSMgr.__textLoaded[t.location];t.original=i.text,e?n(!0,t.descriptor):(i.text=i.text.replace(t.descriptor,""),n())}else{if(!e)return;n(!0)}},u=function(t,e){if(t)aria.templates.CSSMgr.__textLoaded[t.location].text=t.original,n();else{if(!e)return;n()}},d=function(t){t.callback&&t.callback.fn.apply(t.callback.scope,t.callback.args)},p=function(t){var i=+new Date;t.runTime=i-t.start,e[t.name]={name:t.name,runTime:t.runTime,baseline:e.__baseline__?e.__baseline__.runTime-t.runTime:0/0},u(t.selector,t.cfg.incremental),setTimeout(function(){d(t)},15)},_=function(t,e){return function(){setTimeout(function(){g.call(e,t)},0)}},g=function(t){return t.iteration>=t.cfg.repeat?p(t):(t.iteration+=1,t.cfg.action.call(null,t.name,t.iteration-1,_(t,this)),void 0)},f=function(e,i){for(var s in i)if(i.hasOwnProperty(s))try{var a=s.replace(/\-([a-z])/gi,t),n=i[s];e.style[a]="number"==typeof n&&"zIndex"!=a?n+"px":n}catch(r){}},m=function(){return i?(i.parentNode.removeChild(i),i=null,!1):void 0},$=function(){var t=Aria.$window.document;i=t.createElement("iframe");var e=t.createElement("iframe");i.scrolling="no",i.frameBorder="no",t.body.appendChild(i),i.doc=i.contentDocument||i.contentWindow.document,i.doc.write("<html><head></head><body></body></html>"),i.doc.close(),s=i.doc.createElement("div");var n=i.doc.createElement("a");i.resize=function(){if(i){var t=i.doc.body;f(i,{width:t.scrollWidth,height:t.scrollHeight})}},a=setInterval(i.resize,100),f(i,{position:"fixed",top:10,right:10,zIndex:1e4,background:"white",padding:2,border:"solid 2px #aaa",width:250,height:60,borderRadius:4,boxShadow:"0 0 8px #eee"}),f(i.doc.body,{font:"12px Helvetica,Arials,sans-serif",color:"#444"}),f(s,{whiteSpace:"nowrap"}),n.innerHTML="&#215;",f(n,{position:"absolute",top:0,right:0,textDecoration:"none",fontWeight:"bold",cursor:"pointer",color:"red",fontSize:"1.3em",lineHeight:8}),n.onclick=function(){return n.onclick=null,clearInterval(a),n=null,e.parentNode.removeChild(e),m()},f(e,{height:2*Aria.$window.screen.height,width:Aria.$window.screen.width,position:"absolute",top:0,left:0,visible:"hidden",display:"none",zIndex:0}),t.body.appendChild(e),i.doc.body.appendChild(n),i.doc.body.appendChild(s)},y=function(t){var e=!(t.selector&&"*"!==t.selector.name);if(s){var i=t.cfg.allSelectors.length,a="Testing <strong>"+(e?t.name:t.selector.name)+"</strong>",n="<br />"+(e?"baseline":t.selector.location),r="<br />"+i+" remaining test"+(1===i?"":"s");s.innerHTML=a+n+r}},v=function(t){if(i&&e){var a="<table><thead><tr><th>Selector</th><th> </th><th>ms</th><th>Total</th></tr></thead><tbody>",n=[];for(var r in e)e.hasOwnProperty(r)&&"__baseline__"!==r&&n.push(e[r]);for(var o=n.sort(function(e,i){return e.baseline===i.baseline?0:t?e.baseline>i.baseline?1:-1:e.baseline>i.baseline?-1:1}).slice(0,20),l=0,c=o.length;c>l;l+=1){var h=o[l];a+='<tr><td style="font:11px monospace">Removing <strong>'+h.name+'</strong></td><td style="text-align:right">'+(h.baseline>0?'<span style="color:green">saves</span>':'<span style="color:red">adds</span>')+'</td><td style="text-align:right; font:11px monospace">'+Math.abs(h.baseline)+"ms</td>"+'<td style="text-align:right; font:11px monospace">'+h.runTime+"ms</td></tr>\n"}a+="</tbody></table><hr/>",a+='<table><tr><td style="text-align:right; font:10px monospace">Selectors Tested:</td><td style="font:10px monospace">'+n.length+"</td></tr>"+'<tr><td style="text-align:right; font:10px monospace">Baseline Time:</td><td style="font:10px monospace">'+e.__baseline__.runTime+"ms</td></tr>",f(i,{width:600}),s.innerHTML=a}},w=function(t){t.iteration=0,h(t.selector,t.cfg.incremental),y(t),t.start=+new Date,g(t)},b=function(t,e){if(t.allSelectors.length>0){var i=t.allSelectors.splice(0,1)[0],s={name:i.name,cfg:t,selector:i,callback:{fn:b,scope:this,args:[t,e]}};w(s)}else v(t.incremental),aria.ext.StressCss.__callback(e)},C=function(t,i){e={};var s={name:"__baseline__",cfg:t,selector:null,callback:{fn:b,scope:this,args:[t,i]}};w(s)},E={repeat:2,silent:!1,widget:!1,action:function(t,e,i){for(var s=0,a=Aria.rootTemplates.length;a>s;s+=1)Aria.rootTemplates[s].$refresh();i()},incremental:!1},T=function(t){t=t||{};for(var e in E)!E.hasOwnProperty(e)||e in t||(t[e]=E[e]);return t.allSelectors=c(t.widget),t};Aria.classDefinition({$classpath:"aria.ext.StressCss",$singleton:!0,$dependencies:["aria.utils.Object","aria.utils.String"],$prototype:{stressTest:function(t,e){r(),t=T(t),m(),t.silent||$(),C(t,e)},getResults:function(){return e},__callback:function(t){o(),this.$callback(t)}}})})();
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/GeneratorBeans.js
//*******************
Aria.beanDefinitions({$package:"aria.ext.filesgenerator.GeneratorBeans",$namespaces:{json:"aria.core.JsonTypes"},$beans:{classSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.Class"},$description:{$type:"json:String",$default:"The description of this class and how it should be used"},$extends:{$type:"json:String",$default:"aria.core.JsObject"},$singleton:{$type:"json:Boolean",$default:!1},$dependencies:{$type:"json:Array",$default:null,$contentType:{$type:"json:String"}},$implements:{$type:"json:Array",$default:null,$contentType:{$type:"json:String"}}}},interfaceSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.IClass"},$description:{$type:"json:String",$default:"The description of this interface and how it should be implemented"},$extends:{$type:"json:String",$default:null}}},htmlTemplateSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyTemplate"},$extends:{$type:"json:String",$default:null},$hasScript:{$type:"json:Boolean",$default:!1},$css:{$type:"json:Array",$default:null,$contentType:{$type:"json:String"}},content:{$type:"json:String"}}},cssTemplateSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyCssTemplate"},$hasScript:{$type:"json:Boolean",$default:!1}}},templateScriptSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyTemplateScript"}}},macroLibrarySkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyTemplateScript"},$hasScript:{$type:"json:Boolean",$default:!1}}},cssLibrarySkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyTemplateScript"},$hasScript:{$type:"json:Boolean",$default:!1}}},flowControllerSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyFlowController"},$description:{$type:"json:String",$default:"The description of this flow controller implementation"},$publicInterface:{$type:"json:String",$default:"company.package.IMyFlowController"},$implements:{$type:"json:Array",$default:[],$contentType:{$type:"json:String"}},$extends:{$type:"json:String",$default:"aria.templates.FlowCtrl"},$dependencies:{$type:"json:Array",$default:null,$contentType:{$type:"json:String"}}}},moduleControllerSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyModuleController"},$publicInterface:{$type:"json:String",$default:"company.package.IMyModuleController"},$implements:{$type:"json:Array",$default:[],$contentType:{$type:"json:String"}},$extends:{$type:"json:String",$default:"aria.templates.ModuleCtrl"},$description:{$type:"json:String",$default:"The description of this module controller implementation"},$dependencies:{$type:"json:Array",$default:null,$contentType:{$type:"json:String"}},$hasFlowCtrl:{$type:"json:Boolean",$default:!1}}},moduleControllerInterfaceSkeletonTemplate:{$type:"interfaceSkeletonTemplate"},flowControllerInterfaceSkeletonTemplate:{$type:"interfaceSkeletonTemplate"},bootstrapSkeletonTemplate:{$type:"json:Object",$properties:{$classpath:{$type:"json:String",$default:"company.package.MyTemplate"},$fwkpath:{$type:"json:String"},$fwkskin:{$type:"json:String"},$moduleCtrl:{$type:"json:String",$default:null}}}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/Class.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.Class",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write("/**\n * ",18),this.__$write(data.$description,19),this.__$write("\n * @class ",20),this.__$write(data.$classpath,20),this.__$write("\n * @extends ",21),this.__$write(data.$extends,21),data.$singleton&&this.__$write("\n * @singleton",22),this.__$write('\n */\nAria.classDefinition({\n    $classpath : "',23),this.__$write(data.$classpath,25),this.__$write('",\n    $extends : "',25),this.__$write(data.$extends,26),this.__$write('",',26),data.$singleton&&this.__$write("\n    $singleton : true,",27),data.$dependencies){this.__$write("\n    $dependencies : [",28);var __v_1=data.$dependencies;void 0==data.$dependencies&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",28]);var d_ct=0;for(var d_index in __v_1)if(__v_1.hasOwnProperty(d_index)&&!this.$json.isMetadata(d_index)){var d=__v_1[d_index];d_ct++,d_ct>1&&this.__$write(", ",28),this.__$write('"',28),this.__$write(d,28),this.__$write('"',28)}this.__$write("],",28)}if(data.$implements){this.__$write("\n    $implements : [",29);var __v_2=data.$implements;void 0==data.$implements&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",29]);var i_ct=0;for(var i_index in __v_2)if(__v_2.hasOwnProperty(i_index)&&!this.$json.isMetadata(i_index)){var i=__v_2[i_index];i_ct++,i_ct>1&&this.__$write(", ",29),this.__$write('"',29),this.__$write(i,29),this.__$write('"',29)}this.__$write("],",29)}this.__$write("\n    $constructor : function () {},\n    $destructor : function () {},\n    $prototype : {}\n});",30)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.Class.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/Interface.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.Interface",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write("/**\n * ",18),this.__$write(data.$description,19),this.__$write("\n * @class ",20),this.__$write(data.$classpath,20),this.__$write('\n */\nAria.interfaceDefinition({\n    $classpath : "',21),this.__$write(data.$classpath,23),this.__$write('",',23),data.$extends&&(this.__$write('\n    $extends : "',24),this.__$write(data.$extends,24),this.__$write('",',24)),this.__$write("\n    $interface : {}\n});",25)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.Interface.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/HtmlTemplate.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.HtmlTemplate",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write('{Template {\n    $classpath : "',18),this.__$write(data.$classpath,19),this.__$write('",',19),data.$extends&&(this.__$write('\n    $extends : "',20),this.__$write(data.$extends,20),this.__$write('",',20)),this.__$write("\n    $hasScript : ",21),this.__$write(data.$hasScript,21),data.$css){this.__$write(",\n    $css : [",21);var __v_1=data.$css;void 0==data.$css&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",22]);var c_ct=0;for(var c_index in __v_1)if(__v_1.hasOwnProperty(c_index)&&!this.$json.isMetadata(c_index)){var c=__v_1[c_index];c_ct++,c_ct>1&&this.__$write(", ",22),this.__$write('"',22),this.__$write(c,22),this.__$write('"',22)}this.__$write("]",22)}this.__$write("\n}}\n\n    ",23),data.content?this.__$write(data.content,25):this.__$write("{macro main()}\n    {/macro}",25),this.__$write("\n    \n{/Template}\n",27)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.HtmlTemplate.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/CssTemplate.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.CssTemplate",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('{CSSTemplate {\n    $classpath : "',18),this.__$write(data.$classpath,19),this.__$write('",\n    $hasScript : ',19),this.__$write(data.$hasScript,20),this.__$write("\n}}\n    {macro main()}\n        \n       {/macro}\n{/CSSTemplate}",21)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.CssTemplate.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/TemplateScript.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.TemplateScript",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('Aria.tplScriptDefinition({\n    $classpath : "',18),this.__$write(data.$classpath,19),this.__$write('",\n    $prototype : {       \n            showAlert: function() {}\n    }\n});',19)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.TemplateScript.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/MacroLibrary.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.MacroLibrary",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('{Library {\n    $classpath : "',18),this.__$write(data.$classpath,19),this.__$write('",\n    $hasScript : ',19),this.__$write(data.$hasScript,20),this.__$write("\n}}\n    {macro sayHello(name)}\n        Hello, ${name}!\n    {/macro}\n{/Library}",21)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.MacroLibrary.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/CssLibrary.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.CssLibrary",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('{CSSLibrary {\n    $classpath : "',18),this.__$write(data.$classpath,19),this.__$write('",\n    $hasScript : ',19),this.__$write(data.$hasScript,20),this.__$write("\n}}\n    {macro example()}\n\n    {/macro}\n{/CSSLibrary}",21)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.CssLibrary.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/FlowController.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.FlowController",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write(function(){var t=data.$extends.split(".");data.superClassName="$"+t[t.length-1]}(),19),this.__$write("\n/**\n * ",23),this.__$write(data.$description,24),this.__$write("\n * @class ",25),this.__$write(data.$classpath,25),this.__$write("\n * @extends ",26),this.__$write(data.$extends,26),this.__$write('\n */\nAria.classDefinition({\n    $classpath : "',27),this.__$write(data.$classpath,29),this.__$write('",\n    $extends : "',29),this.__$write(data.$extends,30),this.__$write('",',30),data.$dependencies){this.__$write("\n    $dependencies : [",31);var __v_1=data.$dependencies;void 0==data.$dependencies&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",31]);var d_ct=0;for(var d_index in __v_1)if(__v_1.hasOwnProperty(d_index)&&!this.$json.isMetadata(d_index)){var d=__v_1[d_index];d_ct++,d_ct>1&&this.__$write(", ",31),this.__$write('"',31),this.__$write(d,31),this.__$write('"',31)}this.__$write("],",31)}if(this.__$write('\n    $implements : ["',32),this.__$write(data.$publicInterface,32),this.__$write('"',32),data.$implements){var __v_2=data.$implements;void 0==data.$implements&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",32]);var i_ct=0;for(var i_index in __v_2)if(__v_2.hasOwnProperty(i_index)&&!this.$json.isMetadata(i_index)){var i=__v_2[i_index];i_ct++,this.__$write(', "',32),this.__$write(i,32),this.__$write('"',32)}}this.__$write("],\n    $constructor : function () {\n        this.",32),this.__$write(data.superClassName,34),this.__$write(".constructor.call(this);\n    },\n    $destructor : function () {\n        this.",34),this.__$write(data.superClassName,37),this.__$write('.$destructor.call(this);\n    },\n    $prototype : {\n        $publicInterfaceName : "',37),this.__$write(data.$publicInterface,40),this.__$write('"\n    }\n});',40)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.FlowController.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/ModuleController.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.ModuleController",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write(function(){var t=data.$extends.split(".");data.superClassName="$"+t[t.length-1]}(),19),this.__$write("\n/**\n * ",23),this.__$write(data.$description,24),this.__$write("\n * @class ",25),this.__$write(data.$classpath,25),this.__$write("\n * @extends ",26),this.__$write(data.$extends,26),this.__$write('\n */\nAria.classDefinition({\n    $classpath : "',27),this.__$write(data.$classpath,29),this.__$write('",\n    $extends : "',29),this.__$write(data.$extends,30),this.__$write('",',30),data.$dependencies){this.__$write("\n    $dependencies : [",31);var __v_1=data.$dependencies;void 0==data.$dependencies&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",31]);var d_ct=0;for(var d_index in __v_1)if(__v_1.hasOwnProperty(d_index)&&!this.$json.isMetadata(d_index)){var d=__v_1[d_index];d_ct++,d_ct>1&&this.__$write(", ",31),this.__$write('"',31),this.__$write(d,31),this.__$write('"',31)}this.__$write("],",31)}if(this.__$write('\n    $implements : ["',32),this.__$write(data.$publicInterface,32),this.__$write('"',32),data.$implements){var __v_2=data.$implements;void 0==data.$implements&&this.$logError(this.ITERABLE_UNDEFINED,["foreach",32]);var i_ct=0;for(var i_index in __v_2)if(__v_2.hasOwnProperty(i_index)&&!this.$json.isMetadata(i_index)){var i=__v_2[i_index];i_ct++,this.__$write(', "',32),this.__$write(i,32),this.__$write('"',32)}}this.__$write("],\n    $constructor : function () {                    \n        this.",32),this.__$write(data.superClassName,34),this.__$write(".constructor.call(this);\n    },\n    $destructor : function () {\n        this.",34),this.__$write(data.superClassName,37),this.__$write('.$destructor.call(this);\n    },\n    $prototype : {\n        $publicInterfaceName : "',37),this.__$write(data.$publicInterface,40),this.__$write('"',40),data.$hasFlowCtrl&&this.__$write(",\n        $hasFlowCtrl : true",40),this.__$write("        \n    }\n});",41)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.ModuleController.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/ModuleControllerInterface.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.ModuleControllerInterface",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$texts:{interfaceTxtTpl:"aria.ext.filesgenerator.tpl.Interface"},$prototype:{macro_main:function(){try{with(this)this.__$write(function(){data.$extends="aria.templates.IModuleCtrl"}(),23),this.__$write(interfaceTxtTpl.processTextTemplate(data),23)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.ModuleControllerInterface.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/FlowControllerInterface.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.FlowControllerInterface",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$texts:{interfaceTxtTpl:"aria.ext.filesgenerator.tpl.Interface"},$prototype:{macro_main:function(){try{with(this)this.__$write(function(){data.$extends="aria.templates.IFlowCtrl"}(),23),this.__$write(interfaceTxtTpl.processTextTemplate(data),23)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.FlowControllerInterface.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/tpl/Bootstrap.tpl.txt
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.tpl.Bootstrap",$extends:"aria.templates.TextTemplate",$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\n<head>\n        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />\n\n        <title>My Title</title>\n\n        <!-- load the framework entry point -->\n        <script type="text/javascript" src="',19),this.__$write(data.$fwkpath,27),this.__$write('"></script>\n        <script type="text/javascript" src="',27),this.__$write(data.$fwkskin,28),this.__$write('"></script>\n</head>\n<body>\n        <div id=\'container\'></div>\n        <script type="text/javascript">\n                Aria.loadTemplate({\n                        classpath:"',28),this.__$write(data.$classpath,34),this.__$write('",\n                        div:"container"',34),data.$moduleCtrl&&(this.__$write(',\n                        moduleCtrl: {classpath:"',35),this.__$write(data.$moduleCtrl,36),this.__$write('"}',36)),this.__$write("\n                });\n        </script>\n</body>\n</html>\n",37)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,["main",this["aria:currentLineNumber"]],_ex)}},$init:function(){aria.ext.filesgenerator.tpl.Bootstrap.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});
//*******************
//LOGICAL-PATH:aria/ext/filesgenerator/Generator.js
//*******************
Aria.classDefinition({$classpath:"aria.ext.filesgenerator.Generator",$extends:"aria.core.JsObject",$singleton:!0,$dependencies:["aria.core.JsonValidator","aria.ext.filesgenerator.GeneratorBeans"],$texts:{classTxtTplHandle:"aria.ext.filesgenerator.tpl.Class",interfaceTxtTplHandle:"aria.ext.filesgenerator.tpl.Interface",htmlTemplateTxtTplHandle:"aria.ext.filesgenerator.tpl.HtmlTemplate",cssTemplateTxtTplHandle:"aria.ext.filesgenerator.tpl.CssTemplate",templateScriptTxtTplHandle:"aria.ext.filesgenerator.tpl.TemplateScript",macroLibraryTxtTplHandle:"aria.ext.filesgenerator.tpl.MacroLibrary",cssLibraryTxtTplHandle:"aria.ext.filesgenerator.tpl.CssLibrary",flowControllerTxtTplHandle:"aria.ext.filesgenerator.tpl.FlowController",moduleControllerTxtTplHandle:"aria.ext.filesgenerator.tpl.ModuleController",moduleControllerInterfaceTxtTplHandle:"aria.ext.filesgenerator.tpl.ModuleControllerInterface",flowControllerInterfaceTxtTplHandle:"aria.ext.filesgenerator.tpl.FlowControllerInterface",bootstrapTxtTplHandle:"aria.ext.filesgenerator.tpl.Bootstrap"},$statics:{TYPE_CLASS:"class",TYPE_INTERFACE:"interface",TYPE_HTMLTEMPLATE:"htmlTemplate",TYPE_CSSTEMPLATE:"cssTemplate",TYPE_TEMPLATESCRIPT:"templateScript",TYPE_MACROLIBRARY:"macroLibrary",TYPE_CSSLIBRARY:"cssLibrary",TYPE_FLOWCONTROLLER:"flowController",TYPE_MODULECONTROLLER:"moduleController",TYPE_MODULECONTROLLERINTERFACE:"moduleControllerInterface",TYPE_FLOWCONTROLLERINTERFACE:"flowControllerInterface",TYPE_BOOTSTRAP:"bootstrap"},$constructor:function(){this.__classNameCounter=0},$prototype:{generateFile:function(t,e){if(t&&(t=this.__isAllowedType("TYPE_"+t.toUpperCase()))){var i=this.__getSkeleton(this[t+"TxtTplHandle"],"aria.ext.filesgenerator.GeneratorBeans."+t+"SkeletonTemplate",e);return{type:t,classpath:i.cfg.$classpath,content:i.content}}return null},generateHtmlTemplate:function(t,e,i,s){var a=[],n={$classpath:t};if(e){var r=t+"Script";n.$hasScript=!0,a.push(this.generateFile(this.TYPE_TEMPLATESCRIPT,{$classpath:r}))}if(i){var o=t+"Style";n.$css=[o],a.push(this.generateFile(this.TYPE_CSSTEMPLATE,{$classpath:o}))}return s&&(n.content=s),a.push(this.generateFile(this.TYPE_HTMLTEMPLATE,n)),a},generateModuleCtrl:function(t,e){var i=[],s=t.lastIndexOf("."),a=t.substring(0,s),n=t.substring(s+1),r=a+".I"+n;if(i.push(this.generateFile(this.TYPE_MODULECONTROLLERINTERFACE,{$classpath:r,$description:t+" public interface definition"})),i.push(this.generateFile(this.TYPE_MODULECONTROLLER,{$classpath:t,$description:"My module controller",$publicInterface:r,$hasFlowCtrl:e})),e){var o=a+".I"+n+"Flow",l=t+"Flow";i.push(this.generateFile(this.TYPE_FLOWCONTROLLERINTERFACE,{$classpath:o,$description:l+" public interface definition"})),i.push(this.generateFile(this.TYPE_FLOWCONTROLLER,{$classpath:l,$publicInterface:o,$description:"My flow controller"}))}return i},getUniqueClasspathIn:function(t){return t+"."+"Class"+this.__classNameCounter++},__isAllowedType:function(t){return aria.utils.Json.getValue(this,t)},__getSkeleton:function(t,e,i){return i||(i={}),aria.core.JsonValidator.normalize({json:i,beanName:e}),{cfg:i,content:t.processTextTemplate(i)}}}});