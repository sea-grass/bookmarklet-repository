import{S as a,i as r,s,e,t,k as n,l as o,c as u,a as i,g as l,d as h,n as c,K as p,b as f,f as m,G as d,h as k,I as b,L as g}from"../../../chunks/vendor-9e30eaa1.js";function j(a){let r,s,j,v,w,x,y,$;return{c(){r=e("h2"),s=t(a[0]),j=t("\nDrag this link to your bookmarks bar:"),v=e("a"),w=t(a[0]),x=n(),y=new g,$=o(),this.h()},l(e){r=u(e,"H2",{});var t=i(r);s=l(t,a[0]),t.forEach(h),j=l(e,"\nDrag this link to your bookmarks bar:"),v=u(e,"A",{href:!0});var n=i(v);w=l(n,a[0]),n.forEach(h),x=c(e),y=p(e),$=o(),this.h()},h(){f(v,"href",a[2]),y.a=$},m(e,t){m(e,r,t),d(r,s),m(e,j,t),m(e,v,t),d(v,w),m(e,x,t),y.m(a[1],e,t),m(e,$,t)},p(a,[r]){1&r&&k(s,a[0]),1&r&&k(w,a[0]),4&r&&f(v,"href",a[2]),2&r&&y.p(a[1])},i:b,o:b,d(a){a&&h(r),a&&h(j),a&&h(v),a&&h(x),a&&h($),a&&y.d()}}}async function v({fetch:a,page:{params:r}}){const{file:s}=r,e=await a(`/data/${s}/data.json`);if(!e.ok)return{status:404,error:"could not load bookmarklet data"};const{name:t,pre:n,url:o}=await e.json();return{props:{name:t,pre:n,url:o}}}function w(a,r,s){let{name:e}=r,{pre:t}=r,{url:n}=r;return a.$$set=a=>{"name"in a&&s(0,e=a.name),"pre"in a&&s(1,t=a.pre),"url"in a&&s(2,n=a.url)},[e,t,n]}export default class extends a{constructor(a){super(),r(this,a,w,j,s,{name:0,pre:1,url:2})}}export{v as load};
