export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#111521',
        'light-text': '#ffffff',
        'primary': '#77A6D0',
        'secondary': '#FEAC25',
        'success': '#4CAF4F',
        'error': '#F44336',
        'warning': '#FFC107',
      },
    },
  },
  plugins: [],
}
