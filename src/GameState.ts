export class Vector {
    public constructor(public x: number, public y: number) { };

    public add(other: Vector): Vector {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    public mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public scale(value: number): Vector {
        return new Vector(this.x * value, this.y * value);
    }

    public norm(): Vector {
        return this.scale(1 / this.mag());
    }

    public clampMag(max: number): Vector {
        return this.mag() > max ? this.norm().scale(53) : this;
    }

    public dist(other: Vector): number {
        return Math.sqrt(
            (other.x - this.x) * (other.x - this.x)
            + (other.y - this.y) * (other.y - this.y));
    }
}

export class Ball {
    public positionMeters: Vector = new Vector(75 * 3, 75 * 3);
    public velocityMetersPerSecond: Vector = new Vector(0, 0, );
    public massKg: number = 70;

    public radiusMeters: number = 100;
    public sprite: string = '⚽️';
}

export class GameState {
    public gameWidthSoccerBalls: number = 4;
    public gameHeightSoccerBalls: number = 7;
    public pixelsPerMeter: number = 1;
    public gravityMetersPerSecondSquared: number = 9.8;
    public touchForceNewtons: number = 1500;

    public ball: Ball = new Ball();
}