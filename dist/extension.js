(()=>{"use strict";var t={112:function(t,r,e){var n=this&&this.__createBinding||(Object.create?function(t,r,e,n){void 0===n&&(n=e);var u=Object.getOwnPropertyDescriptor(r,e);u&&!("get"in u?!r.__esModule:u.writable||u.configurable)||(u={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,n,u)}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]}),u=this&&this.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&n(r,t,e);return u(r,t),r};Object.defineProperty(r,"__esModule",{value:!0}),r.deactivate=r.activate=void 0;const i=o(e(496)),a=e(997);r.activate=function(t){const r=i.commands.registerCommand("lempire.tSurroundJavaScript",(()=>(0,a.tSurroundRegister)(i.window.activeTextEditor,a.tSurroundJavaScript))),e=i.commands.registerCommand("lempire.tSurroundHTML",(()=>(0,a.tSurroundRegister)(i.window.activeTextEditor,a.tSurroundHTML))),n=i.commands.registerCommand("lempire.tSurroundHTMLSafeString",(()=>(0,a.tSurroundRegister)(i.window.activeTextEditor,a.tSurroundHTMLSafeString))),u=i.commands.registerCommand("lempire.tSurroundHTMLAttr",(()=>(0,a.tSurroundRegister)(i.window.activeTextEditor,a.tSurroundHTMLAttr)));t.subscriptions.push(r),t.subscriptions.push(e),t.subscriptions.push(n),t.subscriptions.push(u)},r.deactivate=function(){}},997:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.tSurroundRegister=r.tSurroundHTMLAttr=r.tSurroundHTMLSafeString=r.tSurroundHTML=r.tSurroundJavaScript=r.tSurround=void 0,r.tSurround=(t,r)=>{const{language:e="javascript",htmlAttr:n=!1,safeString:u=!1}=r;let o=t;const i=t.match(/\${([^}]+)}/g),a=[];if(i&&i.length>0)for(let t=0;t<i.length;t++){const r=i[t],e=r.replace("${","").replace("}","");a.push(e),o=o.replace(r,`{${t}}`)}const s=a.length?`, ${a.join(", ")}`:"";return"javascript"===e?`_t(\`${t}\`${s})`:"html"===e&&n?(o=o.startsWith('"')||o.startsWith("'")?o.substring(1,o.length):o,o=o.endsWith('"')||o.endsWith("'")?o.substring(0,o.length-1):o,`(_t '${o}'${s})`):"html"===e&&u?`{{{_t '${t}'${s}}}}`:"html"===e?`{{_t '${t}'${s}}}`:t},r.tSurroundJavaScript=t=>(0,r.tSurround)(t,{language:"javascript"}),r.tSurroundHTML=t=>(0,r.tSurround)(t,{language:"html"}),r.tSurroundHTMLSafeString=t=>(0,r.tSurround)(t,{language:"html",safeString:!0}),r.tSurroundHTMLAttr=t=>(0,r.tSurround)(t,{language:"html",htmlAttr:!0}),r.tSurroundRegister=(t,r)=>{if(t){const{selections:e,document:n}=t;e&&e.length>0&&t.edit((t=>{for(let u=0;u<e.length;u++)t.replace(e[u],r(n.getText(e[u])))}))}}},496:t=>{t.exports=require("vscode")}},r={},e=function e(n){var u=r[n];if(void 0!==u)return u.exports;var o=r[n]={exports:{}};return t[n].call(o.exports,o,o.exports,e),o.exports}(112);module.exports=e})();