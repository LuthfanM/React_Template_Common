import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const SwiperComp = ({ children }) => {
    return (
        <Swiper 
           cssMode={true}
           navigation={true}
           pagination={true}
           mousewheel={true}
           keyboard={true}
           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
           className="mySwiper">
            {children}
        </Swiper>
    );
}

export default SwiperComp;