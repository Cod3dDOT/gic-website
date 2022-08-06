import { RarityKeys } from '@lib/gdata/keys';

import { IElement, IWeaponType } from '../';

export interface CharacterDetails {
	description: string;
	substat: string;

	stats?: {
		base: unknown;
		curve: unknown;
	};
}

export interface ICharacter {
	type: 'character';
	name: string;
	rarity: RarityKeys;
	elements: Array<IElement>;
	weapontype: IWeaponType;

	gender: string;
	region: string;

	details?: CharacterDetails;
}
