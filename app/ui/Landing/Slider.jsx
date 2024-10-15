"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Slider() {
  return (
    <div>
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={"/home/items"}>
            <Image src={"/item-4.png"} alt={"item"} width={500} height={500} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/home/items"}>
            <Image src={"/item-3.png"} alt={"item"} width={500} height={500} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/home/items"}>
            <Image src={"/item-5.png"} alt={"item"} width={500} height={500} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/home/items"}>
            <Image src={"/item-6.png"} alt={"item"} width={500} height={500} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/home/items"}>
            <Image src={"/item-1.png"} alt={"item"} width={500} height={500} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/home/items"}>
            <Image src={"/item-2.png"} alt={"item"} width={500} height={500} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
