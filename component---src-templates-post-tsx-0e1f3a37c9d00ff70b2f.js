(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+kg1":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return v}));n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("HQhv");var r=n("q1tI"),a=n.n(r),i=n("LvDl"),o=n("Wbzz"),l=n("1Yd/"),u=n("4XLq"),c=(n("sC2a"),n("IP2g")),s=function(e){var t=e.items,n=e.currentHeaderUrl,i=Object(r.useMemo)((function(){return n?t.replace('"'+n+'"','"'+n+'" class="current"'):t}),[t,n]);return t?a.a.createElement("div",{className:"toc-wrap"},a.a.createElement("p",{className:"title"},a.a.createElement(c.a,{icon:"bookmark",style:{marginRight:"8px",opacity:".6"}}),"TABLE OF CONTENTS"),a.a.createElement("div",{className:"content-list",dangerouslySetInnerHTML:{__html:i}})):null},d=(n("Dq+y"),n("PZd/"),function(e){var t=e.repo,n=Object(r.createRef)();return Object(r.useLayoutEffect)((function(){var e=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,"issue-term":"pathname",label:"comment",theme:"github-light",crossOrigin:"anonymous",async:"true"};Object.entries(r).forEach((function(t){var n=t[0],r=t[1];e.setAttribute(n,r)})),n.current.appendChild(e)}),[t]),a.a.createElement("div",{ref:n})});function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t,n,c,m,v,p,g,h,b,y,E,k,w,N,S,P,O,R,x,I,L,U,j,A,H,M,T,C,F,D=e.data,q=e.pageContext,z=e.location,J=Object(r.useState)(void 0),K=J[0],Q=J[1],Z=q.previous,B=q.next,X=null===(t=D.markdownRemark)||void 0===t||null===(n=t.frontmatter)||void 0===n||null===(c=n.featuredImage)||void 0===c||null===(m=c.childImageSharp)||void 0===m||null===(v=m.original)||void 0===v?void 0:v.src,Y=function(){for(var e,t,n=window.pageYOffset,r=document.querySelectorAll(".anchor-header"),a=f(r);!(t=a()).done;){var i=t.value,o=i.getBoundingClientRect().top+n,l=i===r[r.length-1];if(n<o-100){e&&Q(e.split(z.origin)[1]),!e&&Q(void 0);break}l&&Q(i.href.split(z.origin)[1]),!l&&(e=i.href)}};return Object(r.useEffect)((function(){return document.addEventListener("scroll",Y,!1),function(){document.removeEventListener("scroll",Y,!1)}}),[]),a.a.createElement(u.a,{location:z},a.a.createElement(l.a,{title:(null===(p=D.markdownRemark)||void 0===p||null===(g=p.frontmatter)||void 0===g?void 0:g.title)||"",description:(null===(h=D.markdownRemark)||void 0===h?void 0:h.excerpt)||"",imageSrc:X||"",article:!0}),a.a.createElement("section",{className:"post-view"},a.a.createElement("div",{className:"featured-image",style:{backgroundImage:X?"url("+X+")":""}},a.a.createElement("div",{className:"post-info-wrap"},a.a.createElement("div",{className:"post-info container"},(null===(b=D.markdownRemark)||void 0===b||null===(y=b.frontmatter)||void 0===y?void 0:y.category)&&a.a.createElement("span",{className:"category"},null===(E=D.markdownRemark)||void 0===E||null===(k=E.frontmatter)||void 0===k?void 0:k.category),(null===(w=D.markdownRemark)||void 0===w||null===(N=w.frontmatter)||void 0===N?void 0:N.title)&&a.a.createElement("h1",{className:"title"},null===(S=D.markdownRemark)||void 0===S||null===(P=S.frontmatter)||void 0===P?void 0:P.title),a.a.createElement("span",{className:"meta-data"},"by ",a.a.createElement("span",{className:"writer"},null===(O=D.site)||void 0===O||null===(R=O.siteMetadata)||void 0===R?void 0:R.author)," ∙  "+(null===(x=D.markdownRemark)||void 0===x||null===(I=x.frontmatter)||void 0===I?void 0:I.date)),a.a.createElement("div",{className:"tags-wrap"},null===(L=D.markdownRemark)||void 0===L||null===(U=L.frontmatter)||void 0===U||null===(j=U.tags)||void 0===j?void 0:j.map((function(e,t){return a.a.createElement(o.Link,{to:"/tags/"+Object(i.kebabCase)(e||"")+"/",className:"tag",key:t},e)})))))),a.a.createElement("div",{className:"container"},a.a.createElement(s,{items:(null===(A=D.markdownRemark)||void 0===A?void 0:A.tableOfContents)||"",currentHeaderUrl:K}),a.a.createElement("article",null,a.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:(null===(H=D.markdownRemark)||void 0===H?void 0:H.html)||""}}),a.a.createElement("hr",{className:"end-line"}),a.a.createElement("div",{className:"navigation-wrap"},Z&&a.a.createElement("div",{className:"navigation previous"},a.a.createElement("p",null,"Previous"),a.a.createElement(o.Link,{to:(null==Z||null===(M=Z.fields)||void 0===M?void 0:M.slug)||"",rel:"prev"},"← ",null==Z||null===(T=Z.frontmatter)||void 0===T?void 0:T.title)),B&&a.a.createElement("div",{className:"navigation next"},a.a.createElement("p",null,"Next"),a.a.createElement(o.Link,{to:(null==B||null===(C=B.fields)||void 0===C?void 0:C.slug)||"",rel:"next"},null==B||null===(F=B.frontmatter)||void 0===F?void 0:F.title," →"))),a.a.createElement(d,{repo:"6unhkui/6unhkui.github.io"})))))};var v="480579285"},"1/Ks":function(e,t,n){"use strict";n("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},HQAx:function(e,t,n){"use strict";var r=n("P8UN"),a=n("ewoU"),i=n("DFzH"),o=n("kiRH"),l=n("nONw"),u=n("ytzU");r(r.P,"Array",{flatMap:function(e){var t,n,r=i(this);return l(e),t=o(r.length),n=u(r,0),a(n,r,r,t,0,1,e,arguments[1]),n}}),n("Dq1/")("flatMap")},I17o:function(e,t,n){"use strict";var r=n("P8UN"),a=n("pTxf"),i=n("CL53"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padEnd:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"PZd/":function(e,t,n){var r=n("P8UN"),a=n("ys0W")(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},"QzX/":function(e,t,n){"use strict";n("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,n){"use strict";var r=n("P8UN"),a=n("/+AL");r(r.P+r.F*!n("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return a(this,e,arguments.length,arguments[1],!0)}})},YuTi:function(e,t,n){n("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZiRl:function(e,t,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},ewoU:function(e,t,n){"use strict";var r=n("tuyV"),a=n("BjK0"),i=n("kiRH"),o=n("ot9L"),l=n("sOol")("isConcatSpreadable");e.exports=function e(t,n,u,c,s,d,f,m){for(var v,p,g=s,h=0,b=!!f&&o(f,m,3);h<c;){if(h in u){if(v=b?b(u[h],h,n):u[h],p=!1,a(v)&&(p=void 0!==(p=v[l])?!!p:r(v)),p&&d>0)g=e(t,n,v,i(v.length),g,d-1)-1;else{if(g>=9007199254740991)throw TypeError();t[g]=v}g++}h++}return g}},gd4K:function(e,t,n){"use strict";var r=n("1Llc"),a=n("ap2Z");e.exports=function(e){var t=String(a(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},lFjb:function(e,t,n){"use strict";var r=n("P8UN"),a=n("5SQf"),i=n("1Llc"),o=n("kiRH"),l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(u||!n("h/qr")(l)),"Array",{lastIndexOf:function(e){if(u)return l.apply(this,arguments)||0;var t=a(this),n=o(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},lizw:function(e,t,n){"use strict";var r=n("P8UN"),a=n("pTxf"),i=n("CL53"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},nMRu:function(e,t,n){"use strict";var r=n("P8UN"),a=n("DFzH"),i=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=a(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},pTxf:function(e,t,n){var r=n("kiRH"),a=n("gd4K"),i=n("ap2Z");e.exports=function(e,t,n,o){var l=String(i(e)),u=l.length,c=void 0===n?" ":String(n),s=r(t);if(s<=u||""==c)return l;var d=s-u,f=a.call(c,Math.ceil(d/c.length));return f.length>d&&(f=f.slice(0,d)),o?f+l:l+f}},ys0W:function(e,t,n){var r=n("QPJK"),a=n("2mBY"),i=n("5SQf"),o=n("BnbX").f;e.exports=function(e){return function(t){for(var n,l=i(t),u=a(l),c=u.length,s=0,d=[];c>s;)n=u[s++],r&&!o.call(l,n)||d.push(e?[n,l[n]]:l[n]);return d}}},zTTH:function(e,t,n){"use strict";var r=n("P8UN"),a=n("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-templates-post-tsx-0e1f3a37c9d00ff70b2f.js.map