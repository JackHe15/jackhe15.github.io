webpackJsonp([0xc298264b6a1e],{790:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We have a quick update following the release of 0.14.1 last week. It turns out we broke a couple things in the development build of React when using Internet Explorer. Luckily it was only the development build, so your production applications were unaffected. This release is mostly to address those issues. There is one notable change if consuming React from npm. For the <code class="gatsby-code-text">react-dom</code> package, we moved <code class="gatsby-code-text">react</code> from a regular dependency to a peer dependency. This will impact very few people as these two are typically installed together at the top level, but it will fix some issues with dependencies of installed components also using <code class="gatsby-code-text">react</code> as a peer dependency.</p>\n<p>The release is now available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.14.2.js">https://fb.me/react-0.14.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.14.2.min.js">https://fb.me/react-0.14.2.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.14.2.js">https://fb.me/react-with-addons-0.14.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.14.2.min.js">https://fb.me/react-with-addons-0.14.2.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-0.14.2.js">https://fb.me/react-dom-0.14.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-0.14.2.min.js">https://fb.me/react-dom-0.14.2.min.js</a>  </li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.14.2</code> of the <code class="gatsby-code-text">react</code>, <code class="gatsby-code-text">react-dom</code>, and addons packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Fixed bug with development build preventing events from firing in some versions of Internet Explorer &#x26; Edge</li>\n<li>Fixed bug with development build when using es5-sham in older versions of Internet Explorer</li>\n<li>Added support for <code class="gatsby-code-text">integrity</code> attribute</li>\n<li>Fixed bug resulting in <code class="gatsby-code-text">children</code> prop being coerced to a string for custom elements, which was not the desired behavior.</li>\n<li>Moved <code class="gatsby-code-text">react</code> from <code class="gatsby-code-text">dependencies</code> to <code class="gatsby-code-text">peerDependencies</code> to match expectations and align with <code class="gatsby-code-text">react-addons-*</code> packages</li>\n</ul>',excerpt:"We have a quick update following the release of 0.14.1 last week. It turns out we broke a couple things in the development build of React when using Internet Explorer. Luckily it was only the development build, so your production applications were unaffected. This release is mostly to address those issues. There is one notable change if consuming React from npm. For the   package, we moved   from a regular dependency to a peer dependency. This will impact very few people as these two are…",frontmatter:{title:"React v0.14.2",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"November 02, 2015",path:"blog/2015-11-02-react-v0.14.2.md",slug:"/blog/2015/11/02/react-v0.14.2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2015/11/02/react-v0.14.2.html"}}}});
//# sourceMappingURL=path---blog-2015-11-02-react-v-0-14-2-html-b965a40fab6d527d5bfa.js.map