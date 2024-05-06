/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";

import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";

const IMAGES_DATA = [
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

export default function Carousel(): JSX.Element {
	// const [index, setIndex] = useState(0);
	const [images, setImages] = useState(IMAGES_DATA);

	const handleMove = (direction: number): void => {
		// Create a shallow copy of the images array
		const imgArrCopy = [...images];

		if (direction > 0) {
			// If Next Click -> ie handleMove(1)
			// Grab the first item in the array
			const firstItem = imgArrCopy.shift();
			// If firstItem returns false
			// biome-ignore lint/style/useBlockStatements: <explanation>
			if (!firstItem) return;
			// Add the first item to the end of the array
			imgArrCopy.push({ ...firstItem, id: Math.random() });
			// Update the images array
			setImages(imgArrCopy);
		} else {
			// Grab the last item in the array
			const lastItem = imgArrCopy.pop();
			// Check if lastItem exists
			if (lastItem) {
				// Add the last item to the beginning of the array
				imgArrCopy.unshift({ ...lastItem, id: Math.random() });
			}
			// Update the images array
			setImages(imgArrCopy);
		}
		// console.log("images", images);
	};

	const variants = {
		active: {
			x: "calc(-50% + 0px)",
			width: "42rem",
			scale: 1.1,
			opacity: 1,
		},
		level1: (position: number) => ({
			x: `calc(-50% + ${position * 420}px)`,
			width: "3rem",
			scale: 0.9,
			opacity: 1,
		}),
		level2: (position: number) => ({
			x: `calc(-50% + ${position * 240}px)`,
			width: "2rem",
			scale: 0.75,
			opacity: 1,
		}),
		level3: (position: number) => ({
			x: `calc(-50% + ${position * 175}px)`,
			width: "1.5rem",
			scale: 0.5,
			opacity: 1,
		}),
		level4: (position: number) => ({
			x: `calc(-50% + ${position * 150}px)`,
			width: 0,
			scale: 0.25,
			opacity: 0,
		}),
	};

	return (
		<div className='relative mx-auto flex h-[36rem] w-[90%] items-center justify-center'>
			{images.map((image, i) => {
				let position = 0;

				if (images.length % 2) {
					position = i - (images.length + 1) / 2;
				} else {
					position = i - images.length / 2;
				}
				const imgLevel =
					position === 0
						? "active"
						: position === -1 || position === 1
							? "level1"
							: position === -2 || position === 2
								? "level2"
								: position === -3 || position === 3
									? "level3"
									: "level4";

				// function getImgLevel(position: number): string {
				// 	switch (position) {
				// 		case 0:
				// 			return "active";
				// 		case -1:
				// 		case 1:
				// 			return "level1";
				// 		case -2:
				// 		case 2:
				// 			return "level2";
				// 		case -3:
				// 		case 3:
				// 			return "level3";
				// 		default:
				// 			return "level4";
				// 	}
				// }
				// // Then, in your map function, replace the nested ternary operation with a call to this function:
				// const imgLevel = getImgLevel(position);

				return (
					<motion.div
						key={image.id}
						initial={false}
						className='absolute left-1/2 aspect-video h-[30rem] flex-none overflow-hidden rounded-3xl border border-neutral-200 shadow-md dark:border-neutral-700'
						animate={imgLevel}
						custom={position}
						variants={variants}
						transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
					>
						<div className='relative size-full'>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5' />
											<Skeleton className='h-4 w-3/5' />
										</div>
										{/* <p className='text-center text-2xl text-tertiary-primary tracking-wider animate-pulse '>
															Loading...
														</p> */}
									</div>
								}
							>
								<LoadingImage
									src={image.src}
									className='size-full object-cover'
									alt={`Carousel image ${i + 1}`}
									sizes='(max-width: 1024px) 737px, 737px'
								/>
							</Suspense>
							{/* <Image
								src={image.src}
								className='size-full object-cover'
								alt={`Carousel image ${i + 1}`}
								fill
								sizes='(max-width: 1024px) 737px, 737px'
							/> */}
						</div>
					</motion.div>
				);
			})}
			<Button
				type='button'
				onClick={() => {
					handleMove(-1);
				}}
				className='absolute -left-6 grid size-9 place-content-center rounded-full text-3xl mix-blend-difference backdrop-blur-sm transition-colors hover:text-sky-500'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6'
				>
					<title>Previous</title>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 19.5 8.25 12l7.5-7.5'
					/>
				</svg>
			</Button>
			<Button
				type='button'
				onClick={() => {
					handleMove(1);
				}}
				className='absolute -right-6 grid size-8 place-content-center rounded-full text-3xl mix-blend-difference backdrop-blur-sm  transition-colors hover:text-sky-500'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6'
				>
					<title>Next</title>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m8.25 4.5 7.5 7.5-7.5 7.5'
					/>
				</svg>
			</Button>
		</div>
	);
}

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const IMAGES_DATA = [
// 	{ id: 1, src: "/images/carousel/1.jpg" },
// 	{ id: 2, src: "/images/carousel/2.jpg" },
// 	{ id: 3, src: "/images/carousel/3.jpg" },
// 	{ id: 4, src: "/images/carousel/4.jpg" },
// 	{ id: 5, src: "/images/carousel/5.jpg" },
// 	{ id: 6, src: "/images/carousel/6.jpg" },
// 	{ id: 7, src: "/images/carousel/7.jpg" },
// 	{ id: 8, src: "/images/carousel/8.jpg" },
// 	{ id: 9, src: "/images/carousel/9.jpg" },
// 	{ id: 10, src: "/images/carousel/10.jpg" },
// 	{ id: 11, src: "/images/carousel/11.jpg" },
// 	{ id: 12, src: "/images/carousel/12.jpg" },
// 	{ id: 13, src: "/images/carousel/13.jpg" },
// 	{ id: 14, src: "/images/carousel/14.jpg" },
// 	{ id: 15, src: "/images/carousel/15.jpg" },
// 	{ id: 16, src: "/images/carousel/16.jpg" },
// 	{ id: 17, src: "/images/carousel/17.jpg" },
// 	{ id: 18, src: "/images/carousel/18.jpg" },
// 	{ id: 19, src: "/images/carousel/19.jpg" },
// 	{ id: 20, src: "/images/carousel/20.jpg" },
// 	{ id: 21, src: "/images/carousel/21.jpg" },
// ];

// export default function Carousel():JSX.Element {
// 	const [index, setIndex] = useState(0);
// 	const [images, setImages] = useState(IMAGES_DATA);

// 	const handleMove = (direction) => {
// 		// Create a shallow copy of the images array
// 		const imgArrCopy = [...images];

// 		// If Next Click -> ie handleMove(1)
// 		if (direction > 0) {
// 			// Grab the first item in the array
// 			const firstItem = imgArrCopy.shift();
// 			// If firstItem returns false
// 			if (!firstItem) return;
// 			// Add the first item to the end of the array
// 			imgArrCopy.push({ ...firstItem, id: Math.random() });
// 			// Update the images array
// 			setImages(imgArrCopy);
// 		} else {
// 			// Grab the last item in the array
// 			const lastItem = imgArrCopy.pop();
// 			// Add the last item to the beginning of the array
// 			imgArrCopy.unshift({ ...lastItem, id: Math.random() });
// 			// Update the images array
// 			setImages(imgArrCopy);
// 		}
// 		console.log("images", images);
// 	};

// 	const variants = {
// 		active: {
// 			x: "calc(-50% + 0px)",
// 			width: "22rem",
// 			scale: 1.1,
// 			opacity: 1,
// 		},
// 		level1: (position) => ({
// 			x: `calc(-50% + ${position * 240}px)`,
// 			width: "3rem",
// 			scale: 0.9,
// 			opacity: 1,
// 		}),
// 		level2: (position) => ({
// 			x: `calc(-50% + ${position * 145}px)`,
// 			width: "2rem",
// 			scale: 0.75,
// 			opacity: 1,
// 		}),
// 		level3: (position) => ({
// 			x: `calc(-50% + ${position * 108}px)`,
// 			width: "1.5rem",
// 			scale: 0.5,
// 			opacity: 1,
// 		}),
// 		level4: (position) => ({
// 			x: `calc(-50% + ${position * 90}px)`,
// 			width: 0,
// 			scale: 0.25,
// 			opacity: 0,
// 		}),
// 	};

// 	return (
// 		<div className='relative h-96 w-[90%] mx-auto items-center flex justify-center'>
// 			{images.map((image, i) => {
// 				let position = 0;

// 				if (images.length % 2) {
// 					position = i - (images.length + 1) / 2;
// 				} else {
// 					position = i - images.length / 2;
// 				}

// 				let imgLevel =
// 					position === 0
// 						? "active"
// 						: position === -1 || position === 1
// 							? "level1"
// 							: position === -2 || position === 2
// 								? "level2"
// 								: position === -3 || position === 3
// 									? "level3"
// 									: "level4";

// 				return (
// 					<motion.div
// 						key={image.id}
// 						initial={false}
// 						className={`absolute left-1/2 flex-none aspect-[3/2] rounded-3xl overflow-hidden h-60 border border-neutral-200 dark:border-neutral-700 shadow-md`}
// 						animate={imgLevel}
// 						custom={position}
// 						variants={variants}
// 						transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
// 					>
// 						<img
// 							src={image.src}
// 							className='h-full w-full object-cover'
// 							alt={`Carousel image ${i + 1}`}
// 						/>
// 					</motion.div>
// 				);
// 			})}
// 			<button
// 				onClick={() => handleMove(-1)}
// 				className='grid h-14 w-14 place-content-center text-3xl transition-colors  hover:text-sky-500 absolute -left-6'
// 			>
// 				<svg
// 					xmlns='http://www.w3.org/2000/svg'
// 					fill='none'
// 					viewBox='0 0 24 24'
// 					strokeWidth={1.5}
// 					stroke='currentColor'
// 					className='w-6 h-6'
// 				>
// 					<path
// 						strokeLinecap='round'
// 						strokeLinejoin='round'
// 						d='M15.75 19.5 8.25 12l7.5-7.5'
// 					/>
// 				</svg>
// 			</button>
// 			<button
// 				onClick={() => handleMove(1)}
// 				className='grid h-14 w-14 place-content-center text-3xl transition-colors  hover:text-sky-500 absolute -right-6'
// 			>
// 				<svg
// 					xmlns='http://www.w3.org/2000/svg'
// 					fill='none'
// 					viewBox='0 0 24 24'
// 					strokeWidth={1.5}
// 					stroke='currentColor'
// 					className='w-6 h-6'
// 				>
// 					<path
// 						strokeLinecap='round'
// 						strokeLinejoin='round'
// 						d='m8.25 4.5 7.5 7.5-7.5 7.5'
// 					/>
// 				</svg>
// 			</button>
// 		</div>
// 	);
// }
