module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: "40em",
      md: "48em",
      lg: "64em",
      xl: "80em",
      "2xl": "96em",
    },
    extend: {
      colors: {
        gray: {
          "primary": "#242424",
          "dark": "#1B1B1B",
          "hover": "#404040",
        },
        blue: {
          "image": "#194bff",
          "link": "#578fff",
          "hover": "#3863ff",
        }
      },
      maxWidth: {
        xxs: "14rem",
        "list-red": "300px",
        "list-small": "240px",
      },
      minHeight: {
        reading: "5.5rem",
        "form-link": "28rem",
        "screen-navbar": "calc(100vh - 3.5rem)"
      },
      spacing: {
        navbar: "3.5rem",
        "screen-navbar": "calc(100vh - 3.5rem)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
