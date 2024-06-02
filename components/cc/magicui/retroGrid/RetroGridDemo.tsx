"use client";

import RetroGrid from "./RetroGrid";

const RetroGridDemo = () => {
	return (
		<div className='relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl'>
			<span className='pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent'>
				Retro Grid
			</span>

			<RetroGrid />
		</div>
	);
};

export default RetroGridDemo;
