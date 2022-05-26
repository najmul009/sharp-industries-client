module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        experstheme: {
          primary: "#FFC815",
          secondary: "#1B1B1B",
          accent: "#3A4256",
          neutral: "#2eaed3",
          "base-100": "#ffffff",
          "me-100":"#000000"
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],

}
