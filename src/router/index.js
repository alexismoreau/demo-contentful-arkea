import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../components/PostList.vue';
import BlogPost from '../components/BlogPost.vue';

const routes = [
  {
    path: '/',
    name: 'Common',
    props: {
      website: '0common',
    },
    component: PostList,
  },
  {
    path: '/arkea',
    name: "Arkea's blog",
    props: {
      website: 'arkea',
    },
    component: PostList,
  },
  {
    path: '/harley',
    name: "Harley's blog",
    props: {
      website: 'harley',
    },
    component: PostList,
  },
  {
    path: '/blogpost/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
