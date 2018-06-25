import { GameState } from "./GameState";
import { Action, Actions } from "./Action";
import { DataExtracter } from "./DataExtracter";

export class ActionHandler {
    public static reduce(oldState: GameState, action: Action): GameState {
        const newState: GameState = { ...oldState }

        switch (action.type) {
            case Actions.SET_GAME_HEIGHT_PIXELS:
                newState.pixelsPerMeter = action.params.gameHeightPixels / DataExtracter.gameHeightMeters(oldState);
                break;
            case Actions.TICK:
                newState.ball.positionMeters.y += .00006;
                break;
            case Actions.CLICK:
                newState.ball.positionMeters.x = action.params.xPixels / oldState.pixelsPerMeter;
                newState.ball.positionMeters.y = action.params.yPixels / oldState.pixelsPerMeter;
            default:
                throw new Error(`Action type: ${action.type} is unknown.`);
        }

        return newState;
    }
}