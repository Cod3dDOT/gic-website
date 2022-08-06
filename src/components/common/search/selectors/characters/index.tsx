import { MImage } from '@components/common/image';
import { ICharacter } from '@lib/gdata/interfaces/ICharacter';
import { ElementKeys } from '@lib/gdata/keys';
import { slugify } from '@utilities';
import { memo } from 'react';

import { AvailableSearchTypes } from '../..';

export interface SearchCharacterSelectorProps {
	selected: boolean;
	available: boolean;
	val: AvailableSearchTypes;
}

const ElementColors: { [key in ElementKeys]: string } = {
	anemo: 'text-dark-element-anemo',
	cryo: 'text-dark-element-cryo',
	dendro: 'text-dark-element-dendro',
	electro: 'text-dark-element-electro',
	geo: 'text-dark-element-geo',
	hydro: 'text-dark-element-hydro',
	pyro: 'text-dark-element-pyro'
};

const SearchCharacterSelector: React.FC<SearchCharacterSelectorProps> = ({
	// selected,
	// available,
	val
}) => {
	const _val = val as ICharacter;
	return (
		<div className="relative block w-[21%] flex-grow aspect-square rounded-md bg-dark-primary overflow-clip">
			<MImage
				src={`/images/characters/${slugify(val.name)}.webp`}
				sizes="200px"
			/>
			<div className="absolute z-10 bottom-0 w-full backdrop-blur-md px-2 py-2 bg-dark-primary-light bg-opacity-40">
				<p
					className={`text-md ${
						ElementColors[_val.elements[0].key as ElementKeys]
					}`}
				>
					{val.name}
				</p>
			</div>
		</div>
	);
};

export const MSearchCharacterSelector = memo(SearchCharacterSelector);
