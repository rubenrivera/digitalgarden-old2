const { EleventyI18nPlugin, EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

// Translations
function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  /**
   * Internationalization
   */
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'es',
    errorMode: 'allow-fallback'
  });
  /**
   * Serverless
   */
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "authorization",
    functionsDir: "./netlify/functions/",
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
