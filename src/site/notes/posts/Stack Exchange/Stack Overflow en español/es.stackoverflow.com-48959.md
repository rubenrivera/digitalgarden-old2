---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-48959.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-48959/","title":"Redondear a dos decimales cuando sea necesario","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:49.066-06:00"}
---

# Redondear a dos decimales cuando sea necesario

# Respuesta corta
Usa `Math.round(valor * 100) / 100`

# Explicación
Se incluye esta respuesta por ser un solución popular, sin embargo, esta introduce un error de redondeo el cual podría o no ser relevante. Para profundizar en esto véase [Math.round()][1]

# Fragmento
<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var valor = [
      10,
      1.77777777,
      9.1
    ];
    var resultado = valor.map(function(num){
      return Math.round(num * 100) / 100 ;
    });
    console.log(resultado);

<!-- end snippet -->

Respuesta inspirada por [respuesta][2] a [Round to at most 2 decimal places][3]


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/round
  [2]: https://stackoverflow.com/a/11832950/1595451
  [3]: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/48959\|https://es.stackoverflow.com/q/48959]]

