---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-64402.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-64402/","title":"¿Cómo validar en JavaScript si un objeto tiene una propiedad?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:50.016-06:00"}
---

# ¿Cómo validar en JavaScript si un objeto tiene una propiedad?

Usa `hasOwnProperty()` para comprobar propiedades del objeto, `in` para propiedades heredadas del prototipo. 

Ejemplo simple para propiedades del objeto

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Demostración de verificación de existencia de propiedades en objeto
     *
     */

    function demo() { 

      // Crear objeto
      var casa = new Object;

      // Agregar propiedad al objeto
      casa.puerta = {principal: true, traspatio: true, cochera: false};

      // Verificar si el objeto tiene la propiedad puerta (existente)
      var control_puerta = (casa.hasOwnProperty('puerta'))? 'Sí':'No';
      console.log('¿La casa tiene puerta?: ' + control_puerta);

      // Verificar si el objeto tiene la propiedad ventana (inexistente)
      var control_ventana = (casa.hasOwnProperty('ventana'))? 'Sí':'No';
      console.log('¿La casa tiene ventana?: ' + control_ventana) ;
    }

    demo();

<!-- end snippet -->

Ejemplo para comprobar propiedades heredadas

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Demostración de verfiación de existencia de propiedades heredadas 
     *
     */

    // Crear el objeto 
    var casa = function() {
      this.puerta = {principal:true, traspatio:true, cochera:false}
    }

    function demo() {

      // Crear objeto a partir de otro
      var residencia = new casa();

      // Verificar la existencia de la propiedad puerta (existente)
      var control_puerta = ('puerta' in residencia) ? "Sí" : "No";
      console.log('¿La residencia tiene puerta?: ' + control_puerta);

      // Verificar la existencia de la propiedad ventana (inexistente)
      var control_ventana = ('ventana' in residencia) ? "Sí" : "No";
      console.log('¿La residencia tiene ventana?: ' + control_ventana);  
    }

    demo();

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/64402\|https://es.stackoverflow.com/q/64402]]

