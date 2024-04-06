---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134412.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134412/","title":"Problemas con JavaScript para mostrar los valores de un objeto","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.790-06:00"}
---

# Problemas con JavaScript para mostrar los valores de un objeto

mydata es un array que tiene como primer y único miembro un objeto con varias propiedades. Para extraer un dato puntual, es decir el valor de una propiedad, entre otras alternativas, se puede usar una doble "llave" de la siguiente forma:

    mydata[0]["01:23:2018, 10:02:32"]


El siguiente ejemplo imprime a la consola el valor del enunciado anterior:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var col = [];
    var mydata = [{
      "01:23:2018, 10:02:32": "Hola",
      "01:23:2018, 10:02:38": "Mundo",
      "01:23:2018, 10:02:40": "Somo tu y yo",
      "username": "Juan"
    }, ];

    console.info(mydata[0]["01:23:2018, 10:02:32"])

<!-- end snippet -->


Para imprimir todos los valores, una forma de adaptar el código de la pregunta es la siguiente:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var col = [];
    var mydata = [{
      "01:23:2018, 10:02:32": "Hola",
      "01:23:2018, 10:02:38": "Mundo",
      "01:23:2018, 10:02:40": "Somo tu y yo",
      "username": "Juan"
    }, ];



    for (var i = 0; i < mydata.length; i++) {
      for (var key in mydata[i]) {
        //col.push(key);
        console.info(mydata[0][key])
      }
    }

<!-- end snippet -->

<hr>

Referencias

- [JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON)
- [Indexed collections](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134412\|https://es.stackoverflow.com/q/134412]]

