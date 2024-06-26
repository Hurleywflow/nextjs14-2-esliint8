/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Card = ({ i, src, title, color, progress, range, targetScale }) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className='sticky top-0 flex h-screen items-center justify-center  odd:rotate-1  even:-rotate-1 '
		>
			<motion.div
				style={{
					backgroundColor: color,
					scale,
					imageScale,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className='-top-1/4; relative flex aspect-[9/16] w-4/5 origin-top flex-col rounded-xl shadow-2xl  md:aspect-video '
			>
				<div
					className='ring-tertiary-primary  h-full items-center justify-center gap-5 rounded-lg  ring-2 ring-offset-2'
					// initial={{
					//   opacity: 0.3,
					// }}
					// whileInView={{
					//   opacity: 1,
					//   transition: {
					//     duration: 0.3,
					//     delay: 0.1 + i * 0.1,
					//   },
					// }}
				>
					<div className='relative size-full overflow-hidden rounded-xl shadow-2xl '>
						<Image
							src={src}
							alt={title}
							fill
							sizes='(max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, (max-width: 1536px) 1024px, (max-width: 2000px) 1280px, (max-width: 2560px) 1500px, 1500px'
							className='object-cover object-center'
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Card;
