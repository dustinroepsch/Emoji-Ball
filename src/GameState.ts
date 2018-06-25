export class Vector {
    public x: number = 0;
    public y: number = 0;
}

export class Ball {
    public positionMeters: Vector = { x: .0095, y: .0095 };
    public radiusMeters: number = .0095;
    public sprite: string = '⚽️';
}

export class GameState {
    public gameWidthSoccerBalls: number = 5;
    public gameHeightSoccerBalls: number = 10;
    public pixelsPerMeter: number = 1;

    public ball: Ball = new Ball();
}