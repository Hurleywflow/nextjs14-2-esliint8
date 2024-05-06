"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Home", "Docs", "Components", "Hooks"];

const Tab = ({
	text,
	selected,
	setSelected,
	customID,
}: {
	text: string;
	selected: boolean;
	setSelected: (value: string) => void;
	customID: string;
}): JSX.Element => {
	return (
		<Button
			onClick={() => {
				setSelected(text);
			}}
			className={`${
				selected ? "text-foreground" : "text-muted-foreground"
			} relative rounded-md px-2 py-1 transition-colors duration-300`}
			variant='link'
		>
			<span className='relative z-10'>{text}</span>
			{selected && (
				<motion.div
					className='absolute left-0 top-0 flex size-full items-end justify-center'
					layoutId={`${customID}linetab`}
					transition={{ type: "spring", duration: 0.7, bounce: 0.5, delay: 0 }}
				>
					<span className='z-0 h-[3px] w-3/5 rounded-t-full bg-card-foreground' />
				</motion.div>
			)}
		</Button>
	);
};
const LineTabs = ({
	center,
	customID,
}: { center?: boolean; customID?: string }): JSX.Element => {
	const [selected, setSelected] = useState(tabs[0]);
	return (
		<div
			className={`${
				center ?? false ? "justify-center " : ""
			} flex flex-row items-center gap-6`}
		>
			{tabs.map((tab, _index) => {
				return (
					<Tab
						text={tab}
						selected={selected === tab}
						setSelected={setSelected}
						key={tab}
						customID={customID ?? ""}
					/>
				);
			})}
		</div>
	);
};

export default LineTabs;
