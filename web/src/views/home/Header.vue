<template>
    <el-header>
      <el-row class="flex h-full w-full" justify="center" align="middle">
        <el-col :span="4">
            <!-- 路由链接 -->
            <router-link to="/" class="flex text-center items-center content-center">
              <img class="w-[2.5rem] mx-[0.5rem]" src="@/assets/weave.png" />
              <span class="font-bold font-mono text-2xl pl-[0.5rem]">黄鹏举</span>
            </router-link>
        </el-col>
        <el-col :span="14" class="flex-col text-right content-center">
          <el-menu mode="horizontal" class="font-bold" active-text-color="#000000">
            <el-menu-item index="1">
              <router-link to="/">主页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/docs">文档</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/posts">文章</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" class="text-right pr-[1rem] space-x-[1rem]">
          <el-button link @click="notImplement('Search')">
            <search theme="outline" size="18" fill="#333" />
          </el-button>
          <el-button link>
            <a :href="githubInfo.project" target="_blank">
              <github-one theme="outline" size="18" :fill="['#333']" />
            </a>
          </el-button>
          <el-dropdown placement="bottom">
            <el-button link>
              <el-avatar v-if="user.avatar" :size="50" :src="user.avatar" />
              <me v-else theme="two-tone" size="18" :fill="['#333', '#50e3c2']" />
            </el-button>
            <template #dropdown>
              <span class="flex items-center content-center text-center mt-[1rem] mb-[0.5rem] mx-4 font-bold text-l">
                <SunOne theme="two-tone" size="24" :fill="['#333', '#f8e71c']" />
                <!-- <span class="ml-2">Hi {{ user.name }}</span> -->
                <span class="ml-2">Hi Admin</span>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Info" @click="toUserInfo">
                  UserInfo
                </el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item :icon="SettingOne" @click="notImplement('Setting')">
                  Setting
                </el-dropdown-item>
              </el-dropdown-menu>
  
              <el-dropdown-menu>
                <el-dropdown-item :icon="Logout" @click="logout">
                  Logout
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
  </template>
  
  <script setup>
  import { Info, SettingOne, Logout, SunOne, Search, GithubOne, Me } from '@icon-park/vue-next';
  // import { getUser, delUser } from '@/utils'; // 从cookie 获取用户信息和删除用户信息
  // import request from '@/axios';  // 与go 交互
  import { ElMessage, ElNotification } from "element-plus"; // 弹框
  import { useRouter } from 'vue-router';  // 获取路由
  import { githubInfo } from '@/config.js'; // 获取github信息
  
  // const user = getUser();
  // const user = ref

  // 要在 setup 函数中访问路由，请调用 useRouter 或 useRoute 函数
  const router = useRouter();
  
  function logout() {
    let lg = function () {
      console.log("logout success")
      // 弹框
      ElNotification.success({
        title: 'Logout Success',
        // message: 'Bye~ ' + user.name,
        message: 'Bye~ ' + 'Admin',
        showClose: true,
        duration: 1500,
      })
      // delUser();
      router.push('/login');
    }
  
    // 与 go 交互
  //   request.delete("/api/v1/auth/token").then(() => {
  //     lg();
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // };
  
  function toUserInfo() {
    router.push(`/users/${user.id}`)
  };
  
  // notImplement 给未开发的模块提示弹窗
  function notImplement(name) {
    // 弹框
    ElMessage({
      message: name + ' Coming Soon',
      type: 'warning',
      duration: 1000,
    })
  }
  
  </script>
  
  <style scoped>
  .el-header {
    border-bottom: 1px solid #d1d5db;
  }
  
  .el-menu {
    border: none;
  }
  
  .el-menu-item {
    border: none;
  }
  
  .el-menu-item.is-active {
    border: none;
  }
  </style>