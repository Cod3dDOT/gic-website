import { EnemyTypeKeys } from '@lib/gdata/keys';

export interface IEnemy {
	type: 'enemy';
	name: string;
	enemyType: EnemyTypeKeys;
	category: string;
	description: string;

	investigation?: {
		name: string;
		category: string;
		description: string;
	};

	// resistance: { TODO
	//     physical: number;
	//     pyro: number;
	//     dendro: number;
	//     hydro: number;
	//     geo: number;
	//     anemo: number;
	//     cryo: number;
	//     electro: number;
	// };
}
