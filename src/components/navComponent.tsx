import { useRouter } from 'next/router';
import Link from 'next/link'
import { useState } from 'react';

export default () => {
    const router = useRouter();

    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="py-2">
            <div className="container flex justify-between flex-wrap items-center gap-4">
                <div className="flex items-center flex-grow">
                    <Link href="/" className="inline-block">
                        <img src={`${router.basePath}/assets/images/logo_original.png`} className='w-24' alt="Valencia Hike" />
                    </Link>
                    <div className="lg:hidden flex items-center flex-nowrap gap-2 ml-auto">
                        <button type="button" className="flex justify-center items-center bg-cream-yellow w-10 h-10 rounded-full text-center p-1"
                            onClick={toggleMenu}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
                        </button>
                    </div>
                </div>
                <div id="menu-collapse" className={`basis-full lg:basis-auto lg:ml-auto lg:!block ${clicked ? '!block' : ''}`} style={{ display: 'none' }}>
                    <ul className="flex items-center flex-col lg:flex-row gap-1">
                        <li> <Link href="/" className={`block hover:text-primary-light text-stone-800 uppercase font-title rounded-full px-4 py-2 text-sm ${router.pathname == '/' ? '!bg-primary !text-white' : ''}`}>Home</Link> </li>
                        <li> <Link href="/about" className={`block hover:text-primary-light text-stone-800 uppercase font-title rounded-full px-4 py-2 text-sm ${router.pathname == '/about' ? '!bg-primary !text-white' : ''}`}>Nosotros</Link> </li>
                        <li> <Link href="/faqs" className={`block hover:text-primary-light text-stone-800 uppercase font-title rounded-full px-4 py-2 text-sm ${router.pathname == '/faqs' ? '!bg-primary !text-white' : ''}`}>FAQs</Link> </li>
                        <li> <Link href="/tienda" className={`block hover:text-primary-light text-stone-800 uppercase font-title rounded-full px-4 py-2 text-sm ${router.pathname == '/tienda' ? '!bg-primary !text-white' : ''}`}>Tienda</Link> </li>
                        <li> <Link href="/contact" className={`block hover:text-primary-light text-stone-800 uppercase font-title rounded-full px-4 py-2 text-sm ${router.pathname == '/contact' ? '!bg-primary !text-white' : ''}`}>Contacto</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}