---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-54773.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-54773/","title":"Importar un XML con dos puntos (:) en el xpath","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.353-06:00","updated":"2024-04-05T16:43:49.504-06:00"}
---

# Importar un XML con dos puntos (:) en el xpath

En el código fuente del archivo XML mostrado `g:` es usado como prefijo para indicar que el nombre del nodo corresponde a un espacio de nombres, el cual se especifica la línea:

    <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">

Una forma de especificar el nodo es usar `[nombre()='loquequiero']`.

Ejemplo

Asumanos que A1 tiene el URL del archivo XML, y que A2 tiene el nombre del nodo que nos interesa (sin el prefijo `g:`, dimos `loquequiero`. Una fórmula para obtener todos los nodos `g:loquequiero` es la siguiente:

    =IMPORTXML(A1,"//*[name()='"&A2&"']"

Relacionado:

Mi [respuesta][1] en inglés a [How to Import XML table Google Sheets][2]


  [1]: https://stackoverflow.com/a/39493736/1595451
  [2]: https://stackoverflow.com/q/39492485/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/54773\|https://es.stackoverflow.com/q/54773]]

