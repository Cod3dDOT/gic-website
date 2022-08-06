import { Button, MWeaponTypeIcon } from '@components/common';
import { IWeaponType } from '@lib/gdata/interfaces/IWeaponType';
import { WeaponTypes } from '@lib/gdata/WeaponTypes';
import { useState } from 'react';

export type SearchWeaponTypesFilterProps = {
	weaponTypes?: IWeaponType[];
	def?: IWeaponType[];
	onChanged?: (weaponType: IWeaponType[]) => void;
	className?: string;
};

export const SearchWeaponTypesFilter: React.FC<
	SearchWeaponTypesFilterProps
> = ({
	weaponTypes = Object.values(WeaponTypes),
	def = weaponTypes,
	onChanged,
	className = ''
}) => {
	const [selectedWeaponTypes, setSelectedWeaponTypes] =
		useState<IWeaponType[]>(def);

	const toggleSelectedElement = (element: IWeaponType) => {
		if (selectedWeaponTypes.includes(element)) {
			setSelectedWeaponTypes((old) =>
				old.filter((item) => item !== element)
			);
		} else {
			setSelectedWeaponTypes((old) => [...old, element]);
		}
		if (onChanged) onChanged(selectedWeaponTypes);
	};

	return (
		<div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light">
			<p className="flex-grow">Weapon types</p>
			<div className="flex h-8">
				{weaponTypes.map((wpType) => {
					return (
						<Button
							key={`weapon-type-icon-${wpType.key}`}
							onClick={() => toggleSelectedElement(wpType)}
							className="h-full aspect-square mx-0 sm:mx-1"
						>
							<MWeaponTypeIcon
								weaponType={wpType.key}
								className={`h-full w-full
                                            transition-opacity duration-150 brightness-200
                                        ${
											selectedWeaponTypes.includes(wpType)
												? 'opacity-100'
												: 'opacity-20'
										} ${className}`}
							/>
						</Button>
					);
				})}
			</div>
		</div>
	);
};
