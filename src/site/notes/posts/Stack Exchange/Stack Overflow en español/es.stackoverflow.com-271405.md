---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-271405.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-271405/","title":"Crear un formulario en Google Sheets para que otras personas lo diligencien","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.424-06:00"}
---

# Crear un formulario en Google Sheets para que otras personas lo diligencien

En la hoja de cálculo dar formato a las celdas aplicando color, borders, uniendo celdas etc.

Luego crea una copia para cada usuario que lo vaya a "diligenciar" 

Ten en cuenta que si compartes el mismo archivo por las características de colaboración en tiempo real podría haber "colisiones" de ediciones (varios usuarios editen la misma celda de forma prácticamente simultánea) o bien que un usuario modifique los datos capturados por otro antes de que se hayan transferido los datos a la hoja de cálculo que vaya a fungir como base de datos.

Luego para pasar los datos registrados en cada "formulario" podrías usar la función IMPORTRANGE (sería muy complicado), Google Apps Script o la API de Google Sheets.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/271405\|https://es.stackoverflow.com/q/271405]]

