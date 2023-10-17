import Link from "next/link";
import * as Scroll from "react-scroll";

const CustomLink = ({ children, className, href, scroll, ...props }) =>
	scroll === true ? (
		<Scroll.Link className={className} {...props}>
			{children}
		</Scroll.Link>
	) : (
		<Link href={href}>
			<a className={className}>{children}</a>
		</Link>
	);
export default CustomLink;
