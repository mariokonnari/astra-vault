import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        panel: "rgba(12,16,36,0.7)",
        border: "rgba(148,163,184,0.18)",
        accent: "#8b5cf6",
        cyan: "#22d3ee",
      },
      boxShadow: {
        glow: "0 30px 80px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;