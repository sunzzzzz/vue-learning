import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);//在vue中注入vue-router


import Login from '@/views/login';



const routes = [
    {
        path:'/',
        name:'Login',
        component:Login
    }
]

const router = new Router({ //routes注入vue-router实例
    'mode':'history',
    routes
})


export default router;