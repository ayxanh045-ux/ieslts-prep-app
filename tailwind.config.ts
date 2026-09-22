import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lingo: {
          green: "#58CC02",
          "green-dark": "#46A302",
          "green-light": "#D7FFB8",
          blue: "#1CB0F6",
          "blue-dark": "#1899D6",
          "blue-light": "#DDF4FF",
          amber: "#FF9600",
          "amber-dark": "#E68600",
          red: "#FF4B4B",
          "red-dark": "#EA2B2B",
          "red-light": "#FFDFE0",
          purple: "#CE82FF",
          gray: "#E5E5E5",
          "gray-dark": "#AFAFAF",
          card: "#FFFFFF",
          border: "#E5E5E5",
        },
      },
      boxShadow: {
        "lingo": "0 4px 0 0 rgba(0,0,0,0.15)",
        "lingo-active": "0 1px 0 0 rgba(0,0,0,0.15)",
        "lingo-green": "0 4px 0 0 #46A302",
        "lingo-blue": "0 4px 0 0 #1899D6",
        "lingo-amber": "0 4px 0 0 #E68600",
        "lingo-red": "0 4px 0 0 #EA2B2B",
        "lingo-purple": "0 4px 0 0 #A855F7",
        "lingo-gray": "0 4px 0 0 #D4D4D8",
      },
    },
  },
  plugins: [],
};
export default config;
