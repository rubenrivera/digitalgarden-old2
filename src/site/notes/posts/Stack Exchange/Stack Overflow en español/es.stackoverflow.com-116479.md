---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-116479.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-116479/","title":"¿Cómo extraer formula a texto en hoja de cáculo de google?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.629-06:00"}
---

# ¿Cómo extraer formula a texto en hoja de cáculo de google?

Actualmente las hojas de cálculo de Google no tienen un función incluída (built-in) para obtener la formula de otra celda pero puedes usar Google Apps Script para crear una función personalizada que lo haga. 

Ejemplo:


    /**
     * Devuelve la fórmula de la referencia especificada
     *
     * @param {string} reference Referencia en formato "A1"
     * @customfunction
     */
    function getFormula(reference) {
      return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
                           .getRange(reference).getFormula();
    }

Referencia

- [Lista de funciones de las Hojas de Cálculo de Google][1]


  [1]: https://support.google.com/docs/table/25273?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/116479\|https://es.stackoverflow.com/q/116479]]

