import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import LoadingImage from "../../loading-image/LoadingImage";
import Marquee from "./Marquee";

type CardType = {
	src: string;
	id: number;
};
const testimonials: CardType[] = [
	{ id: 1, src: "/Images/feedback/1.webp" },
	{ id: 2, src: "/Images/feedback/2.webp" },
	{ id: 3, src: "/Images/feedback/3.webp" },
	{ id: 4, src: "/Images/feedback/4.webp" },
	{ id: 5, src: "/Images/feedback/5.webp" },
	{ id: 6, src: "/Images/feedback/6.webp" },
	{ id: 7, src: "/Images/feedback/7.webp" },
	{ id: 8, src: "/Images/feedback/8.webp" },
	{ id: 9, src: "/Images/feedback/9.webp" },
	{ id: 10, src: "/Images/feedback/10.webp" },
	{ id: 11, src: "/Images/feedback/11.webp" },
	{ id: 12, src: "/Images/feedback/12.webp" },
	{ id: 13, src: "/Images/feedback/13.webp" },
	{ id: 14, src: "/Images/feedback/14.webp" },
	{ id: 15, src: "/Images/feedback/15.webp" },
	{ id: 16, src: "/Images/feedback/16.webp" },
	{ id: 17, src: "/Images/feedback/17.webp" },
	{ id: 18, src: "/Images/feedback/18.webp" },
	{ id: 19, src: "/Images/feedback/19.webp" },
	{ id: 20, src: "/Images/feedback/20.webp" },
	{ id: 21, src: "/Images/feedback/21.webp" },
	{ id: 22, src: "/Images/feedback/22.webp" },
	{ id: 23, src: "/Images/feedback/23.webp" },
	{ id: 24, src: "/Images/feedback/24.webp" },
	{ id: 25, src: "/Images/feedback/25.webp" },
	{ id: 26, src: "/Images/feedback/26.webp" },
	{ id: 27, src: "/Images/feedback/27.webp" },
	{ id: 28, src: "/Images/feedback/28.webp" },
	{ id: 29, src: "/Images/feedback/29.webp" },
	{ id: 30, src: "/Images/feedback/30.webp" },
	{ id: 31, src: "/Images/feedback/31.webp" },
	{ id: 32, src: "/Images/feedback/32.webp" },
	{ id: 33, src: "/Images/feedback/33.webp" },
	{ id: 34, src: "/Images/feedback/34.webp" },
	{ id: 35, src: "/Images/feedback/35.webp" },
	{ id: 36, src: "/Images/feedback/36.webp" },
	{ id: 37, src: "/Images/feedback/37.webp" },
	{ id: 38, src: "/Images/feedback/38.webp" },
	{ id: 39, src: "/Images/feedback/39.webp" },
	{ id: 40, src: "/Images/feedback/40.webp" },
	{ id: 41, src: "/Images/feedback/41.webp" },
	{ id: 42, src: "/Images/feedback/42.webp" },
	{ id: 43, src: "/Images/feedback/43.webp" },
	{ id: 44, src: "/Images/feedback/44.webp" },
	{ id: 45, src: "/Images/feedback/45.webp" },
	{ id: 46, src: "/Images/feedback/46.webp" },
	{ id: 47, src: "/Images/feedback/47.webp" },
	{ id: 48, src: "/Images/feedback/48.webp" },
	{ id: 49, src: "/Images/feedback/49.webp" },
	{ id: 50, src: "/Images/feedback/50.webp" },
	{ id: 51, src: "/Images/feedback/51.webp" },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
	src,
}: {
	src: CardType["src"];
}): JSX.Element => {
	return (
		<Card className='relative h-52 w-[350px] max-w-full cursor-pointer overflow-hidden bg-[#202020] md:w-[450px]'>
			<CardContent>
				<Suspense
					fallback={
						<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
							<Skeleton className='aspect-video w-4/5 rounded-xl' />
							<div className='flex w-full flex-col items-center justify-center space-y-2'>
								<Skeleton className='h-4 w-3/5 ' />
								<Skeleton className='h-4 w-3/5 ' />
							</div>
						</div>
					}
				>
					<LoadingImage
						src={src}
						className='size-full object-contain object-center'
						alt='Carousel image'
						sizes='380px'
					/>
				</Suspense>
			</CardContent>
		</Card>
	);
};

const MarqueeDemo = (): JSX.Element => {
	return (
		<div className='relative flex size-full flex-col items-center justify-center gap-2 overflow-hidden rounded-md p-2'>
			<Marquee pauseOnHover className='[--duration:190s]'>
				{firstRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className=' w-full border-t-4 border-dashed border-border' />
			<Marquee reverse pauseOnHover className='[--duration:190s]'>
				{secondRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background md:w-1/4' />
			<div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background md:w-1/4' />
		</div>
	);
};

export default MarqueeDemo;
