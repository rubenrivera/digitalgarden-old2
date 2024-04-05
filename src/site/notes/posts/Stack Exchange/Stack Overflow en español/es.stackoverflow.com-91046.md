---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-91046.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-91046/","title":"¿Palabras reservadas en HTML?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.370-06:00"}
---

# ¿Palabras reservadas en HTML?

# Respuesta corta 

En el caso de los valores, no hay palabras reservadas por HTML pero podría haberlas por otros elementos que se utilizan junto con HTML. Así mismo, considerando que cada "engine" interpreta el HTML de una forma particular, se me viene a la mente Internet Explorer, podría tener restricciones no estándares.

# Explicación

En "HTML puro" no hay palabras reservadas pues no hay etiquetas ni atributos personalizados pero al usar XML si es posible tener etiquetas y atributos personalizados. Es en este caso, y en el de uso de otras "tecnologías" en el que podría haber palabras reservadas, como el uso de DOM, APIs como la de Geolocalización, librerías y frameworks como jQuery, etc.

El caso que motivó la pregunta, debe notarse que los valores de los atributos están entre comillas, pero el uso de las comillas no es obligatorio. Cabe hacer notar que los atributos tienen especificado un tipo de dato y cada tipo tiene reglas sobre los valores válidos. Los detalles sobre los tipos de datos en HTML versión 4 en https://www.w3.org/TR/html4/types.html.

En el caso específico del atributo `name` del elemento `input` el tipo de dato es [CDATA][1] el cual no incluye palabras clave.

Otra cosa son las pautas que se establecen en guías de estilo. Si bien cada programador tiene libre albedrío, cuando se piensa en llevar a cabo la labor de desarrollo web de forma profesional es muy útil adoptar una guía de estilo. Una de las premisas es que el código sea claro y ello implica, siempre que sea posible evitar el uso de nombres de etiquetas, atributos, métodos, etc. como nombres de valores, o bien el aplicar algunas convenciones como el uso de mayúsculas y minúsculas con cierto patrón que no es usual cuando se escribe en lenguaje natural como usar sólo minúsculas o ciertas combinaciones como el "camel case".

Cabe destacar que en el caso de HTML5 si hay etiquetas personalizadas para el manejo de datos. Llevan el prefijo `data-`.

# Referencias

- https://www.w3.org/TR/html4/
- [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)


# Relacionado

- https://es.stackoverflow.com/q/22406/65
- [What values can I put in an HTML attribute value?](https://stackoverflow.com/q/5320177/1595451)


  [1]: https://www.w3.org/TR/html4/types.html#type-cdata

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/91046\|https://es.stackoverflow.com/q/91046]]

