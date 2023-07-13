import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { server } from 'config';
import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';

function Product({product}: any) {
    const router = useRouter();

    return (<Main meta={<Meta title={`${product.name} - Valencia Hike`} description="Todo lo que necesitas saber sobre nosotros, nuestra organización y nuestras actividades." />}>
        {/* hero */}
        {/* <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-9eghd4f.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title">{product.name}</h1>
            </div>
        </section> */}

        {/* product details */}
        <section className="relative z-10 bg-cream-yellow py-14 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-1/2 md:h-auto object-cover md:w-full -z-10 select-none pointer-events-none" />
            </div>

            {/* breadcrumbs */}
            <div className="pb-4 lg:pb-6">
                <div className="container max-w-5xl">
                    <nav className="flex font-title text-xs" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1">
                            <li>
                                <Link href={`${router.basePath}/`} className="inline-flex items-center font-medium text-stone-700 hover:text-secondary">
                                    Inicio
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg className='w-4 h-4 text-stone-500' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg>
                                <Link href={`${router.basePath}/tienda`} className="ml-1 font-medium text-stone-700 hover:text-secondary md:ml-2">
                                    Tienda
                                </Link>
                            </li>
                            <li className="flex items-center" aria-current="page">
                                <svg className='w-4 h-4 text-stone-500' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg>
                                <span className="ml-1 font-medium text-stone-400 md:ml-2">{product.name}</span>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>


            <div className="mb-12">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-12 gap-6 md:gap-12 lg:gap-6">
                        <div className='col-span-12 md:col-span-6'>
                            <h1 className="text-3xl lg:text-4xl font-title mb-4 md:hidden">{product.name}</h1>
                            <div className="mb-4">
                                <img className="rounded-2xl shadow-xl" src={`${router.basePath}/assets/images/products/${product.image}`} alt="" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <img className="rounded-lg" src={`${router.basePath}/assets/images/products/${product.imageHover}`} alt="" />
                                <img className="rounded-lg" src={`${router.basePath}/assets/images/products/${product.imageHover}`} alt="" />
                                <img className="rounded-lg" src={`${router.basePath}/assets/images/products/${product.imageHover}`} alt="" />
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-start-8 lg:col-span-5'>
                            <h1 className="text-3xl lg:text-4xl font-title mb-4 hidden md:block">{product.name}</h1>
                            <div className="font-title font-extrabold text-2xl text-primary-light">USD {product.price}</div>
                            <div className="format font-serif text-stone-500 my-6"
                                dangerouslySetInnerHTML={{ __html: product.description }}>
                            </div>
                            <div className="grid md:block mt-8">
                                <a href={`whatsapp://${AppConfig.contact.whatsapp.formatted}`} className="inline-block text-center bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">
                                    Escribir al Whatsapp
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="inline bi bi-whatsapp ml-4 text-2xl" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* register form */}
        {/* <section className="relative bg-cream-yellow py-20">
            <div className="container max-w-3xl px-0 md:px-4">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSerkWGN1arBeeDyOZCma8ybVpazquZYPgiojIfUbXNnyqryzA/viewform?embedded=true"
                    className="h-[85vh] w-full bg-primary md:rounded-2xl shadow-xl pt-4"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="200px">
                    Cargando…
                </iframe>
            </div>
        </section> */}
    </Main>);
}

export const getStaticProps = async (context: any) => {
    const res = await fetch(`${server}/api/products/${context.params.slug}`)
    const product = await res.json()

    return {
        props: { product }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/products`);
    const products = await res.json();

    const slugs = products.map((product: any) => product.slug)
    const paths = slugs.map((slug: any) => ({
        params: {
            slug
        }
    }))

    return { paths, fallback: false }
}

export default Product