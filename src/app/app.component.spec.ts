import { calculateFloor } from './Day1';

/*(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.*/

describe('Advent', () => {
    [
        { instructions: '(())', expected: 0 },
        { instructions: '()()', expected: 0 },
        { instructions: '(((', expected: 3 }
    ].forEach((i) => {
        it(`should calculate ${i.instructions} as ${i.expected}`, () => {
            expect(calculateFloor(i.instructions))
                .toEqual(i.expected);
        });
    });
});
