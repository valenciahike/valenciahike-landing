import Link from "next/link";
import { useRouter } from "next/router"

function productCardComponent({product}: any) {
    const router = useRouter();

    return  <div className="group bg-cream-yellow rounded-2xl hover:border-stone-800 p-4 transition-all duration-300 ease-out">
                <Link href={`${router.basePath}/tienda/[slug]`} as={`${router.basePath}/tienda/${product.slug}`} className="block relative overflow-hidden mb-4 group-hover:scale-95 group-hover:-rotate-2 transition-all duration-200 ease-out group-hover:shadow-xl">
                    <img src={`${router.basePath}/assets/images/products/${product.image}`} className="object-cover aspect-square rounded-lg w-full" alt="" />
                    <img src={`${router.basePath}/assets/images/products/${product.imageHover}`} className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 object-cover aspect-square rounded-lg w-full transition-opacity duration-100" alt="" />
                </Link>
                <div className="font-title font-extrabold text-center">
                    <Link href={`${router.basePath}/tienda/[slug]`} as={`${router.basePath}/tienda/${product.slug}`} className="text-sm mb-1">{ product.name }</Link>
                    <div className="text-primary-light">USD { product.price }</div>
                </div>
            </div>
}

export default productCardComponent