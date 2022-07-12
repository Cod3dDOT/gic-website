import { Enemy as GDbEnemy } from "../../genshin-db";

export type Enemy = GDbEnemy;

export const toEnemy = (original: GDbEnemy): Enemy => {
    return original;
};
