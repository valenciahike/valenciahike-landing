
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const data = [
    {
        id: 1,
        question: '¿Cómo puedo pertenecer a la comunidad?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 2,
        question: '¿Cada cuanto tiempo organizan rutas?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 3,
        question: '¿Que sucede en caso de lluvia al comienzo de una actividad?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 4,
        question: '¿Permiten mascotas en sus actividades?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 5,
        question: '¿Cuál es la edad mínima para pertenecer a la comunidad?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 6,
        question: '¿Cómo puedo pertenecer a la comunidad?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 7,
        question: '¿Cada cuanto tiempo organizan rutas?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 8,
        question: '¿Que sucede en caso de lluvia al comienzo de una actividad?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 9,
        question: '¿Permiten mascotas en sus actividades?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
        id: 10,
        question: '¿Cuál es la edad mínima para pertenecer a la comunidad?',
        answer: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
]

const Faqs = () => {
    const router = useRouter()

    const [opened, setOpened] = useState(null)

    const toggle = (i: any) => {
        if (opened === i) {
            return setOpened(null)
        }

        setOpened(i);
    }

    return (<Main meta={<Meta title="Preguntas frecuentes - Valencia Hike" description="Todo lo que necesitas saber sobre nosotros, nuestra organización y nuestras actividades." />}>
        {/* hero */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-bg.png)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title mb-6">Preguntas frecuentes</h1>
            </div>
        </section>

        <section className="relative z-10 min-h-[75vh] bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-1/2 md:h-auto object-cover md:w-full -z-10 select-none pointer-events-none" />
            </div>

            <div className="mb-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-12 xl:gap-20">
                        <div>
                            <div className="lg:sticky top-8">
                                <h1 className="text-3xl lg:text-5xl font-title font-bold mb-4">¿Quieres saber algo?</h1>
                                <div className="font-serif text-stone-500 md:text-lg mt-6">
                                    <p className="mb-4">Todo lo que necesitas saber sobre nosotros, nuestra organización y nuestras actividades.</p>
                                    <p className="mb-4">¿No encuentras la respuesta a tu duda? <a href="" className='text-primary-light hover:text-primary underline underline-offset-4'>Envíanos un mensaje</a>.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            {data.map((item, i) => (
                                <div className="bg-white/40 hover:bg-white/50 rounded-md mb-4" key={item.id}>
                                    <button type="button" onClick={() => toggle(i)} className={`flex w-full rounded-md text-left hover:text-primary-light gap-4 p-4 transition-all ${opened === i ? 'text-primary-light' : ''}`}>
                                        <div className="flex items-center justify-center w-6 h-6 bg-white text-primary-light rounded-sm shrink-0">
                                            <svg className={opened === i ? 'rotate-180' : ''} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
                                        </div>
                                        <div className="grow">
                                            <div className="font-title font-bold">{ item.question }</div>
                                        </div>
                                    </button>
                                    <div className={`text-stone-500 font-serif px-4 pb-4 ${opened !== i ? 'hidden' : ''}`}>{ item.answer }</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

  </Main>);
}

export default Faqs;
