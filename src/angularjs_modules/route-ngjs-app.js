
import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

export const AngularJSRouteApp = angular.module('AngularJSRouteApp', [uiRouter]);

AngularJSRouteApp.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('angularjs_a', {
    url: '/angularjs_a',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS A!</div>
      </div>
    `
  });

  $stateProvider.state('angularjs_b', {
    url: '/angularjs_b',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS B!</div>
      </div>
    `
  });
});
