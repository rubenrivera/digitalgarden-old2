---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-142346.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-142346/","title":"Expresión regular y Javascript para texto desperdigado entre etiquetas HTML","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.091-06:00"}
---

# Expresión regular y Javascript para texto desperdigado entre etiquetas HTML

NOTA: Esta respuesta corresponde a la [versión inicial de la pregunta][1].

> En resumen, lo que necesito es poder capturar lo que va después de los
> primeros "::" y tras los siguientes "::" hasta antes de las "}}". Si
> fuese esta la frase:
> 
> {{probando::primero::segundo}} Necesitaría poder extraer de ahí
> "primero" y "segundo".

Lo siguiente extrae primero (primera sección) y segundo (segunda sección) y lo imprime en la consola un array con cada elemento como miembro.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var texto1 = '{{probando::primero::segundo}}';
    var re = /:{2}(.*)}{2}/;
    var resultado = texto1.match(re);
    console.info(resultado[1].split('::'));

<!-- end snippet -->

Lo siguiente extrae las cadenas de la primera y segunda sección de la cadena incluida como ejemplo por el OP y lo imprime al documento HTML. Para facilitar la identificación de cada parte se incluye como prefijo "Primera parte" y "Segunda parte" ambos en negritas.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var texto1 = '{{c1::Del<span>&nbsp;</span><abbr style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; color: inherit; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em; cursor: pointer;" title="árabe hispánico">ár. hisp.</abbr><span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em;">alḡára,</em><span>&nbsp;</span>y este del<span>&nbsp;</span><abbr style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; color: inherit; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em; cursor: pointer;" title="árabe clásico">ár. clás.</abbr><span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em;">ḡārah.</em>::Origen etimológico}}';
    var re = /:{2}(.*)}{2}/;
    var resultado = texto1.match(re);
    var resultado1 = resultado[1].split('::');
    document.write('<b>Primera parte:</b> ' + resultado1[0] + '<br/>'+ '<b>Segunda parte:</b> ' + resultado1[1]);

<!-- end snippet -->


  [1]: https://es.stackoverflow.com/revisions/142312/1

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/142346\|https://es.stackoverflow.com/q/142346]]

