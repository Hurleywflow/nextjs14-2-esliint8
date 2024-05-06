function DotBackgroundDemo(): JSX.Element {
	return (
		<div className='relative flex h-fit w-full  items-center justify-center bg-background bg-dot-black/[0.2]  dark:bg-dot-white/[0.2]'>
			{/* Radial gradient for the container to give a faded look */}
			{/* <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ' />
			<p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
				Backgrounds
			</p> */}
		</div>
	);
}
export default DotBackgroundDemo;
