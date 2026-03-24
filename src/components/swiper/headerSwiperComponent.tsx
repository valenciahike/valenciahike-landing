// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeaderSwiperComponent() {
    const router = useRouter();

    return (
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            navigation
            autoplay={{
                delay: 3500,
                disableOnInteraction: true,
            }}
            autoHeight
            loop
            speed={1250}
            wrapperClass="swiper-wrapper"
        >
            <SwiperSlide>
                <div className="relative grid items-center bg-slate-900 text-white py-20 min-h-[85vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-bg.png)` }}>
                    <div className="absolute bg-primary-dark/20 inset-0"></div>
                    <div className="relative container max-w-6xl z-10">
                        <div className="grid grid-cols-12 gap-8 items-center">
                            <div className="col-span-12 md:col-span-6 md:col-start-2">
                                <h6 className="text-lg md:text-xl font-serif mb-4">¡Vamos a celebrar nuestra ciudad, desde la montaña!</h6>
                                <h1 className="text-3xl md:text-5xl font-title mb-6">Carrera de <span className="text-secondary md:text-7xl">Montaña</span> 8k</h1>
                                <div className="font-serif mb-5">
                                    <div className="mt-4">
                                        <div>📍 Parque Municipal Casupo</div>
                                        <div>📅 Domingo 29 de marzo, 6:00 a.m.</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeSETq7BCCXoiOOBr_KCE6bEPlPhvb443t121X7kQXV33Mpbw/viewform" target='_blank' className="inline-flex items-center gap-2 bg-secondary text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-secondary-light to-secondary-dark px-6 py-3 hover:-translate-y-px">
                                        Inscribirme
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /> </svg>
                                    </Link>
                                    <span className='font-serif'>Solo 200 cupos.</span>
                                </div>
                                {/* <div>
                                    <div className="inline-block p-4 text-sm bg-secondary rounded-lg font-serif">¡AGOTADO!</div>
                                </div> */}
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <img src={`${router.basePath}/assets/images/carrera-valencia/img_e8fg4s.jpeg`} className='max-w-full h-auto rounded-2xl' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative grid items-center bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-img.jpg)` }}>
                    <div className="absolute bg-primary-dark/20 inset-0"></div>
                    <div className="relative container max-w-3xl z-10">
                        <h1 className="text-3xl md:text-5xl font-title mb-6">¡Recorramos <span className="text-tertiary">Valencia</span> Desde Las Alturas!</h1>
                        <h6 className="text-lg md:text-2xl font-serif mb-5">Somos una organización dedicada a formar una comunidad de montañistas y mostrar las rutas de montaña que ofrece el estado Carabobo y Venezuela</h6>
                        <Link href={`${router.basePath}/registrarse`} className="inline-block bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">Unirse a Valencia Hike</Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
