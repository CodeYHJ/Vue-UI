// vite.config.js
// import { myResolver } from "./scripts/myResolver";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  configureWebpack: config => {
    config.resolve.alias["@"] = path.resolve(__dirname, "./components");

    config.entry.app = path.resolve(__dirname, "./site/main.ts");
  }
  // resolvers: [myResolver],
  // cssPreprocessOptions: {
  //   less: {
  //     globalVars: {
  //       "@main-color-light": "#7ab8ff",
  //       "@main-color-primary": "#268aff",
  //       "@main-color-dark": "#0068e1",
  //       "@fun-color-danger": "#fa5c65",
  //       "@fun-color-warn": "#fd9a28",
  //       "@fun-color-success": "#37dc94",
  //       "@neutral-color-title": "#0f0f0f",
  //       "@neutral-color-content": "rgba(15, 15, 15, 0.75)",
  //       "@neutral-color-sub": "rgba(15, 15, 15, 0.55)",
  //       "@neutral-color-disabled": "rgba(15, 15, 15, 0.35)",
  //       "@neutral-color-border": "rgba(15, 15, 15, 0.15)",
  //       "@neutral-color-background": "rgba(15, 15, 15, 0.05)",
  //       "@box-shadow": "0 2px 8px #f0f1f2",
  //     }
  //   }
  // }
};
