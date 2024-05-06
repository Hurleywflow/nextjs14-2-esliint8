import ParallaxTiltScroll from "./ParallaxTiltScroll";

type CardType = {
	src: string;
	id: number;
	height: number;
	width: number;
};
const IMAGES_DATA: CardType[] = [
	{ id: 1, src: "/Images/1.png", height: 400, width: 400 },
	{ id: 2, src: "/Images/2.png", height: 400, width: 400 },
	{ id: 3, src: "/Images/3.png", height: 400, width: 400 },
	{ id: 4, src: "/Images/4.png", height: 400, width: 400 },
	{ id: 5, src: "/Images/5.png", height: 400, width: 400 },
	{ id: 6, src: "/Images/6.png", height: 400, width: 400 },
	{ id: 7, src: "/Images/7.png", height: 400, width: 400 },
	{ id: 8, src: "/Images/8.png", height: 400, width: 400 },
	{ id: 9, src: "/Images/9.png", height: 400, width: 400 },
	{ id: 10, src: "/Images/10.png", height: 400, width: 400 },
	{ id: 11, src: "/Images/11.png", height: 400, width: 400 },
	{ id: 12, src: "/Images/12.png", height: 400, width: 400 },
	{ id: 13, src: "/Images/13.png", height: 400, width: 400 },
	// { id: 14, src: "/images/14.png" },
	// { id: 15, src: "/images/15.png" },
	// { id: 16, src: "/images/16.png" },
	// { id: 17, src: "/images/17.png" },
	// { id: 18, src: "/images/18.png" },
	// { id: 19, src: "/images/19.png" },
	// { id: 20, src: "/images/20.png" },
	// { id: 21, src: "/images/21.png" },
];

function VerticalParallaxTiltScroll(): JSX.Element {
	return (
		<div className='relative size-full'>
			<div className='pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-background to-transparent' />
			<div className='pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-background to-transparent' />
			<ParallaxTiltScroll images={IMAGES_DATA} />
		</div>
	);
}
export default VerticalParallaxTiltScroll;
