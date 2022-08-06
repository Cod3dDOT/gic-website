import { ElementKeys } from '@lib/gdata/keys';

import { INamed } from '../';

export interface IElement extends INamed {
	key: ElementKeys;
}
