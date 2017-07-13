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

utils.js


vue-loader.conf.js


webpack.base.conf.js

weback.dev.conf.js


webpack.prod.conf.js

webpack.test.conf.js


config folder

dev.env.js

index.js


prod.env.js

test.env.js


components(Vuecode)

Create.vue


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


