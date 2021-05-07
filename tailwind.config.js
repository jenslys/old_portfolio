const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        autoscale: "repeat(auto-fit, minmax(75px, 1fr))",
        autoscale_small: "repeat(auto-fit, minmax(35px, 1fr))",
      },
      colors: {
        teal: colors.teal,
        "notion-default": "#E6E6E5",
        "notion-gray": "#D7D7D6",
        "notion-brown": "#E9D6CF",
        "notion-orange": "#FEE0D2",
        "notion-yellow": "#FBEED5",
        "notion-green": "#D4E8E2",
        "notion-blue": "#D3E4F9",
        "notion-purple": "#E1D5FA",
        "notion-pink": "#E4BFD0",
        "notion-red": "#FFD4D4",
      },
      spacing: {
        0.5: "0.6px",
        "50px": "50px",
        "100px": "100px",
        "200px": "200px",
        "250px": "250px",
        "270px": "270px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "600px": "600px",
        "full-10": "10%",
        "full-20": "20%",
        "full-30": "30%",
        "full-80": "80%",
        "full-85": "85%",
        "full-90": "90%",
        "full-110": "110%",
        "full-120": "120%",
        "full-150": "150%",
      },
      zIndex: {
        "-10": -10,
        60: 60,
        100: 100,
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
        "spin-slow-42": "spin 42s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-hover", "active"],
      rotate: ["group-hover"],
      scale: ["group-hover", "active"],
      borderColor: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-css-filters"),
  ],
};
