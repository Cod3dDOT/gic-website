import { Enemy as GDbEnemy, GenshinDB } from '@lib/gdata/genshin-db';
import { IEnemy } from '@lib/gdata/interfaces';
import { EnemyTypeKeys } from '@lib/gdata/keys';
import { slugify } from '@utilities';

export const getEnemies = () => {
	const enemies = GenshinDB().enemies('names', {
		matchCategories: true,
		verboseCategories: true
	});

	if (enemies === undefined) return [];

	return enemies.map((og: GDbEnemy): IEnemy => {
		return {
			type: 'enemy',
			name: og.name,
			enemyType: slugify(og.type) as EnemyTypeKeys,
			category: og.category,
			description: og.description
		};
	});
};
