'use strict';

describe('array', function() {

    it('should add elements', function() {
        var array = [1,2,3];

        array.push(4);

        expect(array.length).toEqual(4);
    });

    it('should clear array', function() {
        var array = [1,2,3];

        array = [];

        expect(array.length).toEqual(0);
    });

    it('should remove an element', function() {
        var array = [1,2,3,4];

        array.splice(2,1);

        expect(array.length).toEqual(3);
        expect(array[0]).toEqual(1);
        expect(array[1]).toEqual(2);
        expect(array[2]).toEqual(4);
    });

    it('should remove the last element', function() {
        var array = [1,2,3,4];

        array.splice(3,1);

        expect(array.length).toEqual(3);
        expect(array[0]).toEqual(1);
        expect(array[1]).toEqual(2);
        expect(array[2]).toEqual(3);
    });



    it('should remove an element in objects array', function() {
        var array = [];

        array.push({label : 'Printer A4'});
        array.push({label : 'Modem 56k'});

        array.splice(1,1);

        expect(array.length).toEqual(1);
    });


});