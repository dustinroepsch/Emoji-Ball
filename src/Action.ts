export enum Actions {
    TICK = "TICK",
}

export interface Action {
    type: Actions;
    params: any;
}