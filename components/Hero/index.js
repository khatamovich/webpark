import Section from "../Layout/Section";
import HeroMain from "./HeroMain";
import HeroHighlights from "./HeroHighlights";
import Image from "next/image";

const Hero = () => (
	<Section className="hero">
		<div className="hero__content  shadow-box">
			<div className="row row--1">
				<HeroMain />

				<div className="hero__image">
					<Image
						src="/images/site/coding-guy.png"
						alt="Программист кодирует"
						width={400}
						height={400}
						layout="responsive"
					/>
				</div>
			</div>

			<div className="row row--2">
				<HeroHighlights />
			</div>
		</div>
	</Section>
);

export default Hero;
