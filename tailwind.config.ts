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
        background: "#0a0a0f",
        "card-glass": "#1a1a2e",
        "primary-accent": "#6366f1",
        border: "#ffffff10",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)",
        "gradient-indigo": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        "gradient-emerald": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "gradient-red": "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        "gradient-blue": "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
