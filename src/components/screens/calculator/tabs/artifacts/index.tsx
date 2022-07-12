import { Search } from "@components/common";
import { Artifact } from "@data/database";
import { useState } from "react";
import { TabWrapperProps, TabWrapper } from "../layout";

export type ArtifactsTabProps = {
    artifacts: Array<Artifact>;
} & TabWrapperProps;

export const ArtifactsTab: React.FC<ArtifactsTabProps> = ({
    artifacts,
    visible,
}) => {
    const [openedArtifactSettings, setOpenedArtifactSettings] =
        useState<boolean>(false);
    const [chosenArtifacts, setChosenArtifacts] = useState<Array<Artifact>>();

    return (
        <TabWrapper
            visible={visible}
            className={openedArtifactSettings ? "gap-0" : "gap-8"}
        >
            <div className="w-full h-full">
                <Search all={artifacts} />
            </div>
            <div className="h-full w-full"></div>
        </TabWrapper>
    );
};
