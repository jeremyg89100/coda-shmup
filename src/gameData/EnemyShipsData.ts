import { EnemyBodyData } from "./EnemyBodyData";

export type EnemyShipsData = {
    [key: string]: EnemyShipData
}

export type EnemyShipData = {
    movementSpeed: number;
    texture: string;
    body: EnemyBodyData;
}
