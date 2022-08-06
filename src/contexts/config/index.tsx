import { IConfig } from '@lib/config';
import React, { createContext, Reducer, useMemo, useReducer } from 'react';

type ConfigDispatch = (newState: IConfig) => void;

interface CalculatorDataProviderProps {
	config: IConfig;
	children: React.ReactNode;
}

const ConfigContext = createContext<
	{ state: IConfig; dispatch: ConfigDispatch } | undefined
>(undefined);

const calculatorDataReducer: Reducer<IConfig, IConfig> = (state, newState) => {
	return newState;
};

export const ConfigProvider: React.FC<CalculatorDataProviderProps> = ({
	config,
	children
}) => {
	const [state, dispatch] = useReducer(calculatorDataReducer, config);
	const value = useMemo(() => {
		return { state, dispatch };
	}, [state]);
	return (
		<ConfigContext.Provider value={value}>
			{children}
		</ConfigContext.Provider>
	);
};

export const useConfig = () => {
	const context = React.useContext(ConfigContext);
	if (context === undefined) {
		throw new Error('useCount must be used within a ConfigProvider');
	}
	return context;
};
