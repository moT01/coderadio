import babel from "rollup-plugin-babel";
// import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

// import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    format: "cjs",
    file: "dist/index.js"
  },
  external: [
    "react",
    "react-device-detect",
    "nchan",
    "prop-types",
    "react-hotkeys"
  ],
  plugins: [
    resolve(),
    postcss({
      extract: "dist/styles.css"
    }),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
