import { Tabs } from '@components/screens/calculator/tabs';
import React, { createContext, useMemo, useReducer } from 'react';

type SelectedTabState = {
	tab: Tabs;
};

interface SelectedTabProviderProps {
	children: React.ReactNode;
}

type Dispatch = (newState: SelectedTabState) => void;

const SelectedTabContext = createContext<
	{ state: SelectedTabState; dispatch: Dispatch } | undefined
>(undefined);

const selectedTabReducer = (
	state: SelectedTabState,
	newState: SelectedTabState
) => {
	return { tab: newState.tab };
};

export const SelectedTabProvider: React.FC<SelectedTabProviderProps> = ({
	children
}) => {
	const [state, dispatch] = useReducer(selectedTabReducer, {
		tab: Tabs.Character
	});
	const value = useMemo(() => {
		return { state, dispatch };
	}, [state]);
	return (
		<SelectedTabContext.Provider value={value}>
			{children}
		</SelectedTabContext.Provider>
	);
};

export const useSelectedTab = () => {
	const context = React.useContext(SelectedTabContext);
	if (context === undefined) {
		throw new Error('useCount must be used within a SelectedTabProvider');
	}
	return context;
};
