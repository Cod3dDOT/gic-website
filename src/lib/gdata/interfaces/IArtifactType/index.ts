import { ArtifactTypeKeys } from '@lib/gdata/keys';

import { INamed } from '../';

export interface IArtifactType extends INamed {
	key: ArtifactTypeKeys;
}
