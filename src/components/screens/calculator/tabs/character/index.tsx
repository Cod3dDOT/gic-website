import { Search } from "@components/common";
import { Character } from "@data/database/data-classes";
import { useState } from "react";
import { TabWrapperProps } from "../layout";
import { TabWrapper } from "../layout";

export type CharacterTabProps = {
    characters: Array<Character>;
} & TabWrapperProps;

export const CharacterTab: React.FC<CharacterTabProps> = ({
    characters,
    visible,
}) => {
    const [openedCharacterSettings, setOpenedCharacterSettings] =
        useState<boolean>(false);
    const [chosenCharacter, setChosenCharacter] = useState<Character>();

    return (
        <TabWrapper
            visible={visible}
            className={openedCharacterSettings ? "gap-0" : "gap-8"}
        >
            <div className="w-full h-full">
                <Search all={characters} />
            </div>
            <div
                className={`h-full w-full max-w-full transition-all bg-dark-primary-lighter ${
                    openedCharacterSettings ? "max-w-full" : "max-w-0"
                }`}
            ></div>
        </TabWrapper>
    );
};
