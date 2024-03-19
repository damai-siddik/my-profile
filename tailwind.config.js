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
      // 'sans': 'Mulish, sans-serif',
      'sans': 'Shantell Sans, sans-serif'
    },
    extend: {
      colors: {
        primary: `var(--color-primary)`,
        mono: `var(--body-color)`,
        letter: `var(--text-color)`,
        title:  `var(--title-color)`,
        lighter: `var(--first-color-lighter)`,
        "second-lighter": "var(--text-color-light)",
        second: `var(--first-color-second)`,
      },
      boxShadow: {
        modal: '0 -1px 4px rgba(0,0,0,.15)',
        chat: "0px 16px 24px 0px rgba(96, 97, 112, 0.16), 0px 2px 8px 0px rgba(40, 41, 61, 0.04)",
      },
      animation: {
        fly: 'fly 8s infinite',
      },
      keyframes: {
        fly: {
          "0%": {
            transform: 'translateY(10%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          "100%": {
            transform: 'translateY(-180%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}

