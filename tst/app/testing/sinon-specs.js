'use strict';

describe('Sinon tests', function () {

    function once(fn) {
        var returnValue, called = false;
        return function () {
            if (!called) {
                called = true;
                returnValue = fn.apply(this, arguments);
            }
            return returnValue;
        };
    }

    describe('Spies with Sinon', function () {

        // Ce qui nous intéresse c'est de savoir si la fonction passée en paramètre
        // n'est appelé qu'une fois lors de l'appel initial

        // Code pris sur http://sinonjs.org/
        it("calls the original function", function () {
            var callback = sinon.spy();
            var proxy = once(callback);

            proxy();

           expect(callback.called).toBe(true);
        });

        it("calls the original function only once", function() {
            var callback = sinon.spy();
            var proxy = once(callback);

            proxy();
            proxy();

            expect(callback.calledOnce).toBe(true);
        });

        it("calls original function with right this and args", function () {
            var callback = sinon.spy();
            var proxy = once(callback);
            var obj = {};

            proxy.call(obj, 1, 2, 3);

            expect(callback.calledOn(obj)).toBe(true);
            expect(callback.calledWith(1, 2, 3)).toBe(true);
        });

    });

    describe('Stubs with Sinon', function () {

        var fakeData = {'x' : 152, 'y' : 251};

        var serviceLocalisation = {
            getPosition : function() {
                return {'x' : 13, 'y': 93}
            },
            getCity : function() {
                return 'New York';
            }
        }

        it('can stub getPosition', function() {
            expect(serviceLocalisation.getCity()).toBe('New York');
            expect(serviceLocalisation.getPosition()).toEqual({'x' : 13, 'y': 93});

            sinon.stub(serviceLocalisation, "getPosition").returns(fakeData);

            expect(serviceLocalisation.getPosition()).toEqual({'x' : 152, 'y' : 251});
        });

    });

});