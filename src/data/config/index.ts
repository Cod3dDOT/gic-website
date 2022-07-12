import { formatPastTime, getNextUrl } from "@utilities";
import { Config } from "pages/api/config";

export const getConfig = async () => {
    const cfgRequest = await fetch(getNextUrl() + "/api/config");
    let config = (await cfgRequest.json()) as Config;

    if (
        !process.env.NEXT_PUBLIC_GIT_COMMIT_API_TOKEN ||
        !process.env.NEXT_PUBLIC_GIT_COMMIT_API_URL
    ) {
        return config;
    }

    const commitRequest = await fetch(
        process.env.NEXT_PUBLIC_GIT_COMMIT_API_URL,
        {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_GIT_COMMIT_API_TOKEN,
            },
        }
    );

    const commitJson = await commitRequest.json();

    const date = formatPastTime(new Date(commitJson[0].updated_at), true);
    const status = commitJson[0].state;

    config.lastCommit = {
        date: date,
        status: status,
    };
    return config;
};
