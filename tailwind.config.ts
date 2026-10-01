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
        obsidian: "#0B131F",
        charcoal: "#1E293B",
        teal: "#0D9488",
        mint: "#10B981",
        amber: "#F59E0B",
        clinical: "#F8FAFC",
        mutedslate: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundColor: {
        DEFAULT: "#0B131F",
      },
    },
  },
  plugins: [],
};

export default config;
