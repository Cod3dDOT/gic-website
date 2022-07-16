import { GenshinDB, Weapon as GDbWeapon } from "@data/database/genshin-db";
import { toWeapon } from "@data/database/data-classes";
import { DatabaseError } from "@data/database/error";

export const getWeapons = () => {
    let weapons = GenshinDB().weapons("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    if (weapons === undefined) throw new DatabaseError();

    return weapons.map((old: GDbWeapon) => {
        return toWeapon(old);
    });
};
