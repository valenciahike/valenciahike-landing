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
            slidesPerView={1.4}
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
                  slidesPerView: 3,
                  spaceBetween: 24,
                  slidesOffsetBefore: 32,
                  slidesOffsetAfter: 32,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  slidesOffsetBefore: 48,
                  slidesOffsetAfter: 48,
              },
              1280: {
                  slidesPerView: 4.5,
                  spaceBetween: 24,
                  slidesOffsetBefore: 48,
                  slidesOffsetAfter: 48,
              }
            }}
        >
            <SwiperSlide>
                <div className="group bg-cream-yellow rounded-2xl text-center py-4 px-3 lg:p-6 shadow-inner">
                    <div className="relative mb-4">
                        <img src={`${router.basePath}/assets/images/membership_blob.svg`} alt="" className="inline-block group-hover:rotate-45 group-hover:scale-75 transition-transform duration-300" />
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" src={`${router.basePath}/assets/images/icons/invitaciones-green.svg`} alt="" />
                    </div>
                    <div className="font-title mb-3 text-sm lg:text-lg">Recibe Invitaciones</div>
                    <div className="text-stone-400 font-serif text-sm leading-tight">Para poder recibir invitaciones necesitas tener membresía activa</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group bg-cream-yellow rounded-2xl text-center py-4 px-3 lg:p-6 shadow-inner">
                    <div className="relative mb-4">
                        <img src={`${router.basePath}/assets/images/membership_blob.svg`} alt="" className="inline-block group-hover:rotate-45 group-hover:scale-75 transition-transform duration-300" />
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" src={`${router.basePath}/assets/images/icons/profile-green.svg`} alt="" />
                    </div>
                    <div className="font-title mb-3 text-sm lg:text-lg">Perfil de Membresía</div>
                    <div className="text-stone-400 font-serif text-sm leading-tight">Tendrás un perfil en nuestro sitio web con toda tu información</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group bg-cream-yellow rounded-2xl text-center py-4 px-3 lg:p-6 shadow-inner">
                    <div className="relative mb-4">
                        <img src={`${router.basePath}/assets/images/membership_blob.svg`} alt="" className="inline-block group-hover:rotate-45 group-hover:scale-75 transition-transform duration-300" />
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" src={`${router.basePath}/assets/images/icons/badges-green.svg`} alt="" />
                    </div>
                    <div className="font-title mb-3 text-sm lg:text-lg">Placas Digitales</div>
                    <div className="text-stone-400 font-serif text-sm leading-tight">Placas digitales de certificación de cumbres importantes</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group bg-cream-yellow rounded-2xl text-center py-4 px-3 lg:p-6 shadow-inner">
                    <div className="relative mb-4">
                        <img src={`${router.basePath}/assets/images/membership_blob.svg`} alt="" className="inline-block group-hover:rotate-45 group-hover:scale-75 transition-transform duration-300" />
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" src={`${router.basePath}/assets/images/icons/history-green.svg`} alt="" />
                    </div>
                    <div className="font-title mb-3 text-sm lg:text-lg">Histórico de Rutas</div>
                    <div className="text-stone-400 font-serif text-sm leading-tight">Obtén registro histórico de las rutas donde hayas participado</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group bg-cream-yellow rounded-2xl text-center py-4 px-3 lg:p-6 shadow-inner">
                    <div className="relative mb-4">
                        <img src={`${router.basePath}/assets/images/membership_blob.svg`} alt="" className="inline-block group-hover:rotate-45 group-hover:scale-75 transition-transform duration-300" />
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" src={`${router.basePath}/assets/images/icons/odometer-green.svg`} alt="" />
                    </div>
                    <div className="font-title mb-3 text-sm lg:text-lg">Odómetro</div>
                    <div className="text-stone-400 font-serif text-sm leading-tight">Lleva los Kilometros de todas las rutas donde has participado</div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};