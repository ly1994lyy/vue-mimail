import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/index.vue"),
      },
      {
        path: "/product/:id",
        name: "Product",
        component: () => import("../views/product.vue"),
      },
      {
        path: "/detail/:id",
        name: "Detail",
        component: () => import("../views/detail.vue"),
      },
    ],
  },
  { path: "/cart", name: "Cart", component: () => import("../views/cart.vue") },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/order.vue"),
    children: [
      {
        path: "/list",
        name: "OrderList",
        component: () => import("../views/orderList.vue"),
      },
    ],
  },
  { path: "/login", name: "Login", component: () => import("../views/login.vue") }
];

const router = new VueRouter({
  routes,
});

export default router;
