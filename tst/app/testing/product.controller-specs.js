'use strict';

describe('productController', function() {
    var vm,
        controller,
        scope;

    beforeEach(module('testing'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller;
    }));

    // Imaginons que le controller gère des produits temporaires

});