/* eslint-disable no-implicit-coercion */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client';
import { useEffect, useState } from 'react';

function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const documentChangeHandler = () => setMatches(!!mediaQueryList.matches);

		mediaQueryList.addListener(documentChangeHandler);
		documentChangeHandler();

		return () => {
			mediaQueryList.removeListener(documentChangeHandler);
		};
	}, [query]);

	return matches;
}

export default useMediaQuery;
