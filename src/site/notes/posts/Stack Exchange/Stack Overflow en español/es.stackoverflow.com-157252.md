---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-157252.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-157252/","title":"Como puedo meter datos con el push a un arreglo?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:53.624-06:00"}
---

# Como puedo meter datos con el push a un arreglo?

Debes incluir los datos a agregar como argumentos de push.

Ejemplo

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var meses = []; // Array a llenar
    var consulta = ['enero','febrero']; // datos a pasar al array
    while(consulta[0]){
      meses.push(consulta[0]); // Agregar primer elemento de la consulta al array a llenar
      consulta.shift(); // Eliminar el primer elemento del array consulta
    }
    console.info(meses); // Mostrar resultado en la consola

<!-- end snippet -->

Si no quieres usar shift puedes usar un iterador

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var meses = []; // Array a llenar
    var consulta = ['enero','febrero']; // datos a pasar al array
    var i = 0;
    while(consulta[i]){
      meses.push(consulta[i]); // Agregar primer elemento de la consulta al array a llenar
      i++; // Incrementamos el iterador
    }
    console.info(meses); // Mostrar resultado en la consola

<!-- end snippet -->

NOTA: Lo de usar usar shift o un iterador en realidad es irrelevante ya que se está preguntando por push.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/157252\|https://es.stackoverflow.com/q/157252]]

