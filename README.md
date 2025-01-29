# Next.js 15 useRouter Hook Issue in Dynamic Components

This repository demonstrates a potential issue with the `useRouter` hook in Next.js 15 when used within components that are not initially rendered on the page load.  Specifically, if the component containing `useRouter` is conditionally rendered or appears after a client-side navigation, it might cause unexpected navigation behavior or throw errors.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.  Notice the navigation works correctly.
5. Investigate the code to see how `useRouter` is implemented within a non-initial component.

## Solution

The solution involves ensuring that components using the `useRouter` hook are rendered on the initial page load or using alternative approaches for navigation within dynamically rendered content.  See the corrected `about.js` file for an example.