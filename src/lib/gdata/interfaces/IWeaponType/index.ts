import { WeaponTypeKeys } from '@lib/gdata/keys';

import { INamed } from '../';

export interface IWeaponType extends INamed {
	key: WeaponTypeKeys;
}
