(function() {
    'use strict';

    angular
        .module('testing')
        .factory('productService', ProductService);

    ProductService.$inject = [];

    function ProductService() {
        var products = [];

        return {
            add : add,
            remove : remove,
            clear : clear,
            listAll : listAll
        }

        function add(product) {
            products.push(product);
        };

        function remove(product) {
            var i = 0;
            var found = false;

            while(i < products.length && !found) {
                if(product.label === products[i].label) {
                    found = true;
                } else {
                    i++;
                }
            }

            if(found) {
                products.splice(i,1);
                return true;
            }

            return false;
        }

        function clear() {

        }

        function listAll() {
            return products;
        }
    }
})();