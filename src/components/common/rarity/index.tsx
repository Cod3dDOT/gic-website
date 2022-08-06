import { RarityKeys } from '@lib/gdata/keys/RarityKeys';
import { RiStarFill } from 'react-icons/ri';

export const RarityStar = RiStarFill;

export interface RarityProps {
	rarity: RarityKeys;
	full?: boolean;
	className?: string;
}

export const Rarity: React.FC<RarityProps> = ({
	rarity = 5,
	full = true,
	className = ''
}) => {
	return (
		<div>
			{Array.from({ length: 5 }, (_, index) => {
				if (!full && rarity === (index as RarityKeys)) return;
				return (
					<RarityStar
						key={`rarity_star_${index}`}
						color={
							rarity === ((index + 1) as RarityKeys)
								? 'FFB802'
								: '888'
						}
						className={`w-12 aspect-square transition-colors ${className}`}
					/>
				);
			})}
		</div>
	);
};
