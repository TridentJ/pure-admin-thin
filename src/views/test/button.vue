<script setup lang="ts">
import { message } from "@/utils/message";
import { getTest, getTest2 } from "@/api/test";

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Share,
  ArrowLeft,
  ArrowRight
} from "@element-plus/icons-vue";

getTest2({a:"123"});



defineOptions({
  //name作为一种规范，最好必须写上并且和路由的name保持一致
  name: "BaseButton"
});
</script>

<template>
  <el-card>
    <div class="card-header">
      <span class="font-medium">基础组件</span>
    </div>

    <h4 class="mb-4">按钮组件</h4>
    <el-space wrap>
      <el-card>
        <el-row>
          <el-button>Default</el-button>
          <el-button type="primary" @click="getTest">primary</el-button>
          <el-button type="success" >success</el-button>
          <el-button type="info">info</el-button>
          <el-button type="warning">warning</el-button>
          <el-button type="danger">danger</el-button>
        </el-row>
      </el-card>

      <el-card>
        <el-row>
          <el-button plain>plain</el-button>
          <el-button type="primary" plain>primary</el-button>
          <el-button type="success" plain>success</el-button>
          <el-button type="info" plain>info</el-button>
          <el-button type="warning" plain>warning</el-button>
          <el-button type="danger" plain>danger</el-button>
        </el-row>
      </el-card>
      <el-card>
        <el-row>
          <el-button round>round</el-button>
          <el-button type="primary" round>primary</el-button>
          <el-button type="success" round>success</el-button>
          <el-button type="info" round>info</el-button>
          <el-button type="warning" round>warning</el-button>
          <el-button type="danger" round>danger</el-button>
        </el-row>
      </el-card>

      <el-card>
        <el-row>
          <el-button :icon="Search" circle />
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="success" :icon="Check" circle />
          <el-button type="info" :icon="Message" circle />
          <el-button type="warning" :icon="Star" circle />
          <el-button type="danger" :icon="Delete" circle />
        </el-row>
      </el-card>

      <el-card>
        <el-row>
          <el-button type="primary" disabled>禁用</el-button>
          <el-button type="success" link>超链接</el-button>
          <el-button type="success" :icon="Share" />
          <el-button type="success" :icon="Search">Search</el-button>
        </el-row>
      </el-card>
      <el-card>
        <el-button-group>
          <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
          <el-button type="primary">
            Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </el-button-group>
      </el-card>
      <el-card>
        <el-row>
          <el-button size="large">Large</el-button>
          <el-button>Default</el-button>
          <el-button size="small">Small</el-button>
          <el-button size="large" :icon="Search">Search</el-button>
          <el-button :icon="Search">Search</el-button>
          <el-button size="small" :icon="Search">Search</el-button>
        </el-row>
      </el-card>
    </el-space>
  </el-card>
</template>
