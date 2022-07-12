import GenshinDb from "../genshin-db";

let _fetchedData: boolean = false;
export const fetchedData = () => {
    return _fetchedData;
};

export const fetchData = async () => {
    const response = await fetch(
        "https://gitcdn.link/cdn/theBowja/genshin-db/main/dist/data/gzips/english-all.min.json.gzip"
    );
    const buffer = await response.arrayBuffer();
    GenshinDb.addData(buffer, true);
    _fetchedData = true;
    return true;
};

export { getCharacters } from "./characters";
export { getWeapons } from "./weapons";
export { getEnemies } from "./enemies";
export { getArtifacts } from "./artifacts";
export { getElements } from "./elements";
export { getWeaponTypes } from "./weapon-types";
