import { BsPhone } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";

const ContactsInfo = () => (
	<div className="contcts-info">
		<a className="contacts-info__link" href="tel:+998994395221">
			<BsPhone className="contacts-info__icon" />
			<span className="contacts-info__text">+998 (99) 439-52-21</span>
		</a>

		<a className="contacts-info__link" href="tel:+998987074922">
			<BsTelephoneForward className="contacts-info__icon" />
			<span className="contacts-info__text">+998 (98) 707-49-22</span>
		</a>

		<a className="contacts-info__link" href="mailTo:info@webpark.uz">
			<SiGooglemessages className="contacts-info__icon email" />
			<span className="contacts-info__text">info@webpark.uz</span>
		</a>

		<address className="contacts-info__address">
			Республика Узбекистан, г. Ташкент, Юнусабадский р-н, Ц5, дом 46B/24,
			ориентир: Финансовый институт.
		</address>
	</div>
);

export default ContactsInfo;
