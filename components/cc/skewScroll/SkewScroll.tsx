import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useId } from "react";
function SkewScroll(): JSX.Element {
	const keyIndex = useId();
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
	return (
		<div className='aspect-video flex w-full items-center  justify-center '>
			<div className='relative size-full overflow-hidden bg-background'>
				{/* <!-- For some reason the white vignette effect don't work in this sandbox but if you uncomment the following lines in VSCode, they should work --> */}
				<div className='pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-background to-transparent' />
				<div className='pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-background to-transparent' />
				<div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent' />
				<div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent' />
				<div className='mx-auto grid h-[200px]  w-full animate-skew-scroll grid-cols-2 gap-3 hover:[animation-play-state:paused] sm:grid-cols-3 md:grid-cols-4'>
					{/* <!-- These are all the same components - if you're using React, you can use a map to iterate through all of them --> */}
					{/* map over the data and render a component for each item --> */}
					{IMAGES_DATA.map((img, _) => {
						return (
							<div
								key={keyIndex}
								className=' flex cursor-pointer items-center space-x-1 rounded-md border border-gray-100 p-1 shadow-md transition-all ease-linear hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl '
							>
								{/* avatar */}
								<div className='aspect-video relative w-full overflow-hidden rounded-sm bg-background shadow-sm'>
									<Suspense
										fallback={
											<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background p-10'>
												<Skeleton className='aspect-video mx-5 w-full rounded-xl' />
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
											src={img.src}
											className='size-full object-cover'
											alt='Carousel image'
											sizes='(max-width: 1024px) 737px, 737px'
										/>
									</Suspense>
									{/* <Image
										alt='skew infinite scroll'
										src={img.src}
										// width={500}
										// height={500}
										fill
										sizes='150px'
										className='img scale-animation object-cover object-center'
									/> */}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default SkewScroll;

// Skew carousel
// 	keyframes: {
// 			'skew-scroll': {
// 				'0%': {
// 					transform:
// 						'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
// 				},
// 				'100%': {
// 					transform:
// 						'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
// 				},
// 			},
// 		},
// animation: {

// 			// Skew carousel
// 			'skew-scroll': 'skew-scroll 20s infinite linear ',

// 		},
