/** @type {import('tailwindcss').Config} */
// import colors from "./src/Definitions/colors"

module.exports = {
  content: [
    "./public/**/*.{html,tsx}",
    "./src/**/*.{html,tsx}",
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "435px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      'sans': 'Mulish, sans-serif',
    },
    extend: {
      colors: {
        primary: `var(--color-primary)`,
        mono: `var(--body-color)`,
        letter: `var(--text-color)`,
        title:  `var(--title-color)`,
        lighter: `var(--first-color-lighter)`,
        "second-lighter": "var(--text-color-light)",
      },
      boxShadow: {
        modal: '0 -1px 4px rgba(0,0,0,.15)',
      }
    },
  },
  plugins: [],
}

