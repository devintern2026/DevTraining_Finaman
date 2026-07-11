/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Neutral backgrounds
        // Neutral backgrounds
        base: {
          0:   "#FFFFFF",
          50:  "#F1F5F9",   // clean slate gray base
          100: "#E2E8F0",
        },
        // Ink / text scale
        ink: {
          900: "#0F172A",   // deep charcoal
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          405: "#64748B",
          400: "#94A3B8",
          200: "#E2E8F0",
        },
        // Border / divider
        line: {
          200: "#E2E8F0",
          300: "#CBD5E1",
        },
        // Primary — StrategicERP Royal Blue
        primary: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#1654C5",   // StrategicERP Royal Blue
          700: "#1D4ED8",
          800: "#1E40AF",
        },
        // Accent - StrategicERP Orange
        accent: {
          50:  "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F15A24",   // Strategic ERP Orange
          600: "#EA580C",
          700: "#C2410C",
        },
        brass: {
          300: "#E3C692",
          400: "#D1A25E",
          500: "#B8863B",
          600: "#96692B",
        },
        // Status colors
        success: {
          50:  "#F0FDF4",
          100: "#DCFCE7",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
        },
        warning: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          500: "#F59E0B",
          605: "#D97706",
        },
        danger: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
        },
        // Sidebar — white + blue active (StrategicERP style)
        sidebar: {
          bg:         "#FFFFFF",
          border:     "#E2E8F0",
          hover:      "#EFF6FF",
          active:     "#1654C5",
          activeBg:   "#EFF6FF",
          text:       "#475569",
          textActive: "#1654C5",
        },
      },
      fontFamily: {
        display: ["'Newsreader'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(18, 21, 28, 0.04), 0 8px 24px -12px rgba(18, 21, 28, 0.10)",
        xs:    "0 1px 2px rgba(0,0,0,0.04)",
        card:  "0 1px 4px rgba(22,84,197,0.05), 0 1px 2px rgba(0,0,0,0.04)",
        md:    "0 4px 12px rgba(22,84,197,0.08), 0 2px 4px rgba(0,0,0,0.04)",
        lg:    "0 10px 24px rgba(22,84,197,0.10), 0 4px 8px rgba(0,0,0,0.04)",
        glow:  "0 0 20px rgba(22,84,197,0.15)",
        inner: "inset 0 1px 3px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        sm:  "6px",
        DEFAULT: "8px",
        md:  "10px",
        lg:  "12px",
        xl:  "16px",
        "2xl": "20px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -8px)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-8px, 6px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        expandDown: {
          "0%":   { opacity: 0, maxHeight: "0px" },
          "100%": { opacity: 1, maxHeight: "480px" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scaleIn: {
          "0%":   { opacity: 0, transform: "scale(0.96)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        ping1: {
          "0%": { transform: "scale(1)", opacity: 0.7 },
          "80%, 100%": { transform: "scale(1.9)", opacity: 0 },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        driftSlow: "driftSlow 9s ease-in-out infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        fadeUp:     "fadeUp 0.22s ease-out both",
        expandDown: "expandDown 0.25s ease-out both",
        shimmer:    "shimmer 1.8s linear infinite",
        scaleIn:    "scaleIn 0.18s ease-out both",
        ping1: "ping1 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #1654C5 0%, #1d4ed8 50%, #1e3a8a 100%)",
        "primary-soft":     "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        "card-gradient":   "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
