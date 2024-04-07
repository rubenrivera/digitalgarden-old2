---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65676.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65676/","title":"Uso de acumuladores en elemento de matriz y contador de iteraciones en Do..While","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.220-06:00"}
---

# Uso de acumuladores en elemento de matriz y contador de iteraciones en Do..While

1. En `depositos[nro] = monto;` cambiar el `=` por `+=`, pero primero debemos asegurar que el elemento existe.
2. Al poner `canti++;` en el `for` que recorre los elementos del array, estas contando los elementos. Para contar los depósitos, debe incluirse este en el `do`.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var depositos=[];
    var nro,monto,canti=0;

    do {
      nro=prompt('Ingrese nro de cliente (0 para salir)','');

      nro=parseInt(nro)
      if (nro!=0)
      {
        monto=prompt('Ingrese monto a depositar','');

        monto=parseInt(monto);
        // Línea nueva. Si elemento de la matriz no existe, inicializarlo con 0
        (depositos[nro] == undefined) ? depositos[nro] = 0: false;
        // Línea modificada. Cambiar = por +=
        depositos[nro] += monto;
        // Contador de depósitos
        canti++
      }
    } while (nro!=0);

    var suma=0;
    //var canti=0;

    for(var f=0;f<depositos.length;f++)
    {
      if (depositos[f]!==undefined)
      {
        suma=suma+depositos[f];
        //canti++;
      }
    }
    document.write('Cantidad de depósitos:'+canti+'<br>');
    document.write('Total depositado por todos los clientes:'+suma);

<!-- end snippet -->




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65676\|https://es.stackoverflow.com/q/65676]]

