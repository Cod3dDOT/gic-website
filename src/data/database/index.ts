import GenshinDb, { Character as GenshinDbCharacter } from "./genshin-db";
import { Map } from "@data/utilities";

export type Character = { elements: string[] } & GenshinDbCharacter;

export const getCharacters = () => {
    const customElementsMap: Map<string[]> = {
        Aether: ["anemo", "electro", "geo"],
        Lumine: ["anemo", "electro", "geo"],
    };

    let characters = GenshinDb.characters("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    return characters.map((old) => {
        let character: Character = { ...old, elements: [] };

        if (customElementsMap[character.name]) {
            character.elements = customElementsMap[character.name];
        } else {
            character.elements = [character.element];
        }

        return character;
    });
};
