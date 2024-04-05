---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-87778.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-87778/","title":"Incluir Script asociado a un formulario google script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.140-06:00"}
---

# Incluir Script asociado a un formulario google script

# Resumen
El código en la pregunta tiene varios problemas

1. Problema con nombres de funciones
2. Cargar varias veces jQuery, siendo estas versiones distintas
3. Función limpiarFormularios
4. Orden de ejecución de funciones

Quizás otros. 


# Explicación

### 1. Problema con nombres de funciones

Un problema que tiene el código es que en el archivo `.gs` la función se llama `incluir()` pero en el archivo `Index.html` no se llama a esta función sino a `include`. La línea en cuestión es:

    <?!= include('Scindex'); ?> 

### 2. Cargar varias veces jQuery

Otro problema es que `Index.html` está cargando varias veces jQuery pero usando versiones y alojamientos distintos. Las líneas son las siguientes:


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

Me parece que no es demasiado grave mientras las propiedades se llamen igual, la que prevalecerá será la última en ser cargada, sin embargo, por un lado tu aplicación está requiriendo más tiempo del necesario en cargarse y podría ser que tu código requiera una características que haya sido cambiada. 

La recomendación es que dediques algo de tiempo a entender jQuery, escojas una versión y sólo uses una en cada aplicación para prevenir interferencias y facilitar el depuración del código y en particular el desempeño de tu aplicación.

### 3. Problema con función limpiarformularios

Reportado como resuelto por el OP en una [respuesta][1] quedando la función de la siguiente forma

    function limpiarFormulario() {
      var actFrm = document.forms[0];
      for (i = 0; i < actFrm.elements.length; i++)
      {
        field_type = actFrm.elements[i].type.toLowerCase();
        switch (field_type)
        {
         case "text":
         case "password":
         case "textarea":
         case "hidden":
          actFrm.elements[i].value = "";
          break;
         case "radio":
         case "checkbox":
          if (actFrm.elements[i].checked){
           actFrm.elements[i].checked = false;
          }
          break;
         case "select-one":
         case "select-multi":
          actFrm.elements[i].selectedIndex = -1;
          break;
         case "date":
          actFrm.elements[i].value = new Date().toISOString().substring(0, 10);
         default:
          break;
        }
       }
      }


### 4. Orden de ejecución de funciones

Las llamadas a funciones del lado del servidor se realiza de forma asíncrona, esto quiere decir, que se realiza la llamada, y se continua ejecutando el resto del código, sin esperar que que termine de ejecutarse la función del lado del servidor.

Podríamos decir que el problema está en la siguiente línea de código

    <button onclick="solicitarFormulario('Fentregas');solicitarScript('Scentregas')">Entregas</button>

y en 

    function solicitarFormulario(entrada) {
     google.script.run.withSuccessHandler(cargarFormulario).incluir(entrada);
    }
    function cargarFormulario(entrada) {
     document.getElementById('Principal').innerHTML=entrada; 
    }
    function solicitarScript(scentrada){
     google.script.run.withSuccessHandler(importarScript).incluir(scentrada);
    }
    function importarScript(scentrada){
     $.getScript(scentrada);
    }

Una forma de solucionar esto cambiar el lugar donde llamas a la segunda función. En lugar de hacerlo en el botón, hacer en la función cargarFormulario.

El botón quedaría así:

    <button onclick="solicitarFormulario('Fentregas');">Entregas</button>

y la otra parte del código así:

    function solicitarFormulario(entrada) {
     google.script.run.withSuccessHandler(cargarFormulario).incluir(entrada);
    }
    function cargarFormulario(entrada) {
     document.getElementById('Principal').innerHTML=entrada;
     solicitarScript('Scentregas');
    }
    function solicitarScript(scentrada){
     google.script.run.withSuccessHandler(importarScript).incluir(scentrada);
    }
    function importarScript(scentrada){
     $.getScript(scentrada);
    }


  [1]: https://es.stackoverflow.com/a/87855/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/87778\|https://es.stackoverflow.com/q/87778]]

