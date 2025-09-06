import { reactive } from 'vue';

export const store = reactive({
  locale: 'en', // Default locale
  setLocale(newLocale) {
    this.locale = newLocale;
  }
});
