(function() {
    'use strict';

    angular
        .module('routing')
        .factory('playerService', PlayerService);

    PlayerService.$inject = [];

    function PlayerService() {
        var players = [
            {id : 1, name : 'Xixo', nationality : 'Allemande'},
            {id : 2, name : 'Kolento', nationality : 'Ukrainienne'},
            {id : 3, name : 'Maverick', nationality : 'Belge'}
        ];

        return {
            getPlayers : getPlayers,
            add : addPlayer
        };

        function getPlayers() {
            return players;
        }

        function addPlayer(p) {
            p.id = players.length + 1;
            players.push(p);
        }
    }
})();