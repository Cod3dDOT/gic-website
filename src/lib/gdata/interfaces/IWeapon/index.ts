import { RarityKeys, WeaponTypeKeys } from '@lib/gdata/keys';

export interface IWeaponRarityTable {
	r1: string[];
	r2: string[];
	r3: string[];
	r4: string[];
	r5: string[];
}

export interface IWeaponEffect {
	name: string;
	description: string;
}

export interface IWeapon {
	type: 'weapon';

	name: string;
	description: string;

	effect: IWeaponEffect;

	baseAtk: number;

	weaponType: WeaponTypeKeys;
	rarity: RarityKeys;

	substat: string;
	subvalue: string;

	rarityTable: IWeaponRarityTable;
}
