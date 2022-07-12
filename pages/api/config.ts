import { formatPastTime } from "@utilities";
import type { NextApiRequest, NextApiResponse } from "next";

export interface CommitInfo {
    date: string;
    status: string;
}

export interface Config {
    publicVersion: string;
    devVersion: string;
    underConstruction: boolean;
    underMaintainance: boolean;

    lastCommit?: CommitInfo;
}

const config: Config = {
    publicVersion: "0.1.0-dev.1",
    devVersion: "0.1.0-dev.1",
    underConstruction: true,
    underMaintainance: false,
};

const getLastCommitInfo = async (url: string, token: string) => {
    const commitRequest = await fetch(url, {
        headers: {
            Authorization: token,
        },
    });

    const commitJson = await commitRequest.json();

    const date = formatPastTime(new Date(commitJson[0].updated_at), true);
    const status = commitJson[0].state;

    return {
        date: date,
        status: status,
    };
};

const response = async (req: NextApiRequest, res: NextApiResponse) => {
    let cfg = config;
    if (
        process.env.NEXT_PUBLIC_GIT_COMMIT_API_TOKEN &&
        process.env.NEXT_PUBLIC_GIT_COMMIT_API_URL
    ) {
        cfg.lastCommit = await getLastCommitInfo(
            process.env.NEXT_PUBLIC_GIT_COMMIT_API_URL,
            process.env.NEXT_PUBLIC_GIT_COMMIT_API_TOKEN
        );
    }
    res.status(200).json(config);
};

export default response;
