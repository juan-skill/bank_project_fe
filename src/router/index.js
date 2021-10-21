import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/signUp',
    name: "signUp",
    component: SignUp
  },
  {
    path: '/user/logIn',
    name: "logIn",
    component: Login
  },  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
