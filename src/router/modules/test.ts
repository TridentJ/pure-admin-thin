export default {
  path: "/test",
  redirect: "/test/message",
  meta: {
    icon: "groupFill",
    title: "组件示例",
    roles: ["admin"]
  },
  children: [
    {
      path: "/test/message",
      name: "BaseMessage",
      component: () => import("@/views/test/message.vue"),
      meta: {
        title: "消息",
        roles: ["admin"]
      }
    },
    {
      path: "/test/button",
      name: "BaseButton",
      component: () => import("@/views/test/button.vue"),
      meta: {
        title: "按钮",
        roles: ["admin"]
      }
    },
    {
      path: "/test/axios",
      name: "BaseAxios",
      component: () => import("@/views/test/axios.vue"),
      meta: {
        title: "axios请求",
        roles: ["admin"]
      }
    },
    {
      path: "/test/http",
      name: "BaseHttp",
      component: () => import("@/views/test/http.vue"),
      meta: {
        title: "封装http",
        roles: ["admin"]
      }
    },
    {
      path: "/test/table",
      name: "BaseTable",
      component: () => import("@/views/test/table.vue"),
      meta: {
        title: "表格",
        roles: ["admin"]
      }
    }
  ]
}
