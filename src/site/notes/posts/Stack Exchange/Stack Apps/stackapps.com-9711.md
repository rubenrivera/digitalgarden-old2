---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-9711.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-9711/","title":"PLACEHOLDER - Export to Google Docs™","hide":true,"noteIcon":"default","created":"2024-04-03T12:20:11.701-06:00","updated":"2024-04-05T16:43:26.614-06:00"}
---

# PLACEHOLDER - Export to Google Docs™

Known Limitations
====
Google Multiple Account Sign-In
----- 
Google Apps Script doesn't play well with Google Account Multiple Sign-In 
 
File management
----
Files are created in the user's root folder (My Drive).

Tables
----
[Showdown][1] requires the column header separator to use a minimum of three dashes.

Don't work
```
| Header |
|-|
|data|
```
Work
```
| Header |
|---|
|data|
```
Google Apps Script Quotas
-----
- Google Apps Script quotas limit how many posts could be handled. I.E. Google Consumer accounts like `username@gmail.com` have a maximum execution time of 6 minutes.

Related SE Questions
=====

Stack Apps
-----
- https://stackapps.com/q/9329/105187

Stack Overflow
-----
- [How to load javascript from external source and execute it in Google Apps Script](https://stackoverflow.com/q/15548124/1595451)
- [Javascript to convert Markdown/Textile to HTML (and, ideally, back to Markdown/Textile)](https://stackoverflow.com/q/1319657/1595451)


  [1]: https://github.com/showdownjs/showdown

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/9711\|https://stackapps.com/q/9711]]

