import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useId } from "react";
function SkewScroll(): JSX.Element {
	const keyIndex = useId();
	const IMAGES_DATA = [
		{ id: 1, src: "/Images/manicure/1.webp" },
		{ id: 2, src: "/Images/manicure/2.webp" },
		{ id: 3, src: "/Images/manicure/3.webp" },
		{ id: 4, src: "/Images/manicure/4.webp" },
		{ id: 5, src: "/Images/manicure/5.webp" },
		{ id: 6, src: "/Images/manicure/6.webp" },
		{ id: 7, src: "/Images/manicure/7.webp" },
		{ id: 8, src: "/Images/manicure/8.webp" },
		{ id: 9, src: "/Images/manicure/9.webp" },
		{ id: 10, src: "/Images/manicure/10.webp" },
		{ id: 11, src: "/Images/manicure/11.webp" },
		{ id: 12, src: "/Images/manicure/12.webp" },
		{ id: 13, src: "/Images/manicure/13.webp" },
		{ id: 14, src: "/Images/manicure/14.webp" },
		{ id: 15, src: "/Images/manicure/15.webp" },
		{ id: 16, src: "/Images/manicure/16.webp" },
		{ id: 17, src: "/Images/manicure/17.webp" },
		{ id: 18, src: "/Images/manicure/18.webp" },
		{ id: 19, src: "/Images/manicure/19.webp" },
		{ id: 20, src: "/Images/manicure/20.webp" },
		{ id: 21, src: "/Images/manicure/21.webp" },
		{ id: 22, src: "/Images/manicure/22.webp" },
		{ id: 23, src: "/Images/manicure/23.webp" },
		{ id: 24, src: "/Images/manicure/24.webp" },
		{ id: 25, src: "/Images/manicure/25.webp" },
		{ id: 26, src: "/Images/manicure/26.webp" },
		{ id: 27, src: "/Images/manicure/27.webp" },
		{ id: 28, src: "/Images/manicure/28.webp" },
		{ id: 29, src: "/Images/manicure/29.webp" },
		{ id: 30, src: "/Images/manicure/30.webp" },
		{ id: 31, src: "/Images/manicure/31.webp" },
		{ id: 32, src: "/Images/manicure/32.webp" },
		{ id: 33, src: "/Images/manicure/33.webp" },
		{ id: 34, src: "/Images/manicure/34.webp" },
		{ id: 35, src: "/Images/manicure/35.webp" },
		{ id: 36, src: "/Images/manicure/36.webp" },
		{ id: 37, src: "/Images/manicure/37.webp" },
		{ id: 38, src: "/Images/manicure/38.webp" },
		{ id: 39, src: "/Images/manicure/39.webp" },
		{ id: 40, src: "/Images/manicure/40.webp" },
		{ id: 41, src: "/Images/manicure/41.webp" },
		{ id: 42, src: "/Images/manicure/42.webp" },
		{ id: 43, src: "/Images/manicure/43.webp" },
		{ id: 44, src: "/Images/manicure/44.webp" },
		{ id: 45, src: "/Images/manicure/45.webp" },
		{ id: 46, src: "/Images/manicure/46.webp" },
		{ id: 47, src: "/Images/manicure/47.webp" },
		{ id: 48, src: "/Images/manicure/48.webp" },
		{ id: 49, src: "/Images/manicure/49.webp" },
		{ id: 50, src: "/Images/manicure/50.webp" },
		{ id: 51, src: "/Images/manicure/51.webp" },
		{ id: 52, src: "/Images/manicure/52.webp" },
		{ id: 53, src: "/Images/manicure/53.webp" },
		{ id: 54, src: "/Images/manicure/54.webp" },
		{ id: 55, src: "/Images/manicure/55.webp" },
		{ id: 56, src: "/Images/manicure/56.webp" },
		{ id: 58, src: "/Images/manicure/58.webp" },
		{ id: 59, src: "/Images/nail-art/1.webp" },
		{ id: 60, src: "/Images/nail-art/2.webp" },
		{ id: 61, src: "/Images/nail-art/3.webp" },
		{ id: 62, src: "/Images/nail-art/4.webp" },
		{ id: 63, src: "/Images/nail-art/5.webp" },
		{ id: 64, src: "/Images/nail-art/6.webp" },
		{ id: 65, src: "/Images/nail-art/7.webp" },
		{ id: 66, src: "/Images/nail-art/8.webp" },
		{ id: 67, src: "/Images/nail-art/9.webp" },
		{ id: 68, src: "/Images/nail-art/10.webp" },
		{ id: 69, src: "/Images/nail-art/11.webp" },
		{ id: 70, src: "/Images/nail-art/12.webp" },
		{ id: 71, src: "/Images/nail-art/13.webp" },
		{ id: 72, src: "/Images/nail-art/14.webp" },
		{ id: 73, src: "/Images/nail-art/15.webp" },
		{ id: 74, src: "/Images/nail-art/16.webp" },
		{ id: 75, src: "/Images/nail-art/17.webp" },
		{ id: 76, src: "/Images/nail-art/18.webp" },
		{ id: 77, src: "/Images/nail-art/19.webp" },
		{ id: 78, src: "/Images/nail-art/20.webp" },
		{ id: 79, src: "/Images/nail-art/21.webp" },
		{ id: 80, src: "/Images/nail-art/22.webp" },
		{ id: 81, src: "/Images/nail-art/23.webp" },
		{ id: 82, src: "/Images/nail-art/24.webp" },
		{ id: 83, src: "/Images/nail-art/25.webp" },
		{ id: 84, src: "/Images/nail-art/26.webp" },
		{ id: 85, src: "/Images/nail-art/27.webp" },
		{ id: 86, src: "/Images/nail-art/28.webp" },
		{ id: 87, src: "/Images/nail-art/29.webp" },
		{ id: 88, src: "/Images/nail-art/30.webp" },
		{ id: 89, src: "/Images/pedicure/1.webp" },
		{ id: 90, src: "/Images/pedicure/2.webp" },
		{ id: 91, src: "/Images/pedicure/3.webp" },
		{ id: 92, src: "/Images/pedicure/4.webp" },
		{ id: 93, src: "/Images/pedicure/5.webp" },
		{ id: 94, src: "/Images/pedicure/6.webp" },
		{ id: 95, src: "/Images/pedicure/7.webp" },
		{ id: 96, src: "/Images/pedicure/8.webp" },
		{ id: 97, src: "/Images/pedicure/9.webp" },
		{ id: 98, src: "/Images/pedicure/10.webp" },
		{ id: 99, src: "/Images/pedicure/11.webp" },
		{ id: 100, src: "/Images/pedicure/12.webp" },
		{ id: 101, src: "/Images/pedicure/13.webp" },
		{ id: 102, src: "/Images/pedicure/14.webp" },
		{ id: 103, src: "/Images/pedicure/15.webp" },
		{ id: 104, src: "/Images/pedicure/16.webp" },
		{ id: 105, src: "/Images/pedicure/17.webp" },
		{ id: 106, src: "/Images/pedicure/18.webp" },
	];
	return (
		<div className='flex aspect-square w-full items-center justify-center  md:aspect-video '>
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
								<div className='relative aspect-video w-full overflow-hidden rounded-sm bg-background shadow-sm'>
									<Suspense
										fallback={
											<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background p-10'>
												<Skeleton className='mx-5 aspect-video w-full rounded-xl' />
												<div className='space-y-2'>
													<Skeleton className='mx-auto h-4 w-60 flex-1' />
													<Skeleton className='mx-auto h-4 w-60 flex-1' />
												</div>
											</div>
										}
									>
										<LoadingImage
											src={img.src}
											className='size-full object-cover object-center'
											alt='Carousel image'
											sizes='(max-width:320px) 150px, (max-width:375px) 175px, (max-width:480px) 240px, (max-width:640px) 300px, (max-width:768px) 230px, 150px'
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
