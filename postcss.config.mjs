import { createRequire } from "module";
const require = createRequire(import.meta.url);

const config = {
  plugins: [
    "@tailwindcss/postcss", // v4 এর জন্য এটি সঠিক প্লাগইন
  ],
};

export default config;
