// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRouter } from 'next/router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
    const router = useRouter();

    return (
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={2.4}
            spaceBetween={16}
            navigation
            autoplay={ true }
            slidesOffsetBefore={ 16 }
            slidesOffsetAfter={ 16 }
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
              }
            }}
            wrapperClass={'swiper-wrapper py-6'}
        >
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_01.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Vigirima hasta Patanemo</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_02.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Pico Hilaria</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_03.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Camino de Carabobo</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_04.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Cerro Villalonga</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_01.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Vigirima hasta Patanemo</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_02.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Pico Hilaria</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_03.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Camino de Carabobo</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                    <img src={`${router.basePath}/assets/images/trails/trail_04.jpg`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" alt="" />
                    <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                        <div className="font-subtitle leading-none tracking-wide">Cerro Villalonga</div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};