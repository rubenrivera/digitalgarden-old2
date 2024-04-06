---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-358853.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-358853/","title":"¿Cómo iterar en los enlaces a los formularios de Google en las celdas de una columna de la hoja de cálculo para obtener sus preguntas?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:56.638-06:00"}
---

# ¿Cómo iterar en los enlaces a los formularios de Google en las celdas de una columna de la hoja de cálculo para obtener sus preguntas?

# Selenium
No he usado Selenium así que no comentaré sobre las particularidades sobre cómo lo estás usando.

# Hojas de Cálculo de Google

La forma más práctica de acceder a los datos de una hoja de cálculo de Google es mediante **Google Apps Script** porque basta con tener un navegador de Internet moderno soportado (las versiones recientes de Chrome, Firefox, Edge y Safari) y una cuenta de Google, pero si deseas usar otra plataforma lo apropiado sería usar **OAuth** para para poder acceder a la hoja de cálculo de Google mediante la **API de Google Sheets** particularmente si se trata de acceder de forma frecuente.

Lo primero será obtener los valores lo cual usualmente devuelve un Array bidimensional donde la primera dimensión (externa) son filas y las segunda dimensión (interna) son los valores de una fila determinada en el orden de las columnas.
Luego para iterar puedes usar cualquier bucle de **JavaScript** o métodos de `Array.prototype` como `forEach`, `map` entre otros, incluso is usas el runtime predeterminado (Chrome V8) puedes usar tipos de datos y métodos introducidos en **ECMAScript 6** como el tipo de datos `Map`.

Cabe destacar que **Google Apps Script tiene un API** por medio de la cual puedes llamar el **Forms Service** (se menciona más abajo) desde otras plataformas.

# Formularios de Google  

En cuanto a las identificaciones de las preguntas, desconozco el algoritmo que usa Google para asignar las identificaciones pero sí se que el código fuente de la vista para responder las preguntas se genera de forma automática, creo que se usa **Google Closure**, por lo que de un momento a otro dicho código puede cambiar, sin embargo los identificadores de las preguntas no cambian pero hay que destacar que hay dos identificadores.

Nuevamente lo más sencillo sería usar Google Apps Script en particular porque no existe una API pública para los formularios de Google, sólo el "**Forms Service**" de Google Apps Script. Mediante este puedes obtener el URL de prellenado mediante en el cual aparecen los ids de las preguntas en el orden en el que estas se encuentran en el formulario así como los ids de los "items" (preguntas, secciones, videos, imágenes, etc.) así como otras propiedades como el título de la pregunta, el tipo de pregunta entre otros. Estos ids de los items son los que se usan en Google Apps Script para seleccionar una pregunta por su id.

Para acceder a un formulario de Google con Google Apps Script deberás ser el propietario del formulario o tener acceso de editor. La forma más común es usar los id de los formularios (los puedes obtener del URL para editar un formulario) pero también puedes usar el URL para editar el formulario.

# Referencias

- [Using OAuth to access Google APIs](https://developers.google.com/identity/protocols/oauth2)
- [Google Apps Scripts](https://developers.google.com/apps-script)
- [Google Clousure Tools](https://developers.google.com/closure)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Executing Functions using the Apps Script API](https://developers.google.com/apps-script/api/how-tos/execute)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/358853\|https://es.stackoverflow.com/q/358853]]

