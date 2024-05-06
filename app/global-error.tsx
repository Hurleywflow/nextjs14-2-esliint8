/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRouter } from "next/navigation";

export default function GlobalError({
	// biome-ignore lint/correctness/noUnusedVariables: <explanation>
	error,
	reset,
}: Readonly<{
	error: Error & { digest?: string };
	reset: () => void;
}>): JSX.Element {
	const router = useRouter();
	return (
		<html lang='en'>
			<body>
				<main className='bg-background dark:bg-background '>
					<div className='container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12'>
						<div className='w-full lg:w-1/2'>
							<p className='text-5xl font-medium text-blue-500 dark:text-blue-400 md:text-9xl'>
								404 error
							</p>
							<h2 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
								Page not found
							</h2>
							<p className='mt-4 text-gray-500 dark:text-gray-400'>
								Sorry, the page you are looking for doesn't exist.Here are some
								helpful links:
							</p>
							<div className='mt-6 flex items-center gap-x-3'>
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<button className='flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto'
								type='button'
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='size-5 rtl:rotate-180'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
										/>
									</svg>
									{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
									<button
									type='button'
										onClick={() => {
											reset();
										}}
									>
										Reset
									</button>
								</button>
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<button
								type='button'
									onClick={() => {
										router.push("/");
									}}
									className='w-1/2 shrink-0 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto'
								>
									Take me home
								</button>
							</div>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
