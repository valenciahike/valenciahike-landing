import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRouter } from 'next/router';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const partners = [
    {
        name: 'Lina Carpico',
        image: 'linacarpico.svg'
    },
    {
        name: 'Local 10 Estudio',
        image: 'local10estudio.svg'
    },
    {
        name: 'BL Tyre Shop',
        image: 'bltyreshop.svg'
    },
    {
        name: 'Camino de Carabobo',
        image: 'caminodecarabobo.png'
    },
]

export default function PartnersComponent() {
    const router = useRouter();

    return (
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            effect='fade'
            slidesPerView={2.4}
            spaceBetween={16}
            navigation
            autoplay
            speed={1250}
            centerInsufficientSlides
            wrapperClass="swiper-wrapper items-center"
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    pagination: false,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    pagination: false,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                    pagination: false,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 48,
                    pagination: false,
                },
            }}
        >
            {partners.map((partner, i) => {
                return <SwiperSlide key={i}>
                    <div className="text-center border rounded-xl p-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 h-full">
                        <img className="inline-block max-w-auto max-h-16" src={`${router.basePath}/assets/images/brands/${partner.image}`} alt={partner.name} />
                    </div>
                </SwiperSlide>
            })}

        </Swiper>
    );
};