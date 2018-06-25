import { GameState } from "./GameState";
import { Action } from "./Action";
import { ActionHandler } from "./ActionHandler";

export class App {
    public state: GameState = new GameState();

    public dispatch(action: Action) {
        //console.log(action);
        this.state = ActionHandler.reduce(this.state, action)
    }
}