
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const data = [
    {
        id: 1,
        question: '¿Cómo puedo pertenecer a la comunidad?',
        answer: 'Puedes unirte a nuestra comunidad completando el formulario de registro que se encuentra en el inicio de nuestra pagina web, en el botón "Unirse a Valencia Hike" o también en el link de nuestro bio del perfil de Instagram <a href="" class="text-primary underline">@valenciahike</a> , copiando esta dirección URL, o haciendo “click aquí”.'
    },
    {
        id: 2,
        question: '¿Cada cuanto tiempo organizan rutas?',
        answer: 'Generalmente, organizamos rutas todos los fines de semana por la mañana que en ocasiones pueden extenderse hasta la tarde. Ocasionalmente hacemos actividades en días de semana y con cierta regularidad viajes fuera de Valencia.'
    },
    {
        id: 3,
        question: '¿Que sucede en caso de lluvia al comienzo de una actividad?',
        answer: 'La ruta siempre se mantendrá en pie hasta la hora de inicio de la misma, en caso de condiciones adversas a la hora de iniciar, se consultará con los participantes sobre sus preferencias, siempre y cuando no consideremos que sea un riesgo para los participantes.'
    },
    {
        id: 4,
        question: '¿Permiten mascotas en sus actividades?',
        answer: 'Las mascotas no estarán permitidas en las rutas dentro de Parques Nacionales, Parques Municipales, o que incluyan transporte, de resto son bienvenidas siempre y cuando ya acostumbren a realizar dicha práctica con usted. Tenemos que hacer saber que no estamos de acuerdo en muchas ocasiones con incluirlas dado que hay animales que no se limitan y el esfuerzo físico o condiciones climáticas pueden ponerlos en situaciones complicadas para su salud, además que pueden sentirse curiosos ante animales que puedan atacarlos.'
    },
    {
        id: 5,
        question: '¿Cuál es la edad mínima para pertenecer a la comunidad?',
        answer: 'Para ingresar en nuestra comunidad es necesario cumplir con la mayoría de edad (18 años), en caso de ser menor, podrá asistir a las rutas organizadas para VH Kidz.'
    },
    {
        id: 6,
        question: '¿Por qué no me llegan las invitaciones?',
        answer: 'Si ya has completado y enviado el formulario de registro, debes tener paciencia ya que el proceso no es automático (puede demorar de 1 día a 21 días), una vez te contactemos vía WhatsApp, es obligatorio que guardes nuestro número telefónico en tu agenda ya que WhatsApp no permite que recibas mensajes en difusión (cadenas) de números desconocidos y es de esa forma que enviamos nuestras invitaciones.'
    },
    {
        id: 7,
        question: '¿Por qué le llegó la invitación a un amigo y a mi no?',
        answer: `<p>En el senderismo/montañismo, hay que ser más cauteloso que en otras disciplinas con respecto a cuando se invita a alguien a su práctica, ya que en un entrenamiento, juego o clase de crossfit, gimnasio, fútbol, tenis, entre otras disciplinas, uno puede sencillamente dejar de hacerlo porque se cansó y salirse del box, gimnasio o cancha, pero en esta práctica, cuando uno ya está cansado, si aún no ha llegado a su destino implica que no podría dejar de hacerlo y retirarse, sino continuar, aún cuando no se pueda más, hasta llegar al destino. Entonces nosotros buscamos, según las respuestas dadas a ciertas preguntas en el formulario de registro, ubicar al participante en un nivel que reciba las invitaciones para las rutas a las que se considere pueda culminar exitosamente sin mayor problema, buscando siempre que se lleve la mejor experiencia y no se vuelva una situación en la que no quiera estar involucrado nuevamente.</p>
                <p>Tomando eso en cuenta, definimos, 5 niveles según las exigencias de ruta (Distancia, desnivel, dificultad técnica, terreno, exposición, tiempo, entre otras), tomando dichas exigencias en cuenta, se determinará los niveles a invitar.</p>`
    },
    {
        id: 8,
        question: '¿Por qué las rutas tienen capacidad máxima de asistentes?',
        answer: `<p>Cada ruta tiene una cantidad máxima de asistentes, al llegar a dicha cantidad de participantes confirmados, no se recibirán más participantes. Hay varios factores que influyen en esta cantidad, como lo son la capacidad de carga del espacio, todos los espacios que se visitan tienen una capacidad de carga que hace referencia a la máxima cantidad de personas que pueden estar en un sitio sin convertirse en un daño o peligro, también se toma en cuenta la cantidad de personal de apoyo disponible, buscamos siempre tener un máximo de 10 participantes por cada persona de apoyo (varía según la ruta), y por último las características de la ruta, si tiene múltiples caminos o la falta de un camino marcado, la dificultad, distancia, entre otros.</p>
                <p>Agradecemos respetar la capacidad máxima de ruta para beneficio de ustedes y de los lugares que visitamos.</p>`
    },
    {
        id: 9,
        question: '¿Cómo es la segmentación por niveles?',
        answer: `<p>Definimos 5 niveles determinados principalmente por las respuestas dadas en el formulario de registro, al comenzar a asistir a las rutas se puede modificar dicho nivel según desempeño y sensaciones, tomando en cuenta la exigencia de la ruta (Distancia, desnivel, dificultad técnica, terreno, exposición, tiempo, entre otras), se determina los niveles a invitar.</p>
                <p><b>Nivel 1:</b> Rutas cortas y de baja intensidad, para personas sedentarias que acostumbren a caminar en plano, tomando en cuenta que puede o no culminarla y tendrá siempre apoyo del equipo, éstas se realizan con poca frecuencia ya que son pocas las rutas de la ciudad que lo permitan.</p>
                <p><b>Nivel 2:</b> Se amplía un poco la gama de rutas, sumamos un poco de distancia o intensidad, para personas con poca o nula experiencia en senderismo/montañismo, pero con algo de actividad física que realice habitualmente.</p>
                <p><b>Nivel 3:</b> Gran mayoría de las rutas de la ciudad, para personas con experiencia en senderismo/montañismo, deportistas, o personas que practiquen deportes de intensidad habitualmente.</p>
                <p><b>Nivel 4:</b> La totalidad de las rutas, personas que ya hayan participado en actividades donde muestren un desempeño apto para este tipo de rutas.</p>
                <p><b>Nivel 5:</b> Personas que puedan desarrollar cualquier ruta de alta distancia o intensidad a ritmo rápido.</p>`
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
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-9eghd4f.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title">Preguntas frecuentes</h1>
            </div>
        </section>

        {/* faqs */}
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
                            <h1 className="text-3xl lg:text-5xl font-title mb-4">¿Quieres saber algo?</h1>
                            <div className="font-serif text-stone-500 md:text-lg mt-6">
                                <p className="mb-4">Todo lo que necesitas saber sobre nosotros, nuestra organización y nuestras actividades.</p>
                                <p className="mb-4">¿No encuentras la respuesta a tu duda? <Link href="" className='text-primary-light hover:text-primary underline underline-offset-4'>Contáctanos</Link>.</p>
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
                                            <div className="font-title font-extrabold">{ item.question }</div>
                                        </div>
                                    </button>
                                    <div className={`text-stone-500 font-serif px-4 pb-4 ${opened !== i ? 'hidden' : ''}`} dangerouslySetInnerHTML={{__html: item.answer}}></div>
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
