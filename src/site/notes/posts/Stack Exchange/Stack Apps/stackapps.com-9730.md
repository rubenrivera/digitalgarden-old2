---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-9730.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-9730/","title":"Export to Google Docs™ companion","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:20:11.701-06:00","updated":"2024-04-05T16:43:26.620-06:00"}
---

# Export to Google Docs™ companion

<!-- thumbnail: https://i.stack.imgur.com/TwTop.png -->
<!-- version: 0.2.3 -->
<!-- tag: export -->
<!-- excerpt: Add a button to each post for easy export to Google Docs™. Export questions and answers from Stack Exchange in various formats to Google Drive. -->

## Screenshot / Code Snippet

[![Export button][1]][1]

## About

This script adds a button to each post to call [Export to Google Docs™][2], an app that exports Stack Exchange questions and answers to Google Drive as a plain text, HTML or Google Document file.

This userscript makes it easier to export a single post. It will be helpful for anyone that wants to make a copy of any question or answer posted in the Stack Exchange network to Google Drive. Once it's on Google Drive, it would be kept as a backup copy, used to edit the post alone or in collaboration with others having the benefit of Google Drive / Google Document features.


### License

TBD

### Download

[Install][3]. 

Notes: 

Anyone can install the script, but the web app only will export questions and answers when run by registered testers until the OAuth consent screen review process is completed and Google approves the app.

The export button the userscript adds will open an URL on a new window / tag. This URL points to the web app, which requires authorization to create files in Google Drive and to access the user's Google profile public data. Later I will add more information about how to ask to be added as a tester.

### Platform

Script hosted at https://gist.github.com. It is being written and tested using Google Chrome for Mac on a Mac Mini with Ventura and Tampermonkey.

## Contact

See my user profile.

## Code

This sserscript is written using JavaScript. After reviewing several posts from this site, I found https://stackapps.com/q/8386/105187, by Glorfindel, and adapted it.

[Code][4] (hosted in https://gist.github.com)


  [1]: https://i.stack.imgur.com/TwTop.png
  [2]: https://stackapps.com/q/9709/105187
  [3]: https://gist.github.com/wicket-quest/f0b9edd43f9a804d1c5137c53be137ae/raw/fbf04ee5bebc2bd14b4ca9e72a141f0d6c8b6504/export-to-drive.user.js
  [4]: https://gist.github.com/wicket-quest/f0b9edd43f9a804d1c5137c53be137ae

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/9730\|https://stackapps.com/q/9730]]

