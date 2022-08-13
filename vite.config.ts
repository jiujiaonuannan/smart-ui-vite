import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocess";

// https://vitejs.dev/config/

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartUI",
      fileName: "smart-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
});
