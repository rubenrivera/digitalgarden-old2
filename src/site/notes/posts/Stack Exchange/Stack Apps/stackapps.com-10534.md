---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-10534.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-10534/","hide":true,"noteIcon":"default","created":"2024-04-03T12:20:11.702-06:00","updated":"2024-04-05T16:43:26.641-06:00"}
---

---
title: PLACEHOLDER: Propose Stack Overflow / Stack Exchange as OAuth provider to demo-eleventy-serverless-oautn
Site: Stack Apps
Stack Exchange Post ID: 10534
Stack Exchange Type: Question
Stack Exchange Post Created: 23/03/24 15:39
Stack Exchange Post Last Edit: 23/03/24 17:49
Stack Exchange Edited By: 
Score: 0
Favorites: 
Views: 11
Answers: 0
CW: 
Closed: 
---
# PLACEHOLDER: Propose Stack Overflow / Stack Exchange as OAuth provider to demo-eleventy-serverless-oautn

<!-- thumbnail: https://i.stack.imgur.com/4QizM.png -->
<!-- version: 1.0 -->
<!-- tag: website -->
<!-- excerpt: This is about a GitHub fork of a static website generator demo to add Stack Exchange / Stack Overflow as a *proof of concept* -->

## Screenshot / Code Snippet

[![Login with Stack Overflow - Eleventy Serverless OAuth Demo][1]][1]

[![Secure page - Eleventy Serverless OAuth Demo][2]][2]

## About

Eleventy is a static website generator. On version 1 it added support for severless functions. During the beta, the Eleventy maintainer created a demo for using serverles functions to add OAuth support to a static site including Netlify, GitHub and others but not Stack Exchange / Stack Overflow as OAuth providers. This is about a fork of the demo repo to add Stack Exchange / Stack Overflow as a *proof of concept*.

### License

TBD

### Download

Website: https://serene-bonbon-b699e0.netlify.app/

### Platform

Web browsers: Chrome, Firefox, Safari. Other browsers like Brave and Edge might work to.

## Contact

I created this website / repo from the main branch of https://github.com/11ty/demo-eleventy-serverless-oauth.

## Code

- Node.js
- GitHub
- Netlify
- Eleventy
- Nunjucks
- JavaScript
- HTML
- CSS

### Highlights

- The Stack Exchange Authentication uses https://stackoverflow.com as the token host. 
- To get the user data, use https://api.stackexchange.com, including the **access token** taken from the OAuth flow and the **key** from the app registration.
- To get the access token, I'm using https://stackoverflow.com/oauth/access_token/json. 
- I added the **client id** and **client secret** to the Netlify environment variables as instructed on the referred demo's README.md and the **key** above. I added several if statements to handle using Stack Exchange as an OAuth provider and adapted `secure.njk` to handle the Stack Exchange user profile data.

# Now
I am working on cleaning the code.

# Related 

## [tag:app]

- https://stackapps.com/q/10533/105187

## [tag:support]

- https://stackapps.com/q/4132/105187
- https://stackapps.com/q/8398/105187


  [1]: https://i.stack.imgur.com/4QizM.png
  [2]: https://i.stack.imgur.com/2I1m9.png

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/10534\|https://stackapps.com/q/10534]]

