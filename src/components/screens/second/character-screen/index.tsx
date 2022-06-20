import { Slider } from "@components/common";
import { CharacterSelect } from "./character-select";

import { getCharacters, Character } from "@data/database";

export interface CharacterScreenProps {
    className?: string;
}

export const CharacterScreen: React.FC<CharacterScreenProps> = ({
    className = "",
}) => {
    const characters = getCharacters();

    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="text-white text-4xl mb-6 font-medium inline-block">
                Character
            </h1>
            <div className="flex-grow">
                <div className="flex space-x-12 h-full">
                    <div className="space-y-4">
                        <CharacterSelect all={characters} />

                        <Slider name="Character Level" step={1} max={90} />

                        <Slider name="Constellations" max={6} />
                    </div>
                    <div className="border-4 border-dark-primary-light flex-grow"></div>
                    <div className="border-4 border-dark-primary-light flex-grow"></div>
                </div>
            </div>
        </div>
    );
};
