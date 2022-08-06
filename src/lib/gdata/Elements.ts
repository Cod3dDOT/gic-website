import { IElement } from './interfaces/IElement';
import { ElementKeys } from './keys';

export const Elements: { [key in ElementKeys]: IElement } = {
	pyro: {
		key: 'pyro',
		name: 'Pyro'
	},
	geo: {
		key: 'geo',
		name: 'Geo'
	},
	dendro: {
		key: 'dendro',
		name: 'Dendro'
	},
	hydro: {
		name: 'Hydro',
		key: 'hydro'
	},
	anemo: {
		key: 'anemo',
		name: 'Anemo'
	},
	cryo: {
		key: 'cryo',
		name: 'Cryo'
	},
	electro: {
		key: 'electro',
		name: 'Electro'
	}
};
