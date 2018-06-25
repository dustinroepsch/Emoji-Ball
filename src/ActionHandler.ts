import { GameState } from "./GameState";
import { Action, Actions } from "./Action";

export class ActionHandler {
    public static reduce(oldState: GameState, action: Action): GameState {
        const newState: GameState = { ...oldState }

        switch (action.type) {
            case Actions.TICK:
                newState.ball.position.y++;
                break;
            default:
                throw new Error(`Action type: ${action.type} is unknown.`);
        }

        return newState;
    }
}