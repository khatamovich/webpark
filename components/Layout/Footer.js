import Contacts from "../Contacts";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

const Footer = ({ config }) => {
	return (
		<footer>
			<Contacts />
		</footer>
	);
};

export default Footer;
