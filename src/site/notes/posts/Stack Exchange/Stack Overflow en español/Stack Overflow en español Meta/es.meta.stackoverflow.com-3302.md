---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-3302.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-3302/","title":"Prueba aquí Stack Snippets","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.374-06:00","updated":"2024-04-05T16:44:02.727-06:00"}
---

# Prueba aquí Stack Snippets

Modal en Stack Snippet. Adaptación de [respuesta](https://stackoverflow.com/a/40071122/1595451) a [Open link in a popup window inside an iframe](https://stackoverflow.com/q/40063146/1595451)


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function doalert(obj) {
      var el = document.getElementById('here').src = (obj.getAttribute("value"));;
      return false;
    }

    var modal = document.getElementById('modinfo');
    var span = document.getElementsByClassName("close")[0]; 
    function test() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


<!-- language: lang-css -->

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    /* The Close Button */
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

<!-- language: lang-html -->

    <a onclick="doalert(this);test()" value="https://example.com">Link1</a>

    <!-- Modal -->
    <div id="modinfo" class="modal" style="display: none;">
      <!-- Modal content -->
      <div style="margin: 0 auto; width: 80%;background: white;border: none; border-radius: 0">
        <span class="close" style="cursor:pointer;color: #3D5872; font-size: 26px">x</span>
        <iframe id="here" src="" style="width: 100%; height: 310px;border: none;"></iframe>
      </div>
    <!-- Modal content -->
    </div>
    <!-- Modal -->

<!-- end snippet -->



# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/3302\|https://es.meta.stackoverflow.com/q/3302]]

