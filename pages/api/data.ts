import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "data");
    //Read the json data file data.json
    const fileContents = await fs.readFile(
        jsonDirectory + "/english-all.min.json",
        "utf8"
    );
    //Return the content of the data file in json format
    res.status(200).json(fileContents);
};