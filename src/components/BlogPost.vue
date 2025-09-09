<template>
  <div v-if="loading" class="loading">Loading post...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <article v-else-if="post" class="post-full">
    <h1>{{ post.fields.title }}</h1>
    <div v-if="post.fields.content" v-html="renderRichText(post.fields.content)" class="post-content"></div>
    <router-link to="/" class="back-link">Back to all posts</router-link>
  </article>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import contentfulClient from '../contentful';
import { store } from '../store';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const route = useRoute();
const post = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPost = async (id) => {
  try {
    loading.value = true;
    error.value = null;
    const response = await contentfulClient.getEntry(id, { locale: store.locale });
    post.value = response;
  } catch (err) {
    console.error('Error fetching post:', err);
    error.value = 'Failed to load the post. It might not exist or there was a network error.';
  } finally {
    loading.value = false;
  }
};

const renderRichText = (content) => {
  if (!content) return '';
  return documentToHtmlString(content);
};

onMounted(() => {
  fetchPost(route.params.id);
});

watch(() => store.locale, () => {
  fetchPost(route.params.id);
});

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchPost(newId);
  }
});
</script>

<style scoped>
.post-full {
  margin: 40px 20px;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.post-content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

.post-content :deep(p) {
  margin-bottom: 1.5em;
}

.post-content :deep(h2) {
  font-size: 1.8rem;
  margin-top: 2em;
  margin-bottom: 1em;
}

.back-link {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #36a473;
}

.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
}

.error {
  color: #e74c3c;
}
</style>
