import { Artifact as GDbArtifact, GenshinDB } from "@data/database/genshin-db";
import { toArtifact } from "@data/database/data-classes";
import { DatabaseError } from "@data/database";

export const getArtifacts = async () => {
    let characters = GenshinDB().artifacts("names", {
        matchCategories: true,
        verboseCategories: true,
    });

    if (characters === undefined) throw new DatabaseError();

    return characters.map((old: GDbArtifact) => {
        return toArtifact(old);
    });
};
