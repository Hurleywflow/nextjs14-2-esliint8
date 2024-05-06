/* eslint-disable @typescript-eslint/ban-types */
"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type FC } from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const InViewScrollRightIntoCenter: FC<Props> = ({ children, className }) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
	return (
		<div ref={container} className={cn("size-full m-0 p-0", className)}>
			<motion.div style={{ x: x2 }} className='m-0 size-fit p-0'>
				{children}
			</motion.div>
		</div>
	);
};
export default InViewScrollRightIntoCenter;
