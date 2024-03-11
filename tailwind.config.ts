import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DDDDDD', // Your custom blue color
        secondary: '#001F3F', // Your custom orange color
        accent:"#F7931A",// ... other custom colors
      },
    },
  },
  plugins: [],
};
export default config;
