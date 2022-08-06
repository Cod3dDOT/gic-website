import { IWeaponType } from './interfaces/IWeaponType';
import { WeaponTypeKeys } from './keys';

export const WeaponTypes: { [key in WeaponTypeKeys]: IWeaponType } = {
	bow: {
		name: 'Bow',
		key: 'bow'
	},
	sword: {
		name: 'Sword',
		key: 'sword'
	},
	claymore: {
		name: 'Claymore',
		key: 'claymore'
	},
	catalyst: {
		name: 'Catalyst',
		key: 'catalyst'
	},
	polearm: {
		name: 'Polearm',
		key: 'polearm'
	}
};
