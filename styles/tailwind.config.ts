
type Config = any;

const config: Config = {
  content: [
    "../app/**/*.{js,ts,jsx,tsx,mdx}",
    "../lib/**/*.{js,ts,jsx,tsx,mdx}",
    "../styles/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro",
          "sans-serif"
        ]
      },
      colors: {
        background: {
          DEFAULT: "#0F0F12",
          elevated: "#1D1D24",
          overlay: "#222229"
        },
        surface: {
          card: "#17171C",
          elevated: "#1D1D24",
          overlay: "#222229"
        },
        text: {
          primary: "#F4F4F6",
          secondary: "#B8AEB6",
          tertiary: "#8E8593"
        },
        accent: {
          blush: {
            DEFAULT: "#D6A4B4",
            hover: "#E0B5C4",
            pressed: "#C69AA4"
          },
          platinum: {
            DEFAULT: "#C9A227",
            hover: "#D4AD3A"
          }
        },
        state: {
          error: "#E06A6A",
          success: "#7BD389",
          warning: "#F4B860"
        },
        border: {
          subtle: "rgba(244, 244, 246, 0.06)",
          DEFAULT: "rgba(244, 244, 246, 0.1)",
          strong: "rgba(244, 244, 246, 0.15)"
        }
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
        sm: "0 2px 4px -1px rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.3)",
        DEFAULT: "0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
        md: "0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
        lg: "0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 4px 8px -4px rgba(0, 0, 0, 0.5)",
        xl: "0 20px 40px -8px rgba(0, 0, 0, 0.7), 0 8px 16px -8px rgba(0, 0, 0, 0.6)",
        "2xl": "0 24px 48px -12px rgba(0, 0, 0, 0.8), 0 12px 24px -12px rgba(0, 0, 0, 0.7)",
        inner: "inset 0 1px 0 0 rgba(255, 255, 255, 0.03)"
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        full: "9999px"
      },
      transitionDuration: {
        fast: "150ms",
        DEFAULT: "250ms",
        slow: "350ms"
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px"
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.011em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.18em"
      },
      animation: {
        "fade-in": "fadeIn 350ms ease-out",
        "slide-in-bottom": "slideInBottom 250ms ease-out",
        shimmer: "shimmer 2s infinite"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideInBottom: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: [],
};

export default config;
