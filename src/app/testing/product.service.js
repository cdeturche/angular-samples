(function() {
    'use strict';

    angular
        .module('testing')
        .factory('productService', ProductService);

    ProductService.$inject = [];

    function ProductService() {
        return {
            add : add,
            remove : remove,
            clear : clear
        }

        var products = [];

        function add(product) {

        };

        function remove(product) {

        }

        function clear() {

        }
    }
})();