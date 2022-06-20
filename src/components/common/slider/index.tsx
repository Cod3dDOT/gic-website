import { ScrollReveal } from "@components/common";
import { useRef, useState } from "react";

export interface SliderProps {
    name: string;
    min?: number;
    max?: number;
    value?: number;
    step?: number;
    validMin?: number;
    validMax?: number;
    onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
    name = "",
    min = 0,
    max = 100,
    value = 0,
    step = 1,
    validMin = min,
    validMax = max,
    onChange = (value: number) => {},
}) => {
    const normalizedValue = (v: number) => {
        return ((v - validMin) / (validMin - validMax)) * -100;
    };

    const valueIndicatorRef = useRef<HTMLSpanElement>(null);
    const [progressValue, setProgressValue] = useState(value);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = parseInt(event.target.value);
        setProgressValue(targetValue);
        onChange(targetValue);
    };

    return (
        <div className=" bg-dark-primary-light p-4 text-white rounded-lg">
            <p>{name}</p>
            <input
                type="range"
                min={min}
                max={max}
                defaultValue={value}
                step={step}
                onChange={(event) => handleInput(event)}
                className=" appearance-none focus:outline-none focus:ring-0 focus:shadow-none
                            w-full h-1
                          bg-dark-primary-lighter rounded-md"
            ></input>
            <ul className="relative flex justify-between w-full text-sm font-light">
                <span
                    className={`absolute block round-lg bg-dark-primary-light`}
                    ref={valueIndicatorRef}
                    style={{
                        left: `${normalizedValue(progressValue)}%`,
                        transform: `translateX(-${normalizedValue(
                            progressValue
                        )}%)`,
                    }}
                >
                    {progressValue}
                </span>

                <ScrollReveal
                    revealParams={{
                        revealPolicy: "custom",
                        revealed: progressValue >= min + step || step > 5,
                        duration: 0.15,
                    }}
                >
                    <span>{min}</span>
                </ScrollReveal>
                <ScrollReveal
                    revealParams={{
                        revealPolicy: "custom",
                        revealed: progressValue <= max - step || step > 5,
                        duration: 0.15,
                    }}
                >
                    <span>{max}</span>
                </ScrollReveal>
            </ul>
        </div>
    );
};
