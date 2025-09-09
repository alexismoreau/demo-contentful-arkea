import { createClient } from 'contentful';

if(!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful space ID and access token are required. Have you created a .env file ?');
}

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
  host: 'preview.contentful.com'
});

export default client;
