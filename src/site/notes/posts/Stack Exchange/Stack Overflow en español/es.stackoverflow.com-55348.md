---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-55348.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-55348/","title":"¿Cómo procesar las tildes y también el delimitador en Excel?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:49.517-06:00"}
---

# ¿Cómo procesar las tildes y también el delimitador en Excel?

En lugar de usar `encodeURI` usa `escape`.

Ejemplo simple

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.getElementById("download").addEventListener("click", download, false);

    function download(e) {
      var encoding = "data:text/csv;charset=utf-8,%EF%BB%BF";  
      csvContent = "sep=,\n";
      csvContent += "niño,niña\n";
      csvContent += "melón,sandía\n";
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encoding + escape(csvContent));
      link.setAttribute("download", "FormData.csv");
      link.click(); 
    }

<!-- language: lang-html -->

    <button id="download">Descargar</button>

<!-- end snippet -->

Aplicado al código del OP

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.getElementById("download").addEventListener("click", download, false);

        

    function download(e) {
        
        data = [["ColumnaNombre","ColumnaDato"\|"ColumnaNombre","ColumnaDato"]];
        
        //var f = d3.selectAll("#csvForm > input")[0];
        
        var columnaNombre = document.getElementsByClassName("ColumnaNombre");
        
        var columnaDato = document.getElementsByClassName("ColumnaDato");
        
    		for (var i=0;i<columnaNombre.length;i++) {
            //grab x[i].innerHTML (or textContent or innerText)
            data.push([columnaNombre[i].innerText, columnaDato[i].nodeName=="INPUT" ? columnaDato[i].value : columnaDato[i].innerText]);
    		}
        

        
        console.log(data);
        
        var csvContent = "sep=,\n"; //charset=utf-8,%EF%BB%BF";  "data:text/csv;charset=utf-8,%EF%BB%BF"
        data.forEach(function (d, i) {
            dataString = d.join(",");
            csvContent += i < data.length ? dataString + "\n" : dataString;
        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" +  escape(csvContent));
        //link.setAttribute("href", encodedUri);
        link.setAttribute("download", "FormData.csv");
        link.click(); 
    }

<!-- language: lang-html -->


       
        
        <ul>
    <table class="interlineado" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tbody><tr valign="top"><td width="16%" bgcolor="#F7F7F7"><b><font class="ColumnaNombre" size="2" color="#008080">Matrícula:</font></b></td><td width="35%" bgcolor="#F7F7F7"><font size="2" class="ColumnaDato" color="#000080"> prueba</font></td><td width="18%" bgcolor="#F7F7F7"><b><font class="ColumnaNombre" size="2" color="#008080">Departamento:</font></b></td><td width="31%" bgcolor="#F7F7F7"><font  class="ColumnaDato" size="2" color="#000080"></font></td></tr>

    <tr valign="top"><td width="16%" bgcolor="#F7F7F7"><b><font size="2" class="ColumnaNombre" color="#008080">Nombre:</font></b></td><td width="35%" bgcolor="#F7F7F7"><font  class="ColumnaDato" size="2" color="#000080">Rrhh Desarrollador 01</font></td><td width="18%" bgcolor="#F7F7F7"><b><font  class="ColumnaNombre" size="2" color="#008080">Teléfono:</font></b></td><td width="31%" bgcolor="#F7F7F7"><font size="2"  color="#000080">
    <input  class="ColumnaDato" name="PetTelefono" value="985"></font></td></tr>

    <tr valign="top"><td width="16%" bgcolor="#F7F7F7"><b><font size="2" class="ColumnaNombre" color="#008080">Factoría:</font></b></td><td width="35%" bgcolor="#F7F7F7"><font size="2"   class="ColumnaDato" color="#000080"></font></td><td width="18%" bgcolor="#F7F7F7"><b><font class="ColumnaNombre" size="2" color="#008080">Email:</font></b></td><td width="31%" bgcolor="#F7F7F7"><font  class="ColumnaDato" size="2" color="#000080">prueba@prueba.com</font></td></tr>


    </tbody></table>
    </ul>

    <p id="resultado"></p>

     <button id="download">Download</button>

<!-- end snippet -->

**Referencia:**

[Comentario][1] de Lucky Garg en [Use JavaScript to Export Your Data as CSV][2]


  [1]: http://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/#comment-3101026153
  [2]: http://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/55348\|https://es.stackoverflow.com/q/55348]]

