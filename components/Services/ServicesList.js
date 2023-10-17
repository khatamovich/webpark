import ServicesItem from "./ServicesItem";

const DUMMY_SERVICES = [
	{
		id: 1,
		name: "Разработка сайтов",
		description:
			"Разработка сайтов высокого качества, с помощью новейших технологии и использованием ручного кода.",
		image: {
			src: "/images/site/web-development.png",
			alt: "Разработка сайтов",
		},
	},

	{
		id: 2,
		name: "SMM продвижение",
		description:
			"Продвижение вашего бизнеса в социальных сетях. Таргетирование и увеличение количества заявок.",
		image: {
			src: "/images/site/social-media-marketing.png",
			alt: "SMM продвижение",
		},
	},

	{
		id: 3,
		name: "UI/UX дизайн",
		description:
			"Создание современного дизайна/макета с индивидуальным подходом к каждому клиенту.",
		image: {
			src: "/images/site/ui-ux-design.png",
			alt: "UI/UX дизайн",
		},
	},
];

const ServicesList = () => (
	<div className="services-list">
		{DUMMY_SERVICES.map((service) => (
			<ServicesItem key={service.id} {...service} />
		))}
	</div>
);

export default ServicesList;
