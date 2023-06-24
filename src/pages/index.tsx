import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

    return (<Main meta={<Meta title="Home - Valencia Hike" description="Inicio de pagina" />}>
      <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover" style={{ backgroundImage: "url(assets/images/hero-bg.png)" }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-title font-bold mb-6">Una Ruta Hacia La Aventura</h1>
                <h6 className="text-lg md:text-2xl text-yellow-400 mb-5">Dedicados a formar una comunidad de montañistas y mostrar las rutas de montaña que ofrece el estado Carabobo y Venezuela</h6>

                <a href="" className="inline-block bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">Unirse a Valencia Hike</a>
            </div>
        </section>

        {/* About us */}
        <section id="about" className="relative z-10 bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src="assets/img/decor/mountain_cream_dark_bottom.svg" alt="" className="absolute bottom-0 left-0 right-0 h-1/2 md:h-auto object-cover md:w-full -z-[5] select-none pointer-events-none" />
                <img src="assets/img/decor/mountain-white-bottom.svg" alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">Sobre nosotros</h1>
                    <h6 className="text-xl lg:text-2xl font-subtitle text-secondary">Conoce las montañas de Carabobo</h6>
                    <div className="font-serif text-stone-500 mt-6">
                        <p className="mb-4">Somos una organización sin fines de lucro dedicada a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="swiper__col6 | swiper">
                    <div className="swiper-wrapper py-10">
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_01.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Vigirima hasta Patanemo</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_02.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Pico Hilaria</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_03.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Camino de Carabobo</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_04.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Cerro Villalonga</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_01.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Vigirima hasta Patanemo</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_02.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Pico Hilaria</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_03.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Camino de Carabobo</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="javascript:void(0)" className="group block relative rounded-2xl aspect-[4/3] overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                                <img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" src="{{ asset('home/img/trails/trail_04.jpg') }}" alt="" />
                                <div className="absolute right-0 bottom-0 left-0 text-center text-white bg-gradient-to-b from-transparent to-black py-4 px-3">
                                    <div className="font-subtitle leading-none tracking-wide">Cerro Villalonga</div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    </Main>)
}

export default Index;
