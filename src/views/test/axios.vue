<script setup lang="ts">

import { ref } from 'vue'
//直接用axios
import axios from "axios";

defineOptions({
  //name作为一种规范，最好必须写上并且和路由的name保持一致
  name: "BaseAxios"
});

axios.get('/api/test1')
  .then(function (response) {
    //成功处理
    console.log(response);
  })
  .catch(function (error) {
    //失败
    console.log(error);
  });

let message = ref<string>("test")
function test2(a:string) {
  axios.get('/api/test2', {
    params: {
      a: "123"
    }
  })
  .then(function (response) {
    //成功处理
    console.log(response);
    console.log(response.data);
    console.log(response.data[0].message);
    console.log("response.data.message:" + response.data[0].message);
    message.value = response.data[0].message
  })
  .catch(function (error) {
    //失败
    console.log(error);
  });
}


</script>

<template>
  <el-card>
    <div class="card-header">
      <span class="font-medium">基础组件</span>
    </div>
  </el-card>

  <el-space wrap>
    <el-card>
      <el-row>
        <el-button type="info">info</el-button>
        <el-button type="success" @click="test2('2222')">success</el-button>
        <el-alert title="error alert" type="error">{{message}}</el-alert>
      </el-row>
    </el-card>
  </el-space>
</template>


