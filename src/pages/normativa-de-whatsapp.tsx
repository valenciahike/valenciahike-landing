import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Guidelines = () => {
    const router = useRouter()

    return (<Main meta={<Meta title="Normativa de Grupo de Whatsapp - Valencia Hike" description="Valencia Hike es una organización registrada bajo la figura de Fundación con el RIF Nro J-502603492, lo que hace necesario la creación de estatutos y lineamientos a seguir para poder llevar un orden y control dentro de las actividades." />}>
        {/* hero */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-lkhgl5n2.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title">Normativa de Grupo de Whatsapp</h1>
            </div>
        </section>

        {/* content */}
        <section className="relative z-10 min-h-[75vh] bg-cream-yellow py-20 lg:py-24">
            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-big-white-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_primary_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain_cream_dark_bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-1/2 md:h-auto object-cover md:w-full -z-10 select-none pointer-events-none" />
            </div>

            <div className="mb-12">
                <div className="container max-w-5xl">
                    <div className="format text-stone-600 font-serif">
                        <p className="text-stone-400 italic">Última actualización: 28 de julio, 2025</p>
                        <hr className='mt-3 mb-8 border-stone-300' />
                        <p>Con el objetivo de fomentar una interacción más fluida y respetuosa entre los miembros, así como garantizar la armonía en el grupo, se han establecido las siguientes normas. Invitamos a todos a leerlas detenidamente y seguirlas para mantener un espacio organizado y agradable para todos.</p>
                        <p>El grupo está dedicado exclusivamente a temas relacionados con el senderismo y montañismo, como dudas, consejos, experiencias, recomendaciones de equipos, entre otros.</p>

                        <p>Por favor, evita conversaciones fuera de este tema. Para otros asuntos, utiliza chats privados o contacta a los administradores en caso de ser necesario.</p>

                        <h3>Organización de actividades</h3>
                        <ul>
                            <li>⚠️ Las rutas o excursiones no oficiales deberán organizarse de manera privada y fuera del grupo.</li>
                            <li>⚠️ No compartir las invitaciones de las rutas oficiales organizadas por Valencia Hike, ni información sobre las mismas. Estas se les envía de manera privada a los miembros de la comunidad.</li>
                        </ul>

                        <h3>Publicidad</h3>
                        <ul>
                            <li>❌ No está permitido hacer publicidad a otros grupos de excursionismo, servicios comerciales o actividades no relacionadas con el propósito del grupo.</li>
                            <li>✅ En caso de que se desee compartir información útil (p. ej., tiendas, promociones de equipos), deberá contar con la aprobación previa de los administradores.</li>
                        </ul>

                        <h3>Multimedia y contenidos compartidos</h3>
                        <ul>
                            <li>✅ Comparte solo contenido relevante al tema del grupo, como fotos, vídeos y enlaces de interés relacionados con el senderismo.</li>
                            <li>❌ Evita el envío de contenido no relacionado con la temática, como memes o cadenas.</li>
                            <li>❌ Evita el envío masivo de stickers.</li>
                        </ul>

                        <h3>Respeto y convivencia</h3>
                        <ul>
                            <li>✅ Mantén un tono respetuoso y amigable en todas tus interacciones.</li>
                            <li>❌ No se tolerarán comentarios ofensivos, discriminatorios o conflictivos.</li>
                        </ul>

                        <h3>Reacciones con emojis y mensajes</h3>
                        <ul>
                            <li>💡 Para evitar saturar el grupo con mensajes cortos o irrelevantes, utiliza reacciones con emojis para expresar aprobación, emociones o comentarios breves.</li>
                            <li>💡 Procura expresar tus ideas completas en un solo mensaje en lugar de enviarlas en múltiples mensajes seguidos. Esto reduce el número de notificaciones para los demás miembros y facilita la lectura de las conversaciones.</li>
                        </ul>

                        <h3>Moderación y cumplimiento</h3>
                        <ul>
                            <li>ℹ️ Los administradores se reservan el derecho de eliminar mensajes que consideren inapropiados o que puedan ser irrelevantes o de spam, y en casos graves, pueden expulsar a miembros que incumplan las normas.</li>
                        </ul>

                        <p>Si tienes dudas o sugerencias, comunícate con los administradores en privado.</p>
                    </div>
                </div>
            </div>
        </section>

    </Main>);
}

export default Guidelines;
