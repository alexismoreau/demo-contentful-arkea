# Contentful + Vue.js Demo

This is a demo application that shows how to connect a Vue.js application to Contentful, a headless CMS.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Contentful account (free tier available)

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your Contentful credentials:
   ```
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```
4. Make sure you have a content type called 'blogPost' in your Contentful space with at least these fields:
   - title (Text)
   - excerpt (Text)
   - content (Rich Text, optional)

## Running the App

```bash
# Development server
npm run dev

# Build for production
npm run build
```

## How It Works

This demo fetches blog posts from Contentful and displays them in a clean, responsive layout. The main components are:

- `App.vue`: The main component that fetches and displays posts
- `contentful.js`: Configuration for the Contentful client

## Customizing

To customize the content model or the display, you'll need to:

1. Update the content model in your Contentful space
2. Modify the `getEntries` query in `App.vue` to match your content type
3. Update the template to display your custom fields

## Learn More

- [Vue.js Documentation](https://vuejs.org/)
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful JavaScript SDK](https://github.com/contentful/contentful.js/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### GraphiQL

<https://app.contentful.com/spaces/kshk1kpa0b3y/environments/master/apps/app_installations/graphiql/>

```graphql
{
  blogPostCollection (locale: "en") {
    items {
      internalName
      title
      excerpt
    }
  }
}
```
