import GenshinDb from "./genshin-db";

export type { Character } from "./genshin-db";

export const getCharacters = () => {
    return GenshinDb.characters("names", {
        matchCategories: true,
        verboseCategories: true,
    });
};
