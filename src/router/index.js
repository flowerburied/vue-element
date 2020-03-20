import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/login/login.vue'
// import Home from '../components/home/home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/components/login/login.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () =>
            import ('@/components/home/home.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router