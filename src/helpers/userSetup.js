const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const fs = require("fs");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  const altCheckbox = require('./alt-markdown-it-task-checkbox.js');
  altCheckbox(md);
  
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  // Render on first-request

  /**
   * demo-eleventy-severless
   */
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
		name: "serverless",
		functionsDir: "./netlify/functions/",
		redirects: "netlify-toml-builders",
	});

	// Fully dynamic template for comparison
	eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
		name: "dynamic",
		functionsDir: "./netlify/functions/",
		redirects: "netlify-toml-functions",
	});

	// testing
	eleventyConfig.addFilter("dateDebug", inputPath => {
		return fs.statSync(inputPath);
	})

  /**
   * demo-eleventy-severless-oauth
   */
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
