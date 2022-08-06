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
import { MSearchCharacterSelector, SkeletonPreview } from './selectors';

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

	const [rarity, setRarity] = useState<RarityKeys>(5);
	const [elements, setElements] = useState<Set<IElement>>(
		new Set<IElement>(Object.values(Elements))
	);
	const [weaponType, setWeaponType] = useState<Set<IWeaponType>>(
		new Set<IWeaponType>(Object.values(WeaponTypes))
	);

	const updateValues = () => {
		setFilteredValues(
			all.filter((_val: AvailableSearchTypes) => {
				switch (_val.type) {
					case 'artifact':
						return false;
					case 'character':
						return _val.rarity === rarity;
					case 'enemy':
						return false;
					case 'weapon':
						return false;
				}
			})
		);
	};

	useEffect(() => setFilteredValues(all), [all]);

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
					rarity={rarity}
					onChanged={(_r) => {
						setRarity(_r);
						updateValues();
					}}
				/>
				<SearchWeaponTypesFilter />
				<SearchElementsFilter />
			</div>
			<div className="flex flex-wrap gap-4 mt-4 overflow-auto flex-grow">
				{filteredValues.length > 0
					? filteredValues.map((val) => {
							return getSelector(val);
					  })
					: Array.from({ length: 20 }).map((_, index) => {
							return (
								<SkeletonPreview
									key={`search-preview-${index}`}
								/>
							);
					  })}
			</div>
		</div>
	);
};
