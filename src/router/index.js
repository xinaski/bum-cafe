import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ShopView = () => import('../views/ShopView.vue')
const ProductView = () => import('../views/ProductView.vue')
const AboutView = () => import('../views/AboutView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/botiga', name: 'shop', component: ShopView },
    { path: '/producte/:slug', name: 'product', component: ProductView, props: true },
    { path: '/sobre', name: 'about', component: AboutView },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
