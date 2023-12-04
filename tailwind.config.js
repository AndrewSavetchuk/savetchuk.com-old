import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        transparent: "transparent",
        neutral: {
          100: "#F5F5F5",
          200: "#D9D9D9",
          250: "#A9A9A9",
          300: "#808080",
          400: "#424242",
          500: "#272727",
          600: "#121212",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    lineHeight: {
      tight: "1.2",
      normal: "1.5",
    },
    screens: {
      xxs: "375px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    textAlign: {
      left: "right",
      center: "right",
      right: "right",
    },
  },

  plugins: [forms],
};
