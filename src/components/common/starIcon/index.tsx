import { RiStarFill } from 'react-icons/ri';

interface StarIconProps {
	color: string;
}

export const StarIcon: React.FC<StarIconProps> = ({ color = 'red' }) => {
	return <RiStarFill className={`${color}`} />;
};
