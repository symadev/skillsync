import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../assets/1.png";
import slide2 from "../assets/2.png";
import slide3 from "../assets/3.png";
import slide4 from "../assets/4.png";
import slide5 from "../assets/5.png";
import slide6 from "../assets/6.png";

const Resume = () => {
    return (
        <div className="bg-black text-white py-16 px-4 md:px-12 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 leading-tight">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Build a Resume Online
                    </span>
                    <br />
                    <span className="bg-orange-500 bg-clip-text text-transparent animate-pulse">
                        Start by Picking 
                    </span>
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent ml-2">
                        a Template
                    </span>
                </h2>

                <div className="relative mt-8">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ 
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet custom-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
                        }}
                        modules={[Pagination]}
                        className="mySwiper pb-20"
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {[slide1, slide2, slide3, slide4, slide5, slide6].map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 group">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={slide}
                                            alt={`Resume Template ${index + 1}`}
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx>{`
                .swiper-pagination {
                    bottom: 0 !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    gap: 12px !important;
                    padding: 20px 0 !important;
                }

                .custom-bullet {
                    width: 14px !important;
                    height: 14px !important;
                    border-radius: 50% !important;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) !important;
                    opacity: 1 !important;
                    cursor: pointer !important;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                    margin: 0 !important;
                    border: 2px solid rgba(255, 255, 255, 0.3) !important;
                    position: relative !important;
                    overflow: hidden !important;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
                }

                .custom-bullet::before {
                    content: '' !important;
                    position: absolute !important;
                    top: 50% !important;
                    left: 50% !important;
                    width: 0 !important;
                    height: 0 !important;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent) !important;
                    border-radius: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    transition: all 0.3s ease !important;
                }

                .custom-bullet:hover {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2)) !important;
                    transform: scale(1.15) !important;
                    border-color: rgba(255, 255, 255, 0.6) !important;
                    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.3) !important;
                }

                .custom-bullet:hover::before {
                    width: 100% !important;
                    height: 100% !important;
                }

                .custom-bullet-active {
                    background: linear-gradient(135deg, #ff6b35, #f7931e) !important;
                    transform: scale(1.3) !important;
                    border-color: #ff6b35 !important;
                    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4) !important;
                    animation: pulse 2s infinite !important;
                }

                .custom-bullet-active::before {
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent) !important;
                    width: 80% !important;
                    height: 80% !important;
                }

                .swiper-pagination-bullet-active {
                    background: linear-gradient(135deg, #ff6b35, #f7931e) !important;
                }

                @keyframes pulse {
                    0% {
                        box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4) !important;
                    }
                    50% {
                        box-shadow: 0 6px 25px rgba(255, 107, 53, 0.6) !important;
                    }
                    100% {
                        box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4) !important;
                    }
                }

                @keyframes ripple {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(2);
                        opacity: 0;
                    }
                }

                .custom-bullet:active::after {
                    content: '' !important;
                    position: absolute !important;
                    top: 50% !important;
                    left: 50% !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: rgba(255, 255, 255, 0.6) !important;
                    border-radius: 50% !important;
                    animation: ripple 0.6s ease-out !important;
                }

                @media (max-width: 768px) {
                    .custom-bullet {
                        width: 12px !important;
                        height: 12px !important;
                    }
                    
                    .swiper-pagination {
                        gap: 10px !important;
                    }
                }

                @media (max-width: 480px) {
                    .custom-bullet {
                        width: 10px !important;
                        height: 10px !important;
                    }
                    
                    .swiper-pagination {
                        gap: 8px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Resume;