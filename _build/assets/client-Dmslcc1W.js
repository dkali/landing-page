const __vite__fileDeps=["assets/_...404_-BvYqI9Y2.js","assets/web-B4fVbFgJ.js","assets/routing-8SWNINBp.js","assets/index-BCIYGvNH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as H,a as A,b as p,g as K,u as Z,S as q,o as G,d as J,e as X,f as B,h as Y,i as R,s as L,m as S,j as V,r as P,t as $,l as Q,k as ee,E as te,n as ne}from"./web-B4fVbFgJ.js";import{c as re,a as oe,R as ae,b as se,d as ie,m as le,k as ce,s as ue,e as de,n as fe}from"./routing-8SWNINBp.js";const he="modulepreload",me=function(e){return"/_build/"+e},D={},b=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");o=Promise.all(t.map(s=>{if(s=me(s),s in D)return;D[s]=!0;const u=s.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":he,u||(f.as="script",f.crossOrigin=""),f.href=s,i&&f.setAttribute("nonce",i),document.head.appendChild(f),u)return new Promise((g,E)=>{f.addEventListener("load",g),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>n()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},C="Invariant Violation",{setPrototypeOf:pe=function(e,n){return e.__proto__=n,e}}=Object;class N extends Error{framesToPop=1;name=C;constructor(n=C){super(typeof n=="number"?`${C}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),pe(this,N.prototype)}}function k(e,n){if(!e)throw new N(n)}const ge=/^[A-Za-z]:\//;function Ee(e=""){return e&&e.replace(/\\/g,"/").replace(ge,n=>n.toUpperCase())}const we=/^[/\\]{2}/,be=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,ye=/^[A-Za-z]:$/,ve=function(e){if(e.length===0)return".";e=Ee(e);const n=e.match(we),t=T(e),r=e[e.length-1]==="/";return e=_e(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),ye.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!T(e)?`/${e}`:e)},W=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":ve(n.replace(/\/\/+/g,"/"))};function _e(e,n){let t="",r=0,o=-1,a=0,i=null;for(let s=0;s<=e.length;++s){if(s<e.length)i=e[s];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===s-1||a===1))if(a===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const u=t.lastIndexOf("/");u===-1?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),o=s,a=0;continue}else if(t.length>0){t="",r=0,o=s,a=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(o+1,s)}`:t=e.slice(o+1,s),r=s-o-1;o=s,a=0}else i==="."&&a!==-1?++a:a=-1}return t}const T=function(e){return be.test(e)};function Re(e){return`virtual:${e}`}function Ae(e){return e.handler?.endsWith(".html")?T(e.handler)?e.handler:W(e.root,e.handler):`#vinxi/handler/${e.name}`}const $e=new Proxy({},{get(e,n){return k(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:Re(Ae({name:n})),baseURL:"/_build",chunks:new Proxy({},{get(t,r){k(typeof r=="string","Chunk expected");let o=W("/_build",r+".mjs");return{import(){return b(()=>import(o),[])},output:{path:o}}}}),inputs:new Proxy({},{get(t,r){k(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return b(()=>import(o),[])},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=$e;const Le=e=>n=>{const{base:t}=n,r=H(()=>n.children),o=A(()=>re(r(),n.base||""));let a;const i=oe(e,o,()=>a,{base:t,singleFlight:n.singleFlight});return e.create&&e.create(i),p(ae.Provider,{value:i,get children(){return p(Se,{routerState:i,get root(){return n.root},get load(){return n.rootLoad},get children(){return[A(()=>(a=K())&&null),p(Pe,{routerState:i,get branches(){return o()}})]}})}})};function Se(e){const n=e.routerState.location,t=e.routerState.params,r=A(()=>e.load&&Z(()=>e.load({params:t,location:n,intent:"preload"})));return p(q,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>p(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Pe(e){const n=[];let t;const r=A(G(e.routerState.matches,(o,a,i)=>{let s=a&&o.length===a.length;const u=[];for(let l=0,f=o.length;l<f;l++){const g=a&&a[l],E=o[l];i&&g&&E.route.key===g.route.key?u[l]=i[l]:(s=!1,n[l]&&n[l](),J(w=>{n[l]=w,u[l]=ie(e.routerState,u[l-1]||e.routerState.base,I(()=>r()[l+1]),()=>e.routerState.matches()[l])}))}return n.splice(o.length).forEach(l=>l()),i&&s?i:(t=u[0],u)}));return I(()=>r()&&t)()}const I=e=>()=>p(q,{get when(){return e()},keyed:!0,children:n=>p(se.Provider,{value:n,get children(){return n.outlet()}})});function Ce([e,n],t,r){return[e,r?o=>n(r(o)):n]}function ke(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Te(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=Ce(X(t(e.get()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!n&&e.set(o),o));return e.init&&B(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),Le({signal:r,create:e.create,utils:e.utils})}function Ne(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function xe(e,n){const t=ke(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const Oe=new Map;function De(e=!0,n=!1,t="/_server"){return r=>{const o=r.base.path(),a=r.navigatorFactory(r.base);let i={};function s(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function u(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const d=c.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const m=s(d),h=m?d.href.baseVal:d.href;if((m?d.target.baseVal:d.target)||!h&&!d.hasAttribute("state"))return;const v=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||v&&v.includes("external"))return;const _=m?new URL(h,document.baseURI):new URL(h);if(!(_.origin!==window.location.origin||o&&_.pathname&&!_.pathname.toLowerCase().startsWith(o.toLowerCase())))return[d,_]}function l(c){const d=u(c);if(!d)return;const[m,h]=d,x=r.parsePath(h.pathname+h.search+h.hash),v=m.getAttribute("state");c.preventDefault(),a(x,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function f(c){const d=u(c);if(!d)return;const[m,h]=d;i[h.pathname]||r.preloadRoute(h,m.getAttribute("preload")!=="false")}function g(c){const d=u(c);if(!d)return;const[m,h]=d;i[h.pathname]||(i[h.pathname]=setTimeout(()=>{r.preloadRoute(h,m.getAttribute("preload")!=="false"),delete i[h.pathname]},200))}function E(c){const d=u(c);if(!d)return;const[,m]=d;i[m.pathname]&&(clearTimeout(i[m.pathname]),delete i[m.pathname])}function w(c){if(c.defaultPrevented)return;let d=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const h=new URL(d,le);if(d=r.parsePath(h.pathname+h.search),!d.startsWith(t))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const m=Oe.get(d);if(m){c.preventDefault();const h=new FormData(c.target);c.submitter&&c.submitter.name&&h.append(c.submitter.name,c.submitter.value),m.call({r,f:c.target},h)}}Y(["click","submit"]),document.addEventListener("click",l),e&&(document.addEventListener("mouseover",g),document.addEventListener("mouseout",E),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",w),B(()=>{document.removeEventListener("click",l),e&&(document.removeEventListener("mouseover",g),document.removeEventListener("mouseout",E),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",w)})}}function Ie(e){const n=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),t=de();return Te({get:n,set({value:r,replace:o,scroll:a,state:i}){o?window.history.replaceState(ce(i),"",r):window.history.pushState(i,"",r),xe(window.location.hash.slice(1),a),ue()},init:r=>Ne(window,"popstate",fe(r,o=>{if(o&&o<0)return!t.confirm(o);{const a=n();return!t.confirm(a.value,{state:a.state})}})),create:De(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function Me(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Ue=$("<style>"),Fe=$("<link>"),qe=$("<script> ");const Be={style:e=>(()=>{var n=R(Ue);return L(n,S(()=>e.attrs),!1,!0),V(n,()=>e.children),P(),n})(),link:e=>(()=>{var n=R(Fe);return L(n,S(()=>e.attrs),!1,!1),P(),n})(),script:e=>e.attrs.src?(()=>{var n=R(qe);return L(n,S(()=>e.attrs,{get id(){return e.key}}),!1,!0),P(),n})():null};function Ve(e){let{tag:n,attrs:{key:t,...r}={key:void 0},children:o}=e;return Be[n]({attrs:r,key:t,children:o})}function We(e,n,t,r="default"){return Q(async()=>{{const a=(await e.import())[r],s=(await n.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&Me(s),{default:l=>[...s.map(f=>Ve(f)),p(a,l)]}}})}const y={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function ze(e={}){const n={options:e,rootNode:z(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)M(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>je(n,t(r)),insert:(r,o)=>M(n,t(r),o),remove:r=>He(n,t(r))}}function je(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let a=!1,i=null,s=e.rootNode,u=null;for(let l=0;l<r.length;l++){const f=r[l];s.wildcardChildNode!==null&&(i=s.wildcardChildNode,u=r.slice(l).join("/"));const g=s.children.get(f);if(g===void 0){if(s&&s.placeholderChildren.length>1){const E=r.length-l;s=s.placeholderChildren.find(w=>w.maxDepth===E)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=f),a=!0}else s=g}return(s===null||s.data===null)&&i!==null&&(s=i,o[s.paramName||"_"]=u,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function M(e,n,t){let r=!0;const o=n.split("/");let a=e.rootNode,i=0;const s=[a];for(const u of o){let l;if(l=a.children.get(u))a=l;else{const f=Ke(u);l=z({type:f,parent:a}),a.children.set(u,l),f===y.PLACEHOLDER?(l.paramName=u==="*"?`_${i++}`:u.slice(1),a.placeholderChildren.push(l),r=!1):f===y.WILDCARD&&(a.wildcardChildNode=l,l.paramName=u.slice(3)||"_",r=!1),s.push(l),a=l}}for(const[u,l]of s.entries())l.maxDepth=Math.max(s.length-u,l.maxDepth||0);return a.data=t,r===!0&&(e.staticRoutesMap[n]=a),a}function He(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return t;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function z(e={}){return{type:e.type||y.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Ke(e){return e.startsWith("**")?y.WILDCARD:e[0]===":"||e==="*"?y.PLACEHOLDER:y.NORMAL}const j=[{$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>b(()=>import("./_...404_-BvYqI9Y2.js"),__vite__mapDeps([0,1,2])),import:()=>{const e="src/routes/[...404].tsx?pick=default&pick=$css";return b(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),[])}},path:"/*404",filePath:"/home/runner/work/landing-page/landing-page/src/routes/[...404].tsx"},{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>b(()=>import("./index-BCIYGvNH.js"),__vite__mapDeps([3,1])),import:()=>{const e="src/routes/index.tsx?pick=default&pick=$css";return b(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),[])}},path:"/",filePath:"/home/runner/work/landing-page/landing-page/src/routes/index.tsx"}],Ze=Ge(j.filter(e=>e.$component));function Ge(e){function n(t,r,o,a){const i=Object.values(t).find(s=>o.startsWith(s.id+"/"));return i?(n(i.children||(i.children=[]),r,o.slice(i.id.length)),t):(t.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function Je(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}ze({routes:j.reduce((e,n)=>{if(!Je(n))return e;let t=n.path.replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function Xe(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:We(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Ze.map(e)}let U;const Ye=()=>U||(U=Xe());function Qe(){return p(Ie,{root:e=>p(ee,{get children(){return e.children}}),get children(){return p(Ye,{})}})}const et=e=>null;var tt=$("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const nt=e=>{const n="Error | Uncaught Client Exception";return p(te,{get fallback(){return[(()=>{var t=R(tt);return V(t,n),t})(),p(et,{code:500})]},get children(){return e.children}})};function rt(e,n){return ne(e,n)}function F(e){return e.children}function ot(){return p(F,{get children(){return p(F,{get children(){return p(nt,{get children(){return p(Qe,{})}})}})}})}rt(()=>p(ot,{}),document.getElementById("app"));const it=void 0;export{it as default};