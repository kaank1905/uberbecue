# uberbecue_vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


Routing Kaan Karanlik
CSS Johannes Georg Larcher
Loopback Stefan Theissl
Kommentare und Doku Denis Peinlich
Front Design Karin Breckner


Docu Javascript Files

build.js
Responsible class for the app build. Describes the handling in case of errors as well as
the different paths that are required. Also responsible for status updates/ e.g. changes
of status and there displaying state, console output for correct and/or incorrect build.


check-versions.js
Determines the required package configuration. Checks the version requirements via looping.
Gives information about the modules that need to be updated to use this app.

dev-client.js
Reloading of window applying webpack triggers events when subscribed.

dev-server.js
Parsing of Node, variables hold webpack as well as the middleware.
Possibility to define HTTP Proxies for the custom API backend.
Possibility of reload for the template if changes are applied (instant loading).
Definition of the uri and the http adress with the port on which it is running.
var sever responsible for the port to listen so the app can be started(localhost).

utils.js
Css Loading, Sass Loading as well as other styleinformation like postcss and less.
Implemented with if constructs mainly as well as standalone style information
via regex function.

vue-loader.conf.js
Loading css loaders, the css source map and production source.

webpack.base.conf.js
test of vue, js, pictures and so on.

weback.dev.conf.js


webpack.prod.conf.js

webpack.test.conf.js


config folder

dev.env.js

index.js

Setting index.html and directory name as well as path.
Setting port that will be runned in the app (in this case port 8080).

prod.env.js
Export of the production node module.

test.env.js
Export of the testing possibilities.

components(Vuecode)

Create.vue
Implementation of the link to the api (port 3000). Implementatin of div containers
that give you options for grills to choose from. As well as information about the condition.
Implementation of search option and certain style elements (css).

Hello.vue

Map.vue

Search.vue

Test.vue


folder specs

nightwatch.conf.js



runner.js

folder specs

index.js



karma.conf.js


