---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-282100.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-282100/","title":"¿Como formatear cadena de texto e array?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.742-06:00"}
---

# ¿Como formatear cadena de texto e array?

Una solución simple es que reemplaces las comas que separan las columnas (las que no están entre comillas) por un separador diferente, por ejemplo un tabulador (`\t`). El siguiente ejemplo, usa expresiones regulares, `replace` y `split`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var csv = `486245287,"LA EMPRESA, S.A. DE C.V.",JUAN PEREZ,2015,24/08/2003
    123456123,"NOMBRE",PERSONA,2014,13/01/2002`;

    var regex = /"[^"]+"|(\,)/g;
    csv2 = csv.replace(regex, function(m, group1) {
        if (!group1) return m;
        else return '\t';
    });
    console.info(csv2.split('\t'))

<!-- end snippet -->

Lo anterior es una adaptación de un ejemplo tomado de [una respuesta]( https://stackoverflow.com/a/23667311/1595451) a [Regex to match all instances not inside quotes](https://stackoverflow.com/q/6462578/1595451)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/282100\|https://es.stackoverflow.com/q/282100]]

