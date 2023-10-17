import Image from "next/image";

const Logo = ({ src, alt, layout, className }) => (
	<div className={`logo ${className ? $className : ""}`}>
		<Image src={src} alt={alt} width={175} height={40} layout={layout} />
	</div>
);

export default Logo;
