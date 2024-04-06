---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-59128.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-59128/","title":"Cómo recorrer las subcarpetas para transferir propiedad de carpetas y ficheros de Google Drive a otro usuario","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:49.693-06:00"}
---

# Cómo recorrer las subcarpetas para transferir propiedad de carpetas y ficheros de Google Drive a otro usuario

En el [servicio Drive][1] de [Google Apps Script][2], las carpetas corresponden a una clase diferente a los archivos, [Class Folder][3], la cual, además del método getFiles cuentan con el método [getFolders][4] para obtener las subcarpetas, y [getParentFolders][5] para obtener las carpetas padre o superiores.

Estos métodos devuelven un objeto [Class FolderIterator][6], el cual es una colección que es potencialmente grande y que se puede recorrer usando el método [next()][7]

Ejemplo de la documentación de FolderInterator

    // Log the name of every folder in the user's Drive.
    var folders = DriveApp.getFolders();
    while (folders.hasNext()) {
      var folder = folders.next();
      Logger.log(folder.getName());
    }
     

**Relacionado**

- https://es.stackoverflow.com/questions/59143/es-posible-transferir-la-propiedad-de-los-archivos-de-google-drive-a-otra-cuent

  [1]: https://developers.google.com/apps-script/reference/drive/
  [2]: https://www.google.com/script/start
  [3]: https://developers.google.com/apps-script/reference/drive/folder
  [4]: https://developers.google.com/apps-script/reference/drive/folder#getfolders
  [5]: https://developers.google.com/apps-script/reference/drive/folder#getparents
  [6]: https://developers.google.com/apps-script/reference/drive/folder-iterator
  [7]: https://developers.google.com/apps-script/reference/drive/folder-iterator#next()

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/59128\|https://es.stackoverflow.com/q/59128]]

