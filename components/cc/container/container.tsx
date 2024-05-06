import classNames from "classnames";

export const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}): JSX.Element => {
	return (
		<section
			className={classNames(
				"m-0 mx-auto box-border w-full max-w-[1536px] p-0 h-fit flex flex-col items-center justify-center",
				className,
			)}
		>
			{/* wrap all children passed to Container component in a div with max-width and padding utilities from Tailwind CSS and className prop passed to Container component */}
			{children}
		</section>
	);
};
