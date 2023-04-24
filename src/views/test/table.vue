
<template>

  <el-card>
    <div class="card-header">
      <span class="font-medium">基础组件</span>
    </div>
    <h4 class="mb-4">表格组件</h4>
    <el-space wrap>
      <el-card>
        <el-table :data="list" :key="itemKey" border style="width: 100%">
          <el-table-column prop="username" label="用户名" width="180" />
          <el-table-column prop="password" label="密码" width="180" />
          <el-table-column prop="age" label="年龄" />
          <el-table-column prop="sex" label="性别" />
        </el-table>
      </el-card>
    </el-space>


  </el-card>

</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import {integer} from "vue-types";

let list = ref()
let itemKey = ref<number>(0)

axios.get('/api/getPersonList', {
  params: {
    id: 1
  }
})
  .then(function (response) {
    //成功处理
    console.log(response);
    console.log(response.data.data);

    list = response.data.data;
    itemKey.value++;
  })
  .catch(function (error) {
    //失败
    console.log(error);
  });


</script>
