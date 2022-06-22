import { useRef, useState } from "react";
import { Button } from "../button";
import { RemixIcon } from "../remix-icon";

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
            className={`flex text-white w-full justify-between bg-dark-primary border-2 border-dark-primary-light rounded-lg ${className}`}
        >
            <div className="p-2">{name}</div>
            <div className="relative">
                <Button
                    theme="none"
                    className="p-0 flex items-center bg-dark-primary-light rounded-md pl-4 px-2 space-x-3 text-sm h-full"
                    text={selectedValue.selectValue}
                    onClick={() => toggle(!isOpened)}
                    onBlur={(event) => {
                        // if (event.target !== optionsRef.current) toggle(false);
                    }}
                >
                    <div
                        className="transition-transform text-lg"
                        style={{
                            transform: isOpened
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                        }}
                    >
                        <RemixIcon icon="ri-arrow-down-s-line" />
                    </div>
                </Button>
                {isOpened && (
                    <div
                        ref={optionsRef}
                        className="absolute mt-1 min-w-[4rem] max-h-48 overflow-y-scroll text-sm font-light bg-dark-primary-light rounded-md"
                    >
                        {all.map((option) => {
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
