import { forwardRef } from 'react';

export interface ScreenContainerProps {
	children?: React.ReactNode;
	className?: string;
}

export const ScreenContainer = forwardRef<HTMLDivElement, ScreenContainerProps>(
	function ScreenContainer({ children, className = '' }, myRef) {
		return (
			<div className={`min-h-screen ${className}`} ref={myRef}>
				{children}
			</div>
		);
	}
);
