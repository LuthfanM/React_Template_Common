import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

const SwiperComp = ({ children }, props) => {
    const { isPagination } = props;
    return (
        <SwiperSlide>
            {({ isActive }) => (
                {children}
            )}
        </SwiperSlide>)
}

export default SwiperComp;