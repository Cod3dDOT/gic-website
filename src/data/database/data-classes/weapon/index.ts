import { Weapon as GDbWeapon } from "../../genshin-db";

export type Weapon = GDbWeapon;

export const toWeapon = (original: GDbWeapon): Weapon => {
    return original;
};
