import { MImage } from '@components/common';
import SwordIcon from '@public/icons/weapon-types/icon-sword.webp';

import { IWeaponTypeIconProps } from '..';

export const Sword: React.FC<IWeaponTypeIconProps> = ({ ...rest }) => {
	return <MImage {...rest} src={SwordIcon} alt="icon-sword" sizes="256px" />;
};
