import { RarityKeys } from '@lib/gdata/keys';

import { IArtifact } from '../';

export interface IArtifactSet {
	type: 'artifact_set';
	name: string;
	rarity: RarityKeys;

	'1pc'?: string;
	'2pc'?: string;
	'4pc'?: string;

	flower?: IArtifact;
	plume?: IArtifact;
	sands?: IArtifact;
	goblet?: IArtifact;
	circlet: IArtifact;
}
