import{S as U,i as Y,s as F,k as b,q as H,a as V,l as k,m as C,r as M,h as u,c as w,n as v,C as E,b as O,D as f,B as N,E as z,F as P,G as I,p as q,H as G,e as R,I as s1,w as J,J as a1,x as K,y as Q,K as r1,L as n1,M as o1,f as Z,t as S,z as W}from"../../chunks/index-557b4ac4.js";import{l as D}from"../../chunks/stores-1dd0715f.js";function c1(r){let e,l,t,s,c,i,d,m,L,y,g,$,h,n,p;return{c(){e=b("main"),l=b("a"),t=H("HOME"),s=V(),c=b("a"),i=H("BLOG"),d=V(),m=b("a"),L=H("ABOUT"),y=V(),g=b("a"),$=H("APPLY"),h=V(),n=b("a"),p=H("CONTRIBUTE"),this.h()},l(a){e=k(a,"MAIN",{class:!0});var _=C(e);l=k(_,"A",{class:!0,href:!0});var o=C(l);t=M(o,"HOME"),o.forEach(u),s=w(_),c=k(_,"A",{class:!0,href:!0});var A=C(c);i=M(A,"BLOG"),A.forEach(u),d=w(_),m=k(_,"A",{class:!0,href:!0});var B=C(m);L=M(B,"ABOUT"),B.forEach(u),y=w(_),g=k(_,"A",{class:!0,href:!0});var T=C(g);$=M(T,"APPLY"),T.forEach(u),h=w(_),n=k(_,"A",{class:!0,href:!0});var j=C(n);p=M(j,"CONTRIBUTE"),j.forEach(u),_.forEach(u),this.h()},h(){v(l,"class","nav-link svelte-81x5yv"),v(l,"href","/"),E(l,"light",r[0]),v(c,"class","nav-link svelte-81x5yv"),v(c,"href","/blog"),E(c,"light",r[0]),v(m,"class","nav-link svelte-81x5yv"),v(m,"href","/about"),E(m,"light",r[0]),v(g,"class","nav-link svelte-81x5yv"),v(g,"href","/apply"),E(g,"light",r[0]),v(n,"class","nav-link svelte-81x5yv"),v(n,"href","/contribute"),E(n,"light",r[0]),v(e,"class","svelte-81x5yv")},m(a,_){O(a,e,_),f(e,l),f(l,t),f(e,s),f(e,c),f(c,i),f(e,d),f(e,m),f(m,L),f(e,y),f(e,g),f(g,$),f(e,h),f(e,n),f(n,p)},p(a,[_]){_&1&&E(l,"light",a[0]),_&1&&E(c,"light",a[0]),_&1&&E(m,"light",a[0]),_&1&&E(g,"light",a[0]),_&1&&E(n,"light",a[0])},i:N,o:N,d(a){a&&u(e)}}}function i1(r,e,l){let t;return z(r,D,s=>l(0,t=s)),[t]}class h1 extends U{constructor(e){super(),Y(this,e,i1,c1,F,{})}}function X(r,e,l){const t=r.slice();return t[3]=e[l],t[5]=l,t}function e1(r,e,l){const t=r.slice();return t[6]=e[l],t}function t1(r){let e,l,t,s;return{c(){e=b("a"),l=P("svg"),t=P("path"),s=V(),this.h()},l(c){e=k(c,"A",{class:!0,href:!0});var i=C(e);l=I(i,"svg",{style:!0,viewBox:!0});var d=C(l);t=I(d,"path",{fill:!0,d:!0}),C(t).forEach(u),d.forEach(u),s=w(i),i.forEach(u),this.h()},h(){v(t,"fill","#fff"),v(t,"d",r[2][r[6]]),q(l,"width","28px"),q(l,"height","28px"),v(l,"viewBox","0 0 24 24"),v(e,"class","social-link svelte-18cqd04"),v(e,"href",r[6])},m(c,i){O(c,e,i),f(e,l),f(l,t),f(e,s)},p:N,d(c){c&&u(e)}}}function f1(r){let e,l;return{c(){e=b("span"),l=H("|"),this.h()},l(t){e=k(t,"SPAN",{class:!0});var s=C(e);l=M(s,"|"),s.forEach(u),this.h()},h(){v(e,"class","spacer svelte-18cqd04")},m(t,s){O(t,e,s),f(e,l)},d(t){t&&u(e)}}}function l1(r){let e,l=r[3][0].toUpperCase()+r[3].slice(1)+"",t,s,c=r[5]!==r[1].length-1&&f1();return{c(){e=b("a"),t=H(l),c&&c.c(),s=R(),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var d=C(e);t=M(d,l),d.forEach(u),c&&c.l(i),s=R(),this.h()},h(){v(e,"class","nav-link svelte-18cqd04"),v(e,"href","/"+r[3]),E(e,"light",r[0])},m(i,d){O(i,e,d),f(e,t),c&&c.m(i,d),O(i,s,d)},p(i,d){d&1&&E(e,"light",i[0])},d(i){i&&u(e),c&&c.d(i),i&&u(s)}}}function u1(r){let e,l,t,s,c,i,d,m,L,y,g,$=Object.keys(r[2]),h=[];for(let a=0;a<$.length;a+=1)h[a]=t1(e1(r,$,a));let n=r[1],p=[];for(let a=0;a<n.length;a+=1)p[a]=l1(X(r,n,a));return{c(){e=b("footer"),l=b("div"),t=b("a"),s=P("svg"),c=P("path"),i=V();for(let a=0;a<h.length;a+=1)h[a].c();d=V(),m=b("div");for(let a=0;a<p.length;a+=1)p[a].c();L=V(),y=b("p"),g=H("\xA9 The Radix Project 2022."),this.h()},l(a){e=k(a,"FOOTER",{class:!0});var _=C(e);l=k(_,"DIV",{class:!0});var o=C(l);t=k(o,"A",{class:!0,href:!0});var A=C(t);s=I(A,"svg",{style:!0,viewBox:!0,xmlns:!0,preserveAspectRatio:!0});var B=C(s);c=I(B,"path",{fill:!0,d:!0}),C(c).forEach(u),B.forEach(u),A.forEach(u),i=w(o);for(let x=0;x<h.length;x+=1)h[x].l(o);o.forEach(u),d=w(_),m=k(_,"DIV",{});var T=C(m);for(let x=0;x<p.length;x+=1)p[x].l(T);T.forEach(u),L=w(_),y=k(_,"P",{class:!0});var j=C(y);g=M(j,"\xA9 The Radix Project 2022."),j.forEach(u),_.forEach(u),this.h()},h(){v(c,"fill","#fff"),v(c,"d","M243.747 73.364c-8.454-18.258-20.692-33.617-36.9-46.516.432 8.756 1.374 27.484 1.374 27.484s1.01 1.327 1.42 1.901c16.38 22.876 22.365 48.231 16.91 75.771-10.94 55.222-64.772 88.91-119.325 75.138-47.892-12.091-79.878-61.06-70.82-109.609 7.15-38.327 29.801-63.859 66.584-76.833l1.333-.504 1.046-.774c4.458-6.304 8.808-12.685 13.45-19.422C63.07 2.762 7.003 47.488.58 115.522c-6.216 65.832 38.17 124.541 101.596 137.424 66.096 13.425 129.017-25.57 148.031-87.976 9.508-31.206 7.283-61.924-6.46-91.606zm-157.31 41.172c2.787 26.487 25.745 44.538 52.302 41.603 26.092-2.884 45.166-28.409 40.227-54.232-3.85-20.134-8.105-40.19-12.188-60.279-1.689-8.313-3.398-16.623-5.19-25.391-.707.621-1.035.883-1.334 1.176-8.94 8.764-17.875 17.533-26.815 26.297-10.886 10.673-21.757 21.36-32.669 32.006-10.944 10.677-15.926 23.707-14.334 38.82z"),q(s,"width","24px"),q(s,"height","24px"),q(s,"margin-bottom","2px"),v(s,"viewBox","0 0 256 256"),v(s,"xmlns","http://www.w3.org/2000/svg"),v(s,"preserveAspectRatio","xMidYMid"),v(t,"class","social-link svelte-18cqd04"),v(t,"href","https://chat.radixproject.org"),v(l,"class","socials svelte-18cqd04"),v(y,"class","svelte-18cqd04"),v(e,"class","mono svelte-18cqd04")},m(a,_){O(a,e,_),f(e,l),f(l,t),f(t,s),f(s,c),f(l,i);for(let o=0;o<h.length;o+=1)h[o].m(l,null);f(e,d),f(e,m);for(let o=0;o<p.length;o+=1)p[o].m(m,null);f(e,L),f(e,y),f(y,g)},p(a,[_]){if(_&4){$=Object.keys(a[2]);let o;for(o=0;o<$.length;o+=1){const A=e1(a,$,o);h[o]?h[o].p(A,_):(h[o]=t1(A),h[o].c(),h[o].m(l,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=$.length}if(_&3){n=a[1];let o;for(o=0;o<n.length;o+=1){const A=X(a,n,o);p[o]?p[o].p(A,_):(p[o]=l1(A),p[o].c(),p[o].m(m,null))}for(;o<p.length;o+=1)p[o].d(1);p.length=n.length}},i:N,o:N,d(a){a&&u(e),G(h,a),G(p,a)}}}function _1(r,e,l){let t;return z(r,D,i=>l(0,t=i)),[t,["contribute","contact","privacy","terms"],{"mailto:info@radixproject.org":"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z","https://github.com/theradixproject":"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z","https://masto.ai/@radix":"M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z","https://matrix.to/#/#radixproject:matrix.org":"M 2,2 V 22 H 6 V 20 H 4 V 4 H 6 V 2 Z m 16,0 v 2 h 2 v 16 h -2 v 2 h 4 V 2 Z m -6.984375,6.5 c -0.505049,0 -0.94048,0.1250251 -1.3066406,0.3769531 -0.3661607,0.251928 -0.625829,0.5954672 -0.7773438,1.0273438 H 8.8554688 V 8.5898438 H 6.375 V 15.5 h 2.6132812 v -4.03125 c 0,-0.200943 0.036024,-0.373619 0.1054688,-0.517578 0.072601,-0.146958 0.1733155,-0.25796 0.3027344,-0.335938 0.1294188,-0.07798 0.2829668,-0.117187 0.4628906,-0.117187 0.271464,0 0.487453,0.08582 0.648437,0.259765 C 10.668797,10.928764 10.75,11.165837 10.75,11.46875 V 15.5 h 2.5 v -4.03125 c 0,-0.302913 0.07775,-0.539986 0.232422,-0.710938 0.157828,-0.17395 0.370364,-0.259765 0.638672,-0.259765 0.271464,0 0.487453,0.08582 0.648437,0.259765 0.160985,0.170952 0.242188,0.408025 0.242188,0.710938 V 15.5 H 17.625 v -4.660156 c 0,-0.707798 -0.218692,-1.2752939 -0.654297,-1.7011721 C 16.538255,8.7127936 15.974943,8.5 15.277344,8.5 c -0.539772,0 -1.011227,0.1287925 -1.41211,0.3867188 -0.400882,0.2549271 -0.66205,0.594699 -0.785156,1.0175781 h -0.07617 v 0 C 12.928149,9.4814178 12.705255,9.1416459 12.335938,8.8867188 11.96662,8.6287925 11.526987,8.5 11.015625,8.5 Z"}]}class v1 extends U{constructor(e){super(),Y(this,e,_1,u1,F,{})}}function p1(r){let e,l;return{c(){e=b("style"),l=H(`body {
                color: white !important;
                background-color: black !important;
            }`),this.h()},l(t){e=k(t,"STYLE",{lang:!0});var s=C(e);l=M(s,`body {
                color: white !important;
                background-color: black !important;
            }`),s.forEach(u),this.h()},h(){v(e,"lang","scss")},m(t,s){O(t,e,s),f(e,l)},d(t){t&&u(e)}}}function d1(r){let e,l;return{c(){e=b("style"),l=H(`body {
                color: black;
                background-color: white !important;
            }`),this.h()},l(t){e=k(t,"STYLE",{lang:!0});var s=C(e);l=M(s,`body {
                color: black;
                background-color: white !important;
            }`),s.forEach(u),this.h()},h(){v(e,"lang","scss")},m(t,s){O(t,e,s),f(e,l)},d(t){t&&u(e)}}}function m1(r){let e,l,t,s,c,i,d,m;function L(n,p){return n[0]?d1:p1}let y=L(r),g=y(r);s=new h1({});const $=r[2].default,h=s1($,r,r[1],null);return d=new v1({}),{c(){g.c(),e=R(),l=V(),t=b("main"),J(s.$$.fragment),c=V(),h&&h.c(),i=V(),J(d.$$.fragment),this.h()},l(n){const p=a1("svelte-1k6j40g",document.head);g.l(p),e=R(),p.forEach(u),l=w(n),t=k(n,"MAIN",{class:!0});var a=C(t);K(s.$$.fragment,a),c=w(a),h&&h.l(a),i=w(a),K(d.$$.fragment,a),a.forEach(u),this.h()},h(){v(t,"class","svelte-1vm2i6c"),E(t,"light",r[0])},m(n,p){g.m(document.head,null),f(document.head,e),O(n,l,p),O(n,t,p),Q(s,t,null),f(t,c),h&&h.m(t,null),f(t,i),Q(d,t,null),m=!0},p(n,[p]){y!==(y=L(n))&&(g.d(1),g=y(n),g&&(g.c(),g.m(e.parentNode,e))),h&&h.p&&(!m||p&2)&&r1(h,$,n,n[1],m?o1($,n[1],p,null):n1(n[1]),null),(!m||p&1)&&E(t,"light",n[0])},i(n){m||(Z(s.$$.fragment,n),Z(h,n),Z(d.$$.fragment,n),m=!0)},o(n){S(s.$$.fragment,n),S(h,n),S(d.$$.fragment,n),m=!1},d(n){g.d(n),u(e),n&&u(l),n&&u(t),W(s),h&&h.d(n),W(d)}}}function g1(r,e,l){let t;z(r,D,i=>l(0,t=i));let{$$slots:s={},$$scope:c}=e;return r.$$set=i=>{"$$scope"in i&&l(1,c=i.$$scope)},[t,c,s]}class k1 extends U{constructor(e){super(),Y(this,e,g1,m1,F,{})}}export{k1 as default};