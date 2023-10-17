import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ children }) => (
	<Swiper
		modules={[Autoplay, Pagination]}
		spaceBetween={170}
		slidesPerView={4}
		lazy={true}
		autoplay={{
			delay: 3000,
			disableOnInteraction: false,
		}}
		breakpoints={{
			280: {
				slidesPerView: 1,
			},

			640: {
				slidesPerView: 2,
				spaceBetween: 50,
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 100,
			},

			1000: {
				slidesPerView: 4,
				spaceBetween: 170,
			},
		}}
	>
		{children}
	</Swiper>
);

export default Slider;
