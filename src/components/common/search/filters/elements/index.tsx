import { Button, ElementIcons } from "@components/common";
import { getElements } from "@data/database";
import { Element } from "@data/database/data-classes";
import { useState } from "react";

export type SearchElementsFilterProps = {
    elements?: Array<Element>;
    def?: Array<Element>;
    onSelected?: (element: Element) => void;
    className?: string;
};

export const SearchElementsFilter: React.FC<SearchElementsFilterProps> = ({
    elements = getElements(),
    def = elements,
    onSelected,
    className = "",
}) => {
    const [selectedElements, setSelectedElements] =
        useState<Array<Element>>(def);

    const toggleSelectedElement = (element: Element) => {
        if (onSelected) onSelected(element);
        if (selectedElements.includes(element)) {
            setSelectedElements((old) =>
                old.filter((item) => item !== element)
            );
        } else {
            setSelectedElements((old) => [...old, element]);
        }
    };

    return (
        <div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light flex-wrap">
            <p className="flex-grow">Elements</p>
            <div className="flex h-8">
                {elements.map((el) => {
                    return (
                        <Button
                            key={`element_${el}`}
                            theme="none"
                            onClick={() => toggleSelectedElement(el)}
                            className="h-full p-1 px-1 sm:px-2"
                        >
                            {ElementIcons[el]({
                                color: selectedElements.includes(el)
                                    ? undefined
                                    : "#888",
                                className: `h-full w-full ${className}`,
                            })}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};
