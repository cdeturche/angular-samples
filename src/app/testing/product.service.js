(function () {
    'use strict';

    angular
        .module('testing')
        .factory('productService', ProductService);

    ProductService.$inject = [];

    function ProductService() {
        var products = [];

        return {
            add: add,
            remove: remove,
            clear: clear,
            listAll: listAll
        }

        function add(product) {
            var i = find(product);

            if (i === -1) {
                products.push(product);
                return true;
            }

            return false;
        };

        function remove(product) {
            var i = find(product);

            if (i > -1) {
                products.splice(i, 1);
                return true;
            }

            return false;
        }

        function clear() {
            products = [];
        }

        function listAll() {
            return products;
        }

        function find(o) {
            var i = 0;
            var found = false;

            while (i < products.length && !found) {
                if (o.label === products[i].label) {
                    found = true;
                } else {
                    i++;
                }
            }

            if (found)
                return i;

            return -1;
        }
    }
})();