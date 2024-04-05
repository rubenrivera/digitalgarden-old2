---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-141116.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-141116/","title":"Como hacer un loop en .gs para detalles de registros","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.042-06:00"}
---

# Como hacer un loop en .gs para detalles de registros

> ¿Es posible hacer un loop en el main de Google Apps Script?

Entendiendo por "main" un archivo de código del lado del servidor (extensión .gs), dado que en Google Apps Script es posible usar la mayoría de la sentencias de ECMAScript 5 por lo que puedes usar, todos las que se mencionan en [Bucles e iteración][1] de Mozilla Developer Network.

> Las sentencias para bucles disponibles en JavaScript son:
> 
> - sentencia for  
> - sentencia do...while  
> - sentencia while  
> - sentencia label  
> - sentencia break  
> - sentencia continue  
> - sentencia for...in  
> - sentencia for...of

En lo personal no he probado label.

Ejemplo

El siguiente ejemplo imprime un texto en los registros del Editor de proyectos de Google Apps Script

    function ejemploFor() {
      for(var i = 0; i < 5; i++){
        Logger.log('Iteración número ' + (i + 1));
      }
    }

Resultado:

<!-- language: lang-none -->

    [18-02-24 19:31:12:060 CST] Iteración número 1
    [18-02-24 19:31:12:061 CST] Iteración número 2
    [18-02-24 19:31:12:061 CST] Iteración número 3
    [18-02-24 19:31:12:062 CST] Iteración número 4
    [18-02-24 19:31:12:063 CST] Iteración número 5

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/141116\|https://es.stackoverflow.com/q/141116]]

