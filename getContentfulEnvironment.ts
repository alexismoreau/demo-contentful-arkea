/**
 * This file is used to generate types from contentful, using space, environment and access token.
 * See https://www.npmjs.com/package/contentful-typescript-codegen
 * Check README section "Generate types from Contentful" for more information.
 */

import contentful from 'contentful-management';
import type { EnvironmentGetter, ContentfulEnvironment } from 'contentful-typescript-codegen';
import 'dotenv/config';

const {
  CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_ENVIRONMENT,
} = process.env;

if (
  !CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN ||
  !VITE_CONTENTFUL_SPACE_ID ||
  !VITE_CONTENTFUL_ENVIRONMENT
) {
  throw new Error(
    'Please provide CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID and CONTENTFUL_ENVIRONMENT',
  );
}

console.log(
  `You have selected ${VITE_CONTENTFUL_ENVIRONMENT} environment in ${VITE_CONTENTFUL_SPACE_ID} space.`,
);

const getContentfulEnvironment: EnvironmentGetter = () => {
  const contentfulClient = contentful.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(VITE_CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(VITE_CONTENTFUL_ENVIRONMENT)) as Promise<ContentfulEnvironment>
}

export default getContentfulEnvironment;
