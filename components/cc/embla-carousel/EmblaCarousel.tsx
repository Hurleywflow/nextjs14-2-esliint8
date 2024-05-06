// 'use client';
// /* eslint-disable import/no-extraneous-dependencies */
// import Autoplay from 'embla-carousel-autoplay';
// import * as React from 'react';

// import { Card, CardContent } from '@/components/ui/card';
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// 	type CarouselApi,
// } from '@/components/ui/carousel';
// import Image from 'next/image';

// function EmblaCarousel(): JSX.Element {
// 	const plugin = React.useRef(
// 		Autoplay({ delay: 5000, stopOnInteraction: true }),
// 	);
// 	const [api, setApi] = React.useState<CarouselApi>();
// 	const [current, setCurrent] = React.useState(0);
// 	const [count, setCount] = React.useState(0);

// 	React.useEffect(() => {
// 		if (!api) {
// 			return;
// 		}

// 		setCount(api.scrollSnapList().length);
// 		setCurrent(api.selectedScrollSnap() + 1);

// 		api.on('select', () => {
// 			// console.log('current');
// 			setCurrent(api.selectedScrollSnap() + 1);
// 		});
// 	}, [api]);

// 	return (
// 		<div>
// 			<Carousel
// 				className='w-screen max-w-screen-2xl overflow-hidden md:w-[90vw] lg:overflow-visible'
// 				onMouseEnter={plugin.current.stop}
// 				onMouseLeave={plugin.current.reset}
// 				opts={{
// 					align: 'start',
// 					loop: true,
// 				}}
// 				plugins={[plugin.current]}
// 				setApi={setApi}
// 			>
// 				<CarouselContent>
// 					{Array.from({ length: 5 }).map((_, index) => (
// 						// {photos.map((photo, index) => (
// 						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
// 						<CarouselItem key={index}>
// 							<div className='p-1'>
// 								<Card>
// 									<CardContent className=' relative flex aspect-video w-full  items-center justify-center overflow-hidden rounded-lg p-6'>
// 										{/* <span className='text-4xl font-semibold'>{index + 1}</span> */}
// 										<Image
// 											// key={photo._key}
// 											alt={'photo._key'}
// 											className='object-cover object-center transition-all duration-300 ease-in-out hover:scale-125 '
// 											fill
// 											sizes='(max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
// 											src={'urlFor(photo).url()'}
// 											// Static images
// 											// placeholder='blur'
// 										/>
// 									</CardContent>
// 								</Card>
// 							</div>
// 						</CarouselItem>
// 					))}
// 				</CarouselContent>
// 				<CarouselPrevious />
// 				<CarouselNext />
// 			</Carousel>
// 			<div className='py-2 text-center text-sm text-muted-foreground'>
// 				Slide {current} of {count}
// 			</div>
// 		</div>
// 	);
// }

// export default EmblaCarousel;
