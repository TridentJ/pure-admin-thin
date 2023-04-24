<script setup lang="ts">
import { message } from "@/utils/message";

defineOptions({
  //name作为一种规范，最好必须写上并且和路由的name保持一致
  name: "BaseMessage"
});
</script>

<template>
  <el-card>
    <div class="card-header">
      <span class="font-medium">基础组件</span>
    </div>

    <h4 class="mb-4">element-plus和Ant Design的消息提示，点击弹出提示框</h4>
    <el-space wrap>
      <el-button
        type="success"
        @click="
          message('Success类型消息', { customClass: 'el', type: 'success' })
        "
      >
        Success
      </el-button>

      <el-button
        type="danger"
        @click="message('Error类型消息', { type: 'error' })"
      >
        Error
      </el-button>
    </el-space>
  </el-card>
</template>
