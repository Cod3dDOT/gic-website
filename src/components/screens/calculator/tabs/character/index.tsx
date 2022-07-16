import { Search } from "@components/common";
import { DBState, getCharacters, getDBState } from "@data/database";
import { Character } from "@data/database/data-classes";
import React from "react";
import { useEffect, useState } from "react";
import { Tabs } from "..";
import { MTabWrapper } from "../wrapper";

export type CharacterTabProps = {};

export const CharacterTab: React.FC<CharacterTabProps> = () => {
    const [characters, setCharacters] = useState<Array<Character>>([]);
    const [chosenCharacter, setChosenCharacter] = useState<Character>();

    const [openedSettings, setOpenedSettings] = useState<boolean>(false);

    useEffect(() => {
        if (getDBState() !== DBState.READY) return;
        setCharacters(getCharacters());
    }, [getDBState() === DBState.READY]);

    return (
        <MTabWrapper tab={Tabs.Character}>
            <div className="w-full h-full">
                <Search all={characters} />
            </div>
            <div
                className={`h-full w-full max-w-full transition-all bg-dark-primary-lighter ${
                    openedSettings ? "max-w-full" : "max-w-0"
                }`}
            ></div>
        </MTabWrapper>
    );
};

export const MCharacterTab = React.memo(CharacterTab);
