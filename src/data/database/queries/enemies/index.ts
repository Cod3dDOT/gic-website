import GenshinDb, { Enemy as GDbEnemy } from "@data/database/genshin-db";
import { toEnemy } from "@data/database/data-classes";
import { DatabaseError } from "@data/database";

export const getEnemies = () => {
    let enemies = GenshinDb.enemies("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    if (enemies === undefined) throw new DatabaseError();

    return enemies.map((old: GDbEnemy) => {
        return toEnemy(old);
    });
};
