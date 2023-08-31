import {createRouter,createWebHashHistory} from 'vue-router'

// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import("views/Home.vue"),
        redirect:'/index',
        children:[
            {
                path:'/index',
                name:'Index',
                component: () => import("views/home/Hello.vue")
            }
        ]
    },
]

const router =  createRouter({
    history:createWebHashHistory(),
    routes
})

export default router