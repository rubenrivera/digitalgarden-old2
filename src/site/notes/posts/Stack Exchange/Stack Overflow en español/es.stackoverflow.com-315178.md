---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-315178.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-315178/","title":"Validación de contenido en hoja de cálculo de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.433-06:00"}
---

# Validación de contenido en hoja de cálculo de Google

Resumen  

Crea una lista de los id de las hojas de cálculo que han sido combinadas y antes de hacer 
una nueva combinación verifica que el id de la hoja de cálculo a combinar no se encuentre listada.

Explicación  

Google Drive API V3 cuenta con el recurso [Files][1] el cual a su vez cuenta con la función `md5checksum` pero esta sólo está disponible para archivos binarios como archivos con extensiones PDF, PNG, etc. pero no para archivos de los Editores de Documentos de G Suite como las hojas de cálculo de Google, si bien es posible implementar un algoritmo para hacer algo equivalente me parece que con llevar un registro de los id de las hojas de cálculo importadas es suficiente.

Implementación de la idea sugerida

Existen muchas formas de hacer esto, quizás la más sencilla es la siguiente

1. Agrega una hoja para llevar la lista de id. Para efectos del ejemplo incluido abajo le llamaremos `Registro`.
2. (opcional) Elimina la columna B y siguientes con la finalidad de "ahorrar" celdas ya que la hoja de cálculo de Google tiene un límite de 5 millones de celdas.
4. Crea una función de validación que te devuelva `true` o `false`. Para efectos del ejemplo mostrado mas abajo le llamaremos `isMerged`.
5. Edita tu código para agregar una sentencia `if` y dentro de los bloques de esta sentencia pon la parte que hace la combinación de tal forma que si se ha encontrado el id no se ejecute y si se ha encontrado no se ejecute. 
6. En la edición del código incluye el agregar el id de la hoja de cálculo recién combinada.


Por ejemplo, esta parte del código podría verse de la siguiente forma:

    if(!isMerged(sheet.getId()){
      for(var y in spreadSheet.getSheets()) {
         /* Copy the sheet to the new merged Spread Sheet */
         spreadSheet.getSheets()[y].copyTo(newSpreadSheet);
      }
     newSpreadSheet.getSheetByName('Registro').appendRow([sheet.getId()])
    }



  [1]: https://developers.google.com/drive/api/v3/reference/files


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/315178\|https://es.stackoverflow.com/q/315178]]

