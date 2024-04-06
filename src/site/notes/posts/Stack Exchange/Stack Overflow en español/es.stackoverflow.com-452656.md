---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-452656.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-452656/","title":"como puedo copiar valores de inputs en clipboard desde un formulario google app script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.347-06:00"}
---

# como puedo copiar valores de inputs en clipboard desde un formulario google app script

La pregunta no es coherente, al principio dice que no se quiere seleccionar los inputs pero el ejemplo de tu amigo dices "los inputs que yo decido", también se menciona que nos sabes como pasarlo a Google Apps Script. Esto denota que te hacen falta algunos conceptos básicos así que a continuación se hacen algunas observaciones, empezando por el segundo código:

1. Este está usando funciones `$()` lo cual es una característica distintiva de jQuery, un *framework* muy popular de JavaScript.
2. El código está incompleto ya que no no carga una librería de jQuery la cual es necesaria para que funcione.
3. Como ejemplo está incompleto pues no include HTML

Sobre Google Apps Script

Se puede usar `jQuery` en el código del lado del cliente del Google Apps Script (cuando se usa el HTMLService) pero no se recomienda usarlo ciegamente porque podría afectar negativamente el desempeño de aplicación ya que el podrías estar agregando capacidades que tu aplicación no se requieren. Si decides usarlo, en el código del lado del cliente debe incluirse la carga de la librería de jQuery a usar lo cual puede hacerse de la misma forma que se hace en una página web básica.

En cuanto a enviar los inputs sin tener que seleccionarlos, esto es posible. Para ello debes incluir un formulario en tu HTML, dentro de estos los input y enviar al código del lado del servidor el objeto formulario. En las guías de la documentación oficial se include un ejemplo de uso de formulario e incluso del uso de una librería de jQuery. Te dejo los enlaces a la introducción y a la sección específica del uso de formularios, y a las mejores prácticas que incluyen un ejemplo que usa jQuery.

- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/guides/html/communication#forms
- https://developers.google.com/apps-script/guides/html/best-practices

Relacionado

- https://es.stackoverflow.com/q/65908/65
- https://es.stackoverflow.com/q/82254/65
- https://es.stackoverflow.com/q/194337/65


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/452656\|https://es.stackoverflow.com/q/452656]]

