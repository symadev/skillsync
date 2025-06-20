import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../assets/images/1.png";
import slide2 from "../assets/images/2.png";
import slide3 from "../assets/images/3.png";
import slide4 from "../assets/images/4.png";
import slide5 from "../assets/images/5.png";
import slide6 from "../assets/images/6.png";


const Resume = () => {
    return (
        <div className="bg-black text-white py-12 px-4 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
                Build a Resume Online. <br />
                <span className="text-orange-600">Start by Picking </span>
                <span className="text-orange-500">a Template.</span>
            </h2>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {[slide1, slide2, slide3, slide4, slide5, slide6].map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow hover:shadow-xl transition-all duration-300 ease-in-out">
                            <img
                                src={slide}
                                alt={`Resume Template ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Resume;
