/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pureBlack: "#0C1712",
        pureGray: "#929292",
        yellow: "#F3BA00",
        mediumGray: "#F7F8FA",
        green: "#1AC073",
      },
      fontFamily: {
        'sfPro': ['SF Pro Text', 'sans-serif'],
      },
      borderRadius: {
        "ten": "10px"
      },
      boxShadow: {
        "thin": "0px 0px 1px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}