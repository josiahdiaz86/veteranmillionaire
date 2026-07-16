import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens — see BRAND CONTEXT. Keep these as the single source
        // of truth for color; do not use raw hex values in components.
        navy: {
          DEFAULT: "#0B1E33",
          50: "#EAEEF3",
          100: "#CBD5E1",
          200: "#94A6BD",
          300: "#5D7898",
          400: "#33506F",
          500: "#0B1E33",
          600: "#091A2C",
          700: "#071522",
          800: "#050F19",
          900: "#030A11",
        },
        offwhite: {
          DEFAULT: "#F7F4EE",
          100: "#FFFFFF",
          200: "#F7F4EE",
          300: "#EFEAE0",
          400: "#E3DBCB",
        },
        green: {
          DEFAULT: "#4A5D4E",
          50: "#EEF1EE",
          100: "#D6DED7",
          200: "#AEBDB1",
          300: "#869C8A",
          400: "#647B69",
          500: "#4A5D4E",
          600: "#3B4A3F",
          700: "#2C3830",
          800: "#1D2520",
          900: "#0F1310",
        },
        charcoal: {
          DEFAULT: "#1E2328",
          50: "#EBECED",
          100: "#C7CACD",
          200: "#9EA3A8",
          300: "#757C83",
          400: "#4C555E",
          500: "#1E2328",
          600: "#191D21",
          700: "#131619",
          800: "#0D0F11",
          900: "#060708",
        },
        brass: {
          DEFAULT: "#B08D57",
          50: "#F8F2E8",
          100: "#EEDFC4",
          200: "#DFC599",
          300: "#D0AB6E",
          400: "#C09950",
          500: "#B08D57",
          600: "#8C6E40",
          700: "#684F30",
          800: "#443420",
          900: "#221A10",
        },
        alert: {
          DEFAULT: "#B3261E",
          50: "#FBEAE9",
          100: "#F2C4C1",
          200: "#E4938D",
          300: "#D4645C",
          400: "#C33F35",
          500: "#B3261E",
          600: "#8F1E18",
          700: "#6B1712",
          800: "#470F0C",
          900: "#240806",
        },
      },
      fontFamily: {
        headline: ["var(--font-headline)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "container-vm": "1200px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        vm: "0.75rem",
      },
      boxShadow: {
        "vm-card": "0 2px 10px 0 rgb(11 30 51 / 0.08)",
        "vm-card-hover": "0 8px 24px 0 rgb(11 30 51 / 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
