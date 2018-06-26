import { GameState } from "./GameState";
import { DataExtracter } from "./DataExtracter";

export class Renderer {
    private constructor() { }

    public static render(ctx: CanvasRenderingContext2D, state: GameState): void {
        ctx.clearRect(0, 0, DataExtracter.gameWidthPixels(state), DataExtracter.gameHeightPixels(state));
        Renderer.renderBall(ctx, state);
    }

    public static renderBall(ctx: CanvasRenderingContext2D, state: GameState): void {
        ctx.font = ctx.font.replace(/\d+px/g, `${state.ball.radiusMeters * 2 * state.pixelsPerMeter}px`);
        ctx.fillText(
            state.ball.sprite,
            state.ball.positionMeters.x * state.pixelsPerMeter - state.ball.radiusMeters * state.pixelsPerMeter,
            state.ball.positionMeters.y * state.pixelsPerMeter + state.ball.radiusMeters * state.pixelsPerMeter);

        // ctx.beginPath();
        // ctx.ellipse(ball.position.x, ball.position.y, ball.radius, ball.radius, 0, 0, 360, undefined);
        // ctx.stroke();
    }
}