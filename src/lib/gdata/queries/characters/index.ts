import { Elements } from '@lib/gdata/Elements';
import { ICharacter } from '@lib/gdata/interfaces/ICharacter';
import { IElement } from '@lib/gdata/interfaces/IElement';
import {
	CharacterKeys,
	ElementKeys,
	RarityKeys,
	WeaponTypeKeys
} from '@lib/gdata/keys';
import { WeaponTypes } from '@lib/gdata/WeaponTypes';
import { slugify } from '@utilities';
import { Character as GDbCharacter, GenshinDB } from 'src/lib/gdata/genshin-db';

const ElementsMap: Record<string, IElement[]> = {
	aether: [Elements.anemo, Elements.geo, Elements.pyro],
	lumine: [Elements.anemo, Elements.geo, Elements.pyro]
};

export const getCharacters = () => {
	const characters = GenshinDB().characters('names', {
		matchCategories: true,
		verboseCategories: true
	});

	if (characters === undefined) return [];

	return characters.map((og: GDbCharacter): ICharacter => {
		return {
			type: 'character',
			name: og.fullname,
			elements: ElementsMap[slugify(og.name) as CharacterKeys]
				? ElementsMap[slugify(og.name) as CharacterKeys]
				: [Elements[slugify(og.element) as ElementKeys]],
			rarity: parseInt(og.rarity) as RarityKeys,
			weapontype: WeaponTypes[slugify(og.weapontype) as WeaponTypeKeys],

			gender: og.gender,
			region: og.region,

			details: {
				description: og.description,
				substat: og.substat
			}
		};
	});
};
