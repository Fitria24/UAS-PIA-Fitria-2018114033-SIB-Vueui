import { createRouter, createWebHashHistory } from 'vue-router'
import Profile from '../views/profiles/Profile.vue'
import Createprofiles from '../views/profiles/Createprofiles.vue'
import Editprofiles from '../views/profiles/Editprofiles.vue'
import Detailprofiles from '../views/profiles/Detailprofiles.vue'
import Pendidikan from '../views/pendidikans/Pendidikan.vue'
import Creatependidikans from '../views/pendidikans/Creatependidikans.vue'
import Editpendidikans from '../views/pendidikans/Editpendidikans.vue'
import Detailpendidikans from '../views/pendidikans/Detailpendidikans.vue'


const routes = [
  {
    path: '/profiles',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/createprofiles',
    name: 'Createprofile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createprofiles
  },
  {
    path: '/editprofiles/:id',
    name: 'Editprofiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editprofiles
  },
  {
    path: '/detailprofiles/:id',
    name: 'Detailprofiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailprofiles
  },
  {
    path: '/pendidikans',
    name: 'Pendidikan',
    component: Pendidikan
  },
  {
    path: '/creatependidikans',
    name: 'Creatependidikan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatependidikans
  },
  {
    path: '/editpendidikans/:id',
    name: 'Editpendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpendidikans
  },
  {
    path: '/detailpendidikans/:id',
    name: 'Detailpendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpendidikans
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router