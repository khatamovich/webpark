import Image from "next/image";

const ServicesItem = ({ name, description, image }) => (
	<div className="services-item">
		<div className="services-item__image">
			<Image src={image.src} alt={image.alt} width={250} height={250} />
		</div>

		<h3 className="services-item__title">{name}</h3>

		<p className="services-item__paragraph">{description}</p>
	</div>
);

export default ServicesItem;
