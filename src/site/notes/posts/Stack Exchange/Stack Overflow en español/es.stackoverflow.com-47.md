---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-47.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-47/","title":"Cómo puedo evitar que mi código de Google Apps Script sea visible a los colaboradores","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.279-06:00"}
---

# Cómo puedo evitar que mi código de Google Apps Script sea visible a los colaboradores

He creado un proyecto vinculado (bounded) a una hoja de cálculo en Google Apps Script y estoy pensando en crear otros más en otras aplicaciones. 

No quiero que los colaboradores de mis hojas de cálculo o de mi otros contenedores de apps scripts puedan visualizar el código de mis proyectos. Sólo quiero que puedan ejecutarlos.

Según entiendo de lo siguiente, publicar el código como una biblioteca (library) no ayuda ya que se requiere dar acceso de lectura para que esta sea agregada al proyecto y que pueda ser ejecutada.

De [Collaborating with Other Developers][1]:

> Sharing and libraries
> 
> Libraries included in your project are shared with project
> collaborators. Though, if they do not have at least read-level access
> to an included library they are unable to use those libraries and will
> encounter an error if they attempt to do so. For more information
> about libraries, see [Managing Libraries](https://developers.google.com/apps-script/managing_libraries).


¿Cómo puedo bloquear el acceso de visualización al código?

He consultado la documentación indicada en referencias pero no logro encontrar cómo bloquear la visualización del código a los colaboradores de los contenedores (hojas de cálculo, documentos, formularios).

**Referencias**  

- <sup>1</sup>: https://developers.google.com/apps-script/
- <sup>2</sup>: https://developers.google.com/apps-script/guide_libraries


  [1]: https://developers.google.com/apps-script/collaborating

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/47\|https://es.stackoverflow.com/q/47]]

