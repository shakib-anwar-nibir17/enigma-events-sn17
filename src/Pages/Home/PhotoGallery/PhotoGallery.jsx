import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slider1 from "../../../assets/slider/slider1.jpg";
import slider2 from "../../../assets/slider/slider2.jpg";
import slider3 from "../../../assets/slider/slider3.jpg";
import slider4 from "../../../assets/slider/slider4.jpg";
import slider5 from "../../../assets/slider/slider5.jpg";
import slider6 from "../../../assets/slider/slider6.jpg";
import slider7 from "../../../assets/slider/slider7.jpg";
import slider8 from "../../../assets/slider/slider8.jpg";
import slider9 from "../../../assets/slider/slider9.jpg";

const PhotoGallery = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PhotoGallery;
