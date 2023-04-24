export default {
  path: "/fighting",
  meta: {
    icon: "userFilled",
    title: "励志"
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "加油"
      }
    },
    {
      path: "/fighting/effort",
      name: "Effort",
      component: () => import("@/views/fighting/effort.vue"),
      meta: {
        title: "努力"
      }
    }
  ]
};
