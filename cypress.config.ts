import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			
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
