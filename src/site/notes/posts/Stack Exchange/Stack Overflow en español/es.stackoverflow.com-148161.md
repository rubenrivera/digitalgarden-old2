---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-148161.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-148161/","title":"¿Cómo acceder a la propiedad de un objeto en un array en javascript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.300-06:00"}
---

# ¿Cómo acceder a la propiedad de un objeto en un array en javascript?

El problema está en que has usado 

`i <= arrayJugadores.length` (menor igual que)

cuando deberías usar 

`i < arrayJugadores.length` (menor que).

A continuación un [stack snippet][1] con el cambio indicado

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    class Player {
      constructor(name, description, team, voting) {
        this.name = name;
        this.description = description;
        this.team = team;
        this.voting = voting;
      }
    }


    let arrayJugadores = [
      new Player("Michael Jordan", "Best Player", "Chicago Bulls", 5),
      new Player("Kobe Bryant", "3rd Most Pointer", "Los Angeles Lakers", 5),
      new Player("Lebron James", "The King", "Cleveland Cavaliers", 5),
      new Player("Russel Westbrook", "Dangerous", "Oklahoma City Thunder", 4),
      new Player("Serge Ibaka", "Spanish Black", "Oklahoma City Thunder", 1)
    ];


    function similar() {

      let element = document.getElementById("equipo").value;

      for (let i = 0; i < arrayJugadores.length; i++) {
        if (arrayJugadores[i].team === element) {
          console.log(arrayJugadores[i]);
        }
      }
    }

    similar()

<!-- language: lang-html -->

    <input id="equipo" value="Chicago Bulls">

<!-- end snippet -->


  [1]: https://es.meta.stackoverflow.com/q/3292/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/148161\|https://es.stackoverflow.com/q/148161]]

