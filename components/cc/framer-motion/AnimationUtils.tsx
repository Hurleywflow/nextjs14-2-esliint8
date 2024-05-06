import { MotionDiv } from "@/lib/framer";
import { cn } from "@/lib/utils";
import type React from "react";
type Props = {
	children: React.ReactNode | string;
	className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
};

export function InViewFadeInFromBottom({
	children,
	className,
  delay,
  duration,
  ease,
}: Readonly<Props>): React.ReactElement {
	return (
		<MotionDiv
			initial={{ opacity: 0.3, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				// delay: 0.3,
				// duration: 0.8,
				// ease: "easeInOut",
        delay: delay ?? 0.3,
        duration: duration ?? 0.8,
        ease: ease ?? "easeInOut",
			}}
			className={cn(
				"flex w-fit h-fit items-center justify-center",
				className,
			)}
		>
			{children}
		</MotionDiv>
	);
}
