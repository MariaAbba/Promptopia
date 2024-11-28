/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@headlessui/react/**/*.js',
  ],

  theme: {
    extend: {
      colors: {
        green: '#63Ab45',
        orange: '#F7921E',
      },
      boxShadow: {
        xl: '0px 10px 60px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
