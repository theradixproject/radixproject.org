import{S as C,i as L,s as R,k as $,q as T,a as O,l as k,m as E,r as N,h as u,c as P,n as m,C as y,b as w,D as _,B as S,E as U,F as Q,e as j,G as X,w as D,H as Z,x as W,y as G,I as x,J as ee,K as te,f as I,t as B,z as J}from"../../chunks/index-a45f292e.js";import{l as F}from"../../chunks/stores-dee4d015.js";function le(n){let e,l,t,s,c,i,r,o,g,f,h,A,d,a,b;return{c(){e=$("main"),l=$("a"),t=T("HOME"),s=O(),c=$("a"),i=T("NEWS"),r=O(),o=$("a"),g=T("ABOUT"),f=O(),h=$("a"),A=T("APPLY"),d=O(),a=$("a"),b=T("CONTRIBUTE"),this.h()},l(v){e=k(v,"MAIN",{class:!0});var p=E(e);l=k(p,"A",{class:!0,href:!0});var M=E(l);t=N(M,"HOME"),M.forEach(u),s=P(p),c=k(p,"A",{class:!0,href:!0});var Y=E(c);i=N(Y,"NEWS"),Y.forEach(u),r=P(p),o=k(p,"A",{class:!0,href:!0});var H=E(o);g=N(H,"ABOUT"),H.forEach(u),f=P(p),h=k(p,"A",{class:!0,href:!0});var q=E(h);A=N(q,"APPLY"),q.forEach(u),d=P(p),a=k(p,"A",{class:!0,href:!0});var z=E(a);b=N(z,"CONTRIBUTE"),z.forEach(u),p.forEach(u),this.h()},h(){m(l,"class","nav-link svelte-81x5yv"),m(l,"href","/"),y(l,"light",n[0]),m(c,"class","nav-link svelte-81x5yv"),m(c,"href","/news"),y(c,"light",n[0]),m(o,"class","nav-link svelte-81x5yv"),m(o,"href","/about"),y(o,"light",n[0]),m(h,"class","nav-link svelte-81x5yv"),m(h,"href","/apply"),y(h,"light",n[0]),m(a,"class","nav-link svelte-81x5yv"),m(a,"href","/contribute"),y(a,"light",n[0]),m(e,"class","svelte-81x5yv")},m(v,p){w(v,e,p),_(e,l),_(l,t),_(e,s),_(e,c),_(c,i),_(e,r),_(e,o),_(o,g),_(e,f),_(e,h),_(h,A),_(e,d),_(e,a),_(a,b)},p(v,[p]){p&1&&y(l,"light",v[0]),p&1&&y(c,"light",v[0]),p&1&&y(o,"light",v[0]),p&1&&y(h,"light",v[0]),p&1&&y(a,"light",v[0])},i:S,o:S,d(v){v&&u(e)}}}function se(n,e,l){let t;return U(n,F,s=>l(0,t=s)),[t]}class ae extends C{constructor(e){super(),L(this,e,se,le,R,{})}}function K(n,e,l){const t=n.slice();return t[2]=e[l],t[4]=l,t}function ne(n){let e,l;return{c(){e=$("span"),l=T("|"),this.h()},l(t){e=k(t,"SPAN",{class:!0});var s=E(e);l=N(s,"|"),s.forEach(u),this.h()},h(){m(e,"class","spacer svelte-jvytaf")},m(t,s){w(t,e,s),_(e,l)},d(t){t&&u(e)}}}function V(n){let e,l=n[2][0].toUpperCase()+n[2].slice(1)+"",t,s,c=n[4]!==n[1].length-1&&ne();return{c(){e=$("a"),t=T(l),c&&c.c(),s=j(),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var r=E(e);t=N(r,l),r.forEach(u),c&&c.l(i),s=j(),this.h()},h(){m(e,"class","nav-link svelte-jvytaf"),m(e,"href","/"+n[2]),y(e,"light",n[0])},m(i,r){w(i,e,r),_(e,t),c&&c.m(i,r),w(i,s,r)},p(i,r){r&1&&y(e,"light",i[0])},d(i){i&&u(e),c&&c.d(i),i&&u(s)}}}function re(n){let e,l,t,s,c,i=n[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=V(K(n,i,o));return{c(){e=$("footer"),l=$("div");for(let o=0;o<r.length;o+=1)r[o].c();t=O(),s=$("p"),c=T("\xA9 The Radix Project 2022."),this.h()},l(o){e=k(o,"FOOTER",{class:!0});var g=E(e);l=k(g,"DIV",{});var f=E(l);for(let A=0;A<r.length;A+=1)r[A].l(f);f.forEach(u),t=P(g),s=k(g,"P",{class:!0});var h=E(s);c=N(h,"\xA9 The Radix Project 2022."),h.forEach(u),g.forEach(u),this.h()},h(){m(s,"class","svelte-jvytaf"),m(e,"class","mono svelte-jvytaf")},m(o,g){w(o,e,g),_(e,l);for(let f=0;f<r.length;f+=1)r[f].m(l,null);_(e,t),_(e,s),_(s,c)},p(o,[g]){if(g&3){i=o[1];let f;for(f=0;f<i.length;f+=1){const h=K(o,i,f);r[f]?r[f].p(h,g):(r[f]=V(h),r[f].c(),r[f].m(l,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=i.length}},i:S,o:S,d(o){o&&u(e),Q(r,o)}}}function oe(n,e,l){let t;return U(n,F,c=>l(0,t=c)),[t,["contribute","contact","privacy","terms"]]}class ie extends C{constructor(e){super(),L(this,e,oe,re,R,{})}}function ce(n){let e,l;return{c(){e=$("style"),l=T(`body {
  color: white !important;
  background-color: black !important; }`),this.h()},l(t){e=k(t,"STYLE",{lang:!0});var s=E(e);l=N(s,`body {
  color: white !important;
  background-color: black !important; }`),s.forEach(u),this.h()},h(){m(e,"lang","scss")},m(t,s){w(t,e,s),_(e,l)},d(t){t&&u(e)}}}function fe(n){let e,l;return{c(){e=$("style"),l=T(`body {
  color: black;
  background-color: white !important; }`),this.h()},l(t){e=k(t,"STYLE",{lang:!0});var s=E(e);l=N(s,`body {
  color: black;
  background-color: white !important; }`),s.forEach(u),this.h()},h(){m(e,"lang","scss")},m(t,s){w(t,e,s),_(e,l)},d(t){t&&u(e)}}}function he(n){let e,l,t,s,c,i,r,o;function g(a,b){return a[0]?fe:ce}let f=g(n),h=f(n);s=new ae({});const A=n[2].default,d=X(A,n,n[1],null);return r=new ie({}),{c(){h.c(),e=j(),l=O(),t=$("main"),D(s.$$.fragment),c=O(),d&&d.c(),i=O(),D(r.$$.fragment),this.h()},l(a){const b=Z("svelte-fz1wga",document.head);h.l(b),e=j(),b.forEach(u),l=P(a),t=k(a,"MAIN",{class:!0});var v=E(t);W(s.$$.fragment,v),c=P(v),d&&d.l(v),i=P(v),W(r.$$.fragment,v),v.forEach(u),this.h()},h(){m(t,"class","svelte-1vm2i6c"),y(t,"light",n[0])},m(a,b){h.m(document.head,null),_(document.head,e),w(a,l,b),w(a,t,b),G(s,t,null),_(t,c),d&&d.m(t,null),_(t,i),G(r,t,null),o=!0},p(a,[b]){f!==(f=g(a))&&(h.d(1),h=f(a),h&&(h.c(),h.m(e.parentNode,e))),d&&d.p&&(!o||b&2)&&x(d,A,a,a[1],o?te(A,a[1],b,null):ee(a[1]),null),(!o||b&1)&&y(t,"light",a[0])},i(a){o||(I(s.$$.fragment,a),I(d,a),I(r.$$.fragment,a),o=!0)},o(a){B(s.$$.fragment,a),B(d,a),B(r.$$.fragment,a),o=!1},d(a){h.d(a),u(e),a&&u(l),a&&u(t),J(s),d&&d.d(a),J(r)}}}function _e(n,e,l){let t;U(n,F,i=>l(0,t=i));let{$$slots:s={},$$scope:c}=e;return n.$$set=i=>{"$$scope"in i&&l(1,c=i.$$scope)},[t,c,s]}class ve extends C{constructor(e){super(),L(this,e,_e,he,R,{})}}export{ve as default};