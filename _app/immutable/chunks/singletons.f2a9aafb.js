import{w as c}from"./index.bb7434ec.js";var p;const g=((p=globalThis.__sveltekit_stcm6r)==null?void 0:p.base)??"";var h;const v=((h=globalThis.__sveltekit_stcm6r)==null?void 0:h.assets)??g,m="1678334090535",A="sveltekit:snapshot",R="sveltekit:scroll",T="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function S(){return{x:pageXOffset,y:pageYOffset}}function l(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const d={...f,"":f.hover};function b(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function y(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=b(t)}}function x(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!n||!!a||E(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:s,target:a}}function O(t){let e=null,n=null,a=null,s=null,o=t;for(;o&&o!==document.documentElement;)n===null&&(n=l(o,"preload-code")),a===null&&(a=l(o,"preload-data")),e===null&&(e=l(o,"noscroll")),s===null&&(s=l(o,"reload")),o=b(o);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function _(t){const e=c(t);let n=!0;function a(){n=!0,e.update(r=>r)}function s(r){n=!1,e.set(r)}function o(r){let i;return e.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:a,set:s,subscribe:o}}function k(){const{set:t,subscribe:e}=c(!1);let n;async function a(){clearTimeout(n);const s=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==m;return r&&(t(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:a}}function E(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function U(t){t.client}const L={url:_({}),page:_({}),navigating:c(null),updated:k()};export{T as I,f as P,R as S,A as a,x as b,O as c,S as d,g as e,y as f,I as g,U as h,E as i,L as s};
