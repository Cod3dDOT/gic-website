import { Artifact as GDbArtifact, GenshinDB } from '@lib/gdata/genshin-db';
import { IArtifactSet } from '@lib/gdata/interfaces';
import { ArtifactTypeKeys, RarityKeys } from '@lib/gdata/keys';
import { slugify } from '@utilities';

export const getArtifacts = async () => {
	const artifacts = GenshinDB().artifacts('names', {
		matchCategories: true,
		verboseCategories: true
	});

	if (artifacts === undefined) return [];

	return artifacts.map((og: GDbArtifact): IArtifactSet => {
		return {
			type: 'artifact_set',
			name: og.name,
			rarity: Math.max(...og.rarity.map((n) => Number(n))) as RarityKeys,
			circlet: {
				type: 'artifact',
				name: og.circlet.name,
				description: og.circlet.description,
				relicType: slugify(og.circlet.relictype) as ArtifactTypeKeys
			}
		};
	});
};
