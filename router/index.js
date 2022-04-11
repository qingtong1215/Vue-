// import { userSetter } from "core-js/fn/symbol";
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Main',
        component:()=>import ('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home')

            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/User')
            },
            {
                path:'/output',
                name:'output',
                component:()=>import('../views/Output')
            },
        ]
    },


    
]

const router = new VueRouter({
    mode:'history',
    routes
})
export default router