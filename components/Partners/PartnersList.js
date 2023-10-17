import PartnersItem from "./PartnersItem";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";

const DUMMY_CLIENTS = [
	{
		id: 1,
		brand_name: "LION",
		image: {
			src: "/images/logos-of-partners/lion-academy.png",
			alt: "Логотип спортивной академии LION",
		},
	},

	{
		id: 2,
		brand_name: "Norma Dveri",
		image: {
			src: "/images/logos-of-partners/norma-dveri.png",
			alt: "Логотип компании Norma Dveri",
		},
	},

	{
		id: 3,
		brand_name: "Добрые Двери",
		image: {
			src: "/images/logos-of-partners/dobrie-dveri.png",
			alt: "Логотип компании Добрые Двери",
		},
	},

	{
		id: 4,
		brand_name: "Gasanov Gosmetics",
		image: {
			src: "/images/logos-of-partners/gasanov-cosmetics.png",
			alt: "Логотип компании Gasanov Cosmetics",
		},
	},
];

const PartnersList = () => (
	<div className="partners-list">
		<Slider>
			{DUMMY_CLIENTS.map((client) => (
				<SwiperSlide key={client.id}>
					<PartnersItem {...client} />
				</SwiperSlide>
			))}
		</Slider>
	</div>
);

export default PartnersList;
