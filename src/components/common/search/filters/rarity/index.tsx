import { Button, RarityProps, RarityStar } from '@components/common';
import { RarityKeys } from '@lib/gdata/keys';
import { useState } from 'react';

export type SearchRarityFilterProps = RarityProps & {
	min?: RarityKeys;
	max?: RarityKeys;
	onChanged?: (rarity: RarityKeys) => void;
};

export const SearchRarityFilter: React.FC<SearchRarityFilterProps> = ({
	min = 1,
	max = 5,
	rarity: defaultRarity,
	onChanged
}) => {
	const [_rarity, _setRarity] = useState<RarityKeys>(defaultRarity);

	const setRarity = (rarity: RarityKeys) => {
		if (rarity === _rarity || rarity < min || rarity > max) return;
		_setRarity(rarity);
		if (onChanged) onChanged(rarity);
	};

	const getStarColor = (rarity: RarityKeys) => {
		if (rarity < min) return 'BD8800';
		if (rarity > max) return '888888';
		if (_rarity >= rarity) return 'FFB802';
		return '888888';
	};

	return (
		<div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light">
			<p className="flex-grow">Rarity</p>
			<div className="flex h-8">
				<Button
					key={`rarity_star_1`}
					onClick={() => setRarity(1)}
					className="p-[0.05rem]"
				>
					<RarityStar
						color={getStarColor(1)}
						className={`w-auto aspect-square transition-colors text-lg`}
					/>
				</Button>
				<Button
					key={`rarity_star_2`}
					onClick={() => setRarity(2)}
					className="p-[0.05rem]"
				>
					<RarityStar
						color={getStarColor(2)}
						className={`w-auto aspect-square transition-colors text-lg`}
					/>
				</Button>
				<Button
					key={`rarity_star_3`}
					onClick={() => setRarity(3)}
					className="p-[0.05rem]"
				>
					<RarityStar
						color={getStarColor(3)}
						className={`w-auto aspect-square transition-colors text-lg`}
					/>
				</Button>
				<Button
					key={`rarity_star_4`}
					onClick={() => setRarity(4)}
					className="p-[0.05rem]"
				>
					<RarityStar
						color={getStarColor(4)}
						className={`w-auto aspect-square transition-colors text-lg`}
					/>
				</Button>
				<Button
					key={`rarity_star_5`}
					onClick={() => setRarity(5)}
					className="p-[0.05rem]"
				>
					<RarityStar
						color={getStarColor(5)}
						className={`w-auto aspect-square transition-colors text-lg`}
					/>
				</Button>
			</div>
		</div>
	);
};
