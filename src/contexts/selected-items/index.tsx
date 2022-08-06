import {
	IArtifact,
	IArtifactSet,
	ICharacter,
	IEnemy,
	IWeapon
} from '@lib/gdata/interfaces';
import React, { createContext, Reducer, useMemo, useReducer } from 'react';

type SelectedItemsAction =
	| { type: 'character'; val: ICharacter | null }
	| { type: 'weapon'; val: IWeapon | null }
	| { type: 'add_artifact'; val: IArtifact }
	| { type: 'remove_artifact'; val: IArtifact | number }
	| { type: 'clear_artifacts' }
	| { type: 'enemy'; val: IEnemy | null };

type SelectedItemsDispatch = (action: SelectedItemsAction) => void;

type SelectedItemsState = {
	character: ICharacter | null;
	weapon: IWeapon | null;
	artifacts: Array<IArtifact>;
	enemy: IEnemy | null;
};

interface SelectedItemsProviderProps {
	children: React.ReactNode;
}

const SelectedItemContext = createContext<
	{ state: SelectedItemsState; dispatch: SelectedItemsDispatch } | undefined
>(undefined);

const calculatorDataReducer: Reducer<
	SelectedItemsState,
	SelectedItemsAction
> = (state, action) => {
	switch (action.type) {
		case 'character': {
			return {
				character: action.val,
				weapon: state.weapon,
				artifacts: state.artifacts,
				enemy: state.enemy
			};
		}
		case 'weapon': {
			return {
				character: state.character,
				weapon: action.val,
				artifacts: state.artifacts,
				enemy: state.enemy
			};
		}
		case 'add_artifact': {
			return {
				character: state.character,
				weapon: state.weapon,
				artifacts: state.artifacts.concat(action.val),
				enemy: state.enemy
			};
		}
		case 'remove_artifact': {
			const val =
				typeof action.val === 'number'
					? action.val
					: state.artifacts.indexOf(action.val);

			if (val !== -1) state.artifacts.splice(val, 1);
			return {
				character: state.character,
				weapon: state.weapon,
				artifacts: state.artifacts,
				enemy: state.enemy
			};
		}
		case 'clear_artifacts': {
			return {
				character: state.character,
				weapon: state.weapon,
				artifacts: [],
				enemy: state.enemy
			};
		}
		case 'enemy': {
			return {
				character: state.character,
				weapon: state.weapon,
				artifacts: state.artifacts,
				enemy: action.val
			};
		}
		// default: {
		//     throw new Error(`Unhandled action type: ${action.type}`);
		// }
	}
};

export const SelectedItemsProvider: React.FC<SelectedItemsProviderProps> = ({
	children
}) => {
	const [state, dispatch] = useReducer(calculatorDataReducer, {
		character: null,
		weapon: null,
		artifacts: [],
		enemy: null
	});
	const value = useMemo(() => {
		return { state, dispatch };
	}, [state]);
	return (
		<SelectedItemContext.Provider value={value}>
			{children}
		</SelectedItemContext.Provider>
	);
};

export const useSelectedItems = () => {
	const context = React.useContext(SelectedItemContext);
	if (context === undefined) {
		throw new Error(
			'useCount must be used within a CalculatorDataProvider'
		);
	}
	return context;
};
