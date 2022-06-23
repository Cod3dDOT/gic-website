import { useRef, useState } from "react";
import { Button } from "../button";

import { RiArrowDownSLine } from "react-icons/ri";

export const EntryFromArray = (all: string[] | number[]) => {
    return all.map((entry) => {
        return new SelectEntry<string>(entry.toString(), entry.toString());
    });
};

export class SelectEntry<T> {
    selectValue: string;
    value: T;
    id?: number = -1;

    constructor(selectValue: string, value: T) {
        this.selectValue = selectValue;
        this.value = value;
    }
}

export interface SelectProps {
    name: string;
    all: SelectEntry<any>[];
    def?: number;
    className?: string;
    children?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
    name,
    all,
    def = 0,
    className = "",
    children,
}) => {
    const [selectedValue, setSelectedValue] = useState<SelectEntry<any>>(
        all[def]
    );
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const optionsRef = useRef<HTMLDivElement>(null);

    const toggle = (val: boolean) => {
        setIsOpened(val);
    };

    return (
        <div
            className={`flex w-full justify-between bg-dark-primary border-2 border-dark-primary-light rounded-md ${className}`}
        >
            <div className="p-2">{name}</div>
            <div className="relative">
                <Button
                    theme="none"
                    className="p-0 bg-dark-primary-light rounded-md px-2 space-x-3 text-sm h-full"
                    onClick={() => toggle(!isOpened)}
                >
                    <div className="flex flex-grow w-full items-center">
                        <p className="px-2">{selectedValue.selectValue}</p>
                        <div
                            className="transition-transform text-lg"
                            style={{
                                transform: isOpened
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                            }}
                        >
                            <RiArrowDownSLine />
                        </div>
                    </div>
                </Button>
                {isOpened && (
                    <div
                        ref={optionsRef}
                        className="absolute mt-1 min-w-[4rem] max-h-48 overflow-y-scroll text-sm font-light bg-dark-primary-light rounded-md"
                    >
                        {all.map((option, index) => {
                            return (
                                <button
                                    className={`px-3 py-[0.4rem] flex flex-col w-full ${
                                        option === selectedValue
                                            ? "bg-dark-primary"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedValue(option);
                                        toggle(false);
                                    }}
                                    key={`select-${index}`}
                                >
                                    {option.selectValue}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
