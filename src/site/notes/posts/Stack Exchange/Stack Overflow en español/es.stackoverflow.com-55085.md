---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-55085.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-55085/","title":"Resumen de datos con tabla dinámica y dato dividido","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.353-06:00","updated":"2024-04-05T16:43:49.509-06:00"}
---

# Resumen de datos con tabla dinámica y dato dividido

Para "determinar (resumir) el total de actividades por unidad considerando que una persona trabaja en 2 unidades", a continuación te comparto lo que yo hago en casos similares.



1. [Denormailizar][1], es decir convertir el formato de los datos originales a formato de "`tabla simple`" aún y cuando se repitan datos, ya que lo que buscamos es optimizar la realización de los cálculos y no las transacciones u otros parámetros.

   En este caso, la `tabla simple` quedaría de la siguiente forma, se indican columna y luego los valores válidos entre llaves,

   1. Fecha {01/01/2017..18/01/2017}
   2. Funcionario {UNO,DOS,TRES,CUATRO}
   3. Actividad {BAILAR,CORRER,SALTAR}
   4. Unidad {A,B,C}
   5. Trabajo {0.5,1}

> NOTA: Ahora en lugar de tener un reglón para los funcionarios que en la tabla con Unidad tienen A/B en la columan Unidad, ahora deberás tener dos renglones, uno con A en la columna Unidad y otro con B en la columna Unidad , indicando en la columa Trabajo 0.5. En el resto de las columnas se repetirán los valores.

Ahora puedes aplicar la tabla dinámica usando funciones sencillas. Para el cálculo de "la actividades por unidad", hacer lo siguiente


- Agrega `Unidad` a *renglones*
- Agrega `Trabajo` a *valores* y usa la función sumar.

Para una descripción más detallada, revisa [Crear una tabla dinámica para analizar datos de una hoja de cálculo][2].

Nota: Para manejar lo que yo llamo tabla simple, Excel tiene lo que llama [tabla de Excel][3].


  [1]: https://es.wikipedia.org/wiki/Denormalizaci%C3%B3n_(base_de_datos)
  [2]: https://support.office.com/es-es/article/Crear-una-tabla-din%C3%A1mica-para-analizar-datos-de-una-hoja-de-c%C3%A1lculo-a9a84538-bfe9-40a9-a8e9-f99134456576
  [3]: https://support.office.com/es-es/article/Descripci%C3%B3n-general-de-las-tablas-de-Excel-7ab0bb7d-3a9e-4b56-a3c9-6c94334e492c?ui=es-ES&rs=es-ES&ad=ES

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/55085\|https://es.stackoverflow.com/q/55085]]

