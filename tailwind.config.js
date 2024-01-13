/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'borderHeader': "#B91BBC",
        'body-color-blackDark': "#110F0F",
        'body-color-blackLight': "#262127",
        'Whiter': "#F8F2F2",
        'text-color-purpleDark': "#B92DB3",
        'text-color-purpleLight': "#D740E4",
        'form-box-color': "#423D3D",
        'form-text-color': "#BFB7B7",
      },
      fontFamily: {

      },
  },
  plugins: [],
}

