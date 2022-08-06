import { Search } from '@components/common';
import { useEffect, useState } from 'react';
import { DBState, getCharacters, getDBState } from 'src/lib/gdata';
import { ICharacter } from 'src/lib/gdata/interfaces/ICharacter';

import { Tabs } from '..';
import { TabWrapper } from '../wrapper';

// export type CharacterTabProps = {};

export const CharacterTab: React.FC = () => {
	const [characters, setCharacters] = useState<Array<ICharacter>>([]);
	const [chosenCharacter, setChosenCharacter] = useState<ICharacter>();

	const [openedSettings, setOpenedSettings] = useState<boolean>(false);

	const dbIsReady = getDBState() === DBState.READY;

	useEffect(() => {
		if (!dbIsReady) return;
		const characters = getCharacters();
		setCharacters([...characters]);
	}, [dbIsReady]);

	return (
		<TabWrapper tab={Tabs.Character}>
			<div className="w-full h-full">
				<Search all={characters} />
			</div>
			<div
				className={`h-full w-full max-w-full transition-all bg-dark-primary-lighter ${
					openedSettings ? 'max-w-full' : 'max-w-0'
				}`}
			></div>
		</TabWrapper>
	);
};

// export const MCharacterTab = memo(CharacterTab);
