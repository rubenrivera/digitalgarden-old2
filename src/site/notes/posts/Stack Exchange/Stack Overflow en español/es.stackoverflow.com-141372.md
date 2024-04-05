---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-141372.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-141372/","title":"Un script en Google Sheets no corre la automatización porque esta configurado en getActiveSheet ()","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.058-06:00"}
---

# Un script en Google Sheets no corre la automatización porque esta configurado en getActiveSheet ()

getActiveSheet() require que haya una hoja de cálculo abierta. Si vas a ejecutar tu script sin tener una hoja abierta, entonces lo primero es "abrir" un archivo de hoja de cálculo y luego tomar una hoja

Para "abrir" (entre comillas porque sólo se abre del lado del servidor, no de forma visible al usuario) usa los una de los métodos siguientes de la clase SpreadsheetApp:

- open()
- openById()
- openByUrl()

Los detalles se describen en https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app

Luego ya que cuentes con un objeto de la clase Spreadsheet, usa

- getSheetByName()

ó

- getSheets() y luego el índice correspondiente a la hoja.

Los detalles los puedes consultar en https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/141372\|https://es.stackoverflow.com/q/141372]]

