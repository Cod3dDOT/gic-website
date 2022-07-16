let _genshinDB = null;

export const GenshinDB = () => {
    return _genshinDB;
};
export const fetchDatabaseLoader = async () => {
    _genshinDB = await import("./loader");
};
