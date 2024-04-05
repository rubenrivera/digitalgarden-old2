---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-52524.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-52524/","title":"¿Cómo generar script de formulario existente de google?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.296-06:00"}
---

# ¿Cómo generar script de formulario existente de google?

Tengo entendido que no es posible crear una secuencia de código de Google Apps Script de forma automática, lo que sería una forma de [ingeniería inversa][1], pero si es posible hacer un reporte parcial de los elementos de un formulario.

Digo parcial porque al día sólo el [Servicio de Formularios][2] de Google Apps Script está disponible como API oficial y esta no incluye todos los elementos que están disponibles a través del editor de formularios. Por ejemplo, los [tests][3] no se puede crear/leer de forma completa.

En cuando a los métodos que podrías usar  están:

- [getActiveForm()][4] para obtener el objeto formulario correspondiente al formulario activo 
- [getItems()][5] para obtener todos los elementos de tipo [item][6]
- y con los métodos "get" de item, sus respectivas propiedades.

<hr>
Algunas publicaciones sobre formularios de Google donde se usan algunos de los métodos indicados arriba:  

- [Respuesta][7] a [Populate a Google Form responses from a Google Spreadsheet][8]

**Véase también**

[Auto-generating Google Forms][9]

  [1]: https://es.wikipedia.org/wiki/Ingenier%C3%ADa_inversa
  [2]: https://developers.google.com/apps-script/reference/forms/
  [3]: https://support.google.com/docs/answer/7032287?hl=es
  [4]: https://developers.google.com/apps-script/reference/forms/form-app#getActiveForm()
  [5]: https://developers.google.com/apps-script/reference/forms/form#getitems
  [6]: https://developers.google.com/apps-script/reference/forms/itemhttps://developers.google.com/apps-script/reference/forms/item
  [7]: https://stackoverflow.com/a/39961386/1595451
  [8]: https://stackoverflow.com/q/21015264/1595451
  [9]: https://gsuite-developers.googleblog.com/2016/06/auto-generating-google-forms.html

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/52524\|https://es.stackoverflow.com/q/52524]]

