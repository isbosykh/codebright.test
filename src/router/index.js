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
    beforeEnter(to, from, next) {
      next(vm => {
        if (vm.$route.name === 'write') {
          vm.$refs.writeAnchor.$el.scrollIntoView({ behavior: 'smooth' })
        }
      });
    },
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
