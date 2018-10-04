export const testjsModule = angular
.module('testjsModule', ['ui.router'])
.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $stateProvider.state('helloapp', {
        url: '/helloapp',
        template: '<div ui-view></div>',
        redirectTo: {
            state: 'helloapp.hi'
        }
    });

    $stateProvider.state('helloapp.hola', {
        url: '/hola',
        template: `
            <div style="background-color: yellow">
                <div>Hola!</div>
            </div>
`
    });

    $stateProvider.state('helloapp.hi', {
        url: '/hi',
        template: `
        <div style="background-color: yellow">
            <div>Hi!</div>
        </div>
        `
    });
}]);

