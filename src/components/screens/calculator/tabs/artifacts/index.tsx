import { Search } from "@components/common";
import { Artifact } from "@data/database";
import { useSelectedTab } from "@utilities/contexts";
import React from "react";
import { useState } from "react";
import { Tabs } from "..";
import { TabWrapper } from "../wrapper";

export type ArtifactsTabProps = {};

export const ArtifactsTab: React.FC<ArtifactsTabProps> = ({}) => {
    const {
        state: { tab: selectedTab },
        dispatch,
    } = useSelectedTab();

    const [openedArtifactSettings, setOpenedArtifactSettings] =
        useState<boolean>(false);
    const [chosenArtifacts, setChosenArtifacts] = useState<Array<Artifact>>();

    return (
        <TabWrapper
            tab={Tabs.Artifacts}
            className={openedArtifactSettings ? "gap-0" : "gap-8"}
        >
            <div className="w-full h-full">
                {/* <Search all={artifacts} /> */}
                Artifacts
            </div>
            <div className="w-full h-full"></div>
        </TabWrapper>
    );
};

export const MArtifactsTab = React.memo(ArtifactsTab);
