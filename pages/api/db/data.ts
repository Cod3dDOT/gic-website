import { NextApiRequest, NextApiResponse } from "next";

const response = async (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect(
        "https://gitcdn.link/cdn/theBowja/genshin-db/main/dist/data/gzips/english-all.min.json.gzip"
    );
};

export default response;
