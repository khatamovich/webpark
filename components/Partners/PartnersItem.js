import Image from "next/image";

const PartnersItem = ({ image }) => (
	<div className="partners-item">
		<div className="partners-item__image">
			<Image
				src={image.src}
				alt={image.alt}
				width={200}
				height={200}
				layout="responsive"
				objectFit="contain"
			/>
		</div>
	</div>
);

export default PartnersItem;
