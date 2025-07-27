// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";


function ProductGallery({ images }: any) {
    const router = useRouter();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <Swiper
                loop
                spaceBetween={16}
                navigation
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mb-2 md:mb-4"
            >
                {images.map((image: any, i: any) => (
                    <SwiperSlide key={i}>
                        <img className="rounded-2xl select-none" src={`${router.basePath}/assets/images/products/${image.filename}`} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                // @ts-ignore
                onSwiper={setThumbsSwiper}
                loop
                freeMode
                spaceBetween={10}
                slidesPerView={3}
                slidesPerGroup={3}
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