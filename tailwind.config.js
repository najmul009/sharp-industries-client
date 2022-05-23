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
          primary: "#FDB913",
          secondary: "#1B1B1B",
          accent: "#3A4256",
          neutral: "#2eaed3",
          "base-100": "#ffffff",
          "order-100":""
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],

}
