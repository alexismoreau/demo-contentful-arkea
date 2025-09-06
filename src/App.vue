<template>
  <div id="app">
    <LanguageSwitcher />
    <BlogSwitcher />
    <router-view />
  </div>
</template>

<script setup>
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import BlogSwitcher from './components/BlogSwitcher.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: black;
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

h1 {
  color: #42b983;
  margin: 0 0 10px;
}

.posts {
  display: grid;
  gap: 20px;
}

.post {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

h2 {
  margin: 0 0 10px;
  color: #2c3e50;
}

.error {
  color: #e74c3c;
  padding: 10px;
  background: #fde8e8;
  border-radius: 4px;
}
</style>
