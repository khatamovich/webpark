import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const SocialNetwork = () => (
	<div className="social-network">
		<a
			className="social-network__item instagram"
			href="https://www.instagram.com/webpark_uz/"
			target="_blank"
			rel="noreferrer"
		>
			<BsInstagram className="social-network__icon" />
		</a>

		<a
			className="social-network__item facebook"
			href="https://www.facebook.com/webpark.uz/"
			target="_blank"
			rel="noreferrer"
		>
			<BsFacebook className="social-network__icon" />
		</a>

		<a
			className="social-network__item telegram"
			href="https://t.me/webpark_uz"
			target="_blank"
			rel="noreferrer"
		>
			<BsTelegram className="social-network__icon" />
		</a>
	</div>
);

export default SocialNetwork;
