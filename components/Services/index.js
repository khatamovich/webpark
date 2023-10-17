import Section from "../Layout/Section";
import ServicesMain from "./ServicesMain";
import ServicesList from "./ServicesList";

const Services = () => (
	<Section className="services">
		<div className="services__content shadow-box">
			<ServicesMain />
			<ServicesList />
		</div>
	</Section>
);

export default Services;
