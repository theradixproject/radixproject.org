import{S as p,i as b,s as I,k as m,l as o,m as q,h as n,n as c,b as _,B as v,E as C,a as k,c as d,L as h,C as g}from"./index-a2d646c2.js";import{l as E}from"./stores-890e2bdc.js";function y(i){let t,u,a,s,l;return{c(){t=m("source"),a=k(),s=m("img"),this.h()},l(e){t=o(e,"SOURCE",{type:!0,srcset:!0}),a=d(e),s=o(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){c(t,"type","image/avif"),c(t,"srcset",u="/"+i[0]+".avif"),c(s,"alt",i[1]),h(s.src,l="/"+i[0]+".png")||c(s,"src",l),c(s,"class","svelte-184q5u6"),g(s,"round",i[3])},m(e,r){_(e,t,r),_(e,a,r),_(e,s,r)},p(e,r){r&1&&u!==(u="/"+e[0]+".avif")&&c(t,"srcset",u),r&2&&c(s,"alt",e[1]),r&1&&!h(s.src,l="/"+e[0]+".png")&&c(s,"src",l),r&8&&g(s,"round",e[3])},d(e){e&&n(t),e&&n(a),e&&n(s)}}}function S(i){let t,u,a,s,l;return{c(){t=m("source"),a=k(),s=m("img"),this.h()},l(e){t=o(e,"SOURCE",{type:!0,srcset:!0}),a=d(e),s=o(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){c(t,"type","image/avif"),c(t,"srcset",u="/"+i[0]+"_"+(i[4]?"light":"dark")+".avif"),c(s,"alt",i[1]),h(s.src,l="/"+i[0]+"_"+(i[4]?"light":"dark")+".png")||c(s,"src",l),c(s,"class","svelte-184q5u6"),g(s,"round",i[3])},m(e,r){_(e,t,r),_(e,a,r),_(e,s,r)},p(e,r){r&17&&u!==(u="/"+e[0]+"_"+(e[4]?"light":"dark")+".avif")&&c(t,"srcset",u),r&2&&c(s,"alt",e[1]),r&17&&!h(s.src,l="/"+e[0]+"_"+(e[4]?"light":"dark")+".png")&&c(s,"src",l),r&8&&g(s,"round",e[3])},d(e){e&&n(t),e&&n(a),e&&n(s)}}}function R(i){let t;function u(l,e){return l[2]?S:y}let a=u(i),s=a(i);return{c(){t=m("picture"),s.c(),this.h()},l(l){t=o(l,"PICTURE",{class:!0});var e=q(t);s.l(e),e.forEach(n),this.h()},h(){c(t,"class","svelte-184q5u6")},m(l,e){_(l,t,e),s.m(t,null)},p(l,[e]){a===(a=u(l))&&s?s.p(l,e):(s.d(1),s=a(l),s&&(s.c(),s.m(t,null)))},i:v,o:v,d(l){l&&n(t),s.d()}}}function U(i,t,u){let a;C(i,E,f=>u(4,a=f));let{src:s,alt:l}=t,{themed:e=!1}=t,{round:r=!1}=t;return i.$$set=f=>{"src"in f&&u(0,s=f.src),"alt"in f&&u(1,l=f.alt),"themed"in f&&u(2,e=f.themed),"round"in f&&u(3,r=f.round)},[s,l,e,r,a]}class O extends p{constructor(t){super(),b(this,t,U,R,I,{src:0,alt:1,themed:2,round:3})}}export{O as I};