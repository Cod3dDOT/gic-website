import { ArtifactTypeKeys } from '@lib/gdata/keys';

export interface IArtifact {
	type: 'artifact';
	name: string;
	description: string;
	relicType: ArtifactTypeKeys;
}
