import Marquee from "@/components/cc/magicui/marquee/Marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useId } from "react";
import LoadingImage from "../../loading-image/LoadingImage";

type CardType = {
	src: string;
	id: number;
};
const testimonials: CardType[] = [
	{ id: 1, src: "/Images/n1.png" },
	{ id: 2, src: "/Images/n2.png" },
	{ id: 3, src: "/Images/n3.png" },
	{ id: 4, src: "/Images/n4.png" },
	{ id: 5, src: "/Images/n5.png" },
	{ id: 6, src: "/Images/s1.png" },
	{ id: 7, src: "/Images/s2.png" },
	{ id: 8, src: "/Images/s3.png" },
	{ id: 9, src: "/Images/s4.png" },
	{ id: 10, src: "/Images/s5.png" },
	{ id: 11, src: "/Images/s6.png" },
];

const firstRow = testimonials.slice(0, testimonials.length / 1);
// const secondRow = testimonials.slice(testimonials.length / 1);
// const firstRow = testimonials.slice(0, testimonials.length / 2);
// const secondRow = testimonials.slice(testimonials.length / 2);
const ReviewCard = ({
	src,
}: {
	src: CardType["src"];
}): JSX.Element => {
	return (
		<Card className='relative aspect-video h-[35rem] cursor-pointer overflow-hidden bg-[#202020] '>
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
						sizes='1200px'
					/>
				</Suspense>
			</CardContent>
		</Card>
	);
};

const MarqueeDemoVertical = () => {
	const keyID1 = useId();
	const keyID2 = useId();
	return (
		<div className='relative flex h-[40rem] w-fit flex-row items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-2 md:shadow-xl'>
			<Marquee pauseOnHover vertical className='[--duration:40s]'>
				{firstRow.map((review) => (
					<ReviewCard key={keyID1} {...review} />
				))}
			</Marquee>
			{/* <Marquee reverse pauseOnHover vertical className='[--duration:20s]'>
				{secondRow.map((review) => (
					<ReviewCard key={keyID2} {...review} />
				))}
			</Marquee> */}
			<div className='pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-background' />
			<div className='pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-background' />
		</div>
	);
};

export default MarqueeDemoVertical;
