import { ElementIcon, SearchBar, SearchBarEntry } from "@components/common";

import { Character } from "@data/database";
import { slugify } from "@data/utilities";

import { useState } from "react";

import { Image } from "@components/common";
import { RarityIcon } from "@components/common";

const getCharacterPortrait = (character: Character) => {
    if (character.images.portrait) return character.images.portrait;
    if (character.images.icon) return character.images.icon;
    if (character.images["hoyolab-avatar"])
        return character.images["hoyolab-avatar"];
    return "/characters/preview/not-found-dark.svg";
};

const getCharacterElement = (character: Character) => {
    const el = slugify(character.element);

    return el + ".png";
};

export interface CharacterSelectProps {
    all: Array<Character>;
    def?: number;
    onCharacterSelected?: (character: Character) => void;
    className?: string;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({
    all,
    def = 0,
    onCharacterSelected = (character: Character) => {},
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

    const onCharacterSelectedCallback = (character: Character) => {
        setSelectedCharacter(character);
        onCharacterSelected(character);
    };

    return (
        <div
            className={`group relative h-full w-full border-4 border-dark-primary-light rounded-lg overflow-hidden ${className}`}
        >
            <div className="absolute w-full h-full">
                <div className="absolute w-full h-full character-image-mask">
                    <div className="relative block mt-4 w-full h-full">
                        <Image
                            src={getCharacterPortrait(selectedCharacter)}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center top"
                            fallback="/icons/elements/element-not-found-dark.svg"
                            sizes="384px"
                            smoothLoad={true}
                            alt=""
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 p-4 w-full text-white flex justify-between">
                    <div className="relative block h-8 my-auto">
                        <ElementIcon
                            elements={selectedCharacter.elements}
                            className="flex"
                        />
                    </div>
                    <div className="flex flex-col">
                        <RarityIcon
                            rarity={selectedCharacter.rarity}
                            className="ml-auto"
                            align="right"
                        />

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
                    onSelected={onCharacterSelectedCallback}
                />
            </div>
        </div>
    );
};
