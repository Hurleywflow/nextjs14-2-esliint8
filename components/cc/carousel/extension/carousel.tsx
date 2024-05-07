/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRightIcon } from "lucide-react";
import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

type CarouselContextProps = {
	carouselOptions?: EmblaOptionsType;
	orientation?: "vertical" | "horizontal";
	plugins?: Parameters<typeof useEmblaCarousel>[1];
};

type DirectionOption = "ltr" | "rtl" | undefined;

type CarouselContextType = {
	emblaMainApi: ReturnType<typeof useEmblaCarousel>[1];
	mainRef: ReturnType<typeof useEmblaCarousel>[0];
	thumbsRef: ReturnType<typeof useEmblaCarousel>[0];
	scrollNext: () => void;
	scrollPrev: () => void;
	canScrollNext: boolean;
	canScrollPrev: boolean;
	activeIndex: number;
	onThumbClick: (index: number) => void;
	handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
	orientation: "vertical" | "horizontal";
	direction: DirectionOption;
} & CarouselContextProps;

const CarouselContext = createContext<CarouselContextType | null>(null);
const useCarousel = (): CarouselContextType => {
	const context = useContext(CarouselContext);
	if (context === null) {
		throw new Error("useCarousel must be used within a CarouselProvider");
	}
	return context;
};

// TODO : add support for vertical rtl support for the carousel
// ref : https://github.com/davidjerleke/embla-carousel/issues/784

const Carousel = forwardRef<
	HTMLDivElement,
	CarouselContextProps & React.HTMLAttributes<HTMLDivElement>
>(
	(
		{
			carouselOptions,
			orientation = "horizontal",
			dir,
			plugins,
			children,
			className,
			...props
		},
		ref,
	) => {
		const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
			{
				...carouselOptions,
				axis: orientation === "vertical" ? "y" : "x",
				direction: carouselOptions?.direction ?? (dir as DirectionOption),
			},
			plugins,
		);

		const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
			{
				...carouselOptions,
				axis: orientation === "vertical" ? "y" : "x",
				direction: carouselOptions?.direction ?? (dir as DirectionOption),
				containScroll: "keepSnaps",
				dragFree: true,
			},
			plugins,
		);

		const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
		const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
		const [activeIndex, setActiveIndex] = useState<number>(0);

		const ScrollNext = useCallback(() => {
			if (!emblaMainApi) {
				return;
			}
			emblaMainApi.scrollNext();
		}, [emblaMainApi]);

		const ScrollPrev = useCallback(() => {
			// biome-ignore lint/style/useBlockStatements: <explanation>
			if (!emblaMainApi) return;
			emblaMainApi.scrollPrev();
		}, [emblaMainApi]);

		const direction = carouselOptions?.direction ?? (dir as DirectionOption);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		// const handleKeyDown = useCallback(
		// 	(event: React.KeyboardEvent<HTMLDivElement>): void => {
		// 		event.preventDefault();
		// 		if (!emblaMainApi) {
		// 			return;
		// 		}
		// 		switch (event.key) {
		// 			case "ArrowLeft":
		// 				if (orientation === "horizontal") {
		// 					if (direction === "rtl") {
		// 						ScrollNext();
		// 						return;
		// 					}
		// 					ScrollPrev();
		// 				}
		// 				break;
		// 			case "ArrowRight":
		// 				if (orientation === "horizontal") {
		// 					if (direction === "rtl") {
		// 						ScrollPrev();
		// 						return;
		// 					}
		// 					ScrollNext();
		// 				}
		// 				break;
		// 			case "ArrowUp":
		// 				if (orientation === "vertical") {
		// 					ScrollPrev();
		// 				}
		// 				break;
		// 			case "ArrowDown":
		// 				if (orientation === "vertical") {
		// 					ScrollNext();
		// 				}
		// 				break;
		// 		}
		// 	},
		// 	[emblaMainApi, orientation, direction, ScrollNext, ScrollPrev],
		// );
		// Define handler functions for each key
		const handleArrowLeft = () => {
			if (orientation === "horizontal" && direction === "rtl") {
				ScrollNext();
			} else if (orientation === "horizontal") {
				ScrollPrev();
			}
		};

		const handleArrowRight = () => {
			if (orientation === "horizontal" && direction === "rtl") {
				ScrollPrev();
			} else if (orientation === "horizontal") {
				ScrollNext();
			}
		};

		const handleArrowUp = () => {
			if (orientation === "vertical") {
				ScrollPrev();
			}
		};

		const handleArrowDown = () => {
			if (orientation === "vertical") {
				ScrollNext();
			}
		};
		// Define the KeyHandlers type with an index signature
		type KeyHandlers = {
			ArrowLeft: () => void;
			ArrowRight: () => void;
			ArrowUp: () => void;
			ArrowDown: () => void;
			[key: string]: () => void; // Index signature
		};

		// Other code remains the same

		const keyHandlers: KeyHandlers = useMemo(
			() => ({
				ArrowLeft: handleArrowLeft,
				ArrowRight: handleArrowRight,
				ArrowUp: handleArrowUp,
				ArrowDown: handleArrowDown,
			}),
			[handleArrowLeft, handleArrowRight, handleArrowUp, handleArrowDown],
		);

		// Refactor the handleKeyDown function to use the map
		const handleKeyDown = useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>): void => {
				event.preventDefault();
				if (!emblaMainApi) {
					return;
				}
				const handler = keyHandlers[event.key];
				handler();
			},
			[emblaMainApi, keyHandlers],
		);

		const onThumbClick = useCallback(
			(index: number) => {
				if (!emblaMainApi || !emblaThumbsApi) {
					return;
				}
				emblaMainApi.scrollTo(index);
			},
			[emblaMainApi, emblaThumbsApi],
		);

		const onSelect = useCallback(() => {
			if (!emblaMainApi || !emblaThumbsApi) {
				return;
			}
			const selected = emblaMainApi.selectedScrollSnap();
			setActiveIndex(selected);
			emblaThumbsApi.scrollTo(selected);
			setCanScrollPrev(emblaMainApi.canScrollPrev());
			setCanScrollNext(emblaMainApi.canScrollNext());
		}, [emblaMainApi, emblaThumbsApi]);

		useEffect(() => {
			if (!emblaMainApi) {
				return;
			}
			onSelect();
			emblaMainApi.on("select", onSelect);
			emblaMainApi.on("reInit", onSelect);
			return () => {
				emblaMainApi.off("select", onSelect);
			};
		}, [emblaMainApi, onSelect]);
		// Inside your component, wrap the value object in useMemo
		const value = useMemo(
			() => ({
				emblaMainApi,
				mainRef: emblaMainRef,
				thumbsRef: emblaThumbsRef,
				scrollNext: ScrollNext,
				scrollPrev: ScrollPrev,
				canScrollNext,
				canScrollPrev,
				activeIndex,
				onThumbClick,
				handleKeyDown,
				carouselOptions,
				direction,
				orientation:
					orientation ||
					(carouselOptions?.axis === "y" ? "vertical" : "horizontal"),
			}),
			[
				emblaMainApi,
				emblaMainRef,
				emblaThumbsRef,
				ScrollNext,
				ScrollPrev,
				canScrollNext,
				canScrollPrev,
				activeIndex,
				onThumbClick,
				handleKeyDown,
				carouselOptions,
				direction,
				orientation,
			],
		);

		return (
			<CarouselContext.Provider value={value}>
				<div
					{...props}
					// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
					tabIndex={0}
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn(
						"grid gap-2 w-full relative focus:outline-none",
						className,
					)}
					dir={direction}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	},
);

Carousel.displayName = "Carousel";

const CarouselMainContainer = forwardRef<
	HTMLDivElement,
	{} & React.HTMLAttributes<HTMLDivElement>
>(({ className, dir, children, ...props }, ref) => {
	const { mainRef, orientation, direction } = useCarousel();

	return (
		<div {...props} ref={mainRef} className='overflow-hidden' dir={direction}>
			<div
				ref={ref}
				className={cn(
					"flex",
					`${orientation === "vertical" ? "flex-col" : ""}`,
					className,
				)}
			>
				{children}
			</div>
		</div>
	);
});

CarouselMainContainer.displayName = "CarouselMainContainer";

const CarouselThumbsContainer = forwardRef<
	HTMLDivElement,
	{} & React.HTMLAttributes<HTMLDivElement>
>(({ className, dir, children, ...props }, ref) => {
	const { thumbsRef, orientation, direction } = useCarousel();

	return (
		<div {...props} ref={thumbsRef} className='overflow-hidden' dir={direction}>
			<div
				ref={ref}
				className={cn(
					"flex",
					`${orientation === "vertical" ? "flex-col" : ""}`,
					className,
				)}
			>
				{children}
			</div>
		</div>
	);
});

CarouselThumbsContainer.displayName = "CarouselThumbsContainer";

const SliderMainItem = forwardRef<
	HTMLDivElement,
	{} & React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
	const { orientation } = useCarousel();
	return (
		<div
			{...props}
			ref={ref}
			className={cn(
				`min-w-0 shrink-0 grow-0 basis-full bg-background p-1 ${
					orientation === "vertical" ? "pb-1" : "pr-1"
				}`,
				className,
			)}
		>
			{children}
		</div>
	);
});

SliderMainItem.displayName = "SliderMainItem";

const SliderThumbItem = forwardRef<
	HTMLDivElement,
	{
		index: number;
	} & React.HTMLAttributes<HTMLDivElement>
>(({ className, index, children, ...props }, ref) => {
	const { activeIndex, onThumbClick, orientation } = useCarousel();
	const isSlideActive = activeIndex === index;
	return (
		<div
			{...props}
			ref={ref}
			onClick={() => onThumbClick(index)}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					onThumbClick(index);
				}
			}}
			role='button'
			tabIndex={0}
			aria-label={`Go to slide ${index + 1}`}
			className={cn(
				"flex min-w-0 shrink-0 grow-0 basis-1/3 bg-background p-1",
				`${orientation === "vertical" ? "pb-1" : "pr-1"}`,
				className,
			)}
		>
			<div
				className={`relative aspect-square h-20 w-full rounded-md opacity-40 transition-opacity ${
					isSlideActive ? "!opacity-100" : ""
				}`}
			>
				{children}
			</div>
		</div>
	);
});

SliderThumbItem.displayName = "SliderThumbItem";

const CarouselIndicator = forwardRef<
	HTMLButtonElement,
	{ index: number } & React.ComponentProps<typeof Button>
>(({ className, index, children, ...props }, ref) => {
	const { activeIndex, onThumbClick } = useCarousel();
	const isSlideActive = activeIndex === index;
	return (
		<Button
			ref={ref}
			size='icon'
			className={cn(
				"h-1 w-6 rounded-full",
				"data-[active='false']:bg-primary/50 data-[active='true']:bg-primary",
				className,
			)}
			data-active={isSlideActive}
			onClick={() => onThumbClick(index)}
			{...props}
		>
			<span className='sr-only'>slide {index + 1} </span>
		</Button>
	);
});

CarouselIndicator.displayName = "CarouselIndicator";

const CarouselPrevious = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>(({ className, dir, variant = "outline", size = "icon", ...props }, ref) => {
	const {
		canScrollNext,
		canScrollPrev,
		scrollNext,
		scrollPrev,
		orientation,
		direction,
	} = useCarousel();

	const scroll = direction === "rtl" ? scrollNext : scrollPrev;
	const canScroll = direction === "rtl" ? canScrollNext : canScrollPrev;
	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				"absolute size-8 rounded-full z-10",
				orientation === "vertical"
					? "-top-2 left-1/2 -translate-x-1/2 rotate-90"
					: "-left-2 top-1/2 -translate-y-1/2",
				className,
			)}
			onClick={scroll}
			disabled={!canScroll}
			{...props}
		>
			<ChevronLeftIcon className='size-6' />
			<span className='sr-only'>Previous slide</span>
		</Button>
	);
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>(({ className, dir, variant = "outline", size = "icon", ...props }, ref) => {
	const {
		canScrollNext,
		canScrollPrev,
		scrollNext,
		scrollPrev,
		orientation,
		direction,
	} = useCarousel();
	const scroll = direction === "rtl" ? scrollPrev : scrollNext;
	const canScroll = direction === "rtl" ? canScrollPrev : canScrollNext;
	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				"absolute size-8 rounded-full z-10",
				orientation === "vertical"
					? "-bottom-2 left-1/2 -translate-x-1/2 rotate-90"
					: "-right-2 top-1/2 -translate-y-1/2",
				className,
			)}
			onClick={scroll}
			disabled={!canScroll}
			{...props}
		>
			<ChevronRightIcon className='size-6' />
			<span className='sr-only'>Next slide</span>
		</Button>
	);
});

CarouselNext.displayName = "CarouselNext";

export {
	Carousel,
	CarouselIndicator,
	CarouselMainContainer,
	CarouselNext,
	CarouselPrevious,
	CarouselThumbsContainer,
	SliderMainItem,
	SliderThumbItem,
	useCarousel,
};
