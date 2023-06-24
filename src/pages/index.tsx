import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from 'next/router';

import TrailsComponent from '@/components/swiper/trailsComponent';
import FeaturesComponent from '@/components/swiper/featuresComponent';

const Index = () => {
  const router = useRouter();

    return (<Main meta={<Meta title="Home - Valencia Hike" description="Inicio de pagina" />}>
      <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-bg.png)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title mb-6">Una Ruta <span className="text-primary-light">Hacia La Aventura</span></h1>
                <h6 className="text-lg md:text-2xl font-serif mb-5">Somos una organización dedicados a formar una comunidad de montañistas y mostrar las rutas de montaña que ofrece el estado Carabobo y Venezuela</h6>

                <a href="" className="inline-block bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">Unirse a Valencia Hike</a>
            </div>
        </section>

        {/* About us */}
        <section id="about" className="relative z-10 bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-1/2 md:h-auto object-cover md:w-full -z-[5] select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-white-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">¿Quiénes somos?</h1>
                    <h6 className="text-xl lg:text-2xl font-subtitle text-primary-light">Conoce las montañas de Carabobo</h6>
                    <div className="font-serif text-stone-500 text-lg mt-6">
                        <p className="mb-4">Somos una organización sin fines de lucro dedicada a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div>
                <TrailsComponent />
            </div>
        </section>

        {/* membership */}
        <section className="relative py-20">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">Inscripción <span className="text-primary-light">Gratis</span></h1>
                    <h6 className="text-xl lg:text-2xl font-subtitle text-secondary">~ Totalmente gratis ~</h6>
                    <div className="font-serif text-stone-500 mt-6">
                        <p className="mb-4">Nuestra inscripción es totalmente gratis, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <h5 className="text-primary font-title mb-4">Beneficios</h5>
                </div>

                <FeaturesComponent />
            </div>

            <div className="container">
                <div className="text-center mt-8">
                    <a href="" className="inline-block bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">Inscribirme Gratis</a>
                </div>
            </div>
        </section>

        {/* as service */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${router.basePath}/assets/images/sec-g8sfd.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images//mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images//mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/50 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h6 className="text-xl lg:text-2xl font-subtitle text-yellow-400 mb-5">¡Lleva Tu Equipo a La Montaña!</h6>
                <h1 className="text-3xl lg:text-5xl font-title font-bold mb-6">Organiza Una Ruta de Montaña Para Tu Organización</h1>
                <p className="font-serif text-white/75">Hemos apoyado a grandes entidades del Estado Carabobo organizando actividades recreativas sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>

                <div className="mt-8">
                    <a href="" className="inline-block bg-tertiary hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-tertiary to-tertiary-dark px-6 py-3 hover:-translate-y-px">
                        <svg className="inline w-6 h-6 mr-2 align-bottom" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> </svg>
                        Contactar
                    </a>
                </div>
            </div>
        </section>
    </Main>)
}

export default Index;
