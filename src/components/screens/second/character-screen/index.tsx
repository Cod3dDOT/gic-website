import { Image, Slider } from "@components/common";
import { CharacterSelect } from "./character-select";

import { getCharacters, Character } from "@data/database";

import { useState } from "react";
import { Select, EntryFromArray } from "@components/common";

export interface CharacterScreenProps {
    className?: string;
}

export const CharacterScreen: React.FC<CharacterScreenProps> = ({
    className = "",
}) => {
    const characters = getCharacters();
    const [selectedCharacter, setSelectedCharacter] = useState<Character>(
        characters[0]
    );

    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="sm:text-4xl sm:text-left text-2xl text-center mb-6 font-medium">
                Character
            </h1>
            <div className="flex sm:flex-row flex-col gap-4 h-full overflow-hidden">
                <div className="flex sm:flex-col flex-row gap-4 xl:w-72 lg:w-64 md:w-60 sm:w-48 w-full">
                    <CharacterSelect
                        all={characters}
                        onCharacterSelected={setSelectedCharacter}
                        className="xl:h-88 lg:h-80 md:h-72 sm:h-72 sm:w-auto h-72 w-48"
                    />

                    <div className="flex flex-col space-y-4 flex-1 max-h-72 overflow-hidden">
                        <div className="w-full prose prose-sm prose-invert overflow-y-auto lg:prose-sm">
                            <blockquote>
                                {selectedCharacter.description}
                            </blockquote>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-between">
                            <div className="flex justify-between bg-dark-primary p-1 w-full max-w-full rounded-md">
                                <div className="aspect-square">
                                    <Image
                                        src={`/icons/weapon-types/icon-${selectedCharacter.weapontype.toLowerCase()}.webp`}
                                        sizes="32px"
                                        width={0}
                                    />
                                </div>
                                <div className="p-1 whitespace-nowrap">
                                    {selectedCharacter.weapontype}
                                </div>
                            </div>
                            <div className="flex justify-between bg-dark-primary p-1 w-full max-w-full rounded-md">
                                <div className="aspect-square">
                                    <Image
                                        src={`/icons/weapon-types/icon-${selectedCharacter.weapontype.toLowerCase()}.webp`}
                                        sizes="32px"
                                        width={0}
                                    />
                                </div>
                                <p className="p-1 whitespace-nowrap">
                                    {selectedCharacter.substat}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col overflow-y-auto gap-4 flex-grow">
                    <div
                        className="lg:flex-col md:flex-row flex flex-col
                                    lg:max-h-full sm:max-h-[50%] lg:w-64
                                    gap-8 border-4 border-dark-primary-light overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4 lg:w-auto md:w-full">
                            <h3 className="text-xl">Header</h3>
                            <Slider name="Character Level" step={1} max={90} />
                            <Slider name="Constellations" max={6} />
                            <Select
                                name="Character Level"
                                all={EntryFromArray([
                                    0, 10, 20, 30, 40, 50, 60, 70, 80, 90,
                                ])}
                            />
                        </div>
                        <div className="flex flex-col gap-4 lg:w-auto md:w-full">
                            <h3 className="text-xl">Header</h3>
                            <Slider name="Character Level" step={1} max={90} />
                            <Slider name="Constellations" max={6} />
                            <Select
                                name="Character Level"
                                all={EntryFromArray([
                                    0, 10, 20, 30, 40, 50, 60, 70, 80, 90,
                                ])}
                            />
                        </div>
                    </div>
                    <div className="border-4 border-dark-primary-light flex-grow"></div>
                </div>
            </div>
        </div>
    );
};
