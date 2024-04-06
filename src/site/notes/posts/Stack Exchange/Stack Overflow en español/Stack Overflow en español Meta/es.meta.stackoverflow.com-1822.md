---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-1822.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-1822/","title":"Prevenir error cargar secuencia no segura en stacksnippet que utiliza librerías externas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.511-06:00","updated":"2024-04-05T16:44:00.875-06:00"}
---

# Prevenir error cargar secuencia no segura en stacksnippet que utiliza librerías externas

Hasta que estaba a punto de publicar la pregunta me percaté que un par de referencias externas incluían `http` en lugar de `https`. Me auto-respondo por si a alguien más le pasa, o a mí se me olvida, lo cual es 100% seguro XD

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

    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/themes/base/jquery-ui.css" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
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


# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/1822\|https://es.meta.stackoverflow.com/q/1822]]

