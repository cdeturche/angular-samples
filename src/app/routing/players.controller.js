(function() {
    'use strict';

    angular
        .module('routing')
        .controller('Players', PlayersController);

    PlayersController.$inject = [];

    function PlayersController() {
        var vm = this;

        vm.players = [
            {name : 'Xixo', nationality : 'Allemande'},
            {name : 'Kolento', nationality : 'Ukrainienne'},
            {name : 'Maverick', nationality : 'Belge'}
        ];
    }
})();
