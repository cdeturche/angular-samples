(function() {
    'use strict';

    angular
        .module('routing')
        .controller('HomeCtrl', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.links = [
            {label : 'Joueurs', url : '#/players'},
            {label : 'Aide', url : '#/help'}
        ];
    }
})();