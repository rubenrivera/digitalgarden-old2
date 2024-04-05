---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-600880.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-600880/","title":"Costos por usar clases DriveApp y GmailApp en Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:58.077-06:00"}
---

# Costos por usar clases DriveApp y GmailApp en Apps Script

El uso de Google Apps Script no tiene costo. 

Los servicios Drive (Class DriveApp), Gmail (Class GmailApp) entre otros, están incluidos sin costo. Lo que señalas en la imagen son los ámbitos de OAuth usados por el proyecto de Apps Script correspondiente. Mediante estos se manejan los permisos para acceder a los datos de los usuarios. Cuando un usuario ejecuta un script se le pide autorización mostrando a qué datos tendrá acceso el script y lo que podría hacer con ellos.

Cuando se agrega una llamada a un servicio, Google Apps Script automáticamente agrega los ámbitos de OAuth necesarios. 

Estos se pueden personalizar. Puedes aprender los conceptos de los ámbitos de OAuth en Google Apps Script en https://developers.google.com/apps-script/concepts/scopes.

Los servicios mencionados arriba tienen cuotas las cuales no pueden ser ampliadas. Puedes aprender los detalles de las cuotas en https://developers.google.com/apps-script/guides/services/quotas.


Cabe hacer mención que es posible que además de los servicios, llamémosle básicos, están los servicios avanzados que son un mecanismo para acceder de manera relativamente sencilla a las APIs de Google. Otra característica relevante es que cada proyecto de Apps Script tiene un proyecto predeterminado de Google Cloud. Si requieres incluir algunas características a tu proyecto de Apps Script deberás reemplazar vincular este a un proyecto estándar de Google Cloud. 

Lo anterior lo puedes verificar en https://developers.google.com/apps-script. Notarás que no hay página de precios ni de facturación.

Mediante un proyecto estándar de Google Cloud podrás hacer uso de APIs y servicios que requieran tus datos de pago. Algunas APIs y servicios incluyen de forma gratuita una nivel de uso. Sin incurrieras en un uso tal que requiera pago, este sería por el uso de las APIs no por el uso de Apps Script.




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/600880\|https://es.stackoverflow.com/q/600880]]

