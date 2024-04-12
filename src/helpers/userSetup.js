const { EleventyI18nPlugin, EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  const {values, testRegExp} = require('./alternate-checkboxes/index.js');
  const altCheckbox = require('./alternate-checkboxes/alt-markdown-it-task-checkbox.js');
  const options = {
		disabled: true,
		divWrap: true,
		divClass: 'checkbox',
		idPrefix: 'cbx_',
		ulClass: 'task-list',
		liClass: 'task-list-item',
    altCheckboxes: {
      regex: testRegExp(values),
      values: values
    }
	};
  // console.log(options.altCheckboxes.regex);
  altCheckbox(md, options);
  
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
