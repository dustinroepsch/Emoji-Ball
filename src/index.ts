import { App } from "./App";
import { Renderer } from "./Renderer";
import { Actions } from "./Action";

const canvas: HTMLCanvasElement = document.createElement('canvas');
const possiblyNullCtx: CanvasRenderingContext2D | null = canvas.getContext('2d');

if (!possiblyNullCtx) {
    const div: HTMLDivElement = document.createElement('div');
    div.appendChild(document.createTextNode('Unable to create canvas context 😓'));
    document.body.appendChild(div);
}

const ctx: CanvasRenderingContext2D = possiblyNullCtx as CanvasRenderingContext2D;
document.body.appendChild(canvas);

const game: App = new App();


setInterval(() => {
    game.dispatch({
        type: Actions.TICK,
        params: null,
    });
    
    if (canvas.width != game.state.gameWidth) {
        canvas.width = game.state.gameWidth;
    }

    if (canvas.height != game.state.gameHeight) {
        canvas.height = game.state.gameHeight;
    }
    
    Renderer.render(ctx, game.state);
}, 0.06);

