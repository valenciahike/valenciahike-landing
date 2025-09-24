import Link from "next/link";
import { useRouter } from "next/router"

function ProductCardComponent({product}: any) {
    const router = useRouter();
    const hasSecondImage = product.images && product.images[1];

    return  <div className="group bg-cream-yellow rounded-2xl hover:border-stone-800 p-4 transition-all duration-300 ease-out">
                <Link href={`${router.basePath}/tienda/[slug]`} as={`${router.basePath}/tienda/${product.slug}`} className="block relative overflow-hidden rounded-lg mb-4 group-hover:scale-95 group-hover:-rotate-2 group-hover:shadow-xl focus:scale-95 focus:-rotate-2 focus:shadow-xl transition-all duration-200 ease-out">
                    <img src={`${router.basePath}/assets/images/products/${product.images[0].filename}`} className="object-cover aspect-square rounded-lg w-full" alt="" />
                    {hasSecondImage && (
                        <img src={`${router.basePath}/assets/images/products/${product.images[1].filename}`} className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 object-cover aspect-square rounded-lg w-full transition-opacity duration-100" alt="" />
                    )}
                </Link>
                <div className="font-title font-extrabold text-center">
                    <Link href={`${router.basePath}/tienda/[slug]`} as={`${router.basePath}/tienda/${product.slug}`} className="text-sm mb-1" tabIndex={-1}>{ product.name }</Link>
                    {product.in_stock ? (
                        <div className="text-primary-light">{ product.price }</div>
                    ) : (
                        <div className="text-red-500">No disponible</div>
                    )}
                </div>
            </div>
}

export default ProductCardComponent