export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    // pc-首页
    path: "/bhome",
    component: function(resolve) {
      require(["./newpcbig/home.vue"], resolve);
    }
  },
  {
    // pc-首页
    path: "/home",
    component: function(resolve) {
      require(["./newpc/home.vue"], resolve);
    }
  },
  {
    // pc-微应用
    path: "/mApp",
    component: function(resolve) {
      require(["./newpc/mApp.vue"], resolve);
    }
  },
  {
    // pc-解决方案
    path: "/solution",
    component: function(resolve) {
      require(["./newpc/solution.vue"], resolve);
    }
  },
  {
    // pc-支持与服务
    path: "/server",
    component: function(resolve) {
      require(["./newpc/server.vue"], resolve);
    }
  }
];
