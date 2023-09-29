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
          4: "#A220CF" 
        },
        secondary: {
          0: "#C4C4C4", 
          1: "#979797",
          2: "#CCCCCC", 
          3: "#A0A0A0", 
          4: "#D9D9D9",
          5: "#666666"
        },
        errorColor: {
          0: "#A80000"
        }
      },

      boxShadow: {
        "custom-shadow": "0 1px 18px 0 rgba(0, 0, 0, 0.12)",
        "custom-shadow2": "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
      },
    },
  },
  plugins: [],
};
