angular
	.module('AngularJSApp', ['ui.router'])
	.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
  //$locationProvider.html5Mode(true);

  $stateProvider.state('angularjs_a', {
    url: '/angularjs_a',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS A!</div>        
        <div>Go to AngularJS A</div>
        <div><a href="example#!/angularjs_b">Go to Angular JS B</a></div>
      </div>
    `
  });

  $stateProvider.state('angularjs_b', {
    url: '/angularjs_b',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS B!</div>
        <div><a href="example#!/angularjs_a">Go to Angular JS A</a></div>
        <div>Go to AngularJS B</div>
      </div>
    `
  });
}]);


