---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-522449.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-522449/","title":"¿Cómo solucionar el error de Apps Script en el que se necesita una API?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.639-06:00"}
---

# ¿Cómo solucionar el error de Apps Script en el que se necesita una API?

El problema se debe a que estás intentando usar una servicio que requiere autorización en una "custom function" (llamar una función de Google Apps Script en una fórmula de Google Sheets). 

Las "custom function" se ejecutan sin pasar las credenciales requeridas, en este caso, por el servicio avanzado YouTube Data. Ref. https://developers.google.com/apps-script/guides/sheets/functions

La solución más sencilla podría ser que en lugar de usar una "custom function"  llames tu función de un menú, botón, diálogo, barra lateral (sidebar) o activador installable (installable trigger). Otra alternativa es que en lugar de usar el servicio avanzado de YouTube data uses el UrlFetch Service para llamar directamente a la API incluyendo las credenciales necesarias.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/522449\|https://es.stackoverflow.com/q/522449]]

