---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-486156.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-486156/","title":"existe una manera de crear archivos más rápido con App script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.551-06:00"}
---

# existe una manera de crear archivos más rápido con App script?

Los servicios básicos de Google Apps Script como `DriveApp` están pensados para facilitar el hacer cosas sencillas. Google Apps Script tiene una [página de buenas prácticas][1] en las que recomiendan evitar el hacer llamadas a los servicios de Google Apps Script en bucles. En este caso en particular si requieres tener mejor desempeño en lugar de usar el servicio básico deberás usar el servicio avanzado y hacer uso del procesamiento por lotes (el comando es `batch`, para detalles ver https://developers.google.com/drive/api/v2/batch).

Por otro lado antes de hacer uso intensivo de los servicios de Google Apps Script revisa [las cuotas][2] y toma las medidas pertinentes. 

En el caso de hacer uso de servicios avanzados, deberás revisar las cuotas en la página de la API correspondiente, en este caso en particular del servicio avanzado de Google Drive me parece que no hay una página que directamente hable de las cuotas pero varios de los errores que se mencionan en https://developers.google.com/drive/api/v2/handle-errors explican que se deben a haber excedido una de ellas, así que dicha página te podría ser útil para prevenir algunos de ellos.

Si requieres ampliar las cuotas de servicios avanzados, deberás crear un proyecto de Google Cloud, lo cual implica configurar una forma de pago aunque no la uses, configurar la página consentimiento OAuth, habilitar la API de Google Drive y vincularlo a tu proyecto de Google Apps Script.



  [1]: https://developers.google.com/apps-script/guides/support/best-practices
  [2]: https://developers.google.com/apps-script/guides/services/quotas

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/486156\|https://es.stackoverflow.com/q/486156]]

