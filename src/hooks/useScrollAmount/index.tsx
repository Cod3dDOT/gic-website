import {
	Dispatch,
	RefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState
} from 'react';

// export const useScrollAmount = (
//     precision: number = 20
// ): [RefObject<HTMLDivElement>, number] => {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [scrollAmount, setScrollAmount] = useState<number>(NaN);

//     const reportScroll = (e: any) => {
//         const n = getScrollAmount(e.target);
//         if (Math.abs(scrollAmount - n) < precision) return;
//         setScrollAmount(n);
//     };

//     useEffect(() => {
//         let element = null;
//         if (!scrollRef.current) {
//             element = window;
//         } else {
//             element = scrollRef.current;
//         }
//         element.addEventListener("scroll", reportScroll, {
//             passive: true,
//         });
//         if (Number.isNaN(setScrollAmount)) {
//             setScrollAmount(getScrollAmount(scrollRef.current));
//         }
//         return () => {
//             let element = null;
//             if (!scrollRef.current) {
//                 element = window;
//             } else {
//                 element = scrollRef.current;
//             }
//             element.removeEventListener("scroll", reportScroll);
//         };
//     }, [scrollAmount]);

//     return [scrollRef, Number.isNaN(scrollAmount) ? 0 : scrollAmount];
// };

function getScrollAmount(element: HTMLElement) {
	if (element && element.scrollTop) return element.scrollTop;
	return window.scrollY;
}

export const useScrolledMoreThan = (
	boundary?: number
): [boolean, RefObject<HTMLElement>, Dispatch<SetStateAction<number>>] => {
	const [_boundary, setBoundary] = useState<number>(boundary || -1);

	const scrollRef = useRef<HTMLElement>(null);
	const [scrolledMore, setScrolledMore] = useState<boolean>(false);

	const reportScroll = (e: Event) => {
		if (_boundary === -1) return;

		const newval = getScrollAmount(e.target as HTMLElement);
		const isMore = newval > _boundary;

		if (isMore === scrolledMore) return;
		setScrolledMore(isMore);
	};

	useEffect(() => {
		let element: HTMLElement | (Window & typeof globalThis);
		if (!scrollRef.current) {
			element = window;
		} else {
			element = scrollRef.current;
		}
		element.addEventListener('scroll', reportScroll, {
			passive: true
		});

		return () => {
			element.removeEventListener('scroll', reportScroll);
		};
	}, [scrolledMore, _boundary]);

	return [scrolledMore, scrollRef, setBoundary];
};
