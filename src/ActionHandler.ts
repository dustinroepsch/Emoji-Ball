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
                const touchPointMeters: Vector = new Vector(
                    action.params.xPixels / oldState.pixelsPerMeter
                    , action.params.yPixels / oldState.pixelsPerMeter);

                if (touchPointMeters.dist(oldState.ball.positionMeters) < oldState.ball.radiusMeters * 1.5 ) { //add some wiggle room 
                    const accelerationY: number = oldState.touchForceNewtons / oldState.ball.massKg;
                    newState.ball.velocityMetersPerSecond.y -= accelerationY;
                }

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