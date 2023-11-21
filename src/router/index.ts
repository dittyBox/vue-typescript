import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login/Login.vue";
import Page404Layout from '../views/Page404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true},
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false},
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { requiresAuth: false},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/404',
    name: "notFound",
    component: Page404Layout,
  },
  {
    path: "/:pathMatch(.*)*", //pathMatch 없는 페이지 일경우  /404로 이동
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  
  if(to.matched.some(record=>record.meta.requiresAuth) && !loggedIn){ // to.matched는 이동할 route와 match되는 route들
    next('/Login') // redirect to homepage
  }else{
    next() // direct to to
  }
  return false
})
export default router;
