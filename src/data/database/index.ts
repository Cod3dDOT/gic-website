import GenshinDb, { Character as GenshinDbCharacter } from "./genshin-db";
import GenshinDbOLoader from "./genshin-db";

import { Map } from "@data/utilities";

export type Character = { elements: string[] } & GenshinDbCharacter;

export const getCharacters = () => {
    // fetchData();

    const customElementsMap: Map<string[]> = {
        Aether: ["anemo", "electro", "geo"],
        Lumine: ["anemo", "electro", "geo"],
    };

    let characters = GenshinDb.characters("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    if (characters === undefined) return [];

    return characters.map((old: GenshinDbCharacter) => {
        let character: Character = { ...old, elements: [] };

        if (customElementsMap[character.name]) {
            character.elements = customElementsMap[character.name];
        } else {
            character.elements = [character.element.toLowerCase()];
        }

        return character;
    });
};

// export const fetchData = async () => {
//     const response = await fetch("/api/data");
//     const json = JSON.parse(await response.json());

//     GenshinDb.addData(json);
//     let searchResult = GenshinDb.characters("names", {
//         matchCategories: true,
//     });
//     console.log(searchResult);
// };
