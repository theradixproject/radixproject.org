function w(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(D)}function q(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(I(n,e))}function st(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,s){if(r){const o=B(n,e,i,s);t.p(o,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let E=!1;function J(){E=!0}function K(){E=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:R(1,r,y=>n[e[y]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(o[c],a)}}function Q(t,n){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){E&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function pt(){return v(" ")}function yt(){return v("")}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,r=!1){Y(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return H(t,r=>r.nodeName===n,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||s.push(u.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function bt(t){return tt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n,e){t.classList[e?"add":"remove"](n)}function Nt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,e.push(r)):s===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function At(t,n){return new t(n)}let m;function h(t){m=t}function O(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){O().$$.on_mount.push(t)}function vt(t){O().$$.after_update.push(t)}const d=[],T=[],b=[],M=[],P=Promise.resolve();let A=!1;function L(){A||(A=!0,P.then(z))}function St(){return L(),P}function j(t){b.push(t)}const N=new Set;let x=0;function z(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),nt(n.$$)}for(h(null),d.length=0,x=0;T.length;)T.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];N.has(e)||(N.add(e),e())}b.length=0}while(d.length);for(;M.length;)M.pop()();A=!1,N.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function kt(){_={r:0,c:[],p:_}}function Ct(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Mt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=n[s];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[s]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function qt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||j(()=>{const o=t.$$.on_mount.map(D).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...o):p(o),t.$$.on_mount=[]}),s.forEach(j)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,s,o,u=[-1]){const c=m;h(t);const l=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,y,...S)=>{const k=S.length?S[0]:y;return l.ctx&&r(l.ctx[f],l.ctx[f]=k)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](k),a&&ct(t,f)),y}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const f=X(n.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),z()}h(c)}class Ot{$destroy(){rt(this,1),this.$destroy=w}$on(n,e){if(!q(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,w as B,Et as C,Q as D,lt as E,mt as F,st as G,Nt as H,at as I,_t as J,ft as K,ut as L,F as M,Mt as N,Dt as O,dt as P,Ot as S,pt as a,ht as b,bt as c,Ct as d,yt as e,et as f,kt as g,U as h,Ht as i,vt as j,V as k,xt as l,X as m,gt as n,jt as o,wt as p,v as q,tt as r,ot as s,Tt as t,$t as u,At as v,qt as w,Bt as x,it as y,rt as z};
