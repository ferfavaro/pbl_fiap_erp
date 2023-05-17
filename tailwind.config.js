/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundFormColor: "#151515",
        titleFormColor: "#feb806",
        buttonFormColor: "#fd8534",
        buttonFormWhiteColor: "#ffffff",
        buttonTextFormColor: "#fd8534",
        WhiteTextColor: "#ffffff",
        asideBgColor:'#2e2d2d',
        asideBgHoverColor:'#4e4e4e',
        blackTextColor:'#000',
        mainPageBgColor:'#d9d9d9',
        bgCardModules:'#ffffff'
      },
      fontFamily: {
        "montSerrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
