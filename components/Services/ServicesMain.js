import CustomBtn from "../CustomBtn";

const ServicesMain = () => (
	<section className="services-main">
		<h2 className="services-main__title">Наши услуги</h2>

		<p className="services-main__paragraph">
			Для удобства мы разделили наши услуги по пакетам во всех
			направлениях, но за вами так же остаётся возможность собрать свой
			индивидуальный вариант.
		</p>

		<CustomBtn
			className="services-main__btn"
			link={{
				href: "https://t.me/webpark_uz",
			}}
		>
			Заказать услугу
		</CustomBtn>
	</section>
);

export default ServicesMain;
