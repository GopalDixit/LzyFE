const withMT = require("@material-tailwind/react/utils/withMT");
 
 module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {height: {
      '100': '25rem', // You can adjust the value as needed
    },
    width: {
      '100': '25rem', // You can adjust the value as needed
    },
    margin: {
      '100': '25rem', // You can adjust the value as needed
    },},
   },
   plugins: [],
 });