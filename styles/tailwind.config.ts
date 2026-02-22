
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
          default: "#0F0F12"
        },
        surface: {
          card: "#17171C"
        },
        text: {
          primary: "#F4F4F6",
          secondary: "#B8AEB6"
        },
        accent: {
          blush: "#D6A4B4",
          platinum: "#C9A227"
        },
        state: {
          error: "#E06A6A",
          success: "#7BD389"
        }
      }
    }
  },
  plugins: [],
};

export default config;
