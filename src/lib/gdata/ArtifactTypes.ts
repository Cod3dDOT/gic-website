import { IArtifactType } from './interfaces';
import { ArtifactTypeKeys } from './keys';

export const ArtifactTypes: { [key in ArtifactTypeKeys]: IArtifactType } = {
	circlet: {
		key: 'circlet',
		name: 'Circlet of Logos'
	},
	flower: {
		key: 'flower',
		name: 'Flower of Life'
	},
	goblet: {
		key: 'goblet',
		name: 'Goblet of Eonothem'
	},
	plume: {
		key: 'plume',
		name: 'Plume of Death'
	},
	sands: {
		key: 'sands',
		name: 'Sands of Eon'
	}
};
