<template>
    <div class="flex flex-col h-full">
      <el-menu class="w-[14rem] py-[1rem] flex-grow overflow-x-hidden overflow-y-auto"
        text-color="#4b5563" active-text-color="#10b981" unique-opened :collapse="isCollapse" router>
  
        <el-menu-item :index="menu.name" v-for="menu in menuList" :key="menu.title">
          <el-icon size="14">
            <component :is="menu.icon" />
          </el-icon>
          <span class="font-bold">{{ menu.title }}</span>
        </el-menu-item>
        
        <el-sub-menu :index="menu.name" v-for="menu in subMenuList" v-show="menu.show" :key="menu.title">
          <template #title>
            <el-icon size="14">
              <component :is="menu.icon" />
            </el-icon>
            <span class="font-bold">{{ menu.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="item.name" v-for="item in menu.children" :key="item.name" class="font-bold">
            {{item.title}}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
      
      <div class="flex flex-grow-1 w-full my-[1rem] pl-[1.5rem]">
        <div v-if="isCollapse">
          <menu-fold-one v-model="isCollapse" @click="collapseMenu" />
        </div>
        <div v-else>
          <menu-unfold-one v-model="isCollapse" @click="collapseMenu" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    DashboardCar, ApplicationTwo, Peoples,
    MoreFour, MenuFoldOne, MenuUnfoldOne, CategoryManagement,
    SailboatOne
  } from '@icon-park/vue-next';
  import { isAdmin } from '@/utils';
  
  const isRoot = isAdmin();
  
  const isCollapse = ref(false);
  
  const menuList = [
    {
      name: '/dashboard',
      icon: DashboardCar,
      title: 'Dashboard(仪表盘)',
    },
    {
      name: '/apps',
      icon: ApplicationTwo,
      title: 'Applications(应用程序)',
    },
    {
      name: '/user_groups',
      icon: Peoples,
      title: 'Groups(群组)',
    }
  ]
  
  const subMenuList = [
    {
      title: 'Kubernetes(未知)',
      icon: SailboatOne,
      name: "/kubernetes",
      show: isRoot,
      children: [
        {
          name: '/namespaces',
          title: 'Namespaces(名称空间)'
        },
        {
          name: '/workloads',
          title: 'Workloads(组织)'
        },
        {
          name: '/pods',
          title: 'Pods(规则)'
        },
        {
          name: '/services',
          title: 'Services(服务)'
        },
        {
          name: '/ingresses',
          title: 'Ingresses(未知)'
        }
      ]
    },
    {
      title: 'Admin(管理员)',
      icon: CategoryManagement,
      name: "/admin",
      show: isRoot,
      children: [
        {
          name: '/users',
          title: 'Users(用户)'
        },
        {
          name: '/groups',
          title: 'Groups(用户组)'
        },
        {
          name: '/rbac',
          title: 'RBAC(未知)'
        },
      ]
    },
    {
      title: 'Others',
      show: true,
      name: '/others',
      icon: MoreFour,
      children: [
        {
          name: '/about',
          title: 'About'
        },
        {
          name: '/markdown',
          title: 'MarkDown'
        },
        {
          name: '/webcode',
          title: 'WebCode'
        },
        {
          name: '/404',
          title: '404'
        }
      ]
    }
  ]
  
  function collapseMenu() {
    isCollapse.value = !isCollapse.value;
  }
  
  </script>
  
  <style scoped>
  .el-menu {
    border: none;
  }
  </style>
  