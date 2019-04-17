
export function deliveries(instructions: string, workers: number = 1): number {
    const workerLocations: [number, number][] = [];

    for (let i = 0; i < workers; i++) {
        workerLocations.push([0, 0]);
    }

    const visitedLocations = new LocationSet();

    let currentWorker = 0;

    visitedLocations.add([0, 0]);

    instructions.split('').forEach((instruction) => {
        performMove(instruction, workerLocations[currentWorker]);
        visitedLocations.add(workerLocations[currentWorker]);

        currentWorker = (currentWorker + 1) % workers;
    });

    return visitedLocations.count();
}

function performMove (instruction, currentLocation) {
    switch (instruction) {
        case '^':
            currentLocation[1] += 1;
            break;
        case 'v':
            currentLocation[1] -= 1;
            break;
        case '<':
            currentLocation[0] -= 1;
            break;
        case '>':
            currentLocation[0] += 1;
            break;
    }
}

class LocationSet {

    private locations: [number, number][] = [];

    private contains(entry: [number, number]): boolean {
        return this.locations.some(v => v[0] === entry[0] && v[1] === entry[1]);
    }

    public add(entry: [number, number]): void {
        const json = JSON.stringify(entry);
        const copy = JSON.parse(json);

        if (!this.contains(copy)) {
            this.locations.push(copy);
        }
    }

    public count(): number {
        return this.locations.length;
    }
}
