import {
    GenshinDB,
    Character as GDbCharacter,
} from "@data/database/genshin-db";
import { toCharacter } from "@data/database/data-classes";
import { DatabaseError } from "@data/database";

export const getCharacters = () => {
    let characters = GenshinDB().characters("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    if (characters === undefined) throw new DatabaseError();

    return characters.map((old: GDbCharacter) => {
        return toCharacter(old);
    });
};
