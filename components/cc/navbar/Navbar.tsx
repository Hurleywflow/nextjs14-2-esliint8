import LineTabs from "@/components/cc/navbar/AnimationTab";
import ThemeSwitcher from "@/components/cc/theme-switcher/theme-switcher";
// import dynamic from 'next/dynamic';
// const ThemeSwitcher= dynamic(
// 	async () => import("@/components/cc/theme-switcher/theme-switcher"),
// 	{ ssr: true },
// );
import { Button } from "@/components/ui/button";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Inputsize } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
// import { CircleUser, Menu, Package2 } from "lucide-react";
import Link from "next/link";

function Navbar(): JSX.Element {
	return (
		<header className='sticky top-0 z-50 flex h-16 items-center gap-4 border-b px-4 backdrop-blur-lg  md:px-6'>
			<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				{/* Navbar items */}
				<Link
					href='https://www.netcodedev.com'
					className='mr-10 flex items-center gap-2 text-lg font-semibold md:text-base'
				>
					<Package2 className='size-6' />
					<span className='sr-only'>Acme Inc</span>
				</Link>
				{/* Menu items */}
				<LineTabs />
				{/* <Link
					href='https://www.netcodedev.com/en'
					className='ml-20 text-foreground transition-colors hover:text-foreground'
				>
					Dashboard
				</Link>
				<Link
					href='https://www.netcodedev.com/en'
					className='text-muted-foreground transition-colors hover:text-foreground'
				>
					Orders
				</Link>
				<Link
					href='https://www.netcodedev.com/en'
					className='text-muted-foreground transition-colors hover:text-foreground'
				>
					Products
				</Link>
				<Link
					href='https://www.netcodedev.com/en'
					className='text-muted-foreground transition-colors hover:text-foreground'
				>
					Customers
				</Link>
				<Link
					href='https://www.netcodedev.com/en'
					className='text-muted-foreground transition-colors hover:text-foreground'
				>
					Analytics
				</Link> */}
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
						<Menu className='size-5' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<nav className='grid gap-6 text-lg font-medium'>
						<Link
							href='https://www.netcodedev.com/en'
							className='flex items-center gap-2 text-lg font-semibold'
						>
							<Package2 className='size-6' />
							<span className='sr-only'>Acme Inc</span>
						</Link>
						<Link
							href='https://www.netcodedev.com/en'
							className='hover:text-foreground'
						>
							Dashboard
						</Link>
						<Link
							href='https://www.netcodedev.com/en'
							className='text-muted-foreground hover:text-foreground'
						>
							Orders
						</Link>
						<Link
							href='https://www.netcodedev.com/en'
							className='text-muted-foreground hover:text-foreground'
						>
							Products
						</Link>
						<Link
							href='https://www.netcodedev.com/en'
							className='text-muted-foreground hover:text-foreground'
						>
							Customers
						</Link>
						<Link
							href='https://www.netcodedev.com/en'
							className='text-muted-foreground hover:text-foreground'
						>
							Analytics
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
				<Button className='group relative ml-auto flex-1 overflow-hidden rounded-md px-6  transition  sm:flex-initial '>
					<span className='relative'>Book Now</span>
					<div className='absolute inset-0 top-[-20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-md'>
						<div className='relative h-full w-8 bg-neutral-400 dark:bg-neutral-700' />
					</div>
				</Button>

				<ThemeSwitcher />
				{/* <DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='secondary' size='icon' className='rounded-full'>
							<CircleUser className='size-5' />
							<span className='sr-only'>Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu> */}
			</div>
		</header>
	);
}

export default Navbar;
