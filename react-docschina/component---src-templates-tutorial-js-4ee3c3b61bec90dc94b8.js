(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return l});var a=n(214),r=(n(0),n(204)),i=n(226),c=n(220),l="128216468";t.default=function(t){var n=t.data,l=t.location;return e.createElement(r.a,{location:l},e.createElement(a.a,{enableScrollSync:!0,createLink:i.d,location:l,markdownRemark:n.markdownRemark,sectionList:c.c,titlePostfix:" – React"}))}}.call(this,n(58))},207:function(e,t,n){var a=n(31).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(19)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},211:function(e,t,n){"use strict";(function(e){n(83),n(0);var a=function(t,n){return t.push(e.createElement("span",{key:t.length+"-"+n},n))};t.a=function(e,t){if(e.length<=1)return e.map(t);var n=[];return e.forEach(function(r,i){i===e.length-1?(a(n,2===e.length?" and ":", and "),n.push(t(r,i))):i>0?(a(n,", "),n.push(t(r,i))):n.push(t(r,i))}),n}}).call(this,n(58))},212:function(e,t,n){"use strict";n(28);var a=n(200);t.a=function(e){return null==e?null:a.b+"/"+e.replace(/^\//,"")}},214:function(e,t,n){"use strict";var a=n(215);t.a=a.a},215:function(e,t,n){"use strict";(function(e){n(207),n(216),n(84),n(28);var a=n(199),r=n(206),i=n(223),c=n(217),l=(n(0),n(224)),o=n(201),s=n(225),u=n(211),d=n(40),m=n(212),f=function(e,t){if(!t)return null;var n=e.map(function(e){return e.items}),a=[].concat.apply([],n),r=t.replace(".html","");return a.find(function(e){return e.id===r})};t.a=function(t){var n=t.authors,h=void 0===n?[]:n,p=t.createLink,g=t.date,v=t.enableScrollSync,E=t.ogDescription,b=t.location,y=t.markdownRemark,k=t.sectionList,w=t.titlePostfix,S=void 0===w?"":w,x=h.length>0,L=y.frontmatter.title||"",R=f(k,y.frontmatter.prev),T=f(k,y.frontmatter.next);return e.createElement(r.a,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},e.createElement(o.a,{ogDescription:E,canonicalUrl:Object(m.a)(y.fields.slug),title:""+L+S}),e.createElement("div",{css:{flex:"1 0 auto"}},e.createElement(a.a,null,e.createElement("div",{css:d.d.articleLayout.container},e.createElement(r.a,{type:"article",direction:"column",grow:"1",halign:"stretch"},e.createElement(i.a,{title:L}),(g||x)&&e.createElement("div",{css:{marginTop:15}},g," ",x&&e.createElement("span",null,"by"," ",Object(u.a)(h,function(t){return e.createElement("a",{css:d.d.link,href:t.frontmatter.url,key:t.frontmatter.name},t.frontmatter.name)}))),e.createElement("div",{css:d.d.articleLayout.content},e.createElement("div",{css:[d.d.markdown],dangerouslySetInnerHTML:{__html:y.html}}),y.fields.path&&e.createElement("div",{css:{marginTop:80}},e.createElement("a",{css:d.d.articleLayout.editLink,href:"https://github.com/reactjs/zh-hans.reactjs.org/tree/master/"+y.fields.path},"编辑此页面")))),e.createElement("div",{css:d.d.articleLayout.sidebar},e.createElement(l.a,{enableScrollSync:v,createLink:p,defaultActiveSection:Object(s.a)(b.pathname,k),location:b,sectionList:k}))))),(T||R)&&e.createElement(c.a,{location:b,next:T,prev:R}))}}).call(this,n(58))},216:function(e,t,n){"use strict";n(210)("link",function(e){return function(t){return e(this,"a","href",t)}})},217:function(e,t,n){"use strict";var a=n(218);t.a=a.a},218:function(e,t,n){"use strict";(function(e){n(213),n(29),n(28);var a=n(199),r=n(206),i=n(41),c=n(2),l=n.n(c),o=(n(0),n(40)),s=function(t){var n,i=t.next,c=t.prev,l=t.location;return e.createElement("div",{css:{background:o.a.dark,color:o.a.white,paddingTop:50,paddingBottom:50}},e.createElement(a.a,null,e.createElement(r.a,{type:"ul",halign:"space-between",css:(n={},n[o.c.between("small","medium")]={paddingRight:240},n[o.c.between("large","largerSidebar")]={paddingRight:280},n[o.c.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},n)},e.createElement(r.a,{basis:"50%",type:"li"},c&&e.createElement("div",null,e.createElement(d,null,"上一篇"),e.createElement("div",{css:{paddingTop:10}},e.createElement(u,{location:l,to:c.id+".html"},c.title)))),i&&e.createElement(r.a,{halign:"flex-end",basis:"50%",type:"li",css:{textAlign:"right"}},e.createElement("div",null,e.createElement(d,null,"下一篇"),e.createElement("div",{css:{paddingTop:10}},e.createElement(u,{location:l,to:i.id+".html"},i.title)))))))};s.propTypes={next:l.a.shape({id:l.a.string.isRequired,title:l.a.string.isRequired}),prev:l.a.shape({id:l.a.string.isRequired,title:l.a.string.isRequired})},t.a=s;var u=function(t){var n,a=t.children,r=t.to,c=t.location,l=c&&c.pathname.replace(/\/[^\/]+\.html/,"/"+r)||r;return e.createElement(i.Link,{css:(n={display:"inline",borderColor:o.a.subtle,transition:"border-color 0.2s ease",fontSize:30,borderBottomWidth:1,borderBottomStyle:"solid"},n[o.c.lessThan("large")]={fontSize:24},n[o.c.size("xsmall")]={fontSize:16},n[":hover"]={borderColor:o.a.white},n),to:l},a)},d=function(t){var n=t.children;return e.createElement("div",{css:Object.assign({color:o.a.brand},o.b.small)},n)}}).call(this,n(58))}}]);
//# sourceMappingURL=component---src-templates-tutorial-js-4ee3c3b61bec90dc94b8.js.map