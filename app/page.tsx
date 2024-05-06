import { Container } from "@/components/cc/container/container";
import CarouselOrientation from "@/components/cc/embla-carousel/CarouselOrientation";
import Carousel from "@/components/cc/embla-carousel/carousel";
import VerticalParallaxTiltScroll from "@/components/cc/images-utils/verticalScroll/VerticalParallaxTiltScroll";
import { InfiniteMovingCardsDemo } from "@/components/cc/infinite-moving-cards/InfiniteMovingCardsDemo";
import SkewScroll from "@/components/cc/skewScroll/SkewScroll";
import { Suspense } from "react";
import Loading from "./loading";

const Home = (): JSX.Element => {
	// const Home = async (): JSX.Element => {
	// 	await new Promise((resolve) => {
	// 		setTimeout(resolve, 5000);
	// 	});
	return (
		<main className='m-0 h-fit w-full p-0 '>
			<Container>
				<div className='relative w-full'>
					<div className='sticky top-0 flex h-fit items-center justify-center bg-red-400'>
						<Suspense fallback={<Loading />}>
							<Carousel />
						</Suspense>
					</div>

					<div className='sticky top-0 flex h-fit items-center justify-center bg-blue-400'>
						<Suspense fallback={<Loading />}>
							<SkewScroll />
						</Suspense>
					</div>
					<div className='sticky top-0 flex h-fit items-center justify-center bg-blue-400'>
						<Suspense fallback={<Loading />}>
							<CarouselOrientation />
						</Suspense>
					</div>
					<div className='sticky top-0 flex h-fit items-center justify-center bg-blue-400'>
						<Suspense fallback={<Loading />}>
							<VerticalParallaxTiltScroll />
						</Suspense>
					</div>
					<div className='sticky top-0 flex h-fit items-center justify-center bg-blue-400'>
						<Suspense fallback={<Loading />}>
							<InfiniteMovingCardsDemo />
						</Suspense>
					</div>
				</div>
			</Container>
		</main>
	);
};
export default Home;
