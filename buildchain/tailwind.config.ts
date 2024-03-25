/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../src/templates/**/*.{twig,html}',
    './src/vue/**/*.{vue,html}',
  ],
  blocklist: [
    'static',
  ],
  theme: {},
  plugins: [],
};
