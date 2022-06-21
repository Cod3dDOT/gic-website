export interface IconProps {
    icon: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, className }) => {
    return (
        <i className={`${icon} leading-none block text-md ${className}`}></i>
    );
};
