const __vite__fileDeps=["assets/_...404_-CW8n66FV.js","assets/web-Dv6iwYaT.js","assets/routing-p9N2QEo-.js","assets/index-zSnyz2rG.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as z,a as R,b as p,g as j,u as H,S as U,o as K,d as Z,e as G,f as F,h as J,s as $,m as L,i as q,t as A,l as X,j as Y,E as Q,r as ee}from"./web-Dv6iwYaT.js";import{c as te,a as ne,R as re,b as oe,d as ae,m as se,k as ie,s as le,e as ce,n as ue}from"./routing-p9N2QEo-.js";const de="modulepreload",fe=function(e){return"/_build/"+e},x={},b=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");o=Promise.all(t.map(s=>{if(s=fe(s),s in x)return;x[s]=!0;const u=s.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":de,u||(f.as="script",f.crossOrigin=""),f.href=s,i&&f.setAttribute("nonce",i),document.head.appendChild(f),u)return new Promise((g,w)=>{f.addEventListener("load",g),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>n()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},S="Invariant Violation",{setPrototypeOf:he=function(e,n){return e.__proto__=n,e}}=Object;class k extends Error{framesToPop=1;name=S;constructor(n=S){super(typeof n=="number"?`${S}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),he(this,k.prototype)}}function P(e,n){if(!e)throw new k(n)}const me=/^[A-Za-z]:\//;function pe(e=""){return e&&e.replace(/\\/g,"/").replace(me,n=>n.toUpperCase())}const ge=/^[/\\]{2}/,we=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ee=/^[A-Za-z]:$/,be=function(e){if(e.length===0)return".";e=pe(e);const n=e.match(ge),t=C(e),r=e[e.length-1]==="/";return e=_e(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Ee.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!C(e)?`/${e}`:e)},B=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":be(n.replace(/\/\/+/g,"/"))};function _e(e,n){let t="",r=0,o=-1,a=0,i=null;for(let s=0;s<=e.length;++s){if(s<e.length)i=e[s];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===s-1||a===1))if(a===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const u=t.lastIndexOf("/");u===-1?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),o=s,a=0;continue}else if(t.length>0){t="",r=0,o=s,a=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(o+1,s)}`:t=e.slice(o+1,s),r=s-o-1;o=s,a=0}else i==="."&&a!==-1?++a:a=-1}return t}const C=function(e){return we.test(e)};function ve(e){return`virtual:${e}`}function ye(e){return e.handler?.endsWith(".html")?C(e.handler)?e.handler:B(e.root,e.handler):`#vinxi/handler/${e.name}`}const Re=new Proxy({},{get(e,n){return P(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:ve(ye({name:n})),baseURL:"/_build",chunks:new Proxy({},{get(t,r){P(typeof r=="string","Chunk expected");let o=B("/_build",r+".mjs");return{import(){return b(()=>import(o),[])},output:{path:o}}}}),inputs:new Proxy({},{get(t,r){P(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return b(()=>import(o),[])},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Re;const Ae=e=>n=>{const{base:t}=n,r=z(()=>n.children),o=R(()=>te(r(),n.base||""));let a;const i=ne(e,o,()=>a,{base:t,singleFlight:n.singleFlight});return e.create&&e.create(i),p(re.Provider,{value:i,get children(){return p($e,{routerState:i,get root(){return n.root},get load(){return n.rootLoad},get children(){return[R(()=>(a=j())&&null),p(Le,{routerState:i,get branches(){return o()}})]}})}})};function $e(e){const n=e.routerState.location,t=e.routerState.params,r=R(()=>e.load&&H(()=>e.load({params:t,location:n,intent:"preload"})));return p(U,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>p(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Le(e){const n=[];let t;const r=R(K(e.routerState.matches,(o,a,i)=>{let s=a&&o.length===a.length;const u=[];for(let l=0,f=o.length;l<f;l++){const g=a&&a[l],w=o[l];i&&g&&w.route.key===g.route.key?u[l]=i[l]:(s=!1,n[l]&&n[l](),Z(E=>{n[l]=E,u[l]=ae(e.routerState,u[l-1]||e.routerState.base,O(()=>r()[l+1]),()=>e.routerState.matches()[l])}))}return n.splice(o.length).forEach(l=>l()),i&&s?i:(t=u[0],u)}));return O(()=>r()&&t)()}const O=e=>()=>p(U,{get when(){return e()},keyed:!0,children:n=>p(oe.Provider,{value:n,get children(){return n.outlet()}})});function Se([e,n],t,r){return[e,r?o=>n(r(o)):n]}function Pe(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Ce(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=Se(G(t(e.get()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!n&&e.set(o),o));return e.init&&F(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),Ae({signal:r,create:e.create,utils:e.utils})}function ke(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function Te(e,n){const t=Pe(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const Ne=new Map;function xe(e=!0,n=!1,t="/_server"){return r=>{const o=r.base.path(),a=r.navigatorFactory(r.base);let i={};function s(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function u(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const d=c.composedPath().find(N=>N instanceof Node&&N.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const m=s(d),h=m?d.href.baseVal:d.href;if((m?d.target.baseVal:d.target)||!h&&!d.hasAttribute("state"))return;const v=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||v&&v.includes("external"))return;const y=m?new URL(h,document.baseURI):new URL(h);if(!(y.origin!==window.location.origin||o&&y.pathname&&!y.pathname.toLowerCase().startsWith(o.toLowerCase())))return[d,y]}function l(c){const d=u(c);if(!d)return;const[m,h]=d,T=r.parsePath(h.pathname+h.search+h.hash),v=m.getAttribute("state");c.preventDefault(),a(T,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function f(c){const d=u(c);if(!d)return;const[m,h]=d;i[h.pathname]||r.preloadRoute(h,m.getAttribute("preload")!=="false")}function g(c){const d=u(c);if(!d)return;const[m,h]=d;i[h.pathname]||(i[h.pathname]=setTimeout(()=>{r.preloadRoute(h,m.getAttribute("preload")!=="false"),delete i[h.pathname]},200))}function w(c){const d=u(c);if(!d)return;const[,m]=d;i[m.pathname]&&(clearTimeout(i[m.pathname]),delete i[m.pathname])}function E(c){if(c.defaultPrevented)return;let d=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const h=new URL(d,se);if(d=r.parsePath(h.pathname+h.search),!d.startsWith(t))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const m=Ne.get(d);if(m){c.preventDefault();const h=new FormData(c.target);c.submitter&&c.submitter.name&&h.append(c.submitter.name,c.submitter.value),m.call({r,f:c.target},h)}}J(["click","submit"]),document.addEventListener("click",l),e&&(document.addEventListener("mouseover",g),document.addEventListener("mouseout",w),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",E),F(()=>{document.removeEventListener("click",l),e&&(document.removeEventListener("mouseover",g),document.removeEventListener("mouseout",w),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",E)})}}function Oe(e){const n=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),t=ce();return Ce({get:n,set({value:r,replace:o,scroll:a,state:i}){o?window.history.replaceState(ie(i),"",r):window.history.pushState(i,"",r),Te(window.location.hash.slice(1),a),le()},init:r=>ke(window,"popstate",ue(r,o=>{if(o&&o<0)return!t.confirm(o);{const a=n();return!t.confirm(a.value,{state:a.state})}})),create:xe(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function De(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Ie=A("<style>"),Me=A("<link>"),Ue=A("<script> ");const Fe={style:e=>(()=>{var n=Ie();return $(n,L(()=>e.attrs),!1,!0),q(n,()=>e.children),n})(),link:e=>(()=>{var n=Me();return $(n,L(()=>e.attrs),!1,!1),n})(),script:e=>e.attrs.src?(()=>{var n=Ue();return $(n,L(()=>e.attrs,{get id(){return e.key}}),!1,!0),n})():null};function qe(e){let{tag:n,attrs:{key:t,...r}={key:void 0},children:o}=e;return Fe[n]({attrs:r,key:t,children:o})}function Be(e,n,t,r="default"){return X(async()=>{{const a=(await e.import())[r],s=(await n.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&De(s),{default:l=>[...s.map(f=>qe(f)),p(a,l)]}}})}const _={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ve(e={}){const n={options:e,rootNode:V(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)D(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>We(n,t(r)),insert:(r,o)=>D(n,t(r),o),remove:r=>ze(n,t(r))}}function We(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let a=!1,i=null,s=e.rootNode,u=null;for(let l=0;l<r.length;l++){const f=r[l];s.wildcardChildNode!==null&&(i=s.wildcardChildNode,u=r.slice(l).join("/"));const g=s.children.get(f);if(g===void 0){if(s&&s.placeholderChildren.length>1){const w=r.length-l;s=s.placeholderChildren.find(E=>E.maxDepth===w)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=f),a=!0}else s=g}return(s===null||s.data===null)&&i!==null&&(s=i,o[s.paramName||"_"]=u,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function D(e,n,t){let r=!0;const o=n.split("/");let a=e.rootNode,i=0;const s=[a];for(const u of o){let l;if(l=a.children.get(u))a=l;else{const f=je(u);l=V({type:f,parent:a}),a.children.set(u,l),f===_.PLACEHOLDER?(l.paramName=u==="*"?`_${i++}`:u.slice(1),a.placeholderChildren.push(l),r=!1):f===_.WILDCARD&&(a.wildcardChildNode=l,l.paramName=u.slice(3)||"_",r=!1),s.push(l),a=l}}for(const[u,l]of s.entries())l.maxDepth=Math.max(s.length-u,l.maxDepth||0);return a.data=t,r===!0&&(e.staticRoutesMap[n]=a),a}function ze(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return t;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function V(e={}){return{type:e.type||_.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function je(e){return e.startsWith("**")?_.WILDCARD:e[0]===":"||e==="*"?_.PLACEHOLDER:_.NORMAL}const W=[{$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>b(()=>import("./_...404_-CW8n66FV.js"),__vite__mapDeps([0,1,2])),import:()=>{const e="src/routes/[...404].tsx?pick=default&pick=$css";return b(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),[])}},path:"/*404",filePath:"/home/runner/work/landing-page/landing-page/src/routes/[...404].tsx"},{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>b(()=>import("./index-zSnyz2rG.js"),__vite__mapDeps([3,1])),import:()=>{const e="src/routes/index.tsx?pick=default&pick=$css";return b(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),[])}},path:"/",filePath:"/home/runner/work/landing-page/landing-page/src/routes/index.tsx"}],He=Ke(W.filter(e=>e.$component));function Ke(e){function n(t,r,o,a){const i=Object.values(t).find(s=>o.startsWith(s.id+"/"));return i?(n(i.children||(i.children=[]),r,o.slice(i.id.length)),t):(t.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function Ze(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ve({routes:W.reduce((e,n)=>{if(!Ze(n))return e;let t=n.path.replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function Ge(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:Be(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return He.map(e)}let I;const Je=()=>I||(I=Ge());function Xe(){return p(Oe,{root:e=>p(Y,{get children(){return e.children}}),get children(){return p(Je,{})}})}const Ye=e=>null;var Qe=A("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const et=e=>{const n="Error | Uncaught Client Exception";return p(Q,{get fallback(){return[(()=>{var t=Qe();return q(t,n),t})(),p(Ye,{code:500})]},get children(){return e.children}})};function M(e){return e.children}function tt(){return p(M,{get children(){return p(M,{get children(){return p(et,{get children(){return p(Xe,{})}})}})}})}function nt(e,n){ee(e,n)}nt(()=>p(tt,{}),document.getElementById("app"));const at=void 0;export{at as default};
