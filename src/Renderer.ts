import { GameState, Ball } from "./GameState";

export class Renderer {
    private constructor() { }

    public static render(ctx: CanvasRenderingContext2D, state: GameState): void {
        ctx.clearRect(0, 0, state.gameWidth, state.gameHeight);
        Renderer.renderBall(ctx, state.ball);
    }

    public static renderBall(ctx: CanvasRenderingContext2D, ball: Ball): void {
        ctx.font = ctx.font.replace(/\d+px/g, `${ball.radius * 2}px`);
        ctx.fillText(ball.sprite, ball.position.x - ball.radius, ball.position.y + ball.radius);
       
        // ctx.beginPath();
        // ctx.ellipse(ball.position.x, ball.position.y, ball.radius, ball.radius, 0, 0, 360, undefined);
        // ctx.stroke();
    }
}