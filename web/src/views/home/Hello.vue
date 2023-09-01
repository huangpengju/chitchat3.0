<template>
    <div class="w-full h-full h-max-full flex justify-center align-center text-center">
      <div class="flex-col m-auto">
        <h1 class="font-bold text-2xl mb-[1rem]">Hello 黄鹏举</h1>
        <h2 class="text-lg text-gray-500">具有golang和vue的强大服务器模板</h2>
        <img src="@/assets/welcome.svg" class="w-1/3 my-[2rem] mx-auto" >
        <!-- <el-button :icon="Waves" type="primary" plain><router-link to="/about">关于 黄鹏举</router-link></el-button> -->
        <el-button :icon="Waves" type="primary" plain><router-link to="#">关于 黄鹏举</router-link></el-button>
        <el-button :icon="Github"><a :href="githubInfo.project" target="_blank">探索更多</a></el-button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Github, Waves } from '@icon-park/vue-next';
  import { githubInfo } from '@/config.js';
  
  </script>
  