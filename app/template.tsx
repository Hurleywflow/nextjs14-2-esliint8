/* eslint-disable import/no-default-export */
import { MotionDiv } from "@/lib/framer";

type TemplateProps = {
	children: React.ReactNode;
};

const Template = ({ children }: TemplateProps):JSX.Element => {
	return (
		<MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
			{children}
		</MotionDiv>
	);
};

export default Template;
