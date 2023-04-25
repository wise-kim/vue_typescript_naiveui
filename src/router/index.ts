import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: BaseLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue')
                },
                {
                    path: '/reg_and_update',
                    name: '지원신청서 등록 및 수정',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/RegUpdateView.vue')
                },
                {
                    path: '/applicants',
                    name: '지원자 관리',
                    component: () => import('../views/ApplicantsView.vue')
                }
            ]
        }
    ]
})

export default router
