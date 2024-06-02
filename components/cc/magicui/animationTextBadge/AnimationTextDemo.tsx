import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "./AnimatedGradientText";

export async function AnimatedGradientTextDemo() {
	return (
		<AnimatedGradientText>
			🎉 <hr className='mx-2 h-5 w-px shrink-0 bg-stone-500 ' />{" "}
			<span
				className={cn(
					"inline animate-gradient bg-primary bg-clip-text text-transparent text-2xl",
				)}
				// className={cn(
				// 	"inline animate-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl",
				// )}
			>
				End financial year sales
			</span>
			<ChevronRight className='ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
		</AnimatedGradientText>
	);
}
