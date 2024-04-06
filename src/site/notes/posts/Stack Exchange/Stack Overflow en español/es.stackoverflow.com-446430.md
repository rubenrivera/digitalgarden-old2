---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-446430.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-446430/","title":"Indicar las URL en una celda activa en lugar de hacerlo por filas, utilizando Google Picker","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.262-06:00"}
---

# Indicar las URL en una celda activa en lugar de hacerlo por filas, utilizando Google Picker

En una celda de una hoja de cálculo de Google sólo se pueden insertar números, texto, formulas e imágenes. Si los documentos cuentan con URL puedes agregar el URL pero no el archivo.

Los métodos más comunes son `setValue`, `setValues` y `appendRow` para agregar los URLs. Los primeros son métodos de Class Range y el segundo es de Class Sheet.

Lo primero es obtener los URLs. Si los archivos están alojados en Google Drive tu eres su propietario o están compartidos contigo puedes usar el servicio `DriveApp` o el servicio avanzado de Google Drive para obtener los URLs. Cabe destacar que hay varios URLs.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/446430\|https://es.stackoverflow.com/q/446430]]

