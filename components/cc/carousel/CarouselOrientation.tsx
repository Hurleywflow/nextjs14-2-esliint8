"use client";
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/namespace */
import {
	Carousel,
	CarouselMainContainer,
	CarouselNext,
	CarouselPrevious,
	CarouselThumbsContainer,
	SliderMainItem,
	SliderThumbItem,
} from "@/components/cc/carousel/extension/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import * as React from "react";
import { Suspense, useId } from "react";

import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";

const CarouselOrientation = (): JSX.Element => {
	const keyID1 = useId();
	const keyID2 = useId();
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
	// const plugin = React.useRef(
	// 	Autoplay({ delay: 5000, stopOnInteraction: true }),
	// );
	// const [api, setApi] = React.useState<CarouselApi>();
	// const [current, setCurrent] = React.useState(0);
	// const [count, setCount] = React.useState(0);

	// React.useEffect(() => {
	// 	if (!api) {
	// 		return;
	// 	}

	// 	setCount(api.scrollSnapList().length);
	// 	setCurrent(api.selectedScrollSnap() + 1);

	// 	api.on("select", () => {
	// 		// console.log('current');
	// 		setCurrent(api.selectedScrollSnap() + 1);
	// 	});
	// }, [api]);

	return (
		<Carousel
			// onMouseEnter={plugin.current.stop}
			// onMouseLeave={plugin.current.reset}
			// opts={{
			// 	align: "start",
			// 	loop: true,
			// }}
			// plugins={[plugin.current]}
			// setApi={setApi}
			className='overflow-hidden'
		>
			<CarouselNext className='top-1/2 size-9 -translate-y-1/2  backdrop-blur-sm' />
			<CarouselPrevious className='top-1/2 size-9 -translate-y-1/2  backdrop-blur-sm' />
			<CarouselMainContainer className='h-fit '>
				{IMAGES_DATA.map(({ src }: { id: number; src: string }, _index) => (
					<SliderMainItem key={keyID1} className='bg-transparent'>
						<div className='relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-background outline outline-1 outline-border'>
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
									src={src}
									className='size-full object-cover'
									alt='Carousel image'
									sizes='max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
								/>
							</Suspense>
							{/* <Image
								alt='pizza'
								// width={500}
								// height={500}
								className='object-cover object-center transition-all duration-300 ease-in-out hover:scale-105'
								fill
								sizes='(max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
								src={src}
								// Static images
								// placeholder='blur'
							/> */}
						</div>
					</SliderMainItem>
				))}
			</CarouselMainContainer>
			<CarouselThumbsContainer>
				{IMAGES_DATA.map(({ src }: { id: number; src: string }, index) => (
					<SliderThumbItem
						key={keyID2}
						index={index}
						className='bg-transparent'
					>
						<div className='relative flex size-full items-center justify-center overflow-hidden rounded-xl bg-background outline outline-1 outline-border'>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background p-10'>
										<Skeleton className='mx-5 aspect-video w-full rounded-xl' />
										<div className='space-y-2'>
											<Skeleton className='mx-auto h-4 w-60 flex-1' />
											<Skeleton className='mx-auto h-4 w-60 flex-1' />
										</div>
										{/* <p className='text-center text-2xl text-tertiary-primary tracking-wider animate-pulse '>
															Loading...
														</p> */}
									</div>
								}
							>
								<LoadingImage
									src={src}
									className='size-full object-cover'
									alt='Carousel image'
									sizes='max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
								/>
							</Suspense>

							{/* <Image
								alt='pizza'
								// width={500}
								// height={500}
								className='object-cover object-center transition-all duration-300 ease-in-out hover:scale-105'
								fill
								sizes='(max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
								src={src}
								// Static images
								// placeholder='blur'
							/> */}
						</div>{" "}
					</SliderThumbItem>
				))}
			</CarouselThumbsContainer>
		</Carousel>
	);
};

export default CarouselOrientation;
