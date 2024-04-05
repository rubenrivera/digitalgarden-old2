---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49110.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49110/","title":"Cómo determinar si una variable es 'undefined' o 'null' en JavaScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.109-06:00"}
---

# Cómo determinar si una variable es 'undefined' o 'null' en JavaScript

# Respuesta corta
En lugar de `'undefined'` (cadena) usa `null` (objeto global).

# Explicación
`'undefined'` y `null` no son lo mismo ni son del mismo tipo. El primero se refiere a una cadena y el segundo es un objeto global (véase [null][1], artículo de Mozilla Developers Network).

NOTA: Véase la [respuesta][2] de [amandiel][3] en la que aclara la diferencia entre `'undefined'` (cadena) y `undefined` (palabra reservada) o bien [undefined][4] (artículo de Mozilla Developers Network).

## Fragmento
En el siguiente ejemplo se ha reemplazado `'undefined'` por `null` y se han ajustado los mensajes a imprimir para cada caso.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var EmpName = $("div#esd-names div#name").attr('class');
    if(EmpName == null){
      console.log("El valor de EmpName " + EmpName); //Nulo
    } else {
      console.log("El valor de EmpName es " + EmpName); //Cualquier otro
    }

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <div id="esd-names">
      <div id="name"></div>
    </div>

<!-- end snippet -->

Otra forma mas general es reemplazar la comparación (`EmpName == 'undefined'`) por el nombre de la variable (`EmpName`)

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var EmpName = $("div#esd-names div#name").attr('class');
    if(EmpName){
      console.log("El valor de EmpName es " + EmpName); //Cualquier valor
    } else {
      console.log("El valor de EmpName es " + EmpName); //No definido
    }

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <div id="esd-names">
      <div id="name"></div>
    </div>

<!-- end snippet -->


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/null
  [2]: https://es.stackoverflow.com/a/49260/65
  [3]: https://es.stackoverflow.com/users/18376/amenadiel
  [4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/undefined

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49110\|https://es.stackoverflow.com/q/49110]]

