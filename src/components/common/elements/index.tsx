import { ElementKeys } from '@lib/gdata/keys';
import { memo } from 'react';

import { Anemo } from './icons/anemo';
import { Cryo } from './icons/cryo';
import { Dendro } from './icons/dendro';
import { Electro } from './icons/electro';
import { Geo } from './icons/geo';
import { Hydro } from './icons/hydro';
import { Pyro } from './icons/pyro';

export interface IElementIconProps {
	color?: string;
	className?: string;
}

const ElementColors: { [key in ElementKeys]: string } = {
	anemo: 'fill-dark-element-anemo',
	cryo: 'fill-dark-element-cryo',
	dendro: 'fill-dark-element-dendro',
	electro: 'fill-dark-element-electro',
	geo: 'fill-dark-element-geo',
	hydro: 'fill-dark-element-hydro',
	pyro: 'fill-dark-element-pyro'
};

const ElementIcon: React.FC<{ element: ElementKeys } & IElementIconProps> = ({
	element,
	color = ElementColors[element as ElementKeys],
	className
}) => {
	const props = {
		color: color,
		className: className
	};
	switch (element) {
		case 'anemo':
			return <Anemo {...props} />;
		case 'cryo':
			return <Cryo {...props} />;
		case 'dendro':
			return <Dendro {...props} />;
		case 'electro':
			return <Electro {...props} />;
		case 'geo':
			return <Geo {...props} />;
		case 'hydro':
			return <Hydro {...props} />;
		case 'pyro':
			return <Pyro {...props} />;
		default:
			console.log('Unknown element');
			return <div></div>;
	}
};

export const MElementIcon = memo(ElementIcon);
