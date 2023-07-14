// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useRouter } from 'next/router';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TrailsComponent() {
    const router = useRouter();

    return (
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={2.4}
            spaceBetween={16}
            navigation
            autoplay
            speed={1250}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    slidesOffsetBefore: 24,
                    slidesOffsetAfter: 24,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    slidesOffsetBefore: 32,
                    slidesOffsetAfter: 32,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    slidesOffsetBefore: 48,
                    slidesOffsetAfter: 48,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                    slidesOffsetBefore: 48,
                    slidesOffsetAfter: 48,
                },
            }}
            wrapperClass="swiper-wrapper py-6"
        >
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/bg/img-6b2nhrh.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Vigirima hasta Patanemo </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/gallery/img-5nr4dg5g.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Vigirima hasta Patanemo </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/bg/img-lkhgl5n2.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Vigirima hasta Patanemo </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/bg/img-9eghd4f.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Pico Hilaria </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/gallery/img-re9jndf.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Pico Hilaria </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/gallery/img-g7ewhsb.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Camino de Carabobo </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/bg/img-ewgd5n.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Cerro Villalonga </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/gallery/img-qw9r8gs.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Cerro Villalonga </div>
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group relative block aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/bg/img-werh98n5.jpg`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="" />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-3 py-4 text-center text-white">
                        <div className="font-subtitle leading-none tracking-wide"> Pico Hilaria </div>
                    </div> */}
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
