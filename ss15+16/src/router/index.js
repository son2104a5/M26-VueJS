import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'
import B6 from '@/components/B6/B6.vue'
import B6Home from '@/components/B6/B6Home.vue'
import B6Contact from '@/components/B6/B6Contact.vue'
import B7 from '@/components/B7/B7.vue'
import B7Home from '@/components/B7/B7Home.vue'
import B7Product from '@/components/B7/B7Product.vue'
import B7Detail from '@/components/B7/B7Detail.vue'
import B8 from '@/components/B8/B8.vue'
import B8Product from '@/components/B8/B8Product.vue'
import B8Account from '@/components/B8/B8Account.vue'
import ListUser from '@/components/B9/ListUser.vue'
import UserDetail from '@/components/B9/UserDetail.vue'
import ListEmployee from '@/components/B10/ListEmployee.vue'
import EmployeeDetail from '@/components/B10/EmployeeDetail.vue'
import Profile from '@/components/B10/Profile.vue'
import Project from '@/components/B10/Project.vue'
import Contact from '@/components/B10/Contact.vue'
import Login11 from '@/components/B11+12/Login.vue'
import Register11 from '@/components/B11+12/Register.vue'
import Home11 from '@/components/B11+12/Home.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/b6' , component: B6, children: [
    { path: '', component: B6Home },
    { path: '', component: B6Contact },
  ]},
  { path: '/b7' , component: B7, children: [
    { path: '', component: B7Home },
    { path: 'product', component: B7Product },
    { path: 'detail', component: B7Detail },
  ]},
  { path: '/b8' , component: B8, children: [
    { path: '', component: B8 },
    { path: 'product', component: B8Product },
    { path: 'account', component: B8Account },
  ]},
  { path: '/b9' , component: ListUser },
  { path: '/user-detail/:id', name: 'UserDetails', component: UserDetail },
  { path: '/employees', component: ListEmployee },
  { path: '/employees/:id', component: EmployeeDetail, children: [
    { path: 'profile', component: Profile },
    { path: 'projects', component: Project },
    { path: 'contact', component: Contact }
  ]},
  { path: '/b11-12/login', component: Login11 },
  { path: '/b11-12/register', component: Register11 },
  { path: '/b11-12', component: Home11}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})