---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-99897.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-99897/","title":"¿Cómo hacer que mi canción de fondo reproduzca infinitamente?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.579-06:00"}
---

# ¿Cómo hacer que mi canción de fondo reproduzca infinitamente?

Usa la etiqueta `audio` con el atributo `loop` sin asignar un valor, en lugar de `embed` ya que este último es para plug-ins, no para archivos de audio.

Ejemplo de https://developer.mozilla.org/es/docs/Web/HTML/Elemento/audio al que se le agregó el atributo `loop`. Nota: Sea paciente para escuchar la repetición, probado en Chrome versión 60 para Windows 64-bits.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

    <audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
           autoplay loop>
      Your browser does not support the <code>audio</code> element.
    </audio>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/99897\|https://es.stackoverflow.com/q/99897]]

