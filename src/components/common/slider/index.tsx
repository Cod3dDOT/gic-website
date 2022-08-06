import { useState } from 'react';

export interface SliderProps {
	name: string;
	min?: number;
	max?: number;
	value?: number;
	step?: number;
	onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
	name = '',
	min = 0,
	max = 100,
	value = 0,
	step = 1,
	onChange
}) => {
	const [progressValue, setProgressValue] = useState(value);

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = parseInt(event.target.value);
		setProgressValue(targetValue);
		if (onChange) onChange(targetValue);
	};

	return (
		<div
			className="group p-4 border-2 rounded-md transition-colors
                    bg-dark-primary border-dark-primary-light"
		>
			<div className="flex justify-between">
				<p>{name}</p>
				<p>{progressValue}</p>
			</div>
			<div className="flex space-x-2 items-center text-sm mt-2 text-neutral-300">
				<span>{min}</span>
				<input
					type="range"
					min={min}
					max={max}
					defaultValue={value}
					step={step}
					onChange={(event) => handleInput(event)}
					className=" appearance-none focus:outline-none focus:ring-0 focus:shadow-none
                                w-full h-1
                                bg-dark-primary-light rounded-md group-hover:bg-dark-primary-lighter transition-colors"
				></input>

				<span>{max}</span>
			</div>
		</div>
	);
};
