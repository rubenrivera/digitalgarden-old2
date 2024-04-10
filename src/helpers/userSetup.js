const { EleventyI18nPlugin, EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
// Translations
const i18n = require('eleventy-plugin-i18n');
const translations = require('../site/_data/i18n.js');

const fs = require("fs");

/**
 * Checkbox mark (character inside square brackets)
 * @typedef {string} checkboxMark
 */
/**
 * Checked status of a checkbox, true = checked, false = unchecked.
 * @typedef {boolean} checkboxStatus
 */
/**
 * Checkbox specification
 * @typedef {Array.<checkboxMark,checkboxStatus>} checkboxSpec
 */

/**
 * Alternate checkbox checked values
 * Checkbox marks taken from the Kepano's Minimal Theme for Obsidian
 * @type {checkboxSpec[]}
 */
const values = [
  // [' ', false],
  // ['\u00A0', false],// non-breaking space
  // ['x', true],
  ['/', true],
  ['-', true],
  ['>', true],
  ['<', true],
  ['?', true],
  ['!', true],
  ['*', true],
  ['"', true],
  ['i', true],
  ['l', true],
  ['b', true],
  ['S', true],
  ['I', true],
  ['p', true],
  ['c', true],
  ['f', true],
  ['k', true],
  ['w', true],
  ['u', true],
  ['d', true],
];
function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  const altCheckbox = require('./alt-markdown-it-task-checkbox.js');
  const options = {
		disabled: true,
		divWrap: true,
		divClass: 'checkbox',
		idPrefix: 'cbx_',
		ulClass: 'task-list',
		liClass: 'task-list-item',
    altCheckboxes: {
      regex: testRegEx(values),
      values: values
    }
	};
  // console.log(options.altCheckboxes.regex);
  altCheckbox(md, options);
  
}
/**
 * @param {string[][]} values Pair of checked marks and status (true = checked, false = unchecked)
 */
function testRegEx(values){
  const str = values.map(e =>
    ['/','-','?','*','+','^','.','$','^']
    .includes(e[0]) ? '\\' + e[0] : e[0])
    .join('');
  const regex = new RegExp(`^\\\[([${str}])\\\][ \u00A0]`);
  return regex;
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
 
  if(process.env.ELEVENTY_ENV === 'dev'){
    eleventyConfig.ignores.add("src/site/notes/lists");
    eleventyConfig.ignores.add("src/site/notes/posts");
    eleventyConfig.ignores.add("src/site/notes/references");
    eleventyConfig.ignores.add("src/site/notes/seedbox");    
  }

  /**
   * Internationalization (I18n)
   */
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: process.env.SITE_MAIN_LANGUAGE || 'en', // Required

    // Rename the default universal filter names
		filters: {
			// transform a URL with the current page’s locale code
			url: "locale_url",

			// find the other localized content for a specific input file
			links: "locale_links",
		},

		// When to throw errors for missing localized content files
		// errorMode: "strict", // throw an error if content is missing at /en/slug
		errorMode: "allow-fallback", // only throw an error when the content is missing at both /en/slug and /slug
		// errorMode: "never", // don’t throw errors for missing content
  });

eleventyConfig.addPlugin(i18n, { 
  translations,
  fallbackLocales: {
    '*' : 'es'
  }
});

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

  /**
   * demo-eleventy-severless-oauth
   */
	eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
		name: "auth",
		functionsDir: "./netlify/functions/",
		redirects: "netlify-toml-functions",
	});
	// testing
	eleventyConfig.addFilter("dateDebug", inputPath => {
		return fs.statSync(inputPath);
	})


}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
