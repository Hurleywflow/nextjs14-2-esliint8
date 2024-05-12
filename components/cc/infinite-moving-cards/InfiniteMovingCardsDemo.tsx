"use client";
import { useMemo } from "react";
import InfiniteMovingCards from "./InfiniteMovingCards";
type CardType = {
	src: string;
	id: number;
};
const testimonials: CardType[] = [
	{ id: 1, src: "/Images/1.png" },
	{ id: 2, src: "/Images/2.png" },
	{ id: 3, src: "/Images/3.png" },
	{ id: 4, src: "/Images/4.png" },
	{ id: 5, src: "/Images/5.png" },
	{ id: 6, src: "/Images/6.png" },
	{ id: 7, src: "/Images/7.png" },
	{ id: 8, src: "/Images/8.png" },
	{ id: 9, src: "/Images/9.png" },
	{ id: 10, src: "/Images/10.png" },
	{ id: 11, src: "/Images/11.png" },
	{ id: 12, src: "/Images/12.png" },
	{ id: 13, src: "/Images/13.png" },
	// { id: 14, src: "/images/14.png" },
	// { id: 15, src: "/images/15.png" },
	// { id: 16, src: "/images/16.png" },
	// { id: 17, src: "/images/17.png" },
	// { id: 18, src: "/images/18.png" },
	// { id: 19, src: "/images/19.png" },
	// { id: 20, src: "/images/20.png" },
	// { id: 21, src: "/images/21.png" },
];

export function InfiniteMovingCardsDemo(): JSX.Element {
	const InfiniteMovingCardsMemo1 = useMemo(() => {
		return (
			<InfiniteMovingCards
				items={testimonials}
				direction='right'
				speed='slow'
			/>
		);
	}, []);
	const InfiniteMovingCardsMemo2 = useMemo(() => {
		return (
			<InfiniteMovingCards items={testimonials} direction='left' speed='slow' />
		);
	}, []);
	return (
		<div className='relative w-full'>
			<div className='pointer-events-none absolute -left-1 z-20 h-full w-40 bg-gradient-to-r from-background to-transparent' />
			<div className='pointer-events-none absolute -right-1 z-20 h-full w-40 bg-gradient-to-l from-background to-transparent' />
			<div className=' relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-md antialiased '>
				{InfiniteMovingCardsMemo1}
			</div>
			<div className='border-t border-dashed border-border' />
			<div className=' relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-md antialiased '>
				{InfiniteMovingCardsMemo2}
			</div>
		</div>
	);
}
