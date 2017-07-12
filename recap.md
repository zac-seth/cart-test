# Recap

What went well?

* Generally, developing with React, Redux, and Styletron allowed for creating simple, modularized units of code. This ensured that I was able to produce a relatively advanced product within the time-constraints with which I had to work.

What were the snags/gotchas?

* I spent a lot of time getting the build configuration right after making changes to the webpack configuration. This was due to a couple of issues:
  1. `webpack-stream`, used in the gulp file, is out-of-date and uses, I believe, a _really_ old version of webpack which lead to poorly documented errors. In the end I replaced it by manually invoking `webpack` (see [Webpack: Usage with Gulp](https://github.com/webpack/docs/wiki/usage-with-gulp#without-webpack-stream)).
  2. I hadn't worked with `Gulp` in several years and this lead to significant delays in getting to the actual development work.

What would you improve given/more time resources?

I would have:
* Written unit/integration tests to ensure code-quality and maintainability.
* Persisted the cart information to the server (perhaps via some kind of user-session), however I think settling for a browser-based `sessionStorage` approach was an adequate trade-off, given the time constraints.
* Setup a production build process to handle minification, better bundling optimization, etc.
* Utilized server-side rendering of the app (i.e. React's _isomorphic application_ model).
* Implemented a proper error-handling strategy. As it stands, there _shouldn't_ be any errors, but any that do occur could cause the app to stop working as expected.

If you used a framework, why did you? And what would you have done differently if you hadn't?

* For the main javascript framework, I used React with Redux.
  * I used React for a couple of reasons:
    1. I know the framework reasonably well.
    2. I know Casper is adopting React in its newer projects.
    3. React provides the necessary features to allow for rapidly developing rich web applications.
  * If I hadn't used React, I would have selected another similar web-framework (such as Angular 1 which, while being largely out-of-date, I have extensive experience with, or Vue which is a promising React alternative).
* For CSS, I used [Styletron](https://github.com/rtsao/styletron). For a good rundown on why Styletron is a good choice in terms of performance, read the following blog post by Styletron's creator, Ryan Tsao: [Virtual CSS with Styletron](https://ryantsao.com/blog/virtual-css-with-styletron)

Do you have any feedback on the challenge (what would you change, improve, keep…)?

Generally, the test was well thought-out. It challenged various aspects of front-end web development and required me to have a reasonably high level of knowledge of the related technologies without becoming excessively complex.

The instructions and documentation were clear and consise and made it easy for me to understand what was needed of my.

However, at a technical level, I feel that the usage of Gulp and Webpack together is unnecessary. While they can be made to work together, I believe that Webpack can do everything that can be done with Gulp and then some - rendering Gulp, in my opinion, redundant.