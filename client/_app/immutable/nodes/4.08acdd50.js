import{S as K,i as L,s as N,y as U,z as V,A as W,g as X,d as Z,B as tt,O as et,k as h,q as T,a as E,l as _,m as d,r as b,h as i,c as P,p as at,n as lt,b as Y,P as r,_ as rt,u as Q,Q as ot}from"../chunks/index.f487fb56.js";import{T as nt,e as F}from"../chunks/finance.53c0c335.js";import{m as st,t as I}from"../chunks/mortgage.9fd05b48.js";import"../chunks/Offcanvas.svelte_svelte_type_style_lang.6b04e2a0.js";function G(c,t,l){const a=c.slice();return a[1]=t[l],a[3]=l,a}function J(c){let t,l,a=c[3]+1+"",f,$,p,y=I(c[1].principalPaid)+"",w,D,H,M=I(c[1].interestPaid)+"",v,O,k,g=I(c[1].mortgagePaid)+"",q,A,u,m=I(c[1].remainingPrincipal)+"",n,o;return{c(){t=h("tr"),l=h("td"),f=T(a),$=E(),p=h("td"),w=T(y),D=E(),H=h("td"),v=T(M),O=E(),k=h("td"),q=T(g),A=E(),u=h("td"),n=T(m),o=E()},l(s){t=_(s,"TR",{});var e=d(t);l=_(e,"TD",{});var B=d(l);f=b(B,a),B.forEach(i),$=P(e),p=_(e,"TD",{});var R=d(p);w=b(R,y),R.forEach(i),D=P(e),H=_(e,"TD",{});var S=d(H);v=b(S,M),S.forEach(i),O=P(e),k=_(e,"TD",{});var z=d(k);q=b(z,g),z.forEach(i),A=P(e),u=_(e,"TD",{});var C=d(u);n=b(C,m),C.forEach(i),o=P(e),e.forEach(i)},m(s,e){Y(s,t,e),r(t,l),r(l,f),r(t,$),r(t,p),r(p,w),r(t,D),r(t,H),r(H,v),r(t,O),r(t,k),r(k,q),r(t,A),r(t,u),r(u,n),r(t,o)},p(s,e){e&1&&y!==(y=I(s[1].principalPaid)+"")&&Q(w,y),e&1&&M!==(M=I(s[1].interestPaid)+"")&&Q(v,M),e&1&&g!==(g=I(s[1].mortgagePaid)+"")&&Q(q,g),e&1&&m!==(m=I(s[1].remainingPrincipal)+"")&&Q(n,m)},d(s){s&&i(t)}}}function it(c){let t,l,a,f,$,p,y,w,D,H,M,v,O,k,g,q,A,u,m=F(c[0]),n=[];for(let o=0;o<m.length;o+=1)n[o]=J(G(c,m,o));return{c(){t=h("thead"),l=h("tr"),a=h("th"),f=T("Periodo"),$=E(),p=h("th"),y=T("Muto pagato"),w=E(),D=h("th"),H=T("Interesse pagato"),M=E(),v=h("th"),O=T("Totale pagato"),k=E(),g=h("th"),q=T("Mutuo restante"),A=E(),u=h("tbody");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=_(o,"THEAD",{class:!0});var s=d(t);l=_(s,"TR",{});var e=d(l);a=_(e,"TH",{style:!0});var B=d(a);f=b(B,"Periodo"),B.forEach(i),$=P(e),p=_(e,"TH",{});var R=d(p);y=b(R,"Muto pagato"),R.forEach(i),w=P(e),D=_(e,"TH",{});var S=d(D);H=b(S,"Interesse pagato"),S.forEach(i),M=P(e),v=_(e,"TH",{});var z=d(v);O=b(z,"Totale pagato"),z.forEach(i),k=P(e),g=_(e,"TH",{});var C=d(g);q=b(C,"Mutuo restante"),C.forEach(i),e.forEach(i),s.forEach(i),A=P(o),u=_(o,"TBODY",{});var x=d(u);for(let j=0;j<n.length;j+=1)n[j].l(x);x.forEach(i),this.h()},h(){at(a,"width","10%"),lt(t,"class","position-sticky bg-light svelte-cr8fga")},m(o,s){Y(o,t,s),r(t,l),r(l,a),r(a,f),r(l,$),r(l,p),r(p,y),r(l,w),r(l,D),r(D,H),r(l,M),r(l,v),r(v,O),r(l,k),r(l,g),r(g,q),Y(o,A,s),Y(o,u,s);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(u,null)},p(o,s){if(s&1){m=F(o[0]);let e;for(e=0;e<m.length;e+=1){const B=G(o,m,e);n[e]?n[e].p(B,s):(n[e]=J(B),n[e].c(),n[e].m(u,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=m.length}},d(o){o&&i(t),o&&i(A),o&&i(u),rt(n,o)}}}function ct(c){let t,l;return t=new nt({props:{hover:!0,$$slots:{default:[it]},$$scope:{ctx:c}}}),{c(){U(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,f){W(t,a,f),l=!0},p(a,[f]){const $={};f&17&&($.$$scope={dirty:f,ctx:a}),t.$set($)},i(a){l||(X(t.$$.fragment,a),l=!0)},o(a){Z(t.$$.fragment,a),l=!1},d(a){tt(t,a)}}}function ft(c,t,l){let a;return et(c,st,f=>l(0,a=f)),[a]}class ht extends K{constructor(t){super(),L(this,t,ft,ct,N,{})}}function _t(c){let t,l;return t=new ht({}),{c(){U(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,f){W(t,a,f),l=!0},p:ot,i(a){l||(X(t.$$.fragment,a),l=!0)},o(a){Z(t.$$.fragment,a),l=!1},d(a){tt(t,a)}}}class gt extends K{constructor(t){super(),L(this,t,null,_t,N,{})}}export{gt as component};
