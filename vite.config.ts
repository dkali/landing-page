import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  plugins: [solidStart(), tailwindcss(), nitro()],
  nitro: {
    preset: "netlify"
  }
});
