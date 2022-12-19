import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/views/home/home.vue");
const Category = () => import("@/views/category/category.vue");
const Cart = () => import("@/views/cart/cart.vue");
const Profile = () => import("@/views/profile/profile.vue");
const Detail = () => import("@/views/detail/detail.vue")

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    component: Detail
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
