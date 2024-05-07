/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Suspense, useEffect, useId, useRef } from "react";


export const CarouselWithThumbnails = (): JSX.Element => {
	type SplideInstance = {
		sync: (splide: SplideInstance) => void;
		splide: SplideInstance;
	};
	const keyIndex = useId();
	const keyIndex1 = useId();

	const slides = [
		{
			imageUrl: "/images/1.png",
			title: "Slide 1",
			description: "This is the first slide description.",
		},
		{
			imageUrl: "/images/2.png",
			title: "Slide 2",
			description: "This is the second slide description.",
		},
		{
			imageUrl: "/images/3.png",
			title: "Slide 3",
			description: "This is the third slide description.",
		},
		{
			imageUrl: "/Images/4.png",
			title: "Slide 4",
			description: "This is the fourth slide description.",
		},
		{
			imageUrl: "/Images/5.png",
			title: "Slide 5",
			description: "This is the fifth slide description.",
		},
		{
			imageUrl: "/Images/6.png",
			title: "Slide 6",
			description: "This is the sixth slide description.",
		},
	];

	const primaryRef = useRef<SplideInstance | null>(null);
	const secondaryRef = useRef<SplideInstance | null>(null);

	useEffect(() => {
		if (primaryRef.current !== null && secondaryRef.current !== null) {
			primaryRef.current.sync(secondaryRef.current.splide);
		}
	}, []);

	return (
		<div className='mb-5 w-full'>
			<Splide
				options={{
					rewind: true,
					pagination: false,
					arrows: true,
					autoplay: true,
					type: "loop",
					interval: 7000,
					pauseOnHover: true,
					pauseOnFocus: false,
					resetProgress: false,
					centerMode: true,
					gap: "1rem",
				}}
				aria-label='Carousel with Autoplay'
				ref={primaryRef}
			>
				{slides.map((slide, _index) => (
					<SplideSlide key={keyIndex}>
						<div className='relative mb-4 flex aspect-square w-full  cursor-grab flex-col items-center md:aspect-video'>
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
									src={slide.imageUrl}
									className='mb-4 size-full overflow-hidden rounded-lg object-cover '
									alt={slide.title}
									sizes='max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
								/>
							</Suspense>
							{/* <h3 className='mb-2 text-xl font-bold text-white'>
								{slide.title}
							</h3>
							<p className='text-center text-gray-400'>{slide.description}</p> */}
						</div>
					</SplideSlide>
				))}
			</Splide>

			<Splide
				style={{
					margin: "1rem",
				}}
				options={{
					fixedWidth: 100,
					fixedHeight: 60,
					isNavigation: true,
					gap: 10,
					focus: "center",
					pagination: true,
					arrows: false,
					cover: true,
					breakpoints: {
						600: {
							fixedWidth: 66,
							fixedHeight: 40,
						},
					},
				}}
				ref={secondaryRef}
			>
				{slides.map((slide, _index) => (
					<SplideSlide key={keyIndex1} className=''>
						<div className='relative flex  aspect-video w-full flex-col items-center'>
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
									src={slide.imageUrl}
									className='size-full overflow-hidden rounded-lg object-cover '
									alt={slide.title}
									sizes='100px'
								/>
							</Suspense>
						</div>
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};
