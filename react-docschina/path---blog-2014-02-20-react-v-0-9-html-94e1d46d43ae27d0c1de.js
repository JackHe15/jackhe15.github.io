webpackJsonp([0x9644e161a0f8],{732:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I’m excited to announce that today we’re releasing React v0.9, which incorporates many bug fixes and several new features since the last release. This release contains almost four months of work, including over 800 commits from over 70 committers!</p>\n<p>Thanks to everyone who tested the release candidate; we were able to find and fix an error in the event handling code, we upgraded envify to make running browserify on React faster, and we added support for five new attributes.</p>\n<p>As always, the release is available for download from the CDN:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.9.0.js">https://fb.me/react-0.9.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.9.0.min.js">https://fb.me/react-0.9.0.min.js</a></li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.9.0.js">https://fb.me/react-with-addons-0.9.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.9.0.min.js">https://fb.me/react-with-addons-0.9.0.min.js</a></li>\n<li><strong>In-Browser JSX Transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.9.0.js">https://fb.me/JSXTransformer-0.9.0.js</a></li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.9.0</code> of the <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-tools</code> packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<h2 id="whats-new"><a href="#whats-new" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s New?</h2>\n<p>This version includes better support for normalizing event properties across all supported browsers so that you need to worry even less about cross-browser differences. We’ve also made many improvements to error messages and have refactored the core to never rethrow errors, so stack traces are more accurate and Chrome’s purple break-on-error stop sign now works properly.</p>\n<p>We’ve also added to the add-ons build <a href="/docs/test-utils.html">React.addons.TestUtils</a>, a set of new utilities to help you write unit tests for React components. You can now simulate events on your components, and several helpers are provided to help make assertions about the rendered DOM tree.</p>\n<p>We’ve also made several other improvements and a few breaking changes; the full changelog is provided below.</p>\n<h2 id="jsx-whitespace"><a href="#jsx-whitespace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Whitespace</h2>\n<p>In addition to the changes to React core listed below, we’ve made a small change to the way JSX interprets whitespace to make things more consistent. With this release, space between two components on the same line will be preserved, while a newline separating a text node from a tag will be eliminated in the output. Consider the code:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  Monkeys:\n  {listOfMonkeys} {submitButton}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>In v0.8 and below, it was transformed to the following:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span>DOM<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token string">" Monkeys: "</span><span class="token punctuation">,</span>\n  listOfMonkeys<span class="token punctuation">,</span> submitButton\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>In v0.9, it will be transformed to this JS instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span>DOM<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">  <span class="token string">"Monkeys:"</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">  listOfMonkeys<span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> submitButton\n</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>We believe this new behavior is more helpful and eliminates cases where unwanted whitespace was previously added.</p>\n<p>In cases where you want to preserve the space adjacent to a newline, you can write <code class="gatsby-code-text">{&#39;Monkeys: &#39;}</code> or <code class="gatsby-code-text">Monkeys:{&#39; &#39;}</code> in your JSX source. We’ve included a script to do an automated codemod of your JSX source tree that preserves the old whitespace behavior by adding and removing spaces appropriately. You can <a href="https://github.com/facebook/react/blob/master/npm-jsx_whitespace_transformer/README.md">install jsx_whitespace_transformer from npm</a> and run it over your source tree to modify files in place. The transformed JSX files will preserve your code’s existing whitespace behavior.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li>The lifecycle methods <code class="gatsby-code-text">componentDidMount</code> and <code class="gatsby-code-text">componentDidUpdate</code> no longer receive the root node as a parameter; use <code class="gatsby-code-text">this.getDOMNode()</code> instead</li>\n<li>Whenever a prop is equal to <code class="gatsby-code-text">undefined</code>, the default value returned by <code class="gatsby-code-text">getDefaultProps</code> will now be used instead</li>\n<li><code class="gatsby-code-text">React.unmountAndReleaseReactRootNode</code> was previously deprecated and has now been removed</li>\n<li><code class="gatsby-code-text">React.renderComponentToString</code> is now synchronous and returns the generated HTML string</li>\n<li>Full-page rendering (that is, rendering the <code class="gatsby-code-text">&lt;html&gt;</code> tag using React) is now supported only when starting with server-rendered markup</li>\n<li>On mouse wheel events, <code class="gatsby-code-text">deltaY</code> is no longer negated</li>\n<li>When prop types validation fails, a warning is logged instead of an error thrown (with the production build of React, type checks are now skipped for performance)</li>\n<li>On <code class="gatsby-code-text">input</code>, <code class="gatsby-code-text">select</code>, and <code class="gatsby-code-text">textarea</code> elements, <code class="gatsby-code-text">.getValue()</code> is no longer supported; use <code class="gatsby-code-text">.getDOMNode().value</code> instead</li>\n<li><code class="gatsby-code-text">this.context</code> on components is now reserved for internal use by React</li>\n</ul>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>React now never rethrows errors, so stack traces are more accurate and Chrome’s purple break-on-error stop sign now works properly</li>\n<li>Added support for SVG tags <code class="gatsby-code-text">defs</code>, <code class="gatsby-code-text">linearGradient</code>, <code class="gatsby-code-text">polygon</code>, <code class="gatsby-code-text">radialGradient</code>, <code class="gatsby-code-text">stop</code></li>\n<li>\n<p>Added support for more attributes:</p>\n<ul>\n<li><code class="gatsby-code-text">crossOrigin</code> for CORS requests</li>\n<li><code class="gatsby-code-text">download</code> and <code class="gatsby-code-text">hrefLang</code> for <code class="gatsby-code-text">&lt;a&gt;</code> tags</li>\n<li><code class="gatsby-code-text">mediaGroup</code> and <code class="gatsby-code-text">muted</code> for <code class="gatsby-code-text">&lt;audio&gt;</code> and <code class="gatsby-code-text">&lt;video&gt;</code> tags</li>\n<li><code class="gatsby-code-text">noValidate</code> and <code class="gatsby-code-text">formNoValidate</code> for forms</li>\n<li><code class="gatsby-code-text">property</code> for Open Graph <code class="gatsby-code-text">&lt;meta&gt;</code> tags</li>\n<li><code class="gatsby-code-text">sandbox</code>, <code class="gatsby-code-text">seamless</code>, and <code class="gatsby-code-text">srcDoc</code> for <code class="gatsby-code-text">&lt;iframe&gt;</code> tags</li>\n<li><code class="gatsby-code-text">scope</code> for screen readers</li>\n<li><code class="gatsby-code-text">span</code> for <code class="gatsby-code-text">&lt;colgroup&gt;</code> tags</li>\n</ul>\n</li>\n<li>Added support for defining <code class="gatsby-code-text">propTypes</code> in mixins</li>\n<li>Added <code class="gatsby-code-text">any</code>, <code class="gatsby-code-text">arrayOf</code>, <code class="gatsby-code-text">component</code>, <code class="gatsby-code-text">oneOfType</code>, <code class="gatsby-code-text">renderable</code>, <code class="gatsby-code-text">shape</code> to <code class="gatsby-code-text">React.PropTypes</code></li>\n<li>Added support for <code class="gatsby-code-text">statics</code> on component spec for static component methods</li>\n<li>On all events, <code class="gatsby-code-text">.currentTarget</code> is now properly set</li>\n<li>On keyboard events, <code class="gatsby-code-text">.key</code> is now polyfilled in all browsers for special (non-printable) keys</li>\n<li>On clipboard events, <code class="gatsby-code-text">.clipboardData</code> is now polyfilled in IE</li>\n<li>On drag events, <code class="gatsby-code-text">.dataTransfer</code> is now present</li>\n<li>Added support for <code class="gatsby-code-text">onMouseOver</code> and <code class="gatsby-code-text">onMouseOut</code> in addition to the existing <code class="gatsby-code-text">onMouseEnter</code> and <code class="gatsby-code-text">onMouseLeave</code> events</li>\n<li>Added support for <code class="gatsby-code-text">onLoad</code> and <code class="gatsby-code-text">onError</code> on <code class="gatsby-code-text">&lt;img&gt;</code> elements</li>\n<li>Added support for <code class="gatsby-code-text">onReset</code> on <code class="gatsby-code-text">&lt;form&gt;</code> elements</li>\n<li>The <code class="gatsby-code-text">autoFocus</code> attribute is now polyfilled consistently on <code class="gatsby-code-text">input</code>, <code class="gatsby-code-text">select</code>, and <code class="gatsby-code-text">textarea</code></li>\n</ul>\n<h4 id="bug-fixes"><a href="#bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>React no longer adds an <code class="gatsby-code-text">__owner__</code> property to each component’s <code class="gatsby-code-text">props</code> object; passed-in props are now never mutated</li>\n<li>When nesting top-level components (e.g., calling <code class="gatsby-code-text">React.renderComponent</code> within <code class="gatsby-code-text">componentDidMount</code>), events now properly bubble to the parent component</li>\n<li>Fixed a case where nesting top-level components would throw an error when updating</li>\n<li>Passing an invalid or misspelled propTypes type now throws an error</li>\n<li>On mouse enter/leave events, <code class="gatsby-code-text">.target</code>, <code class="gatsby-code-text">.relatedTarget</code>, and <code class="gatsby-code-text">.type</code> are now set properly</li>\n<li>On composition events, <code class="gatsby-code-text">.data</code> is now properly normalized in IE9 and IE10</li>\n<li>CSS property values no longer have <code class="gatsby-code-text">px</code> appended for the unitless properties <code class="gatsby-code-text">columnCount</code>, <code class="gatsby-code-text">flex</code>, <code class="gatsby-code-text">flexGrow</code>, <code class="gatsby-code-text">flexShrink</code>, <code class="gatsby-code-text">lineClamp</code>, <code class="gatsby-code-text">order</code>, <code class="gatsby-code-text">widows</code></li>\n<li>Fixed a memory leak when unmounting children with a <code class="gatsby-code-text">componentWillUnmount</code> handler</li>\n<li>Fixed a memory leak when <code class="gatsby-code-text">renderComponentToString</code> would store event handlers</li>\n<li>Fixed an error that could be thrown when removing form elements during a click handler</li>\n<li>Boolean attributes such as <code class="gatsby-code-text">disabled</code> are rendered without a value (previously <code class="gatsby-code-text">disabled=&quot;true&quot;</code>, now simply <code class="gatsby-code-text">disabled</code>)</li>\n<li><code class="gatsby-code-text">key</code> values containing <code class="gatsby-code-text">.</code> are now supported</li>\n<li>Shortened <code class="gatsby-code-text">data-reactid</code> values for performance</li>\n<li>Components now always remount when the <code class="gatsby-code-text">key</code> property changes</li>\n<li>Event handlers are attached to <code class="gatsby-code-text">document</code> only when necessary, improving performance in some cases</li>\n<li>Events no longer use <code class="gatsby-code-text">.returnValue</code> in modern browsers, eliminating a warning in Chrome</li>\n<li><code class="gatsby-code-text">scrollLeft</code> and <code class="gatsby-code-text">scrollTop</code> are no longer accessed on document.body, eliminating a warning in Chrome</li>\n<li>General performance fixes, memory optimizations, improvements to warnings and error messages</li>\n</ul>\n<h3 id="react-with-addons"><a href="#react-with-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React with Addons</h3>\n<ul>\n<li><code class="gatsby-code-text">React.addons.TestUtils</code> was added to help write unit tests</li>\n<li><code class="gatsby-code-text">React.addons.TransitionGroup</code> was renamed to <code class="gatsby-code-text">React.addons.CSSTransitionGroup</code></li>\n<li><code class="gatsby-code-text">React.addons.TransitionGroup</code> was added as a more general animation wrapper</li>\n<li><code class="gatsby-code-text">React.addons.cloneWithProps</code> was added for cloning components and modifying their props</li>\n<li>Bug fix for adding back nodes during an exit transition for CSSTransitionGroup</li>\n<li>Bug fix for changing <code class="gatsby-code-text">transitionLeave</code> in CSSTransitionGroup</li>\n<li>Performance optimizations for CSSTransitionGroup</li>\n<li>On checkbox <code class="gatsby-code-text">&lt;input&gt;</code> elements, <code class="gatsby-code-text">checkedLink</code> is now supported for two-way binding</li>\n</ul>\n<h3 id="jsx-compiler-and-react-tools-package"><a href="#jsx-compiler-and-react-tools-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Compiler and react-tools Package</h3>\n<ul>\n<li>Whitespace normalization has changed; now space between two tags on the same line will be preserved, while newlines between two tags will be removed</li>\n<li>The <code class="gatsby-code-text">react-tools</code> npm package no longer includes the React core libraries; use the <code class="gatsby-code-text">react</code> package instead.</li>\n<li><code class="gatsby-code-text">displayName</code> is now added in more cases, improving error messages and names in the React Dev Tools</li>\n<li>Fixed an issue where an invalid token error was thrown after a JSX closing tag</li>\n<li><code class="gatsby-code-text">JSXTransformer</code> now uses source maps automatically in modern browsers</li>\n<li><code class="gatsby-code-text">JSXTransformer</code> error messages now include the filename and problematic line contents when a file fails to parse</li>\n</ul>',excerpt:"I’m excited to announce that today we’re releasing React v0.9, which incorporates many bug fixes and several new features since the last release. This release contains almost four months of work, including over 800 commits from over 70 committers! Thanks to everyone who tested the release candidate; we were able to find and fix an error in the event handling code, we upgraded envify to make running browserify on React faster, and we added support for five new attributes. As always, the release…",frontmatter:{title:"React v0.9",next:null,prev:null,author:[{frontmatter:{name:"Sophie Alpert",url:"https://sophiebits.com/"}}]},fields:{date:"February 20, 2014",path:"blog/2014-02-20-react-v0.9.md",slug:"/blog/2014/02/20/react-v0.9.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2014/02/20/react-v0.9.html"}}}});
//# sourceMappingURL=path---blog-2014-02-20-react-v-0-9-html-94e1d46d43ae27d0c1de.js.map