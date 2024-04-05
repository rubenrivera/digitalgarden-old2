---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-1509.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-1509/","title":"Cómo modificar la presentación de un formulario de Google usando estilos de usuario","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.504-06:00","updated":"2024-04-05T16:43:48.360-06:00"}
---

# Cómo modificar la presentación de un formulario de Google usando estilos de usuario

# Pregunta
¿Hay alguna forma de modificar la distribución de los elementos de los nuevos [formularios de Google](https://www.google.com/intl/es-419/forms/about/) usando "estilos de usuario" (`user styles`)?

# Contexto
Los nuevos formularios de Google muestran el título, el texto de sugerencia y el campo de respuesta en renglones independientes lo cual provoca que el formulario ocupe mucho espacio.

Ejemplo:
Se presenta un ejemplo de formulario incluyendo un ejemplo de cada uno de los elementos de un formulario de Google.

- [Demo Tipos de Preguntas para SOes]( https://docs.google.com/forms/d/10h02pG3B_WpTOmd5-d0a3theMjdoVFf9m-3_2WW5A0w/viewform)

# Investigación previa
El uso de "estilos de usuario" es una técnica para personalizar la forma en la que se presenta la información de páginas web desarrolladas por alguien más. 

Es posible aplicar `estilos de usuario` mediante las herramientas de desarrollador de los navegadores como Chrome. Esto se facilita mediante extensiones para navegadores como Chrome y Firefox. Esta técnica hacen uso de las "hojas de cascada de estilos" (`cascading style sheets` / `CSS`).

Se realizó un búsqueda en Internet pero no se localizó ninguna página que en específico explicara el uso de `CSS` para modificar la presentación de formularios de Google.

# Intento
Se analizó el código fuente de formulario de Google indicado arriba. Se observó que los elementos se encuentran marcados con etiquetas `DIV` y con atributo de clase anidadas.

Se intentó convertir en tabla usando las propiedades `table`, `table-row` `table-cell`. Funcionó para los elementos de tipo pregunta no para los elementos de tipo `título` y `sección` ya que estos se extienden a lo ancho del formulario pero en `CSS` no hay una propiedad para combinar celdas.

Se encontraron Q&A y artículos sugiriendo como solución el uso de propiedades como `table-caption`, `table-header` pero estas se descartaron porque que resulta complicado colocar los títulos y encabezado de sección en la posición que les corresponde. También se encontró un Q&A sugiriendo el uso de la etiqueta `span` pero esto implica el uso de un script.  

Debido a lo anterior se concluyó, además de que así lo indican varias Q&A, que no es del todo conveniente el uso de las propiedades de tablas en particular porque `CSS` no incluye una forma directa de combinar celdas de una tabla.

# Referencias

- [Getting your DIVs to behave like TABLEs - Snook.ca](http://snook.ca/archives/html_and_css/getting_your_di)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/1509\|https://es.stackoverflow.com/q/1509]]

