import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = (): JSX.Element => {
	const year = new Date().getFullYear();
	return (
		<footer className=' w-full border-t border-border bg-neutral-200 pt-2 text-center text-foreground dark:bg-background dark:text-foreground'>
			{/* <div className='absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/10%),transparent)]' />

			<div className='absolute size-full bg-[url(https://lunarui.dev/twitter/noise.png)] bg-[size:96px] bg-repeat opacity-[0.025]' />
			<div className='relative h-40 w-full'>
				<div className='absolute -top-1/2 size-full'>

					<div className='relative flex size-full items-center justify-center [--baseOpacity:1] [--baseSize:80px] [--duration:1.5s] [--opacityStep:0.05] [--scale:1.2] [--sizeStep:64px]'>

						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:0]' />
						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:1]' />
						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:2]' />
						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:3]' />
					</div>
				</div>
			</div> */}
			<small className='mb-2 block text-xs'>
				Copyright &copy; {year} NetCode. All rights reserved.
			</small>
			<div className='mb-3 text-xs'>
				<span className='font-semibold'>About this website:</span> Designed and
				built by
				<Link href='https://netcodedev.com' target='_blank'>
					<Button className='m-1 h-4 p-0' variant='ghost'>
						NetCode
					</Button>
				</Link>
			</div>
		</footer>
	);
};
export default Footer;
