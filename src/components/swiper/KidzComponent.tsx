import 'swiper/css';
import 'swiper/css/pagination';

import { useRouter } from 'next/router';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function KidzComponent() {
    const router = useRouter();

    return (
        <Swiper
            style={{ paddingBottom: '1.5rem' }}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={3}
            spaceBetween={8}
            pagination={{ clickable: true }}
            autoplay
            speed={1250}
            centerInsufficientSlides
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
                },
            }}
        >
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_07.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_01.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_02.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_03.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_04.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_05.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[3/4] overflow-hidden rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/kidz/kidz_06.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
