import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Guidelines = () => {
    const router = useRouter()

    return (<Main meta={<Meta title="Lineamientos y Estatutos - Valencia Hike" description="Valencia Hike es una organización registrada bajo la figura de Fundación con el RIF Nro J-502603492, lo que hace necesario la creación de estatutos y lineamientos a seguir para poder llevar un orden y control dentro de las actividades." />}>
        {/* hero */}
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${router.basePath}/assets/images/bg/img-lkhgl5n2.jpg)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 inset-x-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title">Lineamientos y Estatutos</h1>
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
                        <p>Valencia Hike es una organización registrada bajo la figura de Fundación con el <b>RIF Nro J-502603492</b> con personal capacitado como guía turístico certificado <b>RTN Nro 21388</b>, médicos, rescatistas, psicólogo y montañistas experimentados, lo que hace necesario la creación de estatutos y lineamientos a seguir para poder llevar un orden y control dentro de las actividades.</p>

                        <ul>
                            <li>Puntualidad, respeto por el tiempo de los demás, las rutas inician máximo 20 minutos después de la hora de encuentro pautada, al igual que las actividades que incluyan transporte, el transporte saldrá máximo 20 minutos después de la hora de encuentro pautada, así envíen un mensaje avisando que van en camino.</li>
                            <li>Obedecer al personal de la organización, toda decisión y/u orden dada es por el beneficio y seguridad de la totalidad del grupo.</li>
                            <li>Permanecer con el grupo, si usted quiere ir por su cuenta, le recomendamos que vaya a la montaña por su cuenta y no en grupo, velamos por todos los participantes de la actividad.</li>
                            <li>Privacidad, agradecemos que toda la información que le enviamos previa a la ruta se la guarde únicamente para usted, no la comparta con amigos ni personas no pertenecientes a la organización por medidas de control y seguridad.</li>
                            <li>Respeto por los espacios, estaremos visitando espacios naturales que hay que respetar y dejar mejor de lo que lo encontramos, la basura generada debe volver con nosotros para ser desechada en casa, en caso de desear colocar música por parlante consultar primero con las personas que te rodean y con organización, ya que hay espacios en los que no se permite esta práctica, por otro lado no recomendamos el uso de audífonos ya que pueden aislarte y de repente pasarte alguna indicación por no escuchar.</li>
                            <li>Las rutas se organizan únicamente para miembros de la comunidad, de desear llevar un invitado, consultarlo previamente.</li>
                            <li>Respeto como uno de los valores principales, respeta a los demás, participantes y equipo de apoyo.</li>
                            <li>Nuestras rutas son únicamente para mayores de edad, en caso de ser menor, deberá formar parte de “Valencia Hike Kidz” donde realizamos rutas para niños y familias.</li>
                        </ul>
                        <br />
                        <p>Les recordamos que usted no está asistiendo a la montaña con un grupo de amigos que se saben la ruta, sino con una organización seria y responsable con gente capacitada para tal labor.</p>
                        <br />

                        <h1>Segmentación por niveles</h1>
                        <p>En el senderismo/montañismo, hay que ser más cauteloso que en otras disciplinas con respecto a cuando se invita a alguien a su práctica, ya que en un entrenamiento, juego o clase de crossfit, gimnasio, futbol, tenis, entre otras disciplinas, uno puede sencillamente dejar de hacerlo porque se cansó y salirse del box, gimnasio o cancha, pero en esta práctica, cuando uno ya está cansado, si aún no ha llegado a su destino implica que no podría dejar de hacerlo y retirarse, sino continuar, aún cuando no se pueda mas, hasta llegar al destino. Entonces nosotros buscamos, según las respuestas dadas a ciertas preguntas en el formulario de registro, ubicar al participante en un nivel que reciba las invitaciones para las rutas a las que se considere pueda culminar exitosamente sin mayor problema, buscando siempre que se lleve la mejor experiencia y no se vuelva una situación en la que no quiera estar involucrado nuevamente.</p>
                        <p>Tomando eso en cuenta, definimos, 5 niveles según las exigencias de ruta (Distancia, desnivel, dificultad técnica, terreno, exposición, tiempo, entre otras), tomando dichas exigencias en cuenta, se determinará los niveles a invitar.</p>
                        <ul>
                            <li><b>Nivel 1:</b> Rutas cortas y de baja intensidad, para personas sedentarias que acostumbren a caminar en plano, tomando en cuenta que puede o no culminarla y tendrá siempre apoyo del equipo, éstas se realizan con poca frecuencia ya que son pocas las rutas de la ciudad que lo permitan.</li>
                            <li><b>Nivel 2:</b> Se amplía un poco la gama de rutas, sumamos un poco de distancia o intensidad, para personas con poca o nula experiencia en senderismo/montañismo, pero con algo de actividad física que realice habitualmente.</li>
                            <li><b>Nivel 3:</b> Gran mayoría de las rutas de la ciudad, para personas con experiencia en senderismo/montañismo, deportistas, o personas que practiquen deportes de intensidad habitualmente.</li>
                            <li><b>Nivel 4:</b> La totalidad de las rutas, personas que ya hayan participado en actividades donde muestren un desempeño apto para este tipo de rutas.</li>
                            <li><b>Nivel 5:</b> Personas que puedan desarrollar cualquier ruta de alta distancia o intensidad a ritmo rápido.</li>
                        </ul>
                        <p><b>Nota:</b> Entenderán que dada la cantidad de participantes, nunca será posible una atención del todo personalizada 1 a 1, pero siempre tendrás a alguien cerca o al alcance, en caso de no poder continuar en una ruta por cualquiera que sea el motivo, un personal del equipo tendrá que acompañarte a descender o a esperar allí al grupo cuando bajen para descender junto al resto, esto implicaría que ese personal tenga que abandonar al resto del grupo, lo que no sería adecuado para el resto del grupo, por este motivo también, es una situación que se busca evitar.</p>
                        <p>Si consideras que estas apto para realizar rutas de mayor dificultad puedes comunicarte con nosotros para pedir un ascenso de nivel previa aprobación.</p>

                        <br />

                        <h1>Política de pagos y "No Asistencia"</h1>
                        <p>Hay rutas donde pueden incurrir distintos tipos de costos, como puede serlo un transporte, estacionamiento, uso de algunas instalaciones, permisología, contratación de personal externo, alimentación y/o hidratación, entre otros. En dichos casos se establecerá un costo para la actividad y será necesario pagarlo para poder reservar el cupo, no se reservarán cupos a personas que confirmen verbalmente por WhatsApp, nos disculpamos de antemano si usted confirma vía WhatsApp, pero antes de realizar el pago se agotan los cupos.</p>
                        <p>Esperamos entiendan la necesidad de esta dinámica, pues de no ser así, estamos expuestos a que la persona cancele su participación con poco tiempo de anticipación y la organización deberá cubrir dicho costo ante el servicio contratado.</p>
                        <p>Reembolsos: <b>No se realizan reembolsos de las actividades ya pagadas y tampoco podrá ser abonado para otras actividades</b>, la única situación donde podemos reembolsar será cuando el participante cancele su participación con un tiempo prudente que permita ceder su cupo y dicho costo ser cubierto por el nuevo participante. No se realizan reembolsos por llegar tarde a una actividad iniciada.</p>
                        <p>Si la ruta tiene un costo donde se incluya algún servicio (transporte, vigilancia de vehículo, entre otros) el cual usted no vaya a usar, igual se deberá cancelar dicho costo por medidas de organización, a pesar del ser libre el cerro, será muy mal visto aprovechar nuestra organización para hacer la misma ruta en el mismo momento por su cuenta.</p>

                        <br />

                        <h1>Mascotas</h1>
                        <p>Las mascotas no estarán permitidas en las rutas dentro de Parques Nacionales, Parques Municipales, o que incluyan transporte, de resto son bienvenidas, siempre y cuando ya acostumbren a realizar dicha práctica con usted. Tenemos que hacer saber que no estamos de acuerdo en muchas ocasiones con incluirlas dado que hay animales que no se limitan y el esfuerzo físico o condiciones climáticas pueden ponerlos en situaciones complicadas para su salud.</p>

                        <br />

                        <h1>Cancelación de rutas por condiciones climáticas</h1>
                        <p>Todas las rutas organizadas serán rutas que se realizarán, no se cancela por ningún motivo a menos que haya una causa de fuerza mayor, con respecto a las condiciones climáticas, la ruta siempre se mantendrá en pie hasta el momento de inicio de la misma, en caso de condiciones adversas a la hora de iniciar, se consultará con los participantes sobre sus preferencias, siempre y cuando no consideremos que sea un riesgo para los participantes.</p>

                        <br />

                        <h1>Capacidad máxima de asistentes</h1>
                        <p>Cada ruta tiene una cantidad máxima de asistentes, al llegar a dicha cantidad de participantes confirmados, no se recibirán más participantes. Hay varios factores que influyen en esta cantidad, como lo son la capacidad de carga del espacio, todos los espacios que se visitan tienen una capacidad de carga que hace referencia a la máxima cantidad de personas que pueden estar en un sitio sin convertirse en un daño o peligro, también se toma en cuenta la cantidad de personal de apoyo disponible, buscamos siempre tener un máximo de 10 participantes por cada persona de apoyo (varía según la ruta), y por último las características de la ruta, si tiene múltiples caminos o la falta de un camino marcado, la dificultad, distancia, entre otros.</p>
                        <p>Agradecemos respetar la capacidad máxima de ruta.</p>

                        <br />

                        <h1>Personal de apoyo</h1>
                        <p>Contamos con un equipo de 12 personas de apoyo, que variaran entre las rutas, en nuestro IG podrás conocer un poco más sobre ellos, profesionales de distintas áreas con un tiempo prudencial formando parte de la organización, y siendo parte también de todos los talleres y cursos aplicados a la guiatura por montaña que se dicten para nuestro personal.</p>
                        <p>En ocasiones, si la ruta lo amerita, podemos recurrir a personas que tengan tiempo y experiencia en la organización para que formen parte del equipo de apoyo en esa oportunidad.</p>

                        <br />

                        <h1>Exención de responsabilidades</h1>
                        <p>Contamos con un documento de liberación de responsabilidad que todo participante debe leer, firmar y sellar con su huella para su participación en nuestras actividades, dicho documento se hará firmar en la primera oportunidad junto al grupo y no será necesario firmarlo nuevamente.</p>

                        <br />

                        <h1>Recomendaciones generales</h1>
                        <p>Para cada ruta van a variar las recomendaciones, pero hay algunas básicas que pueden tomarse en cuenta.</p>
                        <ul>
                            <li>No asistir a rutas en ayuno, a menos que usted ya tenga el conocimiento y práctica de hacer ejercicios de intensidad y/o tiempo en este estado, tomar un desayuno de alimentos que acostumbre a consumir con al menos 40 minutos previos a la actividad.</li>
                            <li>Comida de marcha (En nuestro IG podrás encontrar información al respecto, puedes buscar con el Hashtag #ValenciaHikeTips).</li>
                            <li>Hidratación, así usted piense ser una persona que toma poca agua, es necesario que para toda ruta lleve al menos 2 litros de agua, más vale no usarla que necesitarla, la cantidad aumentará según la distancia/duración de ruta.</li>
                            <li>Cubrirse del sol ya sea con vestimenta (franela manga larga, gorra, buff, sombrero, etc) o con protector solar.</li>
                            <li>Uso de bastones para quien acostumbre a usarlos (Podrás encontrar información al respecto en nuestro IG, puedes buscar con el Hashtag #ValenciaHikeTips).</li>
                            <li>De no poseer calzado específico para la actividad, usar calzado deportivo, cómodo, que use con regularidad (los más viejitos pueden no ser la mejor opción, al igual que zapatos con mucho tiempo sin usar así estén “nuevos”) (Podrás encontrar información al respecto en nuestro IG, puedes buscar con el Hashtag #ValenciaHikeTips).</li>
                            <li>Vestimenta adecuada, deportiva, cómoda.</li>
                            <li>En gran cantidad de nuestras rutas servimos café, y será necesario que cada quien lleve su taza para evitar el consumo excesivo de vasos desechables (No contamos con azúcar).</li>
                            <li>Bolso cómodo para caminar para llevar la hidratación, comida, entre otras cosas necesarias.</li>
                            <li>Nuestro equipo cuenta con los conocimientos y equipos para brindar primeros auxilios en caso de ser necesarios, pero igual recomendamos a los participantes llevar sus medicinas de consumo regular, así como si solo una medicina específica le alivia algún síntoma específico (Por ej: Si la alergia se le quita únicamente con “Celestamine” y no se le quita con ningún otro remedio, cargue dicha medicina con usted).</li>
                            <li>Hay 2 recomendaciones que son básicas en el senderismo, que a pesar de que aquí velamos porque no las necesite, recomendamos llevarlas: Silbato y linterna (Esta última se recomendará en actividades específicas donde si será necesario).</li>
                            <li>En época de lluvia siempre tome en cuenta esa posibilidad y lleve ropa de cambio, poncho y bolsas plásticas para sus pertenencias.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

  </Main>);
}

export default Guidelines;
