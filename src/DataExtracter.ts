import { GameState } from "./GameState";

export class DataExtracter {
    private constructor() { }

    public static gameWidthMeters(state: GameState): number {
        return state.gameWidthSoccerBalls * state.ball.radiusMeters * 2;
    }

    public static gameHeightMeters(state: GameState): number {
        return state.gameHeightSoccerBalls * state.ball.radiusMeters * 2;
    }

    public static gameWidthPixels(state: GameState): number {
        return this.gameWidthMeters(state) * state.pixelsPerMeter;
    }

    public static gameHeightPixels(state: GameState): number {
        return this.gameHeightMeters(state) * state.pixelsPerMeter;
    }
}