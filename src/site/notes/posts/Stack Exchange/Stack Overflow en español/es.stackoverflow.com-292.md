---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-292.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-292/","title":"Cómo puedo evitar que mi código de Google Apps Script sea visible a los colaboradores","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.289-06:00"}
---

# Cómo puedo evitar que mi código de Google Apps Script sea visible a los colaboradores

# Respuesta corta
No es posible bloquear la visualización del código de proyectos de código vinculado (bounded scripts). 

> Esto sigue vigente en Mayo de 2019.

# Respuesta amplia
Como se mencionó en la pregunta, el uso de bibliotecas (libraries) requiere de acceso al menos de lectura únicamente ya que de lo contrario al intentar ejecutar funciones que dependen de la biblioteca se mostrará un error. Las soluciones provisionales (workaround) podrían variar según el tipo y características del código. Por tipo me refiero a si se trata de una función de hoja de cálculo personalizada, usualmente llamada simplemente como función personalizada, una función que se activa mediante un menú o un evento.

Una alternativa es la creación de un complemento (add-on). Los detalles en [Develop Add-ons for Google Sheets, Documents and Forms](https://developers.google.com/apps-script/add-ons/). 

Cabe destacar que los complementos se pueden restringir para ser usados por usuarios del mismo dominio que el desarrollador, se requiere <s>Google Apps for Work</s> G Suite. Para detalles, véase https://developers.google.com/apps-script/add-ons/publish. 

Otra alternativa que podría funcionar en ciertos casos es la creación de una aplicación web que pueda llamarse desde la hoja de cálculo, por ejemplo, mediante un complemento como [Bloqkspring](https://chrome.google.com/webstore/detail/blockspring/aihldeahgcpbpmimkdpkafaedhbmfhoh?hl=es-MX).

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/292\|https://es.stackoverflow.com/q/292]]

