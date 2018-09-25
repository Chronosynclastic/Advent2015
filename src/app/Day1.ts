declare global {
    interface Array<T> {
        reduceSearch(
            reducer: (accumulator: number, current: number) => number,
            condition: (currentValue: number) => boolean,
        ): number;
    }
}

if (!Array.prototype.reduceSearch) {
    Array.prototype.reduceSearch =
        function<T> (reducer, condition, index = 0, currentValue = 0): number {
            currentValue = reducer(currentValue, this[index]);

            if (condition(currentValue)) {
                return index + 1;
            }

            return this.reduceSearch(
                reducer,
                condition,
                ++index,
                currentValue
            );
        };
}

const valueOfInstruction = (parenthesis: string): number =>
    parenthesis === '(' ? 1 : -1;

const sumReduce = (accumulator: number, current: number) =>
    accumulator + current;

export function calculateFloor(instructions: string): number {
    return instructions.split('')
        .map(valueOfInstruction)
        .reduce(sumReduce);
}

export function findBasementInstruction(instructions: string): number {
    const isBasement = (currentFloor) =>
        currentFloor === -1;

    return instructions.split('')
        .map(valueOfInstruction)
        .reduceSearch(sumReduce, isBasement);
}
