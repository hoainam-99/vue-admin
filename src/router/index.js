import VueRouter from 'vue-router'

import Login from "@/layout/login.vue";
import Layout from '@/layout/index.vue'
import Dashboard from "../pages/dashboard.vue";

import Train from "../pages/train/index.vue"
import ListTrain from "../pages/train/list.vue"
import TrainDetail from "../pages/train/detail.vue"


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: Layout,
        children: [
          { path: '', name: 'Dashboard', component: Dashboard },
          { path: 'train', component: Train, children: [
            { path: '', name: 'ListTrain', component: ListTrain },
            { path: 'detail', name: 'TrainDetail', component: TrainDetail },
          ]},
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
  ]
})
router.beforeEach((to, from, next) =>{
  window.scrollTo(0, 0);
  next();
})
export default router
