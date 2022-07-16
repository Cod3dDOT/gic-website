import { Artifact, Character, Enemy, Weapon } from "@data/database";
import { Config } from "pages/api/config";
import React, { Reducer, useMemo } from "react";
import { createContext, useReducer } from "react";

type ConfigDispatch = (newState: Config) => void;

interface CalculatorDataProviderProps {
    config: Config;
    children: React.ReactNode;
}

const ConfigContext = createContext<
    { state: Config; dispatch: ConfigDispatch } | undefined
>(undefined);

const calculatorDataReducer: Reducer<Config, Config> = (state, newState) => {
    return newState;
};

export const ConfigProvider: React.FC<CalculatorDataProviderProps> = ({
    config,
    children,
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
        throw new Error("useCount must be used within a ConfigProvider");
    }
    return context;
};
