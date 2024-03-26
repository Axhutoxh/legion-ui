import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "pack-to-ui",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: "css/style.css",
      failOnError: true,
    }),],
});