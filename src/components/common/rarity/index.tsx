import { RiStarFill } from "react-icons/ri";

export const RarityStar = RiStarFill;

export interface RarityProps {
    rarity: string | number;
    full?: boolean;
    className?: string;
}

export const Rarity: React.FC<RarityProps> = ({
    rarity = 5,
    full = true,
    className = "",
}) => {
    return (
        <div>
            {Array.from({ length: rarity as number }, (_, index) => {
                if (!full && rarity === index) return;
                return (
                    <RiStarFill
                        key={`rarity_star_${index}`}
                        color={rarity > index ? "FFB802" : "888"}
                        className={`w-12 aspect-square transition-colors ${className}`}
                    />
                );
            })}
        </div>
    );
};
