import{S as t,i as r,s,e as a,t as o,k as e,c as l,a as n,g as h,d as c,n as u,b as f,f as i,E as k,h as m,G as p,H as d}from"../../chunks/vendor-98ea38e6.js";function g(t,r,s){const a=t.slice();return a[1]=r[s],a}function v(t){let r,s,p,d,g,v=t[1]+"";return{c(){r=a("li"),s=a("a"),p=o(v),g=e(),this.h()},l(t){r=l(t,"LI",{});var a=n(r);s=l(a,"A",{href:!0});var o=n(s);p=h(o,v),o.forEach(c),g=u(a),a.forEach(c),this.h()},h(){f(s,"href",d=t[1])},m(t,a){i(t,r,a),k(r,s),k(s,p),k(r,g)},p(t,r){1&r&&v!==(v=t[1]+"")&&m(p,v),1&r&&d!==(d=t[1])&&f(s,"href",d)},d(t){t&&c(r)}}}function E(t){let r,s,f,m,E=t[0],b=[];for(let a=0;a<E.length;a+=1)b[a]=v(g(t,E,a));return{c(){r=a("h2"),s=o("Bookmarklets"),f=e(),m=a("ul");for(let t=0;t<b.length;t+=1)b[t].c()},l(t){r=l(t,"H2",{});var a=n(r);s=h(a,"Bookmarklets"),a.forEach(c),f=u(t),m=l(t,"UL",{});var o=n(m);for(let r=0;r<b.length;r+=1)b[r].l(o);o.forEach(c)},m(t,a){i(t,r,a),k(r,s),i(t,f,a),i(t,m,a);for(let r=0;r<b.length;r+=1)b[r].m(m,null)},p(t,[r]){if(1&r){let s;for(E=t[0],s=0;s<E.length;s+=1){const a=g(t,E,s);b[s]?b[s].p(a,r):(b[s]=v(a),b[s].c(),b[s].m(m,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=E.length}},i:p,o:p,d(t){t&&c(r),t&&c(f),t&&c(m),d(b,t)}}}async function b({fetch:t}){const r=await t("/bookmarklet/all.json");if(!r.ok)return{status:404,error:"Could not load bookmarklets"};const{paths:s}=await r.json();return{props:{urls:s.map((t=>`/bookmarklet/${t}`))}}}function j(t,r,s){let{urls:a=[]}=r;return t.$$set=t=>{"urls"in t&&s(0,a=t.urls)},[a]}export default class extends t{constructor(t){super(),r(this,t,j,E,s,{urls:0})}}export{b as load};