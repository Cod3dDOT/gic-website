import { Memoize } from '@boost/decorators';
import { Elements } from '@lib/gdata/Elements';
import {
	IArtifact,
	IArtifactSet,
	ICharacter,
	IEnemy,
	IWeapon
} from '@lib/gdata/interfaces';
import { IElement } from '@lib/gdata/interfaces/IElement';
import { IWeaponType } from '@lib/gdata/interfaces/IWeaponType';
import { ElementKeys, RarityKeys } from '@lib/gdata/keys';
import { WeaponTypes } from '@lib/gdata/WeaponTypes';
import { useEffect, useRef, useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import { Button } from '../button';
import {
	SearchElementsFilter,
	SearchRarityFilter,
	SearchWeaponTypesFilter
} from './filters';
import { MSearchCharacterSelector } from './selectors';

export type AvailableSearchTypes =
	| ICharacter
	| IWeapon
	| IEnemy
	| IArtifactSet
	| IArtifact;

export interface SearchProps {
	all: Array<AvailableSearchTypes>;
	def?: AvailableSearchTypes | number | undefined;
	amount?: number;
	onSelected?: (selected: AvailableSearchTypes) => void;
	onAllSelected?: (selected: Array<AvailableSearchTypes>) => void;
	className?: string;
}

class SearchFilter {
	all: Array<AvailableSearchTypes> = [];
	query = '';
	rarities: RarityKeys[] = [1, 2, 3, 4, 5];
	elements: IElement[] = Object.values(Elements);
	weaponTypes: IWeaponType[] = Object.values(WeaponTypes);

	updateAll(all: Array<AvailableSearchTypes>) {
		this.all = all;
	}

	public Filter(filter: {
		query?: string;
		rarities?: RarityKeys[];
		elements?: IElement[];
	}) {
		this.query = filter.query || this.query;
		this.rarities = filter.rarities || this.rarities;
		this.elements = filter.elements || this.elements;
		return this.filter(this.query, this.rarities, this.elements);
	}

	private filter(
		query: string,
		rarities: RarityKeys[],
		elements: IElement[]
	) {
		let filtered = this.all;
		if (query) filtered = this.filterByName(query, filtered);

		filtered = this.filterByRarity(rarities, filtered);
		filtered = this.filterByElement(elements, filtered);
		return filtered;
	}

	@Memoize()
	filterByName(name: string, all: AvailableSearchTypes[]) {
		return all.filter((item) => item.name.includes(name));
	}

	@Memoize()
	filterByRarity(rarities: RarityKeys[], all: AvailableSearchTypes[]) {
		return all.filter((item) => {
			if (item.type === 'enemy') return true;
			//fix
			if (item.type === 'artifact') return true;
			//fix
			if (item.type === 'artifact_set')
				return rarities.includes(item.rarity);

			return rarities.includes(item.rarity);
		});
	}

	@Memoize()
	filterByElement(elements: IElement[], all: AvailableSearchTypes[]) {
		return all.filter((item) => {
			if (item.type !== 'character') return true;
			return item.elements.some((el) => elements.includes(el));
		});
	}
}

export const Search: React.FC<SearchProps> = ({
	all,
	// def = undefined,
	// onSelected,
	// onAllSelected,
	className = ''
}) => {
	const [filteredValues, setFilteredValues] = useState<
		AvailableSearchTypes[]
	>([]);
	const [selected] = useState<AvailableSearchTypes[]>();
	const inputRef = useRef<HTMLInputElement>(null);

	const [searchFilter] = useState<SearchFilter>(new SearchFilter());

	const getMinStars = (): RarityKeys => {
		if (!all.length) return 0 as RarityKeys;
		switch (all[0].type) {
			case 'artifact':
				return 0 as RarityKeys;
			case 'character':
				return 4 as RarityKeys;
			case 'weapon':
				return 0 as RarityKeys;
			default:
				return 0 as RarityKeys;
		}
	};

	const updateValues = (filter: {
		name?: string;
		rarities?: RarityKeys[];
		elements?: IElement[];
	}) => {
		setFilteredValues(searchFilter.Filter(filter));
	};

	useEffect(() => {
		setFilteredValues(all);
		searchFilter.updateAll(all);
	}, [all, searchFilter]);

	const getSelector = (val: AvailableSearchTypes) => {
		const props = {
			selected: selected ? selected.includes(val) : false,
			available: true,
			val: val,
			key: 'search-' + val.type + val.name
		};
		switch (val.type) {
			case 'character':
				return <MSearchCharacterSelector {...props} />;
			case 'artifact':
				return <div></div>;
			case 'weapon':
				return <div></div>;
			case 'enemy':
				return <div></div>;
			default:
				return <div></div>;
		}
	};

	return (
		<div className={`w-full h-full flex flex-col ${className}`}>
			<div
				className="flex w-full bg-dark-primary-light rounded-md items-center group
                            h-12"
			>
				<Button className="aspect-square text-xl h-full text-dark-primary-lighter transition-colors group-focus-within:text-white">
					<RiSearch2Line />
				</Button>
				<input
					ref={inputRef}
					type="text"
					placeholder="Search..."
					className="w-full font-normal placeholder:text-dark-primary-lighter bg-transparent h-full outline-none appearance-none "
				/>
			</div>
			<div className="flex flex-wrap mt-2 gap-1 rounded-md md:p-2 md:gap-2 md:mt-1 md:bg-dark-primary">
				<SearchRarityFilter
					rarity={5}
					min={getMinStars()}
					onChanged={(r) => {
						updateValues({ rarities: [r] });
					}}
				/>
				<SearchWeaponTypesFilter />
				<SearchElementsFilter
					onChanged={(els) => {
						updateValues({ elements: els });
					}}
				/>
			</div>
			<div className="flex flex-wrap gap-4 mt-4 overflow-auto flex-grow">
				{filteredValues.length > 0 ? (
					filteredValues.map((val) => getSelector(val))
				) : (
					<div>Nothing found</div>
				)}
			</div>
		</div>
	);
};
