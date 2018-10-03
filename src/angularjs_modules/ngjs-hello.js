angular
    .module('NgJsHelloApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        
        $stateProvider.state('root', {
            url: '',
            template: '<div style="background-color: yellow">Hello root</div>'
        });
        $stateProvider.state('hi', {
            url: '/hi',
            template: `
            <div style="background-color: yellow">
                <div>Hi!</div>
            </div>
            `
        });

        $stateProvider.state('hola', {
            url: '/hola',
            template: `
            <div style="background-color: yellow">
                <div>Hola!</div>
            </div>
            `
        });
    }]);
