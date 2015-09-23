(function() {
    'use strict';

    angular
        .module('routing')
        .controller('Players', PlayersController);

    PlayersController.$inject = ['$routeParams', 'playerService'];

    function PlayersController($routeParams, playerService) {
        var vm = this;

        vm.players = playerService.getPlayers();
        vm.playerSelected = {};
        vm.showAddPlayer = false;
        vm.addPlayer = addPlayer;
        vm.showAdd = showAdd;

        activate();

        function activate() {
            var playerId = $routeParams.playerId;
            if(playerId > 0 && playerId <= vm.players.length) {
                vm.playerSelected = vm.players[playerId - 1];
            }
        }

        function addPlayer() {
            vm.showAddPlayer = false;
            playerService.add(vm.playerAdd);
            vm.showAddPlayer = false;
            vm.playerAdd = {};
        }

        function showAdd() {
            vm.showAddPlayer = true;
        }

    }
})();
