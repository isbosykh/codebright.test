import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "@/views/Homepage";
import Comments from "@/views/Comments";
import Comment from "@/views/Comment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage
  },
  {
    path: "/write",
    name: "write",
    component: Homepage
  },
  {
    path: "/comments",
    name: "comments",
    component: Comments,
    children: [
      {
        path: ":id",
        name: "comment",
        component: Comment,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition : { x: 0, y: 0 }
});

export default router;
