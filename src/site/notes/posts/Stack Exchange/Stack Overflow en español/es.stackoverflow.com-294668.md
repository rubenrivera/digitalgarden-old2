---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-294668.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-294668/","title":"¿Cómo selecciono distintas columnas no contiguas para hacer una tabla dinámica?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.962-06:00"}
---

# ¿Cómo selecciono distintas columnas no contiguas para hacer una tabla dinámica?

No tiene sentido seleccionar columnas no contiguas cuando la fuente de datos es una tabla (conjunto de datos formado por columnas y filas contiguas). La recomendación es KISS (keep it super simple, mantenlo super sencillo)

1. Prepara los datos. En este caso, agrega los encabezados en la primera fila y debajo de estos los valores
1. Selecciona una celda de tu tabla de datos, en este caso cualquiera del intervalo `A1:F4`
2. Haz clic en el menú Datos > Tabla Dinámica
3. Selecciona el destino (nueva hoja, misma hoja, especifica la celda origen para la tabla dinámica), digamos que `A6`
4. Configura tu tabla dinámica
   - En filas, agrega `país autor`
   - En valores, agrega libro, especifica `COUNTA`
   - Nuevamente en valores, agrega `nota`, especifica `AVERAGE`

5. Personaliza los encabezados, 
    1. haz clic en `B6` y edita el valor de la celda
    2. haz clic en `C6` y edita el valor de la celda
6. El resultado debe ser similar a lo siguiente:  

    [![][1]][1]


  [1]: https://i.stack.imgur.com/tfRgo.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/294668\|https://es.stackoverflow.com/q/294668]]

