import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/B1+B2/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webChunkName: "about" */ "../views/B1+B2/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webChunkName: "contact" */ "../views/B1+B2/Contact.vue"),
    alias: "/get-in-touch",
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/B3/Search.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/B4/NotFound.vue"), // 404 page
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/B5/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "../views/B5/Dashboard.vue"),
    beforEnter: () => {
      const isLoggedIn = true;
      console.log(isLoggedIn);
      
      if (!isLoggedIn) {
        alert("Bạn không có quyền truy cập trang này");
        router.push("/login");
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
