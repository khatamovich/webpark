import CustomLink from "../CustomLink";
import { CgArrowUpR } from "react-icons/cg";

const scrollOpts = {
	smooth: true,
	spy: true,
	duration: 600,
	offset: -180,
};

const Navbar = ({ isOpen, setIsOpen }) => {
	return (
		<nav className={!isOpen ? "navbar" : "navbar navbar--mobile"}>
			<CustomLink
				scroll={true}
				className="navbar__link"
				to="hero"
				{...scrollOpts}
				onClick={() => setIsOpen(false)}
			>
				главная
			</CustomLink>
			<CustomLink
				scroll={true}
				className="navbar__link"
				to="intro"
				{...scrollOpts}
				onClick={() => setIsOpen(false)}
			>
				о нас
			</CustomLink>
			<CustomLink
				scroll={true}
				className="navbar__link"
				to="services"
				{...scrollOpts}
				onClick={() => setIsOpen(false)}
			>
				услуги
			</CustomLink>
			<CustomLink
				scroll={true}
				className="navbar__link"
				to="partners"
				{...scrollOpts}
				onClick={() => setIsOpen(false)}
			>
				Наши клиенты
			</CustomLink>
			<CustomLink
				scroll={true}
				className="navbar__link navbar__link--margin-reset"
				to="contacts"
				{...scrollOpts}
				onClick={() => setIsOpen(false)}
				offset={0}
			>
				контакты
			</CustomLink>
			<CustomLink
				scroll={true}
				className="navbar__scroll-top"
				to="hero"
				{...scrollOpts}
			>
				<CgArrowUpR />
			</CustomLink>
		</nav>
	);
};

export default Navbar;
