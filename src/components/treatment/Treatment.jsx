import React from "react";
import "./treatment.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Treatment = () => {
  return (
    <section id="treatment">
      <h5>Treatment options</h5>
      <Swiper
        className="container treatment_container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="treatment-option">
          <div className="excision-surgery">
            <img src="" alt="" />
          </div>
          <h5 className="treatment_name">Excision Surgery</h5>
          <small className="treatment_info">
            The surgery involves cutting out visible areas of endometriosis.
            This surgery is normally done Laparoscopy and is therefore minimally
            invasive.
          </small>
        </SwiperSlide>
        <SwiperSlide className="treatment-option">
          <div className="ablation-surgery">
            <img src="" alt="" />
          </div>
          <h5 className="treatment_name">Ablation Surgery</h5>
          <small className="treatment_info">
            The surgery involves burning off areas of Endometriosis. This
            surgery is done Laparoscopically, meaning its minimally invasive.
            However, many endometriosis specialists suggest this surgical option
            may not remove all of the endometriosis in the area, rather just the
            surface.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
