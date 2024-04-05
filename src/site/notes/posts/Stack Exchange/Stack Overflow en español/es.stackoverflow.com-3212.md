---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-3212.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-3212/","title":"¿Cómo medir el tiempo de ejecución del recálculo de una hoja de cálculo de Google?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:48.369-06:00"}
---

# ¿Cómo medir el tiempo de ejecución del recálculo de una hoja de cálculo de Google?

#En breve

Pienso usar un evento `onEdit(e)` de las Hojas de Cálculo de Google y Google Apps Script (1) para registrar la marca de tiempo de la actualización de las celdas 1,1 y 180,8 de una matriz de fórmulas de 180x8 en el entendido de que la hoja de cálculo de Google se actualiza de arriba a abajo y de izquierda a derecha.

¿Es adecuado este enfoque?

#Consideraciones
##Recálculo
Las hojas de cálculo de Google tiene un parámetro para determinar cuando se hace el recálculo de funciones como AHORA(), HOY(), ALEATORIO y ALEATORIO.ENTRE(). 

Las opciones son:

- En cambios
- En cambios y cada minuto
- En cambios y cada hora

De (4)

> Nota: Las funciones de datos externos se vuelven a calcular en los
> siguientes intervalos:
> 
> - ImportRange: 30 minutos 
> - ImportHtml, ImportFeed, ImportData, ImportXml: 1 hora 
> - GoogleFinance: 2 minutos

*Por hacer:* Determinar si esto se puede aprovechar de alguna forma

##Google Apps Script
`onEdit(e)` es un evento simple. Este, su versión instalable así como otros eventos en las hojas de cálculo de Google responden a las acciones de los usuarios, así que se puede usar para llamar funciones por ejemplo, al editar una celda.

"Change" es un evento instalable que puede usarse para cambios de los siguientes tipos:
EDIT, INSERT_ROW, INSERT_COLUMN, REMOVE_ROW, REMOVE_COLUMN, INSERT_GRID, REMOVE_GRID, FORMAT, or OTHER.

*Por hacer:* identificar que tipos de cambios abarca OTHER.

De lo anterior me queda claro que podría usarse para identificar el inicio del recálculo.

*Por hacer:* identificar cómo determinar mediante Google Apps Script que el recálculo ha terminado.

#Información adicional:
##Contexto
Se requiere mejorar el desempeño de una hoja de cálculo de Google para lo cual se está considerando reemplazar las fórmulas por código. Para determinar el grado de éxito se desea tener métricas del tiempo de ejecución de ambas soluciones. En el caso del código, por ejemplo, se puede registrar la marca de tiempo al inicio y final y luego restar a la última la primera.

La hoja de cálculo tiene una matriz de fórmulas de 180 x 8. Las fórmulas  toman datos del renglón y encabezado y devuelven una matriz de 1x2. En otras palabras se usan fórmulas para anidar matrices de 1x2 en cada elemento de una matriz de 180x8.

Para dar cabida a la matriz resultado se cuenta con el espacio suficiente. En un ejemplo mínimo, completo y verificable de la matriz, los encabezados se colocarían cada dos columnas. En el caso de uso real se incluye una columna adicional para el registro de notas.

##Desempeño de hojas de cálculo
En relación al "entendido" del orden en el que se realizan los cálculos, este se basa en la recomendación que se da en diversas fuentes de usar en las hojas de cálculo la misma convención que se utiliza para leer en los idiomas occidentales (inglés, español, portugués, entre otros), por un lado porque así funcionan las funciones de búsqueda y por otro lado porque las hojas de cálculo se recalculan más rápido de esta forma. Se incluye en referencias la no. 2 como un ejemplo de las diversas fuentes. Curiosamente en la documentación oficial, la ayuda de las Hojas de Cálculo de Google (véase 3), no se menciona esto.

#Referencias

1. [Events - Guides- Google Apps Script](https://developers.google.com/apps-script/guides/triggers/events)
2. [2. Make your spreadsheet read from left to right and top to bottom](http://john.raffensperger.org/ArtOfTheSpreadsheet/Chapter02_MakeItReadLeftToRight.html)
3. [Tamaño de archivos - Ayuda de Editores de Google](https://support.google.com/docs/answer/37603?hl=es)  
4. [Cambiar la configuración regional, la zona horaria, la frecuencia de cálculo y el idioma de una hoja de cálculo - Ayuda de Editores de Google](https://support.google.com/docs/answer/58515?hl=es)

# Preguntas en Stack Exchange sobre reducción del tiempo de recálculo

- [Which factor will give most speedup to every update to a large Google Spreadsheet?][1]
- [How can I speed up Google Sheets?][2]


  [1]: https://webapps.stackexchange.com/q/89416/88163
  [2]: https://webapps.stackexchange.com/q/106809/88163

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/3212\|https://es.stackoverflow.com/q/3212]]

