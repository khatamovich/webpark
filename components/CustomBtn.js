const CustomBtn = ({ children, className, link = false }) =>
	!link ? (
		<button className={`btn ${className ? className : ""}`}>
			{children}
		</button>
	) : (
		<a
			className={`btn ${className}`}
			href={link.href}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);

export default CustomBtn;
