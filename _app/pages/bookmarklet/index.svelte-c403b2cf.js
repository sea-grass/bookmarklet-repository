import{S as t,i as s,s as r,e as o,j as a,k as e,c as n,a as l,m as c,n as f,d as u,f as i,o as h,F as m,x as p,u as $,v as k,t as d,g,w as j,I as x,r as v,h as b}from"../../chunks/vendor-afdb4af7.js";import{L as w}from"../../chunks/Link-c25c8da0.js";import"../../chunks/paths-45dac81d.js";function L(t,s,r){const o=t.slice();return o[1]=s[r],o}function B(t){let s,r=t[1]+"";return{c(){s=d(r)},l(t){s=g(t,r)},m(t,r){i(t,s,r)},p(t,o){1&o&&r!==(r=t[1]+"")&&b(s,r)},d(t){t&&u(s)}}}function E(t){let s,r,d,g;return r=new w({props:{href:t[1],$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){s=o("li"),a(r.$$.fragment),d=e()},l(t){s=n(t,"LI",{});var o=l(s);c(r.$$.fragment,o),d=f(o),o.forEach(u)},m(t,o){i(t,s,o),h(r,s,null),m(s,d),g=!0},p(t,s){const o={};1&s&&(o.href=t[1]),17&s&&(o.$$scope={dirty:s,ctx:t}),r.$set(o)},i(t){g||(p(r.$$.fragment,t),g=!0)},o(t){$(r.$$.fragment,t),g=!1},d(t){t&&u(s),k(r)}}}function y(t){let s,r,a,c,h,k=t[0],b=[];for(let o=0;o<k.length;o+=1)b[o]=E(L(t,k,o));const w=t=>$(b[t],1,1,(()=>{b[t]=null}));return{c(){s=o("h2"),r=d("Bookmarklets"),a=e(),c=o("ul");for(let t=0;t<b.length;t+=1)b[t].c()},l(t){s=n(t,"H2",{});var o=l(s);r=g(o,"Bookmarklets"),o.forEach(u),a=f(t),c=n(t,"UL",{});var e=l(c);for(let s=0;s<b.length;s+=1)b[s].l(e);e.forEach(u)},m(t,o){i(t,s,o),m(s,r),i(t,a,o),i(t,c,o);for(let s=0;s<b.length;s+=1)b[s].m(c,null);h=!0},p(t,[s]){if(1&s){let r;for(k=t[0],r=0;r<k.length;r+=1){const o=L(t,k,r);b[r]?(b[r].p(o,s),p(b[r],1)):(b[r]=E(o),b[r].c(),p(b[r],1),b[r].m(c,null))}for(v(),r=k.length;r<b.length;r+=1)w(r);j()}},i(t){if(!h){for(let t=0;t<k.length;t+=1)p(b[t]);h=!0}},o(t){b=b.filter(Boolean);for(let s=0;s<b.length;s+=1)$(b[s]);h=!1},d(t){t&&u(s),t&&u(a),t&&u(c),x(b,t)}}}async function I({fetch:t}){const s=await t("/bookmarklet/all.json");if(!s.ok)return{status:404,error:"Could not load bookmarklets"};const{paths:r}=await s.json();return{props:{urls:r.map((t=>`/bookmarklet/${t}`))}}}function C(t,s,r){let{urls:o=[]}=s;return t.$$set=t=>{"urls"in t&&r(0,o=t.urls)},[o]}export default class extends t{constructor(t){super(),s(this,t,C,y,r,{urls:0})}}export{I as load};
