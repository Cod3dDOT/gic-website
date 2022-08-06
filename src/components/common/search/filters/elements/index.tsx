import { Button, MElementIcon } from '@components/common';
import { IElement } from '@lib/gdata/interfaces/IElement';
import { useState } from 'react';
import { Elements } from 'src/lib/gdata/Elements';

export type SearchElementsFilterProps = {
	elements?: IElement[];
	def?: IElement[];
	onChanged?: (elements: IElement[]) => void;
	className?: string;
};

export const SearchElementsFilter: React.FC<SearchElementsFilterProps> = ({
	elements = Object.values(Elements),
	def = elements,
	onChanged,
	className = ''
}) => {
	const [selectedElements, setSelectedElements] = useState<IElement[]>(def);

	const toggleSelectedElement = (element: IElement) => {
		if (selectedElements.includes(element)) {
			setSelectedElements((old) =>
				old.filter((item) => item !== element)
			);
		} else {
			setSelectedElements((old) => [...old, element]);
		}
		if (onChanged) onChanged(selectedElements);
	};

	return (
		<div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light flex-wrap">
			<p className="flex-grow">Elements</p>
			<div className="flex h-8">
				{elements.map((el) => {
					return (
						<Button
							key={`element-icon-${el.key}`}
							onClick={() => toggleSelectedElement(el)}
							className="h-full p-1 px-1 sm:px-2"
						>
							<MElementIcon
								element={el.key}
								color={
									selectedElements.includes(el)
										? undefined
										: 'fill-[#888]'
								}
								className={`h-full w-full ${className}`}
							/>
						</Button>
					);
				})}
			</div>
		</div>
	);
};
