import { MImage } from '@components/common';
import PolearmIcon from '@public/icons/weapon-types/icon-polearm.webp';

import { IWeaponTypeIconProps } from '..';

export const Polearm: React.FC<IWeaponTypeIconProps> = ({ ...rest }) => {
	return (
		<MImage {...rest} src={PolearmIcon} alt="icon-polearm" sizes="256px" />
	);
};
