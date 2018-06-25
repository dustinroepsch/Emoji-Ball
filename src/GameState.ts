export class Vector {
    public x: number = 0;
    public y: number = 0;
}

export class Ball {
    public position: Vector = { x: 100, y: 100 };
    public radius: number = 25;
    public sprite: string = '⚽️';
}

export class GameState {
    public gameWidth: number = 500;
    public gameHeight: number = 900;

    public ball: Ball = new Ball();
}