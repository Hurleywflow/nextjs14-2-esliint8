/* eslint-disable react/no-array-index-key */
"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Suspense, useRef } from "react";

type CardType = {
	src: string;
	id: number;
	height: number;
	width: number;
};
const ParallaxTiltScroll = ({
	images,
	className,
}: {
	images: CardType[];
	className?: string;
}) => {
	const gridRef = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		container: gridRef, // remove this if your container is not fixed height
		offset: ["start start", "end start"], // remove this if your container is not fixed height
	});

	const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

	const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

	const third = Math.ceil(images.length / 3);

	const firstPart = images.slice(0, third);
	const secondPart = images.slice(third, 2 * third);
	const thirdPart = images.slice(2 * third);

	return (
		<div
			className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
			ref={gridRef}
		>
			{/* <div className='pointer-events-none sticky -top-1 z-10 h-20 w-full bg-gradient-to-b from-background to-transparent' /> */}
			<div
				className='mx-auto grid w-full  items-start gap-10 px-10 py-40 lg:grid-cols-3'
				ref={gridRef}
			>
				<div className='grid gap-10'>
					{firstPart.map((el, idx) => (
						<motion.div
							style={{
								y: translateYFirst,
								x: translateXFirst,
								rotateZ: rotateXFirst,
							}} // Apply the translateY motion value here
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={`grid-1${idx}`}
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
									className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0'
									alt='Carousel image'
									height={el.height}
									width={el.width}
									// sizes='max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, (max-width: 1536px) 510px, 510px'
								/>
							</Suspense>
						</motion.div>
					))}
				</div>
				<div className='grid gap-10'>
					{secondPart.map((el, idx) => (
						<motion.div
							key={`grid-2${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								idx
							}`}
						>
							{/* <Image
								src={el}
								className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0'
								height='400'
								width='400'
								alt='thumbnail'
							/> */}
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
									className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0'
									alt='Carousel image'
									height={el.height}
									width={el.width}
									// sizes='max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, (max-width: 1536px) 510px, 510px'
								/>
							</Suspense>
						</motion.div>
					))}
				</div>
				<div className='grid gap-10'>
					{thirdPart.map((el, idx) => (
						<motion.div
							style={{
								y: translateYThird,
								x: translateXThird,
								rotateZ: rotateXThird,
							}}
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
									className='!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0'
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
export default ParallaxTiltScroll;
