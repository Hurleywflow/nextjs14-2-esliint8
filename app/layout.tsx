import Footer from "@/components/cc/footer/footer";
import Navbar from "@/components/cc/navbar/Navbar";
import { TailwindIndicator } from "@/components/cc/tailwind-indicator/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@splidejs/react-splide/css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: "no",
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
	generator: "Next.js",
	applicationName: "NetCode",
	referrer: "origin-when-cross-origin",
	authors: [
		{ name: "Hurley" },
		{ name: "Nguyen", url: "https://www.netcodedev.com" },
	],
	creator: "Hurley Nguyen",
	publisher: "Hurley Nguyen",
	title: "Web Design and Development || SEO - NetCode",
	description:
		"Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.",
	metadataBase: new URL("https://www.netcodedev.com"),
	keywords: [
		"nail salon gadsden",
		"nail salon gadsden al",
		"gadsden mall nail salon",
		"nail salon in walmart gadsden al",
		"east gadsden walmart nail salon",
		"nail salon gadsden al",
		"gadsden mall nail salon",
		"nail salon in walmart gadsden al",
		"east gadsden walmart nail salon",
		"nail salon gadsden al",
		"gadsden mall nail salon",
		"west gadsden walmart nail salon",
		"north gadsden walmart nail salon",
		"south gadsden walmart nail salon",
		"east gadsden walmart nail salon",
		"west gadsden walmart nail salon",

	],
	alternates: {
		canonical: "https://www.netcodedev.com/en",
		languages: {
			"en-US": "https://www.netcodedev.com/en",
			"vn-VN": "https://www.netcodedev.com/vn",
		},
		media: {
			"only screen and (max-width: 600px)": "https://www.netcodedev.com/mobile",
		},
		types: {
			"application/rss+xml": "https://www.netcodedev.com/rss",
		},
	},
	openGraph: {
		title: "Web Design and Development || SEO - NetCode",
		description:
			"Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.",
		type: "website",
		url: "https://www.netcodedev.com",
		siteName: "NetCode",
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Web Design and Development || SEO - NetCode",
		description:
			"Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.",
		images: {
			url: "",
			width: 1200,
			height: 630,
		},
	},
};
const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element => {
	return (
		<html lang='en' className='h-full ' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-fit m-0 p-0 bg-background font-sans antialiased bg-dot-black/[0.2]  dark:bg-dot-white/[0.2] overflow-x-clip",
					fontSans.variable,
				)}
			>
				<ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
					<Navbar />
					{children}
					<Footer />
					<Toaster richColors />
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
				<TailwindIndicator />
			</body>
		</html>
	);
};
export default RootLayout;
