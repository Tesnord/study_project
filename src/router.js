import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import ErrorPage from './pages/ErrorPage'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'homepage'
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment'
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error-page'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router