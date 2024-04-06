---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-82678.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-82678/","title":"¿Por qué no siempre funciona el método sort en Javascript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.605-06:00"}
---

# ¿Por qué no siempre funciona el método sort en Javascript?

El problema se debe a que estas manejando matrices irregulares y el que la "columna" utilizada para ordenar no existe en todos los renglones.

Una manera de resolver esto es "forzar" a que la columna a usar para ordenar simpre tenga un elemento. Si este elemento va a ser vacío usar `null` o `undefined`.

A continuación pongo el primer stack snippet al que he agregado `null` como segundo elemento del primer "renglón"

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var array=[[3,null],[0,713,751,828,833,905],[0,300],[1,654,710\|3,null],[0,713,751,828,833,905],[0,300],[1,654,710]]
    document.write(JSON.stringify(array.sort(function(a,b){
      if(a[1]>b[1]){return -1}
      if(a[1]<b[1]){return 1}
      return 0
    })))

<!-- end snippet -->


Nota: El usar términos como renglón y columnas es una convención. Hablando en términos de JavaScript puro, se trata de una matriz cuyos elementos son otras matrices.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/82678\|https://es.stackoverflow.com/q/82678]]

