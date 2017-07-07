import Vue from 'vue'
import Router from 'vue-router'
import PageContainer from './components/PageContainer.vue'
import Index from './views/Index.vue'
import AgentIndex from './views/Agent/Index.vue'
import AgentCreate from './views/Agent/Create.vue'
import AgentDetails from './views/Agent/Details.vue'
import AgentDetailsBase from './views/Agent/DetailsBase.vue'
import AgentAccount from './views/Agent/AgentAccount.vue'
import Login from './views/Account/Login.vue'


import View1 from './views/view1.vue'
import View2 from './views/view2.vue'




import linkgroup from './linkgroup.json'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    // 路由配置
    routes: [
        {
            path: '/pagecontainer',
            component: PageContainer,
            children: [
                {
                    path: 'agentindex',
                    component: AgentIndex,
                    linktext: '概要视图',
                    icon: '',
                    groupname: 'mystatuspanel'
                },
                {
                    path: 'agentindex',
                    component: AgentIndex,
                    linktext: '我的KPI',
                    icon: '',
                    groupname: 'mystatuspanel'
                },
                {
                    path: 'agentindex',
                    component: AgentIndex,
                    linktext: '我的信用记录',
                    icon: '',
                    groupname: 'mystatuspanel'
                },
                {
                    path: 'agentindex',
                    component: AgentIndex,
                    
                    linktext: '代理商列表',
                    icon: '',
                    groupname: 'metroresource'
                },
                {
                    path: 'agentindex',
                    component: AgentIndex,

                    linktext: '测试需要特殊权限',
                    icon: '',
                    groupname: 'metroresource',
                    meta: { role: ['LB_BillAudit'] }
                },
                {
                    path: 'agentcreate',
                    component: AgentCreate,
                    meta: { role: ['Administrators'] }
                },
                {
                    path: 'agentdetails',
                    name:'agentdetails',
                    component: AgentDetails,
                    children: [
                        {
                            path: 'agentaccount',    //默认路由
                            name:'agentaccount',
                            component: AgentAccount
                        },
                        {
                            path: '/',    //默认路由
                            name:'agentdetailsbase',
                        component: AgentDetailsBase
                    }
                    ]
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/view2',
            component: View2
            
        }, {
            path: '/*',
            component: PageContainer,
            children: [
                {
                    path: '/*',
                    component: Index
                }
            ]
        }
    ],

})





//const router = new Router({
//    linkActiveClass: 'active',
//    // 路由配置
//    routes: [
//        {
//            path: '/pagecontainer',
//            component: PageContainer,
//            children: [
//                {
//                    path: 'agentindex',
//                    component: AgentIndex
//                },
//                {
//                    path: 'agentcreate',
//                    component: AgentCreate,

//                    meta: {
//                        meta: {
//                            meta: { role: ['admin', 'super_editor'] }, //页面需要的权限
//                        }
//                    }
//                }
//            ]
//        }, {
//            path: '/view2',
//            component: View2
//        }, {
//            path: '/*',
//            component: PageContainer,
//            children: [
//                {
//                    path: '/*',
//                    component: Index
//                }
//            ]
//        }
//    ],

//})


//router.beforeEach((to, from, next) => {
//    if (to.matched.some(r => r.meta.requireAuth)) {
//        if (store.state.token) {
//            next();
//        }
//        else {
//            next({
//                path: '/login',
//                query: { redirect: to.fullPath }
//            })
//        }
//    }
//    else {
//        next();
//    }
//})

//export default router;