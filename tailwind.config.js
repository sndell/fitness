/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './components/ui/**/*.{js,jsx,ts,tsx}',
    './features/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      textColor: {
        secondary: '#b3b3b3',
        primary: '#0c0c0c',
      },
      backgroundColor: {
        background: '#f5f5f5',
        primary: '#ffffff',
        bar: '#f5f5f5',
      },
      borderColor: {
        primary: '#F3F3F3',
      },
      fontFamily: {
        'nunito-light': ['Nunito_300Light'],
        'nunito-regular': ['Nunito_400Regular'],
        'nunito-medium': ['Nunito_500Medium'],
        'nunito-semibold': ['Nunito_600SemiBold'],
        'nunito-bold': ['Nunito_700Bold'],
      },
    },
  },
  plugins: [],
};
