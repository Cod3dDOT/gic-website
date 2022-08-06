import { IWeapon } from '@lib/gdata/interfaces';
import { RarityKeys, WeaponTypeKeys } from '@lib/gdata/keys';
import { slugify } from '@utilities';
import { GenshinDB, Weapon as GDbWeapon } from 'src/lib/gdata/genshin-db';

export const getWeapons = () => {
	const weapons = GenshinDB().weapons('names', {
		matchCategories: true,
		verboseCategories: true
	});

	if (weapons === undefined) return [];

	return weapons.map((og: GDbWeapon): IWeapon => {
		return {
			type: 'weapon',
			name: og.name,
			description: og.description,
			weaponType: slugify(og.weapontype) as WeaponTypeKeys,
			rarity: parseInt(og.rarity) as RarityKeys,
			effect: {
				name: og.effectname,
				description: og.effect
			},
			baseAtk: og.baseatk,
			substat: og.substat,
			subvalue: og.subvalue,
			rarityTable: {
				r1: og.r1,
				r2: og.r2,
				r3: og.r3,
				r4: og.r4,
				r5: og.r5
			}
		};
	});
};
