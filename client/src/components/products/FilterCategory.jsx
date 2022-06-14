import { Box, Button } from '@mui/material'
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

const FilterCategory = () => {
  return (
    <>
      <Box mt={3}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            320:{
              slidesPerView: 2,
              spaceBetween: 5,
            },
            400:{
              slidesPerView: 3,
              spaceBetween: 5,
            },
            530: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            750: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            800:{
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className='filter-button'><Button className='button-active button-controll'>Semua</Button></SwiperSlide>
          <SwiperSlide className='filter-button'><Button className='button-controll'>Hobi</Button></SwiperSlide>
          <SwiperSlide className='filter-button'><Button className='button-controll'>Kendaraan</Button></SwiperSlide>
          <SwiperSlide className='filter-button'><Button className='button-controll'>Baju</Button></SwiperSlide>
          <SwiperSlide className='filter-button'><Button className='button-controll'>Elektronik</Button></SwiperSlide>
          <SwiperSlide className='filter-button'><Button className='button-controll'>Kesehatan</Button></SwiperSlide>
        </Swiper>
      </Box>
    </>

  )
}

export default FilterCategory