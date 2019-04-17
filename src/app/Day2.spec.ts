import { calculateWrappingPaper, Vector3, calculateRibbon } from './Day2';
import { day2input } from './day2data';

describe('Advent Day 2', () => {

    [
        {dimensions: {x: 2, y: 3, z: 4}, expected: 58},
        {dimensions: {x: 1, y: 10, z: 1}, expected: 43},
        {dimensions: {x: 1, y: 1, z: 1}, expected: 7}
    ].forEach((theory) => {
        it('Calculates required wrapping paper', () => {
            expect(calculateWrappingPaper(theory.dimensions))
                .toEqual(theory.expected);
        });
    });

    [
        {dimensions: {x: 2, y: 3, z: 4}, expected: 34},
        {dimensions: {x: 1, y: 10, z: 1}, expected: 14},
        {dimensions: {x: 1, y: 1, z: 1}, expected: 5}
    ].forEach((theory) => {
        it('Calculates required ribbon', () => {
            expect(calculateRibbon(theory.dimensions))
                .toEqual(theory.expected);
        });
    });

    [
        {
            description: 'Calculates total ribbon for testdata',
            function: calculateWrappingPaper,
            expected: 1598415
        },
        {
            description: 'Calculates total wrapping paper for testdata',
            function: calculateRibbon,
            expected: 3812909
        }
    ].forEach((theory) => {
        it(theory.description, () => {
            let initvalue = 0;

            day2input.forEach((v: Vector3) => {
                initvalue += theory.function(v);
            });

            expect(initvalue).toEqual(theory.expected);
        });
    });


});

