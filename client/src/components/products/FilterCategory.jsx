import { Box, Button } from '@mui/material'
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

const FilterCategory = () => {
  const [clicked, setClicked] = React.useState('');
  let items = [];
  let keys = ['', 'Hobi', 'Kendaraan', 'Baju', 'Elektronik', 'Kesehatan']
  keys.map((item)=>{
    items.push(
      <SwiperSlide className='filter-button'><Button className={item === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>setClicked(item)}>{item === '' ? 'Semua' : item}</Button></SwiperSlide>
    )
  })

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
          {items}
        </Swiper>
      </Box>
    </>

  )
}

export default FilterCategory

