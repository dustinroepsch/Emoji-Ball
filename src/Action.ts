export enum Actions {
    TICK = "TICK",
    CLICK = "CLICK",
}

export interface Action {
    type: Actions;
    params: any;
}