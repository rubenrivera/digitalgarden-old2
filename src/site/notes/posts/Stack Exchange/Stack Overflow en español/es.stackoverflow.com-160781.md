---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-160781.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-160781/","title":"Retornar el caracter central si la cantidad de caracteres es impar y si es par devolver los 2 caracteres centrales","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.764-06:00"}
---

# Retornar el caracter central si la cantidad de caracteres es impar y si es par devolver los 2 caracteres centrales

De acuerdo a Mozilla Developer Network, las funciones entre paréntesis se conocen como [funciones autojecutables][1] o en inglés como [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

La forma de usar la función en Stack Snippet es asignar a una variable la función autoejecutable y luego hacer lo que se requiera hacer con dicha variable. Por simplicidad en el siguiente ejemplo se muestra el resultado en la consola.

Nótese que el resultado es `es`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var salida = (function getMiddle(s)
     {
     var name = s;
     var name2 = s.length;
     if(name2%2 === 0){
      var valor1= (name2/2)-1; 
      var valor2=(name2/2)+1;
    return name.slice(valor1,valor2);
    }else{
      var valor1=(name2-1)/2; 
      var valor2=(name2+1)/2;
     return name.slice(valor1,valor2);
     }
    }("test"));

    console.info(salida)

<!-- end snippet -->

NOTA: Una forma abreviada de hacer lo mismo es la siguiente:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function getMiddle(texto){
      return (texto.length % 2)? texto.substr(texto.length/2,1):texto.substr(texto.length/2 - 1,2);
    }

    console.info(getMiddle("test"));

<!-- end snippet -->

  [1]: https://developer.mozilla.org/es/docs/Glossary/IIFE




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/160781\|https://es.stackoverflow.com/q/160781]]

