import{getOwner as ce,runWithOwner as X,createMemo as y,createContext as G,useContext as I,createSignal as O,createRenderEffect as ie,untrack as z,on as ue,startTransition as le,resetErrorBoundaries as H,createComponent as fe}from"solid-js";import{isServer as $,getRequestEvent as K}from"solid-js/web";function he(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const c={to:r,options:o,defaultPrevented:!1,preventDefault:()=>c.defaultPrevented=!0};for(const i of e)i.listener({...c,from:i.location,retry:u=>{u&&(n=!0),i.navigate(r,{...o,resolve:!1})}});return!c.defaultPrevented}return{subscribe:t,confirm:s}}let k;function J(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),k=window.history.state._depth}$||J();function Oe(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Be(e,t){let n=!1;return()=>{const s=k;J();const r=s==null?null:k-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const de=/^(?:[a-z0-9]+:)?\/\//i,pe=/^\/+|(\/)\/+$/g,me="http://sr";function S(e,t=!1){const n=e.replace(pe,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function B(e,t,n){if(de.test(t))return;const s=S(e),r=n&&S(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+S(t,!o)}function ge(e,t){if(e==null)throw new Error(t);return e}function we(e,t){return S(e).replace(/\/*(\*.*)?$/g,"")+S(t)}function Q(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function ye(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),c=o.length;return i=>{const u=i.split("/").filter(Boolean),l=u.length-c;if(l<0||l>0&&r===void 0&&!t)return null;const h={path:c?"":"/",params:{}},m=d=>n===void 0?void 0:n[d];for(let d=0;d<c;d++){const p=o[d],v=u[d],b=p[0]===":",x=b?p.slice(1):p;if(b&&F(v,m(x)))h.params[x]=v;else if(b||!F(v,p))return null;h.path+=`/${v}`}if(r){const d=l?u.slice(-l).join("/"):"";if(F(d,m(r)))h.params[r]=d;else return null}return h}}function F(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function ve(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function V(e){const t=new Map,n=ce();return new Proxy({},{get(s,r){return t.has(r)||X(n,()=>t.set(r,y(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Y(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Y(s).reduce((o,c)=>[...o,...r.map(i=>i+c)],[])}const Re=100,Pe=G(),Z=G(),M=()=>ge(I(Pe),"<A> and 'use' router primitives can be only used inside a Route."),be=()=>I(Z)||M().base,_e=e=>{const t=be();return y(()=>t.resolvePath(e()))},je=e=>{const t=M();return y(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Fe=()=>M().location;function xe(e,t=""){const{component:n,load:s,children:r,info:o}=e,c=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,info:o};return ee(e.path).reduce((u,l)=>{for(const h of Y(l)){const m=we(t,h);let d=c?m:m.split("/*",1)[0];d=d.split("/").map(p=>p.startsWith(":")||p.startsWith("*")?p:encodeURIComponent(p)).join("/"),u.push({...i,originalPath:l,pattern:d,matcher:ye(d,!c,e.matchFilters)})}return u},[])}function Ee(e,t=0){return{routes:e,score:ve(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],c=o.matcher(n);if(!c)return null;s.unshift({...c,route:o})}return s}}}function ee(e){return Array.isArray(e)?e:[e]}function Ce(e,t="",n=[],s=[]){const r=ee(e);for(let o=0,c=r.length;o<c;o++){const i=r[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const u=xe(i,t);for(const l of u){n.push(l);const h=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!h)Ce(i.children,l.pattern,n,s);else{const m=Ee([...n],s.length);s.push(m)}n.pop()}}}return n.length?s:s.sort((o,c)=>c.score-o.score)}function N(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Se(e,t){const n=new URL(me),s=y(u=>{const l=e();try{return new URL(l,n)}catch{return console.error(`Invalid path ${l}`),u}},n,{equals:(u,l)=>u.href===l.href}),r=y(()=>s().pathname),o=y(()=>s().search,!0),c=y(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return o()},get hash(){return c()},get state(){return t()},get key(){return i()},query:V(ue(o,()=>Q(s())))}}let R;function $e(e,t,n,s={}){const{signal:[r,o],utils:c={}}=e,i=c.parsePath||(a=>a),u=c.renderPath||(a=>a),l=c.beforeLeave||he(),h=B("",s.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&o({value:h,replace:!0,scroll:!1});const[m,d]=O(!1),p=async a=>{d(!0);try{await le(a)}finally{d(!1)}},[v,b]=O(r().value),[x,q]=O(r().state),D=Se(v,x),C=[],_=O($?ae():[]),W=y(()=>N(t(),D.pathname)),te=V(()=>{const a=W(),f={};for(let g=0;g<a.length;g++)Object.assign(f,a[g].params);return f}),T={pattern:h,path:()=>h,outlet:()=>null,resolvePath(a){return B(h,a)}};return ie(()=>{const{value:a,state:f}=r();z(()=>{a!==v()&&p(()=>{R="native",b(a),q(f),H(),_[1]([])}).then(()=>{R=void 0})})}),{base:T,location:D,params:te,isRouting:m,renderPath:u,parsePath:i,navigatorFactory:re,matches:W,beforeLeave:l,preloadRoute:oe,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:_};function ne(a,f,g){z(()=>{if(typeof f=="number"){f&&(c.go?c.go(f):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:j,scroll:P,state:E}={replace:!1,resolve:!0,scroll:!0,...g},w=j?a.resolvePath(f):B("",f);if(w===void 0)throw new Error(`Path '${f}' is not a routable path`);if(C.length>=Re)throw new Error("Too many redirects");const U=v();if(w!==U||E!==x()){if($){const L=K();L&&(L.response={status:302,headers:new Headers({Location:w})}),o({value:w,replace:A,scroll:P,state:E})}else if(l.confirm(w,g)){const L=C.push({value:U,replace:A,scroll:P,state:x()});p(()=>{R="navigate",b(w),q(E),H(),_[1]([])}).then(()=>{C.length===L&&(R=void 0,se({value:w,state:E}))})}}})}function re(a){return a=a||I(Z)||T,(f,g)=>ne(a,f,g)}function se(a){const f=C[0];f&&((a.value!==f.value||a.state!==f.state)&&o({...a,replace:f.replace,scroll:f.scroll}),C.length=0)}function oe(a,f){const g=N(t(),a.pathname),A=R;R="preload";for(let j in g){const{route:P,params:E}=g[j];P.component&&P.component.preload&&P.component.preload();const{load:w}=P;f&&w&&X(n(),()=>w({params:E,location:{pathname:a.pathname,search:a.search,hash:a.hash,query:Q(a),state:null,key:""},intent:"preload"}))}R=A}function ae(){const a=K();return a&&a.router&&a.router.submission?[a.router.submission]:[]}}function ke(e,t,n,s){const{base:r,location:o,params:c}=e,{pattern:i,component:u,load:l}=s().route,h=y(()=>s().path);u&&u.preload&&u.preload();const m=l?l({params:c,location:o,intent:R||"initial"}):void 0;return{parent:t,pattern:i,path:h,outlet:()=>u?fe(u,{params:c,location:o,data:m,get children(){return n()}}):n(),resolvePath(p){return B(r.path(),p,h())}}}export{Pe as R,$e as a,ke as b,Ce as c,Z as d,he as e,je as f,N as g,Fe as h,S as i,Oe as k,me as m,Be as n,J as s,_e as u};
