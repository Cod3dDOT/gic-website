import { getNextUrl } from "@utilities";
import { fetchDatabaseLoader, GenshinDB } from "../genshin-db";

export enum DBState {
    NONE,
    FETCHING,
    READY,
}

let _dbState = DBState.NONE;
export const getDBState = () => {
    return _dbState;
};

export const fetchData = async () => {
    _dbState = DBState.FETCHING;
    await fetchDatabaseLoader();

    const response = await fetch(getNextUrl("/api/db/data"));
    const buffer = await response.arrayBuffer();
    GenshinDB().addData(buffer, true);
    _dbState = DBState.READY;
    return buffer;
};

export { getCharacters } from "./characters";
export { getWeapons } from "./weapons";
export { getEnemies } from "./enemies";
export { getArtifacts } from "./artifacts";
export { getElements } from "./elements";
export { getWeaponTypes } from "./weapon-types";
