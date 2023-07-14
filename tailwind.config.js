/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      screens: {
        'md': '1050px',
        // => @media (min-width: 992px) { ... }
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
       },
    },
  },
  plugins: [],
}