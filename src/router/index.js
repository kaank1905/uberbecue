import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import Create from '@/components/Create'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',// path of component (were it will be displayed browser path
      name: 'Hello',// name of component
      component: Hello// component
    },
    {
      path: '/Search',
      // path of component (were it will be displayed browser path
      name: 'Search',
      // name of component
      component: Search
      // component
    },
    {
      path: '/Create',
      // path of component (were it will be displayed browser path
      name: 'Create',
      // name of component
      component: Create
      // component
    },
    {
      path: '/Test',
      // path of component (were it will be displayed browser path
      name: 'Test',
      // name of component
      component: Test
      // component
    }
  ]
})
