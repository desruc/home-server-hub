/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "./postcss.config";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    envDir: "./env",
    plugins: [react()],
    css: {
      postcss
    }
  });
};
