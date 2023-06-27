import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from 'next/router';

import TrailsComponent from '@/components/swiper/trailsComponent';

const Index = () => {
  const router = useRouter();

    return (<Main meta={<Meta title="Bienvenido a Valencia Hike" description="Inicio de pagina" />}>
        {/* hero */}
        <header className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-bg.png)` }}>

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
        </header>

        {/* about us */}
        <section id="about" className="relative z-10 bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-1/2 md:h-auto object-cover md:w-full -z-[5] select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-white-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="mb-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 lg:gap-12 xl:gap-20">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">¿Quiénes somos?</h1>
                            <h6 className="text-xl lg:text-2xl font-subtitle text-primary-light">Conoce las montañas de Carabobo</h6>
                            <div className="font-serif text-stone-500 text-lg mt-6">
                                <p className="mb-4">Somos una organización sin fines de lucro de voluntarios apasionados por el senderismo.</p>
                                <p className="mb-4">Valencia Hike fue fundada casualmente en el año 2019 y formalmente a inicios de 2022, de mano de dos montañistas con ganas de mostrar esas bondades que ofrece la naturaleza y las montañas de Carabobo. Luego se fueron uniendo más compañeros senderistas y montañistas creando así un equipo de trabajo multidisciplinario que hoy por hoy conforman el staff de guías. </p>
                            </div>
                        </div>
                        <div>
                            <img src={`${router.basePath}/assets/images//sec-g8sfd.jpg`} className="rounded-2xl shadow-xl shadow-stone-300" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <TrailsComponent />
            </div>
        </section>

        {/* membership */}
        {/* <section className="relative py-20">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">Inscripción <span className="text-primary-light">Gratis</span></h1>
                    <h6 className="text-xl lg:text-2xl font-subtitle text-primary">~ Totalmente gratis ~</h6>
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
        </section> */}

        {/* hiking benefits */}
        <section className="relative py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-8">
                    <div className="lg:border-r lg:pr-12 lg:mr-6">
                        <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">Beneficios del <span className="text-primary-light">Senderismo</span></h1>
                        <div className="font-serif text-stone-500 mt-6">
                            <p className="text-lg mb-4">El senderismo nos permite estar en cercanía con la naturaleza, caminando por senderos generalmente en la montaña. Tiene muchos beneficios para la salud, tanto física como mental.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='flex gap-4 font-serif text-stone-700'>
                            <div className="inline-flex justify-center items-center flex-shrink-0 bg-primary-light bg-opacity-10 w-12 h-12 rounded-full text-primary text-2xl mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#5a7c5c" viewBox="0 0 256 256"><path d="M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"></path></svg>
                            </div>
                            <p>Mejora la fuerza cardiovascular y la capacidad respiratoria al aumentar el flujo sanguíneo y el oxígeno</p>
                        </div>
                        <div className='flex gap-4 font-serif text-stone-700'>
                            <div className="inline-flex justify-center items-center flex-shrink-0 bg-primary-light bg-opacity-10 w-12 h-12 rounded-full text-primary text-2xl mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5a7c5c" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>
                            </div>
                            <p>Despeja la mente y reduce el estrés, la ansiedad y la depresión al estar en contacto con la naturaleza</p>
                        </div>
                        <div className='flex gap-4 font-serif text-stone-700'>
                            <div className="inline-flex justify-center items-center flex-shrink-0 bg-primary-light bg-opacity-10 w-12 h-12 rounded-full text-primary text-2xl mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5a7c5c" viewBox="0 0 256 256"><path d="M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM42.86,56H144V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25C49,129.16,50.41,85.83,42.86,56ZM232,200H205.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232Z"></path></svg>
                            </div>
                            <p>Mejora el equilibrio y la coordinación al adaptarse a los diferentes terrenos</p>
                        </div>
                        <div className='flex gap-4 font-serif text-stone-700'>
                            <div className="inline-flex justify-center items-center flex-shrink-0 bg-primary-light bg-opacity-10 w-12 h-12 rounded-full text-primary text-2xl mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5a7c5c" viewBox="0 0 256 256"><path d="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z"></path></svg>
                            </div>
                            <p>Fomenta la conciencia ambiental y el respeto por la naturaleza al descubrir su belleza y diversidad</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* as service */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-20 min-h-[85vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${router.basePath}/assets/images/sec-g8sfd.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images//mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images//mountain-white-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-gradient-to-br from-primary/70 to-primary-dark/50 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h6 className="text-xl lg:text-2xl font-subtitle text-yellow-400 mb-5">¡Lleva Tu Equipo a La Montaña!</h6>
                <h1 className="text-3xl lg:text-5xl font-title font-bold mb-6">Organiza Una Ruta de Montaña Para Tu Organización</h1>
                <p className="font-serif text-lg text-white/75">Hemos apoyado a grandes entidades del Estado Carabobo organizando actividades recreativas sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>

                <div className="mt-8">
                    <a href="" className="inline-block bg-tertiary hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-tertiary to-tertiary-dark px-6 py-3 hover:-translate-y-px">
                        <svg className="inline w-6 h-6 mr-2 align-bottom" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> </svg>
                        Contactar
                    </a>
                </div>
            </div>
        </section>

        {/* products */}
        <section className="relative z-10 py-20 lg:pb-40 lg:pt-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="container">
                <div className="grid items-center grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-6 xl:gap-12">
                    <div className="col-span-12 lg:col-span-3">
                        <h1 className="text-3xl xl:text-5xl font-title font-bold mb-4">Nuestros <span className="text-primary-light">Productos</span></h1>
                        <div className="font-serif text-stone-500 mt-6 mb-4">
                            <p>Comprando nuestros productos estas apoyando de a sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <a href="" className="inline-block bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">Ver tienda</a>
                    </div>
                    <div className="col-span-12 lg:col-span-9 | grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">

                        <div className="group bg-cream-yellow rounded-2xl hover:border-stone-800 hover:shadow-stone-900/10 hover:shadow-xl hover:scale-105 p-4 transition-all duration-300 ease-out">
                            <div className="mb-4">
                                <img src={`${router.basePath}/assets/images/products/product-01.png`} className='group-hover:scale-90 object-cover aspect-square rounded-lg w-full transition-transform duration-500 ease-out' alt="" />
                            </div>
                            <div className="font-title text-center">
                                <div className="text-sm mb-1">Aislante Térmico</div>
                                <div className='text-primary-light'>USD 25.00</div>
                            </div>
                        </div>

                        <div className="group bg-cream-yellow rounded-2xl hover:border-stone-800 hover:shadow-stone-900/10 hover:shadow-xl hover:scale-105 p-4 transition-all duration-300 ease-out">
                            <div className="mb-4">
                                <img src={`${router.basePath}/assets/images/products/product-02.png`} className='group-hover:scale-90 object-cover aspect-square rounded-lg w-full transition-transform duration-500 ease-out' alt="" />
                            </div>
                            <div className="font-title text-center">
                                <div className="text-sm mb-1">Aislante Térmico</div>
                                <div className='text-primary-light'>USD 25.00</div>
                            </div>
                        </div>
                        <div className="group bg-cream-yellow rounded-2xl hover:border-stone-800 hover:shadow-stone-900/10 hover:shadow-xl hover:scale-105 p-4 transition-all duration-300 ease-out">
                            <div className="mb-4">
                                <img src={`${router.basePath}/assets/images/products/product-03.png`} className='group-hover:scale-90 object-cover aspect-square rounded-lg w-full transition-transform duration-500 ease-out' alt="" />
                            </div>
                            <div className="font-title text-center">
                                <div className="text-sm mb-1">Aislante Térmico</div>
                                <div className='text-primary-light'>USD 25.00</div>
                            </div>
                        </div>
                        <div className="group bg-cream-yellow rounded-2xl hover:border-stone-800 hover:shadow-stone-900/10 hover:shadow-xl hover:scale-105 p-4 transition-all duration-300 ease-out">
                            <div className="mb-4">
                                <img src={`${router.basePath}/assets/images/products/product-01.png`} className='group-hover:scale-90 object-cover aspect-square rounded-lg w-full transition-transform duration-500 ease-out' alt="" />
                            </div>
                            <div className="font-title text-center">
                                <div className="text-sm mb-1">Aislante Térmico</div>
                                <div className='text-primary-light'>USD 25.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* our team */}
        <section className="relative z-10 bg-cream-yellow py-20 lg:pb-40 lg:pt-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4"><span className="text-primary-light">Conoce</span> Nuestro Equipo</h1>
                    <div className="font-serif text-stone-500 mt-6">
                        <p className="text-lg mb-4">Nuestro equipo está conformado por 12 montañistas para las distintas tareas que se pueden manejar en una actividad. Entre ellos tenemos guías turísticos certificados, médicos, rescatista, médico veterinario, psicólogo y personal de apoyo con experiencia en senderismo de montaña.</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 xl:gap-8">
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/01.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Fernando Gómez</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Coordinador</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/02.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Andrea Rodriguez</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/03.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Erick Duarte</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/04.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Carlos Torrealba</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/05.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Alejandra Burgos</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Médico</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/06.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">José Santana</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Médico</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/07.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Ling Hung</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/08.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">"Juancho" Nuñez</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Runner Montañista</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/01.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Juan Miguel Paolini</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Rescatista</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/04.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Jose Dionisio Morales</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/06.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Tirso Lecointere</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador / Programador web</div>
                    </div>
                    <div className="group bg-white rounded-2xl text-center p-2 md:p-4">
                        <div className="mb-4">
                            <img src={`${router.basePath}/assets/images/team/05.png`} alt="" className="aspect-square object-cover rounded-lg" />
                        </div>
                        <div className="font-title mb-1 lg:mb-3 !leading-tight text-sm xl:text-base">Lina Carpico</div>
                        <div className="text-stone-400 font-serif text-sm leading-tight">Colaborador</div>
                    </div>
                </div>
            </div>
        </section>
    </Main>)
}

export default Index;
