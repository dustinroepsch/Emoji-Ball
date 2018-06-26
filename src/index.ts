import { App } from "./App";
import { Renderer } from "./Renderer";
import { Actions } from "./Action";
import { DataExtracter } from "./DataExtracter";
import { Stopwatch } from "./Stopwatch";

const game: App = new App();

const canvas: HTMLCanvasElement = document.createElement('canvas');
const possiblyNullCtx: CanvasRenderingContext2D | null = canvas.getContext('2d');

if (!possiblyNullCtx) {
    const div: HTMLDivElement = document.createElement('div');
    div.appendChild(document.createTextNode('Unable to create canvas context 😓'));
    document.body.appendChild(div);
}

canvas.addEventListener('click', (event: MouseEvent) => {
    game.dispatch({
        type: Actions.CLICK,
        params: {
            xPixels: event.pageX - canvas.offsetLeft,
            yPixels: event.pageY - canvas.offsetTop,
        }
    });
});

const ctx: CanvasRenderingContext2D = possiblyNullCtx as CanvasRenderingContext2D;
document.body.appendChild(canvas);

game.dispatch({
    type: Actions.SET_GAME_HEIGHT_PIXELS,
    params: {
        gameHeightPixels: 800
    }
})

const watch = new Stopwatch();

setInterval( () => {
    game.dispatch({
        type: Actions.TICK,
        params: {
            delta: watch.readSeconds()
        },
    });

    if (canvas.width != DataExtracter.gameWidthPixels(game.state)) {
        canvas.width = DataExtracter.gameWidthPixels(game.state);
    }

    if (canvas.height != DataExtracter.gameHeightPixels(game.state)) {
        canvas.height = DataExtracter.gameHeightPixels(game.state);
    }

    Renderer.render(ctx, game.state);
}, 0.001);
