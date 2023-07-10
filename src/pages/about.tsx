import { useRouter } from 'next/router';

import KidzComponent from '@/components/swiper/KidzComponent';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const goals = [
    {
        content: 'Mostrar la cantidad de rutas de montaña que ofrece nuestro país, principal y especialmente el estado Carabobo, al igual que sus destinos ecoturísticos tanto para los carabobeños como a quienes nos visiten.',
        icon: 'mountains-thin.svg'
    },
    {
        content: 'Crear y concientizar una comunidad de senderistas y montañistas.',
        icon: 'boot-thin.svg'
    },
    {
        content: 'Acercar la ciudadanía a la naturaleza de forma responsable segura y confiable.',
        icon: 'tree-thin.svg'
    },
    {
        content: 'Concientizar a los pequeños de casa en materia ambientalista y esparcimiento en la montaña como método alterno de recreación saludable y sustentable.',
        icon: 'plant-thin.svg'
    },
    {
        content: 'Exhibir el montañismo como una disciplina deportiva, de esparcimiento, de limpieza y como una actividad terapéutica.',
        icon: 'users-three-thin.svg'
    },
    {
        content: 'Incluir programas de reforestación y saneamiento del ecosistema de montaña.',
        icon: 'leaf-thin.svg'
    },
    {
        content: 'Crear cultura de que la montaña es más que subir un cerro por ejercitarse o por lograr un tiempo, y que en ellas hay un mundo por descubrir.',
        icon: 'backpack-thin.svg'
    },
    {
        content: 'Incluir de cualquier forma a las comunidades aledañas o que geográficamente conformen las rutas de montaña, generando un beneficio para ellos con nuestra visita.',
        icon: 'handshake-thin.svg'
    },
    {
        content: 'Colaborar con otros proyectos ecológicos o turísticos que se desarrollen en la montaña y otros ambientes naturales.',
        icon: 'globe-hemisphere-west-thin.svg'
    },
    {
        content: 'Mostrar tambien los destinos y/o rutas de montaña en todo el territorio nacional, entre los que tenemos nuestros Andes y nuestros Tepuyes.',
        icon: 'flag-thin.svg'
    },
    {
        content: 'Somos un canal de apoyo para la escuela de surf de Patanemo.',
        icon: 'waves-thin.svg'
    },
]

const About = () => {
    const router = useRouter();

    return (<Main meta={<Meta title="Sobre nosotros - Valencia Hike" description="Es una organización sin fines de lucro fundada en 2019 que promueve el senderismo y el ecoturismo en el Estado Carabobo y en todo el territorio nacional." />}>
        {/* hero */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-ewgd5n.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title">Sobre nosotros</h1>
            </div>
        </section>

        {/* about us */}
        <section id="about" className="relative z-10 bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-1/2 md:h-auto object-cover md:w-full -z-10 select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="mb-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 lg:gap-12 xl:gap-20">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-title mb-4">¿Quiénes somos?</h1>
                            <h6 className="text-xl lg:text-2xl font-subtitle text-primary-light">Una organización sin fines de lucro</h6>
                            <div className="font-serif text-stone-500 md:text-lg mt-6">
                                <p className="mb-4">Valencia Hike es una organización sin fines de lucro fundada en 2019 que promueve el montañismo y el ecoturismo en el Estado Carabobo y en todo el territorio nacional.</p>
                                <p className="mb-4">Queremos que las personas puedan recorrer las montañas junto a nosotros para conocer sus distintas rutas, y expandir el conocimiento más allá de los senderos más comunes.</p>
                                <p className="mb-4">Formamos una comunidad de montañistas de distintos niveles, que asistan a recorrer las diversas rutas que ofrecemos de la mano de nuestros guías.</p>
                            </div>
                        </div>
                        <div>
                            <img src={`${router.basePath}/assets/images/sec-g8sfd.jpg`} className="rounded-2xl shadow-xl shadow-stone-300" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-12'>
                <div className="container">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-title mb-4">Nuestros objetivos</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-x-6 lg:gap-y-8">
                        {goals.map((goal, i) => (
                            <div className="text-stone-500 text-center font-serif" key={i}>
                                <div className="flex items-center justify-center text-center bg-primary-light/10 h-16 w-16 text-4xl p-2 rounded-full mx-auto mb-2">
                                    <img src={`${router.basePath}/assets/images/goals/${goal.icon}`} className="inline-block h-[1em]" alt="" />
                                </div>
                                <div>{goal.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* what we do */}
        <section className="relative py-20">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl font-title mb-4">¿Qué <span className="text-primary-light">hacemos</span>?</h1>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-5">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Rutas habituales de fin de semana</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Se realizan rutas en las montañas locales todos los fines de semana para los distintos niveles de nuestra organización, donde disfrutamos de la naturaleza y pasamos un rato agradable compartiendo con las demás personas.</p>
                                <p>En la mayoria de estas rutas definimos un sitio en la montaña para comer y disfrutar de un buen café preparado en el momento.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-start-7">
                            <div className="grid grid-cols-3 gap-2">
                                <img src={`${router.basePath}/assets/images/img-9f87gbfxc.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-9hjrtjhehn.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-8ef5bfhj.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-6 order-last md:order-none">
                            <div className="grid grid-cols-3 gap-2">
                                <img src={`${router.basePath}/assets/images/img-y8e7thhn.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-qw8t7gag.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-9wty7ej.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 order-first md:order-last">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Rutas de mayor complejidad</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Rutas donde el principal objetivo además del disfrute, es cumplir con el desarrollo total de la misma dentro de un tiempo prudencial evitando horas tardías, como largas caminatas de la ciudad a la costa, que en nuestro estado pueden ser desde Vigirima a Patanemo, o El Camino de Carabobo conocido como Camino de Los Españoles, o tambien cumbres importantes como los puntos más altos del estado entre los que tenemos el Cobalonga (Villalonga), el Cerro El Diablo (Picacho del Diablo), Pico Hilaria, entre otros.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-5">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Rutas foráneas</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Realizamos rutas fuera de la ciudad de Valencia con cierta regularidad. Hemos visitado en varias ocasiones el Parque Nacional Henri Pittier en Aragua y el grandioso Waraira Repano (El Ávila) en nuestra ciudad capital.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-start-7">
                            <div className="relative grid grid-cols-1 gap-2">
                                <img src={`${router.basePath}/assets/images/img-9h8er7ndf.jpg`} className="rounded-xl lg:rounded-3xl aspect-[30/10] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-m65fjdhf.jpg`} className="rounded-xl lg:rounded-2xl aspect-[30/10] object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-6 order-last md:order-none self-stretch">
                            <div className="grid grid-cols-3 gap-2">
                                <img src={`${router.basePath}/assets/images/img-tweyr5j2n.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover h-full" alt="" />
                                <div className="col-span-2 grid gap-2">
                                    <img src={`${router.basePath}/assets/images/img-b2nehjrt.jpg`} className="rounded-xl lg:rounded-3xl aspect-[16/9] object-cover" alt="" />
                                    <img src={`${router.basePath}/assets/images/img-q87yheb.jpg`} className="rounded-xl lg:rounded-3xl aspect-[16/9] object-cover" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 order-first md:order-last">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Montañas más importantes de Venezuela</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Viajes que se realizan con cierta regularidad a las montañas de mayor importancia de nuestro país, como pueden serlo nuestros tepuyes, la Cordillera de la Costa incluyendo su punto más alto el Pico Naiguatá y Los Andes venezolanos incluyendo los Picos más altos del país como El Pico Bolívar, El Pico Humboldt, entre otros del Parque Nacional Sierra Nevada y El Parque Nacional Sierra de La Culata.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-5">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Canyoning</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Practica de rapel por cascadas bajo las medidas de seguridad necesarias, equipos certificados y personal calificado. En cascadas como La Manilla en Morón, Los Gavilanes en el P.N. San Esteban, Los Aguacates en San Joaquín, entre otros.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-start-7">
                            <div className="grid grid-cols-3 gap-2">
                                <img src={`${router.basePath}/assets/images/img-1e5thfgn.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-6y5jtndn.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-bnm3hgs.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-6 order-last md:order-none">
                            <div className="grid grid-cols-3 gap-2">
                                <img src={`${router.basePath}/assets/images/img-h6kg4h.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-q9wrt8yr.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-w9erhd5nf.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 order-first md:order-last">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Camping</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Viajes que se realizan con cierta regularidad a las montañas de mayor importancia de nuestro país, como pueden serlo nuestros tepuyes, la Cordillera de la Costa incluyendo su punto más alto el Pico Naiguatá y Los Andes venezolanos incluyendo los Picos más altos del país como El Pico Bolívar, El Pico Humboldt, entre otros del Parque Nacional Sierra Nevada y El Parque Nacional Sierra de La Culata.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* other activities */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-95yhd9n.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images//mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images//mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-gradient-to-br from-primary-light/50 to-primary-dark/80 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h6 className="text-xl lg:text-2xl font-subtitle text-yellow-400 mb-5">¡Valencia Hike es aún más!</h6>
                <h1 className="text-4xl md:text-5xl font-title mb-4">Otras modalidades</h1>
                <p className="font-serif md:text-lg text-white/75">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>

                <div className="grid grid-cols-12 gap-y-12 md:gap-12 lg:gap-20 mt-8">
                    <div className="col-span-12 md:col-span-6">
                        <h5 className="text-tertiary text-2xl font-subtitle mb-3">VH Kidz</h5>
                        <div className="font-serif text-white/75 mb-6">El deporte y la actividad física en general, han demostrado ser un excelente aliado para el sano crecimiento y desarrollo de los niños. En este sentido, el montañismo se presenta como una gran oportunidad para adentrar a los más pequeños al ambito deportivo, ya que es la combinación perfecta de actividad física y cercanía con la naturaleza.</div>
                        <KidzComponent />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h5 className="text-tertiary text-2xl font-subtitle mb-3">VH Trail Running</h5>
                        <div className="font-serif text-white/75 mb-6">VH & Trail Running es una extensión de Valencia Hike, enfocada en la autonomia del participante y trabajo de ritmo donde la finalidad es entrenar, realizar rutas de forma esporádica que sirvan de entrenamiento para mejora de ritmo y resistencia.</div>
                        <KidzComponent />
                    </div>
                </div>
            </div>
        </section>

        {/* they trust */}
        <section className="relative z-10 bg-cream-yellow py-20 lg:pb-40 lg:pt-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-1/2 md:h-auto object-cover md:w-full -z-10 select-none pointer-events-none" />
            </div>

            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-title mb-4">Ellos han confiado <span className="text-primary-light">en nosotros</span></h1>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-12 md:col-span-5">
                            <h3 className="text-2xl lg:text-3xl font-title mb-4">Valen de Viaje</h3>
                            <div className="font-serif text-stone-500 md:text-lg space-y-4">
                                <p>Tuvimos la oportunidad de recibir a <b>Valentina Quintero</b> para la grabación de un segmento de su programa "Valen de Viaje" en el Estado Carabobo, el cual es transmitido por el canal IVC.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 md:col-start-7">
                            <div className="grid grid-cols-3 gap-2">
                                <img src={`${router.basePath}/assets/images/img-qwr98gb5.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-f3gh5rge.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                                <img src={`${router.basePath}/assets/images/img-9hbs52fg3.jpg`} className="rounded-xl lg:rounded-3xl aspect-[9/16] object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8">
                        <div className="lg:border-r lg:pr-12 lg:mr-6">
                            <h1 className="text-2xl lg:text-3xl font-title mb-4">Otras organizaciones con quienes hemos trabajado</h1>
                            <div className="font-serif text-stone-500 md:text-lg mt-6">
                                <p>Distintas organizaciones que han conocido nuestro trabajo nos han contactado para la realización de actividades en conjunto, por ejemplo, rutas en alianza con tiendas deportivas, tiendas de alimentos saludables, inclusión de senderismo en actividades de yoga al aire libre, entre otros.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 lg:grid-cols-5 items-center gap-6 lg:gap-12">
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
