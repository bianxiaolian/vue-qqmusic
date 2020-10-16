import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由懒加载
const HomePage = (resolve) => {
    import ('../views/MusicHell/HomePage').then((module) => {
        resolve(module)
    })
}

const Forbidden = (resolve) => {
    import ('../views/Forbidden').then((module) => {
        resolve(module)
    })
}



// 解决vue - router3重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
        mode: 'history', // 去掉#，利于seo
        routes: [{
                path: '/',
                redirect: '/musicHell/homePage' // 路由重定向设置默认首页
            },
            {
                path: '/musicHell/homePage',
                component: HomePage
            },
            {
                path: '/forbidden',
                component: Forbidden
            },


        ]
    })
    // router.beforeEach((to, from, next) => {
    // if (to.query.id !== 99) {
    // return next('/forbidden')
    // }
    // next()
    // })
export default router