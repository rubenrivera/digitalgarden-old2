---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49103.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49103/","title":"¿Sabeis como acceder mediante Google App Script a las filas resultantes de aplicar un filtro en una spreadsheet?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.092-06:00"}
---

# ¿Sabeis como acceder mediante Google App Script a las filas resultantes de aplicar un filtro en una spreadsheet?

# Respuesta corta
Según tengo entendido aún no es posible. La alternativa es que emules los criterios del filtro usando JavaScript.

# Explicación
El [servicio Spreadsheet][1] de Google Apps Script aún no cuenta con clases para los filtros ni métodos para obtener los resultados de los mismos. Cabe mencionar que [Sheets API 4][2] si cuenta con métodos para los filtros tanto básicos como para las vistas de filtro, pero estos son para modificar los filtros en sí, no para obtener los resultados que estos devuelven en la interfaz de usuario.

De [Updating spreadsheets][3], traducción al español de los títulos es mía,

> ## Object (Objeto)
> Filters (<a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#filterview">filter
> views</a> &amp; the <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#basicfilter">basic
> filter</a>)
> 
> ## Add duplicate (Agregar duplicado)
> <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#addfilterviewrequest">AddFilterViewRequest</a><br>
> <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#duplicatefilterviewrequest">DuplicateFilterViewRequest</a>
> 
> ## Update / Set (Actualizar / establecer)
> <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#updatefilterviewrequest">UpdateFilterViewRequest</a><br>
> <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#setbasicfilterrequest">SetBasicFilterRequest</a>
> 
> ## Delete (Borrar)
> <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#clearbasicfilterrequest">ClearBasicFilterRequest</a>


  [1]: https://developers.google.com/apps-script/reference/spreadsheet/
  [2]: https://developers.google.com/sheets/
  [3]: https://developers.google.com/sheets/api/guides/batchupdate

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49103\|https://es.stackoverflow.com/q/49103]]

