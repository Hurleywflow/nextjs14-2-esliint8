/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const InfiniteScrollingTextV1 = (): JSX.Element => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const [rotation, setRotation] = useState(0);

	const maxRotation = 8;
	useEffect(() => {
		const handleMouseMove = (e: { clientX: number; clientY: any }): void => {
			setCursorPosition({ x: e.clientX, y: e.clientY });

			const midpoint = window.innerWidth / 2;

			const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
			const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

			setRotation(e.clientX > midpoint ? rotation : -rotation);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className='relative flex w-full overflow-hidden'>
			<div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent' />
			<div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent' />
			<div
				className={`following-tooltip duration-[0.3s] fixed z-[99] flex h-8 w-56 items-center justify-center rounded-3xl bg-primary px-12 py-[1.4rem]  font-bold text-primary-foreground transition-opacity ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
				style={{
					top: `${cursorPosition.y}px`,
					left: `${cursorPosition.x}px`,
					transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
				}}
			>
				<p>Time to Flex💪</p>
			</div>
			<div className='w-vw relative flex overflow-hidden'>
				<motion.div
					className='whitespace-nowrap '
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
					animate={{
						x: [0, -1000],
						transition: {
							repeat: Number.POSITIVE_INFINITY,
							duration: 20,
							ease: "linear",
						},
					}}
				>
					<Link href='/components'>
						<div className='w-full '>
							<h1 className=' m-0 w-full  grow cursor-pointer text-[5rem] font-[800] transition-all  hover:text-primary-foreground  md:text-[6rem] lg:text-[8rem]'>
								Let's Get Started - Let's Get Started - Let's Get Started -
							</h1>
						</div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
};
export default InfiniteScrollingTextV1;
