import { Artifact, Character, Enemy, Weapon } from "@data/database";
import React, { Reducer, useMemo } from "react";
import { createContext, useReducer } from "react";

type CalculatorDataAction =
    | { type: "character"; val: Character | null }
    | { type: "weapon"; val: Weapon | null }
    | { type: "add_artifact"; val: Artifact }
    | { type: "remove_artifact"; val: Artifact | number }
    | { type: "clear_artifacts" }
    | { type: "enemy"; val: Enemy | null };

type CalculatorDataDispatch = (action: CalculatorDataAction) => void;

type CalculatorDataState = {
    character: Character | null;
    weapon: Weapon | null;
    artifacts: Array<Artifact>;
    enemy: Enemy | null;
};

interface CalculatorDataProviderProps {
    children: React.ReactNode;
}

const CalculatorDataContext = createContext<
    { state: CalculatorDataState; dispatch: CalculatorDataDispatch } | undefined
>(undefined);

const calculatorDataReducer: Reducer<
    CalculatorDataState,
    CalculatorDataAction
> = (state, action) => {
    switch (action.type) {
        case "character": {
            return {
                character: action.val,
                weapon: state.weapon,
                artifacts: state.artifacts,
                enemy: state.enemy,
            };
        }
        case "weapon": {
            return {
                character: state.character,
                weapon: action.val,
                artifacts: state.artifacts,
                enemy: state.enemy,
            };
        }
        case "add_artifact": {
            return {
                character: state.character,
                weapon: state.weapon,
                artifacts: state.artifacts.concat(action.val),
                enemy: state.enemy,
            };
        }
        case "remove_artifact": {
            const val =
                typeof action.val === "number"
                    ? action.val
                    : state.artifacts.indexOf(action.val);

            if (val !== -1) state.artifacts.splice(val, 1);
            return {
                character: state.character,
                weapon: state.weapon,
                artifacts: state.artifacts,
                enemy: state.enemy,
            };
        }
        case "clear_artifacts": {
            return {
                character: state.character,
                weapon: state.weapon,
                artifacts: [],
                enemy: state.enemy,
            };
        }
        case "enemy": {
            return {
                character: state.character,
                weapon: state.weapon,
                artifacts: state.artifacts,
                enemy: action.val,
            };
        }
        // default: {
        //     throw new Error(`Unhandled action type: ${action.type}`);
        // }
    }
};

export const CalculatorDataProvider: React.FC<CalculatorDataProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(calculatorDataReducer, {
        character: null,
        weapon: null,
        artifacts: [],
        enemy: null,
    });
    const value = useMemo(() => {
        return { state, dispatch };
    }, [state]);
    return (
        <CalculatorDataContext.Provider value={value}>
            {children}
        </CalculatorDataContext.Provider>
    );
};

export const useCalculatorData = () => {
    const context = React.useContext(CalculatorDataContext);
    if (context === undefined) {
        throw new Error(
            "useCount must be used within a CalculatorDataProvider"
        );
    }
    return context;
};
