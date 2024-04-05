---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-58132.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-58132/","title":"¿Cómo activar botón con JavaScript?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:49.678-06:00"}
---

# ¿Cómo activar botón con JavaScript?

De [id][1]

> El [atributo global][2] **id** define un identificador único (ID) el cual no debe repetirse en todo el documento. 

En otras palabras, el problema se debe a que tu código está usando un ID más de una vez. En primer lugar, usa ID's distintos para cada botón, digamos `btn1` y `btn2` en segundo, para activarlos, usa 

    document.getElementById("btn1").disabled = false; // habilitar
    document.getElementById("btn2").disabled = false; // habilitar

Cabe mencionar que en [Document][3] se listan hay otras formas, tales como

    document.getElementById()
    document.getElementsByClassName()
    document.getElementsByName()
    document.getElementsByTagName()
    document.getElementsByTagNameNS()


  [1]: https://developer.mozilla.org/es/docs/Web/HTML/Atributos_Globales/id
  [2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
  [3]: https://developer.mozilla.org/es/docs/Web/API/Document

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/58132\|https://es.stackoverflow.com/q/58132]]

