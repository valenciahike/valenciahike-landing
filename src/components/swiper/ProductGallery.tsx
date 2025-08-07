// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { useRouter } from 'next/router';
import { useState } from 'react';
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


function ProductGallery({ images }: any) {
    const router = useRouter();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <Swiper
                rewind
                spaceBetween={16}
                navigation
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[Navigation, Thumbs]}
                className="mb-2 md:mb-4"
            >
                {images.map((image: any, i: any) => (
                    <SwiperSlide key={i}>
                        <img className="rounded-2xl select-none" src={`${router.basePath}/assets/images/products/${image.filename}`} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                rewind
                freeMode
                spaceBetween={10}
                slidesPerView={4}
                slidesPerGroup={4}
                pagination={{ clickable: true }}
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="productDetails--swiper !pb-8"
            >
                {images.map((image: any, i: any) => (
                    <SwiperSlide className="cursor-pointer" key={i}>
                        <img className="rounded-lg" src={`${router.basePath}/assets/images/products/${image.filename}`} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ProductGallery