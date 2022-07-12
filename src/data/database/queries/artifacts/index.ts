import GenshinDb, { Artifact as GDbArtifact } from "@data/database/genshin-db";
import { toArtifact } from "@data/database/data-classes";
import { DatabaseError } from "@data/database";

export const getArtifacts = () => {
    let characters = GenshinDb.artifacts("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    if (characters === undefined) throw new DatabaseError();

    return characters.map((old: GDbArtifact) => {
        return toArtifact(old);
    });
};
