import React from 'react';

export const withWDYR = () => {
	if (process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const whyDidYouRender = require('@welldone-software/why-did-you-render');
		whyDidYouRender(React, {
			trackAllPureComponents: true,
			trackHooks: true,
			logOwnerReasons: true,
			logOnDifferentValues: true,
			collapseGroups: true
		});
	}
};
