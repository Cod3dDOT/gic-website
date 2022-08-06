import { Button, RarityProps, RarityStar } from '@components/common';
import { RarityKeys } from '@lib/gdata/keys';
import { useState } from 'react';

export type SearchRarityFilterProps = RarityProps & {
	onChanged?: (rarity: RarityKeys) => void;
};

export const SearchRarityFilter: React.FC<SearchRarityFilterProps> = ({
	full = true,
	rarity,
	className = '',
	onChanged
}) => {
	const [_rarity, _setRarity] = useState<RarityKeys>(rarity);

	const setRarity = (rarity: RarityKeys) => {
		_setRarity(rarity);
		if (onChanged) onChanged(_rarity);
	};

	return (
		<div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light">
			<p className="flex-grow">Rarity</p>
			<div className="flex h-8">
				{Array.from({ length: 5 }, (_, index) => {
					if (!full && _rarity === (index as RarityKeys)) return;
					return (
						<Button
							key={`rarity_star_${index}`}
							onClick={() => setRarity((index + 1) as RarityKeys)}
							className="p-[0.05rem]"
						>
							<RarityStar
								color={
									_rarity > (index as RarityKeys)
										? 'FFB802'
										: '888'
								}
								className={`w-auto aspect-square transition-colors text-lg ${className}`}
							/>
						</Button>
					);
				})}
			</div>
		</div>
	);
};
