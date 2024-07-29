/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(238, 40%, 52%)",
          red: "hsl(358, 79%, 66%)",
          lightblue: "hsl(239, 57%, 85%)",
          lightred: "hsl(357, 100%, 86%)",
        },
        neutral: {
          darkblue: "hsl(212, 24%, 26%)",
          grayblue: "hsl(211, 10%, 45%)",
          lightgray: "hsl(223, 19%, 93%)",
          verylightgray: "hsl(228, 33%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontSize: {
        paragraph: "16px",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        "rubik-normal": 400,
        "rubik-medium": 500,
        "rubik-bold": 700,
      },
      flexShrink: {
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [],
};
