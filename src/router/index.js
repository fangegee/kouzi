import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },

  {
    path: "/post",
    name: "post",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post.vue")
  },
  {
    path: "/kouzi",
    name: "kouzi",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kouzi.vue")
  },
  {
    path: "/godRecommend/:id",
    name: "godRecommend",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GodRecommend.vue")
  },
  {
    path: "/postDetail/:id",
    name: "postDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PostDetail.vue")
  },
  {
    path: "/godsay",
    name: "godsay",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GodSay.vue")
  },
  {
    path: "/zhuanlan",
    name: "zhuanlan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ZhuanLan.vue")
  },
  {
    path: "/banka",
    name: "banka",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BanKa.vue")
  },
  {
    path: "/complaint",
    name: "complaint",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Complaint.vue")
  },
  {
    path: "/allkouzi",
    name: "allkouzi",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AllKouzi.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue")
  },
  {
    path: "/s/:wordId",
    name: "s",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/S.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
