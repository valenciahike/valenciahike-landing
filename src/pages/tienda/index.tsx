import { useRouter } from 'next/router';

import ProductCardComponent from '@/components/productCardComponent';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { products } from '../../../products';

const Index = () => {
    const router = useRouter();

    return (<Main meta={<Meta title="Tienda - Valencia Hike" description="Con la compra de cualquiera de estos productos estás colaborando con una mejor experiencia para los participantes de nuestras rutas, dichos fondos son destinados a la compra de distintos equipos necesarios para el desarrollo de nuestras actividades." />}>
        {/* hero */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-lkhgl5n2.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title">Nuestros Productos</h1>
            </div>
        </section>

        {/* products */}
        <section className="relative py-20 lg:pb-36 lg:pt-20">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="container">
                <h1 className="font-title text-3xl mb-6">Franelas</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
                    {[...products]
                        .sort((a, b) => (b as any).id - (a as any).id)
                        .map((product: any, i: any) => (
                            <ProductCardComponent product={product} key={i} />
                        ))}
                </div>
            </div>
        </section>

        {/* info */}
        <section className="relative z-10 bg-cream-yellow py-16 lg:py-16">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="text-center mb-12">
                <div className="container max-w-3xl">
                    <div className="font-serif text-stone-500">
                        <p>Con la compra de cualquiera de estos productos estás colaborando con una mejor experiencia para los participantes de nuestras rutas, dichos fondos son destinados a la compra de distintos equipos necesarios para el desarrollo de nuestras actividades.</p>
                    </div>
                </div>
            </div>
        </section>
    </Main>);
}

export const getStaticProps = async () => {
    return {
        props: { products }
    }
}

export default Index;