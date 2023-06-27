import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRouter } from 'next/router';

import 'swiper/css';
import 'swiper/css/pagination';

export default function KidzComponent() {
    const router = useRouter();

    return (
        <Swiper
            style={{paddingBottom: '1.5rem'}}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={3}
            spaceBetween={8}
            pagination={{ clickable: true }}
            autoplay={true}
            centerInsufficientSlides={true}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                }
            }}
        >
            <SwiperSlide>
                <div className="group block relative rounded-lg aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_01.png`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-lg aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_02.png`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-lg aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_03.png`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-lg aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_02.png`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-lg aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_03.png`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
