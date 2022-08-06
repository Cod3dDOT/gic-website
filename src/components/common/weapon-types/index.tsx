import { ImageProps } from '@components/common';
import { WeaponTypeKeys } from '@lib/gdata/keys';
import { memo } from 'react';

import { Bow } from './icons/bow';
import { Catalyst } from './icons/catalyst';
import { Claymore } from './icons/claymore';
import { Polearm } from './icons/polearm';
import { Sword } from './icons/sword';

export type IWeaponTypeIconProps = Omit<ImageProps, 'src'>;

const WeaponTypeIcon: React.FC<
	{ weaponType: WeaponTypeKeys } & IWeaponTypeIconProps
> = ({ weaponType, ...rest }) => {
	switch (weaponType) {
		case 'catalyst':
			return <Catalyst {...rest} />;
		case 'bow':
			return <Bow {...rest} />;
		case 'claymore':
			return <Claymore {...rest} />;
		case 'polearm':
			return <Polearm {...rest} />;
		case 'sword':
			return <Sword {...rest} />;
		default:
			console.error('Unknown weapon type');
			return <div></div>;
	}
};

export const MWeaponTypeIcon = memo(WeaponTypeIcon);
