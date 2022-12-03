import{S as et,i as tt,s as nt,a as rt,e as F,c as at,b as W,g as me,t as J,d as _e,f as z,h as G,j as ot,o as Le,k as st,l as it,m as lt,n as Re,p as C,q as ct,r as ft,u as ut,v as Z,w as Q,x as je,y as x,z as ee,A as ue}from"./chunks/index-557b4ac4.js";import{g as Ke,f as Me,s as H,a as Ie,b as pt,i as dt}from"./chunks/singletons-d458b69b.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const s of gt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(s)}return ge(r,e)};const se=new Map;function kt(r,e){const n=Qe(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&se.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return ge(r,e)}function Rt(r,e,n){if(se.size>0){const s=Qe(r,n),o=se.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);se.delete(s)}}return ge(e,n)}function Qe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Et(e.body)}"]`),s}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map((t,u,g)=>{const p=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(_)return e.push(_[1]),n.push(_[2]),s.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(p);if(w)return e.push(w[1]),n.push(w[2]),s.push(!0),"(?:/([^/]+))?";const S=u===g.length-1;return p?"/"+p.split(/\[(.+?)\](?!\])/).map((O,q)=>{if(q%2){const U=St.exec(O);if(!U)throw new Error(`Invalid param: ${O}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,Y,le,ne]=U;return e.push(le),n.push(ne),s.push(!!te),Y?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return S&&O.includes(".")&&(o=!1),O.normalize().replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Lt(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Lt)}function $t(r,{names:e,types:n,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const u=e[t],g=n[t];let p=r[t+1];if(p||!s[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(p))return}m[u]=p!=null?p:""}}return m}function At(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([u,[g,p,_]])=>{const{pattern:w,names:S,types:K,optional:M}=Ot(u),O={id:u,exec:q=>{const U=w.exec(q);if(U)return $t(U,{names:S,types:K,optional:M},s)},errors:[1,..._||[]].map(q=>r[q]),layouts:[0,...p||[]].map(t),leaf:m(g)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function m(u){const g=u<0;return g&&(u=~u),[g,r[u]]}function t(u){return u===void 0?u:[o.has(u),r[u]]}}function Pt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=F()},l(t){e&&je(e.$$.fragment,t),n=F()},m(t,u){e&&x(e,t,u),W(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){me();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),z(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&ee(e,t)}}}function jt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Nt]},$$scope:{ctx:t}}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=F()},l(t){e&&je(e.$$.fragment,t),n=F()},m(t,u){e&&x(e,t,u),W(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&523&&(g.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){me();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),z(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&ee(e,t)}}}function Nt(r){let e,n,s;var o=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=F()},l(t){e&&je(e.$$.fragment,t),n=F()},m(t,u){e&&x(e,t,u),W(t,n,u),s=!0},p(t,u){const g={};if(u&8&&(g.data=t[3]),u&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){me();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),z(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&ee(e,t)}}}function He(r){let e,n=r[5]&&We(r);return{c(){e=st("div"),n&&n.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);n&&n.l(o),o.forEach(G),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){W(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=We(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function We(r){let e;return{c(){e=ct(r[6])},l(n){e=ft(n,r[6])},m(n,s){W(n,e,s)},p(n,s){s&64&&ut(e,n[6])},d(n){n&&G(e)}}}function Tt(r){let e,n,s,o,m;const t=[jt,Pt],u=[];function g(_,w){return _[0][1]?0:1}e=g(r),n=u[e]=t[e](r);let p=r[4]&&He(r);return{c(){n.c(),s=rt(),p&&p.c(),o=F()},l(_){n.l(_),s=at(_),p&&p.l(_),o=F()},m(_,w){u[e].m(_,w),W(_,s,w),p&&p.m(_,w),W(_,o,w),m=!0},p(_,[w]){let S=e;e=g(_),e===S?u[e].p(_,w):(me(),J(u[S],1,1,()=>{u[S]=null}),_e(),n=u[e],n?n.p(_,w):(n=u[e]=t[e](_),n.c()),z(n,1),n.m(s.parentNode,s)),_[4]?p?p.p(_,w):(p=He(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){m||(z(n),m=!0)},o(_){J(n),m=!1},d(_){u[e].d(_),_&&G(s),p&&p.d(_),_&&G(o)}}}function Ut(r,e,n){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:g=null}=e;ot(s.page.notify);let p=!1,_=!1,w=null;return Le(()=>{const S=s.page.subscribe(()=>{p&&(n(5,_=!0),n(6,w=document.title||"untitled page"))});return n(4,p=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,u=S.data_0),"data_1"in S&&n(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[m,t,u,g,p,_,w,s,o]}class Dt extends et{constructor(e){super(),tt(this,e,Ut,Tt,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Vt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),qt=function(r,e){return new URL(r,e).href},Ye={},V=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(m=>{if(m=qt(m,s),m in Ye)return;Ye[m]=!0;const t=m.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===m&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Vt,t||(p.as="script",p.crossOrigin=""),p.href=m,document.head.appendChild(p),t)return new Promise((_,w)=>{p.addEventListener("load",_),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},Ct={},we=[()=>V(()=>import("./chunks/0-29eb714f.js"),["./chunks/0-29eb714f.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-751c73cc.js","./chunks/index-557b4ac4.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/_layout-ff3602ae.css"],import.meta.url),()=>V(()=>import("./chunks/1-5f868292.js"),["./chunks/1-5f868292.js","./components/error.svelte-9ec43fe7.js","./chunks/index-557b4ac4.js","./chunks/singletons-d458b69b.js","./chunks/index-b9dc7195.js"],import.meta.url),()=>V(()=>import("./chunks/2-e4b442c1.js"),["./chunks/2-e4b442c1.js","./components/pages/_page.svelte-4ca0d642.js","./chunks/index-557b4ac4.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./assets/_page-0c1c86df.css"],import.meta.url),()=>V(()=>import("./chunks/3-a023a26f.js"),["./chunks/3-a023a26f.js","./components/pages/about/_page.svelte-2978b311.js","./chunks/index-557b4ac4.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./chunks/SimplePage-b516d3e5.js","./assets/SimplePage-facda358.css","./assets/_page-d1761b97.css"],import.meta.url),()=>V(()=>import("./chunks/4-2cdc930b.js"),["./chunks/4-2cdc930b.js","./components/pages/apply/_page.svelte-83d5a77e.js","./chunks/index-557b4ac4.js","./chunks/SimplePage-b516d3e5.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./assets/SimplePage-facda358.css"],import.meta.url),()=>V(()=>import("./chunks/5-64c55490.js"),["./chunks/5-64c55490.js","./components/pages/contact/_page.svelte-6f2c2883.js","./chunks/index-557b4ac4.js","./chunks/SimplePage-b516d3e5.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./assets/SimplePage-facda358.css","./assets/_page-2aa34422.css"],import.meta.url),()=>V(()=>import("./chunks/6-2806cb74.js"),["./chunks/6-2806cb74.js","./components/pages/contribute/_page.svelte-e1c10fb3.js","./chunks/index-557b4ac4.js","./chunks/SimplePage-b516d3e5.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./assets/SimplePage-facda358.css"],import.meta.url),()=>V(()=>import("./chunks/7-5665b48a.js"),["./chunks/7-5665b48a.js","./components/pages/incident/_page.svelte-74fce79a.js","./chunks/index-557b4ac4.js","./chunks/SimplePage-b516d3e5.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./assets/SimplePage-facda358.css"],import.meta.url),()=>V(()=>import("./chunks/8-965bebf2.js"),["./chunks/8-965bebf2.js","./components/pages/news/_page.svelte-fd47136f.js","./chunks/index-557b4ac4.js"],import.meta.url),()=>V(()=>import("./chunks/9-780cf8fc.js"),["./chunks/9-780cf8fc.js","./components/pages/privacy/_page.mdx-9b4df826.js","./chunks/index-557b4ac4.js"],import.meta.url),()=>V(()=>import("./chunks/10-06f0f0e4.js"),["./chunks/10-06f0f0e4.js","./components/pages/terms/_page.mdx-abbbcea9.js","./chunks/index-557b4ac4.js","./chunks/SimplePage-b516d3e5.js","./chunks/Img-aaf5c4b9.js","./chunks/stores-1dd0715f.js","./chunks/index-b9dc7195.js","./assets/Img-57b8883a.css","./assets/SimplePage-facda358.css"],import.meta.url)],Bt=[],Ft={"/":[2],"/about":[3],"/apply":[4],"/contact":[5],"/contribute":[6],"/incident":[7],"/news":[8],"/privacy":[9],"/terms":[10]},Jt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,n){this.status=e,this.location=n}}async function zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,Mt=-3,Ht=-4,Wt=-5,Yt=-6;function Xt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,m=!1){if(o===Gt)return;if(o===Mt)return NaN;if(o===Ht)return 1/0;if(o===Wt)return-1/0;if(o===Yt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const g=new Set;n[o]=g;for(let w=1;w<t.length;w+=1)g.add(s(t[w]));break;case"Map":const p=new Map;n[o]=p;for(let w=1;w<t.length;w+=2)p.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[o]=_;for(let w=1;w<t.length;w+=2)_[t[w]]=s(t[w+1]);break}else{const u=new Array(t.length);n[o]=u;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Kt&&(u[g]=s(p))}}else{const u={};n[o]=u;for(const g in t){const p=t[g];u[g]=s(p)}}return n[o]}return s(0)}const xe="sveltekit:scroll",B="sveltekit:index",pe=At(we,Bt,Ft,Ct),Ae=we[0],Pe=we[1];Ae();Pe();let ie={};try{ie=JSON.parse(sessionStorage[xe])}catch{}function Se(r){ie[r]=Ie()}function Zt({target:r,base:e,trailing_slash:n}){var Je;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,g=!1,p=!0,_=!1,w=!1,S=!1,K=!1,M,O=(Je=history.state)==null?void 0:Je[B];O||(O=Date.now(),history.replaceState({...history.state,[B]:O},"",location.href));const q=ie[O];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let U,te,Y;async function le(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=ve(a,!0);o=null,await Te(l,a,[])}async function ne(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:f={},invalidateAll:d=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),Ee({url:a,scroll:l?Ie():null,keepfocus:i,redirect_chain:h,details:{state:f,replaceState:c},nav_token:v,accepted:()=>{d&&(K=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const l=ve(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ve(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Te(a,l,c,i,f={},d){var v,E;te=f;let h=a&&await Ve(a);if(h||(h=await Fe(l,{id:null},oe(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,te!==f)return!1;if(h.type==="redirect")if(c.length>10||c.includes(l.pathname))h=await ce({status:500,error:oe(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ne(new URL(h.location,l).href,{},[...c,l.pathname],f),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await H.updated.check()&&await fe(l);if(s.length=0,K=!1,_=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[B]=O+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,g){t=h.state,h.props.page&&(h.props.page.url=l);const y=he();M.$set(h.props),y()}else Ue(h);if(i){const{scroll:y,keepfocus:b}=i;if(b||Oe(),await ue(),p){const I=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ue();p=!0,h.props.page&&(U=h.props.page),d&&d(),_=!1}function Ue(a){var f,d;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),U=a.props.page;const c=he();M=new Dt({target:r,props:{...a.props,stores:H},hydrate:!0}),c();const i={from:null,to:de("to",{params:t.params,route:{id:(d=(f=t.route)==null?void 0:f.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(h=>h(i)),g=!0}async function re({url:a,params:l,branch:c,status:i,error:f,route:d,form:h}){var j;const v=c.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:c,error:f,route:d},props:{components:v.map(L=>L.node.component)}};h!==void 0&&(E.props.form=h);let y={},b=!U;for(let L=0;L<v.length;L+=1){const N=v[L];y={...y,...N.data},(b||!t.branch.some(T=>T===N))&&(E.props[`data_${L}`]=y,b=b||Object.keys((j=N.data)!=null?j:{}).length>0)}if(b||(b=Object.keys(U.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==f||h!==void 0||b){E.props.page={error:f,params:l,route:d,status:i,url:a,form:h,data:b?y:U.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const L=(N,T)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${T}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function ye({loader:a,parent:l,url:c,params:i,route:f,server_data_node:d}){var y,b,I,j,L;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let N=function(...R){for(const D of R){const{href:k}=new URL(D,c);v.dependencies.add(k)}};const T={route:{get id(){return v.route=!0,f.id}},params:new Proxy(i,{get:(R,D)=>(v.params.add(D),R[D])}),data:(b=d==null?void 0:d.data)!=null?b:null,url:wt(c,()=>{v.url=!0}),async fetch(R,D){let k;R instanceof Request?(k=R.url,D={body:R.method==="GET"||R.method==="HEAD"?void 0:await R.blob(),cache:R.cache,credentials:R.credentials,headers:R.headers,integrity:R.integrity,keepalive:R.keepalive,method:R.method,mode:R.mode,redirect:R.redirect,referrer:R.referrer,referrerPolicy:R.referrerPolicy,signal:R.signal,...D}):k=R;const $=new URL(k,c).href;return N($),g?Rt(k,$,D):kt(k,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(I=await E.shared.load.call(null,T))!=null?I:null,h=h?await zt(h):null}return{node:E,loader:a,server:d,shared:(j=E.shared)!=null&&j.load?{type:"data",data:h,uses:v}:null,data:(L=h!=null?h:d==null?void 0:d.data)!=null?L:null}}function De(a,l,c,i,f){if(K)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const d of i.params)if(f[d]!==t.params[d])return!0;for(const d of i.dependencies)if(s.some(h=>h(new URL(d))))return!0;return!1}function be(a,l){var c,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ve({id:a,invalidating:l,url:c,params:i,route:f}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:d,layouts:h,leaf:v}=f,E=[...h,v];d.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,I=t.route?a!==t.route.id:!1,j=E.reduce((k,$,P)=>{var ae;const A=t.branch[P],X=!!($!=null&&$[0])&&((A==null?void 0:A.loader)!==$[1]||De(k.some(Boolean),I,b,(ae=A.server)==null?void 0:ae.uses,i));return k.push(X),k},[]);if(j.some(Boolean)){try{y=await Ze(c,j)}catch(k){return ce({status:500,error:oe(k,{url:c,params:i,route:{id:f.id}}),url:c,route:f})}if(y.type==="redirect")return y}const L=y==null?void 0:y.nodes;let N=!1;const T=E.map(async(k,$)=>{var ae;if(!k)return;const P=t.branch[$],A=L==null?void 0:L[$];if((!A||A.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!De(N,I,b,(ae=P.shared)==null?void 0:ae.uses,i))return P;if(N=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:k[1],url:c,params:i,route:f,parent:async()=>{var Ge;const ze={};for(let ke=0;ke<$;ke+=1)Object.assign(ze,(Ge=await T[ke])==null?void 0:Ge.data);return ze},server_data_node:be(A===void 0&&k[0]?{type:"skip"}:A!=null?A:null,P==null?void 0:P.server)})});for(const k of T)k.catch(()=>{});const R=[];for(let k=0;k<E.length;k+=1)if(E[k])try{R.push(await T[k])}catch($){if($ instanceof Xe)return{type:"redirect",location:$.location};let P=500,A;L!=null&&L.includes($)?(P=(D=$.status)!=null?D:P,A=$.error):$ instanceof $e?(P=$.status,A=$.body):A=oe($,{params:i,url:c,route:{id:f.id}});const X=await qe(k,R,d);return X?await re({url:c,params:i,branch:R.slice(0,X.idx).concat(X.node),status:P,error:A,route:f}):await Fe(c,{id:f.id},A,P)}else R.push(void 0);return await re({url:c,params:i,branch:R,status:200,error:null,route:f,form:l?void 0:null})}async function qe(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:l,url:c,route:i}){var y;const f={},d=await Ae();let h=null;if(d.server)try{const b=await Ze(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await fe(c)}const v=await ye({loader:Ae,url:c,params:f,route:i,parent:()=>Promise.resolve({}),server_data_node:be(h)}),E={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await re({url:c,params:f,branch:[v,E],status:a,error:l,route:null})}function ve(a,l){if(Ce(a))return;const c=mt(a.pathname.slice(e.length)||"/");for(const i of pe){const f=i.exec(c);if(f){const d=new URL(a.origin+ht(a.pathname,n)+a.search+a.hash);return{id:d.pathname+d.search,invalidating:l,route:i,params:_t(f),url:d}}}}function Ce(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:l,intent:c,delta:i}){var v,E,y,b,I;let f=!1;const d={from:de("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:de("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(I=(b=c==null?void 0:c.route)==null?void 0:b.id)!=null?I:null},url:a}),willUnload:!c,type:l};i!==void 0&&(d.delta=i);const h={...d,cancel:()=>{f=!0}};return w||m.before_navigate.forEach(j=>j(h)),f?null:d}async function Ee({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:f,type:d,delta:h,nav_token:v,accepted:E,blocked:y}){const b=ve(a,!1),I=Be({url:a,type:d,delta:h,intent:b});if(!I){y();return}Se(O),E(),w=!0,g&&H.navigating.set(I),await Te(b,a,i,{scroll:l,keepfocus:c,details:f},v,()=>{w=!1,m.after_navigate.forEach(j=>j(I)),H.navigating.set(null)})}async function Fe(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ce({status:i,error:c,url:a,route:l}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Le(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Le(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(c=>c.href===l)}return le()},invalidateAll:()=>(K=!0,le()),prefetch:async a=>{const l=new URL(a,Ke(document));await Ne(l)},prefetch_routes:async a=>{const c=(a?pe.filter(i=>a.some(f=>i.exec(f))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const f=await qe(t.branch.length,c,i.errors);if(f){const d=await re({url:l,params:t.params,branch:c.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:i});t=d.state;const h=he();M.$set(d.props),h(),ue().then(Oe)}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...U,form:a.data,status:a.status}},c=he();M.$set(l),c(),a.type==="success"&&ue().then(Oe)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var d,h;let f=!1;if(!w){const v={from:de("from",{params:t.params,route:{id:(h=(d=t.route)==null?void 0:d.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};m.before_navigate.forEach(E=>E(v))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[xe]=JSON.stringify(ie)}catch{}}});const a=i=>{const{url:f,options:d,has:h}=Me(i);if(f&&d.prefetch&&!Ce(f)){if(d.reload||h.rel_external||h.target||h.download)return;Ne(f)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{var f;(f=i.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",c),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:f,url:d,options:h,has:v}=Me(i);if(!f||!d||!(f instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){Be({url:d,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=d.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){S=!0,Se(O),t.url=d,H.page.set({...U,url:d}),H.page.notify();return}Ee({url:d,scroll:h.noscroll?Ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[B]===O)return;const f=i.state[B]-O;Ee({url:new URL(location.href),scroll:ie[i.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[B]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[B]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&H.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:f,data:d,form:h})=>{var y;u=!0;const v=new URL(location.href);let E;try{const b=c.map(async(I,j)=>{const L=d[j];return ye({loader:we[I],url:v,params:i,route:f,parent:async()=>{const N={};for(let T=0;T<j;T+=1)Object.assign(N,(await b[T]).data);return N},server_data_node:be(L)})});E=await re({url:v,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=pe.find(({id:I})=>I===f.id))!=null?y:null})}catch(b){if(b instanceof Xe){await fe(new URL(b.location,location.href));return}E=await ce({status:b instanceof $e?b.status:500,error:oe(b,{url:v,params:i,route:f}),url:v,route:f})}Ue(E)}}}async function Ze(r,e){var m;const n=new URL(r);n.pathname=vt(r.pathname);const s=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var u,g;(t==null?void 0:t.type)==="data"&&(t.data=Xt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function oe(r,e){var n;return r instanceof $e?r.body:(n=Jt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Qt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function he(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function tn({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){pt(n);const m=Zt({target:s,base:n.base,trailing_slash:o});dt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{tn as start};
