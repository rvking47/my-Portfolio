/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#effaf5',
        darkHover: '#202924',
        darkTheme: '#111714',
      },
      fontFamily: {
        Outfit: ["var(--font-outfit)", "sans-serif"],
        Ovo: ["var(--font-outfit)", "sans-serif"]
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
