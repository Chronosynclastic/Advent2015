const md5 = require('./md5.js');

export function computeAdventCoin(secret: string, zeroCount: number): number {
    return computeUntilCondition<string, boolean>((index: number) => {
        return md5(secret + index);
    }, (hash: string) => {
        return hash.substring(0, zeroCount) === '0'.repeat(zeroCount);
    });
}


function computeUntilCondition<TParam, TReturn>(
    workToDo: (index: number) => TParam,
    endCondition: (input: TParam) => TReturn
): number {
    let index = 0;

    while (true) {
        if (endCondition(workToDo(++index))) {
            return index;
        }
    }
}
