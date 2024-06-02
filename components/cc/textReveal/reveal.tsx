/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-undef */
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
	children: JSX.Element;
	width?: "w-fit" | "100%";
};

// <Reveal> use this to wrap around components or text you want to reveal </Reveal>
const Reveal = ({ children, width = "w-fit" }: Props): JSX.Element => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			{/* slide up text or items */}
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={mainControls}
				// transition={{ duration: 0.5, delay: 0 }}
				// use this delay when use with thingy to reveal
				transition={{ duration: 0.75, delay: 0.35 }}
			>
				{/* this is children components
        <Reveal>
          <h2 className={`flex flex-col items-center justify-center text-center text-2xl font-bolt `}>
            I&apos;m a <span>Full Stack Developer</span>
          </h2>
        </Reveal> */}
				{children}
			</motion.div>
			{/* Add slide div thingy to reveal items or text underneath */}
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial='hidden'
				animate={slideControls}
				transition={{ duration: 0.7, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "rgba(255, 255, 255, 0.5)",
					zIndex: 20,
				}}
			/>
		</div>
	);
};
export default Reveal;
