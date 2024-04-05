---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-475053.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-475053/","title":"Cómo mejorar la velocidad de una función en Google Apps Script que trabaja con muchos registros","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.465-06:00"}
---

# Cómo mejorar la velocidad de una función en Google Apps Script que trabaja con muchos registros

Los métodos de los servicios de Google Apps Script son "muy lentos". En [el artículo oficial sobre mejores prácticas][1] se recomienda evitar uso en bucles.

Considerando lo anterior, al menos deberías modificar la siguiente parte del código en la pregunta para mejor su desempeño:

```javascript
      for (var i=0; i<filasConPara.length; i++){
          r = hojaCalculoGeneral.getRange(filasConPara[i],1,1,hojaCalculoGeneral.getLastColumn()).getValues();
          nombreComercial = r[0][cComercial].substr(r[0][cComercial].length - 2); 
          row =  [r[0][cCodigo], r[0][cNombre], r[0][cTelefono], r[0][cCampana], nombreComercial];
          hojaCalculoComerciales.appendRow(row);
          
          //var celdaCXParaCambiar = hojaCalculoGeneral.getRange(filasConPara[i], cComercial+1); (1)
          //celdaCXParaCambiar.setValue(nombreComercial); (2)
          //Paso las instrucciones 1 y 2 en una sola
          hojaCalculoGeneral.getRange(filasConPara[i], cComercial+1).setValue(nombreComercial);

        }
```


1. En lugar de leer una fila en cada iteración, lee los datos antes del bucle
2. En lugar de agregar una fila en cada iteración con `appendRow`, crea un Array al que agregues los valores de todas las filas. Luego después del bucle escribe todas las filas a la vez.


Relacionado


- https://es.stackoverflow.com/q/201689/65
- https://es.stackoverflow.com/q/249749/65
- https://es.stackoverflow.com/q/260432/65

  [1]: https://developers.google.com/apps-script/guides/support/best-practices

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/475053\|https://es.stackoverflow.com/q/475053]]

