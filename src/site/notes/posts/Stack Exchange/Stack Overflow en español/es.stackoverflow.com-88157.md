---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-88157.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-88157/","title":"¿Cómo calcular la cabida máxima de una bodega con excel?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.271-06:00"}
---

# ¿Cómo calcular la cabida máxima de una bodega con excel?

Considerando la información proporcionada en la pregunta, la "unidad" es la suma de ancho del estante más el ancho del pasillo y el "complemento" es el ancho del estante.

- Usa la división y redondeo hacia abajo para obtener la cantidad de unidades.
- Usa la función MOD (módulo) para obtener el residuo de tu división y luego verifica si ese espacio es suficiente para tu "complemento".

Dado que cada unidad tiene sólo un estante, no requerimos hacer otra operación.

Asumiendo que la hoja de cálculo tiene la estructura siguiente:

<pre>
     A         B
 1 Estante      51
 2 Pasillo      70
 3 Unidad      121
 4 Bodega      172
 5 Estantes      ?
</pre>

La fórmula en B5 sería

<!-- language: lang-none -->

    =ROUNDDOWN(B4/B3,0)+IF(MOD(B4,B3)>=51,1,0)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/88157\|https://es.stackoverflow.com/q/88157]]

