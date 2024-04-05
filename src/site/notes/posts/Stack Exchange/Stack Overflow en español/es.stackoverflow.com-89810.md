---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-89810.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-89810/","title":"Editar documento doc(x) con node.js/javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.329-06:00"}
---

# Editar documento doc(x) con node.js/javascript

> ¿Existe algún modo de introducir los parámetros recogidos en un documento sin necesidad de utilizar dicha API?

# Respuesta corta
Asumiendo que por doc(x) te refieres a un archivo .doc o .docx, sí es posible pero generalmente no tiene sentido "reinventar la rueda".

# Explicación

El formato .doc es un formato binario, el formato .docx es un formato "compuesto", ya que es un archivo comprimido que incluye varios archivos de los cuales los principales son archivos XML y el resto son recursos, por ejemplo, imágenes.

Por otro lado las librerías de JavaScript lo que hace es ahorrarte trabajo, pero uno debería dedicar tiempo a conocer su enfoque y alcances.

Si insistes en usar JavaScript puro y asumiendo te decides por usar .docx, lo siguiente es lo que "se me ocurre" sin haber repasado la documentación

- Obtener el archivo .docx y los datos provistos por el usurio
- Descomprimir el archivo .docx y seleccionar el archivo principal.
- Repetir para cada elemento:
   - Si la estructura es conocida, entonces usar seleccionar el elemento e insertar el contenido provisto por el usuario. 
   - Si la estructura no es conocida, debe haber un mapa o diccionario que establezca la relación del dato provisto por el usuario con su ubicación en el documento.
- Comprimir los archivos en un nuevo .docx
- Guardar el nuevo archivo .docx

Cabe mencionar que Microsoft Word tiene la capacidad de crear formularios y de insertar campos para mostrar propiedades tanto incluidas (built-in) como personalizadas, proteger el documento y proteger los campos, etc. sin embargo, no todos los editores que archivos .doc y .docx pueden manejar archivos en los que se usa estas características, además que esto podría "complicar" el código pues se deberán considerar esos elementos.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/89810\|https://es.stackoverflow.com/q/89810]]

