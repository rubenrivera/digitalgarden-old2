---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-326851.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-326851/","title":"Conectar a través de Google Apps Script a una base de datos MS Access","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.496-06:00"}
---

# Conectar a través de Google Apps Script a una base de datos MS Access

Google Apps Script no puede acceder a servidores de red local.

Podrías 

1. alojar la base de datos de MS Access en alguna nube que soporte JDBC y luego seguir las indicaciones de https://developers.google.com/apps-script/guides/jdbc
2. usar la API de Google Apps Script o mejor aún directamente la API de Google Sheets para que desde Access hagas la publicación a la hoja de cálculo de Google
3. volcar los datos a un un archivo y usar Google Drive Backup and Sync o Google Drive Filestream para subirlo a Google Drive y luego usar Google Apps Script para leer el archivo.  
4. ..


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/326851\|https://es.stackoverflow.com/q/326851]]

