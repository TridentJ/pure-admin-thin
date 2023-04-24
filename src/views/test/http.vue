<script setup lang="ts">

import { ref } from 'vue'
//直接用axios
import axios from "axios";
import { http } from "@/utils/http";
import { Person } from "@/utils/person"

defineOptions({
  //name作为一种规范，最好必须写上并且和路由的name保持一致
  name: "BaseHttp"
});

let message = ref<string>("test")
function test2(a:number) {
  http.get("/api/getPersonInfo", {
    params: {
      id: a
    }
  })
  .then(function (response) {
    //成功处理
    console.log(response);
    //console.log(response.data);
    //console.log(response.data[0].message);
    //console.log("response.data.message:" + response.data[0].message);
    message.value = response.data.username
  })
  .catch(function (error) {
    //失败
    console.log(error);
  });
}



const form = ref({
  username:'test',
  sex:0,
  age:0
});

const onSubmit = () =>{
  http.post('/api/addPersonJson',{
    data:{
      username: form.value.username,
      sex: form.value.sex,
      age: form.value.age

    }
  }).then((response) => {
    console.log(response.data);
  }).catch(function (error) {
    //失败
    console.log(error);
  });
}

const onSubmit2 = () =>{
  http.post('/api/addPerson',{
    data:"username=" + form.value.username + "&sex=" + form.value.sex + "&age=" + form.value.age
  }).then((response) => {
    console.log(response.data);
  }).catch(function (error) {
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
        <el-button type="success" @click="test2(111)">success</el-button>
        <el-alert title="error alert" type="error">{{message}}</el-alert>
      </el-row>
    </el-card>

    <el-card>

      <el-form :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="性别">
            <el-option label="男" value="1" />
            <el-option label="女" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.age" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onSubmit2">提交2</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </el-space>
</template>


