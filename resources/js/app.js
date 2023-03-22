import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import PostsIndex from './Components/Posts/Index.vue'
import { TailwindPagination } from 'laravel-vue-pagination';


const app = createApp({})
app.component('posts-index', PostsIndex)
app.component('posts-index', PostsIndex)
app.component('TailwindPagination', TailwindPagination)
app.mount('#app')
