import { formatPastTime, getNextUrl } from "@utilities";
import { Config } from "pages/api/config";

export const getConfig = async () => {
    const cfgRequest = await fetch(getNextUrl() + "/api/config");
    let config = (await cfgRequest.json()) as Config;
    return config;
};
