import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  plugins: [
    tailwindcss("./styles/tailwind.config.ts"),
    autoprefixer
  ]
};

export default config;
