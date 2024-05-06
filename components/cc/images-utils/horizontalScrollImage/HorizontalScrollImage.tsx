"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type CardType = {
	src: string;
	id: number;
};

const IMAGES_DATA: CardType[] = [
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
const Card = ({ card }: { card: CardType }): JSX.Element => {
	return (
		<div
			key={card.id}
			className='group relative aspect-[4/3] h-[50vh] overflow-hidden rounded-lg md:h-[30vh]'
		>
			<div
				style={{
					backgroundImage: `url(${card.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className='absolute inset-0 z-0 w-full  transition-transform duration-300 group-hover:scale-110'
			/>
			{/* <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div> */}
		</div>
	);
};

const HorizontalScrollCarousel = (): JSX.Element => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x1 = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
	const x2 = useTransform(scrollYProgress, [0, 1], ["-1%", "50%"]);

	return (
		<div ref={targetRef} className='relative h-[400vh] overflow-x-clip '>
			<div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent' />
			<div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent' />
			<div className='sticky top-0 flex h-[50vh] items-center justify-center md:h-[30vh]'>
				<motion.div style={{ x: x1 }} className='flex gap-4'>
					{IMAGES_DATA.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
			<div className='sticky top-[51vh] flex h-[50vh] items-center justify-center md:top-[31vh] md:h-[30vh]'>
				<motion.div style={{ x: x2 }} className='flex gap-4 '>
					{IMAGES_DATA.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
			<div className='sticky  hidden  items-center  justify-center md:top-[62vh] md:flex md:h-[30vh]'>
				<motion.div style={{ x: x1 }} className='flex gap-4'>
					{IMAGES_DATA.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</div>
	);
};

export default HorizontalScrollCarousel;
