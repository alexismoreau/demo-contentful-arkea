<template>
  <div class="language-switcher">
    <select v-model="selectedLocale" @change="changeLocale">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <!-- Add other locales as needed -->
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store';

const selectedLocale = ref(store.locale);

const changeLocale = () => {
  store.setLocale(selectedLocale.value);
};
</script>

<style scoped>
.language-switcher {
  margin-bottom: 20px;
  text-align: right;
}

select {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 1rem;
}
</style>
