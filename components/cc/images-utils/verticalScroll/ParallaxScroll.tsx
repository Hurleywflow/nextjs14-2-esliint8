/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Suspense, useId, useRef } from "react";

type CardType = {
	src: string;
	id: number;
	height: number;
	width: number;
};
const ParallaxScroll = ({
	images,
	className,
}: {
	images: CardType[];
	className?: string;
}): JSX.Element => {
	const gridRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		container: gridRef, // remove this if your container is not fixed height
		offset: ["start start", "end start"], // remove this if your container is not fixed height
	});

	const translateFirst = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
	const translateSecond = useTransform(
		scrollYProgress,
		[0, 1],
		["-1%", "100%"],
	);
	const translateThird = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
	// const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
	// const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
	// const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const third = Math.ceil(images.length / 3);

	const firstPart = images.slice(0, third);
	const secondPart = images.slice(third, 2 * third);
	const thirdPart = images.slice(2 * third);

		const keyID1 = useId();
	const keyID2 = useId();
	const keyID3 = useId();
	return (
		<div
			className={cn(
				"h-[40rem] relative items-start overflow-y-auto w-full",
				className,
			)}
			ref={gridRef}
		>
			{/* <div className='pointer-events-none sticky -top-1 z-10 h-20 w-full bg-gradient-to-b from-background to-transparent' /> */}

			<div
				className='mx-auto grid w-full grid-cols-10  items-start gap-1 px-1 py-2 md:gap-5 md:px-10 '
				ref={gridRef}
			>
				<div className='col-span-4 grid gap-1 md:col-span-3 md:gap-5'>
					{firstPart.map((el, _idx) => (
						<motion.div
							style={{ y: translateFirst }} // Apply the translateY motion value here
							key={keyID1}
						>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5' />
											<Skeleton className='h-4 w-3/5' />
										</div>
									</div>
								}
							>
								<Image
									src={el.src}
									className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-center !p-0'
									alt='Carousel image'
									height={el.height}
									width={el.width}
									// sizes='max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, (max-width: 1536px) 510px, 510px'
								/>
							</Suspense>
						</motion.div>
					))}
				</div>
				<div className='col-span-6 grid  gap-1 md:col-span-4 md:gap-5'>
					{secondPart.map((el, idx) => (
						<motion.div
							style={{ y: translateSecond }}
							key={keyID2}
						>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5' />
											<Skeleton className='h-4 w-3/5' />
										</div>
									</div>
								}
							>
								<Image
									src={el.src}
									className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-center !p-0'
									alt='Carousel image'
									height={el.height}
									width={el.width}
									// sizes='max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, (max-width: 1536px) 510px, 510px'
								/>
							</Suspense>
						</motion.div>
					))}
				</div>
				<div className='col-span-10 mt-52 grid gap-1  md:col-span-3 md:mt-0 md:gap-5'>
					{thirdPart.map((el, idx) => (
						<motion.div
							style={{ y: translateThird }}
							key={`grid-3${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								idx
							}`}
						>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5' />
											<Skeleton className='h-4 w-3/5' />
										</div>
									</div>
								}
							>
								<Image
									src={el.src}
									className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-center !p-0'
									alt='Carousel image'
									height={el.height}
									width={el.width}
									// sizes='max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, (max-width: 1536px) 510px, 510px'
								/>
							</Suspense>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
export default ParallaxScroll;
