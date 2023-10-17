import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, config }) => (
	<Fragment>
		<Header />

		<main>{children}</main>

		<Footer config={config} />
	</Fragment>
);

export default Layout;
