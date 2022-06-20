import { SearchBar, SearchBarEntry } from "@components/common";

import { Character } from "@data/database";
import { slugify } from "@data/utilities";

import { useState } from "react";

import { ImageFallback } from "@components/common";

interface Map {
    [key: string]: string | undefined;
}

const rarityToWidth: Map = {
    "0": "w-0/5",
    "1": "w-1/5",
    "2": "w-2/5",
    "3": "w-3/5",
    "4": "w-4/5",
    "5": "w-full",
};

export interface CharacterSelectProps {
    all: Array<Character>;
    def?: number;
    onCharacterSelect?: (character: Character) => void;
    className?: string;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({
    all,
    def = 0,
    onCharacterSelect = (character: Character) => {},
    className = "",
}) => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character>(
        all[def]
    );

    const searchValues = all.map((character) => {
        return new SearchBarEntry<Character>(
            character.name,
            character,
            character.images.icon
        );
    });

    const onCharacterSelected = (character: Character) => {
        setSelectedCharacter(character);
    };

    const getCharacterPortrait = (character: Character) => {
        if (character.images.portrait) return character.images.portrait;
        if (character.images["hoyolab-avatar"])
            return character.images["hoyolab-avatar"];
        if (character.images.icon) return character.images.icon;
        return "/characters/preview/not-found-dark.svg";
    };

    const getCharacterElement = (character: Character) => {
        const el = slugify(character.element);
        if (el === "none") return "not-found-dark.svg";
        return el + ".png";
    };

    return (
        <div
            className={`group relative h-88 w-72 border-4 border-dark-primary-light rounded-lg overflow-hidden ${className}`}
        >
            <div className="absolute w-full h-full">
                <div className="absolute w-full h-full character-image-mask">
                    <div className="relative block mt-4 w-full h-full">
                        <ImageFallback
                            src={getCharacterPortrait(selectedCharacter)}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center top"
                            fallback="/icons/elements/not-found-dark.svg"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 p-4 w-full text-white flex justify-between">
                    <div className="relative block w-8 h-8 my-auto">
                        <ImageFallback
                            src={`/icons/elements/element-${getCharacterElement(
                                selectedCharacter
                            )}`}
                            layout="fill"
                            objectFit="contain"
                            fallback="/icons/elements/not-found-dark.svg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="relative ml-auto w-[75px] h-[15px] [mask:url(/icons/icon_rarity_star.png)_left/15px_15px] float-right">
                            <span
                                className={`absolute block ${
                                    rarityToWidth[selectedCharacter.rarity]
                                } h-full bg-yellow-400 right-0`}
                            ></span>
                        </div>

                        <div className="text-right font-medium text-xl">
                            {selectedCharacter.name}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute w-full h-full invisible opacity-0 group:opacity-100 group-hover:visible group-hover:opacity-100 bg-dark-primary backdrop-blur-lg bg-opacity-60 transition-all">
                <SearchBar
                    all={searchValues}
                    className="p-4"
                    onSelected={(character) => onCharacterSelected(character)}
                />
            </div>
        </div>
    );
};
