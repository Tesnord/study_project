import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
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
    path: '/login',
    component: LoginPage,
    name: 'login-page'
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'registration-page'
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