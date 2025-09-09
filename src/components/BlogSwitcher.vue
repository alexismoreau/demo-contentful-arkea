<template>
  <nav class="blog-switcher">
    <router-link to="/">Common Blog</router-link>
    <router-link to="/arkea">Arkea Blog</router-link>
    <router-link to="/harley">Harley's Blog</router-link>
  </nav>
</template>

<style scoped>
.blog-switcher {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

.blog-switcher a {
  text-decoration: none;
  color: #2c3e50;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.blog-switcher a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}
</style>
