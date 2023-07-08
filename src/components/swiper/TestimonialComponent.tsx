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
        name: 'Juan Pedro',
        content: 'Asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam, deserunt ex soluta exercitationem fugiat adipisci inventore dignissimos.'
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam.'
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. '
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam, deserunt ex soluta exercitationem fugiat adipisci inventore dignissimos.'
    },
    {
        name: 'Juan Pedro',
        content: 'Asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam, deserunt ex soluta exercitationem fugiat adipisci inventore dignissimos.'
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam.'
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. '
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam, deserunt ex soluta exercitationem fugiat adipisci inventore dignissimos.'
    },
    {
        name: 'Juan Pedro',
        content: 'Asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam, deserunt ex soluta exercitationem fugiat adipisci inventore dignissimos.'
    },
    {
        name: 'Juan Pedro',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus explicabo voluptates optio hic fuga, asperiores officia corrupti ipsum rem, mollitia libero esse illo dolor inventore corporis suscipit cum doloribus similique nihil id adipisci. Expedita alias odit, qui sint consequatur accusamus dolor numquam.'
    },
]

export default function FeaturesComponent() {
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
            wrapperClass="swiper-wrapper py-6"
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