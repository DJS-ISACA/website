import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Team = () => {
  return (
    <section className=" flex flex-col pt-20  gap-20 px-20 items-center">
      <p className="text-5xl font-bold tracking-widest text-center text-black uppercase">
        Welcome starts with “we.”
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={false}
        autoplay={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="assets\IMG_2869.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3420.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3422.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3436.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3445.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3457.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3463.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3465.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3479.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3577.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3582.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3479.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3586.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3595.HEIC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets\IMG_3601.HEIC" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Team;
