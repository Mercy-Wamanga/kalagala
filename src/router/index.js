import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OurStory from "../views/OurStory.vue";
import Products from "../views/Products.vue";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/story",
    name: "OurStory",
    component: OurStory,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  // {
  //   path: "/aboutus",
  //   component: () => import("@/components/AboutUsParagraph"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
