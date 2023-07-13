import { products } from "../../../../products";

export default function handler({query: {slug}}: any, res: any) {

    const filtered = products.filter(product => product.slug === slug)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: 'No se ha encontrado.'})
    }
}