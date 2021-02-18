import{S as e,i as t,s as a,e as s,t as n,c as l,a as r,b as c,d as i,f as o,g as h,h as d,n as u,j as f,k as m,l as p,m as g,o as v,p as $,q as E,r as _,u as w,v as y,w as D,x as I,y as T,z as k,A as L,B as b,C as S,D as M,E as N,H as R,F as A,G as H}from"./client.870a8ca1.js";import{c as U,a as V,h as O,L as P}from"./createOctokit.a95fd75e.js";function x(e,t,a){const s=e.slice();return s[5]=t[a],s}function B(e){let t,a,f,m=_.i18n.allSystemsOperational+"";return{c(){t=s("article"),a=n("✅   "),f=n(m),this.h()},l(e){t=l(e,"ARTICLE",{class:!0});var s=r(t);a=c(s,"✅   "),f=c(s,m),s.forEach(i),this.h()},h(){o(t,"class","up")},m(e,s){h(e,t,s),d(t,a),d(t,f)},p:u,d(e){e&&i(t)}}}function C(e){let t,a,o,p,g=_.i18n.activeIncidents+"",v=e[1],$=[];for(let t=0;t<v.length;t+=1)$[t]=j(x(e,v,t));return{c(){t=s("h2"),a=n(g),o=f();for(let e=0;e<$.length;e+=1)$[e].c();p=y()},l(e){t=l(e,"H2",{});var s=r(t);a=c(s,g),s.forEach(i),o=m(e);for(let t=0;t<$.length;t+=1)$[t].l(e);p=y()},m(e,s){h(e,t,s),d(t,a),h(e,o,s);for(let t=0;t<$.length;t+=1)$[t].m(e,s);h(e,p,s)},p(e,t){if(2&t){let a;for(v=e[1],a=0;a<v.length;a+=1){const s=x(e,v,a);$[a]?$[a].p(s,t):($[a]=j(s),$[a].c(),$[a].m(p.parentNode,p))}for(;a<$.length;a+=1)$[a].d(1);$.length=v.length}},i:u,o:u,d(e){e&&i(t),e&&i(o),D($,e),e&&i(p)}}}function F(e){let t,a;return t=new P({}),{c(){I(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,s){k(t,e,s),a=!0},p:u,i(e){a||($(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){L(t,e)}}}function j(e){let t,a,u,p,g,v,$,E,y,D,I,T,k,L,b,S=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",M=_.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"",N=_.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"";return{c(){t=s("article"),a=s("div"),u=s("div"),p=s("h4"),g=n(S),v=f(),$=s("div"),E=n(M),y=f(),D=s("div"),I=s("a"),T=n(N),L=f(),this.h()},l(e){t=l(e,"ARTICLE",{class:!0});var s=r(t);a=l(s,"DIV",{class:!0});var n=r(a);u=l(n,"DIV",{});var o=r(u);p=l(o,"H4",{});var h=r(p);g=c(h,S),h.forEach(i),v=m(o),$=l(o,"DIV",{});var d=r($);E=c(d,M),d.forEach(i),o.forEach(i),y=m(n),D=l(n,"DIV",{class:!0});var f=r(D);I=l(f,"A",{href:!0});var _=r(I);T=c(_,N),_.forEach(i),f.forEach(i),n.forEach(i),L=m(s),s.forEach(i),this.h()},h(){o(I,"href",k=`${_.path}/incident/${e[5].number}`),o(D,"class","f r"),o(a,"class","f"),o(t,"class",b="down down-active link "+(e[5].title.includes("degraded")?"degraded":""))},m(e,s){h(e,t,s),d(t,a),d(a,u),d(u,p),d(p,g),d(u,v),d(u,$),d($,E),d(a,y),d(a,D),d(D,I),d(I,T),d(t,L)},p(e,a){2&a&&S!==(S=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&w(g,S),2&a&&M!==(M=_.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"")&&w(E,M),2&a&&N!==(N=_.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&w(T,N),2&a&&k!==(k=`${_.path}/incident/${e[5].number}`)&&o(I,"href",k),2&a&&b!==(b="down down-active link "+(e[5].title.includes("degraded")?"degraded":""))&&o(t,"class",b)},d(e){e&&i(t)}}}function W(e){let t,a,n,c,d,u=!e[1].length&&!e[0]&&B();const E=[F,C],_=[];function w(e,t){return e[0]?0:e[1].length?1:-1}return~(n=w(e))&&(c=_[n]=E[n](e)),{c(){u&&u.c(),t=f(),a=s("section"),c&&c.c(),this.h()},l(e){u&&u.l(e),t=m(e),a=l(e,"SECTION",{class:!0});var s=r(a);c&&c.l(s),s.forEach(i),this.h()},h(){o(a,"class","svelte-8lnl4f")},m(e,s){u&&u.m(e,s),h(e,t,s),h(e,a,s),~n&&_[n].m(a,null),d=!0},p(e,[s]){e[1].length||e[0]?u&&(u.d(1),u=null):u?u.p(e,s):(u=B(),u.c(),u.m(t.parentNode,t));let l=n;n=w(e),n===l?~n&&_[n].p(e,s):(c&&(p(),g(_[l],1,1,(()=>{_[l]=null})),v()),~n?(c=_[n],c?c.p(e,s):(c=_[n]=E[n](e),c.c()),$(c,1),c.m(a,null)):c=null)},i(e){d||($(c),d=!0)},o(e){g(c),d=!1},d(e){u&&u.d(e),e&&i(t),e&&i(a),~n&&_[n].d()}}}function Y(e,t,a){let s=!0;const n=U(),l=_.owner,r=_.repo;let c=[];return E((async()=>{try{a(1,c=(await V(`issues-${l}-${r}`,(()=>n.issues.listForRepo({owner:l,repo:r,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"})))).data),a(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e))))}catch(e){O(e)}a(0,s=!1)})),[s,c]}class z extends e{constructor(e){super(),t(this,e,Y,W,a,{})}}function G(e,t,a){const s=e.slice();return s[18]=t[a],s}function q(e){let t,a=e[1],s=[];for(let t=0;t<a.length;t+=1)s[t]=K(G(e,a,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);h(e,t,a)},p(e,n){if(26&n){let l;for(a=e[1],l=0;l<a.length;l+=1){const r=G(e,a,l);s[l]?s[l].p(r,n):(s[l]=K(r),s[l].c(),s[l].m(t.parentNode,t))}for(;l<s.length;l+=1)s[l].d(1);s.length=a.length}},i:u,o:u,d(e){D(s,e),e&&i(t)}}}function J(e){let t,a;return t=new P({}),{c(){I(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,s){k(t,e,s),a=!0},p:u,i(e){a||($(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){L(t,e)}}}function K(e){let t,a,u,p,g,v,$,E,y,D,I,T,k,L,b,S,M,A,H,U,V,O,P,x,B,C,F,j,W,Y=e[18].name+"",z=_.i18n.overallUptime.split("$UPTIME")[0]+"",G=("day"===e[3]?e[18].uptimeDay:"week"===e[3]?e[18].uptimeWeek:"month"===e[3]?e[18].uptimeMonth:"year"===e[3]?e[18].uptimeYear:e[18].uptime)+"",q=_.i18n.overallUptime.split("$UPTIME")[1]+"",J=_.i18n.averageResponseTime.split("$TIME")[0]+"",K=("day"===e[3]?e[18].timeDay:"week"===e[3]?e[18].timeWeek:"month"===e[3]?e[18].timeMonth:"year"===e[3]?e[18].timeYear:e[18].time)+"",Q=_.i18n.averageResponseTime.split("$TIME")[1]+"";return{c(){t=s("article"),a=s("h4"),u=s("img"),g=f(),v=s("a"),$=n(Y),y=f(),D=s("img"),T=f(),k=s("div"),b=f(),S=s("span"),M=n(G),A=f(),U=f(),V=s("div"),P=f(),x=s("span"),B=n(K),C=f(),j=f(),this.h()},l(e){t=l(e,"ARTICLE",{class:!0});var s=r(t);a=l(s,"H4",{class:!0});var n=r(a);u=l(n,"IMG",{class:!0,alt:!0,src:!0}),g=m(n),v=l(n,"A",{href:!0,class:!0});var o=r(v);$=c(o,Y),o.forEach(i),n.forEach(i),y=m(s),D=l(s,"IMG",{alt:!0,class:!0,src:!0}),T=m(s),k=l(s,"DIV",{class:!0});var h=r(k);b=m(h),S=l(h,"SPAN",{class:!0});var d=r(S);M=c(d,G),A=m(d),d.forEach(i),h.forEach(i),U=m(s),V=l(s,"DIV",{class:!0});var f=r(V);P=m(f),x=l(f,"SPAN",{class:!0});var p=r(x);B=c(p,K),C=m(p),p.forEach(i),f.forEach(i),j=m(s),s.forEach(i),this.h()},h(){o(u,"class","icon svelte-14gfn20"),o(u,"alt",""),u.src!==(p=e[18].icon)&&o(u,"src",p),o(v,"href",E=`${_.path}/history/${e[18].slug}`),o(v,"class","svelte-14gfn20"),o(a,"class","svelte-14gfn20"),o(D,"alt",""),o(D,"class","graph svelte-14gfn20"),D.src!==(I=`${e[4]}/${e[18].slug}/response-time${"day"===e[3]?"-day":"week"===e[3]?"-week":"month"===e[3]?"-month":"year"===e[3]?"-year":""}.png`)&&o(D,"src",I),L=new R(b),H=new R(null),o(S,"class","data svelte-14gfn20"),o(k,"class","svelte-14gfn20"),O=new R(P),F=new R(null),o(x,"class","data svelte-14gfn20"),o(V,"class","svelte-14gfn20"),o(t,"class",W=N(`${e[18].status} link`)+" svelte-14gfn20")},m(e,s){h(e,t,s),d(t,a),d(a,u),d(a,g),d(a,v),d(v,$),d(t,y),d(t,D),d(t,T),d(t,k),L.m(z,k),d(k,b),d(k,S),d(S,M),d(S,A),H.m(q,S),d(t,U),d(t,V),O.m(J,V),d(V,P),d(V,x),d(x,B),d(x,C),F.m(Q,x),d(t,j)},p(e,a){2&a&&u.src!==(p=e[18].icon)&&o(u,"src",p),2&a&&Y!==(Y=e[18].name+"")&&w($,Y),2&a&&E!==(E=`${_.path}/history/${e[18].slug}`)&&o(v,"href",E),10&a&&D.src!==(I=`${e[4]}/${e[18].slug}/response-time${"day"===e[3]?"-day":"week"===e[3]?"-week":"month"===e[3]?"-month":"year"===e[3]?"-year":""}.png`)&&o(D,"src",I),10&a&&G!==(G=("day"===e[3]?e[18].uptimeDay:"week"===e[3]?e[18].uptimeWeek:"month"===e[3]?e[18].uptimeMonth:"year"===e[3]?e[18].uptimeYear:e[18].uptime)+"")&&w(M,G),10&a&&K!==(K=("day"===e[3]?e[18].timeDay:"week"===e[3]?e[18].timeWeek:"month"===e[3]?e[18].timeMonth:"year"===e[3]?e[18].timeYear:e[18].time)+"")&&w(B,K),2&a&&W!==(W=N(`${e[18].status} link`)+" svelte-14gfn20")&&o(t,"class",W)},d(e){e&&i(t)}}}function Q(e){let t,a,u,E,w,y,D,I,T,k,L,M,N,R,A,H,U,V,O,P,x,B,C,F,j,W,Y,z,G,K,Q,X,Z,ee,te,ae,se=_.i18n.liveStatus+"";const ne=[J,q],le=[];function re(e,t){return e[0]?0:e[1].length?1:-1}return~(X=re(e))&&(Z=le[X]=ne[X](e)),{c(){t=s("div"),a=s("h2"),u=n(se),E=f(),w=s("form"),y=s("div"),D=s("input"),I=s("label"),T=n("24h"),k=f(),L=s("div"),M=s("input"),N=s("label"),R=n("7d"),A=f(),H=s("div"),U=s("input"),V=s("label"),O=n("30d"),P=f(),x=s("div"),B=s("input"),C=s("label"),F=n("1y"),j=f(),W=s("div"),Y=s("input"),z=s("label"),G=n("all"),K=f(),Q=s("section"),Z&&Z.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=r(t);a=l(s,"H2",{});var n=r(a);u=c(n,se),n.forEach(i),E=m(s),w=l(s,"FORM",{class:!0});var o=r(w);y=l(o,"DIV",{});var h=r(y);D=l(h,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),I=l(h,"LABEL",{for:!0,class:!0});var d=r(I);T=c(d,"24h"),d.forEach(i),h.forEach(i),k=m(o),L=l(o,"DIV",{});var f=r(L);M=l(f,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),N=l(f,"LABEL",{for:!0,class:!0});var p=r(N);R=c(p,"7d"),p.forEach(i),f.forEach(i),A=m(o),H=l(o,"DIV",{});var g=r(H);U=l(g,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),V=l(g,"LABEL",{for:!0,class:!0});var v=r(V);O=c(v,"30d"),v.forEach(i),g.forEach(i),P=m(o),x=l(o,"DIV",{});var $=r(x);B=l($,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),C=l($,"LABEL",{for:!0,class:!0});var _=r(C);F=c(_,"1y"),_.forEach(i),$.forEach(i),j=m(o),W=l(o,"DIV",{});var b=r(W);Y=l(b,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),z=l(b,"LABEL",{for:!0,class:!0});var S=r(z);G=c(S,"all"),S.forEach(i),b.forEach(i),o.forEach(i),s.forEach(i),K=m(e),Q=l(e,"SECTION",{class:!0});var q=r(Q);Z&&Z.l(q),q.forEach(i),this.h()},h(){D.__value="day",D.value=D.__value,o(D,"name","d"),o(D,"type","radio"),o(D,"id","data_day"),o(D,"class","svelte-14gfn20"),e[7][0].push(D),o(I,"for","data_day"),o(I,"class","svelte-14gfn20"),M.__value="week",M.value=M.__value,o(M,"name","d"),o(M,"type","radio"),o(M,"id","data_week"),o(M,"class","svelte-14gfn20"),e[7][0].push(M),o(N,"for","data_week"),o(N,"class","svelte-14gfn20"),U.__value="month",U.value=U.__value,o(U,"name","d"),o(U,"type","radio"),o(U,"id","data_month"),o(U,"class","svelte-14gfn20"),e[7][0].push(U),o(V,"for","data_month"),o(V,"class","svelte-14gfn20"),B.__value="year",B.value=B.__value,o(B,"name","d"),o(B,"type","radio"),o(B,"id","data_year"),o(B,"class","svelte-14gfn20"),e[7][0].push(B),o(C,"for","data_year"),o(C,"class","svelte-14gfn20"),Y.__value="all",Y.value=Y.__value,o(Y,"name","d"),o(Y,"type","radio"),o(Y,"id","data_all"),o(Y,"class","svelte-14gfn20"),e[7][0].push(Y),o(z,"for","data_all"),o(z,"class","svelte-14gfn20"),o(w,"class","f r svelte-14gfn20"),o(t,"class","f changed svelte-14gfn20"),o(Q,"class","live-status svelte-14gfn20")},m(s,n){h(s,t,n),d(t,a),d(a,u),d(t,E),d(t,w),d(w,y),d(y,D),D.checked=D.__value===e[3],d(y,I),d(I,T),d(w,k),d(w,L),d(L,M),M.checked=M.__value===e[3],d(L,N),d(N,R),d(w,A),d(w,H),d(H,U),U.checked=U.__value===e[3],d(H,V),d(V,O),d(w,P),d(w,x),d(x,B),B.checked=B.__value===e[3],d(x,C),d(C,F),d(w,j),d(w,W),d(W,Y),Y.checked=Y.__value===e[3],d(W,z),d(z,G),e[12](t),h(s,K,n),h(s,Q,n),~X&&le[X].m(Q,null),ee=!0,te||(ae=[b(D,"change",e[6]),b(D,"change",e[5]),b(M,"change",e[8]),b(M,"change",e[5]),b(U,"change",e[9]),b(U,"change",e[5]),b(B,"change",e[10]),b(B,"change",e[5]),b(Y,"change",e[11]),b(Y,"change",e[5])],te=!0)},p(e,[t]){8&t&&(D.checked=D.__value===e[3]),8&t&&(M.checked=M.__value===e[3]),8&t&&(U.checked=U.__value===e[3]),8&t&&(B.checked=B.__value===e[3]),8&t&&(Y.checked=Y.__value===e[3]);let a=X;X=re(e),X===a?~X&&le[X].p(e,t):(Z&&(p(),g(le[a],1,1,(()=>{le[a]=null})),v()),~X?(Z=le[X],Z?Z.p(e,t):(Z=le[X]=ne[X](e),Z.c()),$(Z,1),Z.m(Q,null)):Z=null)},i(e){ee||($(Z),ee=!0)},o(e){g(Z),ee=!1},d(a){a&&i(t),e[7][0].splice(e[7][0].indexOf(D),1),e[7][0].splice(e[7][0].indexOf(M),1),e[7][0].splice(e[7][0].indexOf(U),1),e[7][0].splice(e[7][0].indexOf(B),1),e[7][0].splice(e[7][0].indexOf(Y),1),e[12](null),a&&i(K),a&&i(Q),~X&&le[X].d(),te=!1,S(ae)}}}function X(e,t,a){let s=!0;U();const n=_.owner,l=_.repo;let{apiBaseUrl:r}=_["status-website"]||{},c=[];r||(r="https://api.github.com");const i=r.includes("api.github.com")?"https://raw.githubusercontent.com":r,o=`${i}/${n}/${l}/master/graphs`;let h=null,d="week";E((async()=>{try{const e=await fetch(`${i}/${n}/${l}/master/history/summary.json`);a(1,c=await e.json())}catch(e){O(e)}a(0,s=!1),h&&h.classList.remove("changed")}));return[s,c,h,d,o,()=>{h&&(h.classList.add("changed"),setTimeout((()=>h.classList.remove("changed")),500))},function(){d=this.__value,a(3,d)},[[]],function(){d=this.__value,a(3,d)},function(){d=this.__value,a(3,d)},function(){d=this.__value,a(3,d)},function(){d=this.__value,a(3,d)},function(e){M[e?"unshift":"push"]((()=>{h=e,a(2,h)}))}]}class Z extends e{constructor(e){super(),t(this,e,X,Q,a,{})}}function ee(e,t,a){const s=e.slice();return s[5]=t[a],s}function te(e){let t,a,p,g,v=_.i18n.pastIncidents+"",$=e[1],E=[];for(let t=0;t<$.length;t+=1)E[t]=ne(ee(e,$,t));return{c(){t=s("h2"),a=n(v),p=f();for(let e=0;e<E.length;e+=1)E[e].c();g=y(),this.h()},l(e){t=l(e,"H2",{class:!0});var s=r(t);a=c(s,v),s.forEach(i),p=m(e);for(let t=0;t<E.length;t+=1)E[t].l(e);g=y(),this.h()},h(){o(t,"class","svelte-18y4uo2")},m(e,s){h(e,t,s),d(t,a),h(e,p,s);for(let t=0;t<E.length;t+=1)E[t].m(e,s);h(e,g,s)},p(e,t){if(2&t){let a;for($=e[1],a=0;a<$.length;a+=1){const s=ee(e,$,a);E[a]?E[a].p(s,t):(E[a]=ne(s),E[a].c(),E[a].m(g.parentNode,g))}for(;a<E.length;a+=1)E[a].d(1);E.length=$.length}},i:u,o:u,d(e){e&&i(t),e&&i(p),D(E,e),e&&i(g)}}}function ae(e){let t,a;return t=new P({}),{c(){I(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,s){k(t,e,s),a=!0},p:u,i(e){a||($(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){L(t,e)}}}function se(e){let t,a,o=new Date(e[5].created_at).toLocaleDateString()+"";return{c(){t=s("h3"),a=n(o)},l(e){t=l(e,"H3",{});var s=r(t);a=c(s,o),s.forEach(i)},m(e,s){h(e,t,s),d(t,a)},p(e,t){2&t&&o!==(o=new Date(e[5].created_at).toLocaleDateString()+"")&&w(a,o)},d(e){e&&i(t)}}}function ne(e){let t,a,u,p,g,v,$,E,y,D,I,T,k,L,b,S=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",M=_.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"",N=_.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"",R=e[5].showHeading&&se(e);return{c(){R&&R.c(),t=f(),a=s("article"),u=s("div"),p=s("div"),g=s("h4"),v=n(S),$=f(),E=s("div"),y=f(),D=s("div"),I=s("a"),T=n(N),L=f(),this.h()},l(e){R&&R.l(e),t=m(e),a=l(e,"ARTICLE",{class:!0});var s=r(a);u=l(s,"DIV",{class:!0});var n=r(u);p=l(n,"DIV",{});var o=r(p);g=l(o,"H4",{});var h=r(g);v=c(h,S),h.forEach(i),$=m(o),E=l(o,"DIV",{}),r(E).forEach(i),o.forEach(i),y=m(n),D=l(n,"DIV",{class:!0});var d=r(D);I=l(d,"A",{href:!0});var f=r(I);T=c(f,N),f.forEach(i),d.forEach(i),n.forEach(i),L=m(s),s.forEach(i),this.h()},h(){o(I,"href",k=`${_.path}/incident/${e[5].number}`),o(D,"class","f r"),o(u,"class","f"),o(a,"class",b="down link "+(e[5].title.includes("degraded")?"degraded":""))},m(e,s){R&&R.m(e,s),h(e,t,s),h(e,a,s),d(a,u),d(u,p),d(p,g),d(g,v),d(p,$),d(p,E),E.innerHTML=M,d(u,y),d(u,D),d(D,I),d(I,T),d(a,L)},p(e,s){e[5].showHeading?R?R.p(e,s):(R=se(e),R.c(),R.m(t.parentNode,t)):R&&(R.d(1),R=null),2&s&&S!==(S=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&w(v,S),2&s&&M!==(M=_.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"")&&(E.innerHTML=M),2&s&&N!==(N=_.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&w(T,N),2&s&&k!==(k=`${_.path}/incident/${e[5].number}`)&&o(I,"href",k),2&s&&b!==(b="down link "+(e[5].title.includes("degraded")?"degraded":""))&&o(a,"class",b)},d(e){R&&R.d(e),e&&i(t),e&&i(a)}}}function le(e){let t,a,n,c;const o=[ae,te],d=[];function u(e,t){return e[0]?0:e[1].length?1:-1}return~(a=u(e))&&(n=d[a]=o[a](e)),{c(){t=s("section"),n&&n.c()},l(e){t=l(e,"SECTION",{});var a=r(t);n&&n.l(a),a.forEach(i)},m(e,s){h(e,t,s),~a&&d[a].m(t,null),c=!0},p(e,[s]){let l=a;a=u(e),a===l?~a&&d[a].p(e,s):(n&&(p(),g(d[l],1,1,(()=>{d[l]=null})),v()),~a?(n=d[a],n?n.p(e,s):(n=d[a]=o[a](e),n.c()),$(n,1),n.m(t,null)):n=null)},i(e){c||($(n),c=!0)},o(e){g(n),c=!1},d(e){e&&i(t),~a&&d[a].d()}}}function re(e,t,a){let s=!0;const n=U(),l=_.owner,r=_.repo;let c=[];return E((async()=>{try{a(1,c=(await V(`closed-issues-${l}-${r}`,(()=>n.issues.listForRepo({owner:l,repo:r,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"})))).data)}catch(e){O(e)}a(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e)))),a(0,s=!1)})),[s,c]}class ce extends e{constructor(e){super(),t(this,e,re,le,a,{})}}function ie(e){let t,a=H(_["status-website"].introTitle)+"";return{c(){t=s("h1")},l(e){t=l(e,"H1",{}),r(t).forEach(i)},m(e,s){h(e,t,s),t.innerHTML=a},p:u,d(e){e&&i(t)}}}function oe(e){let t,a=H(_["status-website"].introMessage)+"";return{c(){t=s("p"),this.h()},l(e){t=l(e,"P",{class:!0}),r(t).forEach(i),this.h()},h(){o(t,"class","lead svelte-ngkazm")},m(e,s){h(e,t,s),t.innerHTML=a},p:u,d(e){e&&i(t)}}}function he(e){let t,a,n,c,d,u,p,v,E,w;document.title=t=e[0];let D=_["status-website"]&&function(e){let t,a,s=_["status-website"].introTitle&&ie(),n=_["status-website"].introMessage&&oe();return{c(){s&&s.c(),t=f(),n&&n.c(),a=y()},l(e){s&&s.l(e),t=m(e),n&&n.l(e),a=y()},m(e,l){s&&s.m(e,l),h(e,t,l),n&&n.m(e,l),h(e,a,l)},p(e,t){_["status-website"].introTitle&&s.p(e,t),_["status-website"].introMessage&&n.p(e,t)},d(e){s&&s.d(e),e&&i(t),n&&n.d(e),e&&i(a)}}}();return d=new z({}),p=new Z({}),E=new ce({}),{c(){a=f(),n=s("header"),D&&D.c(),c=f(),I(d.$$.fragment),u=f(),I(p.$$.fragment),v=f(),I(E.$$.fragment),this.h()},l(e){A('[data-svelte="svelte-1258swp"]',document.head).forEach(i),a=m(e),n=l(e,"HEADER",{class:!0});var t=r(n);D&&D.l(t),t.forEach(i),c=m(e),T(d.$$.fragment,e),u=m(e),T(p.$$.fragment,e),v=m(e),T(E.$$.fragment,e),this.h()},h(){o(n,"class","svelte-ngkazm")},m(e,t){h(e,a,t),h(e,n,t),D&&D.m(n,null),h(e,c,t),k(d,e,t),h(e,u,t),k(p,e,t),h(e,v,t),k(E,e,t),w=!0},p(e,[a]){(!w||1&a)&&t!==(t=e[0])&&(document.title=t),_["status-website"]&&D.p(e,a)},i(e){w||($(d.$$.fragment,e),$(p.$$.fragment,e),$(E.$$.fragment,e),w=!0)},o(e){g(d.$$.fragment,e),g(p.$$.fragment,e),g(E.$$.fragment,e),w=!1},d(e){e&&i(a),e&&i(n),D&&D.d(),e&&i(c),L(d,e),e&&i(u),L(p,e),e&&i(v),L(E,e)}}}function de(e,t,a){let s="Status";try{s=_["status-website"].name}catch(e){}return[s]}export default class extends e{constructor(e){super(),t(this,e,de,he,a,{})}}
