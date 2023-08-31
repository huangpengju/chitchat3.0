import { createApp } from 'vue'  //导入 vue
import App from './App.vue'  // 从一个单文件组件中导入根组件
import router from './router'   // 导入路由
import { createPinia } from 'pinia' // 导入 pinia 实现状态管理（Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。）
import './styles/index.css'  // 导入 tailwind.css
import 'element-plus/es/components/message/style/css'  
import 'element-plus/es/components/notification/style/css'

if (import.meta.env.WEAVE_MOCK) {
    import('./mock')
}

const app = createApp(App).use(router).use(createPinia());
app.mount('#app');
