---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-1821.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-1821/","title":"Prevenir error cargar secuencia no segura en stacksnippet que utiliza librerías externas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.511-06:00","updated":"2024-04-05T16:44:00.871-06:00"}
---

# Prevenir error cargar secuencia no segura en stacksnippet que utiliza librerías externas

Al copiar el código en el jsfiddle que el OP incluyó en https://es.stackoverflow.com/q/18365/65 a stacksnippet, en Chrome, la advertencia de secuencia se muestra en la barra de direcciones de Chrome.  ¿Cómo evito que esto pase?

[![][1]][1]

A continuación el código, se excluyó el código de generación de gráfico:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $("#tabs").tabs({
        activate: function (event, ui) {
            var active = $('#tabs').tabs('option', 'active');
            $("#tabid").html('the tab id is ' + $("#tabs ul>li a").eq(active).attr("href"));

        }
    }

    );

<!-- language: lang-css -->

    body {
        background-color: #eef;
    }
    #tabs {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    /* Note that jQuery UI CSS is loaded from Google's CDN in the "Add Resources" pane to the left.  Normally this would be done in your <head> */

<!-- language: lang-html -->

    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/themes/base/jquery-ui.css" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <div id="tabs">
        <ul>
            <li><a href="#tabs-1">Tab 1</a>
            </li>
            <li><a href="#tabs-2">Tab 2</a>
            </li>
            <li><a href="#tabs-3">Tab 3</a>
            </li>
        </ul>
        <div id="tabs-1">
           
        </div>
        <div id="tabs-2">
             <div id="chart_div"></div>
        </div>
        <div id="tabs-3">
            <p>Content for Tab 3</p>
        </div>
    </div>
    <div id="tabid"></div>

<!-- end snippet -->


  [1]: https://i.stack.imgur.com/0NUc9.png

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/1821\|https://es.meta.stackoverflow.com/q/1821]]

