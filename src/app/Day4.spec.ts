import { computeAdventCoin } from './Day4';

describe('Advent Day4', () => {
    [
        { secret: 'abcdef', zeroCount: 5, expected: 609043 },
        { secret: 'pqrstuv', zeroCount: 5, expected: 1048970 },
        { secret: 'bgvyzdsv', zeroCount: 5, expected: 254575 },
        { secret: 'bgvyzdsv', zeroCount: 6, expected: 1038736 }
    ].forEach((theory) => {
        it(`secret ${theory.secret} returns ${theory.expected}`, () => {
            expect(computeAdventCoin(theory.secret, theory.zeroCount))
                .toEqual(theory.expected);
        });
    });
});
