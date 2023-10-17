import CustomBtn from "../CustomBtn";

const HeroMain = () => (
	<section className="hero-main">
		<h1 className="hero-main__title">WebPark - Ваш надежный партнер</h1>

		<p className="hero-main__paragraph">
			Расширяйте пути привлечения клиентов в свой бизнес.
		</p>

		<p className="hero-main__paragraph">
			Мы предлагаем комплексный подход в сфере SMM продвижения и
			разработки эффективных сайтов.
		</p>

		<CustomBtn
			className="hero-main__consult-btn"
			link={{
				href: "https://t.me/webpark_uz",
			}}
		>
			Получить консультацию
		</CustomBtn>
	</section>
);

export default HeroMain;
