webpackJsonp([0xa9841f2c418b],{707:function(n,a){n.exports={data:{markdownRemark:{html:'<p>React v0.4 is very close to completion. As we finish it off, we’d like to share with you some of the major changes we’ve made since v0.3. This is the first of several posts we’ll be making over the next week.</p>\n<h2 id="what-is-reactautobind"><a href="#what-is-reactautobind" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is React.autoBind?</h2>\n<p>If you take a look at most of our current examples, you’ll see us using <code class="gatsby-code-text">React.autoBind</code> for event handlers. This is used in place of <code class="gatsby-code-text">Function.prototype.bind</code>. Remember that in JS, <a href="https://bonsaiden.github.io/JavaScript-Garden/#function.this">function calls are late-bound</a>. That means that if you simply pass a function around, the <code class="gatsby-code-text">this</code> used inside won’t necessarily be the <code class="gatsby-code-text">this</code> you expect. <code class="gatsby-code-text">Function.prototype.bind</code> creates a new, properly bound, function so that when called, <code class="gatsby-code-text">this</code> is exactly what you expect it to be.</p>\n<p>Before we launched React, we would write this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  onClick<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* do something with this */</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We wrote <code class="gatsby-code-text">React.autoBind</code> as a way to cache the function creation and save on memory usage. Since <code class="gatsby-code-text">render</code> can get called multiple times, if you used <code class="gatsby-code-text">this.onClick.bind(this)</code> you would actually create a new function on each pass. With React v0.3 you were able to write this instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  onClick<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token function">autoBind</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* do something with this */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</span>  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="whats-changing-in-v04"><a href="#whats-changing-in-v04" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s Changing in v0.4?</h2>\n<p>After using <code class="gatsby-code-text">React.autoBind</code> for a few weeks, we realized that there were very few times that we didn’t want that behavior. So we made it the default! Now all methods defined within <code class="gatsby-code-text">React.createClass</code> will already be bound to the correct instance.</p>\n<p>Starting with v0.4 you can just write this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  onClick<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* do something with this */</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span>  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>For v0.4 we will simply be making <code class="gatsby-code-text">React.autoBind</code> a no-op — it will just return the function you pass to it. Most likely you won’t have to change your code to account for this change, though we encourage you to update. We’ll publish a migration guide documenting this and other changes that come along with React v0.4.</p>',excerpt:"React v0.4 is very close to completion. As we finish it off, we’d like to share with you some of the major changes we’ve made since v0.3. This is the first of several posts we’ll be making over the next week. What is React.autoBind? If you take a look at most of our current examples, you’ll see us using   for event handlers. This is used in place of  . Remember that in JS,  function calls are late-bound . That means that if you simply pass a function around, the   used inside won’t necessarily…",frontmatter:{title:"New in React v0.4: Autobind by Default",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"July 02, 2013",path:"blog/2013-07-02-react-v0-4-autobind-by-default.md",slug:"/blog/2013/07/02/react-v0-4-autobind-by-default.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2013/07/02/react-v0-4-autobind-by-default.html"}}}});
//# sourceMappingURL=path---blog-2013-07-02-react-v-0-4-autobind-by-default-html-2f429b056fa2f51c708b.js.map