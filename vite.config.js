import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 5173,

    // ⭐★ 加入這一段即可 ★⭐
    allowedHosts: [
      ".trycloudflare.com", // 允許 Cloudflare Tunnel 的所有臨時網址
    ],
  },
});
