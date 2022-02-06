import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import FindBooks from '../views/FindBooks.vue'
import OtherLanguages from '../views/OtherLanguages.vue'
import SearchResults from '@/views/SearchResults'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/otherLanguages',
    name: 'OtherLanguages',
    component: OtherLanguages,
  },
  {
    path: '/find',
    name: 'Find Books',
    component: FindBooks,
  },
  {
    path: '/lang/:lang/:language',
    name: 'Books',
    component: Books,
  },
  {
    path: '/search/:type/:expression',
    name: 'SearchResults',
    component: SearchResults,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
