export class Vector3 {
    x: number;
    y: number;
    z: number;
}

export function calculateWrappingPaper(dimensions: Vector3): number {
    return calculateSurfaceArea(dimensions) + smallestSideArea(dimensions);
}

export function calculateRibbon(dimensions: Vector3): number {
    return calculateVolume(dimensions) + smallestSidePerimeter(dimensions)
}

function calculateSurfaceArea(dimensions: Vector3): number {
    return (2 * dimensions.x * dimensions.y)
        + (2 * dimensions.y * dimensions.z)
        + (2 * dimensions.x * dimensions.z);
}

function calculateVolume(dimensions: Vector3): number {
    return dimensions.x * dimensions.y * dimensions.z;
}

function smallestSideArea(dimensions: Vector3): number {
    return smallestFace(dimensions).reduce((a, b) => a * b);
}

function smallestSidePerimeter(dimensions: Vector3): number {
    return smallestFace(dimensions).reduce((a, b) => 2 * (a + b));
}

function smallestFace(dimensions: Vector3): [number, number] {
    const smallestVals: number[] = [dimensions.x, dimensions.y, dimensions.z]
        .sort((a, b) => a - b);

    return [smallestVals[0], smallestVals[1]];
}

