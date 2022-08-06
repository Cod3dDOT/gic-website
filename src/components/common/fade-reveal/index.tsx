import React from 'react';

export interface FadeRevealProps {
	revealed: boolean;

	delayIn?: number;
	delayOut?: number;

	durationIn?: number;
	durationOut?: number;

	className?: string;
	children: React.ReactNode;
}

export const FadeReveal: React.FC<FadeRevealProps> = ({
	revealed = false,

	delayIn = 0,
	delayOut = 0,

	durationIn = 200,
	durationOut = 500,

	className = '',
	children
}) => {
	const getClasses = () => {
		return revealed
			? `animate-fade-in-visible [animation-duration:${durationIn}] [animation-delay:${delayIn}]`
			: `animate-fade-out-invisible [animation-duration:${durationOut}] [animation-delay:${delayOut}]`;
	};

	return (
		<div className={`opacity-0 ${getClasses()} ${className}`}>
			{children}
		</div>
	);
};
