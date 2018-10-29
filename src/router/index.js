import Vue from 'vue'
import Router from 'vue-router'

import vuexdemo from '@/pages/demo/vuexdemo'
import index from '@/pages/index'
import template from '@/pages/template'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      name:'vuexdemo',
      path: '/demo/vuexdemo',
      meta: {
        title: "vuexdemo",
        // requiresAuth: true
      },
      component:vuexdemo
    },
    {
      name:'index',
      path: '/',
      meta: {
        title: "index",
        // requiresAuth: true
      },
      component:index
    },
    {
      name:'template',
      path: '/template',
      meta: {
        title: "template",
        // requiresAuth: true
      },
      component:template
    },

  ]
})

export default router;
router.beforeEach((to, from, next) => {
  next();
  // if(to.matched.some(record=>record.meta.requiresAuth)){
  //   Vue.prototype.api.checkLogin().then((res)=>{
  //     if(res.code==1000){
  //      next();
  //     }else{
  //      next({
  //        path: '/login',
  //        query: { redirect: to.fullPath }
  //      })
  //     }
  //    })


  //   }else{
  //     next();
  //   }
})


// 使用 afterEach 钩子函数，保证路由已经跳转成功之后修改 title
router.afterEach((to, from) => {
  document.title=to.meta.title;
});
