/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "#00635B",
          1: "#D0F7FA",
          2: "#087B2F",
          3: "#9C4DE2", 
        },
        secondary: {
          0: "#C4C4C4",
          1: "#979797",
          2: "#CCCCCC",
          3: "#A0A0A0"
        },
        errorColor: {
          0: "#A80000"
        }
      },

      boxShadow: {
        "custom-shadow": "0 1px 18px 0 rgba(0, 0, 0, 0.12)",
        "custom-shadow2": " 0px 10px 30px 0px rgba(0, 60, 104, 0.15)",
      },
    },
  },
  plugins: [],
};
