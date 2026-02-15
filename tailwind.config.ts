import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          DEFAULT: "var(--beige)",
          light: "var(--beige-light)",
          dark: "var(--beige-dark)",
        },
        "blue-gray": {
          DEFAULT: "var(--blue-gray)",
          light: "var(--blue-gray-light)",
          dark: "var(--blue-gray-dark)",
        },
        navy: {
          DEFAULT: "var(--navy)",
          light: "var(--navy-light)",
          dark: "var(--navy-dark)",
        },
        muted: "var(--text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
