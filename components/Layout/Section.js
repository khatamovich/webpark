import Wrapper from "./Wrapper";

const Section = ({ children, className }) =>
	className && (
		<div className={className}>
			<Wrapper>{children}</Wrapper>
		</div>
	);

export default Section;
