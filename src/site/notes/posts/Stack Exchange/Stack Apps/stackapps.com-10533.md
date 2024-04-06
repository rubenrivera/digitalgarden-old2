---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-10533.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-10533/","title":"PLACEHOLDER - Jardín Digital de Rubén","hide":true,"noteIcon":"default","created":"2024-04-03T12:20:11.702-06:00","updated":"2024-04-05T16:43:26.640-06:00"}
---

# PLACEHOLDER - Jardín Digital de Rubén

<!-- thumbnail: https://i.stack.imgur.com/SQ1wx.png -->
<!-- version: 1.0 -->
<!-- tag: website -->
<!-- excerpt: Personal digital garden to include, among other things, a selection of questions and answers from Stack Exchange.  -->

## Screenshot / Code Snippet

[![https://i.stack.imgur.com/SQ1wx.png][1]][1]

## About

Jardín Digital de Rubén is a **digital garden** having Spanish as the primary language. Some notes might be written in English. 

One of the uses will be to publish drafts and slight changes to Stack Exchange questions and answers. It's "a companion" to Stack Exchange editor and chatrooms.

### License

TBD

### Download

URL: https://jardindigital.rubenrivera.mx

### Platform

Web browsers: Chrome, Firefox, Safari. Other browsers might work too (Brave, Edge)

## Contact

I created this website with the help of several tools. See the following section for details. 

## Code

Content is written using Markdown. The website is hosted in Netlify and linked to a private GitHub repository created from the Obsidian Digital Garden template.

- [Obsidian](https://obsidian.md) for Mac is used as the content editor, and the Obsidian Digital Garden plugin is used to publish markdown files and linked images to the web.
- The *Obsidian Digital Garden* template (ODGT) uses Eleventy. It is set to be deployed by default on [Vercel](https://vercel.com). Still, I used the automatic deployment to [Netlify](https://netlifly.com) (clicking a button included on the corresponding plugin documentation) because I'm using code that requires this. See the following bullet. The ODG includes some "end-user" mechanisms :

    - `/src/helpers/userSetup.js` to add additional Eleventy plugins.
    - `/src/helpers/userUtils.js` will be used to add calculated data to be used on user-defined components.
    - User-defined components should be added to `src/site/_includes/components/user/`.
    - User-defined style should be added to `src/site/styles/user/`.
    - User-defined client-side JavaScript should be added to `src/site/scripts/`.
- The GitHub repository supporting this site uses code that I taken and adapted from https://github.com/11ty/demo-eleventy-serverless-oauth to use Stack Overflow / Stack Exchange (SO/SE) as an OAuth provider. This code requires Netlify. An [issue](https://github.com/11ty/demo-eleventy-serverless-oauth/issues/13) proposed adding SO/SE as a new OAuth provider, including the broad steps. A pull request might be created later.

## Customized code

The `src/site/notes/notes.11tydata.js` file from the Obsidian Digital Garden is one of the customized files. In this case, it was edited to support the Eleventy Serverless plugin.


```
require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return {
          dynamic: "/"
        };
      }
      return data.permalink || undefined;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
    "eleventyExcludeFromCollections": (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return true;
      }
    }
  },
};
```
Another customized file from the same repository template is `src/site/_includes/component/pageheader.njk`.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://fastly.jsdelivr.net/npm/mermaid@9.4.0/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({
        startOnLoad: true,
    });
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js" integrity="sha512-hpZ5pDCF2bRCweL5WoA0/N1elet1KYL5mx3LP555Eg/0ZguaHawxNvEjF6O3rufAChs16HVNhEc6blF/rZoowQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/autoloader/prism-autoloader.min.js" integrity="sha512-sv0slik/5O0JIPdLBCR2A3XDg/1U3WuDEheZfI/DI5n8Yqc3h5kjrnr46FGBNiUAJF7rE4LHKwQ/SoSLRKAxEA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

{%include "components/calloutScript.njk"%}

<script src="https://fastly.jsdelivr.net/npm/force-graph@1.43.0/dist/force-graph.min.js"></script>

<script defer src="https://fastly.jsdelivr.net/npm/@alpinejs/persist@3.11.1/dist/cdn.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/alpinejs@3.11.1/dist/cdn.min.js" defer></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
<script src="https://fastly.jsdelivr.net/npm/whatwg-fetch@3.6.2/dist/fetch.umd.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<link href="/styles/digital-garden-base.css" rel="stylesheet">
{%-if meta.themeStyle%}
    <link href="/styles/obsidian-base.css" rel="stylesheet">
    <link href="{{meta.themeStyle}}" rel="stylesheet">
{% else %}
    <link href="/styles/style.css" rel="stylesheet">
{%endif%}

<link href="/styles/custom-style.css" rel="stylesheet">
{%- for style in dynamics.styles -%}
<link href="{{style}}" rel="stylesheet">
{%- endfor -%}
{% if eleventy.serverless %}

{% else %}
{% favicons './src/site/favicon.svg', appleIconBgColor='#123' %}
{% endif %}
{% if metatags %}
    {% for name, content in metatags %}
        <meta name="{{ name }}" content="{{ content }}">
    {% endfor %}
{% endif %}

{% if meta.styleSettingsCss %}
    <style>
        {{ meta.styleSettingsCss | safe }}
    </style>
{% endif %}
<style>
</style>
```
# Roadmap

## Now

I'm working on making the login with Stack Exchange accounts work.

## Other goals
The idea is to use a **[network attached storage](https://en.wikipedia.org/wiki/Network-attached_storage)** (NAS) as the primary host and use a hosting service like Netlify if the NAS fails or is under maintenance.

Publish "rocks" (notes that no longer be updated) to a WordPress site or as a PDF to file hosting service like Google Drive.

Share notes privately to selected Stack Exchange accounts, i.e., a site's community moderator team.

Add a comments feature using the user's selected Stack Exchange site profile.

Reuse code from https://stackapps.com/q/9730/105187 for importing posts from Stack Exchange directly into the Obsidian vault.

# Resources

- [A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)

# Update

If you go to https://jardindigital.rubenrivera.mx you will see two login sections, one for using Stack Exchange and another for using other providers.

The website already supports login using GitHub, but I need help making the login with Stack Exchange work properly. The code taken from the demo-eleventy-serverless-oauth uses simple-outh2 node package, I haven't found how to use it with the Stack Exchange Authentication.

The Obsidian Digital Garden uses the Axios Node.js package, so I used it to make the API calls to https://stackoverflow.com and https://api.stackexchange.com. Still, I need help with adapting the demo-eleventy-serverless-oauth for my use case. The problem is somewhere in the cookie handling or passing the response from /me to the Stack Exchange API endpoint to Eleventy Global Data.

I'm working on creating a *minimal, complete, verifiable example*. 

- **Done**: Fork https://github.com/11ty/demo-eleventy-serverless-oauth and adapt it to support having Stack Overflow / Stack Exchange as an OAuth provider. See https://stackapps.com/q/10534/105187.

- **Done**: Make a "minimal, complete, verifiable example" of adding Eleventy Serverless to a copy of the Obisidian Digital Garden GitHub repository template, using Stack Overflow as an OAuth provider. For further details, see https://stackapps.com/q/10536/105187.

# Related

- https://stackapps.com/q/10503/105187  
    This other [tag:app] written in Python might help add all the posts to the Obsidian vault feeding a digital garden.

  [1]: https://i.stack.imgur.com/jxUEJ.png

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/10533\|https://stackapps.com/q/10533]]

