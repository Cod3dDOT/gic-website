interface IIconProps {
    icon: string;
    className?: string;
}

export const Icon: React.FC<IIconProps> = ({ icon, className }) => {
    return (
        <i className={`${icon} leading-none block text-md ${className}`}></i>
    );
};
