---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-9709.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-9709/","title":"PLACEHOLDER - Export to Google Docs™","hide":true,"noteIcon":"default","created":"2024-04-03T12:20:11.701-06:00","updated":"2024-04-05T16:43:26.613-06:00"}
---

# PLACEHOLDER - Export to Google Docs™

Export posts to Google Drive™
=====

Initially, the idea was to use Google Apps Script to export a Stack Exchange post to Google Docs. Currently, the app can export to plain text, HTML and Google Document formats and the files are "uploaded" to Google Drive.

Thinking about inviting testers and handling the registration, onboarding and feedback collection. If you are interested or have ideas, please comment or answer.

----

Progress
=====

The app is working but needs improvements before releasing to the general public. At this time, the app requires four parameters that are passed as a query string:

1. Source site (string, site domain name)
2. Post id (s) (number or array of numbers, post id)
3. File format for the exported file, Plain Text, HTML or Google Document (enum, value corresponding to the desired file format)
4. Create single or multiple files (boolean, true to put all the posts in a single file, false to create a file for each post).

Usage options
------

### Craft URL manually or with user-defined functions
Ideas: Use a spreadsheet to enter the parameters and generate the URLs, then create links or use user-defined functions, i.e., macros / scripts

#### Userscript

Use an userscript like https://stackapps.com/q/9730/105187

Context
------
As the IPs used to call the Stack Overflow API when using Google Apps Script are fixed by Google, I'm looking for a quota independent of the others that might be doing something similar.

This might help with proofreading and using Google Docs comments to handle annotations, among many other things.

So far no "secret receipt."

1. Using Google Apps Script OAuth2 library. The code and instructions are in a [GitHub repository][1] maintained by Google.
2. The code is hosted in Google Apps Script stand-alone project.
3. Using [Showdown][2] to convert Markdown to HTML, then when necessary, Google Drive convert HTML file to Google Document

### Current Features
1. Process one or multiple posts at once
2. Output options: Text file, HTML file, Google Document.
3. Created an "API". It's possible to send the required parameters using an HTTP GET request.
4. Sign in / Sign out of the Google account (uses Google OAuth).
 

### Currently working on
1. Add the option to create one or multiple documents.  
    We need to decide how to separate posts for each output format.  
2. Add a blogging use case at a conceptual level.  
   - I found an official WordPress Google Docs add-on to use Google Docs to write and collaborate on WordPress content. I need to learn more about WordPress.
      - I have learned a bit about WordPress. It can use Markdown.
   - I also found here an app to embed posts in WordPress. It has not been updated since 2012. I need to validate that it is still working.
3. Userscript based on Glorfindel's [Stack Exchange Archivist userscript][3] that adds a button to each post. This looks to be the easier way to export a single post. 
4. Easy low code/no-code workflows to export multiple posts.

### Roadmap

TBD

### Possible enhancements
- Question title.  
    Have to decide how to question title will be handled.
- Question tags.  
    Have to decide whether hot question tags will be handled.
- Add a user interface.  
    Have to decide if this will be handled as user scripts, an add-on, or a web app.
- Google document page setup.  
    Have to decide how Google document page setup options, i.e. if the document will be set as Pageless by default. 
- Improve usability.  
    Have to decide model (sync, pull/push, etc.).
- Improve security.

### Code

#### Web application
As with any web application, the code uses HTML, JavaScript and CSS. Using Intercom and AngularJS JavaScript libraries. The web application listens for parameters passed through the URL query string; it uses the Google Drive API and OAuth to create the files in the user file storage (My Drive / Google Drive root folder).

Currently, it's published in testing mode.

#### Development platform
Developed and hosted in Google Apps Scripts and Google Cloud Platform. Using two Cloud projects: a default project for Google Apps  Script and a standard project.   
The Google Apps Script project that holds the code and controls the deployments and executions logs used the default project, which is set to allow anyone to run the web app as themselves.  
The standard project holds the OAuth Consent screen, enables the Google APIs and provides the OAuth credentials.  

Using the Google Apps Script OAuth library to handle OAuth flow. Used the sample code for a web application as the "starting point" for the web application having an interface to trigger the authorization process.
 
 

### Overly general questions

If you have a question not specific about this app, i.e. about Google Apps Script, post a question on the proper Stack Exchange site, i.e. Stack Overflow, Web Applications Stack Exchange, this site if it's about using the Stack Exchange API.

You can contact me directly to ask how I handle these sessions if you want a private mentorship session. See my profile for details.

### Questions and comments about this app
I'm not considering handling specific questions and comments as it's not publicly available, but I'm open to suggestions. If you have one, leave a comment here. 

### Related

- https://stackapps.com/q/179/37421


  [1]: https://github.com/googleworkspace/apps-script-oauth2
  [2]: https://github.com/showdownjs/showdown
  [3]: https://stackapps.com/q/8386/105187

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/9709\|https://stackapps.com/q/9709]]

