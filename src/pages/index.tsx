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
    </Main>)
}

export default Index;
