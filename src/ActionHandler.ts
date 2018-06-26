import { GameState, Vector } from "./GameState";
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
                ActionHandler.applyGravity(newState, action.params.delta as number);
                break;
            case Actions.CLICK:
                newState.ball.positionMeters.x = action.params.xPixels / oldState.pixelsPerMeter;
                newState.ball.positionMeters.y = action.params.yPixels / oldState.pixelsPerMeter;
                newState.ball.velocityMetersPerSecond = new Vector(0, 0);
                break;
            default:
                throw new Error(`Action type: ${action.type} is unknown.`);
        }

        return newState;
    }

    private static applyGravity(stateToMutate: GameState, delta: number): void {
        const mss: number = stateToMutate.gravityMetersPerSecondSquared;
        stateToMutate.ball.velocityMetersPerSecond.y += mss * delta;
        stateToMutate.ball.velocityMetersPerSecond = stateToMutate.ball.velocityMetersPerSecond.clampMag(53);

        stateToMutate.ball.positionMeters = stateToMutate.ball.positionMeters.add(stateToMutate.ball.velocityMetersPerSecond);
    }
}