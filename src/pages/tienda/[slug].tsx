import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import ProductGallery from '@/components/swiper/ProductGallery';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import { products } from '../../../products';

const Product = ({product}: any) => {
    const router = useRouter();
    const [selectedGenre, setSelectedGenre] = useState<'men' | 'women'>('men');

    // Check if product has any image with genre
    const hasGenre = product.images.some((img: any) => img.genre);

    // Filter images by selected genre, fallback to all if none match
    const filteredImages = product.images.filter(
        (img: any) => !img.genre || img.genre === selectedGenre
    );
    const imagesToShow = filteredImages.length > 0 ? filteredImages : product.images;

    return (<Main meta={<Meta title={`${product.name} - Valencia Hike`} description="Con la compra de cualquiera de estos productos estás colaborando con una mejor experiencia para los participantes de nuestras rutas, dichos fondos son destinados a la compra de distintos equipos necesarios para el desarrollo de nuestras actividades." />}>
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
                            <ProductGallery images={imagesToShow} />
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-start-8 lg:col-span-5'>
                            <h1 className="text-3xl lg:text-4xl font-title mb-4 hidden md:block">{product.name}</h1>
                            {product.in_stock ? (
                                <div>
                                    <div className="font-title font-extrabold text-2xl text-primary-light">{product.price}</div>
                                    {hasGenre && (
                                        <div className="flex gap-2 my-8">
                                            <div>
                                                <label
                                                    htmlFor="genre-men"
                                                    className={`cursor-pointer px-4 py-2 rounded-full border font-medium transition
                                                        ${selectedGenre === 'men'
                                                            ? 'bg-primary-light text-white border-primary-light'
                                                            : 'bg-white text-stone-900 border-stone-300 hover:bg-stone-100'}
                                                        peer-checked:bg-primary-light peer-checked:text-white peer-checked:border-primary-light
                                                    `}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="genre-men"
                                                        name="genre"
                                                        value="men"
                                                        checked={selectedGenre === 'men'}
                                                        onChange={() => setSelectedGenre('men')}
                                                        className="peer hidden"
                                                    />
                                                    Caballero
                                                </label>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="genre-women"
                                                    className={`cursor-pointer px-4 py-2 rounded-full border font-medium transition
                                                        ${selectedGenre === 'women'
                                                            ? 'bg-primary-light text-white border-primary-light'
                                                            : 'bg-white text-stone-900 border-stone-300 hover:bg-stone-100'}
                                                        peer-checked:bg-primary-light peer-checked:text-white peer-checked:border-primary-light
                                                    `}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="genre-women"
                                                        name="genre"
                                                        value="women"
                                                        checked={selectedGenre === 'women'}
                                                        onChange={() => setSelectedGenre('women')}
                                                        className="peer hidden"
                                                    />
                                                    Dama
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="font-title font-extrabold text-2xl text-red-500">No disponible</div>
                            )}
                            <div className="format font-serif text-stone-500 my-6"
                                dangerouslySetInnerHTML={{ __html: product.description }}>
                            </div>
                            {product.in_stock && (
                                <div className="grid md:block mt-8">
                                    <a href={`whatsapp://send?text=¡Hola! Estoy interesado/a en *${product.name}*&phone=+${AppConfig.contact.whatsapp.formatted}&abid=+${AppConfig.contact.whatsapp.formatted}`} className="inline-block text-center bg-green-700 text-white hover:text-white/80 font-bold rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark px-6 py-3 hover:-translate-y-px">
                                        Escribir al Whatsapp
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="inline bi bi-whatsapp ml-4 text-2xl" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Main>);
}

export const getStaticProps = async ({params: {slug}}: any) => {
    const product = products.filter((item: any) => item.slug === slug)[0];

    return {
        props: { product }
    }
}

export const getStaticPaths = async () => {
    const slugs = products.map((product: any) => product.slug)
    const paths = slugs.map((slug: any) => ({
        params: {
            slug
        }
    }))

    return { paths, fallback: false }
}

export default Product;