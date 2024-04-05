---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136934.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136934/","title":"Quitar texto de un select con JQuery","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:52.986-06:00"}
---

# Quitar texto de un select con JQuery

Sin modificar tu JavaScript, agrega una opción en blanco a cada select. Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    jQuery(document).ready(function(){

        $('#tblempleados-pais').on('change', function(){

            if($('#tblempleados-pais').val() == '' || $('#tblempleados-pais').val() == null){

                alert('entra');
                $('#tblempleados-estado').val('');
                $('#tblempleados-municipio').val('');

            }

        });

    });

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    País <select type="text" id="tblempleados-pais"><br/>
    <option></option>
    <option selected="selected" value="Peru">Perú</option>

    </select>
    <br/>
    Estado <select type="text" id="tblempleados-estado">
    <option></option>
    <option selected="selected" value="Lima">Lima</option>
    </select>
    <br/>
    Municipio <select type="text" id="tblempleados-municipio">
    <option></option>
    <option selected="selected" value="San Isidro">San Isidro</option>
    </select>
    <br/>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136934\|https://es.stackoverflow.com/q/136934]]

