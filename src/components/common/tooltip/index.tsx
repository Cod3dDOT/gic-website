export enum TooltipPosition {
    Left = 0,
    Top = 1,
    Right = 2,
    Bottom = 3,
}

const TooltipPositions = {
    0: "right-3/4 peer-hover:right-full mr-1",
    1: "bottom-3/4 peer-hover:bottom-full mb-1",
    2: "left-3/4 peer-hover:left-full ml-1",
    3: "top-3/4 peer-hover:top-full mt-1",
};

interface ITooltipProps {
    message: string;
    position?: TooltipPosition;
    children: React.ReactNode;
}

export const Tooltip: React.FC<ITooltipProps> = ({
    message,
    position = TooltipPosition.Top,
    children,
}) => {
    return (
        <div className="relative flex flex-col items-center group">
            <div className="peer relative z-10">
                <div className="absolute top-1 right-1 w-2 h-2 rounded-md bg-white"></div>
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
