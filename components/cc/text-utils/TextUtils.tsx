import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
	children: React.ReactNode | string;
	className?: string;
};

export function H1({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h1
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text p-4 text-center text-wrap text-5xl font-medium  text-transparent  md:text-7xl lg:text-8xl",
				className,
			)}
		>
			{children}
		</h1>
	);
}
export function H2({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h2
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text p-3 text-center text-wrap text-4xl font-medium  text-transparent  md:text-6xl lg:text-7xl",
				className,
			)}
		>
			{children}
		</h2>
	);
}
export function H3({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h3
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text p-2 text-center text-wrap text-3xl font-medium  text-transparent  md:text-5xl lg:text-6xl ",
				className,
			)}
		>
			{children}
		</h3>
	);
}
export function H4({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h4
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text p-1 text-center text-wrap text-2xl font-medium  text-transparent  md:text-4xl lg:text-5xl",
				className,
			)}
		>
			{children}
		</h4>
	);
}
export function H5({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h5
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text p-1 text-center text-wrap text-xl font-medium  text-transparent  md:text-3xl lg:text-4xl ",
				className,
			)}
		>
			{children}
		</h5>
	);
}
export function H6({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h6
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text text-center text-wrap text-lg font-normal  text-transparent  md:text-2xl lg:text-3xl",
				className,
			)}
		>
			{children}
		</h6>
	);
}

export function P({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<p
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text text-center text-wrap text-base font-normal  text-transparent  md:text-lg lg:text-xl",
				className,
			)}
		>
			{children}
		</p>
	);
}

export function Span({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<span
			className={cn(
				"bg-gradient-to-r from-neutral-700 to-foreground dark:from-neutral-50 dark:to-foreground bg-clip-text text-center text-wrap text-sm font-normal  text-transparent  md:text-base lg:text-lg ",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function H1Shadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h1
			className={cn(
				" p-4 text-center text-wrap text-5xl font-medium md:text-7xl lg:text-8xl shadow-foreground  text-shadow-lg",
				className,
			)}
		>
			{children}
		</h1>
	);
}
export function H2Shadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h2
			className={cn(
				" p-3 text-center text-wrap text-4xl font-medium md:text-6xl lg:text-7xl shadow-foreground  text-shadow-lg",
				className,
			)}
		>
			{children}
		</h2>
	);
}
export function H3Shadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h3
			className={cn(
				" p-2 text-center text-wrap text-3xl font-medium md:text-5xl lg:text-6xl shadow-foreground  text-shadow",
				className,
			)}
		>
			{children}
		</h3>
	);
}
export function H4Shadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h4
			className={cn(
				" p-1 text-center text-wrap text-2xl font-medium md:text-4xl lg:text-5xl shadow-foreground  text-shadow",
				className,
			)}
		>
			{children}
		</h4>
	);
}
export function H5Shadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h5
			className={cn(
				" p-1 text-center text-wrap text-xl font-medium md:text-3xl lg:text-4xl shadow-foreground  text-shadow",
				className,
			)}
		>
			{children}
		</h5>
	);
}
export function H6Shadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<h6
			className={cn(
				" p-1 text-center text-wrap text-lg font-normal md:text-2xl lg:text-3xl shadow-foreground  text-shadow",
				className,
			)}
		>
			{children}
		</h6>
	);
}

export function PShadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<p
			className={cn(
				" p-1 text-center text-wrap text-base font-normal md:text-lg lg:text-xl shadow-foreground  text-shadow-sm",
				className,
			)}
		>
			{children}
		</p>
	);
}

export function SpanShadow({
	children,
	className,
}: Readonly<Props>): React.ReactElement {
	return (
		<span
			className={cn(
				" p-1 text-center text-wrap text-sm font-normal md:text-base lg:text-lg shadow-foreground  text-shadow-sm",
				className,
			)}
		>
			{children}
		</span>
	);
}

// extend: {
// textShadow: {
//   sm: '0 1px 2px var(--tw-shadow-color)',
//   DEFAULT: '0 2px 4px var(--tw-shadow-color)',
//   lg: '0 8px 16px var(--tw-shadow-color)',
// },
// }
//     plugin(({ matchUtilities, theme }: { matchUtilities: any; theme: any }) => {
//   matchUtilities(
//     {
//       // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//       'text-shadow': (value: any) => ({
//         textShadow: value,
//       }),
//     },
//     { values: theme('textShadow') },
//   )
// }),
