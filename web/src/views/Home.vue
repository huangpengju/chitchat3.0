<template>
    <div class="flex flex-col w-full h-full">
        
        <!-- 加载 Header 组件 -->
        <Header class="w-full h-full"/>
        

        <div class="flex flex-wrap" style="border:1px solid red">
            <Hot></Hot>
        </div>

    </div>
  </template>
  
  <script setup>
  // @ 的别名是 /src ，配置文件是：vite.config.js
  import Hot from '@/views/home/Hot.vue'
  import Header from '@/views/home/Header.vue'
  </script>
  