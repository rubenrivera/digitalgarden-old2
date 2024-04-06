---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-10536.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-10536/","title":"PLACEHOLDER - Obsidian Digital Garden plus Eleventy Serverless OAuth demo","hide":true,"noteIcon":"default","created":"2024-04-03T12:20:11.702-06:00","updated":"2024-04-05T16:43:26.611-06:00"}
---

# PLACEHOLDER - Obsidian Digital Garden plus Eleventy Serverless OAuth demo

<!-- thumbnail: https://example.com/some-image.png -->
<!-- version: 1.0 -->
<!-- tag: website -->
<!-- excerpt: Demo of Obsidian Digital Garden plus Eleventy Serverless OAuth -->

## Screenshot / Code Snippet

[![Stack Overflow user infortion displayed on Obisidian Digital Garden plugin plus Eleventy Serverless generated webpage][1]][1]

## About

This is a *proof of concept* / "minimal, complete, verifiable example" of adding the Eleventy Serverless plugin to an instance of Obisidian Digital Garden's (ODG) template repo for using a Stack Overflow account to **log in**.

ODG is a community plugin for [Obsidian](https://obsidian.md), a cross-platform note-taking app that uses markdown for note files.

### License

TBD

### Download

- Website: https://demo-dg-oauth.netlify.app
- GitHub Repository: https://github.com/rubenrivera/demo-dg-oauth

### Platform

Web Browsers: Chrome, Firefox, Safari. Other web browsers like Brave and Edge might work too.

## Contact

I created this app using several tools.

## Code

- GitHub
- Netlify
- Eleventy
- Node.js
- Nunjucks
- JavaScript
- HTML
- SCSS
- CSS
- SVG

## Highlights

The repository https://github.com/rubenrivera/demo-dg-oauth could be forked, but if you want to do "from scratch", below are the "not so broad" steps:

1. Deploy a site using the **Deploy to Netlify** button from the **Obsidian Digital Garden** community plugin documentation. If you want to run this from anywhwere, grab the site URL.
2. Register the app on stackapps.com. Get the **client ID**, **client secret**, and **key**. For local development/testing, set **localhost** as the OAuth domain.
3. Add the **client id**, **client secret** and **key** from the previous step as environment variables to the site settings on Netlify.
4. Add the Eleventy Serverless plugin to `userSetup.js`
5. Add the authentication files from the Eleventy Serverless OAuth demo (`Netlify/functions/dynamic/index.js`, `Netlify/functions/Utils/*`, `Netlify/functions/auth-before.js` and `Netlify/functions/auth-callback.js`)
6. Add `index.njk` and `secure.njk` from the Eleventy Serverless OAuth demo to `/src/site/`.
7. Edit the files from the previous steps.
8. Edit `.gitignore` and `netlify.toml`.
9. Install the modules required by the Eleventy Serverles  OAuth demo (`cookie`, `simple-outh2` and `node-fetch`). Tip use  `npm ci` instead of `npm install` / `npm i`.
10. To run locally, install `netlify-cli`, then run `netlify link` once to run the serverless functions on Netlify servers. Then run `netlify dev` on the project root directory to build and run a local web hosting server. Wait for the **Netlify CLI** to give a message including the URL to be used, i.e., `http://localhost:8888`.
    - I used Chrome for testing locally. Safari blocks cookies despite setting a Safari profile to allow cookies and tracking. My other Safari profiles with no settings changes related to cookies / privacy work fine when opening the website from the Netlify servers.
11. [Workaround] An error occurs when the Serverless function tries to write the favicon using the ODG `src/site/_includes/layouts/index.njk` / `src/site/_includes/layouts/note.njk` templates for `src/site/index.njk` and `src/site/secure.njk`. Edit `/src/site/_includes/components/pageheader.njk` to add a condition to "favicons" run only on the build phase (not when generating pages by the Serverless functions).
12. [Workaound] An error occurs when the dynamic Serverless function tries to parse markdown notes, including images. Added the parts of `.eleventy.js` and the  property copy `{from: ".cache", to: "tmp/.cache" }` to `netlify/functions/dynamic/index.js

# Issues

- I am having problems testing the dynamic serverless functions locally. I have not found how to reproduce an error thrown by the deployment process to the production run by Netlify with the "basic" local development environment. I think that I might have to use a local user without writing permissions to the local directory `/dist` and use it to `netlify dev`. 

# Related

## Other posts from me
- https://stackapps.com/q/10533/105187
- https://stackapps.com/q/10534/105187

## Other websites that use Stack Overflow / Stack Exchange OAuth

- https://stackapps.com/q/7661/105187

# Update

1. Moved `index.njk` and `secure.njk` to src/site/dynamic directory.
2. Moved login/logout buttons to a custom component for the header slot.
3. Moved "References" section to a custom component for the `afterContent` slot.
4. Added notes from the Obsidian Digital Garden plugin repository's test vault.
5. Added cookie consent by adapting a few files taken from https://github.com/osano/cookieconsent.


  [1]: https://i.stack.imgur.com/O4QXL.png

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/10536\|https://stackapps.com/q/10536]]

