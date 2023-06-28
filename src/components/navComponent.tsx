import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavComponent() {
    const router = useRouter();

    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="py-2">
            <div className="container flex flex-wrap items-center justify-between gap-4">
                <div className="flex grow items-center">
                    <Link href="/" className="inline-block">
                        <img src={`${router.basePath}/assets/images/logo_original.png`} className="w-24" alt="Valencia Hike" />
                    </Link>
                    <div className="ml-auto flex flex-nowrap items-center gap-2 lg:hidden">
                        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-yellow p-1 text-center" onClick={toggleMenu}>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
                        </button>
                    </div>
                </div>
                <div id="menu-collapse" className={`basis-full lg:ml-auto lg:!block lg:basis-auto ${clicked ? "!block" : ""}`} style={{ display: "none" }}>
                    <ul className="flex flex-col items-center gap-1 lg:flex-row">
                        <li>
                            <Link href="/" className={`block rounded-full px-4 py-2 font-title text-sm uppercase text-stone-800 hover:text-primary-light ${router.pathname === "/" ? "!bg-primary !text-white" : ""}`}> Home </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block rounded-full px-4 py-2 font-title text-sm uppercase text-stone-800 hover:text-primary-light ${router.pathname === "/about" ? "!bg-primary !text-white" : ""}`}> Nosotros </Link>
                        </li>
                        <li>
                            <Link href="/faqs" className={`block rounded-full px-4 py-2 font-title text-sm uppercase text-stone-800 hover:text-primary-light ${router.pathname === "/faqs" ? "!bg-primary !text-white" : ""}`}> FAQs </Link>
                        </li>
                        <li>
                            <Link href="/tienda" className={`block rounded-full px-4 py-2 font-title text-sm uppercase text-stone-800 hover:text-primary-light ${router.pathname === "/tienda" ? "!bg-primary !text-white" : ""}`}> Tienda </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`block rounded-full px-4 py-2 font-title text-sm uppercase text-stone-800 hover:text-primary-light ${router.pathname === "/contact" ? "!bg-primary !text-white" : ""}`}> Contacto </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
