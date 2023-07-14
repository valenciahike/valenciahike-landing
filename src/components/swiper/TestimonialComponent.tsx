// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonialItemComponent from '../testimonialItemComponent';

const testimonials = [
    {
        name: 'Adriana Sánchez',
        content: 'La vida es un constante cambio y cuando perdemos muchas cosas de golpe nos queda el corazón vacío y comenzamos a buscar. Así me sentí hace unos años… Sabia que me encantaba la montaña pero no tenía ni idea de cómo manejarme en ella. Recorrí muchos caminos pero un día supe de VH y desde ese día me enamoré de la extraordinaria organización y del amor a la montaña y a la amorosa y desinteresada labor de todo el equipo de apoyo para que todos podamos disfrutar de nuestras amadas montañas. Valencia Hike es una familia.'
    },
    {
        name: 'Ana Quintero',
        content: 'Valencia Hike no solo es una fundación... Es un refugio y un estilo de vida. Llegué a ésta familia en el momento que más lo necesitaba. Quería hacer una actividad que me permitiera distraerme y no estuviese relacionada con lo que ya hacía en la semana. Lo que no sabía es que después se convertiría en parte esencial de mi rutina. Con ellos jamás te sentirás inseguro... Cada ruta es estudiada y supervisada a la perfección, con un staff increíble y preparado. Además, te impulsan a alcanzar nuevos objetivos y a creer en ti. Definitivamente, mi mejor elección o casualidad fue encontrarlos.'
    },
    {
        name: 'Hector Platt',
        content: 'Valencia Hike para mi ha sido la escuela para conocer las montañas de Valencia desde el 2019 con su manera divertida y profesional. Me ha llevado a agarrarle el gusto a las carreras de trail running porque definitivamente la montaña te llama y más a mi que la veo desde que abro la ventana de mi habitación, Valencia Hike es familia, trabajo en equipo, ayudar al prójimo y servir de una manera incondicional a cada persona que comienza desde cero y hacen que se enamore literalmente de nuestras queridas montañas. Gracias VH nos vemos en la montaña.'
    },
    {
        name: 'Cruz Ivan Castaño',
        content: 'Con Valencia hike he vuelto a descubrir que un día nublado o una densa niebla, con una buena brisa también me revela el infinito azul del horizonte. Que los diferentes tonos de verde me pueden llevar por los mejores  caminos, laderas, rocas y toyotas. Que en un día soleado cada paso cuenta y que en un terreno húmedo, mojado o resbaloso el culi-cross también cuenta. Y esa es la magia de un sendero y la recompensa que recibe un senderista todo esto y muchos, sin olvidar el valor agregado de compartir la experiencia en una cola de café y las innumerables imágenes que nos llevamos en el baúl de la memoria.'
    },
    {
        name: 'Stephany Colorado',
        content: 'Solo tengo por decir que ha sido súper enriquecedora desde la primera ruta que realice con el team por allá en 2020, desde entonces se han convertido en mi familia de montaña, muchísimas experiencias compartidas y siempre disfrutadas, cada ruta completamente distinta una de otra así el recorrido sea el mismo, pero sin duda lo único que no cambia es la satisfacción de lograrlo acompañada de personas increíbles siempre con buena actitud, energía y disposición! Que sigamos sumando km juntos familia ❤️'
    }
]

export default function TestimonialsComponent() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1.4}
            spaceBetween={16}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay
            speed={1250}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            wrapperClass="swiper-wrapper items-center py-6"
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    slidesOffsetBefore: 24,
                    slidesOffsetAfter: 24,
                    pagination: false,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    slidesOffsetBefore: 32,
                    slidesOffsetAfter: 32,
                    pagination: false,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    slidesOffsetBefore: 48,
                    slidesOffsetAfter: 48,
                    pagination: false,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    slidesOffsetBefore: 66,
                    slidesOffsetAfter: 66,
                    pagination: false,
                },
            }}
        >
            {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i}>
                    <TestimonialItemComponent name={testimonial.name} content={testimonial.content} />
                </SwiperSlide>
            ))}

        </Swiper>
    );
};