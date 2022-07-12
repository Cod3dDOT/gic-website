import { Artifact as GDbArtifact } from "../../genshin-db";

export type Artifact = GDbArtifact;

export const toArtifact = (original: GDbArtifact): Artifact => {
    return original;
};
