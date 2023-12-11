import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },

  defaultCommandTimeout: 8000,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
