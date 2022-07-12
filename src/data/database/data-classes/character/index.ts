import { Character as GDbCharacter } from "../../genshin-db";

const customElementsMap: Record<string, string[]> = {
    Aether: ["anemo", "electro", "geo"],
    Lumine: ["anemo", "electro", "geo"],
};

export type Character = { elements: string[] } & GDbCharacter;

export const toCharacter = (original: GDbCharacter) => {
    let character: Character = { ...original, elements: [] };

    if (customElementsMap[character.name]) {
        character.elements = customElementsMap[character.name];
    } else {
        character.elements = [character.element.toLowerCase()];
    }

    return character;
};
