class W{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const F="https://unpkg.com/@workadventure/scripting-api-extra@1.9.1/dist";class se{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new W(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function _(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(F+"/configuration.html"+e,!0)}async function ie(t,e){const n=await WA.room.getTiledMap(),r=new Map;return J(n.layers,r,t,e),r}function J(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(n&&o.name!==n||r&&!r.includes(s.name))continue;e.set(s.name,new se(s))}}else o.type==="group"&&J(o.layers,e,n,r)}let V;async function M(){return V===void 0&&(V=ae()),V}async function ae(){return ce(await WA.room.getTiledMap())}function ce(t){const e=new Map;return Q(t.layers,"",e),e}function Q(t,e,n){for(const r of t)r.type==="group"?Q(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function Z(){const t=await M(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function le(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let a=0;a<t.width;a++)s[a+i*t.width]!==0&&(e=Math.min(e,a),o=Math.max(o,a),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function ee(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const i=le(s);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ue=Object.prototype.toString,C=Array.isArray||function(e){return ue.call(e)==="[object Array]"};function D(t){return typeof t=="function"}function fe(t){return C(t)?"array":typeof t}function j(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(t,e){return t!=null&&typeof t=="object"&&e in t}function pe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ge=RegExp.prototype.test;function he(t,e){return ge.call(t,e)}var de=/\S/;function ye(t){return!he(de,t)}var me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return me[n]})}var be=/\s*/,we=/\s+/,q=/\s*=/,Ae=/\s*\}/,We=/#|\^|\/|>|\{|&|=|!/;function Se(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],i=!1,a=!1,c="",u=0;function p(){if(i&&!a)for(;s.length;)delete o[s.pop()];else s=[];i=!1,a=!1}var d,m,B;function L(b){if(typeof b=="string"&&(b=b.split(we,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(j(b[0])+"\\s*"),m=new RegExp("\\s*"+j(b[1])),B=new RegExp("\\s*"+j("}"+b[1]))}L(e||h.tags);for(var f=new k(t),v,l,y,T,I,A;!f.eos();){if(v=f.pos,y=f.scanUntil(d),y)for(var R=0,oe=y.length;R<oe;++R)T=y.charAt(R),ye(T)?(s.push(o.length),c+=T):(a=!0,n=!0,c+=" "),o.push(["text",T,v,v+1]),v+=1,T===`
`&&(p(),c="",u=0,n=!1);if(!f.scan(d))break;if(i=!0,l=f.scan(We)||"name",f.scan(be),l==="="?(y=f.scanUntil(q),f.scan(q),f.scanUntil(m)):l==="{"?(y=f.scanUntil(B),f.scan(Ae),f.scanUntil(m),l="&"):y=f.scanUntil(m),!f.scan(m))throw new Error("Unclosed tag at "+f.pos);if(l==">"?I=[l,y,v,f.pos,c,u,n]:I=[l,y,v,f.pos],u++,o.push(I),l==="#"||l==="^")r.push(I);else if(l==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+y+'" at '+v);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+v)}else l==="name"||l==="{"||l==="&"?a=!0:l==="="&&L(y)}if(p(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+f.pos);return Le(Ce(o))}function Ce(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Le(t){for(var e=[],n=e,r=[],o,s,i=0,a=t.length;i<a;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function k(t){this.string=t,this.tail=t,this.pos=0}k.prototype.eos=function(){return this.tail===""};k.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};k.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,i,a,c=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),a=0;s!=null&&a<i.length;)a===i.length-1&&(c=N(s,i[a])||pe(s,i[a])),s=s[i[a++]];else s=o.view[e],c=N(o.view,e);if(c){r=s;break}o=o.parent}n[e]=r}return D(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||h.tags).join(":"),s=typeof r<"u",i=s?r.get(o):void 0;return i==null&&(i=Se(e,n),s&&r.set(o,i)),i};g.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),a=n instanceof S?n:new S(n,void 0);return this.renderTokens(i,a,r,e,o)};g.prototype.renderTokens=function(e,n,r,o,s){for(var i="",a,c,u,p=0,d=e.length;p<d;++p)u=void 0,a=e[p],c=a[0],c==="#"?u=this.renderSection(a,n,r,o,s):c==="^"?u=this.renderInverted(a,n,r,o,s):c===">"?u=this.renderPartial(a,n,r,s):c==="&"?u=this.unescapedValue(a,n):c==="name"?u=this.escapedValue(a,n,s):c==="text"&&(u=this.rawValue(a)),u!==void 0&&(i+=u);return i};g.prototype.renderSection=function(e,n,r,o,s){var i=this,a="",c=n.lookup(e[1]);function u(m){return i.render(m,n,r,s)}if(c){if(C(c))for(var p=0,d=c.length;p<d;++p)a+=this.renderTokens(e[4],n.push(c[p]),r,o,s);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")a+=this.renderTokens(e[4],n.push(c),r,o,s);else if(D(c)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,o.slice(e[3],e[5]),u),c!=null&&(a+=c)}else a+=this.renderTokens(e[4],n,r,o,s);return a}};g.prototype.renderInverted=function(e,n,r,o,s){var i=n.lookup(e[1]);if(!i||C(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,s)};g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};g.prototype.renderPartial=function(e,n,r,o){if(r){var s=this.getConfigTags(o),i=D(r)?r(e[1]):r[e[1]];if(i!=null){var a=e[6],c=e[5],u=e[4],p=i;c==0&&u&&(p=this.indentPartial(i,u,a));var d=this.parse(p,s);return this.renderTokens(d,n,r,p,o)}}};g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||h.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new g;h.clearCache=function(){return E.clearCache()};h.parse=function(e,n){return E.parse(e,n)};h.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+fe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,n,r,o)};h.escape=ve;h.Scanner=k;h.Context=S;h.Writer=g;class te{constructor(e,n){this.template=e,this.state=n,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function Te(){var t;const e=await Z();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new te(o.value,WA.state);if(s.isPureString())continue;const i=s.getValue();await $(n.name,o.name,i),s.onChange(async a=>{await $(n.name,o.name,a)})}}}async function Pe(){var t;const e=await M();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new te(s.value,WA.state);if(i.isPureString())continue;const a=i.getValue();z(n,s.name,a),i.onChange(c=>{z(n,s.name,c)})}}}async function $(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function z(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}const Ee="https://admin.workadventu.re/html";let G,U=0,O=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Me(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=re(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ke(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=re(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ne(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(t){const e=ne(t),n=ee(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(O-o,2))}function Be(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Me(t):ke(t),K(t)}),K(t)}function H(t,e,n,r){const o=t.name;let s,i,a=!1;const c=n.getString("tag");let u=!0;c&&!WA.player.tags.includes(c)&&(u=!1);const p=!!c;function d(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function B(){let l;if(t.type==="tilelayer")l=ee(ne(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);l={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}i=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:l.right*32,y:l.top*32,width:32*3,height:32*4},allowApi:!0})}function L(){i&&(WA.room.website.delete(i.name),i=void 0)}function f(){if(a=!0,n.getBoolean("autoOpen")&&u){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!u||!p)&&(n.getString("code")||n.getString("codeVariable"))){B();return}u&&(WA.state[e.name]?d():m())}function v(){a=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),L()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(v)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(v)),WA.state.onVariableChange(e.name).subscribe(()=>{a&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&L(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ie(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-U,2)+Math.pow(t.y-O,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function xe(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ie(t)})}function X(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const s=n.name;WA.room.onEnterLayer(s).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const s=n.name;WA.room.area.onEnter(s).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function Re(t){t=t??Ee;const e=await ie();G=await M();for(const n of e.values())n.properties.get("door")&&Be(n),n.properties.get("bell")&&xe(n);for(const n of G.values()){const r=new W(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');H(n,i,r,t)}const s=r.getString("bellVariable");s&&n.type==="tilelayer"&&X(s,r,n)}for(const n of await Z()){const r=new W(n.properties),o=r.getString("doorVariable");if(o){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');H(n,i,r,t)}const s=r.getString("bellVariable");s&&X(s,r,n)}WA.player.onPlayerMove(n=>{U=n.x,O=n.y})}function Ve(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),i=t.getString("tag");je(n,e,r,o,s,i)}}function je(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Ge(){const t=await M();for(const e of t.values()){const n=new W(e.properties);Ve(n,e.name)}}let Y;async function De(t){const e=await WA.room.getTiledMap();t=t??F,Y=await M();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new W(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of Y.values()){const i=new W(s.properties),a=i.getString("openConfig");a&&s.type==="tilelayer"&&Ue(a.split(","),s.name,i)}}}function Ue(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var c;r&&r.remove(),r=WA.ui.displayActionMessage({message:(c=n.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>_(t)})}function a(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const c=n.getString("openConfigTrigger");s&&(c&&c==="onaction"?i():_(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),a()})}function Oe(){return WA.onInit().then(()=>{Re().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),De().catch(t=>console.error(t)),Pe().catch(t=>console.error(t)),Te().catch(t=>console.error(t))}).catch(t=>console.error(t))}const _e='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23FFD43B" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>';console.log("Script started successfully");let x;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("clock").subscribe(()=>{const t=new Date,e=t.getHours()+":"+t.getMinutes();x=WA.ui.openPopup("clockPopup","It's "+e,[])}),WA.room.area.onLeave("clock").subscribe(Ne),Oe().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function Ne(){x!==void 0&&(x.close(),x=void 0)}WA.onInit().then(()=>{WA.event.on("pong").subscribe(t=>{t.data==="timerStarted"?console.log("Timer has started"):console.log(t.data)})});WA.onInit().then(()=>{function t(){WA.ui.actionBar.addButton({toolTip:"start timer",type:"action",imageSrc:_e,id:"startTimer-btn",callback:()=>{WA.event.broadcast("ping","timerStart"),console.log("Button clicked"),WA.ui.actionBar.removeButton("startTimer-btn")}})}t(),WA.state.onVariableChange("timeLeft").subscribe(()=>{w===0&&t()})});WA.onInit().then(()=>{const t=WA.state.timeLeft;console.log("Initial time left:",t),WA.state.onVariableChange("timeLeft").subscribe(e=>{console.log("Time left changed:",e)})});WA.onInit().then(()=>{WA.event.on("pong").subscribe(t=>{console.log(t.data)})});WA.state.onVariableChange("timeLeft").subscribe(async t=>{const e=t;console.log("Time left changed:",e);const n=`https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(e.toString())}&imageType=caption&width=120&height=60&color=yellow`;console.log("New img-url of title is "+n);const r=await WA.room.website.get("timeLeftDisplay");r.url=n,r.visible=!0,console.log(`Title for timeLeft has been changed to ${r.url}`)});WA.onInit().then(()=>{});let P,w=25*60;WA.onInit().then(()=>{WA.event.on("ping").subscribe(t=>{t.data==="timerStart"?(console.log("Ping received: starting timer"),qe()):console.log(t.data)})});function qe(){P&&clearInterval(P),WA.state.timeLeft="25",w=25*60,WA.state.timeLeft=w/60,WA.event.broadcast("pong","timerStarted"),console.log("Initial time left:",w),P=setInterval(()=>{w>0?(w-=60,WA.state.timeLeft=w/60,console.log("Time left:",w/60,"minutes")):(clearInterval(P),P=void 0,console.log("Timer has ended"))},6e4)}
//# sourceMappingURL=main-2bc2c477.js.map
