'use strict';

describe('productService', function() {
    var service;

    beforeEach(module('testing'));

    beforeEach(inject(function(productService) {
        service = productService;
    }));

    describe('add', function() {

        it('should have an "add" function', function() {
           expect(angular.isFunction(service.add)).toBeTruthy();
        });

    });

});