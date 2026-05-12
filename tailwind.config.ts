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
        vermillion: "#C8432A",
        ink: "#1A1714",
        paper: "#F7F4EF",
        ash: "#7A756E",
        stone: "#B8B2A8",
      },
    },
  },
  plugins: [],
};

export default config;
