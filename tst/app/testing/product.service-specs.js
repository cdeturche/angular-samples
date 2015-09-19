'use strict';

describe('productService', function () {
    var service;

    beforeEach(module('testing'));

    beforeEach(inject(function (productService) {
        service = productService;
    }));

    describe('add', function () {

        it('should have an "add" function', function () {
            expect(angular.isFunction(service.add)).toBeTruthy();
        });

        it('should add a product', function () {
            expect(service.listAll().length).toEqual(0);

            service.add({label: 'HP Printer'});

            expect(service.listAll().length).toEqual(1);
        });

        it('should return true if product is added', function() {
            expect(service.add({label: 'HP Printer'})).toEqual(true);
        });

        it('should return false if product already exists', function() {
            expect(service.add({label: 'HP Printer'})).toEqual(true);
            expect(service.add({label: 'SFR Modem'})).toEqual(true);

            expect(service.add({label: 'SFR Modem'})).toEqual(false);

        });

    });

    describe('listAll', function () {

        it('should have a "listAll" function', function () {
            expect(angular.isFunction(service.listAll)).toBeTruthy();
        });

        it('should have no products initially', function () {
            expect(service.listAll().length).toEqual(0);
        });

    });

    describe('remove', function () {
        it('should have a "remove" function', function () {
            expect(angular.isFunction(service.remove)).toEqual(true);
        });

        it('should return false if product not found', function () {
            expect(service.remove({label: 'Bouygues ADSL Box'})).toEqual(false);
        });

        it('should return true if product found and removed', function () {
            service.add({label: 'HP Printer'});
            service.add({label: 'Bouygues ADSL Box'});
            service.remove({label: 'Bouygues ADSL Box'});

            var result = service.listAll();

            expect(result.length).toEqual(1);
            expect(result[0].label).toEqual('HP Printer');
        });
    });

    describe('clear', function () {
        it('should have a "clear" function', function () {
            expect(angular.isFunction(service.clear)).toEqual(true);
        });

        it('should clear all products', function() {
            service.add({label: 'HP Printer'});
            service.add({label: 'Bouygues ADSL Box'});

            service.clear();

            expect(service.listAll().length).toEqual(0);
        });
    });

});