/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          light: '#FFE5B4',
          DEFAULT: '#FFE5B4',
        },
        'vibrant-orange': {
          DEFAULT: '#FF4500',
          dark: '#E63E00',
        }
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
    },
  },
  plugins: [],
};