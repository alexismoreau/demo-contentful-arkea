<template>
  <div class="container">
    <header>
      <h1>{{ props.website }}'s Blog</h1>
      <p>A demo showing how to fetch and display content from Contentful using tags, locales and differents countries.</p>
    </header>

    <main>
      <div v-if="loading" class="loading">Loading posts...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="posts.length === 0" class="no-posts">No posts found for the selected filter.</div>
      <div v-else class="posts">
        <article v-for="post in posts" :key="post.sys.id" class="post-summary">
          <router-link :to="{ name: 'BlogPost', params: { id: post.sys.id } }">
            <h2>{{ post.fields.title }}</h2>
            <p>{{ post.fields.excerpt || 'No excerpt available' }}</p>
          </router-link>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import contentfulClient from '../contentful';
import { store } from '../store';

const props = defineProps({
  website: {
    type: String,
    default: '',
  },
});

const posts = ref([]);
const loading = ref(true);
const error = ref(null);
const activeFilter = ref('all');

const fetchPosts = async () => {
  try {
    loading.value = true;
    const query = {
      content_type: 'blogPost',
      order: '-fields.website',
      locale: store.locale,
      'fields.website[in]': ['.common', props.website],
      // limit: 1,
    };

    const response = await contentfulClient.getEntries(query);

    posts.value = response.items;
    console.log({ items: response.items });
  } catch (err) {
    console.error('Error fetching posts:', err);
    error.value = 'Failed to load posts. Check your Contentful configuration and tags.';
  } finally {
    loading.value = false;
  }
};

const setFilter = (filter) => {
  activeFilter.value = filter;
  fetchPosts();
};

onMounted(fetchPosts);

watch(() => store.locale, fetchPosts);
watch(() => props.website, fetchPosts);
</script>

<style scoped>
.container {
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  color: #42b983;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

.filters button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.filters button.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

.posts {
  display: grid;
  gap: 25px;
}

.post-summary {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.post-summary:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.12);
}

.post-summary a {
  text-decoration: none;
  color: inherit;
}

.post-summary h2 {
  margin: 0 0 10px;
  color: #2c3e50;
}

.post-summary p {
  color: #555;
}

.loading, .error, .no-posts {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
}

.error {
  color: #e74c3c;
}
</style>
