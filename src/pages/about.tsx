import KidzComponent from '@/components/swiper/KidzComponent';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from 'next/router';

const About = () => {
    const router = useRouter();

    return (<Main meta={<Meta title="Nosotros - Valencia Hike" description="Sobre nosotros pagina" />}>
        {/* hero */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-bg.png)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title mb-6">Sobre nosotros</h1>

            </div>
        </section>

        {/* about us */}
        <section id="about" className="relative z-10 bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-1/2 md:h-auto object-cover md:w-full -z-[5] select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-white-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="mb-12">
                <div className="container">
                    <div className="grid grid-cols-2 items-center gap-6 lg:gap-12 xl:gap-20">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">¿Quiénes somos?</h1>
                            <h6 className="text-xl lg:text-2xl font-subtitle text-primary-light">Una organización sin fines de lucro</h6>
                            <div className="font-serif text-stone-500 text-lg mt-6">
                                <p className="mb-4">Valencia Hike es una organización sin fines de lucro fundada en 2019 que promueve el senderismo y el ecoturismo en el Estado Carabobo y en todo el territorio nacional.</p>
                                <p>Entre sus objetivos están: mostrar la diversidad de rutas y destinos naturales, crear y educar una comunidad de senderistas y montañistas responsables, reforestar y sanear el ecosistema de montaña, beneficiar a las comunidades locales, colaborar con otros proyectos ecológicos o turísticos y exhibir el montañismo como una actividad deportiva, recreativa y terapéutica.</p>
                            </div>
                        </div>
                        <div>
                            <img src={`${router.basePath}/assets/images//sec-g8sfd.jpg`} className="rounded-2xl shadow-xl shadow-stone-300" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-20">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">¿Qué <span className="text-primary-light">hacemos</span>?</h1>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-5">
                            <h3 className='text-3xl font-title font-bold mb-4'>Rutas habituales de fin de semana</h3>
                            <div className="font-serif text-stone-500 text-lg space-y-4">
                                <p>Se realizan rutas en las montañas locales todos los fines de semana para los distintos niveles de nuestra organización, donde disfrutamos de la naturaleza y pasamos un rato agradable compartiendo con las demás personas.</p>
                                <p>En la mayoria de estas rutas definimos un sitio en la montaña para comer y disfrutar de un buen café preparado en el momento.</p>
                            </div>
                        </div>
                        <div className='col-span-6 col-start-7'>
                            <img src={`${router.basePath}/assets/images/img-ew8grbd.png`} className="rounded-3xl" alt="" />
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-6">
                            <img src={`${router.basePath}/assets/images/img-f9s3kkj.png`} className="rounded-3xl" alt="" />
                        </div>
                        <div className='col-span-5 col-start-8'>
                            <h3 className='text-3xl font-title font-bold mb-4'>Caminamos a la costa desde nuestra ciudad</h3>
                            <div className="font-serif text-stone-500 text-lg space-y-4">
                                <p>Caminatas desde el pueblo de Vigirima hasta la Bahia de Patanemo, y desde Naguanagua hasta San Esteban Pueblo en Puerto Cabello, atravesando varios kilometros del Parque Nacional San Esteban.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-5">
                            <h3 className='text-3xl font-title font-bold mb-4'>Rutas foráneas</h3>
                            <div className="font-serif text-stone-500 text-lg space-y-4">
                                <p>Realizamos rutas fuera de la ciudad de Valencia con cierta regularidad. Hemos visitado en varias ocasiones el Parque Nacional Henri Pittier en Aragua y el grandioso Waraira Repano (El Ávila) en nuestra ciudad capital.</p>
                            </div>
                        </div>
                        <div className='col-span-6 col-start-7'>
                            <img src={`${router.basePath}/assets/images/img-qwr8gw7.png`} className="rounded-3xl" alt="" />
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-6">
                            <img src={`${router.basePath}/assets/images/img-9th5vc4.png`} className="rounded-3xl" alt="" />
                        </div>
                        <div className='col-span-5 col-start-8'>
                            <h3 className='text-3xl font-title font-bold mb-4'>Excursiones a los picos más altos de Venezuela</h3>
                            <div className="font-serif text-stone-500 text-lg space-y-4">
                                <p>Viajes que se organizan regularmente a los picos de importante altura en nuestro país.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${router.basePath}/assets/images/sec-g8sfd.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images//mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images//mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-gradient-to-br from-secondary/50 to-primary-dark/90 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h6 className="text-xl lg:text-2xl font-subtitle text-yellow-400 mb-5">¡Valencia Hike es aún más!</h6>
                <h1 className="text-3xl lg:text-5xl font-title font-bold mb-6">Otras modalidades</h1>
                <p className="font-serif text-lg text-white/75">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>

                <div className="grid grid-cols-12 gap-6 lg:gap-20 mt-8">
                    <div className='col-span-6'>
                        <h5 className='text-tertiary text-2xl font-subtitle mb-3'>VH Kidz</h5>
                        <div className='font-serif text-white/75 mb-6'>Una modalidad creada para el disfrute y concientización de los más pequeños de la casa junto a sus representantes</div>
                        <KidzComponent />
                    </div>
                    <div className='col-span-6'>
                        <h5 className='text-tertiary text-2xl font-subtitle mb-3'>VH Trail Running</h5>
                        <div className='font-serif text-white/75 mb-6'>Una variante creada para aquellos que quieren exigirse un poco más, e incluso medirse en carreras. Una modalidad donde la finalidad es la exigencia física y la competitividad</div>
                        <KidzComponent />
                    </div>
                </div>
            </div>
        </section>

        <section className="relative z-10 bg-cream-yellow py-20 lg:pb-40 lg:pt-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-1/2 md:h-auto object-cover md:w-full -z-[5] select-none pointer-events-none" />
            </div>

            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">Ellos han confiado <span className="text-primary-light">en nosotros</span></h1>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-5">
                            <h3 className='text-3xl font-title font-bold mb-4'>Valen de Viaje</h3>
                            <div className="font-serif text-stone-500 text-lg space-y-4">
                                <p>Tuvimos la oportunidad de recibir a <b>Valentina Quintero</b> para la grabación de un segmento de su programa "Valen de Viaje" en el Estado Carabobo, el cual es transmitido por el canal IVC.</p>
                            </div>
                        </div>
                        <div className='col-span-6 col-start-7'>
                            <a href="#!" className="relative group" title="Abrir video en Youtube">
                                <img src={`${router.basePath}/assets/images/img-q8ewtjyk.png`} className="group-hover:-translate-y-2 rounded-3xl transition-all duration-500" alt="" />
                                <div className="absolute inline-flex items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white rounded-full w-16 h-16 shadow-lg shadow-red-600/50 bg-gradient-to-b from-red-500 to-red-700 group-hover:scale-125 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8">
                        <div className="lg:border-r lg:pr-12 lg:mr-6">
                            <h1 className="text-xl lg:text-3xl font-title font-bold mb-4">Otras organizaciones con quienes hemos trabajado</h1>
                            <div className="font-serif text-stone-500 mt-6">
                                <p className="text-lg mb-4">Distintas organizaciones que han conocido nuestro trabajo nos han contactado para la realización de actividades en conjunto, por ejemplo, rutas en alianza con tiendas deportivas, tiendas de alimentos saludables, inclusión de senderismo en actividades de yoga al aire libre, entre otros.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 items-center gap-8 lg:gap-12">
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-01.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-02.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-03.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-04.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-05.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-04.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-02.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-05.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-03.svg`} className="w-full" alt="" />
                            </div>
                            <div className="opacity-80 hover:opacity-100">
                                <img src={`${router.basePath}/assets/images/brands/logo-01.svg`} className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  </Main>);
}


export default About;
