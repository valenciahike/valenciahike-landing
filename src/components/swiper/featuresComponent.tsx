// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useRouter } from 'next/router';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function FeaturesComponent() {
    const router = useRouter();

    return (
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={1.4}
            spaceBetween={16}
            navigation
            autoplay
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
                },
            }}
        >
            <SwiperSlide>
                <div className="group rounded-2xl bg-cream-yellow px-3 py-4 text-center shadow-inner lg:p-6">
                    <div className="relative mb-4">
                        <img
                            src={`${router.basePath}/assets/images/membership_blob.svg`}
                            alt=""
                            className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-75"
                        />
                        <img
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                            src={`${router.basePath}/assets/images/icons/invitaciones-green.svg`}
                            alt=""
                        />
                    </div>
                    <div className="mb-3 font-title text-sm lg:text-lg">
                        Recibe Invitaciones
                    </div>
                    <div className="font-serif text-sm leading-tight text-stone-400">
                        Para poder recibir invitaciones necesitas tener
                        membresía activa
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group rounded-2xl bg-cream-yellow px-3 py-4 text-center shadow-inner lg:p-6">
                    <div className="relative mb-4">
                        <img
                            src={`${router.basePath}/assets/images/membership_blob.svg`}
                            alt=""
                            className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-75"
                        />
                        <img
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                            src={`${router.basePath}/assets/images/icons/profile-green.svg`}
                            alt=""
                        />
                    </div>
                    <div className="mb-3 font-title text-sm lg:text-lg">
                        Perfil de Membresía
                    </div>
                    <div className="font-serif text-sm leading-tight text-stone-400">
                        Tendrás un perfil en nuestro sitio web con toda tu
                        información
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group rounded-2xl bg-cream-yellow px-3 py-4 text-center shadow-inner lg:p-6">
                    <div className="relative mb-4">
                        <img
                            src={`${router.basePath}/assets/images/membership_blob.svg`}
                            alt=""
                            className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-75"
                        />
                        <img
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                            src={`${router.basePath}/assets/images/icons/badges-green.svg`}
                            alt=""
                        />
                    </div>
                    <div className="mb-3 font-title text-sm lg:text-lg">
                        Placas Digitales
                    </div>
                    <div className="font-serif text-sm leading-tight text-stone-400">
                        Placas digitales de certificación de cumbres importantes
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group rounded-2xl bg-cream-yellow px-3 py-4 text-center shadow-inner lg:p-6">
                    <div className="relative mb-4">
                        <img
                            src={`${router.basePath}/assets/images/membership_blob.svg`}
                            alt=""
                            className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-75"
                        />
                        <img
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                            src={`${router.basePath}/assets/images/icons/history-green.svg`}
                            alt=""
                        />
                    </div>
                    <div className="mb-3 font-title text-sm lg:text-lg">
                        Histórico de Rutas
                    </div>
                    <div className="font-serif text-sm leading-tight text-stone-400">
                        Obtén registro histórico de las rutas donde hayas
                        participado
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="group rounded-2xl bg-cream-yellow px-3 py-4 text-center shadow-inner lg:p-6">
                    <div className="relative mb-4">
                        <img
                            src={`${router.basePath}/assets/images/membership_blob.svg`}
                            alt=""
                            className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-75"
                        />
                        <img
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                            src={`${router.basePath}/assets/images/icons/odometer-green.svg`}
                            alt=""
                        />
                    </div>
                    <div className="mb-3 font-title text-sm lg:text-lg">
                        Odómetro
                    </div>
                    <div className="font-serif text-sm leading-tight text-stone-400">
                        Lleva los Kilometros de todas las rutas donde has
                        participado
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
