(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1/Ks":function(t,e,n){"use strict";n("EU/P")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},"6qSS":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l})),n.d(e,"pageQuery",(function(){return d}));n("E5k/");var r=n("q1tI"),o=n.n(r),i=n("LvDl"),a=n("Wbzz"),u=n("vrFN"),c=n("Bl7J");function s(t){var e=t.items;t.currentHeaderUrl;return e?o.a.createElement("div",{className:"toc-wrap"},o.a.createElement("div",null,o.a.createElement("h4",null,"TABLE OF CONTENTS"),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))):null}var f=n("7evw");function l(t){var e=t.data,n=t.pageContext,r=t.location,l=e.markdownRemark,d=n.previous,p=n.next,m=e.site.siteMetadata.author,y=l.frontmatter,h=y.menu,b=y.category,g=y.title,v=y.date,w=y.tags,S=y.featuredImage,E=S?S.childImageSharp.original:null,O={shortname:"i-log",config:{identifier:l.fields.slug,title:g}};return o.a.createElement(c.a,{location:r,menu:h},o.a.createElement(u.a,{title:l.frontmatter.title,description:l.excerpt,image:E}),o.a.createElement("section",{className:"post-view"},o.a.createElement("div",{className:"featured-image",style:{backgroundImage:E?"url("+E.src+")":""}},o.a.createElement("div",{className:"post-info-wrap"},o.a.createElement("div",{className:"post-info container"},o.a.createElement("span",{className:"category"},b),o.a.createElement("h1",{className:"title"},g),o.a.createElement("span",{className:"meta-data"},"by ",o.a.createElement("span",{className:"writer"},m)," ∙ "+v),o.a.createElement("div",{className:"tags-wrap"},w.map((function(t,e){return o.a.createElement("span",{className:"tag",key:e},o.a.createElement(a.Link,{to:"/tags/"+Object(i.kebabCase)(t)+"/"},"# "+t))})))))),o.a.createElement("div",{className:"container"},o.a.createElement(s,{items:l.tableOfContents}),o.a.createElement("article",null,o.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:l.html}})),o.a.createElement("hr",null),o.a.createElement("div",{className:"navigation-wrap"},d&&o.a.createElement("div",{className:"navigation previous"},o.a.createElement("p",null,"Previous"),o.a.createElement(a.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),p&&o.a.createElement("div",{className:"navigation next"},o.a.createElement("p",null,"Next"),o.a.createElement(a.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))),o.a.createElement(f.DiscussionEmbed,Object.assign({},O,{style:{marginTop:"4rem"}})))))}var d="1681757429"},"7evw":function(t,e,n){"use strict";n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV"),a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=a},"Bp/N":function(t,e,n){"use strict";n("YBKJ"),n("q8oJ"),n("C9fy"),n("8npG"),n("nWfQ"),n("LagC"),n("pS08"),n("m210"),n("4DPX"),n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,o,i=f(a);function a(){return u(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(e.prototype,n),o&&c(e,o),a}(r.default.Component);e.CommentEmbed=p,p.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},p.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HQAx:function(t,e,n){"use strict";var r=n("P8UN"),o=n("ewoU"),i=n("DFzH"),a=n("kiRH"),u=n("nONw"),c=n("ytzU");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return u(t),e=a(r.length),n=c(r,0),o(n,r,r,e,0,1,t,arguments[1]),n}}),n("Dq1/")("flatMap")},HhXV:function(t,e,n){"use strict";n("JHok"),n("q8oJ"),n("C9fy"),n("8npG"),n("nWfQ"),n("LagC"),n("pS08"),n("E5k/"),n("m210"),n("4DPX"),n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=n("ZMnY");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,o,a=d(u);function u(){return s(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),y.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&f(e.prototype,n),o&&f(e,o),u}(r.default.Component);e.DiscussionEmbed=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},I17o:function(t,e,n){"use strict";var r=n("P8UN"),o=n("pTxf"),i=n("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(t,e,n){"use strict";n("EU/P")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},Rw9D:function(t,e,n){"use strict";var r=n("P8UN"),o=n("/+AL");r(r.P+r.F*!n("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(t){return o(this,t,arguments.length,arguments[1],!0)}})},UZsz:function(t,e,n){"use strict";n("q8oJ"),n("C9fy"),n("8npG"),n("nWfQ"),n("LagC"),n("pS08"),n("m210"),n("4DPX"),n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=n("ZMnY");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,o,a=l(u);function u(){return c(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(e.prototype,n),o&&s(e,o),u}(r.default.Component);e.CommentCount=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},YuTi:function(t,e,n){n("R48M"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZMnY:function(t,e,n){"use strict";n("Ggvi"),n("Dq+y"),n("ToIb"),n("wZFJ"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("C9fy"),n("8npG"),n("rzGZ"),n("MIFh"),n("m210"),n("4DPX"),n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||t.apply(o,i)},u=n&&!r;window.clearTimeout(r),r=setTimeout(a,e),u&&t.apply(o,i)}},e.isReactElement=a,e.shallowComparison=function(t,e){var n,r=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}(new Set(Object.keys(t),Object.keys(e)));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(t[o]!==e[o]&&!a(t[o]))return!0}}catch(u){r.e(u)}finally{r.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},ZiRl:function(t,e,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},ewoU:function(t,e,n){"use strict";var r=n("tuyV"),o=n("BjK0"),i=n("kiRH"),a=n("ot9L"),u=n("sOol")("isConcatSpreadable");t.exports=function t(e,n,c,s,f,l,d,p){for(var m,y,h=f,b=0,g=!!d&&a(d,p,3);b<s;){if(b in c){if(m=g?g(c[b],b,n):c[b],y=!1,o(m)&&(y=void 0!==(y=m[u])?!!y:r(m)),y&&l>0)h=t(e,n,m,i(m.length),h,l-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=m}h++}b++}return h}},gd4K:function(t,e,n){"use strict";var r=n("1Llc"),o=n("ap2Z");t.exports=function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},lFjb:function(t,e,n){"use strict";var r=n("P8UN"),o=n("5SQf"),i=n("1Llc"),a=n("kiRH"),u=[].lastIndexOf,c=!!u&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("h/qr")(u)),"Array",{lastIndexOf:function(t){if(c)return u.apply(this,arguments)||0;var e=o(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},lizw:function(t,e,n){"use strict";var r=n("P8UN"),o=n("pTxf"),i=n("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},nMRu:function(t,e,n){"use strict";var r=n("P8UN"),o=n("DFzH"),i=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=o(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},nWfQ:function(t,e,n){var r=n("P8UN"),o=n("nsRs"),i=n("nONw"),a=n("1a8y"),u=n("BjK0"),c=n("96qb"),s=n("16Xr"),f=(n("emib").Reflect||{}).construct,l=c((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),d=!c((function(){f((function(){}))}));r(r.S+r.F*(l||d),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,p=o(u(c)?c:Object.prototype),m=Function.apply.call(t,p,e);return u(m)?m:p}})},pTxf:function(t,e,n){var r=n("kiRH"),o=n("gd4K"),i=n("ap2Z");t.exports=function(t,e,n,a){var u=String(i(t)),c=u.length,s=void 0===n?" ":String(n),f=r(e);if(f<=c||""==s)return u;var l=f-c,d=o.call(s,Math.ceil(l/s.length));return d.length>l&&(d=d.slice(0,l)),a?d+u:u+d}},zTTH:function(t,e,n){"use strict";var r=n("P8UN"),o=n("Wadk")(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-templates-post-js-6088d43cab8713e0a8d1.js.map