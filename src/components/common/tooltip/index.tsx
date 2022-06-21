const TooltipPositions = {
    left: "right-3/4 peer-hover:right-full mr-1",
    top: "bottom-3/4 peer-hover:bottom-full mb-1",
    right: "left-3/4 peer-hover:left-full ml-1",
    bottom: "top-3/4 peer-hover:top-full mt-1",
};

interface ITooltipProps {
    message: string;
    position?: "left" | "top" | "right" | "bottom";
    className?: string;
    children: React.ReactNode;
}

export const Tooltip: React.FC<ITooltipProps> = ({
    message,
    position = "top",
    className = "",
    children,
}) => {
    return (
        <div
            className={`relative flex flex-col items-center group ${className}`}
        >
            <div className="peer relative z-10 w-full h-full">
                {/* <div className="absolute top-1 right-1 w-2 h-2 rounded-md bg-white"></div> */}
                {children}
            </div>

            <div
                className={`absolute w-max max-w-[10rem] max-h-fit
                            font-poppins p-2 text-sm leading-tight text-white
                            shadow-lg shadow-dark-primary bg-dark-primary-dark rounded-md border-2 border-dark-primary-light
                            opacity-0 invisible peer-hover:visible peer-hover:opacity-100 transition-all ${TooltipPositions[position]}`}
            >
                {message}
            </div>
        </div>
    );
};
