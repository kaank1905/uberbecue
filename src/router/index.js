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
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
