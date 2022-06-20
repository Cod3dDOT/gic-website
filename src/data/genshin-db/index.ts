import GenshinDB from "genshin-db";

export type { Character } from "genshin-db";

export const getCharacters = () => {
    return GenshinDB.characters("names", {
        matchCategories: true,
        verboseCategories: true,
    });
};
