import { Button } from '@components/common';
import { ButtonProps } from '@components/common/button';
import { TabIconMap } from '@components/header';
import { Tabs } from '@components/screens/calculator/tabs';

type HeaderSideBarTabButtonProps = { tab: Tabs } & ButtonProps;

export const HeaderSideBarTabButton: React.FC<HeaderSideBarTabButtonProps> = ({
	tab,
	onClick,
	className
}) => {
	return (
		<Button
			className={`w-full !items-start p-4 text-lg ${className}`}
			onClick={onClick}
		>
			<div className="flex gap-4">
				{TabIconMap[tab as number]}
				{Tabs[tab as number]}
			</div>
		</Button>
	);
};
