import Section from "../Layout/Section";
import ContactsMain from "./ContactsMain";
import Image from "next/image";
import { DataContext } from "../../store/DataContext";
import { useContext } from "react";

const Contacts = () => {
	const config = useContext(DataContext);

	return (
		<Section className="contacts">
			<div className="contacts__content shadow-box">
				<div className="contacts__image">
					<Image
						src="/images/site/call-center.png"
						alt="Картинка"
						width={500}
						height={500}
						layout="responsive"
					/>
				</div>

				<ContactsMain config={config} />
			</div>
		</Section>
	);
};

export default Contacts;
