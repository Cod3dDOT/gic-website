import { MImage } from '@components/common';
import CatalystIcon from '@public/icons/weapon-types/icon-catalyst.webp';

import { IWeaponTypeIconProps } from '..';

export const Catalyst: React.FC<IWeaponTypeIconProps> = ({ ...rest }) => {
	return (
		<MImage
			{...rest}
			src={CatalystIcon}
			alt="icon-catalyst"
			sizes="256px"
		/>
	);
};
