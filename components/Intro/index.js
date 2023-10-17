import Section from "../Layout/Section";
import IntroMain from "./IntroMain";
import Image from "next/image";

const Intro = () => (
	<Section className="intro">
		<div className="intro__content shadow-box">
			<div className="intro__image">
				<Image
					src="/images/site/team-work.png"
					alt="Командная работа"
					width={400}
					height={250}
					layout="responsive"
				/>
			</div>

			<IntroMain />
		</div>
	</Section>
);

export default Intro;
