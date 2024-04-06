---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-300705.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-300705/","title":"¿Cómo extraer la información de una página WEB utilizando importxlm?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:56.211-06:00"}
---

# ¿Cómo extraer la información de una página WEB utilizando importxlm?

Tl;Dr:

Usando Chrome,

1. Abre el URL de los datos / página web.
2. Oprime <kbd>F12</kbd> para abrir las herramientas de desarrollador de Chrome 
3. Oprime <kbd>Control</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> para abrir el menú de comandos 
4. Empieza escribiendo `javascript`, selecciona **Disable JavaScript** (¿inhabilitar JavaScript?), y luego presiona <kbd>Enter</kbd> para ejecutar la instrucción. Ahora JavaScript está inhabilitado.

JavaScript permanecerá inhabilitado en esa pestaña mientras tengas abiertas las herramientas de desarrollador.

Recarga la página para ver si se muestra el contenido que quieres importar. Si se muestra, podría ser posible importarlo con las funciones de la hoja de cálculo de Google, si no se muestra, no será posible hacerlo por lo que deberás buscar otra alternativa.

<hr>
Las funciones de hoja de cálculo incluidas en las hojas de cálculo de Google (Google Sheets) sólo pueden acceder al código fuente el documento referido por el URL. El problema de usar las herramientas de inspección de código de Chrome es que este muestra el DOM actual, es decir, el resultado del motor web el cual ejecuta el JavaScript ya sea incluido en línea en el HTML como el que se encuentra en recursos enlazados así como por las modificaciones hechas por extensiones del navegador.

Para encontrar el `xpath` usando la herramienta de inspección del navegador, primero inhabilita JavaScript y las extensiones del navegador. Lo más sencillo para esto es abrir la página en modo incógnito con todas las extensiones inhabilitadas, luego usa el comando `javascript` para inhabilitar JavaScript

Si el contenido se muestra con JavaScript inhabilitado, lo siguiente sería hacer la prueba de encontrar el `xpath` con las herramientas de desarrollador y si este se encuentra, probar con `IMPORTXML`. Si no funciona podría ser que el contenido que se desea importar está en una sección del código que no cumple con las reglas de XML.

Referencia

- [How to know if Google Sheets IMPORTDATA, IMPORTFEED, IMPORTHTML or IMPORTXML functions are able to get data from a resource hosted on a website?](https://webapps.stackexchange.com/q/115664/88163)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/300705\|https://es.stackoverflow.com/q/300705]]

