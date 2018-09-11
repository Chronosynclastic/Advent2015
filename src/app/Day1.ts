export function calculateFloor(instructions: string): number {

    const instructionsAsArray = () => {
        return instructions.split('');
    };

    const valueOf = (parenthesis) => {
        return parenthesis === '(' ? 1 : -1;
    };

    // Use Generators?

    return 0;
}
