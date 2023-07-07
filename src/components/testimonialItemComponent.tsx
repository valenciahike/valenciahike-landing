import { useRouter } from 'next/router';
import React from 'react'

type ITestimonialProps = {
    name: string,
    content: string
}

export default function testimonialItemComponent(props: ITestimonialProps) {
    const router = useRouter();

    return (
        <div className="group relative overflow-hidden text-center bg-white text-stone-800 p-4 md:p-6 xl:pt-12 xl:pb-6 xl:px-8 rounded-2xl shadow-xl z-10 hover:scale-105 hover:shadow-xl hover:shadow-primary-dark/20 transition-all">
            <svg className="absolute text-primary text-8xl opacity-10 group-hover:opacity-20 top-0 left-0 -z-10 transition-all duration-300 ease-in-out group-hover:-rotate-12" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg>
            <img src={`${router.basePath}/assets/images/card-decor-bottom.svg`} className="absolute text-primary -z-10 left-0 bottom-0 w-full opacity-5 group-hover:opacity-10 transition-all duration-500 ease-in-out origin-bottom group-hover:scale-110" />
            <div className="font-serif text-stone-500 text-sm mb-4">"{props.content}"</div>
            <div className="text-primary-light font-title font-extrabold pt-4">{props.name}</div>
        </div>
    )
}
