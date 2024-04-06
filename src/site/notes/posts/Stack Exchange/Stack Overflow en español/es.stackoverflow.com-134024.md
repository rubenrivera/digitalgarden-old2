---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134024.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134024/","title":"Generar token en Google Apps Script cuando el tiempo de ejecución del Script supera tiempo máximo de Google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:52.721-06:00"}
---

# Generar token en Google Apps Script cuando el tiempo de ejecución del Script supera tiempo máximo de Google

# Respuesta (¿parcial?)

Usa hasNext() para verificar que aún hay archivos pendientes de procesar

- Si es así, guarda la cadena que te devuelve getContinuationToken() usando el servicio Properties (PropertiesService), dependiendo de tu script podría variar si conviene usar las propiedades del usuario, del documento o del script mismo.

- En caso contrario borra el token de las propiedades.

También dependerá de tu script cómo reanudas el procesamiento.

# Ejemplo

Tomado de la [respuesta de Henrique G. Abreu](https://stackoverflow.com/a/23243756/1595451) a [Correct usage of DriveApp.continueFileIterator(continuationToken)
](https://stackoverflow.com/q/22365681/1595451)

    function listFilesInFolder() {
      var MAX_FILES = 20; //use a safe value, don't be greedy
      var id = 'folder-id';
      var scriptProperties = PropertiesService.getScriptProperties();
      var lastExecution = scriptProperties.getProperty('LAST_EXECUTION');
      if( lastExecution === null )
        lastExecution = '';
    
      var continuationToken = scriptProperties.getProperty('IMPORT_ALL_FILES_CONTINUATION_TOKEN');
      var iterator = continuationToken == null ?
        DriveApp.getFolderById(id).getFiles() : DriveApp.continueFileIterator(continuationToken);
    
    
      try { 
        for( var i = 0; i < MAX_FILES && iterator.hasNext(); ++i ) {
          var file = iterator.next();
          var dateCreated = formatDate(file.getDateCreated());
          if(dateCreated > lastExecution)
            processFile(file);
        }
      } catch(err) {
        Logger.log(err);
      }
    
      if( iterator.hasNext() ) {
        scriptProperties.setProperty('IMPORT_ALL_FILES_CONTINUATION_TOKEN', iterator.getContinuationToken());
      } else { // Finished processing files so delete continuation token
        scriptProperties.deleteProperty('IMPORT_ALL_FILES_CONTINUATION_TOKEN');
        scriptProperties.setProperty('LAST_EXECUTION', formatDate(new Date()));
      }
    }
    
    function formatDate(date) { return Utilities.formatDate(date, "GMT", "yyyy-MM-dd HH:mm:ss"); }
    
    function processFile(file) {
      var id = file.getId();
      var name = file.getName();
      //your processing...
      Logger.log(name);
    }

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134024\|https://es.stackoverflow.com/q/134024]]

