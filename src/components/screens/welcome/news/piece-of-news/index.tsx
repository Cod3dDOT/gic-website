import { Button } from "@components/common";
import { News } from "@data/news";
import { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export interface PieceOfNewsProps {
    news?: News | null;
}

export const PieceOfNews: React.FC<PieceOfNewsProps> = ({ news }) => {
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);
    const selfRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bodyRef.current) return;
        setIsOverflowing(
            bodyRef.current.offsetHeight < bodyRef.current.scrollHeight
        );
    }, []);

    const onOpenButtonClick = () => {
        setIsOpen(!isOpen);
        if (!selfRef.current || isOpen) return;
        selfRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    };

    return (
        <div className="relative py-2" ref={selfRef}>
            <div className="flex justify-between text-lg">
                {news ? (
                    <div>{news.header}</div>
                ) : (
                    <div className="animate-pulse rounded-sm w-1/2 bg-dark-primary">
                        <br />
                    </div>
                )}
                {isOverflowing ? (
                    <Button theme="none" onClick={onOpenButtonClick}>
                        <RiArrowDownSLine
                            className={`transition-transform ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </Button>
                ) : (
                    ""
                )}
            </div>
            {news ? (
                <p
                    ref={bodyRef}
                    className={`text-sm text-dark-primary-lighter mt-1 overflow-hidden
                                transition-[max-height] duration-300 [transition-timing-function:ease-in-out] ${
                                    isOpen ? "max-h-96" : "max-h-24"
                                }`}
                >
                    {news.body}
                </p>
            ) : (
                <div className="text-sm animate-pulse leading-none mt-1 rounded-sm w-full bg-dark-primary h-24"></div>
            )}

            <div
                className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark-primary-dark ${
                    isOverflowing && !isOpen
                        ? "animate-fade-in-visible"
                        : "animate-fade-out-invisible"
                }`}
            />
        </div>
    );
};
