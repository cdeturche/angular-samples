(function () {
    'use strict';

    var app = angular
        .module('routing', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })
                .when('/players', {
                    templateUrl: 'players.html',
                    controller: 'Players',
                    controllerAs: 'vm'
                })
                .when('/players/:playerId', {
                    templateUrl: 'player.html',
                    controller: 'Players',
                    controllerAs: 'vm'
                })
                .otherwise({
                    templateUrl: '404.html'
                });

        }
    ]);
})();