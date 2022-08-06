import { Button, FadeReveal, MImage } from '@components/common';
import { useScrolledMoreThan } from '@hooks';
import PaimonLogo from '@public/header/paimon-portrait-circle.png';
import { memo, useEffect } from 'react';
import { RiMenu3Line, RiSettings3Fill } from 'react-icons/ri';

import { HeaderTopBarTabs } from './tabs';

export interface HeaderTopBarProps {
	underConstruction: boolean;
	onSettingsToggle: () => void;
	onSideBarOpen: () => void;
}

const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
	underConstruction,
	onSettingsToggle,
	onSideBarOpen
}) => {
	const [scrolledMore, _, setBoundary] = useScrolledMoreThan();

	useEffect(() => {
		setBoundary(window.innerHeight / 1.5);
	}, []);

	const shouldReveal = !underConstruction && scrolledMore;

	const getStyles = () => {
		if (!shouldReveal) return '';
		return 'md:border-dark-primary-light bg-dark-primary';
	};

	return (
		<div
			className={`fixed top-0 z-50 flex
                    sm:h-[4.5rem] sm:inset-x-8
                    h-[4.5rem] p-3 inset-x-4
                    transition-colors
                    rounded-lg border-2 border-transparent mt-4 ${getStyles()}`}
		>
			<div className="z-50 flex flex-1 gap-2 items-center">
				<MImage
					src={PaimonLogo}
					className={`w-auto aspect-square transition-[height] md:h-full ${
						scrolledMore ? '' : 'h-0'
					}`}
					sizes="128px"
					priority
				/>

				<div>
					<h4 className="sm:text-base text-sm">Genshin Impact</h4>
					<h3 className="leading-none text-xl font-medium">
						Calculator
					</h3>
				</div>
			</div>

			<FadeReveal
				revealed={shouldReveal}
				className="relative md:flex flex-1 justify-center hidden"
			>
				<HeaderTopBarTabs />
			</FadeReveal>

			<FadeReveal revealed={shouldReveal} className="flex-1 text-2xl">
				<Button
					className="h-full aspect-square ml-auto md:flex hidden"
					onClick={onSettingsToggle}
				>
					<RiSettings3Fill />
				</Button>
				<Button
					className="h-full aspect-square ml-auto md:hidden"
					onClick={onSideBarOpen}
				>
					<RiMenu3Line />
				</Button>
			</FadeReveal>
		</div>
	);
};

export const MHeaderTopBar = memo(HeaderTopBar);
