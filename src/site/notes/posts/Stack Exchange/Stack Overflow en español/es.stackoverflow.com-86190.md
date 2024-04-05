---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-86190.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-86190/","title":"Cómo filtrar solo el mes de una fecha","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.806-06:00"}
---

# Cómo filtrar solo el mes de una fecha

Te dejo un ejemplo que encontre en una [respuesta](https://stackoverflow.com/a/29242080/1595451) a una pregunta similar en inglés

Nótese que la línea similar a lo que estas buscando es

    <li ng-repeat="a in appointments | filter: selectedMonthFilter">id: {{a.id}}, label: {{a.label}}, created: {{a.created}}</li>

La cual llama a 

    $scope.selectedMonthFilter = function(element) {
        if(!$scope.selectedMonth) return true;
        return element.created.getMonth() == $scope.selectedMonth;
      }

Que ha su vez `$scope.selectedMonth` es el valor seleccionado en la lista desplegable.

Aquí el código completo:

Nota: Comenté un par de líneas del HEAD pues no se requiren en Stack Snippet

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var app = angular.module('plunker', []);

    app.controller('MainCtrl', function($scope) {
      $scope.name = 'World';
      
      $scope.appointments = [];
      
      $scope.selectedMonth = "";
      
      $scope.selectedMonthFilter = function(element) {
        if(!$scope.selectedMonth) return true;
        return element.created.getMonth() == $scope.selectedMonth;
      }
      
      function randomDate(start, end) {
          return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      }  
      
      for(var i=0; i<1000; i++) {
        $scope.appointments.push({id: i, label: "Item number " + i, created: randomDate(new Date(2014, 0, 1), new Date())});
      }
      
    });

<!-- language: lang-html -->

    <!DOCTYPE html>
    <html ng-app="plunker">

      <head>
        <meta charset="utf-8" />
        <title>AngularJS Plunker</title>
        <script>document.write('<base href="' + document.location + '" />');</script>
        <!-- <link rel="stylesheet" href="style.css" /> -->
        <script data-require="angular.js@1.2.x" src="https://code.angularjs.org/1.2.28/angular.js" data-semver="1.2.28"></script>
        <!-- <script src="app.js"></script> -->
      </head>

      <body ng-controller="MainCtrl">
        <p>Hello {{name}}!</p>

        Show results for 
        <select ng-model = "selectedMonth">
          <option></option>
          <option value="0">Jan</option>  
          <option value="1">Feb</option>  
          <option value="2">Mar</option>  
          <option value="3">Apr</option>  
          <option value="4">May</option>  
          <option value="5">Jun</option>  
          <option value="6">Jul</option>  
          <option value="7">Aug</option>  
          <option value="8">Sep</option>  
          <option value="9">Oct</option>  
          <option value="10">Nov</option>  
          <option value="11">Dec</option>  
        </select>

        <ul>
          <li ng-repeat="a in appointments | filter: selectedMonthFilter">id: {{a.id}}, label: {{a.label}}, created: {{a.created}}</li>
        </ul>

      </body>

    </html>

<!-- end snippet -->




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/86190\|https://es.stackoverflow.com/q/86190]]

