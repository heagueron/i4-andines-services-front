(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{BNOC:function(t,e,n){"use strict";n.r(e),n.d(e,"scopeCss",function(){return W});var r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",s=new RegExp("(-shadowcsshost"+r,"gim"),o=new RegExp("(-shadowcsscontext"+r,"gim"),c=new RegExp("(-shadowcssslotted"+r,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,i=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,h=/:host/gim,l=/::slotted/gim,p=/:host-context/gim,f=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,g=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,m=/([{}])/g,w=function(t,e){var n=v(t),r=0;return n.escapedString.replace(g,function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=n.blocks[r++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},h=e(u);return""+t[1]+h.selector+t[3]+i+h.content+a})},v=function(t){for(var e=t.split(m),n=[],r=[],s=0,o=[],c=0;c<e.length;c++){var a=e[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(r.push(o.join("")),n.push("%BLOCK%"),o=[]),n.push(a)),"{"===a&&s++}return o.length>0&&(r.push(o.join("")),n.push("%BLOCK%")),{escapedString:n.join(""),blocks:r}},_=function(t,e,n){return t.replace(e,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var r=t[2].split(","),s=[],o=0;o<r.length;o++){var c=r[o].trim();if(!c)break;s.push(n("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]})},x=function(t,e,n){return t+e.replace("-shadowcsshost","")+n},b=function(t,e,n){return e.indexOf("-shadowcsshost")>-1?x(t,e,n):t+e+n+", "+e+" "+t+n},O=function(t,e,n,r,s){return w(t,function(t){var s=t.selector,o=t.content;return"@"!==t.selector[0]?s=function(e,n,r,s){return t.selector.split(",").map(function(t){return s&&t.indexOf("."+s)>-1?t.trim():function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(n).test(t)}(t)?function(t,e,n){for(var r,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e[0]})),o=function(t){var r=t.trim();if(!r)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)r=function(t,e,n){if(u.lastIndex=0,u.test(t)){var r="."+n;return t.replace(a,function(t,e){return e.replace(/([^:]*)(:*)(.*)/,function(t,e,n,s){return e+r+n+s})}).replace(u,r+" ")}return e+" "+t}(t,e,n);else{var o=t.replace(u,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(r=c[1]+s+c[2]+c[3])}}return r},c=function(t){var e=[],n=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,function(t,r){var s="__ph-"+n+"__";return e.push(r),n++,s})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,r,s){var o="__ph-"+n+"__";return e.push(s),n++,r+o}),placeholders:e}}(t),i="",h=0,l=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(r=l.exec(t));){var f=r[1],d=t.slice(h,r.index).trim();i+=((p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?o(d):d)+" "+f+" ",h=l.lastIndex}var g,m=t.substring(h);return i+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?o(m):m,g=c.placeholders,i.replace(/__ph-(\d+)__/g,function(t,e){return g[+e]})}(t,n,r).trim():t.trim()}).join(", ")}(0,e,n,r):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=O(t.content,e,n,r)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}})},W=function(t,e,n){var r=e+"-h",a=e+"-s",u=t.match(d)||[];t=t.replace(f,"");var g=[];if(n){var m=function(t){var e="/*!@___"+g.length+"___*/";return g.push({placeholder:e,comment:"/*!@"+t.selector+"*/"}),t.selector=e+t.selector,t};t=w(t,function(t){return"@"!==t.selector[0]?m(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,m),t):t})}var v=function(t,e,n,r,a){return t=function(t){return i.reduce(function(t,e){return t.replace(e," ")},t)}(t=function(t,e){return t.replace(c,function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(t[2]){var r=t[2].trim(),s=t[3],o="."+e+" > "+r+s;return o}return"-shadowcsshost-no-combinator"+t[3]})}(t=function(t){return _(t,o,b)}(t=function(t){return _(t,s,x)}(t=t.replace(p,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(l,"-shadowcssslotted"))),r)),e&&(t=O(t,e,n,r)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+n)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()}(t,e,r,a);return t=[v].concat(u).join("\n"),n&&g.forEach(function(e){t=t.replace(e.placeholder,e.comment)}),t}}}]);