<template>
    <div class="flex flex-col w-full h-full">
        
        <!-- 加载 Header 组件 -->
        <Header class="w-full h-full"/>
        
        <div class="flex flex-row flex-grow w-full overflow-hidden">
        
        <!-- 加载 Menu 组件 -->
        <Menu/>
        
         <div class="w-full overflow-y-scroll">
           
        <!-- Hello.vue 的路由填充位 -->
        <router-view></router-view>
          
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
  // @ 的别名是 /src ，配置文件是：vite.config.js
  import Menu from '@/views/home/Menu.vue'
  import Header from '@/views/home/Header.vue'
  </script>
  