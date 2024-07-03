import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backLuxury: "url('/handLuxury.png')",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "2560px",
        laptop: "1440px",
        largeLaptop: "2160px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        smallLaptop: "1150px",
        xl: "1280px",
        xs: "350px",
      },
    },
  },
  plugins: [],
};
export default config;
