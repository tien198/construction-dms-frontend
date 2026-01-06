import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log(env);

  return {
    plugins: [react(), tailwindcss()],
    clearScreen: true,
    server: {
      open: true,
    },
  };
});
