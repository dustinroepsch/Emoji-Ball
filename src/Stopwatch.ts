export class Stopwatch {
    private lastTick: number;

    constructor() {
        this.lastTick = Date.now();
    }

    public readSeconds(): number {
        const nextTickTime: number = Date.now();
        const delta: number = nextTickTime - this.lastTick;
        this.lastTick = nextTickTime;
        return delta * 0.001;
    }

}