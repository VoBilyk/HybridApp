angular.module('NumbersJSApp', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
      .when('/unknown', {
        controller: 'NumberController',
        template: '<h1>Unknown path at NumbersJsApp</h1>',
        resolve: {
          init: function() {
            return function() {
              console.log('Unknown path at NumbersJsApp');
            }
          }
        }
      })
        .when('/any', {
          controller: 'NumberController',
          template: '<h1>Any number</h1>',
          resolve: {
            init: function() {
              return function() {
                console.log('Loading Number...');
              }
            }
          }
        })
        .when('/:id', {
          controller: 'NumberController',
          template: '<h1>Entered some number in numberJsApp</h1>',
          resolve: {
            init: function() {
              return function($route) {
                console.log('Loading some number ' + $route.current.params.id);
              }
            }
          }
        })
        .otherwise({redirectTo:'/unknown'});;
    }
  ])
  .controller('NumberController', ['$scope', '$route', 'init',
    function($scope, $route, init) {
      init($route);
    }
  ]);