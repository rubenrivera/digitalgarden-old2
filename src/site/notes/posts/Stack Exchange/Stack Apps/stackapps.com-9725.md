---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-9725.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-9725/","title":"Get the Site Display Name from the API","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:20:11.701-06:00","updated":"2024-04-05T16:43:26.619-06:00"}
---

# Get the Site Display Name from the API

As of May 9, 2023, https://api.stackexchange.com/docs/sites returns a list of sites. The property having the site name is "name". 

```
{
      "aliases": [
        "https://www.stackoverflow.com",
        "https://facebook.stackoverflow.com"
      ],
      "styling": {
        "tag_background_color": "#E0EAF1",
        "tag_foreground_color": "#3E6D8E",
        "link_color": "#0077CC"
      },
      "related_sites": [
        {
          "relation": "meta",
          "api_site_parameter": "meta.stackoverflow",
          "site_url": "https://meta.stackoverflow.com",
          "name": "Meta Stack Overflow"
        },
        {
          "relation": "chat",
          "site_url": "https://chat.stackoverflow.com/",
          "name": "Stack Overflow Chat"
        }
      ],
      "markdown_extensions": [
        "Prettify"
      ],
      "launch_date": 1221436800,
      "open_beta_date": 1217462400,
      "site_state": "normal",
      "high_resolution_icon_url": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png",
      "favicon_url": "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico",
      "icon_url": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png",
      "audience": "professional and enthusiast programmers",
      "site_url": "https://stackoverflow.com",
      "api_site_parameter": "stackoverflow",
      "logo_url": "https://cdn.sstatic.net/Sites/stackoverflow/Img/logo.png",
      "name": "Stack Overflow",
      "site_type": "main_site"
    },
```

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/9725\|https://stackapps.com/q/9725]]

