(function () {
    'use strict';

    angular
        .module('testing')
        .controller('Products', Products);

    Products.$inject = ['productService'];

    function Products(productService) {
        var vm = this;

        vm.addProduct = addProduct;

        function addProduct(o) {
            productService.add(o);
        };
    }
})();