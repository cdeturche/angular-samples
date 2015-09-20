'use strict';

describe('productController', function() {
    var vm,
        controller,
        scope,
        sandbox,
        stubProductService;

    beforeEach(module('testing',
                function($provide) {
                    sandbox = sinon.sandbox.create();
                    stubProductService = sinon.stub({
                        add : function() {}
                    });

                    $provide.value('productService', stubProductService);
                }));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller;
        vm = controller('Products', {
                $scope : scope
            }
        );
    }));

    describe('addProduct', function() {

        it('should add a product with service', function() {
            vm.addProduct({label:"HP Soundblast"});
            expect(stubProductService.add.calledOnce).toEqual(true);
        })
    });


});