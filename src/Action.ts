export enum Actions {
    TICK = "TICK",
    CLICK = "CLICK",
    SET_GAME_HEIGHT_PIXELS = "SET_GAME_HEIGHT_PIXELS",
}

export interface Action {
    type: Actions;
    params: any;
}