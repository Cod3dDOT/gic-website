let _genshinDB;

export const GenshinDB = () => {
    return _genshinDB;
};

export const fetchDatabaseLoader = async () => {
    _genshinDB = await import("./loader");
};
