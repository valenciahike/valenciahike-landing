import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Link from 'next/link';

const Register = () => {
    const router = useRouter()

    return (<Main meta={<Meta title="Formulario de registro - Valencia Hike" description="Completa este formulario con tu información, para luego contactarte vía WhatsApp y darte los lineamientos sobre el ingreso a nuestra comunidad." />}>
        {/* form */}
        <section className="relative z-10 bg-cream-yellow py-14 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-1/2 md:h-auto object-cover md:w-full -z-10 select-none pointer-events-none" />
            </div>

            {/* breadcrumbs */}
            <div className="pb-4 lg:pb-6">
                <div className="container max-w-3xl">
                    <nav className="flex font-title text-xs" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1">
                            <li>
                                <Link href={`${router.basePath}/`} className="inline-flex items-center font-medium text-stone-700 hover:text-secondary">
                                    Inicio
                                </Link>
                            </li>
                            <li className="flex items-center" aria-current="page">
                                <svg className='w-4 h-4 text-stone-500' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg>
                                <span className="ml-1 font-medium text-stone-400 md:ml-2">Formulario de registro</span>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
            <div>
                <div className="container max-w-3xl">

                    <div className="mb-12">
                        <p className="font-serif text-stone-500 mb-4">Antes de llenar el formulario de registro, te invitamos a leer nuestros lineamientos y preguntas frecuentes para aclarar cualquier duda que puedas tener.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                            <Link href={`${router.basePath}/lineamientos-y-estatutos`} className="flex items-center gap-4 font-title text-sm text-stone-700 hover:text-secondary bg-white p-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                <svg className="text-secondary shrink-0" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM180,96a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,96Zm0,32a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,128Zm0,32a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,160Z"></path></svg>
                                Lineamientos y estatutos
                            </Link>
                            <Link href={`${router.basePath}/faqs`} className="flex items-center gap-4 font-title text-sm text-stone-700 hover:text-secondary bg-white p-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                <svg className="text-secondary shrink-0" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><path d="M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"></path></svg>
                                Preguntas frecuentes
                            </Link>
                        </div>
                    </div>

                    <div className="font-serif text-sm text-stone-500 mb-4">
                        <h5 className='font-title text-lg text-stone-900 mb-2'>Formulario de Registro</h5>
                        Si tienes problemas para cargar el formulario haz &nbsp;
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSerkWGN1arBeeDyOZCma8ybVpazquZYPgiojIfUbXNnyqryzA/viewform" target="_blank"
                            className="text-stone-600 underline underline-offset-2 hover:text-secondary">
                                click aquí
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="inline text-xs ml-1 bi bi-box-arrow-up-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/> <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/> </svg>
                        </a>.
                    </div>

                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSerkWGN1arBeeDyOZCma8ybVpazquZYPgiojIfUbXNnyqryzA/viewform?embedded=true"
                        className="h-[85vh] w-full bg-white rounded-2xl shadow-xl" title='Formulario de registro de Valencia Hike'>
                        Cargando…
                    </iframe>
                </div>
            </div>
        </section>

    </Main>);
}

export default Register;
