import type { NextApiRequest, NextApiResponse } from "next";

export interface Config {
    publicVersion: string;
    devVersion: string;
    underConstruction: boolean;
    underMaintainance: boolean;
}

const config: Config = {
    publicVersion: "0.1.0-dev.1",
    devVersion: "0.1.0-dev.1",
    underConstruction: true,
    underMaintainance: false,
};

const response = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(config);
};

export default response;
