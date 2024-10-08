import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// Cơ chế định tuyến
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webChunkName: "home" */ "@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webChunkName: "about" */ "@/views/About.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import(/* webChunkName: "contact" */ "@/views/Contact.vue"),
    },
    {
      path: "/user/:id",
      redirect: (to) => `/profile/${to.params.id}`,
      name: "user",
      component: () => import(/* webChunkName: "home" */ "@/views/User.vue"),
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import(/* webChunkName: "home" */ "@/views/Profile.vue"),
    },
    {
      path: "/list-product",
      component: () => 
        import(/* webChunkName: "listProduct" */ "@/views/ListProduct.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      beforeEnter: () => {
        const isAuthentication = true

        if(!isAuthentication) {
          alert("Bạn không có quyền truy cập trang này")
        } else {
          next()
        }
      },
      component: () => import(/* webpackChunkName: "admin" */ "@/views/Dashboard.vue"),
      children: [
        {
          path: "/manager-user",
          component: () => import(/* webpackChunkName: "admin" */ "@/views/ManagerUser.vue"),
        },
        {
          path: "/manager-product",
          component: () => import(/* webpackChunkName: "admin" */ "@/views/ManagerProduct.vue"),
        }
      ]
    },
    {

    }
  ],
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return savePosition;
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
});

// Tạo cơ chế bảo vệ route
// router.beforeEach((to, from, next) => {
//   const company = prompt("Nhập địa chỉ mạng")
//   const password = prompt("Nhập mật khẩu")
//   // Mô phỏng người dùng đã/chưa đăng nhập
//   const islogin = ref(false)
//   if (to.path === "" && islogin.value) {
//     next(
//       {
//         path: "/login",
//       }
//     )
//   }else{
//     next();
//   }
// });
export default router;
