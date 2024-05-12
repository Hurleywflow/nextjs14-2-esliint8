/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";

import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { Suspense, useCallback, useEffect, useState } from "react";

const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "slow",
	pauseOnHover = true,
	className,
}: {
	items: {
		id: number;
		src: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}): JSX.Element => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	const [start, setStart] = useState(false);

	const getDirection = useCallback(() => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards",
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse",
				);
			}
		}
	}, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      switch (speed) {
        case 'slow':
          containerRef.current.style.setProperty('--animation-duration', '500s')
          break
        case 'fast':
          containerRef.current.style.setProperty('--animation-duration', '400s')
          break
        default:
          containerRef.current.style.setProperty('--animation-duration', '450s')
      }
    }
  }, [speed])

	const addAnimation = useCallback(() => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			for (const item of scrollerContent) {
				const duplicatedItem = item.cloneNode(true);
				scrollerRef.current.appendChild(duplicatedItem);
			}

			setStart(true);
			getDirection();
			getSpeed();
		}
	}, [getDirection, getSpeed]);

	useEffect(() => {
		addAnimation();
	}, [addAnimation]);
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-10  w-full overflow-hidden ",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full h-60 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item, _idx) => (
					<li
						className='relative w-[350px] max-w-full shrink-0 overflow-hidden rounded-md border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]'
						style={{
							background:
								"linear-gradient(180deg, var(--slate-800), var(--slate-900)",
						}}
						key={item.id}
					>
						<Suspense
							fallback={
								<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
									<Skeleton className='aspect-video w-4/5 rounded-xl' />
									<div className='flex w-full flex-col items-center justify-center space-y-2'>
										<Skeleton className='h-4 w-3/5 ' />
										<Skeleton className='h-4 w-3/5 ' />
									</div>
									{/* <p className='text-center text-2xl text-tertiary-primary tracking-wider animate-pulse '>
															Loading...
														</p> */}
								</div>
							}
						>
							<LoadingImage
								src={item.src}
								className='size-full object-cover'
								alt='Carousel image'
								sizes='350px'
							/>
						</Suspense>
					</li>
				))}
			</ul>
		</div>
		
	);
};
export default InfiniteMovingCards;
