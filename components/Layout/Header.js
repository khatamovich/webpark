import Navbar from "./Navbar";
import Logo from "../Logo";
import Wrapper from "./Wrapper";
import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={`header`}>
			<Wrapper>
				<div className="header__content">
					<Logo
						src={`/images/site/logo.png`}
						alt="Логотип компании"
						layout="responsive"
					/>

					<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						size={35}
						hideOutline={true}
					/>
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
