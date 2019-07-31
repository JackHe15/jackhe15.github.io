webpackJsonp([21239189527311],{739:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We recently spoke at one of f8’s breakout session about Flux, a data flow architecture that works well with React.  Check out the video here:</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <figure><iframe src="//www.youtube-nocookie.com/embed/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&amp;start=621" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe></figure>\n          </div>\n          </div>\n<p>To summarize, Flux works well for us because the single directional data flow makes it easy to understand and modify an application as it becomes more complicated. We found that two-way data bindings lead to cascading updates, where changing one data model led to another data model updating, making it very difficult to predict what would change as the result of a single user interaction.</p>\n<p>In Flux, the Dispatcher is a singleton that directs the flow of data and ensures that updates do not cascade. As an application grows, the Dispatcher becomes more vital, as it can also manage dependencies between stores by invoking the registered callbacks in a specific order.</p>\n<p>When a user interacts with a React view, the view sends an action (usually represented as a JavaScript object with some fields) through the dispatcher, which notifies the various stores that hold the application’s data and business logic. When the stores change state, they notify the views that something has updated. This works especially well with React’s declarative model, which allows the stores to send updates without specifying how to transition views between states.</p>\n<p>Flux is more of a pattern than a formal framework, so you can start using Flux immediately without a lot of new code. An <a href="https://github.com/facebook/flux/tree/master/examples/flux-todomvc">example of this architecture</a> is available, along with more <a href="https://facebook.github.io/flux/docs/overview.html">detailed documentation</a> and a <a href="https://facebook.github.io/flux/docs/todo-list.html">tutorial</a>. Look for more examples to come in the future.</p>',excerpt:"We recently spoke at one of f8’s breakout session about Flux, a data flow architecture that works well with React.  Check out the video here: To summarize, Flux works well for us because the single directional data flow makes it easy to understand and modify an application as it becomes more complicated. We found that two-way data bindings lead to cascading updates, where changing one data model led to another data model updating, making it very difficult to predict what would change as the…",frontmatter:{title:"Flux: An Application Architecture for React",next:null,prev:null,author:[{frontmatter:{name:"Bill Fisher",url:"https://twitter.com/fisherwebdev"}},{frontmatter:{name:"Jing Chen",url:"https://twitter.com/jingc"}}]},fields:{date:"May 06, 2014",path:"blog/2014-05-06-flux.md",slug:"/blog/2014/05/06/flux.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2014/05/06/flux.html"}}}});
//# sourceMappingURL=path---blog-2014-05-06-flux-html-f938fc53d30218f25624.js.map