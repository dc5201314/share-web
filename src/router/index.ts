import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/home/Home.vue"; // 导入 Home 组件
import Layout from "../layout/index.vue"; // 确保路径正确
import Books from "../views/book/books.vue"; // 导入 Books 组件
import Consult from "../views/consult/consult.vue"; // 导入 Consult 组件
import Test from "../views/test/test.vue"; // 导入 Test 组件
import Audio from "../views/audio/audio.vue"; // 导入 Audio 组件
import Indep from "../views/indep/indep.vue"; // 导入 Indep 组件
import Video from "../views/video/video.vue"; // 导入 Video 组件
import Special from "../views/special/special.vue"; // 导入 Special 组件
import information from "../views/information/information.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "", // 默认子路由
        component: Home,
        name: "Home", // 路由名称
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/information",
    component: Layout,
    children: [
      {
        path: "",
        component: information,
        name: "information",
        meta: {
          title: "资讯",
        },
      },
    ],
  },
  {
    path: "/book",
    component: Layout,
    children: [
      {
        path: "",
        component: Books,
        name: "Books",
        meta: {
          title: "图书",
        },
      },
    ],
  },
  {
    path: "/consult",
    component: Layout,
    children: [
      {
        path: "",
        component: Consult,
        name: "Consult",
        meta: {
          title: "咨询",
        },
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    children: [
      {
        path: "",
        component: Test,
        name: "Test",
        meta: {
          title: "练习题",
        },
      },
    ],
  },
  {
    path: "/audio",
    component: Layout,
    children: [
      {
        path: "",
        component: Audio,
        name: "Audio",
        meta: {
          title: "音频",
        },
      },
    ],
  },
  {
    path: "/indep",
    component: Layout,
    children: [
      {
        path: "",
        component: Indep,
        name: "Indep",
        meta: {
          title: "考核",
        },
      },
    ],
  },
  {
    path: "/video",
    component: Layout,
    children: [
      {
        path: "",
        component: Video,
        name: "Video",
        meta: {
          title: "视频",
        },
      },
    ],
  },
  {
    path: "/special",
    component: Layout,
    children: [
      {
        path: "",
        component: Special,
        name: "Special",
        meta: {
          title: "专题",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
